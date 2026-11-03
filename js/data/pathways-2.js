// Additional pathways for the expanded target set, plus mechanism-class grouping of all pathways.
window.FC_PATHWAYS.push(
  {
    id: "lipid",
    name: "Cholesterol & LDL handling",
    summary: "How the liver balances cholesterol from synthesis and absorption, and why lowering liver cholesterol pulls LDL out of the blood.",
    steps: [
      "Gut: dietary and biliary cholesterol is taken up by enterocytes via NPC1L1 → delivered to the liver",
      "Liver: acetyl-CoA → (ATP-citrate lyase) → HMG-CoA → (HMG-CoA reductase) → mevalonate → cholesterol",
      "Low hepatocyte cholesterol → SREBP2 activated → ↑ LDL receptor (and PCSK9) transcription",
      "LDL receptors bind circulating LDL (apoB) → endocytosis → LDL degraded, receptor recycles",
      "PCSK9 binds the LDL receptor → diverts it to the lysosome → fewer receptors → ↑ plasma LDL",
      "Excess LDL enters the artery wall → oxidised → macrophage foam cells → atherosclerotic plaque"
    ],
    drugs: "Statins (HMG-CoA reductase), ezetimibe (NPC1L1), bempedoic acid (ACL), evolocumab / inclisiran (PCSK9)",
    question: "Why do statins and ezetimibe have additive LDL-lowering effects?",
    answer: "Both lower hepatocyte cholesterol, from different sources: statins block synthesis and ezetimibe blocks intestinal absorption. Each lowering triggers SREBP2 → more LDL receptors → more LDL cleared. Each drug alone also provokes compensation through the other route: statins increase cholesterol absorption, and ezetimibe increases synthesis. Combining them blocks that escape, so adding ezetimibe lowers LDL by roughly another 20%, versus about 6% from doubling the statin dose."
  },
  {
    id: "insulin",
    name: "Insulin secretion & action",
    summary: "How the β-cell couples blood glucose to insulin release, and how insulin signals in muscle, fat and liver.",
    steps: [
      "Glucose enters the β-cell via GLUT2 → glycolysis and mitochondrial metabolism → ↑ ATP/ADP ratio",
      "ATP closes K_ATP channels (Kir6.2/SUR1) → the β-cell membrane depolarises",
      "Voltage-gated Ca²⁺ channels open → Ca²⁺ triggers insulin granule exocytosis (amplified by GLP-1 → cAMP)",
      "Insulin binds the insulin receptor (an RTK) on muscle, fat and liver → IRS → PI3K → AKT",
      "AKT → GLUT4 translocation (glucose uptake into muscle and fat), glycogen synthesis, ↓ hepatic gluconeogenesis",
      "Insulin also drives K⁺ into cells (Na⁺/K⁺-ATPase) and suppresses lipolysis"
    ],
    drugs: "Sulfonylureas / glinides (close K_ATP), diazoxide (opens K_ATP), GLP-1R agonists, insulin analogues, metformin (↓ hepatic glucose output)",
    question: "Why do sulfonylureas cause hypoglycaemia while GLP-1R agonists rarely do?",
    answer: "Sulfonylureas bind SUR1 and close K_ATP channels directly, bypassing the glucose-sensing step. The β-cell depolarises and releases insulin even when glucose is already low. GLP-1R agonists act downstream through cAMP, which only amplifies Ca²⁺-triggered exocytosis. If glucose is low, K_ATP channels stay open, the cell isn't depolarised, and there's nothing to amplify. The same logic explains why sulfonylureas work in neonatal diabetes caused by activating K_ATP mutations."
  },
  {
    id: "eicosanoid",
    name: "Arachidonic acid (eicosanoid) cascade",
    summary: "Lipid mediators made on demand from membrane phospholipids: prostaglandins and thromboxane via COX, leukotrienes via 5-lipoxygenase.",
    steps: [
      "Injury, cytokines or Ca²⁺ activate cytosolic phospholipase A2 → arachidonic acid released from membrane phospholipids",
      "COX-1 / COX-2 convert arachidonic acid → PGH2",
      "Synthases make prostanoids: PGE2 (pain, fever, gastric protection), PGI2 (vasodilation, anti-platelet), TXA2 (platelet aggregation), PGF2α (uterus, eye)",
      "5-lipoxygenase (with FLAP) converts arachidonic acid → leukotrienes: LTB4 (neutrophil chemotaxis) and cysteinyl-LTs (LTC4/D4/E4)",
      "Cysteinyl-LTs → CysLT1 receptor → bronchoconstriction, mucus secretion, oedema",
      "Glucocorticoids induce annexin-1 (inhibits PLA2) and repress COX-2 → both arms are damped"
    ],
    drugs: "NSAIDs / aspirin / coxibs (COX), montelukast (CysLT1), zileuton (5-LOX), glucocorticoids (PLA2 via annexin-1), latanoprost (FP receptor), epoprostenol (PGI2 analogue)",
    question: "Why can aspirin and other NSAIDs trigger asthma attacks in some patients?",
    answer: "In aspirin-exacerbated respiratory disease, COX-1 inhibition removes PGE2, which normally restrains mast cells and 5-lipoxygenase. Arachidonic acid is then shunted down the 5-LOX arm, producing a surge of cysteinyl leukotrienes. These act on CysLT1 receptors to cause bronchoconstriction, nasal polyps and mucus. This is why leukotriene blockers (montelukast) are helpful in that group, and why COX-2-selective drugs are usually tolerated."
  },
  {
    id: "complement",
    name: "Complement cascade",
    summary: "A plasma protease cascade that tags, recruits against and punches holes in targets. Powerful against bacteria, and destructive when its self-protection fails.",
    steps: [
      "Three triggers: classical (antibody–antigen → C1q), lectin (MBL binds microbial sugars), alternative (spontaneous C3 'tick-over')",
      "All converge on C3 convertases → C3 cleaved → C3a (anaphylatoxin) + C3b (opsonin)",
      "C3b + factor B (cleaved by factor D) forms more convertase → amplification loop",
      "C5 convertase cleaves C5 → C5a (potent anaphylatoxin, neutrophil chemotaxis) + C5b",
      "C5b–C9 assemble the membrane attack complex (MAC) → pores → cell lysis",
      "Regulators protect self (CD55, CD59 on host cells; factor H in plasma; C1-inhibitor). Losing them causes PNH, aHUS, hereditary angioedema"
    ],
    drugs: "Eculizumab / ravulizumab (C5), pegcetacoplan (C3), iptacopan (factor B), avacopan (C5a receptor), C1-inhibitor concentrate",
    question: "Why does blocking C5 work in PNH, and why do patients need meningococcal vaccination?",
    answer: "In PNH a PIGA mutation in blood stem cells removes GPI-anchored regulators (CD55, CD59) from red cells, so complement assembles MACs on them → intravascular haemolysis. Blocking C5 stops MAC formation and the haemolysis. Some C3b-coated red cells are still cleared in the liver and spleen (extravascular haemolysis), which is why proximal C3/factor B inhibitors were developed. The MAC is the main defence against Neisseria, so C5 blockade raises the risk of meningococcal infection roughly 1000-fold. Vaccination (± antibiotic prophylaxis) is mandatory."
  },
  {
    id: "bcell",
    name: "B cells & antibodies",
    summary: "From bone-marrow B cell to antibody-secreting plasma cell. Each stage carries different surface markers, and each marker is a drug target.",
    steps: [
      "B cells develop in the bone marrow (CD19⁺ early; CD20 from the pre-B stage) → naive B cells move to lymphoid tissue",
      "Antigen binds the B-cell receptor → SYK/BTK-dependent signalling → activation",
      "T-cell help (CD40L, IL-21) in germinal centres → class switching and affinity maturation",
      "Differentiation into plasma cells: CD20 is lost, CD38 and BCMA appear (survival via APRIL / BAFF)",
      "Plasma cells secrete IgG, IgA or IgE → antibodies neutralise, opsonise and activate complement",
      "FcRn on endothelial cells rescues IgG (and albumin) from lysosomal breakdown → ~3-week half-life"
    ],
    drugs: "Rituximab / ocrelizumab (CD20), CD19 CAR-T / blinatumomab, ibrutinib (BTK), belimumab (BAFF), daratumumab (CD38), BCMA CAR-T / teclistamab, efgartigimod (FcRn)",
    question: "Why does anti-CD20 therapy spare existing antibody levels, while anti-CD38 and anti-BCMA drugs hit myeloma?",
    answer: "CD20 is on B cells from the pre-B to memory stage but is lost when they become plasma cells. Rituximab therefore removes the B-cell pool, but long-lived plasma cells keep secreting antibody. Myeloma is a malignancy of plasma cells, which have little CD20 but high CD38 and BCMA. Antibodies, CAR-T cells and bispecific T-cell engagers against those markers hit the malignant cells, at the cost of lowering normal immunoglobulins (hypogammaglobulinaemia and infections)."
  },
  {
    id: "apoptosis",
    name: "Intrinsic apoptosis (BCL-2 family)",
    summary: "The mitochondrial suicide programme. Its balance of pro- and anti-apoptotic BCL-2 proteins decides whether a stressed cell lives or dies.",
    steps: [
      "Stress (DNA damage, growth-factor withdrawal, chemotherapy) → p53 and BH3-only proteins (BIM, PUMA, NOXA) rise",
      "Anti-apoptotic BCL-2 / MCL-1 normally sequester BH3-only proteins and BAX/BAK",
      "Enough BH3-only signal → BAX/BAK oligomerise → mitochondrial outer membrane permeabilisation (MOMP)",
      "Cytochrome c is released → apoptosome (APAF-1) → caspase-9",
      "Caspase-9 → executioner caspases 3/7 → orderly dismantling of the cell",
      "Extrinsic route: death receptors (FAS, TRAIL-R) → caspase-8 → caspase-3 (BID cleavage links to the mitochondria)"
    ],
    drugs: "Venetoclax (BCL-2 BH3 mimetic), chemotherapy/radiation (trigger stress), proteasome inhibitors (stabilise NOXA), MCL-1 inhibitors (trials)",
    question: "How does venetoclax kill CLL cells, and why must it be started with a slow dose ramp-up?",
    answer: "CLL cells overexpress BCL-2, which keeps them alive by sequestering pro-apoptotic BIM. They are 'primed for death' and BCL-2 is all that holds them back. Venetoclax is a BH3 mimetic: it occupies the BCL-2 groove and frees BIM, which activates BAX/BAK, leading to MOMP and apoptosis within hours. Killing a large tumour mass that quickly releases potassium, phosphate and uric acid (tumour lysis syndrome), so dosing is ramped up weekly with hydration and urate lowering."
  },
  {
    id: "dna",
    name: "DNA synthesis, topoisomerases & repair",
    summary: "The machinery that makes, untangles and repairs DNA, and the mitotic spindle that divides it. It is the classic territory of chemotherapy.",
    steps: [
      "Folate cycle: DHFR regenerates tetrahydrofolate (THF), needed to make purines and thymidine",
      "Thymidylate synthase uses a THF cofactor to convert dUMP → dTMP (oxidising THF back to DHF)",
      "Topoisomerase I (single-strand nicks) and II (double-strand passage) relieve supercoiling during replication",
      "Single-strand breaks are fixed by PARP-dependent repair; double-strand breaks by homologous recombination (BRCA1/2)",
      "Unrepaired damage → replication fork collapse → p53 → cell-cycle arrest or apoptosis",
      "Mitosis: tubulin polymerises into the spindle that separates the chromosomes"
    ],
    drugs: "Methotrexate / pemetrexed (DHFR), 5-FU / capecitabine (thymidylate synthase), irinotecan / topotecan (topo I), doxorubicin / etoposide (topo II), olaparib (PARP), taxanes / vinca alkaloids (tubulin)",
    question: "Why do chemotherapy drugs cause hair loss, mucositis and neutropenia?",
    answer: "Most classic cytotoxics hit processes needed by any dividing cell: nucleotide synthesis (DHFR, thymidylate synthase), DNA topology (topoisomerases) or the mitotic spindle (tubulin). Their selectivity for cancer comes mainly from cancer cells dividing more and having broken checkpoints and repair. Normal tissues that also divide quickly (bone marrow, gut epithelium, hair follicles) take collateral damage, so the toxicities are predictable from the mechanism. Neutropenia sets the dose limit, which led to growth-factor support (G-CSF) and to targeted delivery such as antibody–drug conjugates."
  },
  {
    id: "bone",
    name: "Bone remodelling",
    summary: "Bone is constantly resorbed by osteoclasts and rebuilt by osteoblasts. The RANKL and Wnt/sclerostin axes set the balance.",
    steps: [
      "Osteocytes sense mechanical load; PTH and inflammatory cytokines signal to osteoblast-lineage cells",
      "Osteoblasts express RANKL; OPG is a natural soluble decoy that blocks it",
      "RANKL binds RANK on osteoclast precursors → NF-κB / NFATc1 → mature multinucleated osteoclasts",
      "Osteoclasts seal onto bone and secrete acid + cathepsin K → resorption (releases Ca²⁺ and phosphate)",
      "Osteocytes secrete sclerostin, which blocks Wnt signalling (LRP5/6) in osteoblasts → less bone formation",
      "Wnt signalling and intermittent PTH → osteoblasts lay down new osteoid → mineralised bone"
    ],
    drugs: "Denosumab (RANKL), bisphosphonates (osteoclast FPPS), romosozumab (sclerostin), teriparatide / abaloparatide (PTH1R agonists)",
    question: "Why is PTH anabolic when given as a daily injection, but causes bone loss in hyperparathyroidism?",
    answer: "Brief daily pulses of PTH (teriparatide) preferentially stimulate osteoblasts: more osteoblast recruitment and survival, and reduced sclerostin, giving a net gain in bone formation. Continuously high PTH (hyperparathyroidism) sustains osteoblast RANKL expression and suppresses OPG, so osteoclast resorption outpaces formation and bone is lost. As with GnRH, the pattern of receptor stimulation (pulsatile or continuous) determines the outcome."
  },
  {
    id: "hiv",
    name: "HIV life cycle",
    summary: "From binding CD4 to budding a mature virion. Almost every step is targeted by modern antiretrovirals.",
    steps: [
      "gp120 binds CD4, then a co-receptor (CCR5 or CXCR4); gp41 drives membrane fusion",
      "The capsid enters the cytoplasm and is transported to the nucleus",
      "Reverse transcriptase copies viral RNA into double-stranded DNA (error-prone → resistance emerges quickly)",
      "Integrase inserts the viral DNA into the host genome → provirus (the latent reservoir)",
      "Host machinery transcribes and translates viral genes → Gag-Pol polyproteins",
      "Virions bud from the cell; HIV protease cleaves Gag-Pol → mature, infectious virus"
    ],
    drugs: "Maraviroc (CCR5), lenacapavir (capsid), tenofovir / emtricitabine / efavirenz (reverse transcriptase), bictegravir / dolutegravir / cabotegravir (integrase), darunavir (protease)",
    question: "Why is HIV treated with combinations of drugs from different classes, and why can't therapy cure it?",
    answer: "Reverse transcriptase is error-prone and HIV replicates billions of times a day, so every possible single-point resistance mutation arises daily. One drug alone is quickly escaped. Combining drugs that hit different steps (e.g. two RT inhibitors plus an integrase inhibitor) means a virus would need several simultaneous mutations, which is vanishingly unlikely, so suppression lasts. Integrated provirus in long-lived resting memory T cells is invisible to drugs that act on replication, so treatment is lifelong. Stopping lets the reservoir reignite infection."
  },
  {
    id: "bacteria",
    name: "Bacterial drug targets",
    summary: "Antibiotics exploit structures bacteria have and we don't: a peptidoglycan wall, their own folate synthesis, distinct topoisomerases and 70S ribosomes.",
    steps: [
      "Cell wall: penicillin-binding proteins (transpeptidases) cross-link peptidoglycan. β-lactams block them; vancomycin caps the D-Ala-D-Ala substrate",
      "Folate synthesis: bacteria make their own folate (DHPS → DHFR). Sulfonamides + trimethoprim block sequential steps",
      "DNA: gyrase and topoisomerase IV manage supercoiling. Fluoroquinolones trap them on cut DNA",
      "Protein synthesis: the 70S ribosome. Aminoglycosides and tetracyclines act on 30S; macrolides and linezolid on 50S",
      "Membranes: polymyxins disrupt the Gram-negative outer membrane; daptomycin depolarises Gram-positive membranes",
      "Resistance: β-lactamases, altered targets (PBP2a, gyrA mutations), efflux pumps, loss of porins"
    ],
    drugs: "β-lactams (PBPs), vancomycin (D-Ala-D-Ala), co-trimoxazole (DHPS + DHFR), ciprofloxacin (gyrase), gentamicin / doxycycline (30S), azithromycin / linezolid (50S), colistin, daptomycin",
    question: "Why are some antibiotic toxicities explained by our mitochondria?",
    answer: "Mitochondria descend from bacteria and keep bacterial-like 70S-type ribosomes. Drugs that target the bacterial ribosome can partly inhibit mitochondrial protein synthesis in vulnerable tissues. Aminoglycosides accumulate in inner-ear hair cells (ototoxicity, worse with the mitochondrial m.1555A>G variant), and prolonged linezolid causes myelosuppression, optic neuropathy and lactic acidosis. Fluoroquinolones' effects on tendons and mitochondria are thought to be partly similar. Selectivity for bacterial targets is never perfect."
  }
);

