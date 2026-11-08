(function () {
  "use strict";

  const STORE_KEY = "drugTargetFlashcards.v1";
  const T = window.FC_TARGETS;
  const P = window.FC_PATHWAYS;
  const C = window.FC_CONCEPTS;
  const DZ = window.FC_DISEASES || [];
  const GROUPS = window.FC_PATHWAY_GROUPS || [{ name: "Pathways", ids: P.map((p) => p.id) }];
  const { MIN, DAY, MASTERED_DAYS } = window.SRS;

  const targetById = Object.fromEntries(T.map((t) => [t.id, t]));
  const pathwayById = Object.fromEntries(P.map((p) => [p.id, p]));
  const diseaseById = Object.fromEntries(DZ.map((d) => [d.id, d]));
  const AREA_ORDER = ["Cardiovascular & renal", "Metabolic & endocrine", "Respiratory", "GI & hepatology", "Immunology & inflammation", "Oncology",
    "Haematology & thrombosis", "Neuro & psychiatry", "Musculoskeletal & bone", "Reproductive & urology", "Ophthalmology", "Infectious disease"];
  const AREAS = [...AREA_ORDER.filter((a) => T.some((t) => t.area === a)), ...[...new Set(T.map((t) => t.area))].filter((a) => !AREA_ORDER.includes(a))];
  const ORGANS = window.BodyMap ? BodyMap.ORGANS : [];
  const organName = (id) => (window.BodyMap && BodyMap.byId[id] ? BodyMap.byId[id].name : id);

  // ───────────── helpers ─────────────
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\*)/g, "$1<em>$2</em>");
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const flow = (steps) => `<ol class="flow">${steps.map((s) => `<li>${fmt(s)}</li>`).join("")}</ol>`;
  const bullets = (items) => `<div class="bullets">${items.map((i) => `<p>${fmt(i)}</p>`).join("")}</div>`;
  // ── brand names & companies (js/data/brands-*.js) ──
  const BR = window.FC_BRANDS || {};
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  function brandsFor(name) {
    const s = name.replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim().toLowerCase();
    const out = [], seen = new Set();
    const take = (k) => { if (!BR[k]) return false; if (!seen.has(k)) { seen.add(k); out.push({ generic: k, ...BR[k] }); } return true; };
    s.split(/\s\/\s|;|,|\s\+\s|\+/).forEach((p) => {
      p = p.trim();
      if (!p || take(p)) return;
      if (p.includes("/")) p.split("/").forEach((q) => take(q.trim()));
    });
    return out;
  }
  const brandText = (name) => brandsFor(name).map((b) => b.b + " " + b.co).join(" ");
  // Compact line under a drug name: "Ilaris · Novartis" (prefixed by generic when several)
  function brandSub(name) {
    const list = brandsFor(name);
    if (!list.length) return "";
    return `<span class="brand-sub">${list.map((b) =>
      `<span>${list.length > 1 ? `<em>${esc(cap(b.generic))}</em> ` : ""}<strong>${esc(b.b)}</strong> · ${esc(b.co)}${b.g ? ` <i class="gen">generic</i>` : ""}</span>`).join("")}</span>`;
  }
  // Fact rows for the back of a drug card
  function brandFacts(name) {
    const list = brandsFor(name);
    if (!list.length) return "";
    const one = list.length === 1;
    return `<dt>Brand</dt><dd>${list.map((b) => `${one ? "" : `${esc(cap(b.generic))}: `}<strong>${esc(b.b)}</strong>`).join("<br>")}</dd>
      <dt>Company</dt><dd>${list.map((b) => `${one ? "" : `${esc(cap(b.generic))}: `}${esc(b.co)}${b.g ? ` <i class="gen">generics available</i>` : ""}`).join("<br>")}</dd>`;
  }
  const drugTable = (drugs) =>
    `<table class="drugs"><thead><tr><th>Drug</th><th>Action</th><th>Used for</th></tr></thead><tbody>${drugs
      .map((d) => `<tr><td><strong>${esc(d.name)}</strong>${brandSub(d.name)}</td><td>${fmt(d.action)}</td><td>${fmt(d.use)}</td></tr>`)
      .join("")}</tbody></table>`;
  const treatTable = (rows) =>
    `<table class="drugs"><thead><tr><th>Treatment</th><th>Mechanism</th></tr></thead><tbody>${rows
      .map((r) => `<tr><td><strong>${esc(r.name)}</strong>${brandSub(r.name)}</td><td>${fmt(r.action)}${r.target && targetById[r.target] ? ` <button class="pill-link" data-target="${r.target}">${esc(targetById[r.target].short)}</button>` : ""}</td></tr>`)
      .join("")}</tbody></table>`;
  const $ = (sel) => document.querySelector(sel);
  const chevron = `<svg class="chev" viewBox="0 0 8 14" aria-hidden="true"><path d="M1 1l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  function todayKey(d = new Date()) {
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }
  function endOfToday() { const d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime(); }

  // ───────────── build the deck ─────────────
  const CARDS = [];
  const cardById = {};
  const add = (c) => { CARDS.push(c); cardById[c.id] = c; };
  const hasDgm = (pid) => window.Diagram && Diagram.has(pid);
  const dgm = (pid, attrs = {}) =>
    `<div class="dgm" data-pid="${pid}" ${Object.entries(attrs).map(([k, v]) => `data-${k}="${esc(v)}"`).join(" ")}></div>`;
  const textSteps = (steps) => `<details class="as-text"><summary>Steps as text</summary>${flow(steps)}</details>`;

  function conceptCards(c) {
    add({ id: `c:${c.id}`, kind: "Concept", group: `concept:${c.id}`, label: c.title, front: fmt(c.question), back: bullets(c.answer) });
  }
  function pathwayCards(p) {
    const group = `pathway:${p.id}`;
    add({
      id: `p:${p.id}:steps`, kind: "Pathway · build", group, label: p.name, quiz: true,
      front: `Build the <strong>${esc(p.name)}</strong> pathway. Tap the steps in order.<div class="quiz" data-type="order" data-pid="${p.id}"></div>`,
      back: `<p class="summary">${fmt(p.summary)}</p>${hasDgm(p.id) ? dgm(p.id, { mode: "explore" }) + textSteps(p.steps) : flow(p.steps)}<p class="meta"><span>Drugs acting here</span>${fmt(p.drugs)}</p>`
    });
    if (hasDgm(p.id)) add({
      id: `p:${p.id}:label`, kind: "Pathway · label", group, label: p.name, quiz: true,
      front: `Label the <strong>${esc(p.name)}</strong> diagram.<div class="quiz" data-type="label" data-pid="${p.id}"></div>`,
      back: dgm(p.id, { mode: "explore" })
    });
    add({ id: `p:${p.id}:why`, kind: "Pathway · why", group, label: p.name, front: fmt(p.question), back: `<p>${fmt(p.answer)}</p>` });
    const D = hasDgm(p.id) && window.FC_DIAGRAMS[p.id];
    (D && D.drugs ? D.drugs : []).forEach((dr, i) =>
      add({
        id: `p:${p.id}:where:${slug(dr.d)}`, kind: "Where it acts", group, label: p.name, quiz: true,
        front: `Where does <strong>${esc(dr.d)}</strong> act on this pathway? Tap it.<div class="quiz" data-type="where" data-pid="${p.id}" data-drug="${i}"></div>`,
        back: dgm(p.id, { mode: "drug", drug: i })
      })
    );
  }
  function targetDiagram(t) {
    const loc = window.Diagram && Diagram.forTarget(t.id, t.pathways);
    if (!loc) return "";
    return `<p class="meta dgm-intro"><span>In context · ${esc(pathwayById[loc.pid].name)}</span>${esc(t.short)} is highlighted.</p>${dgm(loc.pid, { mode: "target", highlight: loc.node })}`;
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
      id: `t:${t.id}:signal`, kind: "Signalling", group, label, quiz: t.signalling.length > 1,
      front: `Put the signalling at <strong>${esc(t.short)}</strong> in order, from ligand to effect.<div class="quiz" data-type="order" data-tid="${t.id}"></div>`,
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
        front: `<strong>${esc(d.name)}</strong>: what is its target, what does it do there, and what is it used for?${brandsFor(d.name).length ? ` <span class="front-sub">Bonus: brand name and company?</span>` : ""}`,
        back: `<dl class="facts"><dt>Target</dt><dd>${esc(t.name)} (${esc(t.short)})</dd><dt>Action</dt><dd>${fmt(d.action)}</dd><dt>Used for</dt><dd>${fmt(d.use)}</dd>${brandFacts(d.name)}</dl><p class="meta"><span>How it works</span>${fmt(t.mechanism)}</p>`
      })
    );
  }
  function diseaseCards(d) {
    const group = `disease:${d.id}`;
    const label = `${d.short} · ${organName(d.organ)}`;
    add({
      id: `d:${d.id}:overview`, kind: "Disease", group, label,
      front: `What is <strong>${esc(d.name)}</strong>, and how does it present?`,
      back: `<p>${fmt(d.summary)}</p><dl class="facts"><dt>Features</dt><dd>${fmt(d.features)}</dd><dt>Diagnosis</dt><dd>${fmt(d.diagnosis)}</dd></dl>`
    });
    add({
      id: `d:${d.id}:patho`, kind: "Pathophysiology", group, label,
      front: `Explain the pathophysiology of <strong>${esc(d.short)}</strong>, from trigger to damage.`,
      back: flow(d.pathophys)
    });
    add({
      id: `d:${d.id}:treat`, kind: "Treatment", group, label,
      front: `How is <strong>${esc(d.short)}</strong> treated, and which drug targets are involved?`,
      back: treatTable(d.treatments)
    });
    add({
      id: `d:${d.id}:why`, kind: "Disease · why", group, label, front: fmt(d.question),
      back: `<p>${fmt(d.answer)}</p><p class="pearl"><span>Pearl</span>${fmt(d.pearl)}</p>`
    });
  }

  // Guided order: concepts → each target (with its pathways first time seen) → diseases after their first linked target.
  (function buildDeck() {
    const seen = new Set();
    const pending = [...DZ];
    const targetsWithDisease = {};
    pending.forEach((d) => {
      const first = T.find((t) => (d.targets || []).includes(t.id));
      const key = first ? first.id : "_end";
      (targetsWithDisease[key] = targetsWithDisease[key] || []).push(d);
    });
    C.filter((c) => !c.after).forEach(conceptCards);
    T.forEach((t) => {
      t.pathways.forEach((pid) => {
        if (!seen.has(pid) && pathwayById[pid]) { seen.add(pid); pathwayCards(pathwayById[pid]); }
      });
      targetCards(t);
      C.filter((c) => c.after === t.id).forEach(conceptCards);
      (targetsWithDisease[t.id] || []).forEach(diseaseCards);
    });
    P.filter((p) => !seen.has(p.id)).forEach(pathwayCards);
    C.filter((c) => c.after && !targetById[c.after]).forEach(conceptCards);
    (targetsWithDisease._end || []).forEach(diseaseCards);
  })();

  // ───────────── persistence ─────────────
  function normalize(s) {
    s = s && typeof s === "object" ? s : {};
    s.cards = s.cards || {};
    s.settings = { newPerDay: 15, dailyPathway: true, ...(s.settings || {}) };
    s.history = s.history || {};
    s.focusDone = s.focusDone || {};   // pathwayId → date it was completed as the daily pathway
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
    if (reviews.length && fresh) return Math.random() < newLeft / (newLeft + reviews.length) ? fresh : reviews.sort(byDue)[0];
    if (reviews.length) return reviews.sort(byDue)[0];
    if (fresh) return fresh;
    if (ahead.length) return ahead.sort(byDue)[0];
    return null;
  }

  // ───────────── pathway of the day ─────────────
  // One pathway at a time, in mechanism-group order. It stays "today's pathway" until every one of
  // its cards has been rated Good/Easy and graduated; the next day a new one is picked.
  const PATHWAY_ORDER = [...new Set([...GROUPS.flatMap((g) => g.ids), ...P.map((p) => p.id)])].filter((id) => pathwayById[id]);
  const focusIds = (pid) => CARDS.filter((c) => c.group === `pathway:${pid}`).map((c) => c.id);
  const comfortable = (id) => { const s = stateOf(id); return !!s && s.state === "review"; };
  function focusStats(pid) { const ids = focusIds(pid); return { ids, total: ids.length, ok: ids.filter(comfortable).length }; }
  function ensureFocus() {
    if (!S.settings.dailyPathway) return null;
    const today = todayKey();
    const f = S.focus;
    if (f && pathwayById[f.pid] && (f.date === today || !S.focusDone[f.pid])) return f;  // keep today's, or carry over an unfinished one
    const pid = PATHWAY_ORDER.find((id) => !S.focusDone[id]);
    if (!pid) return null;
    S.focus = { pid, date: today, started: today };
    save();
    return S.focus;
  }
  function setFocus(pid) {
    S.focus = { pid, date: todayKey(), started: todayKey() };
    delete S.focusDone[pid];
    save();
  }
  const focusDoneToday = (f) => f && S.focusDone[f.pid] === todayKey();
  function nextFocusAfter(pid) { return PATHWAY_ORDER.find((id) => id !== pid && !S.focusDone[id]); }

  // ───────────── session / view state ─────────────
  let current = null;
  let revealed = false;
  let practice = null;
  let quizResult = null;   // { mistakes, total } from the current card's interactive test
  let view = "study";
  let viewArg = null;
  let filterArea = "All";
  let search = "";
  let organSel = null;

  // A review card that isn't due yet. Passing it early confirms it but doesn't stretch the interval
  // (that would inflate the schedule); failing it is a genuine lapse.
  const isEarly = (id) => { const s = stateOf(id); return !!s && s.state === "review" && s.due > endOfToday(); };

  // Every grade, in the daily queue or in practice, goes through the real scheduler.
  function applyGrade(id, rating) {
    const now = Date.now();
    if (isEarly(id) && rating > 1) S.cards[id] = { ...stateOf(id), last: now };
    else {
      if (isNew(id)) S.daily.newDone++;
      S.cards[id] = SRS.schedule(stateOf(id), rating, now);
    }
    S.history[todayKey()] = (S.history[todayKey()] || 0) + 1;
    save();
  }
  function gradeLabels(id) {
    const p = Object.fromEntries(Object.entries(SRS.preview(stateOf(id), Date.now())).map(([k, v]) => [k, SRS.formatDelta(v)]));
    if (isEarly(id)) { p[2] = p[3] = p[4] = "keep"; }
    return p;
  }

  function gradeCard(rating) {
    if (!current || !revealed) return;
    const id = current.id;
    applyGrade(id, rating);
    if (practice) {
      practice.queue.shift();
      // Focus mode: a card leaves only once it's graduated and rated Good/Easy. Otherwise Again/Hard bring it back.
      const again = practice.focus ? !(rating >= 3 && comfortable(id)) : rating <= 2;
      if (again) practice.queue.splice(Math.min(practice.queue.length, rating === 1 ? 2 : 4), 0, id);
      else practice.done++;
      if (practice.focus && !practice.queue.length) S.focusDone[practice.focus] = todayKey(), save();
    }
    current = null;
    revealed = false;
    quizResult = null;
    render();
    window.scrollTo(0, 0);
  }
  function reveal() { if (current && !revealed) { revealed = true; render(); } }
  function startPractice(title, ids, focus = null) {
    ids = ids.filter((id) => cardById[id]);
    practice = { title, focus, queue: focus ? ids : [...ids].sort(() => Math.random() - 0.5), total: ids.length, done: 0 };
    current = null; revealed = false; quizResult = null;
    go("study");
  }
  function startFocus(pid) {
    if (!S.focus || S.focus.pid !== pid) setFocus(pid);
    startPractice(pathwayById[pid].name, focusIds(pid), pid);
  }
  function endPractice() { practice = null; current = null; revealed = false; quizResult = null; render(); }

  // ───────────── rendering ─────────────
  const PARENT = { target: "targets", pathway: "pathways", disease: "body" };
  function go(v, arg = null) { view = v; viewArg = arg; window.scrollTo(0, 0); render(); }

  function render() {
    document.querySelectorAll("nav [data-view]").forEach((b) => b.classList.toggle("active", b.dataset.view === (PARENT[view] || view)));
    const main = $("#main");
    const views = {
      study: renderStudy, targets: renderTargets, pathways: renderPathways, body: renderBody, concepts: renderConcepts, progress: renderProgress,
      target: () => renderTarget(targetById[viewArg]), pathway: () => renderPathway(pathwayById[viewArg]), disease: () => renderDisease(diseaseById[viewArg])
    };
    main.innerHTML = (views[view] || renderStudy)();
    if (window.Diagram) Diagram.mountAll(main);
    if (window.Quiz) Quiz.mountAll(main);
    updateBadge();
  }
  function updateBadge() {
    const c = counts();
    const n = c.learn + c.review + c.newToday;
    $("#due-badge").textContent = n > 0 ? n : "";
  }
  const title = (t, sub = "") => `<header class="page-head"><h1>${t}</h1>${sub ? `<p>${sub}</p>` : ""}</header>`;

  // Suggested rating from an interactive test: clean → Good, a few slips → Hard, many → Again.
  function suggestGrade(r) {
    if (!r) return 0;
    if (r.mistakes === 0) return 3;
    return r.mistakes <= Math.max(2, Math.round(r.total * 0.25)) ? 2 : 1;
  }
  function renderCard(card, gradeLabels) {
    const typeClass = slug(card.kind.split(" ")[0]);
    const quiz = card.quiz && !revealed;
    const sug = revealed && card.quiz ? suggestGrade(quizResult) : 0;
    const result = revealed && card.quiz
      ? quizResult
        ? `<p class="q-result ${quizResult.mistakes ? "" : "clean"}">${quizResult.mistakes ? `Finished with ${quizResult.mistakes} mistake${quizResult.mistakes === 1 ? "" : "s"}.` : "Perfect, no mistakes."} <span>Suggested: ${["", "Again", "Hard", "Good", "Easy"][sug]}</span></p>`
        : `<p class="q-result skipped">Skipped. Rate how well you knew it.</p>`
      : "";
    return `
      <article class="card ${revealed ? "revealed" : quiz ? "quiz-card" : "tappable"}" ${revealed || quiz ? "" : 'data-act="reveal"'}>
        <div class="card-meta"><span class="kind kind-${typeClass}">${esc(card.kind)}</span><span class="label">${esc(card.label)}</span></div>
        <div class="front">${card.front}</div>
        ${revealed ? `<div class="divider"></div>${result}<div class="back">${card.back}</div>` : quiz ? "" : `<p class="tap-hint">Tap to reveal</p>`}
      </article>
      <div class="actions">
        ${!revealed
          ? quiz
            ? `<button class="btn wide skip" data-act="reveal">Skip and Show Answer</button>`
            : `<button class="btn primary wide" data-act="reveal">Show Answer <kbd class="desk">Space</kbd></button>`
          : `<div class="grades">${[[1, "Again"], [2, "Hard"], [3, "Good"], [4, "Easy"]].map(([r, l]) =>
              `<button class="grade g${r}${r === sug ? " suggest" : ""}" data-grade="${r}"><span>${l}</span><small>${gradeLabels ? gradeLabels[r] : ""}</small></button>`).join("")}</div>`}
      </div>`;
  }

  function renderStudy() {
    if (practice) {
      const f = practice.focus;
      if (!practice.queue.length) {
        const next = f && nextFocusAfter(f);
        return f
          ? `${title("Today's Pathway")}<section class="done panel"><div class="done-icon">✓</div><h2>${esc(practice.title)}</h2>
              <p>You rated all ${practice.total} cards Good or Easy. You're comfortable with this pathway.</p>
              <p class="muted">These cards are now in your spaced-repetition schedule and will come back in your daily reviews.${next ? ` Tomorrow's pathway: <strong>${esc(pathwayById[next].name)}</strong>.` : ""}</p>
              <div class="row center"><button class="btn primary" data-act="end-practice">Back to Study</button></div></section>`
          : `${title("Practice")}<section class="done panel"><div class="done-icon">✓</div><h2>Practice complete</h2><p>${esc(practice.title)}: ${practice.total} cards.</p>
              <p class="muted">Every rating counted toward your schedule, just like the daily queue.</p><div class="row center"><button class="btn primary" data-act="end-practice">Back to Study</button></div></section>`;
      }
      current = cardById[practice.queue[0]];
      const prog = f ? `${focusStats(f).ok} of ${practice.total} comfortable` : `${practice.done}/${practice.total}`;
      return `<div class="study-bar practice"><span><strong>${f ? "Today's pathway" : "Practice"} · ${esc(practice.title)}</strong> <span class="muted">${prog}</span></span>
        <button class="btn small" data-act="end-practice">Done</button></div>
        ${f ? `<p class="muted small focus-hint">Cards you rate Again or Hard come back until you get them Good.</p>` : ""}
        ${renderCard(current, gradeLabels(current.id))}`;
    }
    const fpanel = focusPanel();
    if (!current) current = pickNext();
    const c = counts();
    const bar = `<div class="study-bar">
      <div class="count"><strong class="new">${c.newToday}</strong><span>New</span></div>
      <div class="count"><strong class="learn">${c.learn}</strong><span>Learning</span></div>
      <div class="count"><strong class="review">${c.review}</strong><span>Review</span></div>
    </div>`;
    if (!current) {
      const upcoming = CARDS.map((x) => stateOf(x.id)).filter((s) => s && s.state !== "new").map((s) => s.due).filter((d) => d > Date.now()).sort((a, b) => a - b)[0];
      return `${title("Today")}${fpanel}${bar}<section class="done panel">
        <div class="done-icon">✓</div><h2>All caught up</h2>
        <p class="muted">${c.unseen > 0 ? `You've reached today's new-card limit. ${c.unseen} cards are still unseen.` : "You've seen every card in the deck."}</p>
        ${upcoming ? `<p class="muted small">Next review in ${SRS.formatDelta(upcoming - Date.now())}.</p>` : ""}
        <div class="row center">${c.unseen > 0 ? `<button class="btn primary" data-act="extra-new">Learn 10 More</button>` : ""}<button class="btn" data-view="body">Explore Body Map</button></div></section>`;
    }
    return `${title("Today")}${fpanel}${bar}${renderCard(current, gradeLabels(current.id))}`;
  }

  function focusPanel() {
    const f = ensureFocus();
    if (!f) return "";
    const p = pathwayById[f.pid];
    const st = focusStats(f.pid);
    const done = focusDoneToday(f);
    const grp = GROUPS.find((g) => g.ids.includes(f.pid));
    const day = f.started && f.started !== todayKey() ? ` · started ${f.started.slice(5).replace("-", "/")}` : "";
    const sub = done ? `Done for today. You're comfortable with all ${st.total} cards.` : `${st.ok} of ${st.total} cards comfortable${day}`;
    return `<section class="focus">
      <div class="focus-main">
        <p class="eyebrow">Today's pathway${grp ? ` · ${esc(grp.name)}` : ""}</p>
        <h2>${done ? `<span class="ok">✓</span> ` : ""}${esc(p.name)}</h2>
        <p class="muted">${sub}</p>
        <div class="progress"><div class="mastered" style="width:${st.total ? (st.ok / st.total) * 100 : 0}%"></div></div>
      </div>
      <div class="focus-btns">
        <button class="btn" data-pathway="${p.id}">Learn</button>
        <button class="btn ${done ? "" : "primary"}" data-act="focus-test">${done ? "Test Again" : st.ok ? "Continue" : "Test Me"}</button>
      </div></section>`;
  }

  function groupStats(group) {
    const ids = CARDS.filter((c) => c.group === group).map((c) => c.id);
    return { total: ids.length, seen: ids.filter((id) => !isNew(id)).length, mastered: ids.filter(isMastered).length, ids };
  }
  function bar(st) {
    const m = st.total ? (st.mastered / st.total) * 100 : 0, s = st.total ? (st.seen / st.total) * 100 : 0;
    return `<div class="progress" title="${st.mastered} mastered · ${st.seen} seen · ${st.total} cards"><div class="seen" style="width:${s}%"></div><div class="mastered" style="width:${m}%"></div></div>`;
  }
  const areaSlug = (a) => "area-" + slug(a);

  function renderTargets() {
    const q = search.trim().toLowerCase();
    const match = (t) => !q || [t.name, t.short, t.gene, t.family, t.area, ...t.drugs.map((d) => `${d.name} ${d.action} ${d.use} ${brandText(d.name)}`)].join(" ").toLowerCase().includes(q);
    const areas = AREAS.filter((a) => filterArea === "All" || a === filterArea);
    let shown = 0;
    const sections = areas.map((a) => {
      const list = T.filter((t) => t.area === a && match(t));
      shown += list.length;
      if (!list.length) return "";
      return `<section class="group" id="${areaSlug(a)}"><h2 class="group-title">${esc(a)} <span>${list.length}</span></h2>
        <div class="grid">${list.map((t) => {
          const st = groupStats(`target:${t.id}`);
          return `<button class="tile" data-target="${t.id}">
            <div class="tile-top"><span class="short">${esc(t.short)}</span>${chevron}</div>
            <div class="name">${esc(t.name)}</div>
            <div class="family">${esc(t.family)}</div>
            <div class="drug-hint">${esc(t.drugs.map((d) => d.name.split(" /")[0].split(" (")[0]).slice(0, 3).join(" · "))}</div>
            ${bar(st)}</button>`;
        }).join("")}</div></section>`;
    }).join("");
    return `${title("Drug Targets", `${T.length} targets across ${AREAS.length} therapeutic areas, chosen from the targets with the most approved drugs (Santos et al., 2017) and today's top-selling medicines.`)}
      <div class="toolbar">
        <div class="search"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <input id="search" type="search" placeholder="Search targets, genes, drugs, brands, companies" value="${esc(search)}" /></div>
        <div class="chips scroll">${["All", ...AREAS].map((a) => `<button class="chip ${a === filterArea ? "on" : ""}" data-area="${esc(a)}">${esc(a)}</button>`).join("")}</div>
      </div>
      ${shown ? sections : `<p class="empty-state">No targets match “${esc(search)}”.</p>`}`;
  }

  function linkedDiseases(tid) { return DZ.filter((d) => (d.targets || []).includes(tid) || (d.treatments || []).some((r) => r.target === tid)); }

  function renderTarget(t) {
    if (!t) return `<p>Not found.</p>`;
    const st = groupStats(`target:${t.id}`);
    const dz = linkedDiseases(t.id);
    return `<section class="detail">
      <button class="back-link" data-view="targets">${chevron}Targets</button>
      <header class="detail-head">
        <div><p class="eyebrow">${esc(t.area)}</p><h1>${esc(t.name)}</h1>
        <p class="muted">${esc(t.short)} · ${esc(t.gene)} · ${esc(t.family)}</p></div>
        <button class="btn primary" data-practice-group="target:${t.id}" data-title="${esc(t.short)}">Practice ${st.total} cards</button>
      </header>
      ${bar(st)}
      <div class="panel"><h3>Where & normal role</h3><p><strong>Location:</strong> ${fmt(t.location)}</p><p>${fmt(t.role)}</p></div>
      <div class="panel"><h3>Signalling</h3>${flow(t.signalling)}${targetDiagram(t)}</div>
      <div class="panel"><h3>How drugs hit it</h3><p>${fmt(t.mechanism)}</p>${drugTable(t.drugs)}</div>
      <div class="panel why"><h3>${fmt(t.question)}</h3><p>${fmt(t.answer)}</p><p class="pearl"><span>Clinical pearl</span>${fmt(t.pearl)}</p></div>
      ${dz.length ? `<div class="panel"><h3>Diseases</h3><div class="chips">${dz.map((d) => `<button class="chip" data-disease="${d.id}">${esc(d.short)}</button>`).join("")}</div></div>` : ""}
      ${t.pathways.length ? `<div class="panel"><h3>Related pathways</h3><div class="chips">${t.pathways.filter((p) => pathwayById[p]).map((pid) => `<button class="chip" data-pathway="${pid}">${esc(pathwayById[pid].name)}</button>`).join("")}</div></div>` : ""}
    </section>`;
  }

  function renderPathways() {
    const f = ensureFocus();
    return `${title("Pathways", "Grouped by mechanism class. Learn these and most targets become variations on a theme.")}
      ${f ? `<button class="focus-strip" data-pathway="${f.pid}"><span class="eyebrow">Today's pathway</span><strong>${esc(pathwayById[f.pid].name)}</strong>${chevron}</button>` : ""}
      ${GROUPS.map((g) => `<section class="group"><h2 class="group-title">${esc(g.name)} <span>${g.ids.length}</span></h2>${g.desc ? `<p class="group-desc">${esc(g.desc)}</p>` : ""}
        <div class="grid">${g.ids.filter((id) => pathwayById[id]).map((id) => {
          const p = pathwayById[id];
          const st = groupStats(`pathway:${p.id}`);
          const n = T.filter((t) => t.pathways.includes(p.id)).length;
          const tag = f && f.pid === p.id ? `<span class="tag today">Today</span>` : S.focusDone[p.id] ? `<span class="tag">✓ Done</span>` : "";
          return `<button class="tile" data-pathway="${p.id}">
            <div class="tile-top"><span class="short">${esc(p.name)}</span>${tag}${chevron}</div>
            <div class="family">${esc(p.summary)}</div>
            <div class="drug-hint">${n} linked target${n === 1 ? "" : "s"}</div>${bar(st)}</button>`;
        }).join("")}</div></section>`).join("")}`;
  }

  function renderPathway(p) {
    if (!p) return `<p>Not found.</p>`;
    const linked = T.filter((t) => t.pathways.includes(p.id));
    const ids = [...groupStats(`pathway:${p.id}`).ids, ...linked.map((t) => `t:${t.id}:signal`)];
    const grp = GROUPS.find((g) => g.ids.includes(p.id));
    const f = ensureFocus();
    const isFocus = f && f.pid === p.id;
    const fs = focusStats(p.id);
    const btns = isFocus
      ? `<button class="btn primary" data-act="focus-test">${focusDoneToday(f) ? "Test Again" : "Test Me"} · ${fs.total} cards</button>
         <button class="btn" data-practice-ids="${ids.join(",")}" data-title="${esc(p.name)}">Practice + targets (${ids.length})</button>`
      : `<button class="btn primary" data-practice-ids="${ids.join(",")}" data-title="${esc(p.name)}">Practice ${ids.length} cards</button>
         ${S.settings.dailyPathway ? `<button class="btn" data-act="set-focus" data-pid="${p.id}">Make Today's Pathway</button>` : ""}`;
    return `<section class="detail">
      <button class="back-link" data-view="pathways">${chevron}Pathways</button>
      <header class="detail-head"><div>${isFocus ? `<p class="eyebrow">Today's pathway · ${fs.ok} of ${fs.total} comfortable</p>` : grp ? `<p class="eyebrow">${esc(grp.name)}</p>` : ""}<h1>${esc(p.name)}</h1><p class="muted">${fmt(p.summary)}</p></div>
        <div class="head-btns">${btns}</div></header>
      <div class="panel"><h3>Step by step</h3>${hasDgm(p.id) ? dgm(p.id, { mode: "explore", list: "1" }) : flow(p.steps)}</div>
      <div class="panel"><h3>Drugs acting on this pathway</h3><p>${fmt(p.drugs)}</p></div>
      <div class="panel why"><h3>${fmt(p.question)}</h3><p>${fmt(p.answer)}</p></div>
      ${linked.length ? `<div class="panel"><h3>Targets that use it</h3><div class="chips">${linked.map((t) => `<button class="chip" data-target="${t.id}">${esc(t.short)}</button>`).join("")}</div></div>` : ""}
    </section>`;
  }

  // ───────────── body map ─────────────
  function diseasesOf(oid) { return DZ.filter((d) => d.organ === oid); }
  function alsoInvolves(oid) { return DZ.filter((d) => d.organ !== oid && (d.organs || []).includes(oid)); }
  const diseaseRow = (d, sub) => {
    const st = groupStats(`disease:${d.id}`);
    return `<button class="list-row" data-disease="${d.id}"><div class="lr-main"><strong>${esc(d.name)}</strong><span>${sub ? `<em>${esc(organName(d.organ))}</em> · ` : ""}${esc(d.summary)}</span>${bar(st)}</div>${chevron}</button>`;
  };
  function renderBody() {
    const countsByOrgan = Object.fromEntries(ORGANS.map((o) => [o.id, diseasesOf(o.id).length]));
    const o = organSel && BodyMap.byId[organSel];
    const also = o ? alsoInvolves(o.id) : [];
    const panel = o
      ? `<div class="organ-head"><span class="dot" style="--h:${o.hue}"></span><div><h2>${esc(o.name)}</h2><p class="muted">${esc(o.blurb)}</p></div>
          <button class="btn small" data-act="organ-clear">All organs</button></div>
        <div class="list">${diseasesOf(o.id).map((d) => diseaseRow(d)).join("") || `<p class="empty-state">No diseases recorded for this organ yet.</p>`}</div>
        ${also.length ? `<h3 class="list-head">Also involves the ${esc(o.name.toLowerCase())}</h3><div class="list">${also.map((d) => diseaseRow(d, true)).join("")}</div>` : ""}`
      : `<p class="muted body-hint">Tap an organ on the body, or choose one below.</p>
        <div class="list">${ORGANS.map((x) => `<button class="list-row" data-organ="${x.id}"><span class="dot" style="--h:${x.hue}"></span><div class="lr-main"><strong>${esc(x.name)}</strong><span>${countsByOrgan[x.id]} disease${countsByOrgan[x.id] === 1 ? "" : "s"} · ${esc(x.blurb)}</span></div>${chevron}</button>`).join("")}</div>`;
    return `${title("Body Map", `${DZ.length} diseases mapped to anatomy, each linked to its pathology, drug targets and treatments.`)}
      <div class="body-layout"><div class="body-figure panel">${BodyMap.svg(organSel, countsByOrgan)}</div><div class="body-panel panel">${panel}</div></div>`;
  }

  function renderDisease(d) {
    if (!d) return `<p>Not found.</p>`;
    const st = groupStats(`disease:${d.id}`);
    const tg = (d.targets || []).filter((id) => targetById[id]);
    const pw = (d.pathways || []).filter((id) => pathwayById[id]);
    return `<section class="detail">
      <button class="back-link" data-act="back-body">${chevron}${esc(organName(organSel || d.organ))}</button>
      <header class="detail-head"><div><p class="eyebrow">${esc(d.area)}</p><h1>${esc(d.name)}</h1>
        <div class="chips">${(d.organs || [d.organ]).map((o) => `<button class="chip" data-organ="${o}">${esc(organName(o))}</button>`).join("")}</div></div>
        <button class="btn primary" data-practice-group="disease:${d.id}" data-title="${esc(d.short)}">Practice ${st.total} cards</button></header>
      ${bar(st)}
      <div class="panel"><h3>Overview</h3><p>${fmt(d.summary)}</p><dl class="facts"><dt>Features</dt><dd>${fmt(d.features)}</dd><dt>Diagnosis</dt><dd>${fmt(d.diagnosis)}</dd></dl></div>
      <div class="panel"><h3>Pathophysiology</h3>${flow(d.pathophys)}</div>
      <div class="panel"><h3>Treatment</h3>${treatTable(d.treatments)}</div>
      <div class="panel why"><h3>${fmt(d.question)}</h3><p>${fmt(d.answer)}</p><p class="pearl"><span>Pearl</span>${fmt(d.pearl)}</p></div>
      ${tg.length ? `<div class="panel"><h3>Drug targets</h3><div class="chips">${tg.map((id) => `<button class="chip" data-target="${id}">${esc(targetById[id].short)}</button>`).join("")}</div></div>` : ""}
      ${pw.length ? `<div class="panel"><h3>Pathways</h3><div class="chips">${pw.map((id) => `<button class="chip" data-pathway="${id}">${esc(pathwayById[id].name)}</button>`).join("")}</div>${hasDgm(pw[0]) ? dgm(pw[0], { mode: "explore" }) : ""}</div>` : ""}
    </section>`;
  }

  function renderConcepts() {
    const ids = C.map((c) => `c:${c.id}`);
    return `${title("Concepts", "Pharmacology fundamentals: the grammar for reading any mechanism.")}
      <div class="row"><button class="btn primary" data-practice-ids="${ids.join(",")}" data-title="Concepts">Practice all concepts</button></div>
      <div class="list inset">${C.map((c) => `<details class="concept"><summary><span>${esc(c.title)}</span>${isMastered(`c:${c.id}`) ? `<span class="tick">Mastered</span>` : ""}</summary>
        <p class="q">${fmt(c.question)}</p>${bullets(c.answer)}</details>`).join("")}</div>`;
  }

  function renderProgress() {
    const total = CARDS.length;
    const seen = CARDS.filter((c) => !isNew(c.id)).length;
    const mastered = CARDS.filter((c) => isMastered(c.id)).length;
    const c = counts();
    const learned = (prefix, list) => list.filter((x) => { const st = groupStats(`${prefix}:${x.id}`); return st.total && st.mastered / st.total >= 0.8; }).length;
    const days = [...Array(14)].map((_, i) => { const d = new Date(); d.setDate(d.getDate() - (13 - i)); return todayKey(d); });
    const maxH = Math.max(1, ...days.map((d) => S.history[d] || 0));
    const forecast = [...Array(7)].map((_, i) => {
      const start = new Date(); start.setHours(0, 0, 0, 0); start.setDate(start.getDate() + i);
      const end = start.getTime() + DAY;
      return CARDS.filter((x) => { const s = stateOf(x.id); return s && s.state === "review" && (i === 0 ? s.due < end : s.due >= start.getTime() && s.due < end); }).length;
    });
    const maxF = Math.max(1, ...forecast);
    const areaRow = (a, ids) => {
      const st = { total: ids.length, seen: ids.filter((id) => !isNew(id)).length, mastered: ids.filter(isMastered).length };
      return `<div class="area-row"><span>${esc(a)}</span>${bar(st)}<small>${st.mastered}/${st.total}</small></div>`;
    };
    return `${title("Progress")}
      <div class="stats">
        <div class="stat"><strong>${learned("target", T)}<small>/${T.length}</small></strong><span>Targets learned</span></div>
        <div class="stat"><strong>${learned("disease", DZ)}<small>/${DZ.length}</small></strong><span>Diseases learned</span></div>
        <div class="stat"><strong>${mastered}<small>/${total}</small></strong><span>Cards mastered (≥ ${MASTERED_DAYS} days)</span></div>
        <div class="stat"><strong>${seen}<small>/${total}</small></strong><span>Cards seen</span></div>
      </div>
      <div class="two-col">
        <div class="panel"><h3>Reviews · last 14 days</h3>
          <div class="bars">${days.map((d) => `<div class="bar-col" title="${d}: ${S.history[d] || 0}"><div style="height:${((S.history[d] || 0) / maxH) * 100}%"></div><span>${d.slice(8)}</span></div>`).join("")}</div></div>
        <div class="panel"><h3>Due · next 7 days</h3>
          <div class="bars">${forecast.map((n, i) => `<div class="bar-col" title="${n} reviews"><div class="f" style="height:${(n / maxF) * 100}%"></div><span>${i === 0 ? "Today" : "+" + i}</span></div>`).join("")}</div></div>
      </div>
      <div class="panel"><h3>Targets by therapeutic area</h3>
        ${AREAS.map((a) => areaRow(a, CARDS.filter((x) => x.group.startsWith("target:") && targetById[x.group.slice(7)].area === a).map((x) => x.id))).join("")}
      </div>
      <div class="panel"><h3>Diseases by organ</h3>
        ${ORGANS.filter((o) => diseasesOf(o.id).length).map((o) => areaRow(o.name, CARDS.filter((x) => x.group.startsWith("disease:") && diseaseById[x.group.slice(8)].organ === o.id).map((x) => x.id))).join("")}
      </div>
      <div class="panel"><h3>Settings</h3>
        <label class="setting"><span>New cards per day</span><input id="new-per-day" type="number" min="0" max="200" value="${S.settings.newPerDay}" /></label>
        <label class="setting"><span>Pathway of the day</span><input id="daily-pathway" type="checkbox" ${S.settings.dailyPathway ? "checked" : ""} /></label>
        <p class="muted small">${Object.keys(S.focusDone).length} of ${PATHWAY_ORDER.length} pathways completed as a daily pathway. Practice sessions count toward your schedule, and new cards you meet in practice count toward the daily new-card limit.</p>
        <p class="muted small">${total} cards in the deck. At ${S.settings.newPerDay} a day you'll have seen everything in about ${Math.ceil(total / Math.max(1, S.settings.newPerDay))} days. Due reviews: ${c.review + c.learn}.</p>
        <div class="row">
          <button class="btn" data-act="export">Export Progress</button>
          <label class="btn">Import Progress<input id="import-file" type="file" accept="application/json" hidden /></label>
          <button class="btn danger" data-act="reset">Reset All Progress</button>
        </div>
      </div>`;
  }

  // ───────────── events ─────────────
  document.addEventListener("click", (e) => {
    const el = e.target.closest("button, [data-go], [data-act], [data-organ]");
    if (!el) return;
    const d = el.dataset;
    if (d.view) return go(d.view);
    if (d.go) return go(d.go);
    if (d.grade) return gradeCard(Number(d.grade));
    if (d.target) return go("target", d.target);
    if (d.pathway) return go("pathway", d.pathway);
    if (d.disease) return go("disease", d.disease);
    if (d.organ) {
      const fromMap = !!el.closest(".body-svg");
      organSel = organSel === d.organ && view === "body" && fromMap ? null : d.organ;
      go("body");
      if (organSel && window.innerWidth < 760) { const p = document.querySelector(".body-panel"); if (p) p.scrollIntoView({ behavior: "smooth", block: "start" }); }
      return;
    }
    if (d.area) {
      filterArea = d.area; render();
      if (d.area !== "All") { const s = document.getElementById(areaSlug(d.area)); if (s) s.scrollIntoView({ block: "start" }); }
      return;
    }
    if (d.practiceGroup) return startPractice(d.title, CARDS.filter((c) => c.group === d.practiceGroup).map((c) => c.id));
    if (d.practiceIds) return startPractice(d.title, d.practiceIds.split(","));
    switch (d.act) {
      case "reveal": return reveal();
      case "end-practice": return endPractice();
      case "focus-test": { const f = ensureFocus(); if (f) startFocus(f.pid); return; }
      case "set-focus": setFocus(d.pid); return render();
      case "organ-clear": organSel = null; return render();
      case "back-body": return go("body");
      case "extra-new": S.daily.extraNew += 10; save(); current = null; return render();
      case "export": return exportProgress();
      case "reset":
        if (confirm("Reset ALL progress? This cannot be undone (export first if unsure).")) { S = normalize({ settings: S.settings }); save(); current = null; render(); }
        return;
    }
  });

  document.addEventListener("keydown", (e) => {
    const g = e.target.closest && e.target.closest("[data-organ]");
    if (g && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); g.dispatchEvent(new MouseEvent("click", { bubbles: true })); return; }
    if (view !== "study" || e.target.matches("input, textarea") || e.metaKey || e.ctrlKey) return;
    if (!revealed && (e.code === "Space" || e.key === "Enter")) { e.preventDefault(); if (!(current && current.quiz)) reveal(); }
    else if (revealed && ["1", "2", "3", "4"].includes(e.key)) { e.preventDefault(); gradeCard(Number(e.key)); }
    else if (revealed && (e.code === "Space" || e.key === "Enter")) { e.preventDefault(); gradeCard(3); }
  });

  // An interactive test finished: reveal the answer with the result and a suggested rating.
  document.addEventListener("quizdone", (e) => {
    if (!current || revealed || view !== "study") return;
    quizResult = e.detail;
    revealed = true;
    render();
    const r = document.querySelector(".q-result");
    if (r) r.scrollIntoView({ block: "start", behavior: "smooth" });
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
    if (e.target.id === "daily-pathway") { S.settings.dailyPathway = e.target.checked; save(); render(); }
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

  function exportProgress() {
    const blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `drug-target-flashcards-${todayKey()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  setInterval(() => { if (view === "study" && !current) render(); else updateBadge(); }, 30 * 1000);

  $("#deck-size").textContent = `${T.length} targets · ${P.length} pathways · ${DZ.length} diseases · ${CARDS.length} cards`;
  render();
})();
