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
- **Practice counts.** "Practice" on a target, pathway, disease or concept page uses the same scheduler as the daily queue. New cards you learn there count toward the daily new-card limit. Passing a review card early confirms it without stretching its interval; failing it counts as a lapse.
- **Pathway of the day.** The Study screen shows one pathway at a time, in mechanism-group order. Tap Learn to read it, then Test Me. Cards you rate Again or Hard keep coming back until you've rated every card Good or Easy, which means it has graduated in the schedule. Once that's done, the next pathway comes up the following day. An unfinished pathway carries over to the next day. You can pick a pathway yourself ("Make Today's Pathway" on its page) or turn the feature off in Progress.
- **Visual tests.** Pathway and signalling cards are interactive exercises, not "say it to yourself" flashcards:
  - *Build the pathway*: tap the steps in order and the cell diagram lights up as you go. Two wrong taps make the next components pulse as a hint.
  - *Label the diagram*: pick a label, then tap its blank box. Outlines keep their kind colour (receptor, kinase and so on) as a clue.
  - *Where it acts*: tap the component a drug hits.
  - *Target signalling*: put the target's signalling steps in order.
  When you finish, the answer opens with your mistake count and a suggested rating: no mistakes → Good, a few → Hard, many → Again. You can still choose any rating.
- **Brands and companies.** Every drug shows its brand name and the company that markets it, and drug cards ask for them as a bonus. Search on the Targets page also matches brand and company names (e.g. "Keytruda", "Novartis").
- A card counts as *mastered* once its interval reaches 21 days or more. A target counts as *learned* when 80% or more of its cards are mastered.

## What's in the deck
- **120 drug targets in 12 therapeutic areas.** They were chosen from the most-drugged target families in Santos *et al.*, *Nat Rev Drug Discov* 2017, plus the targets of today's top-selling medicines, and include infectious-disease targets.
- **25 signalling pathways**, grouped by mechanism class: GPCR signalling, kinase signalling, inflammation and immunity, gene regulation and cell fate, physiological systems, excitable cells, and infection.
- **72 diseases on an interactive body map (17 organs).** Tap an organ to see its diseases. Each disease has its pathophysiology, features, diagnosis, treatments linked to their drug targets, a mechanism question, and 4 study cards.

Content files: `js/data/targets*.js`, `js/data/pathways*.js`, `js/data/diagrams*.js`, `js/data/diseases-*.js`, `js/data/brands-*.js` (brand and company keyed by lowercase generic name). The body map is drawn in `js/bodymap.js`.

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
