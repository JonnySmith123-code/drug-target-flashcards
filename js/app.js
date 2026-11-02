(function () {
  "use strict";

  const STORE_KEY = "drugTargetFlashcards.v1";
  const T = window.FC_TARGETS;
  const P = window.FC_PATHWAYS;
  const C = window.FC_CONCEPTS;
  const { MIN, DAY, MASTERED_DAYS } = window.SRS;

  const targetById = Object.fromEntries(T.map((t) => [t.id, t]));
  const pathwayById = Object.fromEntries(P.map((p) => [p.id, p]));
  const AREAS = [...new Set(T.map((t) => t.area))];

  // ───────────── helpers ─────────────
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const flow = (steps) => `<ol class="flow">${steps.map((s) => `<li>${fmt(s)}</li>`).join("")}</ol>`;
  const bullets = (items) => `<div class="bullets">${items.map((i) => `<p>${fmt(i)}</p>`).join("")}</div>`;
  const drugTable = (drugs) =>
    `<table class="drugs"><thead><tr><th>Drug</th><th>Action</th><th>Used for</th></tr></thead><tbody>${drugs
      .map((d) => `<tr><td><strong>${esc(d.name)}</strong></td><td>${fmt(d.action)}</td><td>${fmt(d.use)}</td></tr>`)
      .join("")}</tbody></table>`;
  const $ = (sel) => document.querySelector(sel);
  function todayKey(d = new Date()) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function endOfToday() { const d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime(); }

  // ───────────── build the deck ─────────────
  const CARDS = [];
  const cardById = {};
  const add = (c) => { CARDS.push(c); cardById[c.id] = c; };

  function conceptCards(c) {
    add({ id: `c:${c.id}`, kind: "Concept", group: `concept:${c.id}`, label: c.title, front: fmt(c.question), back: bullets(c.answer) });
  }
  const hasDgm = (pid) => window.Diagram && Diagram.has(pid);
  const dgm = (pid, attrs = {}) =>
    `<div class="dgm" data-pid="${pid}" ${Object.entries(attrs).map(([k, v]) => `data-${k}="${esc(v)}"`).join(" ")}></div>`;
  const textSteps = (steps) => `<details class="as-text"><summary>Steps as text</summary>${flow(steps)}</details>`;

  function pathwayCards(p) {
    const group = `pathway:${p.id}`;
    add({
      id: `p:${p.id}:steps`, kind: "Pathway", group, label: p.name,
      front: `Walk through the <strong>${esc(p.name)}</strong> pathway, step by step.`,
      back: `<p class="summary">${fmt(p.summary)}</p>${hasDgm(p.id) ? dgm(p.id, { mode: "explore" }) + textSteps(p.steps) : flow(p.steps)}<p class="meta"><span>Drugs acting here</span>${fmt(p.drugs)}</p>`
    });
    add({ id: `p:${p.id}:why`, kind: "Pathway · why", group, label: p.name, front: fmt(p.question), back: `<p>${fmt(p.answer)}</p>` });
    // Visual "where does it act?" cards, one per drug marked on the diagram.
    const D = hasDgm(p.id) && window.FC_DIAGRAMS[p.id];
    (D && D.drugs ? D.drugs : []).forEach((dr, i) =>
      add({
        id: `p:${p.id}:where:${slug(dr.d)}`, kind: "Where it acts", group, label: p.name,
        front: `Where on this pathway does <strong>${esc(dr.d)}</strong> act, and what does it do?${dgm(p.id, { mode: "overview" })}`,
        back: dgm(p.id, { mode: "drug", drug: i })
      })
    );
  }
  function targetDiagram(t) {
    const loc = window.Diagram && Diagram.forTarget(t.id, t.pathways);
    if (!loc) return "";
    return `<p class="meta dgm-intro"><span>In context: ${esc(pathwayById[loc.pid].name)}</span>${esc(t.short)} is highlighted.</p>${dgm(loc.pid, { mode: "target", highlight: loc.node })}`;
  }

  function targetCards(t) {
    const group = `target:${t.id}`;
    const label = `${t.short} · ${t.area}`;
    add({
      id: `t:${t.id}:overview`, kind: "Target", group, label,
      front: `What is <strong>${esc(t.name)}</strong> <span class="gene">${esc(t.gene)}</span>, and what does it normally do?`,
      back: `<dl class="facts"><dt>Class</dt><dd>${fmt(t.family)}</dd><dt>Where</dt><dd>${fmt(t.location)}</dd><dt>Normal role</dt><dd>${fmt(t.role)}</dd></dl>`
    });
    add({
      id: `t:${t.id}:signal`, kind: "Signalling", group, label,
      front: `Walk through the signalling at <strong>${esc(t.short)}</strong>, from ligand to effect.`,
      back: flow(t.signalling) + targetDiagram(t)
    });
    add({
      id: `t:${t.id}:drugs`, kind: "Drug strategy", group, label,
      front: `How do drugs target <strong>${esc(t.short)}</strong>? Name the main drugs and what they do.`,
      back: `<p>${fmt(t.mechanism)}</p>${drugTable(t.drugs)}`
    });
    add({
      id: `t:${t.id}:why`, kind: "Mechanism · why", group, label, front: fmt(t.question),
      back: `<p>${fmt(t.answer)}</p><p class="pearl"><span>Clinical pearl</span>${fmt(t.pearl)}</p>`
    });
    t.drugs.forEach((d) =>
      add({
        id: `t:${t.id}:drug:${slug(d.name)}`, kind: "Drug", group, label,
        front: `<strong>${esc(d.name)}</strong>: what is its target, what does it do there, and what is it used for?`,
        back: `<dl class="facts"><dt>Target</dt><dd>${esc(t.name)} (${esc(t.short)})</dd><dt>Action</dt><dd>${fmt(d.action)}</dd><dt>Used for</dt><dd>${fmt(d.use)}</dd></dl><p class="meta"><span>How it works</span>${fmt(t.mechanism)}</p>`
      })
    );
  }

  // Guided order: foundational concepts → for each target, its pathways (first time seen) then its cards.
  (function buildDeck() {
    const seen = new Set();
    C.filter((c) => !c.after).forEach(conceptCards);
    T.forEach((t) => {
      t.pathways.forEach((pid) => {
        if (!seen.has(pid) && pathwayById[pid]) { seen.add(pid); pathwayCards(pathwayById[pid]); }
      });
      targetCards(t);
      C.filter((c) => c.after === t.id).forEach(conceptCards);
    });
    P.filter((p) => !seen.has(p.id)).forEach(pathwayCards);
    C.filter((c) => c.after && !targetById[c.after]).forEach(conceptCards);
  })();

  // ───────────── persistence ─────────────
  function normalize(s) {
    s = s && typeof s === "object" ? s : {};
    s.cards = s.cards || {};
    s.settings = { newPerDay: 15, ...(s.settings || {}) };
    s.history = s.history || {};
    rollDay(s);
    return s;
  }
  function rollDay(s) {
    if (!s.daily || s.daily.date !== todayKey()) s.daily = { date: todayKey(), newDone: 0, extraNew: 0 };
  }
  function load() {
    try { return normalize(JSON.parse(localStorage.getItem(STORE_KEY))); } catch (e) { return normalize({}); }
  }
  let S = load();
  const save = () => localStorage.setItem(STORE_KEY, JSON.stringify(S));
  const stateOf = (id) => S.cards[id];
  const isNew = (id) => !S.cards[id] || S.cards[id].state === "new";
  const isLearning = (s) => s && (s.state === "learning" || s.state === "relearning");
  const isMastered = (id) => { const s = S.cards[id]; return s && s.state === "review" && s.interval >= MASTERED_DAYS; };

  // ───────────── queue ─────────────
  function newLeftToday() {
    rollDay(S);
    return Math.max(0, S.settings.newPerDay + S.daily.extraNew - S.daily.newDone);
  }
  function counts() {
    const now = Date.now(), eod = endOfToday();
    let learn = 0, review = 0, unseen = 0;
    for (const c of CARDS) {
      const s = stateOf(c.id);
      if (!s || s.state === "new") unseen++;
      else if (isLearning(s)) { if (s.due <= now) learn++; }
      else if (s.due <= eod) review++;
    }
    return { learn, review, newToday: Math.min(newLeftToday(), unseen), unseen };
  }
  function pickNext() {
    const now = Date.now(), eod = endOfToday();
    const learnDue = [], reviews = [], ahead = [];
    for (const c of CARDS) {
      const s = stateOf(c.id);
      if (!s || s.state === "new") continue;
      if (isLearning(s)) { if (s.due <= now) learnDue.push(c); else if (s.due <= now + 20 * MIN) ahead.push(c); }
      else if (s.due <= eod) reviews.push(c);
    }
    const byDue = (a, b) => stateOf(a.id).due - stateOf(b.id).due;
    if (learnDue.length) return learnDue.sort(byDue)[0];
    const newLeft = newLeftToday();
    const fresh = newLeft > 0 ? CARDS.find((c) => isNew(c.id)) : null;
    if (reviews.length && fresh) {
      return Math.random() < newLeft / (newLeft + reviews.length) ? fresh : reviews.sort(byDue)[0];
    }
    if (reviews.length) return reviews.sort(byDue)[0];
    if (fresh) return fresh;
    if (ahead.length) return ahead.sort(byDue)[0];
    return null;
  }

  // ───────────── study session state ─────────────
  let current = null;
  let revealed = false;
  let practice = null; // { title, queue: [ids], total, done }
  let view = "study";
  let viewArg = null;
  let filterArea = "All";
  let search = "";

  function gradeCard(rating) {
    if (!current || !revealed) return;
    if (practice) {
      const id = practice.queue.shift();
      if (rating === 1) practice.queue.push(id); else practice.done++;
    } else {
      const now = Date.now();
      const wasNew = isNew(current.id);
      S.cards[current.id] = SRS.schedule(stateOf(current.id), rating, now);
      if (wasNew) S.daily.newDone++;
      S.history[todayKey()] = (S.history[todayKey()] || 0) + 1;
      save();
    }
    current = null;
    revealed = false;
    render();
    window.scrollTo(0, 0);
  }
  function reveal() { if (current && !revealed) { revealed = true; render(); } }

  function startPractice(title, ids) {
    practice = { title, queue: [...ids].sort(() => Math.random() - 0.5), total: ids.length, done: 0 };
    current = null; revealed = false;
    go("study");
  }
  function endPractice() { practice = null; current = null; revealed = false; render(); }

  // ───────────── rendering ─────────────
  function go(v, arg = null) { view = v; viewArg = arg; window.scrollTo(0, 0); render(); }

  function render() {
    document.querySelectorAll("nav [data-view]").forEach((b) => {
      const v = b.dataset.view;
      b.classList.toggle("active", v === view || (v === "targets" && view === "target") || (v === "pathways" && view === "pathway"));
    });
    const main = $("#main");
    if (view === "study") main.innerHTML = renderStudy();
    else if (view === "targets") main.innerHTML = renderTargets();
    else if (view === "target") main.innerHTML = renderTarget(targetById[viewArg]);
    else if (view === "pathways") main.innerHTML = renderPathways();
    else if (view === "pathway") main.innerHTML = renderPathway(pathwayById[viewArg]);
    else if (view === "concepts") main.innerHTML = renderConcepts();
    else if (view === "progress") main.innerHTML = renderProgress();
    if (window.Diagram) Diagram.mountAll(main);
    updateBadge();
  }

  function updateBadge() {
    const c = counts();
    const n = c.learn + c.review + c.newToday;
    $("#due-badge").textContent = n > 0 ? n : "";
  }

  function renderCard(card, gradeLabels) {
    const typeClass = slug(card.kind.split(" ")[0]);
    return `
      <div class="card ${revealed ? "revealed" : "tappable"}" ${revealed ? "" : 'data-act="reveal"'}>
        <div class="card-meta"><span class="kind kind-${typeClass}">${esc(card.kind)}</span><span class="label">${esc(card.label)}</span></div>
        <div class="front">${card.front}</div>
        ${revealed ? `<div class="divider"></div><div class="back">${card.back}</div>` : ""}
      </div>
      <div class="actions">
        ${!revealed
          ? `<button class="btn primary wide" data-act="reveal">Show answer <kbd class="desk">Space</kbd></button>`
          : `<div class="grades">
              ${[[1, "Again"], [2, "Hard"], [3, "Good"], [4, "Easy"]].map(([r, l]) =>
                `<button class="btn grade g${r}" data-grade="${r}"><span>${l}</span><small>${gradeLabels ? gradeLabels[r] : ""}</small><kbd class="desk">${r}</kbd></button>`).join("")}
            </div>`}
      </div>`;
  }

  function renderStudy() {
    if (practice) {
      if (!practice.queue.length) {
        return `<section class="done"><h2>Practice complete</h2><p>${esc(practice.title)}: ${practice.total} cards reviewed.</p>
          <p class="muted">Practice sessions don't change your schedule.</p>
          <button class="btn primary" data-act="end-practice">Back to study</button></section>`;
      }
      current = cardById[practice.queue[0]];
      return `<div class="study-bar practice"><span>Practice: <strong>${esc(practice.title)}</strong> · ${practice.done}/${practice.total} done · ${practice.queue.length} left</span>
        <button class="btn small" data-act="end-practice">Exit practice</button></div>
        ${renderCard(current, { 1: "repeat", 2: "", 3: "", 4: "" })}`;
    }

    if (!current) current = pickNext();
    const c = counts();
    const bar = `<div class="study-bar">
      <span class="count new" title="New cards left today">New <strong>${c.newToday}</strong></span>
      <span class="count learn" title="Learning cards due now">Learning <strong>${c.learn}</strong></span>
      <span class="count review" title="Reviews due today">Review <strong>${c.review}</strong></span>
    </div>`;

    if (!current) {
      const upcoming = CARDS.map((x) => stateOf(x.id)).filter((s) => s && s.state !== "new").map((s) => s.due).filter((d) => d > Date.now()).sort((a, b) => a - b)[0];
      return `${bar}<section class="done">
        <h2>All caught up 🎉</h2>
        <p>${c.unseen > 0 ? `You've hit today's limit of new cards. ${c.unseen} cards are still unseen.` : "You've seen every card in the deck."}</p>
        ${upcoming ? `<p class="muted">Next review due in ${SRS.formatDelta(upcoming - Date.now())}.</p>` : ""}
        <div class="row">
          ${c.unseen > 0 ? `<button class="btn primary" data-act="extra-new">Learn 10 more new cards</button>` : ""}
          <button class="btn" data-go="targets">Browse targets</button>
        </div></section>`;
    }
    const labels = Object.fromEntries(Object.entries(SRS.preview(stateOf(current.id), Date.now())).map(([k, v]) => [k, SRS.formatDelta(v)]));
    return bar + renderCard(current, labels);
  }

  function groupStats(group) {
    const ids = CARDS.filter((c) => c.group === group).map((c) => c.id);
    const seen = ids.filter((id) => !isNew(id)).length;
    const mastered = ids.filter(isMastered).length;
    return { total: ids.length, seen, mastered, ids };
  }
  function bar(st) {
    const m = (st.mastered / st.total) * 100, s = (st.seen / st.total) * 100;
    return `<div class="progress" title="${st.mastered} mastered · ${st.seen} seen · ${st.total} cards"><div class="seen" style="width:${s}%"></div><div class="mastered" style="width:${m}%"></div></div>`;
  }

  function renderTargets() {
    const q = search.trim().toLowerCase();
    const list = T.filter((t) => filterArea === "All" || t.area === filterArea).filter((t) => {
      if (!q) return true;
      const hay = [t.name, t.short, t.gene, t.family, t.area, ...t.drugs.map((d) => d.name + " " + d.action + " " + d.use)].join(" ").toLowerCase();
      return hay.includes(q);
    });
    return `<section>
      <div class="toolbar">
        <input id="search" type="search" placeholder="Search targets, genes, drugs, diseases…" value="${esc(search)}" />
        <div class="chips">${["All", ...AREAS].map((a) => `<button class="chip ${a === filterArea ? "on" : ""}" data-area="${esc(a)}">${esc(a)}</button>`).join("")}</div>
      </div>
      <p class="muted small">${list.length} of ${T.length} targets · bar = <span class="key-mastered">mastered</span> / <span class="key-seen">seen</span></p>
      <div class="grid">${list.map((t) => {
        const st = groupStats(`target:${t.id}`);
        return `<button class="tile" data-target="${t.id}">
          <div class="tile-top"><span class="short">${esc(t.short)}</span><span class="area">${esc(t.area)}</span></div>
          <div class="name">${esc(t.name)}</div>
          <div class="family">${esc(t.family)}</div>
          <div class="drug-hint">${esc(t.drugs.map((d) => d.name.split(" /")[0].split(" (")[0]).slice(0, 3).join(" · "))}</div>
          ${bar(st)}
        </button>`;
      }).join("")}</div></section>`;
  }

  function renderTarget(t) {
    if (!t) return `<p>Not found.</p>`;
    const st = groupStats(`target:${t.id}`);
    return `<section class="detail">
      <button class="btn small back-btn" data-go="targets">← All targets</button>
      <header class="detail-head">
        <div><h2>${esc(t.name)} <span class="short-tag">${esc(t.short)}</span></h2>
        <p class="muted">${esc(t.gene)} · ${esc(t.family)} · ${esc(t.area)}</p></div>
        <button class="btn primary" data-practice-group="target:${t.id}" data-title="${esc(t.short)}">Practice ${st.total} cards</button>
      </header>
      ${bar(st)}
      <div class="panel"><h3>Where & normal role</h3><p><strong>Location:</strong> ${fmt(t.location)}</p><p>${fmt(t.role)}</p></div>
      <div class="panel"><h3>Signalling</h3>${flow(t.signalling)}${targetDiagram(t)}</div>
      <div class="panel"><h3>How drugs hit it</h3><p>${fmt(t.mechanism)}</p>${drugTable(t.drugs)}</div>
      <div class="panel why"><h3>${fmt(t.question)}</h3><p>${fmt(t.answer)}</p><p class="pearl"><span>Clinical pearl</span>${fmt(t.pearl)}</p></div>
      ${t.pathways.length ? `<div class="panel"><h3>Related pathways</h3><div class="chips">${t.pathways.map((pid) => `<button class="chip" data-pathway="${pid}">${esc(pathwayById[pid].name)}</button>`).join("")}</div></div>` : ""}
    </section>`;
  }

  function renderPathways() {
    return `<section>
      <p class="muted">Learn these core pathways and most targets become variations on a theme.</p>
      <div class="grid">${P.map((p) => {
        const st = groupStats(`pathway:${p.id}`);
        const n = T.filter((t) => t.pathways.includes(p.id)).length;
        return `<button class="tile" data-pathway="${p.id}">
          <div class="name">${esc(p.name)}</div>
          <div class="family">${esc(p.summary)}</div>
          <div class="drug-hint">${n} linked target${n === 1 ? "" : "s"}</div>
          ${bar(st)}
        </button>`;
      }).join("")}</div></section>`;
  }

  function renderPathway(p) {
    if (!p) return `<p>Not found.</p>`;
    const linked = T.filter((t) => t.pathways.includes(p.id));
    const ids = [...groupStats(`pathway:${p.id}`).ids, ...linked.map((t) => `t:${t.id}:signal`)];
    return `<section class="detail">
      <button class="btn small back-btn" data-go="pathways">← All pathways</button>
      <header class="detail-head"><div><h2>${esc(p.name)}</h2><p class="muted">${fmt(p.summary)}</p></div>
        <button class="btn primary" data-practice-ids="${ids.join(",")}" data-title="${esc(p.name)}">Practice ${ids.length} cards</button></header>
      <div class="panel"><h3>Step by step</h3>${hasDgm(p.id) ? dgm(p.id, { mode: "explore", list: "1" }) : flow(p.steps)}</div>
      <div class="panel"><h3>Drugs acting on this pathway</h3><p>${fmt(p.drugs)}</p></div>
      <div class="panel why"><h3>${fmt(p.question)}</h3><p>${fmt(p.answer)}</p></div>
      ${linked.length ? `<div class="panel"><h3>Targets in this deck that use it</h3><div class="chips">${linked.map((t) => `<button class="chip" data-target="${t.id}">${esc(t.short)}</button>`).join("")}</div></div>` : ""}
    </section>`;
  }

  function renderConcepts() {
    const ids = C.map((c) => `c:${c.id}`);
    return `<section>
      <div class="detail-head"><p class="muted">Pharmacology fundamentals: the 'grammar' for reading any mechanism.</p>
      <button class="btn primary" data-practice-ids="${ids.join(",")}" data-title="Concepts">Practice all concepts</button></div>
      ${C.map((c) => `<details class="panel concept"><summary><span>${esc(c.title)}</span>${isMastered(`c:${c.id}`) ? `<span class="tick">mastered</span>` : ""}</summary>
        <p class="q">${fmt(c.question)}</p>${bullets(c.answer)}</details>`).join("")}
    </section>`;
  }

  function renderProgress() {
    const total = CARDS.length;
    const seen = CARDS.filter((c) => !isNew(c.id)).length;
    const mastered = CARDS.filter((c) => isMastered(c.id)).length;
    const c = counts();
    const targetsLearned = T.filter((t) => { const st = groupStats(`target:${t.id}`); return st.mastered / st.total >= 0.8; }).length;

    const days = [...Array(14)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (13 - i)); return todayKey(d); });
    const maxH = Math.max(1, ...days.map((d) => S.history[d] || 0));
    const forecast = [...Array(7)].map((_, i) => {
      const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() + i);
      const end = start.getTime() + DAY;
      return CARDS.filter((x) => { const s = stateOf(x.id); return s && s.state === "review" && (i === 0 ? s.due < end : s.due >= start.getTime() && s.due < end); }).length;
    });
    const maxF = Math.max(1, ...forecast);

    return `<section>
      <div class="stats">
        <div class="stat"><strong>${targetsLearned}<small>/${T.length}</small></strong><span>targets learned (≥80% mastered)</span></div>
        <div class="stat"><strong>${mastered}<small>/${total}</small></strong><span>cards mastered (interval ≥ ${MASTERED_DAYS}d)</span></div>
        <div class="stat"><strong>${seen}<small>/${total}</small></strong><span>cards seen</span></div>
        <div class="stat"><strong>${c.review + c.learn}</strong><span>due now / today</span></div>
      </div>

      <div class="two-col">
        <div class="panel"><h3>Reviews, last 14 days</h3>
          <div class="bars">${days.map((d) => `<div class="bar-col" title="${d}: ${S.history[d] || 0}"><div style="height:${((S.history[d] || 0) / maxH) * 100}%"></div><span>${d.slice(8)}</span></div>`).join("")}</div></div>
        <div class="panel"><h3>Reviews due, next 7 days</h3>
          <div class="bars">${forecast.map((n, i) => `<div class="bar-col" title="${n} reviews"><div class="f" style="height:${(n / maxF) * 100}%"></div><span>${i === 0 ? "today" : "+" + i}</span></div>`).join("")}</div></div>
      </div>

      <div class="panel"><h3>By therapeutic area</h3>
        ${AREAS.map((a) => {
          const ids = CARDS.filter((x) => x.group.startsWith("target:") && targetById[x.group.slice(7)].area === a).map((x) => x.id);
          const st = { total: ids.length, seen: ids.filter((id) => !isNew(id)).length, mastered: ids.filter(isMastered).length };
          return `<div class="area-row"><span>${esc(a)}</span>${bar(st)}<small>${st.mastered}/${st.total}</small></div>`;
        }).join("")}
      </div>

      <div class="panel"><h3>Settings</h3>
        <label class="setting">New cards per day <input id="new-per-day" type="number" min="0" max="200" value="${S.settings.newPerDay}" /></label>
        <p class="muted small">The deck has ${total} cards. At ${S.settings.newPerDay}/day you'll see everything in about ${Math.ceil(total / Math.max(1, S.settings.newPerDay))} days. Cards are introduced in a guided order: concepts first, then each target with its pathways.</p>
        <div class="row">
          <button class="btn" data-act="export">Export progress</button>
          <label class="btn">Import progress<input id="import-file" type="file" accept="application/json" hidden /></label>
          <button class="btn danger" data-act="reset">Reset all progress</button>
        </div>
      </div>
    </section>`;
  }

  // ───────────── events ─────────────
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, [data-go], [data-act]");
    if (!el) return;
    const d = el.dataset;
    if (d.view) return go(d.view);
    if (d.go) return go(d.go);
    if (d.grade) return gradeCard(Number(d.grade));
    if (d.target) return go("target", d.target);
    if (d.pathway) return go("pathway", d.pathway);
    if (d.area) { filterArea = d.area; return render(); }
    if (d.practiceGroup) return startPractice(d.title, CARDS.filter((c) => c.group === d.practiceGroup).map((c) => c.id));
    if (d.practiceIds) return startPractice(d.title, d.practiceIds.split(","));
    switch (d.act) {
      case "reveal": return reveal();
      case "end-practice": return endPractice();
      case "extra-new": S.daily.extraNew += 10; save(); current = null; return render();
      case "export": return exportProgress();
      case "reset":
        if (confirm("Reset ALL progress? This cannot be undone (export first if unsure).")) {
          S = normalize({ settings: S.settings }); save(); current = null; render();
        }
        return;
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.id === "search") {
      search = e.target.value;
      const pos = e.target.selectionStart;
      render();
      const s = $("#search"); s.focus(); s.setSelectionRange(pos, pos);
    }
  });

  document.addEventListener("change", (e) => {
    if (e.target.id === "new-per-day") {
      S.settings.newPerDay = Math.max(0, Math.min(200, Number(e.target.value) || 0));
      save(); current = null; render();
    }
    if (e.target.id === "import-file" && e.target.files[0]) {
      e.target.files[0].text().then((txt) => {
        try {
          const data = JSON.parse(txt);
          if (!data.cards) throw new Error("No card data found");
          if (!confirm("Replace current progress with the imported file?")) return;
          S = normalize(data); save(); current = null; render();
        } catch (err) { alert("Import failed: " + err.message); }
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (view !== "study" || e.target.matches("input, textarea") || e.metaKey || e.ctrlKey) return;
    if (!revealed && (e.code === "Space" || e.key === "Enter")) { e.preventDefault(); reveal(); }
    else if (revealed && ["1", "2", "3", "4"].includes(e.key)) { e.preventDefault(); gradeCard(Number(e.key)); }
    else if (revealed && (e.code === "Space" || e.key === "Enter")) { e.preventDefault(); gradeCard(3); }
  });

  function exportProgress() {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `drug-target-flashcards-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // Refresh queue counts periodically so learning cards appear on time.
  setInterval(() => { if (view === "study" && !current) render(); else updateBadge(); }, 30 * 1000);

  $("#deck-size").textContent = `${T.length} targets · ${P.length} pathways · ${CARDS.length} cards`;
  render();
})();
