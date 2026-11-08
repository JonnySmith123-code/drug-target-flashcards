// Cross-device sync through a private GitHub Gist on the user's own account.
// The token never leaves this device except to api.github.com, and it's stored apart from
// progress (so it isn't exported or synced). app.js supplies merge/export of the progress doc.
(function () {
  "use strict";
  const CFG_KEY = "drugTargetFlashcards.sync";
  const FILE = "drug-target-flashcards.json";
  const API = "https://api.github.com";
  let cfg = load();
  let hooks = null;
  let busy = false, again = false, timer = null;
  let status = { state: cfg ? "idle" : "off", msg: "" };

  function load() { try { return JSON.parse(localStorage.getItem(CFG_KEY)) || null; } catch (e) { return null; } }
  const persist = () => (cfg ? localStorage.setItem(CFG_KEY, JSON.stringify(cfg)) : localStorage.removeItem(CFG_KEY));
  function setStatus(state, msg = "") { status = { state, msg }; if (hooks && hooks.onStatus) hooks.onStatus(status); }

  async function api(path, opts = {}, token = cfg && cfg.token) {
    const res = await fetch(API + path, {
      ...opts,
      cache: "no-store",
      headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${token}`, "X-GitHub-Api-Version": "2022-11-28", ...(opts.body ? { "Content-Type": "application/json" } : {}) }
    });
    if (!res.ok) {
      const err = new Error(res.status === 401 ? "GitHub rejected the token" : res.status === 404 ? "Sync gist not found (or token lacks the gist scope)" : `GitHub error ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return res.status === 204 ? null : res.json();
  }

  async function readGist() {
    const g = await api(`/gists/${cfg.gistId}`);
    const f = g.files && g.files[FILE];
    if (!f) return null;
    let text = f.content;
    if (f.truncated && f.raw_url) text = await (await fetch(f.raw_url, { cache: "no-store" })).text();
    try { return JSON.parse(text); } catch (e) { return null; }
  }

  async function connect(token) {
    token = (token || "").trim();
    if (!token) throw new Error("Paste a token first");
    setStatus("syncing", "Connecting…");
    try {
      const user = await api("/user", {}, token);
      // Reuse an existing sync gist (e.g. created on the other device) if there is one.
      let gistId = null;
      for (let page = 1; page <= 5 && !gistId; page++) {
        const list = await api(`/gists?per_page=100&page=${page}`, {}, token);
        const hit = list.find((g) => g.files && g.files[FILE]);
        if (hit) gistId = hit.id;
        if (list.length < 100) break;
      }
      if (!gistId) {
        const g = await api("/gists", { method: "POST", body: JSON.stringify({ description: "Drug Target Flashcards progress (synced by the app)", public: false, files: { [FILE]: { content: JSON.stringify(hooks.exportDoc()) } } }) }, token);
        gistId = g.id;
      }
      cfg = { token, gistId, login: user.login, lastSync: 0 };
      persist();
      await syncNow();
    } catch (e) {
      setStatus(cfg ? "error" : "off", e.message);
      throw e;
    }
  }

  function disconnect() { cfg = null; persist(); setStatus("off"); }

  // Pull → merge → push (only if something differs).
  async function syncNow() {
    if (!cfg || !hooks) return;
    if (busy) { again = true; return; }
    if (!navigator.onLine) { setStatus("offline", "Offline. Will sync when you're back online."); return; }
    busy = true;
    setStatus("syncing");
    try {
      const remote = await readGist();
      if (remote) hooks.merge(remote);
      const doc = hooks.exportDoc();
      const text = JSON.stringify(doc);
      if (!remote || JSON.stringify(remote) !== text) {
        await api(`/gists/${cfg.gistId}`, { method: "PATCH", body: JSON.stringify({ files: { [FILE]: { content: text } } }) });
      }
      cfg.lastSync = Date.now();
      persist();
      setStatus("ok");
    } catch (e) {
      setStatus("error", e.message || "Sync failed");
    } finally {
      busy = false;
      if (again) { again = false; schedule(1500); }
    }
  }

  function schedule(ms = 3000) {
    if (!cfg) return;
    clearTimeout(timer);
    timer = setTimeout(syncNow, ms);
  }

  function init(h) {
    hooks = h;
    if (cfg) syncNow();
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") syncNow(); });
    window.addEventListener("online", () => syncNow());
    window.addEventListener("pagehide", () => { if (timer) { clearTimeout(timer); syncNow(); } });
  }

  window.Sync = {
    init, connect, disconnect, syncNow, schedule,
    get connected() { return !!cfg; },
    get info() { return cfg ? { login: cfg.login, gistId: cfg.gistId, lastSync: cfg.lastSync } : null; },
    get status() { return status; }
  };
})();
