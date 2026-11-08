// Visual, interactive tests that replace "say it to yourself" flashcards.
//   <div class="quiz" data-type="order" data-pid="gs">      build the pathway by putting its steps in order (diagram lights up)
//   <div class="quiz" data-type="order" data-tid="il1b">    order a target's signalling steps (no diagram)
//   <div class="quiz" data-type="label" data-pid="gs">      label the blank diagram
//   <div class="quiz" data-type="where" data-pid="gs" data-drug="2">  tap where a drug acts
// When finished the element fires a bubbling "quizdone" event with { mistakes, total }.
(function () {
  "use strict";
  const PATHWAYS = Object.fromEntries((window.FC_PATHWAYS || []).map((p) => [p.id, p]));
  const TARGETS = Object.fromEntries((window.FC_TARGETS || []).map((t) => [t.id, t]));
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  function shuffle(a) {
    const out = [...a];
    if (out.length < 2) return out;
    do {
      for (let i = out.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [out[i], out[j]] = [out[j], out[i]]; }
    } while (out.every((x, i) => x === a[i]));
    return out;
  }
  const plural = (n, w) => `${n} ${w}${n === 1 ? "" : "s"}`;

  function mountAll(root) {
    (root || document).querySelectorAll(".quiz:not([data-mounted])").forEach((el) => {
      el.dataset.mounted = "1";
      const fn = { order: mountOrder, label: mountLabel, where: mountWhere }[el.dataset.type];
      if (fn) fn(el);
      el.addEventListener("click", (e) => e.stopPropagation());
    });
  }

  function finish(el, mistakes, total, msg) {
    el.classList.add("finished");
    const cap = el.querySelector(".q-caption");
    if (cap) cap.innerHTML = `<strong class="q-ok">✓ ${esc(msg)}</strong> ${mistakes ? `<span class="muted">${plural(mistakes, "mistake")}</span>` : `<span class="muted">No mistakes</span>`}`;
    setTimeout(() => el.dispatchEvent(new CustomEvent("quizdone", { bubbles: true, detail: { mistakes, total } })), 900);
  }
  function shake(node) { node.classList.remove("bad"); void node.offsetWidth; node.classList.add("bad"); setTimeout(() => node.classList.remove("bad"), 600); }

  // ───────── put the steps in order ─────────
  function mountOrder(el) {
    const p = el.dataset.pid && PATHWAYS[el.dataset.pid];
    const t = el.dataset.tid && TARGETS[el.dataset.tid];
    const steps = p ? p.steps : t ? t.signalling : [];
    if (!steps.length) return;
    const hasDgm = p && window.Diagram && Diagram.has(p.id);
    el.innerHTML = `${hasDgm ? `<div class="q-dgm"></div>` : ""}
      <div class="q-side">
        <div class="q-caption" aria-live="polite">Tap the <strong>first</strong> step.</div>
        <ol class="q-list"></ol>
        <div class="q-foot"><span class="q-score"></span><button class="q-btn" data-q="hint">Hint</button></div>
      </div>`;
    const ctl = hasDgm ? Diagram.controller(el.querySelector(".q-dgm"), p.id) : null;
    const order = shuffle(steps.map((_, i) => i));
    let k = 0, mistakes = 0, wrongHere = 0;
    const list = el.querySelector(".q-list"), cap = el.querySelector(".q-caption"), score = el.querySelector(".q-score");

    function draw() {
      const placed = [...Array(k).keys()];
      const left = order.filter((i) => i >= k);
      list.innerHTML = placed.map((i) => `<li class="q-step placed"><b>${i + 1}</b><span>${fmt(steps[i])}</span></li>`).join("")
        + left.map((i) => `<li><button class="q-step" data-si="${i}"><b></b><span>${fmt(steps[i])}</span></button></li>`).join("");
      score.textContent = mistakes ? plural(mistakes, "mistake") : "";
      if (ctl) { ctl.build(k); ctl.pulse([]); }
    }
    function hint(auto) {
      if (k >= steps.length) return;
      if (!auto) mistakes++;
      if (ctl && ctl.D.steps[k] && ctl.D.steps[k].length) {
        ctl.pulse(ctl.D.steps[k]);
        cap.innerHTML = `<strong>Hint:</strong> step ${k + 1} happens at the pulsing ${ctl.D.steps[k].length > 1 ? "components" : "component"}.`;
      } else {
        const b = list.querySelector(`[data-si="${k}"]`);
        if (b) b.classList.add("hint");
        cap.innerHTML = `<strong>Hint:</strong> it's the highlighted step.`;
      }
      score.textContent = mistakes ? plural(mistakes, "mistake") : "";
    }
    el.addEventListener("click", (e) => {
      const b = e.target.closest("[data-si],[data-q]");
      if (!b || el.classList.contains("finished")) return;
      if (b.dataset.q === "hint") return hint(false);
      const i = Number(b.dataset.si);
      if (i === k) {
        k++; wrongHere = 0;
        draw();
        if (k >= steps.length) return finish(el, mistakes, steps.length, p ? "Pathway built" : "Signalling in order");
        cap.innerHTML = `<span class="q-good">Correct.</span> Now step <strong>${k + 1}</strong> of ${steps.length}.`;
        const last = list.querySelectorAll(".placed")[k - 1];
        if (last && window.innerWidth < 760) last.scrollIntoView({ block: "nearest", behavior: "smooth" });
      } else {
        mistakes++; wrongHere++;
        shake(b);
        score.textContent = plural(mistakes, "mistake");
        cap.innerHTML = `Not step ${k + 1}. Try again.`;
        if (wrongHere >= 2) hint(true);
      }
    });
    draw();
  }

  // ───────── label the diagram ─────────
  function mountLabel(el) {
    const pid = el.dataset.pid;
    el.innerHTML = `<div class="q-dgm"></div><div class="q-side">
        <div class="q-caption" aria-live="polite">Pick a label, then tap the blank box where it belongs.</div>
        <div class="q-chips"></div>
        <div class="q-foot"><span class="q-score"></span><button class="q-btn" data-q="hint">Hint</button></div></div>`;
    const ctl = window.Diagram && Diagram.controller(el.querySelector(".q-dgm"), pid);
    if (!ctl) return;
    const D = ctl.D;
    const ids = Object.keys(D.nodes);
    const tested = ids.filter((id) => D.nodes[id].k !== "output");
    const done = new Set(ids.filter((id) => !tested.includes(id)));   // outcomes are given as clues
    const chips = shuffle(tested.map((id) => ({ id, l: ctl.label(id) })));
    let sel = null, mistakes = 0;
    const cap = el.querySelector(".q-caption"), box = el.querySelector(".q-chips"), score = el.querySelector(".q-score");
    const paint = () => ctl.paint((id) => (done.has(id) ? "all" : "blank"));
    function draw() {
      box.innerHTML = chips.map((c, i) => c.used ? "" : `<button class="q-chip${sel === i ? " on" : ""}" data-ci="${i}">${esc(c.l)}</button>`).join("");
      score.textContent = mistakes ? plural(mistakes, "mistake") : "";
    }
    el.addEventListener("click", (e) => {
      if (el.classList.contains("finished")) return;
      const c = e.target.closest("[data-ci]");
      if (c) { sel = sel === Number(c.dataset.ci) ? null : Number(c.dataset.ci); ctl.pulse([]); draw(); cap.textContent = sel === null ? "Pick a label." : `Where does “${chips[sel].l}” go?`; return; }
      if (e.target.closest("[data-q=hint]")) {
        if (sel === null) { cap.textContent = "Pick a label first, then tap Hint."; return; }
        mistakes++;
        ctl.pulse(tested.filter((id) => !done.has(id) && ctl.label(id) === chips[sel].l));
        draw();
      }
    });
    ctl.onNode((id) => {
      if (el.classList.contains("finished") || done.has(id)) return;
      if (sel === null) { cap.textContent = "Pick a label first."; return; }
      const chip = chips[sel];
      if (ctl.label(id) === chip.l) {          // duplicates (e.g. two "JAK" boxes) are interchangeable
        done.add(id); chip.used = true; sel = null;
        paint(); ctl.pulse([]); ctl.flash(id, true);
        draw();
        const left = chips.filter((x) => !x.used).length;
        if (!left) return finish(el, mistakes, tested.length, "Diagram labelled");
        cap.innerHTML = `<span class="q-good">Correct.</span> ${left} to go.`;
      } else {
        mistakes++;
        ctl.flash(id, false);
        cap.textContent = `That's not where “${chip.l}” goes.`;
        draw();
      }
    });
    paint();
    draw();
  }

  // ───────── tap where the drug acts ─────────
  function mountWhere(el) {
    const pid = el.dataset.pid, di = Number(el.dataset.drug);
    el.innerHTML = `<div class="q-dgm"></div><div class="q-side"><div class="q-caption" aria-live="polite">Tap the component it acts on.</div>
      <div class="q-foot"><span class="q-score"></span><button class="q-btn" data-q="hint">Hint</button></div></div>`;
    const ctl = window.Diagram && Diagram.controller(el.querySelector(".q-dgm"), pid);
    if (!ctl || !ctl.D.drugs || !ctl.D.drugs[di]) return;
    const dr = ctl.D.drugs[di];
    let mistakes = 0;
    const cap = el.querySelector(".q-caption"), score = el.querySelector(".q-score");
    ctl.paint(() => "all");
    el.addEventListener("click", (e) => {
      if (el.classList.contains("finished") || !e.target.closest("[data-q=hint]")) return;
      mistakes++; ctl.pulse([dr.at]); score.textContent = plural(mistakes, "mistake");
    });
    ctl.onNode((id) => {
      if (el.classList.contains("finished")) return;
      if (id === dr.at) {
        ctl.pulse([]); ctl.flash(id, true);
        ctl.paint((x) => (x === id ? "now" : "past"));
        finish(el, mistakes, 1, `${dr.d} ${dr.fx === "block" ? "blocks" : "activates"} ${ctl.label(id)}`);
      } else {
        mistakes++;
        ctl.flash(id, false);
        score.textContent = plural(mistakes, "mistake");
        cap.textContent = `Not ${ctl.label(id)}. Try again.`;
        if (mistakes >= 2) ctl.pulse([dr.at]);
      }
    });
  }

  window.Quiz = { mountAll };
})();
