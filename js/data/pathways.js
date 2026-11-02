// Key signalling pathways. Each generates a "walk through it" card and a "why" card.
window.FC_PATHWAYS = [
  {
    id: "gs",
    name: "Gs → cAMP → PKA",
    summary: "The 'stimulatory' GPCR pathway: raises cAMP, activating PKA. Relaxes smooth muscle, speeds and strengthens the heart, and boosts glucose-dependent insulin secretion.",
    steps: [
      "Ligand binds a Gs-coupled GPCR (β1, β2, GLP-1R, CGRP-R, D1, H2, V2)",
      "Receptor acts as a GEF: Gαs swaps GDP for GTP and separates from Gβγ",
      "Gαs-GTP activates adenylyl cyclase: ATP → cAMP",
      "cAMP binds PKA regulatory subunits → frees catalytic subunits (cAMP also activates Epac)",
      "PKA phosphorylates effectors: L-type Ca²⁺ channels & phospholamban (heart), MLCK inhibition (smooth muscle), CREB → gene transcription",
      "Termination: Gα hydrolyses GTP; phosphodiesterases (PDEs) degrade cAMP; GRK + β-arrestin desensitise and internalise the receptor"
    ],
    drugs: "β-agonists/blockers, GLP-1R agonists, PDE inhibitors (roflumilast PDE4, milrinone PDE3), anti-CGRP",
    question: "Why does cAMP relax airway smooth muscle but make the heart beat harder?",
    answer: "The second messenger is the same; the PKA substrates differ. In cardiomyocytes PKA phosphorylates L-type Ca²⁺ channels, ryanodine receptors and phospholamban → more Ca²⁺ cycling → stronger, faster contraction and relaxation. In smooth muscle PKA phosphorylates and inhibits MLCK, opens K⁺ channels and lowers cytosolic Ca²⁺ → relaxation. Context (which effectors a cell expresses) determines the outcome."
  },
  {
    id: "gq",
    name: "Gq → PLCβ → IP3 / DAG",
    summary: "The calcium pathway: Gq activates phospholipase C, producing IP3 (Ca²⁺ release) and DAG (PKC). Drives smooth muscle contraction, secretion and neuronal excitation.",
    steps: [
      "Ligand binds a Gq-coupled GPCR (AT1, 5-HT2A, M3, H1, α1, V1, thromboxane TP)",
      "Gαq-GTP activates phospholipase Cβ",
      "PLCβ cleaves PIP2 → IP3 + DAG",
      "IP3 opens IP3 receptors on the ER/SR → cytosolic Ca²⁺ rises",
      "DAG (+ Ca²⁺) activates protein kinase C",
      "Smooth muscle: Ca²⁺–calmodulin → MLCK → myosin light chain phosphorylation → contraction; PKC/RhoA–ROCK inhibit MLCP → Ca²⁺ sensitisation"
    ],
    drugs: "ARBs (AT1), antimuscarinics (M3), antihistamines (H1), α1-blockers, atypical antipsychotics (5-HT2A)",
    question: "Why do Gq-coupled receptors contract smooth muscle, and how do RhoA/ROCK make it worse?",
    answer: "IP3 releases SR Ca²⁺ → Ca²⁺–calmodulin activates MLCK → phosphorylated myosin light chains form cross-bridges → contraction. In parallel, PKC and RhoA–ROCK (often co-activated via G12/13) inhibit myosin light chain phosphatase, so the same Ca²⁺ produces more force ('Ca²⁺ sensitisation'). That's why ARBs and α1-blockers lower vascular tone."
  },
  {
    id: "gi",
    name: "Gi/o → ↓cAMP, GIRK, ↓Ca²⁺ channels",
    summary: "The inhibitory GPCR pathway: lowers cAMP, hyperpolarises neurons via GIRK K⁺ channels and blocks presynaptic Ca²⁺ channels to reduce transmitter release.",
    steps: [
      "Ligand binds a Gi/o-coupled GPCR (μ-opioid, D2, P2Y12, α2, 5-HT1, M2, CB1, GABA-B)",
      "Gαi-GTP inhibits adenylyl cyclase → ↓cAMP → ↓PKA",
      "Released Gβγ opens GIRK K⁺ channels → hyperpolarisation (postsynaptic inhibition)",
      "Gβγ inhibits N- and P/Q-type Ca²⁺ channels → less vesicle fusion (presynaptic inhibition)",
      "Platelets: ↓cAMP → less VASP phosphorylation → GPIIb/IIIa activation and aggregation",
      "Pertussis toxin ADP-ribosylates Gαi and blocks this pathway (classic experimental tool)"
    ],
    drugs: "Opioids, D2 agonists/antagonists, P2Y12 inhibitors, clonidine (α2), triptans (5-HT1B/1D)",
    question: "How does activating a Gi-coupled receptor on a presynaptic terminal reduce pain transmission?",
    answer: "Gβγ subunits inhibit voltage-gated N-type Ca²⁺ channels in the primary afferent terminal → less Ca²⁺ entry → less glutamate and substance P release onto dorsal horn neurons. Postsynaptically, Gβγ opens GIRK channels → hyperpolarisation makes the second-order neuron harder to fire. Same principle for triptans reducing CGRP release."
  },
  {
    id: "mapk",
    name: "RTK → RAS → RAF → MEK → ERK (MAPK)",
    summary: "The core growth-factor proliferation pathway and the most frequently mutated signalling cascade in cancer.",
    steps: [
      "Growth factor (EGF, PDGF, VEGF) binds a receptor tyrosine kinase → dimerisation",
      "Trans-autophosphorylation of tyrosines in the receptor tail",
      "Phospho-tyrosines recruit GRB2 (via SH2) → GRB2 brings SOS, a RAS-GEF",
      "SOS loads GTP onto RAS (RAS-GDP 'off' → RAS-GTP 'on'); GAPs like NF1 switch it back off",
      "RAS-GTP recruits RAF (BRAF/CRAF) dimers to the membrane → RAF phosphorylates MEK1/2",
      "MEK phosphorylates ERK1/2 → ERK enters the nucleus → FOS, MYC, ELK1 → cyclin D → proliferation",
      "Negative feedback: ERK phosphorylates SOS & RAF, induces DUSPs and Sprouty"
    ],
    drugs: "EGFR TKIs/mAbs, HER2 drugs, KRAS G12C inhibitors (sotorasib), BRAF inhibitors (dabrafenib), MEK inhibitors (trametinib)",
    question: "Why does inhibiting one node of the MAPK pathway often cause rebound activation, and how is this handled clinically?",
    answer: "ERK normally applies negative feedback to upstream components (SOS, RAF, RTK expression). Inhibiting BRAF or KRAS removes ERK output, relieving that feedback → upstream RTKs and RAS reactivate signalling. Example: BRAF V600E colorectal cancer barely responds to a BRAF inhibitor alone because EGFR rebounds → encorafenib + cetuximab. Melanoma: BRAF + MEK inhibitor combinations give deeper, more durable responses."
  },
  {
    id: "pi3k",
    name: "PI3K → AKT → mTOR",
    summary: "The growth, survival and metabolism pathway, shared by insulin and growth factor receptors. PTEN is its main brake.",
    steps: [
      "RTK or insulin receptor (via IRS1) recruits PI3K (p85 regulatory + p110 catalytic)",
      "PI3K phosphorylates PIP2 → PIP3 at the membrane; PTEN reverses this (tumour suppressor)",
      "PIP3 recruits AKT and PDK1 via their PH domains",
      "AKT activated by PDK1 (T308) and mTORC2 (S473)",
      "AKT inhibits TSC1/2 → RHEB-GTP accumulates → activates mTORC1 → S6K & 4E-BP1 → protein synthesis, cell growth",
      "AKT also: inhibits FOXO and BAD (survival), inhibits GSK3, drives GLUT4 translocation (glucose uptake)"
    ],
    drugs: "Alpelisib (PI3Kα), capivasertib (AKT), everolimus/sirolimus (mTORC1 via FKBP12), idelalisib (PI3Kδ)",
    question: "Why do PI3Kα inhibitors cause hyperglycaemia, and why does that matter for the tumour?",
    answer: "Insulin signals through the same PI3Kα–AKT pathway to drive GLUT4 translocation in muscle/fat and suppress hepatic glucose output. Blocking PI3Kα → insulin resistance → hyperglycaemia (an on-target effect). The body responds with hyperinsulinaemia, which can reactivate PI3K in the tumour and blunt efficacy — so glucose is managed with metformin/SGLT2 inhibitors or low-carbohydrate diets rather than insulin."
  },
  {
    id: "jakstat",
    name: "JAK → STAT",
    summary: "How most cytokines signal: receptors without their own kinase use associated JAKs to phosphorylate STAT transcription factors.",
    steps: [
      "Cytokine binds receptor chains that have no intrinsic kinase activity",
      "Receptor-associated JAKs (JAK1, JAK2, JAK3, TYK2) are brought together → trans-phosphorylate each other",
      "JAKs phosphorylate tyrosines on the receptor tail",
      "STATs dock via SH2 domains → are phosphorylated by JAKs",
      "Phospho-STATs dimerise → enter the nucleus → transcribe target genes",
      "Negative feedback: SOCS proteins (induced by STATs), PIAS, phosphatases (SHP1/2)",
      "Pairings: γc cytokines (IL-2/4/7/15/21) → JAK1+JAK3; IL-6/gp130 → JAK1/JAK2/TYK2; IFN-γ → JAK1+JAK2; EPO/TPO/GH → JAK2+JAK2; IL-12/IL-23 → JAK2+TYK2; type I IFN → JAK1+TYK2"
    ],
    drugs: "Tofacitinib, baricitinib, upadacitinib, ruxolitinib, deucravacitinib (TYK2); upstream: tocilizumab, dupilumab, anti-IL-23",
    question: "Why does JAK2 inhibition cause anaemia, while loss of JAK3 causes severe combined immunodeficiency?",
    answer: "EPO and TPO receptors signal through JAK2 homodimers → blocking JAK2 lowers red cell and platelet production (seen with ruxolitinib/baricitinib). JAK3 pairs only with the common γ-chain (γc) used by IL-2, IL-7 and IL-15 — IL-7 is essential for T-cell development and IL-15 for NK cells → JAK3 (or γc) loss = SCID. The JAK–cytokine pairing predicts each JAK inhibitor's side-effect profile."
  },
  {
    id: "nfkb",
    name: "NF-κB (TNF / IL-1 / TLR)",
    summary: "The master inflammatory transcription pathway, triggered by TNF, IL-1β and pathogen sensors (TLRs). Controlled by degrading its inhibitor IκB.",
    steps: [
      "TNF → TNFR1 → TRADD / TRAF2 / RIPK1; IL-1β or TLR → MyD88 → IRAK4 / IRAK1 → TRAF6",
      "K63-linked and linear ubiquitin chains act as a scaffold → recruit TAK1 and the IKK complex (IKKα/IKKβ/NEMO)",
      "IKKβ phosphorylates IκBα",
      "Phospho-IκBα is ubiquitinated and degraded by the proteasome",
      "Freed NF-κB (p65/p50) enters the nucleus",
      "Transcribes TNF, IL-1β, IL-6, IL-8, COX-2, ICAM-1/VCAM-1, and also IκBα and A20 (negative feedback)"
    ],
    drugs: "Anti-TNF, anti-IL-1 (anakinra, canakinumab), glucocorticoids (transrepression), proteasome inhibitors (block IκB degradation)",
    question: "Why is NF-κB described as a 'feed-forward amplifier' of inflammation, and where is it best interrupted therapeutically?",
    answer: "NF-κB target genes include TNF and IL-1β themselves, which activate NF-κB in neighbouring cells (and induce more IL-1β), so inflammation spreads and sustains itself. Directly inhibiting IKK/NF-κB failed in the clinic (it's needed everywhere, including for cell survival and immunity → toxicity). It is more tractable to cut the loop at the extracellular cytokine (anti-TNF, anti-IL-1) or use glucocorticoids, which dampen NF-κB transcription."
  },
  {
    id: "nuclear",
    name: "Nuclear receptor signalling",
    summary: "Lipophilic hormones (steroids, thyroid hormone, retinoids, fatty acids) bind intracellular receptors that are themselves transcription factors.",
    steps: [
      "Lipophilic ligand diffuses across the cell membrane",
      "Type I (steroid: GR, ER, AR, MR, PR): receptor waits in the cytoplasm bound to HSP90 → ligand releases it → dimerises → translocates to nucleus",
      "Type II (PPAR, TR, RAR, VDR): receptor sits on DNA as a heterodimer with RXR, bound to co-repressors",
      "Ligand repositions helix 12 of the ligand-binding domain → co-repressor out, co-activator in (SRC/p300 histone acetyltransferases)",
      "Binds hormone response elements → chromatin opens → transcription",
      "Effects take hours to days (new mRNA and protein needed)"
    ],
    drugs: "Glucocorticoids, tamoxifen/fulvestrant (ER), enzalutamide (AR), pioglitazone (PPARγ), spironolactone (MR), levothyroxine (TR)",
    question: "How can one nuclear receptor drug be an agonist in one tissue and an antagonist in another?",
    answer: "Each ligand induces a slightly different receptor shape (especially helix 12), which determines which co-regulators bind. Tissues express different levels of co-activators and co-repressors. Tamoxifen blocks ER's AF-2 co-activator surface but leaves AF-1 active: in breast (co-repressor dominated) it acts as an antagonist, while in the endometrium (rich in co-activators such as SRC-1) and bone it acts as a partial agonist. These are SERMs (selective estrogen receptor modulators)."
  },
  {
    id: "raas",
    name: "Renin–angiotensin–aldosterone system",
    summary: "The hormonal system controlling blood pressure, sodium and volume. It has more drug-targeted steps than almost any other pathway.",
    steps: [
      "Triggers: ↓ renal perfusion pressure, ↓ NaCl at the macula densa, β1 sympathetic stimulation",
      "Juxtaglomerular cells release renin",
      "Renin cleaves liver-derived angiotensinogen → angiotensin I",
      "ACE (mainly lung endothelium) converts Ang I → Ang II (ACE also degrades bradykinin)",
      "Ang II → AT1 receptor: vasoconstriction, efferent arteriole constriction, thirst, ADH release, fibrosis",
      "Ang II → adrenal zona glomerulosa → aldosterone → mineralocorticoid receptor → ENaC + Na⁺/K⁺-ATPase → Na⁺ retention, K⁺ loss"
    ],
    drugs: "β-blockers (↓renin), aliskiren (renin), ACE inhibitors, ARBs, MR antagonists (spironolactone, eplerenone, finerenone), sacubitril (neprilysin; boosts natriuretic peptides)",
    question: "What is 'aldosterone escape', and why are MR antagonists added to ACEi/ARB therapy in heart failure?",
    answer: "Blocking ACE or AT1 removes Ang II's negative feedback on renin → renin and Ang I rise; Ang II is also made by non-ACE enzymes (chymase), and K⁺ itself stimulates aldosterone. Over months aldosterone climbs back ('escape'). Aldosterone drives myocardial and renal fibrosis via MR independently of BP. MR antagonists block that final effector and reduced mortality in HF (RALES, EMPHASIS-HF)."
  },
  {
    id: "coag",
    name: "Coagulation (cell-based model)",
    summary: "Tissue factor starts it; platelets amplify it; a thrombin burst turns fibrinogen into a fibrin clot.",
    steps: [
      "Initiation: injury exposes tissue factor (TF) → TF + FVIIa activate FX (and FIX) → a little thrombin",
      "Amplification: that thrombin activates platelets and cofactors FV, FVIII, and FXI",
      "Propagation: on the platelet surface FIXa + FVIIIa (tenase) → lots of FXa",
      "FXa + FVa (prothrombinase) → thrombin burst",
      "Thrombin cleaves fibrinogen → fibrin; FXIIIa cross-links it",
      "Natural brakes: antithrombin (inhibits thrombin & FXa; boosted by heparin), protein C/S (inactivate FVa & FVIIIa), TFPI"
    ],
    drugs: "Heparins (via antithrombin), apixaban/rivaroxaban (FXa), dabigatran (thrombin), warfarin (VKORC1 → II, VII, IX, X), FXI inhibitors (in trials)",
    question: "Why are Factor XI inhibitors hoped to prevent clots with less bleeding than current anticoagulants?",
    answer: "Haemostasis at a wound is driven mainly by the tissue factor → FVIIa → FX initiation route, which doesn't need FXI. FXI matters mainly for the thrombin feedback amplification that grows a pathological thrombus. People with inherited FXI deficiency (haemophilia C) have only mild bleeding but lower rates of VTE and stroke — genetic support for the idea. Clinical results are mixed: asundexian failed against apixaban in AF (OCEANIC-AF), while others (abelacimab, milvexian) continue in trials."
  },
  {
    id: "tcell",
    name: "T-cell activation & checkpoints",
    summary: "T cells need signal 1 (antigen), signal 2 (co-stimulation) and signal 3 (cytokines). CTLA-4 and PD-1 are the brakes.",
    steps: [
      "Signal 1: TCR recognises peptide–MHC → LCK phosphorylates CD3 ITAMs → ZAP-70 → LAT / SLP-76 → PLCγ1",
      "PLCγ1 → IP3 → Ca²⁺ → calcineurin → NFAT; DAG → PKCθ → NF-κB; RAS → AP-1 → IL-2 transcription",
      "Signal 2: CD28 binds B7 (CD80/CD86) on the APC → PI3K–AKT → survival, IL-2, metabolism",
      "Signal 3: cytokines steer the fate — IL-12 → Th1, IL-4 → Th2, IL-6 + TGF-β + IL-23 → Th17",
      "Brake 1 — CTLA-4 (priming, lymph node): outcompetes CD28 for B7 and strips B7 off APCs",
      "Brake 2 — PD-1 (effector phase, tissue): PD-L1 binding recruits SHP2 → dephosphorylates CD28 and TCR signalling"
    ],
    drugs: "Tacrolimus/ciclosporin (calcineurin → NFAT), abatacept (CTLA-4-Ig), ipilimumab (anti-CTLA-4), pembrolizumab/nivolumab (anti-PD-1), atezolizumab (anti-PD-L1)",
    question: "Why does signal 1 without signal 2 produce anergy rather than activation, and why does this protect us?",
    answer: "Without CD28 co-stimulation, TCR signalling activates NFAT without enough AP-1 and AKT, inducing an anergy programme (low IL-2, unresponsiveness) instead of proliferation. APCs only upregulate B7 when innate danger signals (TLR ligands, inflammation) activate them, so self-antigen presented in 'quiet' conditions tolerises T cells. Co-stimulation is a safety interlock against autoimmunity."
  },
  {
    id: "th17",
    name: "IL-23 / IL-17 axis",
    summary: "The Th17 pathway that drives psoriasis, psoriatic arthritis, axial spondyloarthritis and (via IL-23) inflammatory bowel disease.",
    steps: [
      "Dendritic cells and macrophages sense microbes or damage → produce IL-23 (p19 + p40) and IL-1β, IL-6",
      "IL-6 + TGF-β + IL-1β drive naive CD4 T cells → RORγt⁺ Th17 cells",
      "IL-23 → IL-23R / IL-12Rβ1 → JAK2 + TYK2 → STAT3 → sustains and makes Th17 cells 'pathogenic'",
      "Th17, γδ T cells and ILC3s release IL-17A/F, IL-22, GM-CSF",
      "IL-17 → keratinocytes/epithelium (via Act1 → TRAF6 → NF-κB) → CXCL1/CXCL8 (neutrophils), antimicrobial peptides, IL-6, hyperproliferation",
      "Keratinocyte mediators reactivate dendritic cells → self-sustaining loop (psoriatic plaque)"
    ],
    drugs: "Ustekinumab (p40: IL-12+IL-23), guselkumab/risankizumab (p19), secukinumab/ixekizumab (IL-17A), bimekizumab (IL-17A+F), deucravacitinib (TYK2)",
    question: "In psoriasis the IL-23/IL-17 loop can be broken at three levels. Compare their trade-offs.",
    answer: "• Upstream, anti-IL-23 (p19): durable responses, dosing every 8–12 weeks, safe (and effective) in IBD, little candida. • Downstream, anti-IL-17: fastest skin clearance and good for joints, but candida and new or worsened IBD. • Intracellular, TYK2 (deucravacitinib): oral and convenient, but less effective than biologics. Anti-p40 (ustekinumab) also blocks IL-12/Th1, which turned out to be unnecessary for psoriasis."
  },
  {
    id: "incretin",
    name: "Incretin axis",
    summary: "Gut hormones (GLP-1, GIP) released after eating amplify insulin secretion and drive satiety. They are the basis of today's obesity drugs.",
    steps: [
      "Nutrients reach the gut → L-cells (ileum/colon) secrete GLP-1; K-cells (duodenum) secrete GIP",
      "GLP-1/GIP → Gs-coupled receptors on β-cells → cAMP → amplifies glucose-triggered insulin release",
      "GLP-1 also suppresses glucagon, slows gastric emptying, and acts on hypothalamus/hindbrain → satiety",
      "DPP-4 inactivates GLP-1 and GIP within ~2 minutes",
      "'Incretin effect': oral glucose provokes far more insulin than the same glycaemia given IV (~50–70% of the response)",
      "In type 2 diabetes the incretin effect is blunted (GIP response largely lost; GLP-1 response preserved at pharmacological doses)"
    ],
    drugs: "Semaglutide, liraglutide (GLP-1R), tirzepatide (GIP/GLP-1R), DPP-4 inhibitors (sitagliptin), retatrutide (GIP/GLP-1/glucagon, investigational)",
    question: "What is the incretin effect, and why did it lead to GLP-1 (rather than GIP) as the first drug target?",
    answer: "Oral glucose causes a much larger insulin response than matched IV glucose because gut hormones amplify β-cell secretion. In T2D this effect is reduced. Infusion studies showed β-cells in T2D barely respond to GIP but still respond to supraphysiological GLP-1. GLP-1 also suppresses glucagon and appetite, so GLP-1R became the target. (GIP agonism was later rehabilitated in tirzepatide, where it adds weight loss and tolerability.)"
  },
  {
    id: "synapse",
    name: "Chemical synapse",
    summary: "How neurotransmitters are released, act and are terminated. Every step is a drug target.",
    steps: [
      "Action potential (Nav channels) arrives at the presynaptic terminal",
      "Voltage-gated Ca²⁺ channels open → Ca²⁺ triggers SNARE-mediated vesicle fusion (botulinum toxin cleaves SNAREs)",
      "Transmitter acts on ionotropic receptors (fast: nAChR, GABA-A, AMPA, NMDA) and metabotropic GPCRs (slow, modulatory)",
      "Presynaptic autoreceptors (e.g. 5-HT1A, α2, D2) provide negative feedback",
      "Termination: reuptake transporters (SERT, NET, DAT), enzymatic breakdown (AChE, MAO, COMT), diffusion"
    ],
    drugs: "SSRIs/SNRIs (reuptake), AChE inhibitors, MAO-B inhibitors, amphetamines (reverse transporters), benzodiazepines (GABA-A PAM), botulinum toxin, gabapentinoids (α2δ Ca²⁺ channel subunit)",
    question: "List five ways a drug can increase signalling at a synapse without being a receptor agonist.",
    answer: "1) Block reuptake (SSRIs, cocaine). 2) Block breakdown (AChE inhibitors, MAO inhibitors). 3) Increase release or reverse transporters (amphetamines). 4) Block inhibitory presynaptic autoreceptors (mirtazapine at α2). 5) Positive allosteric modulation of the receptor (benzodiazepines). 6) Supply precursor (L-DOPA)."
  },
  {
    id: "ecc",
    name: "Excitation–contraction coupling",
    summary: "How electrical activity becomes contraction in heart and smooth muscle, and how cAMP/cGMP relax vessels.",
    steps: [
      "Nav channels depolarise the cell (myocyte); smooth muscle is depolarised by stretch, receptors, and Ca²⁺/Cl⁻ channels",
      "L-type Ca²⁺ channels (Cav1.2) open → Ca²⁺ influx",
      "Heart: Ca²⁺-induced Ca²⁺ release via RyR2 → Ca²⁺ binds troponin C → cross-bridge cycling",
      "Heart relaxation: SERCA (regulated by phospholamban) pumps Ca²⁺ back; NCX extrudes Ca²⁺ using the Na⁺ gradient",
      "Smooth muscle: Ca²⁺–calmodulin → MLCK → contraction; MLCP dephosphorylates → relaxation",
      "Vasodilators: NO → soluble guanylyl cyclase → cGMP → PKG; or cAMP → PKA → both lower Ca²⁺ and/or activate MLCP"
    ],
    drugs: "Calcium channel blockers, β-blockers, digoxin, nitrates, PDE5 inhibitors, riociguat (sGC stimulator)",
    question: "Why does digoxin increase cardiac contractility?",
    answer: "Digoxin inhibits the Na⁺/K⁺-ATPase → intracellular Na⁺ rises → the Na⁺ gradient that drives the Na⁺/Ca²⁺ exchanger (NCX) weakens → less Ca²⁺ is extruded → more Ca²⁺ is loaded into the SR → bigger Ca²⁺ transient each beat → stronger contraction. It also increases vagal tone, slowing AV conduction (used for AF rate control)."
  }
];