// Mechanism-class groups (every pathway id appears once)
window.FC_PATHWAY_GROUPS = [
  { name: "GPCR signalling", desc: "Seven-transmembrane receptors and their G proteins: the single largest drug-target family.", ids: ["gs", "gq", "gi"] },
  { name: "Kinase & growth-factor signalling", desc: "Phosphorylation cascades that drive growth, survival and cytokine responses.", ids: ["mapk", "pi3k", "jakstat"] },
  { name: "Inflammation & immunity", desc: "Innate amplifiers, lipid mediators, complement and adaptive lymphocytes.", ids: ["nfkb", "eicosanoid", "complement", "tcell", "bcell", "th17"] },
  { name: "Gene regulation, DNA & cell fate", desc: "Transcription, DNA synthesis and repair, and the decision to die.", ids: ["nuclear", "dna", "apoptosis"] },
  { name: "Metabolic & physiological systems", desc: "Hormonal and organ-level circuits: glucose, lipids, blood pressure, clotting, bone.", ids: ["incretin", "insulin", "lipid", "raas", "coag", "bone"] },
  { name: "Excitable cells", desc: "Electrical signalling in neurons and muscle.", ids: ["synapse", "ecc"] },
  { name: "Infection", desc: "Pathogen life cycles and the structures antimicrobials exploit.", ids: ["hiv", "bacteria"] }
];
