// Core pharmacology concepts. `after` = insert into the learning order after that target id
// (omit to introduce at the very start).
window.FC_CONCEPTS = [
  {
    id: "agonist-antagonist",
    title: "Agonist vs antagonist vs inverse agonist",
    question: "What is the difference between an agonist, an antagonist and an inverse agonist?",
    answer: [
      "**Agonist**: binds a receptor AND activates it (has affinity + efficacy). E.g. salbutamol at β2.",
      "**Antagonist** (neutral): binds but has no efficacy; it simply occupies the site and prevents the endogenous ligand acting. E.g. naloxone at μ-opioid.",
      "**Inverse agonist**: binds and reduces the receptor's *constitutive* (ligand-independent) activity below baseline. E.g. pimavanserin at 5-HT2A; many 'antihistamines' are technically H1 inverse agonists.",
      "Key idea: whether you want an agonist or an antagonist depends on whether the receptor's normal signal is the thing you want MORE of or LESS of."
    ]
  },
  {
    id: "agonist-anti-inflammatory",
    title: "Agonist or antagonist for inflammation?",
    question: "Why is IL-1β blocked (not agonised) to treat inflammation — and when CAN an agonist be anti-inflammatory?",
    answer: [
      "IL-1β is itself a **pro-inflammatory** signal: IL-1R1 → MyD88 → NF-κB → IL-6, CRP, COX-2, adhesion molecules, more IL-1β. Agonising it would amplify inflammation (IL-1 infusion causes fever and shock). So we **block** it: anakinra (IL-1 receptor antagonist), canakinumab (anti-IL-1β antibody).",
      "An agonist is anti-inflammatory only when the receptor drives a **brake**:",
      "• Glucocorticoid receptor agonists (prednisolone) — transrepress NF-κB/AP-1.",
      "• β2 / adenosine A2A agonists — raise cAMP in immune cells, damping activation.",
      "• Low-dose IL-2 (investigational) — preferentially expands regulatory T cells.",
      "• Abatacept *is* CTLA-4 (a natural brake) fused to Fc.",
      "• S1P1 agonists (fingolimod) — 'functional antagonists': agonism causes receptor internalisation, trapping lymphocytes in lymph nodes."
    ]
  },
  {
    id: "affinity-efficacy-potency",
    title: "Affinity, efficacy, potency",
    question: "Define affinity, efficacy and potency. Can a drug be potent but have low efficacy?",
    answer: [
      "**Affinity**: how tightly a drug binds (Kd — lower = tighter).",
      "**Efficacy** (intrinsic activity): how much response a bound drug produces (Emax).",
      "**Potency**: the concentration needed for a given effect (EC50) — depends on BOTH affinity and efficacy.",
      "Yes: buprenorphine is very potent at μ-opioid (high affinity, works at tiny doses) but has lower efficacy than morphine (partial agonist)."
    ]
  },
  {
    id: "partial-agonist",
    title: "Partial agonists",
    question: "How can a partial agonist act as an antagonist?",
    answer: [
      "A partial agonist can't produce the full response even at 100% occupancy.",
      "When no full agonist is around → it activates (raises signalling to its ceiling).",
      "When a full agonist is present → it displaces it and *lowers* the net signal to its own ceiling = functional antagonist.",
      "Examples: **buprenorphine** (μ-opioid; precipitates withdrawal in someone on heroin/methadone, ceiling on respiratory depression), **aripiprazole** (D2; stabilises dopamine tone), **varenicline** (α4β2 nicotinic; reduces craving AND blunts the reward from smoking)."
    ]
  },
  {
    id: "competitive-noncompetitive",
    title: "Competitive vs non-competitive antagonism",
    question: "How do competitive and non-competitive (or irreversible) antagonists change the agonist dose–response curve?",
    answer: [
      "**Competitive (surmountable)**: same site, reversible. Shifts the curve RIGHT (needs more agonist), Emax unchanged — enough agonist outcompetes it. E.g. naloxone, losartan.",
      "**Non-competitive / allosteric / irreversible**: lowers the maximum response (Emax ↓); more agonist cannot fully overcome it. E.g. irreversible P2Y12 block by clopidogrel; ticagrelor is non-competitive with ADP.",
      "Clinical consequence: high-dose opioid can partly overcome naloxone; nothing overcomes an irreversibly inactivated platelet except new platelets."
    ]
  },
  {
    id: "allosteric",
    title: "Allosteric modulators",
    question: "What is a positive allosteric modulator (PAM), and why is it often safer than a direct agonist?",
    answer: [
      "A PAM binds a site distinct from the endogenous ligand and increases that ligand's affinity and/or efficacy. It does little on its own.",
      "Because it only amplifies signalling *where and when the natural ligand is released*, it preserves the physiological pattern and has a ceiling.",
      "Examples: **benzodiazepines** (GABA-A, α/γ2 interface), **cinacalcet** (calcium-sensing receptor). Allosteric *inhibitors*: **asciminib** (BCR-ABL myristoyl pocket), **deucravacitinib** (TYK2 pseudokinase domain), **trametinib** (MEK)."
    ]
  },
  {
    id: "biologic-strategies",
    title: "Ways an antibody can block a pathway",
    question: "Compare: neutralising the ligand, blocking the receptor, a decoy receptor, and depleting cells. Give an example of each.",
    answer: [
      "**Neutralise the ligand**: antibody mops up the cytokine — adalimumab (TNF), canakinumab (IL-1β), bevacizumab (VEGF-A), secukinumab (IL-17A).",
      "**Block the receptor**: antibody sits on the receptor — tocilizumab (IL-6R), dupilumab (IL-4Rα, blocks IL-4 AND IL-13), erenumab (CGRP receptor), pembrolizumab (PD-1).",
      "**Decoy receptor / trap**: receptor fused to Fc soaks up ligand — etanercept (TNFR2-Fc), aflibercept (VEGF trap), rilonacept (IL-1 trap).",
      "**Deplete the cell**: antibody marks cells for killing via Fc effector functions (ADCC, complement) — rituximab (CD20).",
      "**Redirect cells**: bispecific T-cell engagers — glofitamab (CD20×CD3)."
    ],
    after: "il1b"
  },
  {
    id: "covalent",
    title: "Covalent / irreversible inhibitors",
    question: "What determines how long an irreversible inhibitor works, and how do tumours escape covalent kinase inhibitors?",
    answer: [
      "Duration is set by the **resynthesis rate of the target**, not the drug's plasma half-life. E.g. aspirin on platelet COX-1 (~7–10 days, platelet lifespan), PPIs on H+/K+ ATPase (~1–2 days, new pumps).",
      "Covalent kinase inhibitors attach to a specific cysteine: osimertinib → EGFR **C797**, ibrutinib → BTK **C481**, sotorasib → KRAS **G12C**.",
      "Escape: mutate that cysteine (EGFR C797S, BTK C481S) → drug can only bind weakly. Answer: non-covalent next-generation drugs (e.g. pirtobrutinib for BTK)."
    ],
    after: "egfr"
  },
  {
    id: "synthetic-lethality",
    title: "Synthetic lethality",
    question: "What is synthetic lethality, and why is it a powerful way to target cancer?",
    answer: [
      "Two genes are synthetically lethal if losing either alone is tolerated but losing both kills the cell.",
      "If a tumour has already lost gene A (e.g. BRCA1/2 → no homologous recombination), a drug against gene B (PARP) kills the tumour while normal cells (which still have A) survive.",
      "This lets you target a loss-of-function (tumour suppressor) mutation, which you can't drug directly."
    ],
    after: "parp"
  },
  {
    id: "desensitisation",
    title: "Desensitisation & tachyphylaxis",
    question: "How can continuous stimulation of a receptor end up switching it off? Give two clinical examples.",
    answer: [
      "Agonist-bound GPCRs are phosphorylated by GRKs → β-arrestin binds → uncouples G protein and drives internalisation/downregulation.",
      "**GnRH agonists** (leuprolide): pulsatile GnRH is physiological; continuous agonist → pituitary GnRH-R downregulation → ↓LH → castration-level testosterone (after an initial flare).",
      "**Nitrate tolerance**: continuous nitrates lose effect → need a nitrate-free interval.",
      "**LABA tolerance / β2 downregulation**: one reason LABAs are paired with inhaled corticosteroids (steroids upregulate β2 receptors)."
    ],
    after: "ar"
  },
  {
    id: "on-target-toxicity",
    title: "On-target toxicity",
    question: "What is on-target toxicity? Give three examples where a side effect is a direct read-out of the mechanism.",
    answer: [
      "Toxicity caused by hitting the intended target in a tissue where you didn't want to — it can't be fixed by making the drug more selective.",
      "• EGFR inhibitors → acneiform rash (skin keratinocytes need EGFR).",
      "• Anti-VEGF → hypertension & proteinuria (VEGF maintains endothelial NO and podocytes).",
      "• PI3Kα inhibitors → hyperglycaemia (insulin signals through PI3Kα).",
      "• Anti-IL-17 → oral candida (IL-17 drives antifungal defence).",
      "• Anti-TNF → TB reactivation (TNF maintains granulomas)."
    ],
    after: "vegf"
  },
  {
    id: "prodrug",
    title: "Prodrugs",
    question: "What is a prodrug? Why do clopidogrel, PPIs and tamoxifen all illustrate prodrug pitfalls?",
    answer: [
      "A prodrug is inactive until metabolised or chemically activated in the body.",
      "**Clopidogrel** needs CYP2C19 → poor metabolisers get less antiplatelet effect.",
      "**PPIs** need acid in the parietal cell canaliculus → work best taken 30–60 min before a meal (when pumps are activated).",
      "**Tamoxifen** → endoxifen via CYP2D6 → potent CYP2D6 inhibitors (paroxetine, fluoxetine) may reduce efficacy.",
      "**Codeine** → morphine via CYP2D6 → ultra-rapid metabolisers risk toxicity."
    ],
    after: "p2y12"
  },
  {
    id: "degraders",
    title: "Targeted protein degradation",
    question: "How do molecular glues and PROTACs work, and why can they hit 'undruggable' proteins?",
    answer: [
      "They hijack an E3 ubiquitin ligase (e.g. cereblon) to tag a target protein for destruction by the proteasome.",
      "**Molecular glue**: lenalidomide/pomalidomide reshape cereblon so it degrades IKZF1/IKZF3 (Ikaros/Aiolos) → myeloma cell death.",
      "**PROTAC**: bifunctional molecule — one end binds the target, the other binds the E3 ligase.",
      "Advantages: only needs a binding pocket (not an active site), works catalytically, removes scaffolding functions too. Lets you hit transcription factors that have no enzyme activity."
    ],
    after: "proteasome"
  },
  {
    id: "genetic-validation",
    title: "Human genetic target validation",
    question: "Why are drug targets backed by human genetics more likely to succeed? Give examples.",
    answer: [
      "Natural loss- or gain-of-function variants act like lifelong 'randomised trials' of a drug, showing both efficacy and safety.",
      "• **PCSK9** loss-of-function → ~28% lower LDL, ~88% less coronary disease, no obvious harm → evolocumab/inclisiran.",
      "• **CCR5Δ32** → HIV resistance → maraviroc.",
      "• **Factor XI** deficiency → mild bleeding but fewer clots → FXI inhibitors in trials.",
      "• **IL23R** protective variant → lower IBD/psoriasis risk → anti-IL-23 drugs.",
      "Drug programmes with human genetic support are roughly twice as likely to reach approval."
    ],
    after: "pcsk9"
  }
];
