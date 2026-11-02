# Drug Target Flashcards

A local spaced-repetition app for learning 50 major drug targets, the signalling pathways behind them, and core pharmacology concepts. It has no dependencies and needs no internet.

## Run
- Double-click `index.html`, **or**
- run `./start.sh` to serve it at http://localhost:8765. This is more reliable for saving progress.

Progress is stored in your browser's localStorage. Use **Progress → Export** to back it up.

## iPhone app
Hosted at **https://jonnysmith123-code.github.io/drug-target-flashcards/**

1. Open that link in **Safari** (it must be Safari, not Chrome).
2. Tap **Share** (□↑) → **Add to Home Screen** → **Add**.
3. Launch it from the home-screen icon. It runs full-screen and works offline after the first load.

Progress on the phone is separate from progress on your Mac. To move it between devices, use Export on one and Import on the other.

### Updating the app
1. Edit the files.
2. Bump `VERSION` in `sw.js` (e.g. `v1` → `v2`).
3. `git commit -am "…" && git push`. GitHub Pages redeploys in about a minute.

The phone picks up the new version the next time you open the app while online. Close and reopen it if you don't see the change.

## How it works
- **Study**: Anki-style scheduling (SM-2). Rate each card Again / Hard / Good / Easy (keys 1–4, Space = show/Good). New cards arrive in a guided order: concepts → each target with its pathways. The default is 15 new cards a day, which you can change in Progress.
- **Targets / Pathways / Concepts**: browse reference pages. "Practice" drills a single target or pathway without affecting your schedule.
- A card counts as *mastered* once its interval reaches 21 days or more. A target counts as *learned* when 80% or more of its cards are mastered.

## Interactive pathway diagrams
Every pathway is drawn as a cell diagram (`js/data/diagrams.js`, rendered by `js/diagram.js`).
- **Step through it** with ◀ ▶ or Play. The current step's components light up and signals flow along the arrows.
- **Tap any component** for an explanation and the drugs that act there.
- **Drugs** shows a marker on each drug-target site: ✕ blocks, + activates.
- Target pages and signalling cards show the target highlighted within its pathway.
- **"Where it acts" cards**: the question shows the pathway, and the answer marks where the drug hits.

## Cards per target
Overview (what it is, normal role) · Signalling cascade · Drug strategy · a "Why does this work?" mechanism question · one card per drug.

## Editing content
All content is plain JS in `js/data/`:
- `targets.js`: the 50 targets (add or edit freely; cards are generated automatically)
- `pathways.js`: 15 signalling pathways
- `concepts.js`: pharmacology fundamentals

Card IDs come from the target, pathway and drug names, so editing text keeps your progress. Renaming a drug resets that one card.

Content is for education. Verify clinical details against current guidelines and labels.
