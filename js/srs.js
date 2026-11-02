// Spaced-repetition scheduler (SM-2 variant with Anki-style learning steps).
// Ratings: 1 = Again, 2 = Hard, 3 = Good, 4 = Easy
(function () {
  const MIN = 60 * 1000;
  const DAY = 24 * 60 * MIN;
  const LEARN_STEPS = [1, 10];   // minutes
  const RELEARN_STEPS = [10];    // minutes
  const START_EASE = 2.5;
  const MIN_EASE = 1.3;
  const MASTERED_DAYS = 21;

  function blank() {
    return { state: "new", due: 0, interval: 0, ease: START_EASE, step: 0, reps: 0, lapses: 0, last: 0 };
  }

  function fuzz(days) {
    if (days < 3) return days;
    const spread = Math.max(1, Math.round(days * 0.05));
    return days + Math.round((Math.random() * 2 - 1) * spread);
  }

  function graduate(s, days, now) {
    return { ...s, state: "review", step: 0, interval: days, due: now + fuzz(days) * DAY };
  }

  // Returns a new card state. Pure apart from fuzz.
  function schedule(prev, rating, now) {
    const s = { ...blank(), ...prev, reps: (prev?.reps || 0) + 1, last: now };
    const learning = s.state === "new" || s.state === "learning" || s.state === "relearning";

    if (learning) {
      const relearn = s.state === "relearning";
      const steps = relearn ? RELEARN_STEPS : LEARN_STEPS;
      const state = relearn ? "relearning" : "learning";
      let step = s.state === "new" ? 0 : s.step;

      if (rating === 1) return { ...s, state, step: 0, due: now + steps[0] * MIN };
      if (rating === 2) {
        const mins = step === 0 && steps.length > 1 ? (steps[0] + steps[1]) / 2 : steps[step] * 1.5;
        return { ...s, state, step, due: now + mins * MIN };
      }
      if (rating === 3) {
        step += 1;
        if (step >= steps.length) return graduate(s, relearn ? Math.max(1, s.interval) : 1, now);
        return { ...s, state, step, due: now + steps[step] * MIN };
      }
      // Easy
      return graduate(s, relearn ? Math.max(1, s.interval) + 1 : 4, now);
    }

    // Review card
    let { interval, ease } = s;
    if (rating === 1) {
      return {
        ...s, state: "relearning", step: 0, lapses: s.lapses + 1,
        ease: Math.max(MIN_EASE, ease - 0.2),
        interval: Math.max(1, Math.round(interval * 0.5)),
        due: now + RELEARN_STEPS[0] * MIN
      };
    }
    if (rating === 2) { ease = Math.max(MIN_EASE, ease - 0.15); interval = Math.max(interval + 1, Math.round(interval * 1.2)); }
    if (rating === 3) { interval = Math.max(interval + 1, Math.round(interval * ease)); }
    if (rating === 4) { interval = Math.max(interval + 1, Math.round(interval * ease * 1.3)); ease += 0.15; }
    return { ...s, ease, interval, due: now + fuzz(interval) * DAY };
  }

  // What each button would do, for labels. Uses no fuzz.
  function preview(prev, now) {
    const out = {};
    for (const r of [1, 2, 3, 4]) {
      const next = schedule(prev, r, now);
      out[r] = next.state === "review" ? next.interval * DAY : next.due - now;
    }
    return out;
  }

  function formatDelta(ms) {
    const m = ms / MIN;
    if (m < 60) return Math.max(1, Math.round(m)) + "m";
    const h = m / 60;
    if (h < 24) return Math.round(h) + "h";
    const d = h / 24;
    if (d < 30) return Math.round(d) + "d";
    if (d < 365) return (d / 30).toFixed(1).replace(".0", "") + "mo";
    return (d / 365).toFixed(1).replace(".0", "") + "y";
  }

  window.SRS = { schedule, preview, formatDelta, blank, MIN, DAY, MASTERED_DAYS };
})();
