// 14 more drug targets: respiratory, GI and immunology. Appended to the main list.
window.FC_TARGETS.push(
  // ───────────── Respiratory ─────────────
  {
    id: "m3", name: "Muscarinic M3 receptor", short: "M3", gene: "CHRM3",
    family: "GPCR (Gq)", area: "Respiratory",
    location: "Airway smooth muscle and submucosal glands; bladder detrusor; salivary glands; GI smooth muscle; iris sphincter; vascular endothelium",
    role: "Mediates parasympathetic (vagal) acetylcholine effects on smooth muscle and glands: bronchoconstriction, mucus secretion, bladder contraction, salivation.",
    signalling: [
      "ACh released from postganglionic vagal nerves binds M3",
      "Gαq → PLCβ → IP3 (Ca²⁺ release from SR) + DAG (PKC)",
      "Ca²⁺–calmodulin activates MLCK; RhoA/ROCK inhibits myosin phosphatase (Ca²⁺ sensitisation)",
      "Airway smooth muscle contracts → bronchoconstriction; glands secrete mucus",
      "Presynaptic M2 autoreceptors (Gi) normally limit further ACh release"
    ],
    mechanism: "Muscarinic antagonists block vagal bronchomotor tone, which is the main reversible component of airway narrowing in COPD. In the bladder they reduce involuntary detrusor contractions.",
    drugs: [
      { name: "Tiotropium / umeclidinium / glycopyrronium", action: "Long-acting muscarinic antagonists (LAMA), inhaled", use: "COPD maintenance (alone, with LABA, or as ICS/LABA/LAMA triple therapy, e.g. Trelegy); add-on in severe asthma" },
      { name: "Ipratropium", action: "Short-acting muscarinic antagonist (SAMA)", use: "Acute COPD/asthma exacerbations (nebulised with salbutamol)" },
      { name: "Oxybutynin / solifenacin", action: "Antimuscarinics (systemic)", use: "Overactive bladder, urge incontinence" }
    ],
    question: "Tiotropium binds M1, M2 and M3 with similar affinity. How is it functionally M3-selective, and why does that matter?",
    answer: "Its selectivity is kinetic rather than based on affinity: tiotropium dissociates from M3 much more slowly than from M2. M3 on smooth muscle causes bronchoconstriction, whereas M2 on vagal nerve terminals is an inhibitory autoreceptor that limits ACh release. Blocking M2 would increase ACh release and partly offset the bronchodilation. Because tiotropium leaves M2 quickly but stays on M3 for many hours, the net effect is sustained M3 blockade, allowing once-daily dosing.",
    pearl: "Inhaled LAMAs are quaternary ammonium compounds: poorly absorbed and do not cross the blood–brain barrier, so systemic effects are mostly dry mouth, plus urinary retention and acute angle-closure glaucoma (e.g. nebuliser mist in the eye). Tertiary-amine antimuscarinics such as oxybutynin enter the CNS; cumulative anticholinergic burden is linked to confusion, falls and dementia risk in older people. Mirabegron (β3 agonist) is an alternative for overactive bladder.",
    pathways: ["gq"]
  },
  {
    id: "cyslt1", name: "Cysteinyl leukotriene receptor 1", short: "CysLT1", gene: "CYSLTR1",
    family: "GPCR (Gq)", area: "Respiratory",
    location: "Airway smooth muscle, eosinophils, mast cells, macrophages, nasal mucosa, vascular endothelium",
    role: "Receptor for the cysteinyl leukotrienes (LTC4, LTD4, LTE4) released by mast cells and eosinophils: bronchoconstriction, mucus secretion, vascular leak (oedema) and eosinophil recruitment.",
    signalling: [
      "Arachidonic acid → 5-lipoxygenase (with FLAP) → LTA4 → LTC4 synthase → LTC4 → LTD4 → LTE4",
      "LTD4 (most potent) binds CysLT1",
      "Gαq → PLCβ → IP3 → ↑Ca²⁺ → airway smooth muscle contraction",
      "Increased vascular permeability and mucus secretion; eosinophil chemotaxis and survival",
      "Contributes to airway remodelling with chronic exposure"
    ],
    mechanism: "Leukotriene receptor antagonists (LTRAs) competitively block CysLT1. Upstream, a 5-LOX inhibitor stops leukotriene synthesis entirely.",
    drugs: [
      { name: "Montelukast / zafirlukast", action: "CysLT1 antagonists (LTRAs)", use: "Asthma add-on (especially exercise-induced and aspirin-exacerbated), allergic rhinitis" },
      { name: "Zileuton", action: "5-lipoxygenase inhibitor (blocks leukotriene synthesis)", use: "Asthma (US); needs liver function monitoring" }
    ],
    question: "Why can aspirin or other NSAIDs trigger severe asthma in some patients, and why do leukotriene antagonists help them?",
    answer: "In aspirin-exacerbated respiratory disease (AERD: asthma, nasal polyps, NSAID sensitivity), patients overproduce cysteinyl leukotrienes and depend on PGE2 to restrain mast cells and 5-LOX. COX-1 inhibition removes this PGE2 brake and may divert arachidonic acid towards the 5-LOX pathway. The result is a surge of LTC4/D4/E4 → bronchospasm, rhinorrhoea and flushing within hours of a dose. Blocking CysLT1 (or 5-LOX) targets the mediator that drives the reaction. Urinary LTE4 is raised in these patients.",
    pearl: "Montelukast carries a boxed (FDA) warning for neuropsychiatric effects: nightmares, agitation, depression and suicidal thoughts, including in children. LTRAs are less effective than inhaled corticosteroids as monotherapy. Zafirlukast inhibits CYP2C9 (raises warfarin effect); zileuton is hepatotoxic. Selective COX-2 inhibitors are usually tolerated in AERD.",
    pathways: ["gq", "eicosanoid"]
  },
  {
    id: "ige", name: "Immunoglobulin E and its high-affinity receptor", short: "IgE / FcεRI", gene: "IGHE / FCER1A",
    family: "Antibody / Fc receptor (immunoreceptor)", area: "Respiratory",
    location: "IgE is made by class-switched B cells/plasma cells (driven by IL-4/IL-13). FcεRI is on mast cells, basophils and dendritic cells",
    role: "IgE arms mast cells and basophils by binding FcεRI with very high affinity. Allergen then cross-links the bound IgE and triggers immediate (type I) hypersensitivity.",
    signalling: [
      "Allergen cross-links IgE bound to FcεRI (αβγ2) on mast cells",
      "Lyn phosphorylates ITAMs on the β and γ chains → Syk recruited and activated",
      "Syk → LAT → PLCγ → IP3 (Ca²⁺ influx) + DAG (PKC)",
      "Degranulation within minutes: histamine, tryptase",
      "Newly made mediators: leukotrienes (LTC4), PGD2, cytokines (IL-4, IL-5, IL-13, TNF) → late-phase reaction"
    ],
    mechanism: "Anti-IgE antibodies bind free IgE at the site that binds FcεRI, so IgE cannot load onto mast cells and basophils.",
    drugs: [
      { name: "Omalizumab", action: "Anti-IgE monoclonal antibody (binds the Cε3 domain of free IgE)", use: "Severe allergic asthma, chronic spontaneous urticaria, nasal polyps, IgE-mediated food allergy (reduces reactions to accidental exposure)" }
    ],
    question: "Omalizumab binds IgE. Why doesn't it cross-link IgE on mast cells and cause anaphylaxis, and why does it also reduce FcεRI numbers?",
    answer: "Omalizumab binds the Cε3 domain of IgE, which is the same region that engages FcεRI. IgE already sitting on a mast cell has that site occupied by the receptor, so omalizumab cannot bind it and cannot cross-link it. It only binds free IgE, which falls sharply. FcεRI expression is stabilised by bound IgE, so with less IgE available the empty receptors are lost and FcεRI density on mast cells and basophils falls over weeks to months. Fewer armed receptors means a higher threshold for allergen-triggered degranulation.",
    pearl: "Dosing is based on baseline total IgE and body weight. Measured total IgE rises after starting treatment (assays detect drug–IgE complexes, which clear slowly), so IgE cannot be used to monitor response. Anaphylaxis to the drug itself is rare but recognised, so the first doses are given under observation.",
    pathways: ["bcell"]
  },
  {
    id: "il5", name: "Interleukin-5 and its receptor", short: "IL-5 / IL-5Rα", gene: "IL5 / IL5RA",
    family: "Cytokine / cytokine receptor (βc family)", area: "Respiratory",
    location: "IL-5 is made by Th2 cells and type 2 innate lymphoid cells (ILC2s). IL-5Rα is mainly on eosinophils and basophils (and their bone marrow precursors)",
    role: "The key eosinophil cytokine: drives eosinophil production in the bone marrow, release, activation and survival in tissues.",
    signalling: [
      "Epithelial alarmins (TSLP, IL-33, IL-25) activate Th2 cells and ILC2s → IL-5 released",
      "IL-5 binds IL-5Rα → recruits the common β chain (βc, shared with IL-3 and GM-CSF receptors)",
      "JAK1/JAK2 → STAT5 (plus Ras–MAPK and PI3K)",
      "Eosinophil differentiation, survival (anti-apoptotic) and activation",
      "Activated eosinophils release granule proteins (MBP, ECP), leukotrienes → airway damage, hyperresponsiveness and exacerbations"
    ],
    mechanism: "Neutralise IL-5 itself, or target IL-5Rα with an antibody that also kills the eosinophil via the immune system.",
    drugs: [
      { name: "Mepolizumab / reslizumab", action: "Anti-IL-5 monoclonal antibodies", use: "Severe eosinophilic asthma; mepolizumab also EGPA, hypereosinophilic syndrome, nasal polyps" },
      { name: "Benralizumab", action: "Anti-IL-5Rα antibody, afucosylated (enhanced ADCC)", use: "Severe eosinophilic asthma, EGPA" }
    ],
    question: "Why does benralizumab deplete eosinophils almost completely, whereas anti-IL-5 antibodies only reduce them?",
    answer: "Mepolizumab and reslizumab remove the IL-5 survival signal, so eosinophil numbers fall but some persist, supported by other cytokines (IL-3, GM-CSF). Benralizumab binds IL-5Rα on the eosinophil itself. Its Fc region lacks fucose, which greatly increases binding to FcγRIIIa (CD16) on NK cells. NK cells then kill the bound eosinophils by antibody-dependent cell-mediated cytotoxicity (ADCC). Blood eosinophils fall to near zero within a day, with marked tissue depletion as well.",
    pearl: "Blood eosinophil count is the biomarker that predicts response and selects patients. Eosinophils defend against helminths, so treat or screen for parasitic infection before starting in at-risk patients. Tezepelumab (anti-TSLP) acts upstream of IL-5, IL-4 and IL-13, so it also works in severe asthma with low eosinophils.",
    pathways: ["jakstat"]
  },
  {
    id: "cftr", name: "Cystic fibrosis transmembrane conductance regulator", short: "CFTR", gene: "CFTR",
    family: "ABC transporter (ABCC7) acting as an anion channel", area: "Respiratory",
    location: "Apical membrane of epithelia: airways, pancreatic ducts, intestine, bile ducts, sweat ducts, vas deferens",
    role: "cAMP-regulated Cl⁻ and HCO₃⁻ channel. Keeps airway surface liquid hydrated for mucociliary clearance and keeps pancreatic and biliary secretions fluid.",
    signalling: [
      "Gs-coupled receptor → ↑cAMP → PKA phosphorylates the regulatory (R) domain",
      "ATP binds and dimerises the two nucleotide-binding domains (NBD1, NBD2) → channel opens",
      "Cl⁻ and HCO₃⁻ secreted into the lumen; water follows; CFTR also restrains ENaC Na⁺ absorption",
      "Loss of CFTR → dehydrated, sticky mucus → impaired clearance → chronic infection (Pseudomonas) and inflammation",
      "Sweat duct: CFTR reabsorbs Cl⁻, so loss → salty sweat (high sweat chloride)"
    ],
    mechanism: "CFTR modulators fix the protein defect: correctors help misfolded CFTR fold and reach the cell surface; potentiators increase the opening (open probability) of channels already at the surface.",
    drugs: [
      { name: "Elexacaftor/tezacaftor/ivacaftor", action: "Two correctors + one potentiator", use: "CF with at least one F508del allele (and some other responsive mutations)" },
      { name: "Ivacaftor", action: "CFTR potentiator", use: "CF with gating mutations such as G551D" },
      { name: "Vanzacaftor/tezacaftor/deutivacaftor", action: "Once-daily corrector–potentiator combination", use: "CF with F508del or other responsive mutations" }
    ],
    question: "Why does ivacaftor alone work for G551D but F508del needs correctors as well?",
    answer: "G551D is a gating mutation: the protein folds and reaches the apical membrane, but its ATP-dependent opening fails. A potentiator alone fixes this by increasing open probability. F508del is a folding (processing) defect: most of the protein misfolds, is retained in the ER and degraded, so very little reaches the surface for a potentiator to act on. Correctors (elexacaftor, tezacaftor, binding different sites) stabilise folding so more CFTR traffics to the membrane. That rescued CFTR also gates poorly, so a potentiator is added to open it.",
    pearl: "Sweat chloride (≥60 mmol/L diagnostic) is a direct readout of CFTR function and falls on effective modulator therapy. Modulators are CYP3A4 substrates: avoid strong inducers (rifampicin, St John's wort) and reduce doses with strong inhibitors (azoles, clarithromycin). Monitor liver function; cataracts reported in children. Mutations producing no protein (e.g. many nonsense mutations) are not helped.",
    pathways: ["gs"]
  },

  // ───────────── GI & hepatology ─────────────
  {
    id: "h2", name: "Histamine H2 receptor", short: "H2", gene: "HRH2",
    family: "GPCR (Gs)", area: "GI & hepatology",
    location: "Basolateral membrane of gastric parietal cells; also heart, vascular smooth muscle, immune cells",
    role: "Main amplifier of gastric acid secretion: responds to histamine released from enterochromaffin-like (ECL) cells next to parietal cells.",
    signalling: [
      "Gastrin (CCK2) and ACh (M1) stimulate ECL cells → histamine released (paracrine)",
      "Histamine binds H2 on the parietal cell",
      "Gαs → adenylyl cyclase → ↑cAMP → PKA",
      "Tubulovesicles carrying H⁺/K⁺-ATPase fuse with the canalicular membrane → acid secreted",
      "cAMP synergises with Ca²⁺ signals from gastrin and ACh (M3)"
    ],
    mechanism: "H2 antagonists competitively block histamine at the parietal cell, reducing basal and stimulated acid.",
    drugs: [
      { name: "Famotidine", action: "H2 receptor antagonist", use: "GORD, dyspepsia, peptic ulcer (now mostly second-line to PPIs), night-time acid symptoms" },
      { name: "Cimetidine", action: "H2 receptor antagonist (first in class)", use: "Largely replaced because of CYP inhibition and anti-androgen effects" }
    ],
    question: "Why are H2 blockers less potent than PPIs, and why does their effect fade with continued use?",
    answer: "The parietal cell has three stimulatory inputs: histamine (H2), gastrin and ACh. H2 blockers remove only one, although histamine is the main amplifier so the effect is substantial. PPIs block the final common step (the pump), so they suppress acid whatever the stimulus. H2 blockers are particularly good at suppressing basal night-time acid, which is largely histamine-driven, but less so for meal-stimulated acid. Tolerance (tachyphylaxis) develops within about two weeks of regular use, so they work best on demand or for short courses.",
    pearl: "Ranitidine was withdrawn worldwide (2019–2020) because of contamination with NDMA, a probable carcinogen that could form in the product over time. Cimetidine inhibits several CYPs (warfarin, phenytoin, theophylline interactions) and blocks androgen receptors (gynaecomastia). Famotidine is renally cleared: reduce the dose in CKD, as confusion can occur in older people.",
    pathways: ["gs"]
  },
  {
    id: "ht3", name: "5-HT3 receptor", short: "5-HT3", gene: "HTR3A",
    family: "Ligand-gated ion channel (cation, Cys-loop pentamer)", area: "GI & hepatology",
    location: "Vagal afferent nerve endings in the gut wall; area postrema (chemoreceptor trigger zone) and nucleus tractus solitarius; enteric neurons",
    role: "The only ionotropic serotonin receptor. Detects 5-HT released from gut enterochromaffin cells and relays emetic and visceral sensory signals to the brainstem.",
    signalling: [
      "Chemotherapy or radiotherapy damages gut enterochromaffin cells → large 5-HT release",
      "5-HT binds 5-HT3 on vagal afferent terminals",
      "Channel opens → Na⁺/K⁺ (and some Ca²⁺) flux → rapid depolarisation",
      "Signals reach the NTS and area postrema (CTZ) → central pattern generator for vomiting",
      "Delayed-phase nausea relies more on substance P (NK1 receptors)"
    ],
    mechanism: "Antagonists ('setrons') block 5-HT3 peripherally on vagal afferents and centrally in the CTZ.",
    drugs: [
      { name: "Ondansetron / granisetron", action: "5-HT3 antagonists", use: "Chemotherapy-induced and postoperative nausea and vomiting" },
      { name: "Palonosetron", action: "Long-acting 5-HT3 antagonist (higher affinity, long half-life)", use: "Chemotherapy-induced nausea and vomiting, including delayed phase" },
      { name: "Alosetron", action: "5-HT3 antagonist", use: "Severe IBS with diarrhoea in women (restricted use)" }
    ],
    question: "Why are 5-HT3 antagonists so effective against acute chemotherapy-induced vomiting, but not against motion sickness?",
    answer: "Cytotoxic drugs damage enterochromaffin cells, which release large amounts of 5-HT that stimulate 5-HT3 receptors on vagal afferents and in the CTZ. Blocking these receptors cuts the main trigger of acute emesis (first 24 hours). The delayed phase depends more on substance P acting at NK1 receptors, so regimens add an NK1 antagonist (aprepitant) and dexamethasone. Motion sickness is driven by vestibular input via H1 and muscarinic pathways, not gut 5-HT, so setrons do little; antihistamines (cyclizine) or hyoscine are used instead.",
    pearl: "Ondansetron prolongs the QT interval in a dose-dependent way (avoid with other QT-prolonging drugs, hypokalaemia, hypomagnesaemia). Constipation and headache are common because gut 5-HT3 also drives motility. Alosetron causes ischaemic colitis and severe constipation, hence restricted use. Rare serotonin syndrome when combined with other serotonergic drugs.",
    pathways: ["synapse"]
  },

  // ───────────── Immunology & inflammation ─────────────
  {
    id: "s1p1", name: "Sphingosine-1-phosphate receptor 1", short: "S1P1", gene: "S1PR1",
    family: "GPCR (Gi)", area: "Immunology & inflammation",
    location: "Lymphocytes, vascular endothelium, atrial myocytes (SA node), neurons and glia",
    role: "Lets lymphocytes leave lymph nodes: they follow a gradient of S1P, which is low in lymphoid tissue and high in lymph and blood. Also maintains endothelial barrier integrity.",
    signalling: [
      "S1P (high in blood and lymph) binds S1P1 on a lymphocyte inside the lymph node",
      "Gαi → PI3K–AKT and Rac → migration towards S1P → exit into lymph",
      "Drug (agonist) binds → S1P1 internalised and degraded (β-arrestin, ubiquitination)",
      "Lymphocyte can no longer sense the S1P gradient → stays in the lymph node",
      "Fewer circulating autoreactive lymphocytes reach the CNS or gut"
    ],
    mechanism: "S1P receptor modulators are agonists that act as functional antagonists: persistent activation causes S1P1 internalisation and loss, so lymphocytes are trapped in lymph nodes (reversible lymphopenia).",
    drugs: [
      { name: "Fingolimod", action: "Non-selective S1P modulator (S1P1, 3, 4, 5); prodrug phosphorylated by sphingosine kinase 2", use: "Relapsing MS" },
      { name: "Siponimod / ozanimod / ponesimod", action: "More selective S1P1 (± S1P5) modulators", use: "Relapsing MS; siponimod in active secondary progressive MS; ozanimod also UC" },
      { name: "Etrasimod", action: "S1P1, 4, 5 modulator", use: "Ulcerative colitis" }
    ],
    question: "Why do S1P modulators cause bradycardia mainly with the first dose?",
    answer: "S1P1 is expressed on atrial myocytes and SA node cells. The first dose activates it: Gαi releases Gβγ, which opens GIRK (Kir3) K⁺ channels, hyperpolarising pacemaker cells and slowing heart rate (and sometimes AV conduction), similar to vagal ACh at M2. With continued exposure the same agonist internalises and downregulates S1P1 on the heart, so the effect fades within days while the lymphocyte effect persists. This is why newer drugs are started with a dose titration and some patients need first-dose heart monitoring.",
    pearl: "Other on-target effects: macular oedema (S1P regulates endothelial barrier; check eyes early), raised liver enzymes, herpes zoster and rare cryptococcal infection or PML. Check VZV immunity and vaccinate before starting. Effector memory T cells (which lack CCR7) are less affected, which partly preserves immune surveillance. Stopping fingolimod can cause severe MS rebound. Siponimod requires CYP2C9 genotyping (contraindicated in CYP2C9*3/*3).",
    pathways: ["gi"]
  },
  {
    id: "c5", name: "Complement component C5", short: "C5", gene: "C5",
    family: "Plasma protein (complement cascade)", area: "Immunology & inflammation",
    location: "Made mainly by the liver; circulates in plasma",
    role: "Gateway to the terminal complement pathway. Cleavage gives C5a (potent anaphylatoxin and neutrophil chemoattractant) and C5b, which starts assembly of the membrane attack complex (MAC, C5b-9).",
    signalling: [
      "Classical, lectin and alternative pathways converge on C3 convertases → C3b deposited on surfaces",
      "C3b joins the convertase → C5 convertase cleaves C5 → C5a + C5b",
      "C5a binds C5aR1 → neutrophil recruitment and activation, inflammation",
      "C5b + C6, C7, C8, C9 → MAC pores → cell lysis",
      "Host cells are protected by GPI-anchored regulators CD55 (DAF) and CD59 (blocks MAC)"
    ],
    mechanism: "Anti-C5 antibodies bind C5 and prevent its cleavage, blocking both C5a and MAC while leaving upstream C3b opsonisation intact. Proximal inhibitors act earlier at C3, factor B or factor D.",
    drugs: [
      { name: "Eculizumab / ravulizumab", action: "Anti-C5 monoclonal antibodies (ravulizumab engineered for longer half-life, 8-weekly dosing)", use: "PNH, atypical HUS, AChR-antibody-positive generalised myasthenia gravis, AQP4-antibody-positive NMOSD" },
      { name: "Pegcetacoplan", action: "C3 inhibitor (pegylated peptide)", use: "PNH" },
      { name: "Iptacopan", action: "Oral factor B inhibitor (alternative pathway)", use: "PNH, C3 glomerulopathy, IgA nephropathy" }
    ],
    question: "Why does blocking C5 stop haemolysis in PNH, and why do some patients still need transfusions on anti-C5 therapy?",
    answer: "In PNH, a somatic PIGA mutation in a blood stem cell prevents GPI anchor synthesis, so red cells lack CD55 and CD59. Without CD59, the MAC forms freely on red cells, causing intravascular haemolysis, haemoglobinuria and thrombosis. Anti-C5 prevents MAC formation, so intravascular haemolysis largely stops. But without CD55, C3b still coats the surviving red cells, which are then removed by macrophages in the liver and spleen (extravascular haemolysis). Proximal inhibitors at C3 or factor B block this as well.",
    pearl: "The MAC is essential for killing Neisseria, so terminal complement blockade greatly increases the risk of meningococcal disease. Patients must be vaccinated against meningococci (MenACWY and MenB) before starting, and many receive antibiotic prophylaxis; prescribing is restricted under risk-management programmes. A rare C5 polymorphism (more common in Japanese people) prevents eculizumab binding, causing non-response.",
    pathways: ["complement"]
  },
  {
    id: "calcineurin", name: "Calcineurin", short: "Calcineurin", gene: "PPP3CA",
    family: "Enzyme (Ca²⁺/calmodulin-dependent serine/threonine phosphatase)", area: "Immunology & inflammation",
    location: "Ubiquitous; critical in T cells. Also kidney, brain, pancreatic β cells",
    role: "Links the T-cell receptor Ca²⁺ signal to gene transcription by dephosphorylating NFAT, which drives IL-2 and other cytokine genes (signal 1 of T-cell activation).",
    signalling: [
      "Antigen binds the TCR → PLCγ1 → IP3 → Ca²⁺ release, then store-operated Ca²⁺ entry (STIM/ORAI)",
      "Ca²⁺–calmodulin activates calcineurin",
      "Calcineurin dephosphorylates NFAT → NFAT enters the nucleus",
      "NFAT (with AP-1) → transcription of IL-2, IFN-γ, CD40L",
      "IL-2 → IL-2 receptor → JAK–STAT and mTOR → T-cell proliferation"
    ],
    mechanism: "Calcineurin inhibitors (CNIs) don't inhibit the enzyme alone. Each first binds an intracellular immunophilin, and the drug–immunophilin complex blocks calcineurin's access to NFAT.",
    drugs: [
      { name: "Tacrolimus", action: "Binds FKBP12 → complex inhibits calcineurin", use: "Organ transplant rejection prophylaxis; topical for atopic eczema" },
      { name: "Ciclosporin", action: "Binds cyclophilin → complex inhibits calcineurin", use: "Transplant, severe psoriasis, eczema, RA, acute severe UC" },
      { name: "Voclosporin", action: "Ciclosporin analogue (calcineurin inhibitor)", use: "Lupus nephritis" }
    ],
    question: "Why are calcineurin inhibitors nephrotoxic, and why does topical tacrolimus avoid this?",
    answer: "Calcineurin is not only in T cells. In the kidney, CNIs constrict the afferent arteriole (more endothelin and thromboxane, less NO and prostaglandins), lowering glomerular blood flow and GFR. This acute effect is dose-related and reversible. With long-term use, chronic ischaemia leads to striped interstitial fibrosis and arteriolar hyalinosis, a major cause of late kidney transplant dysfunction. Topical tacrolimus is applied to the skin, where it blocks local T-cell activation, but very little is absorbed, so systemic toxicity is avoided; unlike steroids it does not cause skin atrophy.",
    pearl: "Narrow therapeutic index, so trough levels are monitored. CNIs are CYP3A4 and P-gp substrates: clarithromycin, azoles, diltiazem and grapefruit raise levels (toxicity); rifampicin, carbamazepine and St John's wort lower them (rejection). CYP3A5 expressers (*1 carriers) clear tacrolimus faster and need higher doses. Other effects: hyperkalaemia, hypomagnesaemia, hypertension, tremor, PRES, post-transplant diabetes (more with tacrolimus); gingival hyperplasia and hirsutism with ciclosporin.",
    pathways: ["tcell"]
  },
  {
    id: "fcrn", name: "Neonatal Fc receptor", short: "FcRn", gene: "FCGRT",
    family: "MHC class I-like Fc receptor (with β2-microglobulin)", area: "Immunology & inflammation",
    location: "Vascular endothelium, haematopoietic cells (monocytes, macrophages), placental syncytiotrophoblast, intestinal and other epithelia",
    role: "Rescues IgG and albumin from lysosomal degradation and recycles them to the circulation; also transports maternal IgG across the placenta.",
    signalling: [
      "Endothelial cells continually take up plasma (with IgG and albumin) by pinocytosis",
      "In the acidic endosome (pH ~6) FcRn binds IgG Fc (and albumin at a separate site)",
      "Bound IgG is recycled to the cell surface; unbound proteins go to lysosomes and are degraded",
      "At neutral blood pH (7.4) FcRn releases the IgG back into the circulation",
      "Result: IgG half-life of ~3 weeks, much longer than IgA or IgM"
    ],
    mechanism: "FcRn blockers occupy the IgG-binding site, so all IgG (including pathogenic autoantibodies) is degraded faster. Total IgG falls substantially, without affecting IgA, IgM or B cells.",
    drugs: [
      { name: "Efgartigimod", action: "Engineered IgG1 Fc fragment that binds FcRn with high affinity at both acidic and neutral pH", use: "Generalised myasthenia gravis (AChR-antibody-positive), CIDP" },
      { name: "Rozanolixizumab / nipocalimab", action: "Anti-FcRn monoclonal antibodies", use: "Generalised myasthenia gravis" }
    ],
    question: "How does blocking FcRn treat antibody-mediated diseases like myasthenia gravis, and why is the effect not immediate?",
    answer: "Most IgG is protected from degradation because FcRn binds it in acidic endosomes and recycles it back to the blood. Blocking FcRn means IgG taken into cells is routed to lysosomes instead, so its half-life shortens and IgG levels fall, including the anti-AChR autoantibodies that damage the neuromuscular junction. It does not stop autoantibody production. Levels fall progressively over one to two weeks as existing IgG is cleared, and recover after the drug is stopped, so treatment is given in cycles or continuously.",
    pearl: "The same mechanism explains why therapeutic antibodies (IgG) have long half-lives, and why ravulizumab and some other antibodies are engineered for stronger pH-dependent FcRn binding. FcRn blockers also speed clearance of IVIG and other IgG-based drugs, so timing matters. Infections and headache are the main adverse effects. Because FcRn carries maternal IgG to the fetus, blockade is being studied in haemolytic disease of the fetus and newborn.",
    pathways: ["bcell"]
  },
  {
    id: "mtor", name: "Mechanistic target of rapamycin", short: "mTOR", gene: "MTOR",
    family: "Serine/threonine kinase (PI3K-related kinase family)", area: "Immunology & inflammation",
    location: "Ubiquitous; forms two complexes, mTORC1 (with raptor) and mTORC2 (with rictor)",
    role: "Central growth controller: integrates growth factors, nutrients (amino acids) and energy status to drive protein synthesis, cell growth and proliferation, and to suppress autophagy.",
    signalling: [
      "Growth factor or IL-2 receptor → PI3K → AKT",
      "AKT phosphorylates TSC2 → inactivates the TSC1/TSC2 complex (a GAP for Rheb)",
      "Rheb-GTP activates mTORC1 (amino acids also needed via Rag GTPases)",
      "mTORC1 phosphorylates S6K1 and 4E-BP1 → cap-dependent translation, ribosome biogenesis → cell growth",
      "In T cells: drives G1 → S progression in response to IL-2 (signal 3)"
    ],
    mechanism: "Rapalogs bind FKBP12, and the complex binds mTOR's FRB domain to allosterically inhibit mTORC1. Unlike tacrolimus–FKBP12, it does not inhibit calcineurin.",
    drugs: [
      { name: "Sirolimus / everolimus", action: "mTORC1 inhibitors (rapalogs, via FKBP12)", use: "Transplant (often to spare CNIs); drug-eluting coronary stents; everolimus also TSC (SEGA, renal angiomyolipoma, seizures), HR+ breast cancer (with exemestane), RCC, neuroendocrine tumours" },
      { name: "Temsirolimus", action: "IV rapalog (prodrug of sirolimus)", use: "Advanced renal cell carcinoma" },
      { name: "Topical sirolimus", action: "Local mTORC1 inhibition", use: "Facial angiofibromas in tuberous sclerosis" }
    ],
    question: "Why are rapalogs so effective in tuberous sclerosis, and why are they used to coat coronary stents?",
    answer: "TSC1 and TSC2 together switch off Rheb and so keep mTORC1 in check. In tuberous sclerosis, loss of TSC1 or TSC2 leaves mTORC1 constantly active, driving growth of hamartomas (SEGA, angiomyolipomas, angiofibromas). Rapalogs directly block the overactive step, so tumours shrink, though they often regrow on stopping. In stents, the problem is restenosis from vascular smooth muscle proliferation after injury. Local release of sirolimus or everolimus halts these cells in G1, preventing neointimal overgrowth.",
    pearl: "On-target side effects: mouth ulcers (stomatitis), hyperlipidaemia and hyperglycaemia (mTOR controls lipid and glucose metabolism), impaired wound healing and lymphoceles (so often avoided immediately after transplant surgery), non-infectious pneumonitis, proteinuria and cytopenias. Less nephrotoxic than CNIs. Sirolimus and everolimus are CYP3A4/P-gp substrates with the same interactions as tacrolimus. In cancer, mTORC1 inhibition removes S6K1 negative feedback on IRS-1, which reactivates AKT and limits efficacy.",
    pathways: ["pi3k", "tcell"]
  },
  {
    id: "h1", name: "Histamine H1 receptor", short: "H1", gene: "HRH1",
    family: "GPCR (Gq)", area: "Immunology & inflammation",
    location: "Vascular endothelium, smooth muscle (airway, gut), sensory nerves, and CNS neurons (histaminergic projections from the tuberomammillary nucleus)",
    role: "Mediates the immediate allergic response to mast cell histamine: itch, sneezing, vasodilation, increased vascular permeability (wheal and flare) and bronchoconstriction. In the brain it promotes wakefulness.",
    signalling: [
      "Histamine (from mast cells and basophils) binds H1",
      "Gαq → PLCβ → IP3 (Ca²⁺) + DAG (PKC)",
      "Endothelium: NO → vasodilation; endothelial cells contract → gaps → plasma leak (oedema, wheal)",
      "Sensory nerves: itch and sneezing; axon reflex → flare",
      "PKC → NF-κB → pro-inflammatory adhesion molecules and cytokines"
    ],
    mechanism: "Most 'antihistamines' are inverse agonists: H1 has constitutive activity, and these drugs stabilise its inactive state rather than simply competing with histamine.",
    drugs: [
      { name: "Cetirizine / loratadine / fexofenadine", action: "Second-generation H1 inverse agonists (non-sedating)", use: "Allergic rhinitis, urticaria, allergic conjunctivitis" },
      { name: "Chlorphenamine / diphenhydramine", action: "First-generation H1 inverse agonists (sedating, antimuscarinic)", use: "Acute allergic reactions (adjunct), itch, occasional sleep aid" },
      { name: "Cyclizine / promethazine", action: "First-generation H1 antagonists", use: "Nausea and vomiting, motion sickness" }
    ],
    question: "Why do first-generation antihistamines cause drowsiness and dry mouth, while second-generation drugs mostly don't?",
    answer: "First-generation drugs are small, lipophilic and uncharged, so they cross the blood–brain barrier and block H1 receptors on neurons that receive input from the tuberomammillary nucleus, whose histamine release keeps us awake. They are also poorly selective, blocking muscarinic receptors (dry mouth, urinary retention, confusion) and sometimes α1 and 5-HT receptors. Second-generation drugs are more polar or zwitterionic and are substrates of P-glycoprotein, which pumps them out of the brain, and they are highly H1-selective. So they act on peripheral H1 with little sedation.",
    pearl: "Terfenadine and astemizole were withdrawn for hERG blockade and torsades (especially with CYP3A4 inhibitors); fexofenadine is terfenadine's active metabolite without the hERG problem. Fruit juices reduce fexofenadine absorption (OATP inhibition). First-generation agents add to anticholinergic burden in older people. H1 is a classic example of the GPCR family, the targets of about a third of small-molecule drugs (Santos et al., 2017).",
    pathways: ["gq", "nfkb"]
  },
  {
    id: "pde4", name: "Phosphodiesterase 4", short: "PDE4", gene: "PDE4A–D",
    family: "Enzyme (phosphodiesterase)", area: "Immunology & inflammation",
    location: "The main cAMP-degrading enzyme in immune cells (monocytes, macrophages, T cells, neutrophils, eosinophils); also keratinocytes, airway smooth muscle and brain (including the area postrema)",
    role: "Hydrolyses cAMP to AMP, keeping cAMP low and allowing pro-inflammatory cytokine production in immune cells.",
    signalling: [
      "PDE4 inhibited → ↑cAMP in immune cells",
      "cAMP → PKA (and Epac)",
      "PKA phosphorylates CREB → ↑ anti-inflammatory IL-10",
      "PKA interferes with NF-κB-driven transcription → ↓TNF, IL-23, IL-17, IFN-γ",
      "Reduced inflammatory cell activation in skin, joints and airways"
    ],
    mechanism: "Selective PDE4 inhibitors raise cAMP to dampen inflammation inside immune cells, without depleting any one cell type or cytokine entirely.",
    drugs: [
      { name: "Apremilast", action: "Oral PDE4 inhibitor", use: "Psoriasis, psoriatic arthritis, oral ulcers of Behçet's disease" },
      { name: "Roflumilast", action: "PDE4 inhibitor (oral or topical)", use: "Oral: severe COPD with chronic bronchitis and frequent exacerbations. Topical: plaque psoriasis, atopic dermatitis" },
      { name: "Crisaborole", action: "Topical PDE4 inhibitor", use: "Mild to moderate atopic eczema" }
    ],
    question: "How does raising cAMP in immune cells reduce inflammation, and why do oral PDE4 inhibitors cause nausea?",
    answer: "cAMP is a brake on immune activation. Higher cAMP activates PKA, which phosphorylates CREB to increase IL-10 and interferes with NF-κB-driven production of TNF, IL-23, IL-17 and IFN-γ. The result is a broad reduction in inflammatory signalling rather than complete blockade of one pathway, so efficacy is modest compared with biologics, but immunosuppression and infection risk are low. The same cAMP rise in the brain (PDE4D in the area postrema and vomiting centre) causes nausea and vomiting. Topical forms (crisaborole, roflumilast cream) deliver the drug to skin while avoiding most of these systemic effects.",
    pearl: "Diarrhoea, nausea and headache are common at the start and improve with dose titration; weight loss occurs. Depression and suicidal thoughts have been reported, so use caution in patients with psychiatric history. No routine blood monitoring is needed for apremilast. Theophylline is an older non-selective PDE inhibitor; ensifentrine is an inhaled PDE3/PDE4 inhibitor for COPD.",
    pathways: ["gs", "nfkb"]
  }
);
