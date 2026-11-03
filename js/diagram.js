// Interactive SVG cell diagrams for signalling pathways.
// Usage: put <div class="dgm" data-pid="gs" data-mode="explore|target|overview|drug" ...></div> in the DOM,
// then call Diagram.mountAll(container).
//   data-highlight="R"  ring a node (target mode)
//   data-drug="2"       focus one drug (drug mode)
//   data-list="1"       also render the clickable list of steps
(function () {
  "use strict";
  const W = 360;
  const DIAGRAMS = window.FC_DIAGRAMS || {};
  const PATHWAYS = Object.fromEntries((window.FC_PATHWAYS || []).map((p) => [p.id, p]));

  const KIND = {
    ligand:    { fill: "#FFF5DC", stroke: "#D99A00", pill: true },
    receptor:  { fill: "#E6F0FF", stroke: "#0A6CFF", rx: 10, tall: true },
    channel:   { fill: "#E1F6F3", stroke: "#0E9C8C", rx: 6, tall: true, slot: true },
    gprotein:  { fill: "#F1EBFF", stroke: "#8452E8", pill: true },
    enzyme:    { fill: "#E3F4F9", stroke: "#0B87A8", rx: 6 },
    kinase:    { fill: "#E5F6EA", stroke: "#1E9450", rx: 6 },
    messenger: { fill: "#FFEEDD", stroke: "#DD7413", pill: true, small: true },
    tf:        { fill: "#FDE9F1", stroke: "#CF3A78", rx: 4 },
    inhib:     { fill: "#FDECEC", stroke: "#D63A3A", rx: 6 },
    output:    { fill: "#FFFFFF", stroke: "#8E8E93", rx: 8, dash: true }
  };
  const KIND_NAME = { ligand: "Ligand", receptor: "Receptor", channel: "Channel / transporter", gprotein: "G protein / GTPase", enzyme: "Enzyme / adaptor",
    kinase: "Kinase", messenger: "Second messenger", tf: "Transcription factor / receptor", inhib: "Brake / inhibitor", output: "Outcome" };

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ───────── geometry ─────────
  function measure(label, kind) {
    const k = KIND[kind] || KIND.enzyme;
    const lines = label.split("\n");
    const fs = k.small ? 10 : 10.5;
    const longest = Math.max(...lines.map((s) => s.length));
    let w = Math.max(k.tall ? 40 : 34, longest * fs * 0.56 + 16);
    let h = lines.length * 12.5 + 10;
    if (k.tall) h = Math.max(h, 50);
    return { w, h, lines, fs };
  }

  function clip(n, dx, dy) {
    const len = Math.hypot(dx, dy) || 1;
    const ux = dx / len, uy = dy / len;
    const hw = n.w / 2 + 3, hh = n.h / 2 + 3;
    const t = Math.min(ux ? hw / Math.abs(ux) : Infinity, uy ? hh / Math.abs(uy) : Infinity);
    return [n.x + ux * t, n.y + uy * t];
  }

  const EDGE_RE = /^(\w+)(~>|=>|=\||-\||<>|>)(\w+)$/;
  const prepared = {};
  function prep(pid) {
    if (prepared[pid]) return prepared[pid];
    const D = DIAGRAMS[pid];
    if (!D) return null;
    const nodes = {};
    D.nodes.forEach(([id, l, x, y, k, info]) => { nodes[id] = { id, l, x, y, k, info, ...measure(l, k) }; });
    const intro = {};
    D.steps.forEach((ids, i) => ids.forEach((id) => { if (intro[id] === undefined) intro[id] = i; }));
    Object.keys(nodes).forEach((id) => { if (intro[id] === undefined) intro[id] = 0; });
    const edges = D.edges.map((s) => {
      const m = EDGE_RE.exec(s);
      if (!m) { console.warn("bad edge", pid, s); return null; }
      const [, a, op, b] = m;
      return { a, b, op, inhibit: op === "-|" || op === "=|", curved: op === "=>" || op === "=|", dashed: op === "~>", both: op === "<>",
        intro: Math.max(intro[a] ?? 0, intro[b] ?? 0) };
    }).filter((e) => e && nodes[e.a] && nodes[e.b]);
    return (prepared[pid] = { ...D, nodes, edges, intro, N: D.steps.length, h: D.h || 480 });
  }

  // ───────── SVG builders ─────────
  function sceneSVG(D) {
    return (D.scene || []).map((s) => {
      if (s.t === "membrane") {
        const x1 = s.x1 ?? 0, x2 = s.x2 ?? W;
        let heads = "";
        for (let x = x1 + 4; x < x2; x += 8) heads += `<circle cx="${x}" cy="${s.y - 7}" r="2.6"/><circle cx="${x}" cy="${s.y + 7}" r="2.6"/>`;
        return `<g class="mem"><rect x="${x1}" y="${s.y - 7}" width="${x2 - x1}" height="14"/>${heads}</g>`;
      }
      if (s.t === "nucleus") {
        return `<g class="nuc"><ellipse cx="${s.cx}" cy="${s.cy}" rx="${s.rx}" ry="${s.ry}"/><text x="${s.cx + s.rx - 8}" y="${s.cy - s.ry + 14}" text-anchor="end">${esc(s.label || "Nucleus")}</text></g>`;
      }
      if (s.t === "box") {
        return `<g class="box ${s.kind || ""}"><rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="12"/><text x="${s.x + 8}" y="${s.y + 13}">${esc(s.label)}</text></g>`;
      }
      if (s.t === "label") return `<text class="region" x="${s.x}" y="${s.y}">${esc(s.text)}</text>`;
      return "";
    }).join("");
  }

  function arrowHead(x, y, ux, uy, inhibit) {
    if (inhibit) {
      const px = -uy, py = ux;
      return `<line class="head" x1="${x + px * 6}" y1="${y + py * 6}" x2="${x - px * 6}" y2="${y - py * 6}"/>`;
    }
    const s = 7, bx = x - ux * s, by = y - uy * s, px = -uy * s * 0.55, py = ux * s * 0.55;
    return `<path class="head fillhead" d="M${x},${y} L${bx + px},${by + py} L${bx - px},${by - py} Z"/>`;
  }

  function edgeSVG(D, e, i) {
    const A = D.nodes[e.a], B = D.nodes[e.b];
    let d, end, dir, start;
    if (e.curved) {
      const mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
      const dx = B.x - A.x, dy = B.y - A.y, len = Math.hypot(dx, dy) || 1;
      const off = Math.min(70, 30 + len * 0.25);
      // bow outwards: pick the side whose control point is farther from the diagram centre
      const px = -dy / len, py = dx / len;
      const ccx = W / 2, ccy = D.h / 2;
      const side = Math.hypot(mx + px * off - ccx, my + py * off - ccy) >= Math.hypot(mx - px * off - ccx, my - py * off - ccy) ? 1 : -1;
      const cx = mx + px * off * side, cy = my + py * off * side;
      start = clip(A, cx - A.x, cy - A.y);
      end = clip(B, cx - B.x, cy - B.y);
      d = `M${start[0]},${start[1]} Q${cx},${cy} ${end[0]},${end[1]}`;
      dir = [end[0] - cx, end[1] - cy];
    } else {
      start = clip(A, B.x - A.x, B.y - A.y);
      end = clip(B, A.x - B.x, A.y - B.y);
      d = `M${start[0]},${start[1]} L${end[0]},${end[1]}`;
      dir = [end[0] - start[0], end[1] - start[1]];
    }
    const len = Math.hypot(dir[0], dir[1]) || 1;
    const ux = dir[0] / len, uy = dir[1] / len;
    let heads = arrowHead(end[0], end[1], ux, uy, e.inhibit);
    if (e.both) heads += arrowHead(start[0], start[1], -ux, -uy, false);
    const cls = ["e", e.inhibit ? "inh" : "", e.curved ? "fb" : "", e.dashed ? "mv" : ""].join(" ");
    return `<g class="${cls}" data-ei="${i}"><path class="line" d="${d}"/>${heads}</g>`;
  }

  function nodeSVG(n) {
    const k = KIND[n.k] || KIND.enzyme;
    const rx = k.pill ? n.h / 2 : k.rx;
    const x = n.x - n.w / 2, y = n.y - n.h / 2;
    const lh = 12.5, ty = n.y - ((n.lines.length - 1) * lh) / 2 + n.fs * 0.36;
    const text = n.lines.map((s, i) => `<tspan x="${n.x}" y="${ty + i * lh}">${esc(s)}</tspan>`).join("");
    const slot = k.slot ? `<line class="slot" x1="${n.x}" y1="${y + 4}" x2="${n.x}" y2="${y + n.h - 4}"/>` : "";
    return `<g class="n k-${n.k}" data-n="${n.id}" style="--c:${k.stroke}">
      <rect class="ring" x="${x - 5}" y="${y - 5}" width="${n.w + 10}" height="${n.h + 10}" rx="${rx + 5}"/>
      <rect class="body" x="${x}" y="${y}" width="${n.w}" height="${n.h}" rx="${rx}" fill="${k.fill}" stroke="${k.stroke}" ${k.dash ? 'stroke-dasharray="4 3"' : ""}/>
      ${slot}<text font-size="${n.fs}">${text}</text></g>`;
  }

  function drugsSVG(D) {
    const perNode = {};
    return (D.drugs || []).map((dr, i) => {
      const n = D.nodes[dr.at];
      if (!n) return "";
      const k = (perNode[dr.at] = (perNode[dr.at] || 0) + 1) - 1;
      const cx = Math.min(W - 9, n.x + n.w / 2 - 2 - k * 17), cy = n.y - n.h / 2 - 2;
      return `<g class="dr ${dr.fx}" data-dr="${i}"><circle cx="${cx}" cy="${cy}" r="8"/><text x="${cx}" y="${cy + 3.5}">${dr.fx === "block" ? "✕" : "+"}</text><text class="num" x="${cx}" y="${cy - 11}">${i + 1}</text></g>`;
    }).join("");
  }

  // ───────── component ─────────
  function mountAll(root) {
    (root || document).querySelectorAll(".dgm:not([data-mounted])").forEach(mount);
  }

  function mount(el) {
    el.dataset.mounted = "1";
    const pid = el.dataset.pid;
    const D = prep(pid);
    const P = PATHWAYS[pid];
    if (!D || !P) { el.remove(); return; }
    const mode = el.dataset.mode || "explore";
    const interactive = mode === "explore" || mode === "target";
    const st = {
      step: mode === "explore" ? 0 : D.N, // N = show everything
      drugs: false,
      sel: null,
      focusDrug: el.dataset.drug != null ? Number(el.dataset.drug) : null,
      hl: el.dataset.highlight || null,
      timer: null
    };

    el.innerHTML = `
      <svg class="dgm-svg" viewBox="0 0 ${W} ${D.h}" role="img" aria-label="${esc(P.name)} diagram">
        <g class="scene">${sceneSVG(D)}</g>
        <g class="edges">${D.edges.map((e, i) => edgeSVG(D, e, i)).join("")}</g>
        <g class="nodes">${Object.values(D.nodes).map(nodeSVG).join("")}</g>
        <g class="drugs">${drugsSVG(D)}</g>
      </svg>
      <div class="dgm-caption" aria-live="polite"></div>
      ${interactive ? `<div class="dgm-ctl">
        <button data-ctl="prev" aria-label="Previous step">◀</button>
        <div class="dots">${D.steps.map((_, i) => `<button data-si="${i}" aria-label="Step ${i + 1}"></button>`).join("")}<button data-si="${D.N}" class="all" aria-label="Show all">All</button></div>
        <button data-ctl="next" aria-label="Next step">▶</button>
        <button data-ctl="play" class="play">Play</button>
        ${D.drugs && D.drugs.length ? `<button data-ctl="drugs" class="drugs-toggle">Drugs</button>` : ""}
      </div>` : ""}
      ${interactive ? `<ol class="dgm-legend" hidden>${(D.drugs || []).map((dr, i) => `<li data-dr="${i}" class="${dr.fx}"><b>${i + 1}</b> <strong>${esc(dr.d)}</strong> <span>${dr.fx === "block" ? "blocks" : "activates"} ${esc(D.nodes[dr.at].l.replace(/\n/g, " "))}</span></li>`).join("")}</ol>` : ""}
      ${el.dataset.list ? `<ol class="dgm-steps">${P.steps.map((s, i) => `<li data-si="${i}">${esc(s)}</li>`).join("")}</ol>` : ""}`;

    const svg = el.querySelector("svg");
    const nodeEls = [...svg.querySelectorAll("g.n")];
    const edgeEls = [...svg.querySelectorAll("g.e")];
    const drugEls = [...svg.querySelectorAll("g.dr")];
    const caption = el.querySelector(".dgm-caption");

    function cls(introStep, active) {
      if (st.step >= D.N) return "all";
      if (active) return "now";
      return introStep <= st.step ? "past" : "future";
    }

    function update() {
      const cur = st.step < D.N ? new Set(D.steps[st.step]) : new Set();
      const related = st.sel ? new Set([st.sel]) : null;
      nodeEls.forEach((g) => {
        const id = g.dataset.n;
        g.setAttribute("class", `n k-${D.nodes[id].k} ${cls(D.intro[id], cur.has(id))}${id === st.hl ? " hl" : ""}${id === st.sel ? " sel" : ""}`);
      });
      edgeEls.forEach((g) => {
        const e = D.edges[g.dataset.ei];
        const active = cur.has(e.a) && cur.has(e.b);
        const touch = related && (related.has(e.a) || related.has(e.b));
        g.setAttribute("class", `e${e.inhibit ? " inh" : ""}${e.curved ? " fb" : ""}${e.dashed ? " mv" : ""} ${cls(e.intro, active)}${touch ? " touch" : ""}`);
      });
      drugEls.forEach((g) => {
        const i = Number(g.dataset.dr);
        const show = st.focusDrug != null ? i === st.focusDrug : st.drugs;
        g.classList.toggle("show", show);
        g.classList.toggle("focus", i === st.focusDrug);
      });
      if (st.focusDrug != null) {
        const n = D.nodes[D.drugs[st.focusDrug].at];
        nodeEls.forEach((g) => g.classList.toggle("hl", g.dataset.n === n.id));
      }

      // caption
      let html;
      if (st.sel && D.nodes[st.sel]) {
        const n = D.nodes[st.sel];
        const ds = (D.drugs || []).filter((d) => d.at === n.id);
        const inSteps = D.steps.map((s, i) => (s.includes(n.id) ? i + 1 : null)).filter(Boolean);
        html = `<span class="tag" style="--c:${(KIND[n.k] || KIND.enzyme).stroke}">${KIND_NAME[n.k] || ""}</span> <strong>${esc(n.l.replace(/\n/g, " "))}</strong>
          ${n.info ? `<p>${esc(n.info)}</p>` : ""}
          ${ds.length ? `<p class="dr-here">${ds.map((d) => `<span class="${d.fx}">${d.fx === "block" ? "✕" : "+"} ${esc(d.d)}</span>`).join(" ")}</p>` : ""}
          ${inSteps.length && interactive ? `<p class="muted">Appears in step ${inSteps.join(", ")}.</p>` : ""}`;
      } else if (st.focusDrug != null) {
        const dr = D.drugs[st.focusDrug];
        html = `<strong>${esc(dr.d)}</strong> ${dr.fx === "block" ? "blocks" : "activates"} <strong>${esc(D.nodes[dr.at].l.replace(/\n/g, " "))}</strong><p>${esc(dr.note || "")}</p>`;
      } else if (st.step < D.N) {
        html = `<span class="stepno">Step ${st.step + 1}/${D.N}</span> ${esc(P.steps[st.step] || "")}`;
      } else if (mode === "target" && st.hl) {
        html = `The highlighted component is where this target sits. Tap ▶ to walk through the pathway, or tap any component.`;
      } else if (mode === "overview") {
        html = `<span class="muted">Tap a component to identify it.</span>`;
      } else {
        html = `${esc(P.summary)} <span class="muted">Tap any component for details.</span>`;
      }
      caption.innerHTML = html;

      // controls
      el.querySelectorAll(".dots [data-si]").forEach((b) => b.classList.toggle("on", Number(b.dataset.si) === st.step));
      el.querySelectorAll(".dgm-steps li").forEach((li) => li.classList.toggle("on", Number(li.dataset.si) === st.step));
      const play = el.querySelector("[data-ctl=play]");
      if (play) play.textContent = st.timer ? "Pause" : "Play";
      const dt = el.querySelector("[data-ctl=drugs]");
      if (dt) dt.classList.toggle("on", st.drugs);
      const lg = el.querySelector(".dgm-legend");
      if (lg) lg.hidden = !st.drugs;
    }

    function stop() { clearInterval(st.timer); st.timer = null; }
    function go(step) { st.step = Math.max(0, Math.min(D.N, step)); st.sel = null; update(); }

    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const t = e.target.closest("[data-n],[data-dr],[data-ctl],[data-si]");
      if (!t) { if (st.sel) { st.sel = null; update(); } return; }
      if (t.dataset.n) { st.sel = st.sel === t.dataset.n ? null : t.dataset.n; update(); return; }
      if (t.dataset.dr && interactive) {
        const dr = D.drugs[Number(t.dataset.dr)];
        st.sel = dr.at; st.drugs = true; update();
        caption.innerHTML = `<strong>${esc(dr.d)}</strong> ${dr.fx === "block" ? "blocks" : "activates"} <strong>${esc(D.nodes[dr.at].l.replace(/\n/g, " "))}</strong><p>${esc(dr.note || "")}</p>`;
        return;
      }
      if (t.dataset.si != null && t.dataset.si !== undefined && t.dataset.si !== "") { stop(); go(Number(t.dataset.si)); return; }
      switch (t.dataset.ctl) {
        case "prev": stop(); go(st.step >= D.N ? D.N - 1 : st.step - 1); break;
        case "next": stop(); go(st.step + 1); break;
        case "drugs": st.drugs = !st.drugs; update(); break;
        case "play":
          if (st.timer) { stop(); update(); break; }
          if (st.step >= D.N - 1) go(0);
          st.timer = setInterval(() => {
            if (!el.isConnected) return stop();
            if (st.step >= D.N - 1) { stop(); go(D.N); } else go(st.step + 1);
          }, 2600);
          update();
          break;
      }
    });

    update();
  }

  // Which pathway diagram (and node) shows a given target?
  function forTarget(targetId, preferred) {
    const order = [...(preferred || []), ...Object.keys(DIAGRAMS)];
    for (const pid of order) {
      const D = DIAGRAMS[pid];
      if (D && D.targets && D.targets[targetId]) return { pid, node: D.targets[targetId] };
    }
    return null;
  }

  window.Diagram = { mountAll, forTarget, has: (pid) => !!DIAGRAMS[pid], prep };
})();
