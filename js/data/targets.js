// 50 high-impact drug targets, in suggested learning order.
// Curated by clinical and commercial importance. There is no single official "top 50".
// Each target generates cards: overview, signalling, drug strategy, a "why" question, plus one card per drug entry.
window.FC_TARGETS = [
  // ───────────── Cardiovascular & renal ─────────────
  {
    id: "adrb2", name: "β2-adrenergic receptor", short: "β2-AR", gene: "ADRB2",
    family: "GPCR (Gs)", area: "Respiratory",
    location: "Airway smooth muscle; also skeletal-muscle vasculature, uterus, liver, mast cells",
    role: "Responds to circulating adrenaline: bronchodilation, vasodilation in muscle, glycogenolysis, K⁺ uptake into cells.",
    signalling: [
      "Adrenaline / agonist binds β2-AR",
      "Gαs → adenylyl cyclase → ↑cAMP",
      "PKA phosphorylates and inhibits MLCK; opens BKCa K⁺ channels; lowers cytosolic Ca²⁺",
      "Airway smooth muscle relaxes → bronchodilation",
      "Prolonged agonism → GRK/β-arrestin desensitisation and receptor downregulation"
    ],
    mechanism: "Agonists bronchodilate (asthma, COPD). Non-selective β-blockers block β2 and can trigger bronchospasm.",
    drugs: [
      { name: "Salbutamol (albuterol)", action: "Short-acting β2 agonist (SABA)", use: "Asthma/COPD rescue" },
      { name: "Salmeterol / formoterol", action: "Long-acting β2 agonists (LABA)", use: "Maintenance in asthma (always with ICS) and COPD" },
      { name: "Propranolol", action: "Non-selective β antagonist (β1 + β2)", use: "Migraine prophylaxis, tremor, portal hypertension; avoid in asthma" }
    ],
    question: "Why does a β2 agonist relieve bronchospasm whatever triggered it (histamine, leukotrienes, ACh)?",
    answer: "It is a functional antagonist. Instead of blocking one constrictor, it activates an opposing pathway: cAMP–PKA inhibits MLCK, opens K⁺ channels and lowers Ca²⁺, so smooth muscle relaxes no matter which Gq-coupled constrictor is active. Specific receptor antagonists (antihistamines, anti-leukotrienes) only block their own mediator.",
    pearl: "Side effects are on-target: tremor (skeletal muscle β2), tachycardia, and hypokalaemia (β2 drives Na⁺/K⁺-ATPase, pushing K⁺ into cells; also used to treat hyperkalaemia). LABA monotherapy in asthma increased deaths, so LABAs are always paired with an inhaled corticosteroid.",
    pathways: ["gs"]
  },
  {
    id: "adrb1", name: "β1-adrenergic receptor", short: "β1-AR", gene: "ADRB1",
    family: "GPCR (Gs)", area: "Cardiovascular & renal",
    location: "Cardiomyocytes, SA and AV nodes, renal juxtaglomerular cells",
    role: "Sympathetic (noradrenaline) control of heart rate, contractility, conduction and renin release.",
    signalling: [
      "Noradrenaline binds β1-AR",
      "Gαs → adenylyl cyclase → ↑cAMP → PKA",
      "PKA phosphorylates L-type Ca²⁺ channels (↑Ca²⁺ entry) and RyR2 → stronger contraction",
      "PKA phosphorylates phospholamban → disinhibits SERCA → faster relaxation (lusitropy)",
      "In the SA node, cAMP binds HCN channels (If 'funny current') → faster depolarisation → ↑ heart rate",
      "In the kidney, β1 → renin release → RAAS activation"
    ],
    mechanism: "Antagonists (β-blockers) lower rate, contractility and renin. Agonists (dobutamine) support a failing heart short-term.",
    drugs: [
      { name: "Bisoprolol / metoprolol succinate", action: "β1-selective antagonists", use: "Heart failure (HFrEF), hypertension, angina, AF rate control" },
      { name: "Carvedilol", action: "Non-selective β + α1 antagonist", use: "Heart failure, hypertension" },
      { name: "Dobutamine", action: "β1 agonist", use: "Cardiogenic shock / acute decompensated HF (IV)" }
    ],
    question: "β-blockers acutely reduce contractility. Why do they reduce mortality in heart failure?",
    answer: "In HFrEF, chronic sympathetic over-activation is harmful: Ca²⁺ overload, arrhythmias, cardiomyocyte apoptosis, β-receptor downregulation, and renin-driven fluid retention and fibrosis. Chronic β-blockade reverses this remodelling, lowers heart rate (more diastolic filling time and coronary perfusion, less O₂ demand) and prevents sudden arrhythmic death. The short-term negative inotropy is outweighed. Start low, go slow.",
    pearl: "β1 selectivity is dose-dependent, so it is lost at high doses. β-blockers can mask hypoglycaemia symptoms (tremor, palpitations; sweating is cholinergic and preserved).",
    pathways: ["gs", "raas", "ecc"]
  },
  {
    id: "at1r", name: "Angiotensin II type 1 receptor", short: "AT1R", gene: "AGTR1",
    family: "GPCR (Gq)", area: "Cardiovascular & renal",
    location: "Vascular smooth muscle, adrenal zona glomerulosa, kidney (efferent arteriole, tubules), heart, brain",
    role: "Mediates almost all known actions of angiotensin II: vasoconstriction, aldosterone release, Na⁺ retention, thirst, cardiac and renal fibrosis.",
    signalling: [
      "Angiotensin II binds AT1",
      "Gαq → PLCβ → IP3 (Ca²⁺ release) + DAG (PKC) → vascular smooth muscle contraction",
      "Adrenal: ↑ aldosterone synthesis",
      "β-arrestin and EGFR transactivation → MAPK → hypertrophy and fibrosis (TGF-β)",
      "Kidney: preferential efferent arteriole constriction → ↑ glomerular pressure"
    ],
    mechanism: "ARBs (sartans) are competitive or insurmountable AT1 antagonists. They block Ang II whether it was made by ACE or by chymase.",
    drugs: [
      { name: "Losartan / valsartan / candesartan", action: "AT1 antagonists (ARBs)", use: "Hypertension, HF, diabetic kidney disease" },
      { name: "Sacubitril/valsartan", action: "Neprilysin inhibitor + ARB (ARNI)", use: "HFrEF (PARADIGM-HF)" }
    ],
    question: "Why do ARBs (and ACE inhibitors) protect the kidney in diabetic nephropathy, and why does eGFR dip at first?",
    answer: "Ang II constricts the efferent arteriole more than the afferent, raising intraglomerular pressure. That causes hyperfiltration, proteinuria and progressive glomerular damage. Blocking AT1 dilates the efferent arteriole → lower glomerular pressure → less proteinuria and slower decline, plus less Ang II-driven fibrosis. The fall in filtration pressure explains an expected initial eGFR dip (up to ~30% is acceptable).",
    pearl: "Hyperkalaemia (less aldosterone). Teratogenic, so contraindicated in pregnancy. Less cough than ACE inhibitors because bradykinin isn't affected. Don't combine an ACEi with an ARB (more harm, no benefit).",
    pathways: ["gq", "raas"]
  },
  {
    id: "ace", name: "Angiotensin-converting enzyme", short: "ACE", gene: "ACE",
    family: "Enzyme (zinc metallopeptidase)", area: "Cardiovascular & renal",
    location: "Endothelial surface, especially the pulmonary circulation; kidney",
    role: "Converts angiotensin I to angiotensin II, and inactivates bradykinin (as 'kininase II').",
    signalling: [
      "Renin: angiotensinogen → Ang I",
      "ACE: Ang I → Ang II (→ AT1 effects)",
      "ACE also degrades bradykinin and substance P",
      "ACE inhibition: ↓ Ang II, ↓ aldosterone, ↑ bradykinin (→ NO and prostaglandin vasodilation)",
      "Loss of Ang II feedback → ↑ renin and Ang I"
    ],
    mechanism: "Competitive inhibitors chelate the active-site zinc ('-prils').",
    drugs: [
      { name: "Ramipril / lisinopril / enalapril", action: "ACE inhibitors", use: "Hypertension, HFrEF, post-MI, CKD with proteinuria" }
    ],
    question: "Why do ACE inhibitors cause a dry cough and angioedema, while ARBs rarely do?",
    answer: "ACE also breaks down bradykinin and substance P. Inhibiting it lets these accumulate: bradykinin in the airways sensitises cough reflexes, and its vascular permeability effects cause angioedema (higher risk in people of African ancestry). ARBs act downstream at the AT1 receptor and leave ACE's kininase activity intact.",
    pearl: "Cough affects ~10% of patients → switch to an ARB. Angioedema can be fatal. Combining an ACEi with sacubitril needs a 36 h washout (both raise bradykinin).",
    pathways: ["raas"]
  },
  {
    id: "oprm1", name: "μ-opioid receptor", short: "MOR", gene: "OPRM1",
    family: "GPCR (Gi/o)", area: "Neuro & psychiatry",
    location: "Periaqueductal grey, rostral ventromedial medulla, spinal dorsal horn, brainstem respiratory centres, ventral tegmental area, enteric neurons",
    role: "Endogenous opioids (β-endorphin, enkephalins) control pain, reward and stress responses.",
    signalling: [
      "Opioid binds MOR → Gi/o activation",
      "Gαi inhibits adenylyl cyclase → ↓cAMP",
      "Gβγ opens GIRK K⁺ channels → postsynaptic hyperpolarisation",
      "Gβγ inhibits N-type Ca²⁺ channels → less glutamate and substance P release from nociceptor terminals",
      "Descending: disinhibits PAG output neurons (inhibits GABA interneurons) → descending pain inhibition",
      "Reward: inhibits VTA GABA interneurons → ↑ dopamine release in the nucleus accumbens"
    ],
    mechanism: "Full agonists give strong analgesia. Partial agonists have a ceiling effect. Antagonists reverse overdose.",
    drugs: [
      { name: "Morphine / fentanyl / oxycodone", action: "Full MOR agonists", use: "Severe acute and cancer pain" },
      { name: "Buprenorphine", action: "High-affinity partial MOR agonist", use: "Opioid use disorder, chronic pain" },
      { name: "Naloxone", action: "Competitive MOR antagonist", use: "Opioid overdose reversal" },
      { name: "Methylnaltrexone / naloxegol", action: "Peripherally restricted MOR antagonists", use: "Opioid-induced constipation" }
    ],
    question: "Why does buprenorphine have a ceiling on respiratory depression, and why can it precipitate withdrawal?",
    answer: "Buprenorphine is a partial agonist with very high affinity. Even at full receptor occupancy it produces only a submaximal response, so respiratory depression plateaus. Because it binds more tightly than heroin or methadone, it displaces those full agonists and lowers net receptor activation, which precipitates withdrawal in someone who is opioid-dependent. Induction therefore starts once mild withdrawal has begun.",
    pearl: "Respiratory depression comes from MORs in the preBötzinger complex. Tolerance develops to analgesia and respiratory depression but not to constipation or miosis. Naloxone's half-life is shorter than many opioids', so re-dosing may be needed.",
    pathways: ["gi", "synapse"]
  },
  {
    id: "p2y12", name: "P2Y12 receptor", short: "P2Y12", gene: "P2RY12",
    family: "GPCR (Gi)", area: "Haematology & thrombosis",
    location: "Platelets (also microglia)",
    role: "Platelets release ADP from dense granules. Through P2Y12, ADP amplifies and sustains platelet activation.",
    signalling: [
      "Initial platelet activation (collagen, thrombin) → dense granules release ADP",
      "ADP binds P2Y1 (Gq: shape change) and P2Y12 (Gi: sustained aggregation)",
      "P2Y12 → Gαi → ↓cAMP → less PKA/VASP phosphorylation (removes a brake)",
      "Gβγ → PI3K → stabilises active GPIIb/IIIa (integrin αIIbβ3)",
      "GPIIb/IIIa binds fibrinogen → platelets cross-link → aggregate grows"
    ],
    mechanism: "Thienopyridines (clopidogrel, prasugrel) are prodrugs that irreversibly block P2Y12. Ticagrelor binds reversibly and non-competitively, and is not a prodrug.",
    drugs: [
      { name: "Clopidogrel", action: "Irreversible P2Y12 antagonist (prodrug via CYP2C19)", use: "ACS, stents, stroke, PAD" },
      { name: "Prasugrel", action: "Irreversible P2Y12 antagonist (more reliable activation)", use: "ACS undergoing PCI" },
      { name: "Ticagrelor", action: "Reversible, allosteric P2Y12 antagonist", use: "ACS" }
    ],
    question: "Why is dual antiplatelet therapy (aspirin + a P2Y12 inhibitor) used after a coronary stent?",
    answer: "Platelets amplify their own activation through two independent loops: thromboxane A2 (made by COX-1, blocked by aspirin) and released ADP (acting on P2Y12). Blocking both gives additive inhibition of platelet aggregation on the stent surface, which cuts stent thrombosis, at the cost of more bleeding.",
    pearl: "CYP2C19 loss-of-function alleles (common in East Asian populations) mean less clopidogrel effect. Ticagrelor can cause dyspnoea (it raises adenosine) and bradyarrhythmias.",
    pathways: ["gi", "coag", "eicosanoid"]
  },
  {
    id: "cox", name: "Cyclooxygenase-1/2", short: "COX-1/2", gene: "PTGS1 / PTGS2",
    family: "Enzyme (oxidoreductase)", area: "Immunology & inflammation",
    location: "COX-1: constitutive (gastric mucosa, platelets, kidney). COX-2: induced at inflammatory sites; constitutive in kidney, endothelium, brain",
    role: "Makes prostanoids from arachidonic acid. These mediate pain, fever and inflammation, protect the gastric mucosa, regulate renal blood flow and control platelet aggregation.",
    signalling: [
      "Phospholipase A2 releases arachidonic acid from membrane phospholipids",
      "COX converts arachidonic acid → PGG2 → PGH2",
      "Tissue-specific synthases: PGE2 (pain sensitisation, fever via hypothalamus, gastric protection), PGI2 (endothelium: vasodilation, anti-platelet), TXA2 (platelets: aggregation, vasoconstriction)",
      "PGE2 → EP receptors (GPCRs) on nociceptors → sensitises TRPV1 and Nav1.8 → hyperalgesia",
      "IL-1β and TNF induce COX-2 via NF-κB"
    ],
    mechanism: "NSAIDs competitively block the COX active site. Aspirin irreversibly acetylates Ser530 of COX-1. Coxibs selectively block COX-2.",
    drugs: [
      { name: "Aspirin (low dose)", action: "Irreversible COX-1 acetylation", use: "Secondary prevention of MI/stroke" },
      { name: "Ibuprofen / naproxen", action: "Reversible non-selective COX inhibitors", use: "Pain, inflammation, fever" },
      { name: "Celecoxib", action: "Selective COX-2 inhibitor", use: "Arthritis pain with less GI toxicity" }
    ],
    question: "Why does low-dose aspirin work as an antiplatelet, while selective COX-2 inhibitors increase cardiovascular risk?",
    answer: "Platelets have no nucleus and can't make new COX-1. Aspirin's irreversible acetylation therefore blocks platelet TXA2 for the platelet's whole lifespan (~7–10 days), while endothelial cells quickly resynthesise COX and keep making PGI2. COX-2 inhibitors do the opposite: they suppress endothelial PGI2 (largely COX-2 derived) without touching platelet COX-1/TXA2. That shifts the balance towards thrombosis (rofecoxib was withdrawn).",
    pearl: "GI ulcers come from loss of COX-1 PGE2/PGI2 mucosal protection. Renal: the afferent arteriole depends on prostaglandins, so the 'triple whammy' (NSAID + ACEi/ARB + diuretic) can cause AKI. Ibuprofen taken before aspirin can block aspirin's access to COX-1.",
    pathways: ["nfkb", "eicosanoid"]
  },

  // ───────────── Metabolic ─────────────
  {
    id: "glp1r", name: "Glucagon-like peptide-1 receptor", short: "GLP-1R", gene: "GLP1R",
    family: "GPCR (class B, Gs)", area: "Metabolic & endocrine",
    location: "Pancreatic β-cells, hypothalamus (arcuate nucleus) and hindbrain (area postrema/NTS), stomach, heart, kidney",
    role: "Receptor for GLP-1, an incretin hormone released by intestinal L-cells after meals. It boosts glucose-dependent insulin secretion, suppresses glucagon, slows gastric emptying and promotes satiety.",
    signalling: [
      "GLP-1 / agonist binds GLP-1R",
      "Gαs → adenylyl cyclase → ↑cAMP",
      "cAMP → PKA and Epac2 → amplify Ca²⁺-triggered insulin granule exocytosis",
      "This amplifies, but doesn't initiate, glucose-triggered secretion (glucose → ATP → K_ATP closure → depolarisation → Ca²⁺ entry)",
      "Brain: activates arcuate POMC neurons and hindbrain circuits → satiety, reduced food reward",
      "Stomach: vagal pathways → slower gastric emptying"
    ],
    mechanism: "Peptide agonists engineered to resist DPP-4 and last longer (e.g. semaglutide: Aib8 substitution + C18 fatty diacid binding albumin → weekly dosing). Orforglipron is an oral small-molecule agonist.",
    drugs: [
      { name: "Semaglutide", action: "GLP-1R agonist", use: "T2D, obesity, CV risk reduction (SELECT), CKD" },
      { name: "Liraglutide", action: "GLP-1R agonist (daily)", use: "T2D, obesity" },
      { name: "Tirzepatide", action: "Dual GIP + GLP-1R agonist", use: "T2D, obesity, sleep apnoea" }
    ],
    question: "Why do GLP-1R agonists lower glucose with little risk of hypoglycaemia?",
    answer: "Insulin release is triggered by glucose metabolism: ATP closes K_ATP channels, the β-cell depolarises and Ca²⁺ enters. GLP-1R's cAMP signal only amplifies this Ca²⁺-triggered exocytosis. When glucose is normal, the β-cell isn't depolarised and the amplification has nothing to act on. Glucagon suppression is also glucose-dependent. (Hypoglycaemia risk rises when they're combined with sulfonylureas or insulin.)",
    pearl: "Native GLP-1 has a half-life of ~2 minutes (DPP-4). Nausea and vomiting come from slowed gastric emptying and area postrema activation, hence dose titration. Lean-mass loss and gallbladder events are worth knowing.",
    pathways: ["gs", "incretin", "insulin"]
  },
  {
    id: "dpp4", name: "Dipeptidyl peptidase-4", short: "DPP-4", gene: "DPP4",
    family: "Enzyme (serine protease)", area: "Metabolic & endocrine",
    location: "Endothelial and epithelial cell surfaces; also a soluble form in plasma (also CD26 on T cells)",
    role: "Cleaves N-terminal dipeptides from peptides with Pro/Ala at position 2, including GLP-1 and GIP, inactivating them within minutes.",
    signalling: [
      "Meal → GLP-1 and GIP released",
      "DPP-4 cleaves His-Ala from GLP-1(7-36) → inactive GLP-1(9-36)",
      "DPP-4 inhibition → endogenous active GLP-1/GIP levels rise ~2–3 fold",
      "→ more glucose-dependent insulin, less glucagon (incretin pathway)"
    ],
    mechanism: "Oral small-molecule competitive inhibitors ('-gliptins').",
    drugs: [
      { name: "Sitagliptin / linagliptin / saxagliptin", action: "DPP-4 inhibitors", use: "Type 2 diabetes (oral)" }
    ],
    question: "Why are DPP-4 inhibitors weight-neutral, while GLP-1R agonists cause major weight loss?",
    answer: "DPP-4 inhibitors only protect endogenous GLP-1, raising it 2–3 fold within the physiological range. That is enough for glucose-dependent insulin secretion at the islet (GLP-1 acts locally near its release site) but too little to reach the hypothalamus and hindbrain or slow gastric emptying much. GLP-1R agonists give pharmacological, sustained receptor activation, enough to drive central satiety.",
    pearl: "Very well tolerated; linagliptin needs no renal dose adjustment. Saxagliptin was linked to more HF hospitalisation (SAVOR-TIMI 53). Rare bullous pemphigoid.",
    pathways: ["incretin"]
  },
  {
    id: "sglt2", name: "Sodium–glucose co-transporter 2", short: "SGLT2", gene: "SLC5A2",
    family: "Transporter (SLC5)", area: "Metabolic & endocrine",
    location: "Apical membrane of the early proximal tubule (S1/S2 segments)",
    role: "Reabsorbs ~90% of filtered glucose together with Na⁺ (1:1).",
    signalling: [
      "Basolateral Na⁺/K⁺-ATPase keeps intracellular Na⁺ low",
      "SGLT2 uses the Na⁺ gradient to co-transport Na⁺ + glucose from the tubular lumen",
      "Glucose exits basolaterally via GLUT2",
      "SGLT2 inhibition → glucosuria (~60–80 g/day), natriuresis, osmotic diuresis",
      "More NaCl reaches the macula densa → tubuloglomerular feedback → afferent arteriole constriction"
    ],
    mechanism: "Selective SGLT2 inhibitors ('-gliflozins'). Glucose-lowering depends on filtered glucose load, but cardiorenal benefit persists at low eGFR.",
    drugs: [
      { name: "Empagliflozin / dapagliflozin", action: "SGLT2 inhibitors", use: "T2D, heart failure (HFrEF and HFpEF), CKD" },
      { name: "Canagliflozin", action: "SGLT2 (and weak SGLT1) inhibitor", use: "T2D, diabetic kidney disease (CREDENCE)" }
    ],
    question: "Why do SGLT2 inhibitors protect the kidney and heart in people without diabetes?",
    answer: "Kidney: blocking proximal Na⁺ reabsorption raises NaCl delivery to the macula densa. Tubuloglomerular feedback (via adenosine) then constricts the afferent arteriole, lowering intraglomerular pressure and hyperfiltration, the same goal as RAAS blockade but at the other arteriole. Heart: natriuresis and osmotic diuresis reduce volume and preload without much neurohormonal activation, lower BP, and shift metabolism towards ketones. Possible direct myocardial effects are debated.",
    pearl: "Genital mycotic infections. Euglycaemic DKA, so hold before surgery or acute illness. Initial eGFR dip (haemodynamic, expected). Volume depletion.",
    pathways: []
  },
  {
    id: "hmgcr", name: "HMG-CoA reductase", short: "HMGCR", gene: "HMGCR",
    family: "Enzyme (oxidoreductase)", area: "Metabolic & endocrine",
    location: "Endoplasmic reticulum, mainly hepatocytes",
    role: "Rate-limiting enzyme of cholesterol synthesis (HMG-CoA → mevalonate). Also supplies isoprenoids for protein prenylation.",
    signalling: [
      "HMG-CoA reductase makes mevalonate → … → cholesterol",
      "Statin → ↓ hepatocyte cholesterol",
      "SCAP senses low ER cholesterol → escorts SREBP2 from ER to Golgi",
      "S1P/S2P proteases release the SREBP2 transcription factor → nucleus",
      "↑ LDL receptor transcription → more LDL cleared from blood (SREBP2 also raises PCSK9)"
    ],
    mechanism: "Competitive inhibitors that mimic the HMG-CoA intermediate ('-statins').",
    drugs: [
      { name: "Atorvastatin / rosuvastatin", action: "High-intensity HMG-CoA reductase inhibitors", use: "Primary and secondary ASCVD prevention" },
      { name: "Simvastatin / pravastatin", action: "Moderate-intensity statins", use: "Hypercholesterolaemia" }
    ],
    question: "Statins inhibit cholesterol synthesis inside the liver. Why does LDL fall in the blood?",
    answer: "Hepatocytes sense the drop in intracellular cholesterol. SCAP moves SREBP2 to the Golgi, where it is cleaved and enters the nucleus to upregulate LDL receptor transcription. More LDL receptors on the liver surface pull LDL out of plasma. Most of the LDL reduction comes from increased clearance, not reduced output.",
    pearl: "SREBP2 also upregulates PCSK9, which limits the statin effect (doubling the dose gives only ~6% more LDL lowering), so PCSK9 inhibitors add on well. Myopathy risk rises with CYP3A4 inhibitors (simvastatin). Small rise in diabetes risk.",
    pathways: ["lipid"]
  },
  {
    id: "pcsk9", name: "Proprotein convertase subtilisin/kexin 9", short: "PCSK9", gene: "PCSK9",
    family: "Secreted protein (protease-family chaperone)", area: "Metabolic & endocrine",
    location: "Made and secreted mainly by hepatocytes; acts on hepatocyte surface LDL receptors",
    role: "Binds the LDL receptor and diverts it to lysosomal degradation instead of recycling, which reduces LDL clearance.",
    signalling: [
      "LDLR binds LDL at the hepatocyte surface → endocytosis",
      "Normally: acidic endosome → LDL released → LDLR recycles to the surface (~150 cycles)",
      "PCSK9 binds the LDLR EGF-A domain → complex stays bound in the acidic endosome",
      "LDLR is routed to the lysosome and degraded → fewer receptors → ↑ plasma LDL",
      "Blocking PCSK9 → more LDLR recycling → LDL ↓ ~50–60%"
    ],
    mechanism: "Antibodies neutralise circulating PCSK9. An siRNA (GalNAc-conjugated to target hepatocytes) silences PCSK9 mRNA. Oral PCSK9 inhibitors (e.g. enlicitide) are in development.",
    drugs: [
      { name: "Evolocumab / alirocumab", action: "Anti-PCSK9 monoclonal antibodies", use: "ASCVD, familial hypercholesterolaemia (every 2–4 weeks)" },
      { name: "Inclisiran", action: "siRNA against PCSK9 mRNA", use: "Hypercholesterolaemia (twice-yearly injection)" }
    ],
    question: "Why was PCSK9 such a strongly validated drug target before any drug existed?",
    answer: "Human genetics. Gain-of-function PCSK9 mutations cause autosomal-dominant familial hypercholesterolaemia. Loss-of-function nonsense variants (found in ~2% of Black Americans) gave ~28% lower LDL from birth and ~88% fewer coronary events, with no apparent harm, including in a healthy woman with no functional PCSK9 at all. Nature had run the efficacy and safety trial.",
    pearl: "Synergistic with statins: statins raise PCSK9 via SREBP2, and blocking PCSK9 removes that brake. Inclisiran works through RNA interference (RISC degrades the mRNA).",
    pathways: ["lipid"]
  },
  {
    id: "pparg", name: "Peroxisome proliferator-activated receptor γ", short: "PPARγ", gene: "PPARG",
    family: "Nuclear receptor (type II, RXR heterodimer)", area: "Metabolic & endocrine",
    location: "Adipose tissue (highest), macrophages, colon, placenta",
    role: "Master regulator of adipocyte differentiation and lipid storage. Fatty acids and eicosanoids are its natural ligands.",
    signalling: [
      "PPARγ–RXR heterodimer sits on PPAR response elements bound to co-repressors",
      "Agonist binding → co-repressors released, co-activators recruited",
      "↑ genes for adipogenesis, fatty acid uptake and storage (CD36, LPL, aP2), and adiponectin",
      "↓ inflammatory adipokines (TNF, resistin); macrophages shift to an anti-inflammatory state"
    ],
    mechanism: "Thiazolidinediones (TZDs, 'glitazones') are full agonists.",
    drugs: [
      { name: "Pioglitazone", action: "PPARγ agonist (TZD)", use: "T2D (insulin resistance), MASH/NASH (off-label)" },
      { name: "Rosiglitazone", action: "PPARγ agonist", use: "T2D (now rarely used)" }
    ],
    question: "PPARγ is mostly in fat. How do PPARγ agonists improve insulin sensitivity in muscle and liver?",
    answer: "Through 'lipid steal'. TZDs expand healthy subcutaneous fat that takes up and stores fatty acids, pulling lipid away from muscle and liver, where ectopic lipid (DAG, ceramides) impairs insulin signalling. They also raise adiponectin (→ AMPK and fatty acid oxidation in liver and muscle) and reduce inflammatory adipokines. The improvement is systemic even though the receptor is local.",
    pearl: "Side effects follow from the mechanism: weight gain (more fat), fluid retention and heart failure (renal Na⁺ retention in the collecting duct), and fractures (marrow stem cells pushed towards adipocytes instead of osteoblasts).",
    pathways: ["nuclear"]
  },

  // ───────────── Immunology & inflammation ─────────────
  {
    id: "tnf", name: "Tumour necrosis factor-α", short: "TNF-α", gene: "TNF",
    family: "Cytokine (TNF superfamily)", area: "Immunology & inflammation",
    location: "Made by activated macrophages, T cells and mast cells (membrane-bound and soluble forms). TNFR1 is ubiquitous; TNFR2 is on immune and endothelial cells",
    role: "Master inflammatory cytokine: endothelial activation, recruitment of leukocytes, fever, cachexia, maintenance of granulomas.",
    signalling: [
      "TNF trimer binds TNFR1",
      "Recruits TRADD → TRAF2 + RIPK1 + cIAP1/2 → ubiquitin scaffold (LUBAC adds linear chains)",
      "TAK1 → IKK complex → IκBα degraded → NF-κB → inflammatory genes (IL-6, IL-8, adhesion molecules, MMPs)",
      "TAK1 → MAPK (JNK, p38) → AP-1",
      "If the survival arm fails: complex II → caspase-8 (apoptosis) or RIPK3/MLKL (necroptosis)"
    ],
    mechanism: "Neutralising antibodies or a soluble receptor decoy remove TNF.",
    drugs: [
      { name: "Adalimumab / infliximab", action: "Anti-TNF monoclonal antibodies", use: "RA, Crohn's, UC, psoriasis, ankylosing spondylitis" },
      { name: "Etanercept", action: "TNFR2–Fc fusion (decoy receptor)", use: "RA, psoriasis, PsA (not IBD)" },
      { name: "Certolizumab pegol", action: "PEGylated anti-TNF Fab' (no Fc)", use: "RA, Crohn's; minimal placental transfer" }
    ],
    question: "Why do anti-TNF drugs increase the risk of reactivating tuberculosis?",
    answer: "Latent TB is contained inside granulomas, organised structures of activated macrophages and T cells. TNF is needed to keep them intact: it activates macrophages to kill mycobacteria and keeps up chemokine signalling and cell recruitment. Blocking TNF lets granulomas break down → TB reactivates, often disseminated. Patients are screened for latent TB (IGRA) before starting.",
    pearl: "Etanercept fails in Crohn's because it doesn't engage membrane TNF on lamina propria T cells in the same way, so it doesn't induce their apoptosis or reverse signalling. Anti-drug antibodies (immunogenicity) cause loss of response, which is why therapeutic drug monitoring is used.",
    pathways: ["nfkb"]
  },
  {
    id: "il1b", name: "Interleukin-1β", short: "IL-1β", gene: "IL1B",
    family: "Cytokine (IL-1 family)", area: "Immunology & inflammation",
    location: "Made mainly by monocytes and macrophages. Receptor IL-1R1 + IL-1RAcP on almost all cells",
    role: "Potent pyrogen and inflammation amplifier: fever, acute-phase response (via IL-6), neutrophilia, endothelial activation. IL-1Ra is the body's natural antagonist.",
    signalling: [
      "Signal 1 (priming): TLR/TNF → NF-κB → transcription of pro-IL-1β (inactive) and NLRP3",
      "Signal 2 (activation): ATP, urate crystals, cholesterol crystals, K⁺ efflux → NLRP3 inflammasome assembles (NLRP3 + ASC)",
      "Caspase-1 cleaves pro-IL-1β → active IL-1β; also cleaves gasdermin D → pores → release and pyroptosis",
      "IL-1β binds IL-1R1 + IL-1RAcP → MyD88 → IRAK4/IRAK1 → TRAF6 → TAK1 → NF-κB + MAPK",
      "Downstream: IL-6 (→ CRP), COX-2 (→ PGE2, fever), chemokines, more IL-1β (amplification loop)"
    ],
    mechanism: "Block it with a receptor antagonist (a copy of natural IL-1Ra), a neutralising antibody, or a ligand trap. Colchicine works indirectly by impairing NLRP3 inflammasome assembly (microtubule-dependent).",
    drugs: [
      { name: "Anakinra", action: "Recombinant IL-1 receptor antagonist (IL-1Ra)", use: "Still's disease, CAPS, gout flares, pericarditis" },
      { name: "Canakinumab", action: "Anti-IL-1β monoclonal antibody", use: "CAPS, Still's disease, periodic fever syndromes" },
      { name: "Rilonacept", action: "IL-1 trap (soluble receptor–Fc)", use: "Recurrent pericarditis, CAPS" },
      { name: "Colchicine", action: "Microtubule inhibitor → impairs NLRP3 inflammasome and neutrophils", use: "Gout, pericarditis, CV risk reduction (LoDoCo2)" }
    ],
    question: "Why does BLOCKING IL-1β (with an antagonist, not an agonist) reduce inflammation, and what did CANTOS prove?",
    answer: "IL-1β is itself an upstream pro-inflammatory amplifier. Through IL-1R1/MyD88/NF-κB it induces IL-6 (→ CRP), COX-2 (fever and pain), adhesion molecules and chemokines (neutrophil influx), and more IL-1β. Activating its receptor would worsen inflammation. Blocking it mimics the body's own brake, IL-1Ra. In gout and autoinflammatory diseases (CAPS), where crystal- or mutation-driven NLRP3 activation overproduces IL-1β, blockade is dramatically effective. CANTOS: canakinumab cut major CV events ~15% without changing LDL, the first proof that targeting inflammation alone reduces atherosclerotic events. Fatal infections increased slightly and lung cancer fell.",
    pearl: "Gain-of-function NLRP3 mutations (CAPS) respond almost completely to IL-1 blockade. That is proof the disease is IL-1β-driven. Anakinra's half-life is ~4–6 h (daily injection); canakinumab is given every 4–8 weeks.",
    pathways: ["nfkb"]
  },
  {
    id: "il6r", name: "Interleukin-6 receptor", short: "IL-6R", gene: "IL6R",
    family: "Cytokine receptor (gp130 family)", area: "Immunology & inflammation",
    location: "Membrane IL-6R on hepatocytes and some leukocytes. Soluble IL-6R allows 'trans-signalling' on any gp130⁺ cell",
    role: "IL-6 drives the acute-phase response, fever, Th17 differentiation, B-cell → plasma cell maturation, and hepcidin (anaemia of inflammation).",
    signalling: [
      "IL-6 binds IL-6R (membrane or soluble)",
      "IL-6/IL-6R complex recruits two gp130 signalling chains (hexamer)",
      "gp130-associated JAK1 (+JAK2/TYK2) phosphorylate gp130 → STAT3 docks and is phosphorylated",
      "STAT3 dimers → nucleus → CRP, fibrinogen, serum amyloid A, hepcidin; RORγt (Th17)",
      "SOCS3 provides negative feedback"
    ],
    mechanism: "Antibodies block the receptor (both membrane and soluble forms) or neutralise IL-6 itself.",
    drugs: [
      { name: "Tocilizumab / sarilumab", action: "Anti-IL-6R monoclonal antibodies", use: "RA, giant cell arteritis, CAR-T cytokine release syndrome, severe COVID-19" },
      { name: "Siltuximab", action: "Anti-IL-6 monoclonal antibody", use: "Multicentric Castleman disease" }
    ],
    question: "Why does tocilizumab make CRP useless for detecting infection?",
    answer: "Hepatic CRP synthesis is driven almost entirely by IL-6 → STAT3. Blocking IL-6R suppresses CRP (and often fever) even during serious bacterial infection, so sepsis can be masked. Clinicians must rely on clinical signs, cultures or procalcitonin.",
    pearl: "Raises LDL (IL-6 suppresses lipids in inflammation). GI perforation risk (diverticulitis). First-line for CAR-T cytokine release syndrome (IL-6 surge). Ziltivekimab (anti-IL-6) is in CV outcome trials, following the CANTOS logic downstream.",
    pathways: ["jakstat"]
  },
  {
    id: "jak", name: "Janus kinases (JAK1/2/3, TYK2)", short: "JAKs", gene: "JAK1, JAK2, JAK3, TYK2",
    family: "Non-receptor tyrosine kinases", area: "Immunology & inflammation",
    location: "Cytoplasmic, constitutively bound to type I/II cytokine receptors in immune, haematopoietic and many other cells",
    role: "Signal for ~60 cytokines and hormones (interleukins, interferons, EPO, TPO, GH, GM-CSF).",
    signalling: [
      "Cytokine binding brings receptor chains together",
      "Paired JAKs trans-phosphorylate and activate",
      "JAKs phosphorylate the receptor → STAT docking → STAT phosphorylation",
      "STAT dimers → nucleus → transcription",
      "JAK2 V617F (in the pseudokinase domain) → constitutive signalling → polycythaemia vera, essential thrombocythaemia, myelofibrosis"
    ],
    mechanism: "Small-molecule ATP-competitive inhibitors ('-citinibs'), with varying JAK selectivity. Deucravacitinib is allosteric: it binds the TYK2 pseudokinase (JH2) domain.",
    drugs: [
      { name: "Tofacitinib / upadacitinib / baricitinib", action: "JAK inhibitors (JAK1/3, JAK1, JAK1/2)", use: "RA, PsA, UC, atopic dermatitis; baricitinib also alopecia areata" },
      { name: "Ruxolitinib", action: "JAK1/2 inhibitor", use: "Myelofibrosis, polycythaemia vera, GVHD; topical for vitiligo" },
      { name: "Deucravacitinib", action: "Allosteric TYK2 inhibitor", use: "Plaque psoriasis" }
    ],
    question: "Why can one oral JAK inhibitor treat many different inflammatory diseases, and what is the price?",
    answer: "Many disease-driving cytokines converge on a few JAKs. One JAK1 inhibitor dampens IL-6, interferons, IL-2/IL-15/IL-21 (γc) and IL-4/IL-13 signalling at once, like several biologics in one pill. The price is broad immunosuppression (herpes zoster reactivation, serious infections), lab changes from JAK2 (EPO/TPO → anaemia, thrombocytopenia), raised lipids, and a boxed warning for MACE, VTE and malignancy after ORAL Surveillance (tofacitinib vs anti-TNF in older RA patients with CV risk).",
    pearl: "Selectivity matters for side effects: TYK2-selective deucravacitinib avoids the JAK1–3 lab changes. JAK2 V617F was found in 2005, and ruxolitinib followed in 2011.",
    pathways: ["jakstat"]
  },
  {
    id: "gr", name: "Glucocorticoid receptor", short: "GR", gene: "NR3C1",
    family: "Nuclear receptor (type I)", area: "Immunology & inflammation",
    location: "Cytoplasm of almost all cells (bound to HSP90)",
    role: "Mediates cortisol's actions: stress response, gluconeogenesis, immune restraint, vascular tone.",
    signalling: [
      "Glucocorticoid diffuses into the cell → binds GR → HSP90 released → GR enters the nucleus",
      "Transactivation: GR dimers bind GREs → ↑ anti-inflammatory genes (annexin-1/lipocortin, GILZ, MKP-1/DUSP1, IκBα) and metabolic genes (PEPCK → gluconeogenesis)",
      "Transrepression: GR monomers tether to NF-κB and AP-1 → block transcription of IL-1, IL-6, TNF, COX-2, chemokines",
      "GR recruits HDAC2 → closes chromatin at inflammatory genes",
      "Annexin-1 inhibits PLA2 → less arachidonic acid → fewer prostaglandins and leukotrienes"
    ],
    mechanism: "Synthetic agonists with stronger GR potency and longer action. Inhaled or topical forms limit systemic exposure.",
    drugs: [
      { name: "Prednisolone / methylprednisolone", action: "GR agonists (systemic)", use: "Flares of autoimmune and inflammatory disease, asthma/COPD exacerbations" },
      { name: "Dexamethasone", action: "Potent long-acting GR agonist (no mineralocorticoid effect)", use: "Cerebral oedema, chemo antiemesis, severe COVID-19 (RECOVERY)" },
      { name: "Budesonide / fluticasone", action: "Inhaled or locally acting GR agonists", use: "Asthma, COPD, IBD (budesonide, high first-pass)" }
    ],
    question: "Why are glucocorticoids such broad anti-inflammatories (an AGONIST that suppresses inflammation)?",
    answer: "GR is a natural brake. Instead of blocking one cytokine, an activated GR acts at the level of transcription. It tethers to NF-κB and AP-1, shutting off many inflammatory genes at once (IL-1, IL-6, TNF, COX-2, chemokines, adhesion molecules), recruits HDAC2 to close chromatin, and induces anti-inflammatory proteins (annexin-1 → less eicosanoid production; MKP-1 → switches off p38 MAPK; IκBα → traps NF-κB). Many side effects come from GR transactivating metabolic genes: hyperglycaemia, osteoporosis, muscle wasting.",
    pearl: "Exogenous steroids suppress the HPA axis, so taper after more than ~3 weeks. Steroid resistance in severe asthma/COPD is linked to reduced HDAC2 (oxidative stress from smoking). Inhaled steroids upregulate β2 receptors, which is one reason for the synergy with LABAs.",
    pathways: ["nuclear", "nfkb", "eicosanoid"]
  },
  {
    id: "il23", name: "Interleukin-23", short: "IL-23", gene: "IL23A (p19) + IL12B (p40)",
    family: "Cytokine (IL-12 family heterodimer)", area: "Immunology & inflammation",
    location: "Made by dendritic cells and macrophages. Receptor (IL-23R + IL-12Rβ1) on Th17, γδ T cells, ILC3s",
    role: "Sustains and expands IL-17-producing pathogenic Th17 cells. Important in barrier immunity of skin and gut.",
    signalling: [
      "IL-23 (p19 + p40) binds IL-23R + IL-12Rβ1",
      "JAK2 (IL-23R) + TYK2 (IL-12Rβ1) activate",
      "STAT3 phosphorylation → RORγt",
      "→ IL-17A, IL-17F, IL-22, GM-CSF production",
      "p40 is shared with IL-12 (IL-12 = p35 + p40 → Th1/IFN-γ)"
    ],
    mechanism: "Neutralising antibodies against p19 (IL-23-specific) or p40 (IL-12 + IL-23).",
    drugs: [
      { name: "Guselkumab / risankizumab / mirikizumab", action: "Anti-IL-23 p19 antibodies", use: "Psoriasis, PsA, Crohn's disease, ulcerative colitis" },
      { name: "Ustekinumab", action: "Anti-p40 antibody (blocks IL-12 + IL-23)", use: "Psoriasis, PsA, Crohn's, UC" }
    ],
    question: "Why do IL-23 inhibitors work in Crohn's disease when IL-17 inhibitors make it worse?",
    answer: "IL-23 is upstream. Blocking it suppresses the pathogenic Th17 programme and several effectors (IL-17, IL-22, GM-CSF, IFN-γ from Th17/Th1 'ex-Th17' cells). Gut epithelium still makes some IL-23-independent IL-17 (e.g. from γδ T cells), which maintains tight junctions and barrier integrity. Blocking IL-17 directly removes that protective barrier signal, which worsened Crohn's in secukinumab trials.",
    pearl: "A protective IL23R variant (R381Q) lowers IBD, psoriasis and ankylosing spondylitis risk, which is genetic validation. Very infrequent maintenance dosing in psoriasis (every 8–12 weeks).",
    pathways: ["th17", "jakstat"]
  },
  {
    id: "il17a", name: "Interleukin-17A", short: "IL-17A", gene: "IL17A",
    family: "Cytokine (IL-17 family)", area: "Immunology & inflammation",
    location: "Made by Th17, γδ T cells, ILC3s. Receptor IL-17RA/RC on keratinocytes, epithelial cells, fibroblasts, synoviocytes",
    role: "Defence against extracellular bacteria and fungi (especially Candida) at mucosae and skin, mainly by recruiting neutrophils and inducing antimicrobial peptides.",
    signalling: [
      "IL-17A (homodimer or IL-17A/F) binds IL-17RA + IL-17RC",
      "SEFIR domains recruit the adaptor Act1",
      "Act1 → TRAF6 → NF-κB and C/EBPβ/δ transcription",
      "Act1 → TRAF2/5 → stabilises inflammatory mRNAs (e.g. IL-6, CXCL1)",
      "Output: CXCL1/CXCL8 (neutrophils), β-defensins, S100A7/8/9, IL-6, keratinocyte hyperproliferation"
    ],
    mechanism: "Neutralise IL-17A (or A+F), or block the IL-17RA receptor.",
    drugs: [
      { name: "Secukinumab / ixekizumab", action: "Anti-IL-17A antibodies", use: "Psoriasis, PsA, axial spondyloarthritis, hidradenitis (secukinumab)" },
      { name: "Bimekizumab", action: "Anti-IL-17A and IL-17F antibody", use: "Psoriasis, PsA, axSpA, hidradenitis suppurativa" },
      { name: "Brodalumab", action: "Anti-IL-17RA receptor antibody", use: "Psoriasis" }
    ],
    question: "Why do IL-17 inhibitors cause oral candidiasis and can trigger or worsen IBD?",
    answer: "IL-17 is the key signal for mucocutaneous antifungal immunity: neutrophil recruitment and antimicrobial peptides at epithelia. People with inborn IL-17RA or IL-17F defects get chronic mucocutaneous candidiasis. In the gut, IL-17 maintains epithelial tight junctions (occludin) and barrier function, so removing it can unmask or worsen Crohn's disease. Both are on-target effects.",
    pearl: "Fastest skin clearance of any class (PASI 75 within weeks). Better than anti-IL-23 for axial spondyloarthritis (IL-17 is made there partly independently of IL-23).",
    pathways: ["th17"]
  },
  {
    id: "il4ra", name: "IL-4 receptor α", short: "IL-4Rα", gene: "IL4R",
    family: "Cytokine receptor (type I)", area: "Immunology & inflammation",
    location: "B cells, T cells, eosinophils, epithelial cells, smooth muscle, fibroblasts, keratinocytes",
    role: "Shared receptor chain for IL-4 and IL-13, the core cytokines of type 2 immunity (allergy, anti-parasite responses).",
    signalling: [
      "Type I receptor (IL-4Rα + γc, on lymphocytes) binds IL-4 → JAK1 + JAK3",
      "Type II receptor (IL-4Rα + IL-13Rα1, on structural cells) binds IL-4 or IL-13 → JAK1 + TYK2",
      "STAT6 phosphorylation and dimerisation",
      "Effects: Th2 differentiation (GATA3), IgE class switching, eotaxin (CCL26) → eosinophils, goblet cell mucus (MUC5AC), airway hyperresponsiveness, ↓ skin barrier proteins (filaggrin)"
    ],
    mechanism: "Blocking IL-4Rα shuts down both IL-4 and IL-13 signalling. Alternatives neutralise IL-13 alone.",
    drugs: [
      { name: "Dupilumab", action: "Anti-IL-4Rα antibody (blocks IL-4 + IL-13)", use: "Atopic dermatitis, asthma, CRSwNP, EoE, prurigo nodularis, COPD with eosinophils" },
      { name: "Tralokinumab / lebrikizumab", action: "Anti-IL-13 antibodies", use: "Atopic dermatitis" }
    ],
    question: "How can one antibody (dupilumab) treat eczema, asthma, nasal polyps and eosinophilic oesophagitis?",
    answer: "These are different organs with the same underlying 'type 2' inflammation, driven by IL-4 and IL-13 acting through the shared IL-4Rα chain. Blocking IL-4Rα shuts down STAT6 signalling for both cytokines: less IgE switching, less eosinophil recruitment (eotaxin), less mucus and airway hyperresponsiveness, and restored skin barrier. Endotype (mechanism) matters more than anatomy.",
    pearl: "Conjunctivitis (mechanism unclear, possibly goblet cell effects). Blood eosinophils may rise transiently because dupilumab blocks their migration into tissue (↓ eotaxin, VCAM-1), not their production. Other type 2 targets: IL-5 (mepolizumab), IgE (omalizumab), TSLP (tezepelumab).",
    pathways: ["jakstat"]
  },

  // ───────────── Oncology ─────────────
  {
    id: "egfr", name: "Epidermal growth factor receptor", short: "EGFR", gene: "EGFR (ERBB1)",
    family: "Receptor tyrosine kinase (ErbB family)", area: "Oncology",
    location: "Epithelial cells, skin, GI tract. Mutated in ~15% (Western) to ~50% (East Asian) of lung adenocarcinomas",
    role: "Binds EGF and TGF-α to drive epithelial proliferation, survival, and wound repair.",
    signalling: [
      "Ligand binding → EGFR homo- or heterodimerisation (e.g. with HER2)",
      "Asymmetric kinase dimer → trans-autophosphorylation of C-terminal tyrosines",
      "GRB2/SOS → RAS → RAF → MEK → ERK (proliferation)",
      "PI3K → AKT → mTOR (survival); STAT3",
      "Activating mutations (exon 19 deletion, L858R) → ligand-independent signalling and 'oncogene addiction'"
    ],
    mechanism: "Small-molecule tyrosine kinase inhibitors (TKIs) for mutant EGFR in NSCLC. Antibodies block ligand binding in colorectal and head & neck cancer.",
    drugs: [
      { name: "Osimertinib", action: "3rd-generation irreversible EGFR TKI (covalent at C797; covers T790M)", use: "EGFR-mutant NSCLC" },
      { name: "Erlotinib / gefitinib", action: "1st-generation reversible EGFR TKIs", use: "EGFR-mutant NSCLC" },
      { name: "Cetuximab / panitumumab", action: "Anti-EGFR antibodies (block ligand binding)", use: "RAS wild-type colorectal cancer, head & neck SCC" },
      { name: "Amivantamab", action: "EGFR–MET bispecific antibody", use: "EGFR exon 20 insertion NSCLC" }
    ],
    question: "Why are anti-EGFR antibodies useless in KRAS-mutant colorectal cancer?",
    answer: "KRAS sits downstream of EGFR. A mutant KRAS is locked in its GTP-bound 'on' state and drives RAF–MEK–ERK signalling whether or not EGFR is active. Blocking the receptor upstream can't switch off a signal that starts further down. That's why RAS testing (KRAS and NRAS) is mandatory before cetuximab or panitumumab.",
    pearl: "Acneiform rash (EGFR in skin) is on-target and correlates with response. Resistance: T790M gatekeeper mutation (1st-gen drugs), then C797S (osimertinib), or MET amplification bypass.",
    pathways: ["mapk", "pi3k"]
  },
  {
    id: "kras", name: "KRAS (G12C)", short: "KRAS", gene: "KRAS",
    family: "Small GTPase", area: "Oncology",
    location: "Inner leaflet of the plasma membrane (farnesylated). KRAS is the most frequently mutated oncogene in human cancer (pancreatic ~90%, colorectal ~40%, lung ~30%)",
    role: "Molecular on/off switch between receptor tyrosine kinases and the MAPK and PI3K pathways.",
    signalling: [
      "Off: KRAS-GDP. GEFs (SOS1) swap GDP → GTP → KRAS-GTP 'on'",
      "KRAS-GTP binds effectors: RAF (→ MEK → ERK), PI3K, RalGDS",
      "GAPs (NF1, p120GAP) accelerate GTP hydrolysis → back to 'off'",
      "G12, G13 and Q61 mutations block GAP-stimulated hydrolysis → stuck 'on'",
      "G12C (~13% of NSCLC, mostly smokers; ~3% of CRC) still cycles slowly through the GDP state"
    ],
    mechanism: "Covalent inhibitors bind the mutant cysteine-12 within the switch-II pocket and trap KRAS in the inactive GDP state. Newer 'RAS(ON)' inhibitors and pan-RAS/pan-KRAS drugs are in development.",
    drugs: [
      { name: "Sotorasib / adagrasib", action: "Covalent KRAS G12C (GDP-state) inhibitors", use: "KRAS G12C NSCLC; with anti-EGFR antibody in CRC" }
    ],
    question: "KRAS was called 'undruggable' for 30 years. How did sotorasib drug it?",
    answer: "Normal KRAS binds GTP with picomolar affinity (impossible to out-compete at cellular GTP concentrations) and has a smooth surface with no obvious pocket. The G12C mutation adds a reactive cysteine next to a cryptic pocket (switch-II pocket) that opens only in the GDP-bound state. Covalent drugs bond irreversibly to that cysteine and lock KRAS 'off'. They spare wild-type KRAS, since normal cells don't have the cysteine, which gives a large therapeutic window.",
    pearl: "This only works because G12C still has some intrinsic GTPase activity, so it visits the GDP state. Resistance comes from adaptive RTK/SOS reactivation, which pushes KRAS into the GTP state (hence EGFR antibody combos in CRC), or from new RAS mutations. Covalent drugs, not GTP competitors, cracked the problem.",
    pathways: ["mapk"]
  },
  {
    id: "braf", name: "BRAF (V600E)", short: "BRAF", gene: "BRAF",
    family: "Serine/threonine kinase (RAF family)", area: "Oncology",
    location: "Cytoplasm. V600E mutation in ~50% of melanomas, ~10% of colorectal cancers, papillary thyroid cancer, hairy cell leukaemia",
    role: "RAF kinase that relays RAS-GTP signals to MEK.",
    signalling: [
      "Normally: RAS-GTP recruits RAF → RAF dimerises → phosphorylates MEK",
      "V600E mimics activation-loop phosphorylation → BRAF signals as a RAS-independent monomer",
      "MEK → ERK hyperactivation → proliferation",
      "In BRAF wild-type cells with active RAS, inhibitors can cause 'paradoxical activation' of RAF dimers"
    ],
    mechanism: "ATP-competitive inhibitors selective for V600-mutant monomers, almost always combined with a MEK inhibitor.",
    drugs: [
      { name: "Dabrafenib + trametinib", action: "BRAF V600 inhibitor + MEK inhibitor", use: "BRAF V600 melanoma (incl. adjuvant), NSCLC, anaplastic thyroid; tumour-agnostic" },
      { name: "Encorafenib + binimetinib", action: "BRAF + MEK inhibitors", use: "BRAF V600 melanoma, NSCLC" },
      { name: "Encorafenib + cetuximab", action: "BRAF inhibitor + anti-EGFR antibody", use: "BRAF V600E colorectal cancer" }
    ],
    question: "Why are BRAF inhibitors combined with MEK inhibitors?",
    answer: "Two reasons. (1) Paradoxical activation: in cells with wild-type BRAF and active RAS (e.g. keratinocytes), the inhibitor binds one RAF in a dimer and transactivates the partner, increasing ERK signalling. With BRAF inhibitors alone this caused cutaneous squamous cell carcinomas and keratoacanthomas. (2) Resistance: tumours reactivate MAPK signalling (via RAS, CRAF, or BRAF splice variants). A MEK inhibitor blocks downstream of both, giving deeper, more durable responses and fewer skin tumours.",
    pearl: "In BRAF V600E colorectal cancer, BRAF inhibition relieves ERK feedback on EGFR → rebound signalling, so EGFR blockade is added. Pyrexia is characteristic of dabrafenib.",
    pathways: ["mapk"]
  },
  {
    id: "her2", name: "HER2", short: "HER2", gene: "ERBB2",
    family: "Receptor tyrosine kinase (ErbB family)", area: "Oncology",
    location: "Epithelial cells; amplified or overexpressed in ~15–20% of breast cancers and some gastric cancers. Also needed for cardiomyocyte survival",
    role: "Has no known ligand. It is the preferred dimerisation partner of other ErbB receptors, and HER2–HER3 is the most potent signalling dimer (strong PI3K activation).",
    signalling: [
      "HER2 is always in an 'open' conformation, ready to dimerise",
      "Amplification → ligand-independent homo/heterodimers (with HER3, EGFR)",
      "HER3 brings six PI3K docking sites → PI3K–AKT survival signalling",
      "Also RAS–MAPK proliferation",
      "Extracellular domain shedding leaves a constitutively active p95HER2 fragment"
    ],
    mechanism: "Antibodies against different domains, antibody–drug conjugates that deliver chemotherapy, and TKIs.",
    drugs: [
      { name: "Trastuzumab", action: "Anti-HER2 (domain IV) antibody: blocks shedding/signalling + ADCC", use: "HER2+ breast and gastric cancer" },
      { name: "Pertuzumab", action: "Anti-HER2 (domain II) antibody: blocks dimerisation", use: "HER2+ breast cancer (with trastuzumab)" },
      { name: "Trastuzumab deruxtecan (T-DXd)", action: "Anti-HER2 antibody–drug conjugate (topoisomerase I payload)", use: "HER2+, HER2-low and HER2-ultralow breast cancer; HER2-mutant NSCLC" },
      { name: "Tucatinib", action: "HER2-selective TKI (CNS-penetrant)", use: "HER2+ metastatic breast cancer incl. brain metastases" }
    ],
    question: "Why does trastuzumab deruxtecan work in 'HER2-low' cancers where trastuzumab does nothing?",
    answer: "Trastuzumab works by disrupting HER2 signalling and triggering ADCC, which only matters if the tumour depends on amplified HER2 ('addiction'). T-DXd uses HER2 only as an address label: even modest HER2 levels internalise enough conjugate to release the cytotoxic payload. The payload is membrane-permeable, so it also kills neighbouring cells with little HER2 (the bystander effect). The ADC doesn't need the tumour to depend on HER2.",
    pearl: "Cardiotoxicity (reduced LVEF): HER2 (with neuregulin) supports cardiomyocyte survival, especially in combination with anthracyclines. T-DXd: interstitial lung disease/pneumonitis needs monitoring.",
    pathways: ["mapk", "pi3k"]
  },
  {
    id: "bcrabl", name: "BCR-ABL fusion kinase", short: "BCR-ABL", gene: "BCR::ABL1",
    family: "Non-receptor tyrosine kinase (fusion oncoprotein)", area: "Oncology",
    location: "Cytoplasm of haematopoietic cells carrying the Philadelphia chromosome t(9;22): ~95% of CML, ~25% of adult ALL",
    role: "The fusion of BCR's coiled-coil domain with ABL1 causes constitutive dimerisation and kinase activation. ABL1 is normally tightly autoinhibited, partly by a myristoyl group docking into its kinase domain.",
    signalling: [
      "BCR coiled-coil → oligomerisation → constitutive ABL kinase activity",
      "GRB2/GAB2 → SOS → RAS–MAPK (proliferation)",
      "STAT5 activation (cytokine-independent growth)",
      "PI3K–AKT (survival; ↓ apoptosis)",
      "Altered adhesion → immature cells released from bone marrow"
    ],
    mechanism: "ATP-competitive TKIs bind the kinase domain. Asciminib binds the myristoyl pocket allosterically and restores autoinhibition.",
    drugs: [
      { name: "Imatinib", action: "ATP-competitive ABL TKI (binds inactive 'DFG-out' state)", use: "CML, Ph+ ALL, GIST (KIT)" },
      { name: "Dasatinib / nilotinib", action: "2nd-generation ABL TKIs", use: "CML (incl. imatinib-resistant)" },
      { name: "Ponatinib", action: "3rd-generation TKI active against T315I", use: "T315I-mutant CML/ALL" },
      { name: "Asciminib", action: "Allosteric STAMP inhibitor (myristoyl pocket)", use: "CML (1st line and later)" }
    ],
    question: "Why was imatinib such a breakthrough, and how do tumours escape?",
    answer: "CML is driven by a single oncogenic kinase ('oncogene addiction'), so switching off BCR-ABL alone causes deep, durable remissions. CML went from fatal within ~5 years to near-normal life expectancy, the proof of concept for targeted therapy. Escape is mostly via kinase-domain point mutations that block drug binding. The T315I 'gatekeeper' mutation adds a bulky residue in the ATP pocket. Answers: 2nd-gen TKIs, ponatinib (fits around T315I), and asciminib (a different binding site, so it can be combined with ATP-site drugs).",
    pearl: "Some patients in deep molecular remission can stop TKIs (treatment-free remission). Ponatinib causes arterial occlusive events. Imatinib also hits KIT (GIST) and PDGFR.",
    pathways: ["mapk", "jakstat", "pi3k"]
  },
  {
    id: "btk", name: "Bruton's tyrosine kinase", short: "BTK", gene: "BTK",
    family: "Non-receptor tyrosine kinase (TEC family)", area: "Oncology",
    location: "B cells, myeloid cells, platelets (not T cells)",
    role: "Essential for B-cell receptor (BCR) signalling. Loss causes X-linked agammaglobulinaemia (no mature B cells).",
    signalling: [
      "Antigen (or tonic/autonomous signal) engages the BCR",
      "LYN phosphorylates CD79A/B ITAMs → SYK recruited and activated",
      "SYK + PI3K (PIP3) recruit and activate BTK",
      "BTK phosphorylates PLCγ2 → IP3/Ca²⁺ (→ NFAT) and DAG/PKCβ (→ NF-κB)",
      "→ B-cell proliferation, survival, and homing/adhesion (CXCR4/5 chemokine signalling)"
    ],
    mechanism: "Covalent inhibitors bond to Cys481 in the ATP pocket. Non-covalent inhibitors work regardless of C481 mutation. BTK degraders are in development.",
    drugs: [
      { name: "Ibrutinib", action: "Covalent BTK inhibitor (C481), 1st generation", use: "CLL, mantle cell lymphoma, Waldenström" },
      { name: "Acalabrutinib / zanubrutinib", action: "More selective covalent BTK inhibitors", use: "CLL, MCL, Waldenström" },
      { name: "Pirtobrutinib", action: "Non-covalent (reversible) BTK inhibitor", use: "CLL/MCL after covalent BTKi (incl. C481S)" }
    ],
    question: "BTK isn't mutated in CLL. Why do BTK inhibitors work so well?",
    answer: "CLL cells are addicted to chronic BCR signalling (antigen-driven or autonomous) for survival and proliferation, and to chemokine signals that keep them in protective lymph node niches. BTK is a chokepoint in that pathway. Inhibiting it cuts NF-κB survival signalling and disrupts homing, so cells leave the nodes. That causes a characteristic transient rise in blood lymphocyte count, a redistribution effect rather than progression.",
    pearl: "Ibrutinib off-target kinases (TEC, CSK, EGFR) contribute to atrial fibrillation, bleeding (platelet GPVI signalling uses BTK/TEC), rash and diarrhoea. Second-generation drugs are more selective with less AF. BTK inhibitors are in development for MS (microglia, B cells).",
    pathways: ["tcell", "nfkb", "bcell"]
  },
  {
    id: "cdk46", name: "Cyclin-dependent kinases 4/6", short: "CDK4/6", gene: "CDK4, CDK6",
    family: "Serine/threonine kinases (cell cycle)", area: "Oncology",
    location: "Nucleus of dividing cells",
    role: "Partnered with cyclin D, they phosphorylate the Rb protein in G1, committing the cell to enter S phase (the 'restriction point').",
    signalling: [
      "Mitogens (ERK) and estrogen receptor → ↑ cyclin D1 transcription",
      "Cyclin D + CDK4/6 → phosphorylate Rb (hypophosphorylated Rb binds and inhibits E2F)",
      "E2F released → transcribes cyclin E, S-phase genes",
      "Cyclin E–CDK2 hyper-phosphorylates Rb → irreversible G1→S commitment",
      "Brake: p16^INK4a inhibits CDK4/6 (often lost in cancer)"
    ],
    mechanism: "ATP-competitive selective CDK4/6 inhibitors → G1 arrest (cytostatic), combined with endocrine therapy.",
    drugs: [
      { name: "Palbociclib / ribociclib / abemaciclib", action: "CDK4/6 inhibitors", use: "HR+/HER2− breast cancer (with AI or fulvestrant); ribociclib and abemaciclib also adjuvant" }
    ],
    question: "Why are CDK4/6 inhibitors so effective in ER+ breast cancer but useless in Rb-deficient tumours?",
    answer: "ER directly drives cyclin D1 transcription, so ER+ breast cancers depend heavily on cyclin D–CDK4/6 to pass the G1 checkpoint. Combining with endocrine therapy blocks two linked steps. CDK4/6's key substrate for G1 exit is Rb: if Rb is lost (RB1 deletion), E2F is already free and the cells don't need CDK4/6, so the drug has nothing to act on. Rb loss is also a resistance mechanism.",
    pearl: "Neutropenia (palbociclib, ribociclib) is cytostatic and reversible, unlike chemotherapy neutropenia, so infections are less common. Abemaciclib (more CDK4-selective) causes diarrhoea and less neutropenia. Ribociclib prolongs QT.",
    pathways: ["mapk", "nuclear", "dna"]
  },
  {
    id: "parp", name: "Poly(ADP-ribose) polymerase 1/2", short: "PARP", gene: "PARP1, PARP2",
    family: "Enzyme (ADP-ribosyltransferase)", area: "Oncology",
    location: "Nucleus",
    role: "Detects DNA single-strand breaks, then PARylates itself and histones (using NAD⁺) to recruit base-excision and single-strand break repair proteins (XRCC1). Auto-PARylation then releases PARP from DNA.",
    signalling: [
      "Single-strand break → PARP1 binds DNA",
      "PARP1 adds poly(ADP-ribose) chains → recruits XRCC1, ligase III, polymerase β → repair",
      "PARP inhibitor blocks catalysis AND traps PARP on DNA ('PARP trapping')",
      "At replication, unrepaired breaks/trapped PARP → replication fork collapse → double-strand breaks",
      "DSBs normally fixed by homologous recombination (BRCA1, BRCA2, PALB2, RAD51)"
    ],
    mechanism: "NAD⁺-competitive inhibitors that also trap PARP–DNA complexes (talazoparib traps most strongly). Next-generation PARP1-selective inhibitors (e.g. saruparib) aim to reduce marrow toxicity.",
    drugs: [
      { name: "Olaparib", action: "PARP1/2 inhibitor", use: "BRCA-mutant ovarian, breast, prostate and pancreatic cancer" },
      { name: "Niraparib / rucaparib / talazoparib", action: "PARP inhibitors", use: "Ovarian maintenance, BRCA breast (talazoparib), prostate" }
    ],
    question: "Why do PARP inhibitors selectively kill BRCA-mutant cancer cells and spare normal cells?",
    answer: "Synthetic lethality. PARP inhibition leaves single-strand breaks unrepaired and traps PARP on DNA. At replication these turn into double-strand breaks, which need homologous recombination (HR) for error-free repair. BRCA1/2-mutant tumour cells have lost both alleles and can't do HR, so breaks accumulate (or are mis-repaired by error-prone NHEJ) and the cells die. Normal cells in a BRCA carrier keep one working BRCA allele, so HR works and they survive.",
    pearl: "Works in any HR-deficient tumour ('BRCAness': PALB2, RAD51C/D). Resistance often comes from BRCA reversion mutations that restore the reading frame. Toxicity: myelosuppression, MDS/AML risk.",
    pathways: ["dna"]
  },
  {
    id: "vegf", name: "VEGF-A / VEGFR2", short: "VEGF", gene: "VEGFA / KDR",
    family: "Growth factor / receptor tyrosine kinase", area: "Oncology",
    location: "VEGF-A secreted by hypoxic tissue (tumour, retina). VEGFR2 on endothelial cells and podocytes",
    role: "Main driver of angiogenesis and vascular permeability. Also maintains healthy capillary beds (kidney glomerulus, endocrine glands) and endothelial NO production.",
    signalling: [
      "Hypoxia stabilises HIF-1α (normally degraded via VHL) → VEGF-A transcription",
      "VEGF-A binds VEGFR2 → dimerisation → autophosphorylation",
      "PLCγ → PKC → RAF → MEK → ERK → endothelial proliferation",
      "PI3K → AKT → eNOS → NO (vasodilation, permeability) and survival",
      "Src → VE-cadherin phosphorylation → leaky junctions"
    ],
    mechanism: "Neutralise the ligand (antibodies, traps) or block VEGFR kinase (multi-target TKIs).",
    drugs: [
      { name: "Bevacizumab", action: "Anti-VEGF-A antibody", use: "Colorectal, lung, ovarian, cervical cancer, glioblastoma" },
      { name: "Aflibercept / ranibizumab / faricimab", action: "VEGF trap / anti-VEGF Fab / bispecific anti-VEGF-A + Ang-2 (intravitreal)", use: "Wet AMD, diabetic macular oedema, retinal vein occlusion" },
      { name: "Sunitinib / axitinib / lenvatinib", action: "Multi-target VEGFR TKIs", use: "Renal cell carcinoma, HCC, thyroid cancer" }
    ],
    question: "Why is anti-VEGF so effective in wet macular degeneration and renal cell carcinoma, and why does it cause hypertension and proteinuria?",
    answer: "Wet AMD: VEGF drives leaky choroidal neovessels into the retina. Blocking it rapidly reduces leakage and oedema and preserves vision. Clear-cell RCC: VHL is lost → HIF is permanently stabilised → huge VEGF production → very vascular tumours that depend on VEGF. Systemically, VEGF maintains eNOS-derived NO and capillary density, so blockade → vasoconstriction and capillary rarefaction → hypertension. In the glomerulus, podocyte VEGF maintains the endothelium, so loss causes proteinuria (thrombotic microangiopathy at the extreme). These are on-target effects.",
    pearl: "Also impaired wound healing, GI perforation, bleeding and arterial thrombosis. Tumour 'vessel normalisation' by anti-VEGF can improve delivery of chemo and immunotherapy (e.g. atezolizumab + bevacizumab in HCC).",
    pathways: ["mapk", "pi3k"]
  },
  {
    id: "er", name: "Estrogen receptor α", short: "ERα", gene: "ESR1",
    family: "Nuclear receptor (type I)", area: "Oncology",
    location: "Breast epithelium, endometrium, bone, liver, brain, vasculature. ~70% of breast cancers are ER+",
    role: "Ligand-activated transcription factor for estradiol. Drives breast and endometrial proliferation, preserves bone, regulates lipids and reproduction.",
    signalling: [
      "Estradiol binds ERα → HSP90 released → dimerisation",
      "Binds estrogen response elements (EREs), with pioneer factor FOXA1",
      "Helix 12 folds over the ligand → AF-2 co-activator surface (SRC-1/2/3, p300) forms",
      "Target genes: PGR (progesterone receptor), cyclin D1, MYC, GREB1 → proliferation",
      "ESR1 ligand-binding domain mutations (Y537S, D538G) → ligand-independent activity"
    ],
    mechanism: "SERMs (tissue-selective modulators), SERDs (antagonists that trigger degradation), or remove the ligand (aromatase inhibitors).",
    drugs: [
      { name: "Tamoxifen", action: "SERM (antagonist in breast, partial agonist in endometrium and bone)", use: "ER+ breast cancer (pre- and postmenopausal), risk reduction" },
      { name: "Fulvestrant", action: "SERD (pure antagonist + degrader), IM injection", use: "Advanced ER+ breast cancer" },
      { name: "Elacestrant / camizestrant", action: "Oral SERDs", use: "ESR1-mutant advanced ER+ breast cancer" },
      { name: "Raloxifene", action: "SERM (agonist in bone, antagonist in breast and uterus)", use: "Osteoporosis, breast cancer risk reduction" }
    ],
    question: "How can tamoxifen be an antagonist in the breast but an agonist in the uterus?",
    answer: "When tamoxifen binds ERα it displaces helix 12 so the AF-2 co-activator surface can't form, but ER still binds DNA and its N-terminal AF-1 domain stays active. What happens next depends on the cell's co-regulators. In breast tissue, co-repressors dominate, so tamoxifen-bound ER silences genes (antagonist). In the endometrium, high levels of co-activators such as SRC-1 engage AF-1 → partial agonist → endometrial hyperplasia and cancer risk. It is also an agonist in bone (preserves BMD in postmenopausal women) and liver (raises VTE risk).",
    pearl: "Tamoxifen is a prodrug (→ endoxifen via CYP2D6). ESR1 mutations arise under aromatase inhibitor pressure (no ligand needed) and are detected in ctDNA, which guides choice of oral SERD.",
    pathways: ["nuclear"]
  },
  {
    id: "aromatase", name: "Aromatase", short: "Aromatase", gene: "CYP19A1",
    family: "Enzyme (cytochrome P450)", area: "Oncology",
    location: "Ovarian granulosa cells (premenopausal), adipose tissue, breast stroma, bone, brain, placenta",
    role: "Converts androgens to estrogens (androstenedione → estrone, testosterone → estradiol). After menopause, peripheral aromatisation (mainly adipose) is the main estrogen source.",
    signalling: [
      "Adrenal/ovarian androgens → aromatase → estrogens",
      "Estrogens → ERα in breast tissue → proliferation",
      "Hypothalamic–pituitary feedback: estrogen suppresses GnRH/LH/FSH",
      "Aromatase inhibition → estrogens ↓ >90% (postmenopausal)"
    ],
    mechanism: "Non-steroidal reversible inhibitors bind the haem iron. A steroidal irreversible 'suicide' substrate is also used.",
    drugs: [
      { name: "Anastrozole / letrozole", action: "Non-steroidal reversible aromatase inhibitors", use: "Postmenopausal ER+ breast cancer; letrozole for ovulation induction" },
      { name: "Exemestane", action: "Steroidal irreversible (suicide) aromatase inactivator", use: "Postmenopausal ER+ breast cancer" }
    ],
    question: "Why are aromatase inhibitors used alone only in postmenopausal women with ER+ breast cancer?",
    answer: "In premenopausal women the ovaries make most estrogen under LH/FSH control. Partial aromatase inhibition lowers estrogen → loss of negative feedback → LH/FSH surge → strong ovarian stimulation that overcomes the block (the same reason letrozole induces ovulation). After menopause the ovary no longer responds and peripheral aromatisation dominates, which AIs suppress almost completely. Premenopausal women need ovarian suppression (GnRH agonist) plus an AI.",
    pearl: "Side effects come from estrogen deprivation: bone loss (bisphosphonate/denosumab, DEXA monitoring), arthralgia, vaginal dryness, hot flushes. No endometrial cancer or VTE risk, unlike tamoxifen.",
    pathways: ["nuclear"]
  },
  {
    id: "ar", name: "Androgen receptor", short: "AR", gene: "AR",
    family: "Nuclear receptor (type I)", area: "Oncology",
    location: "Prostate epithelium, muscle, bone, skin/hair follicles, brain",
    role: "Mediates testosterone/DHT actions: male sexual development, prostate growth, muscle mass, erythropoiesis, libido.",
    signalling: [
      "Hypothalamus pulsatile GnRH → pituitary LH → testicular Leydig cell testosterone (also adrenal androgens via CYP17A1)",
      "Testosterone → DHT (5α-reductase, more potent) in the prostate",
      "Androgen binds AR → HSP90 released → nuclear translocation → dimer on AREs",
      "Target genes: PSA (KLK3), TMPRSS2 → prostate growth and survival",
      "Castration resistance: AR amplification, AR mutations, splice variants lacking the ligand-binding domain (AR-V7), intratumoural androgen synthesis"
    ],
    mechanism: "Lower androgens (GnRH agonists/antagonists, CYP17 inhibitor) and/or block AR directly (AR pathway inhibitors).",
    drugs: [
      { name: "Leuprolide / goserelin", action: "GnRH receptor agonists (continuous → desensitisation)", use: "Androgen deprivation for prostate cancer; also breast, endometriosis" },
      { name: "Relugolix / degarelix", action: "GnRH receptor antagonists (oral/injected)", use: "Prostate cancer (no flare)" },
      { name: "Enzalutamide / apalutamide / darolutamide", action: "2nd-generation AR antagonists (block binding, nuclear entry, DNA binding)", use: "Hormone-sensitive and castration-resistant prostate cancer" },
      { name: "Abiraterone", action: "CYP17A1 inhibitor (blocks androgen synthesis incl. adrenal)", use: "Prostate cancer (with prednisone)" }
    ],
    question: "Why does a GnRH AGONIST (leuprolide) lower testosterone, and why is there an initial flare?",
    answer: "The pituitary GnRH receptor is designed for pulsatile stimulation. A continuous, long-acting agonist first stimulates it, causing an LH surge and a testosterone flare for ~1–2 weeks that can worsen bone pain or cord compression. Sustained occupancy then desensitises and downregulates the receptor, so LH and testosterone fall to castrate levels. The flare is covered with an anti-androgen, or avoided with a GnRH antagonist (degarelix, relugolix), which suppresses immediately.",
    pearl: "Abiraterone blocks cortisol synthesis too → ACTH rises → excess mineralocorticoids (hypertension, hypokalaemia), so it is given with prednisone. Finasteride (5α-reductase) is used for BPH and hair loss, not cancer treatment.",
    pathways: ["nuclear"]
  },
  {
    id: "pd1", name: "PD-1 / PD-L1", short: "PD-1", gene: "PDCD1 / CD274",
    family: "Immune checkpoint receptor (Ig superfamily)", area: "Oncology",
    location: "PD-1 on activated and exhausted T cells, B cells, NK cells. PD-L1 on tumour cells, macrophages and dendritic cells, induced by IFN-γ",
    role: "Peripheral tolerance brake. It limits T-cell activity in tissues during chronic inflammation to prevent immunopathology.",
    signalling: [
      "Tumour or myeloid cell PD-L1 binds PD-1 on a T cell",
      "PD-1 ITIM/ITSM tyrosines phosphorylated → SHP2 phosphatase recruited",
      "SHP2 dephosphorylates CD28 (its main target) and proximal TCR signalling (ZAP-70, PI3K)",
      "→ ↓ IL-2, ↓ proliferation, ↓ cytotoxicity, ↓ glycolysis → 'exhaustion'",
      "Adaptive resistance: T-cell IFN-γ upregulates tumour PD-L1"
    ],
    mechanism: "Blocking antibodies against PD-1 or PD-L1 release the brake on pre-existing tumour-reactive T cells.",
    drugs: [
      { name: "Pembrolizumab / nivolumab / cemiplimab", action: "Anti-PD-1 antibodies", use: "Melanoma, NSCLC, MSI-high/dMMR tumours, renal, bladder, head & neck, many more" },
      { name: "Atezolizumab / durvalumab", action: "Anti-PD-L1 antibodies", use: "NSCLC, small cell lung cancer, HCC, bladder" }
    ],
    question: "Why do PD-1 inhibitors work best in tumours with high mutational burden or mismatch-repair deficiency (MSI-high)?",
    answer: "Checkpoint inhibitors don't kill tumour cells. They reinvigorate T cells that already recognise the tumour. More mutations → more neoantigens (mutant peptides on MHC that look 'foreign') → more pre-existing tumour-specific T cells, many held back by PD-1. Mismatch-repair-deficient tumours have thousands of mutations, so pembrolizumab has a tumour-agnostic approval for MSI-H/dMMR cancers. 'Cold' tumours with few neoantigens or no T-cell infiltrate respond poorly.",
    pearl: "Immune-related adverse events (colitis, hepatitis, pneumonitis, thyroiditis, hypophysitis, type 1 diabetes, myocarditis) come from releasing self-tolerance. They are treated with steroids, and infliximab for colitis.",
    pathways: ["tcell"]
  },
  {
    id: "ctla4", name: "CTLA-4", short: "CTLA-4", gene: "CTLA4",
    family: "Immune checkpoint receptor (Ig superfamily)", area: "Oncology",
    location: "Upregulated on activated T cells; constitutively high on regulatory T cells (Tregs)",
    role: "Raises the activation threshold during T-cell priming in lymph nodes. Essential for tolerance: CTLA-4 knockout mice die of lymphoproliferation.",
    signalling: [
      "CD28 (stimulatory) and CTLA-4 (inhibitory) compete for B7 ligands (CD80/CD86) on APCs",
      "CTLA-4 binds B7 with much higher affinity than CD28",
      "CTLA-4 physically removes B7 from APCs (trans-endocytosis), a key Treg mechanism",
      "Less CD28 co-stimulation → less PI3K–AKT and IL-2 → reduced priming"
    ],
    mechanism: "Blocking antibodies release the brake (cancer). The opposite strategy, a soluble CTLA-4–Fc fusion, blocks co-stimulation (autoimmunity).",
    drugs: [
      { name: "Ipilimumab", action: "Anti-CTLA-4 blocking antibody", use: "Melanoma, renal cell carcinoma, MSI-H CRC (with nivolumab)" },
      { name: "Tremelimumab", action: "Anti-CTLA-4 antibody", use: "HCC (with durvalumab, 'STRIDE')" },
      { name: "Abatacept", action: "CTLA-4–Ig fusion (binds B7, blocks CD28 co-stimulation)", use: "Rheumatoid arthritis, juvenile idiopathic arthritis, GVHD prophylaxis" }
    ],
    question: "Ipilimumab blocks CTLA-4 to treat cancer, yet abatacept IS CTLA-4 and treats arthritis. How?",
    answer: "Same pathway, opposite direction. Ipilimumab binds CTLA-4 on T cells and stops it hogging B7, so more CD28 co-stimulation → stronger T-cell priming against the tumour (plus Fc-mediated depletion of intratumoural Tregs). Abatacept is the CTLA-4 extracellular domain fused to Fc. It coats B7 on APCs so CD28 can't engage → T cells get signal 1 without signal 2 → reduced activation and anergy → less autoimmune inflammation.",
    pearl: "Anti-CTLA-4 causes more frequent and severe immune-related adverse events than anti-PD-1 (colitis, hypophysitis). It acts at priming, so it broadens the whole T-cell repertoire. Ipilimumab + nivolumab is more effective but more toxic.",
    pathways: ["tcell"]
  },
  {
    id: "cd20", name: "CD20", short: "CD20", gene: "MS4A1",
    family: "Cell-surface antigen (tetraspanin-like)", area: "Oncology",
    location: "B cells from pre-B to memory stage. Absent from stem cells, pro-B cells and plasma cells",
    role: "Function poorly understood (may regulate calcium flux and BCR signalling). Useful as a B-cell 'label' because it isn't shed or rapidly internalised.",
    signalling: [
      "Not a signalling target. The drugs use CD20 as an address for killing",
      "ADCC: Fc binds FcγRIIIa on NK cells and macrophages → killing",
      "CDC: Fc activates complement (C1q) → membrane attack complex",
      "ADCP: macrophage phagocytosis",
      "Bispecifics: CD20 × CD3 → link T cell to B cell → T-cell-mediated lysis"
    ],
    mechanism: "Depleting antibodies (type I: strong CDC, e.g. rituximab; type II: more direct killing and ADCC, e.g. obinutuzumab), and T-cell engagers.",
    drugs: [
      { name: "Rituximab", action: "Chimeric anti-CD20 depleting antibody", use: "B-cell lymphomas, CLL, RA, ANCA vasculitis, pemphigus" },
      { name: "Obinutuzumab", action: "Glyco-engineered type II anti-CD20 (↑ ADCC)", use: "CLL, follicular lymphoma, lupus nephritis" },
      { name: "Ocrelizumab / ofatumumab", action: "Humanised / fully human anti-CD20", use: "Multiple sclerosis (relapsing and primary progressive)" },
      { name: "Glofitamab / mosunetuzumab / epcoritamab", action: "CD20 × CD3 bispecific T-cell engagers", use: "Relapsed DLBCL, follicular lymphoma" }
    ],
    question: "Why does rituximab wipe out B cells, yet antibody levels and pre-existing vaccine immunity largely persist?",
    answer: "Long-lived plasma cells, which make most circulating antibody, are CD20-negative, so they survive and keep secreting IgG. Haematopoietic stem cells and early B precursors are also CD20-negative, so B cells regenerate ~6–12 months after the last dose. The cost is that new immune responses (new vaccines, new infections) are badly blunted while B cells are absent. Long-term use can gradually lower IgG.",
    pearl: "Efficacy in MS and RA showed B cells drive disease partly via antigen presentation and cytokines, not just antibodies. HBV reactivation (screen first), infusion reactions, PML (rare). Bispecifics cause cytokine release syndrome.",
    pathways: ["bcell"]
  },
  {
    id: "proteasome", name: "26S proteasome", short: "Proteasome", gene: "PSMB5 (β5 subunit) and others",
    family: "Multi-subunit protease complex", area: "Oncology",
    location: "Cytoplasm and nucleus of all cells",
    role: "Degrades ubiquitin-tagged proteins (misfolded proteins, cell-cycle regulators, IκB, p53). The 20S core has chymotrypsin-like (β5), trypsin-like (β2) and caspase-like (β1) active sites.",
    signalling: [
      "E1 → E2 → E3 ligases attach polyubiquitin (K48 chains) to target proteins",
      "19S cap recognises, unfolds and threads the substrate into the 20S core",
      "Proteolysis into short peptides (some go on to MHC class I presentation)",
      "Inhibition → misfolded protein accumulation → unfolded protein response / ER stress → apoptosis",
      "Inhibition also stabilises IκB → ↓ NF-κB, and stabilises pro-apoptotic proteins (NOXA, BIM)"
    ],
    mechanism: "Inhibitors of the β5 chymotrypsin-like site: reversible (boronates) or irreversible (epoxyketone).",
    drugs: [
      { name: "Bortezomib", action: "Reversible proteasome inhibitor (boronic acid)", use: "Multiple myeloma, mantle cell lymphoma" },
      { name: "Carfilzomib", action: "Irreversible proteasome inhibitor (epoxyketone)", use: "Relapsed multiple myeloma" },
      { name: "Ixazomib", action: "Oral reversible proteasome inhibitor", use: "Multiple myeloma" }
    ],
    question: "Why are myeloma cells especially vulnerable to proteasome inhibitors?",
    answer: "Myeloma cells are malignant plasma cells that make enormous amounts of immunoglobulin, so a constant fraction misfolds. They run close to the limit of their protein-disposal capacity and depend heavily on the proteasome and the UPR. Blocking the proteasome tips them into terminal ER stress and apoptosis well before normal cells. Reduced NF-κB survival signalling (IκB is stabilised) adds to the effect.",
    pearl: "Bortezomib causes peripheral neuropathy (less when given subcutaneously); carfilzomib causes less neuropathy but more cardiac toxicity. Shingles prophylaxis (acyclovir) is standard. Modern myeloma regimens add IMiDs (lenalidomide → cereblon-mediated degradation of IKZF1/3) and anti-CD38 (daratumumab).",
    pathways: ["nfkb", "apoptosis"]
  },

  // ───────────── Neuro & psychiatry ─────────────
  {
    id: "gabaa", name: "GABA-A receptor", short: "GABA-A", gene: "GABRA1–6, GABRB, GABRG2, etc.",
    family: "Ligand-gated ion channel (Cl⁻, Cys-loop pentamer)", area: "Neuro & psychiatry",
    location: "Throughout the CNS: synaptic (α1–3 + γ2) and extrasynaptic (α4/6 + δ, neurosteroid-sensitive) receptors",
    role: "Mediates fast inhibitory neurotransmission: GABA opens a Cl⁻ channel that hyperpolarises or shunts the neuron.",
    signalling: [
      "GABA binds at the β/α subunit interfaces",
      "Cl⁻ channel opens → Cl⁻ influx → hyperpolarisation and shunting inhibition",
      "Benzodiazepines bind the α/γ2 interface → ↑ GABA affinity → ↑ opening FREQUENCY",
      "Barbiturates → ↑ opening DURATION; at high doses directly open the channel",
      "Neurosteroids (allopregnanolone) → PAM, especially at extrasynaptic δ receptors (tonic inhibition)",
      "Subunit roles: α1 sedation and amnesia; α2/α3 anxiolysis and muscle relaxation; α5 memory"
    ],
    mechanism: "Positive allosteric modulators at distinct binding sites. Flumazenil is a benzodiazepine-site antagonist.",
    drugs: [
      { name: "Diazepam / lorazepam / midazolam", action: "Benzodiazepines (GABA-A PAMs at the α/γ2 site)", use: "Anxiety, status epilepticus, sedation, alcohol withdrawal" },
      { name: "Zolpidem", action: "α1-preferring BZD-site PAM ('Z-drug')", use: "Insomnia" },
      { name: "Propofol", action: "GABA-A PAM / direct agonist (β subunit)", use: "General anaesthesia, ICU sedation" },
      { name: "Zuranolone / brexanolone", action: "Neurosteroid GABA-A PAMs", use: "Postpartum depression" },
      { name: "Flumazenil", action: "Benzodiazepine-site antagonist", use: "Reversal of benzodiazepine sedation" }
    ],
    question: "Why are benzodiazepines relatively safe in overdose compared with barbiturates (until alcohol is added)?",
    answer: "Benzodiazepines are PAMs. They only enhance the effect of GABA already present, so inhibition has a ceiling set by endogenous GABA release. Barbiturates (and alcohol, at a separate site) can directly open the channel at high concentrations, independent of GABA, so there's no ceiling: profound CNS and respiratory depression. Combining a BZD with alcohol, opioids or barbiturates removes the safety margin.",
    pearl: "Tolerance and dependence develop through receptor subunit changes, so stopping abruptly can cause withdrawal seizures. Paradoxical agitation can occur in the elderly. GABA is excitatory in immature neurons (high intracellular Cl⁻ via NKCC1).",
    pathways: ["synapse"]
  },
  {
    id: "nav", name: "Voltage-gated sodium channels", short: "Nav", gene: "SCN1A–SCN11A (Nav1.1–1.9)",
    family: "Voltage-gated ion channel", area: "Neuro & psychiatry",
    location: "Neurons (Nav1.1, 1.2, 1.6 central; Nav1.7, 1.8, 1.9 peripheral nociceptors), cardiac muscle (Nav1.5), skeletal muscle (Nav1.4)",
    role: "Generate the rapid upstroke of the action potential in excitable cells.",
    signalling: [
      "Membrane depolarisation → voltage sensors (S4) move → activation gate opens",
      "Na⁺ rushes in → rapid depolarisation (action potential upstroke)",
      "Within ~1 ms the inactivation gate (IFM motif) closes the pore",
      "Repolarisation → channel recovers from inactivation → ready to fire again",
      "Three states: resting, open, inactivated. Most blockers prefer open/inactivated states"
    ],
    mechanism: "Pore blockers with state-dependence (local anaesthetics, antiepileptics, class I antiarrhythmics) and subtype-selective blockers (Nav1.8).",
    drugs: [
      { name: "Lidocaine / bupivacaine", action: "Use-dependent Nav pore blockers (local anaesthetics)", use: "Local/regional anaesthesia; lidocaine also ventricular arrhythmia" },
      { name: "Carbamazepine / lamotrigine / phenytoin", action: "Stabilise the inactivated state of Nav", use: "Focal epilepsy, trigeminal neuralgia (carbamazepine), bipolar (lamotrigine)" },
      { name: "Flecainide", action: "Class Ic antiarrhythmic (Nav1.5 blocker)", use: "AF/SVT in structurally normal hearts" },
      { name: "Suzetrigine", action: "Selective Nav1.8 inhibitor (peripheral nociceptors)", use: "Moderate-to-severe acute pain (non-opioid)" }
    ],
    question: "Why do Nav blockers preferentially silence rapidly firing neurons (use-dependence)?",
    answer: "These drugs bind with much higher affinity to the open and inactivated states than to the resting state, and they slow recovery from inactivation. A neuron firing at high frequency (an epileptic focus, an injured nociceptor) spends most of its time in those states, so block accumulates with each spike. Normally active neurons spend most time at rest and are spared. This explains a useful therapeutic window.",
    pearl: "Nav1.7 loss-of-function = congenital insensitivity to pain (genetic validation, but Nav1.7 drugs failed; suzetrigine succeeded at Nav1.8). SCN1A loss-of-function (Dravet syndrome) is worsened by Nav blockers because it reduces inhibitory interneuron firing. HLA-B*15:02 → carbamazepine SJS/TEN risk (screen in Asian ancestry).",
    pathways: ["synapse", "ecc"]
  },
  {
    id: "sert", name: "Serotonin transporter", short: "SERT", gene: "SLC6A4",
    family: "Transporter (SLC6, Na⁺/Cl⁻-coupled)", area: "Neuro & psychiatry",
    location: "Presynaptic membrane of serotonergic neurons (raphe projections), platelets, gut enterochromaffin and enteric cells",
    role: "Reuptakes serotonin from the synaptic cleft, terminating its signal and recycling it.",
    signalling: [
      "Serotonin released from raphe neuron terminals",
      "Acts on postsynaptic 5-HT receptors (1A, 2A, 2C, 3, 4, 7…)",
      "SERT co-transports 5-HT with Na⁺ and Cl⁻ back into the neuron",
      "Somatodendritic 5-HT1A autoreceptors (Gi) on raphe neurons reduce firing when 5-HT rises",
      "SSRI → ↑ extracellular 5-HT"
    ],
    mechanism: "Selective reuptake inhibitors bind the central substrate site and lock SERT outward-open. Amphetamine-like drugs (MDMA) are substrates that reverse transport.",
    drugs: [
      { name: "Sertraline / escitalopram / fluoxetine", action: "Selective serotonin reuptake inhibitors (SSRIs)", use: "Depression, anxiety disorders, OCD, PTSD" },
      { name: "Venlafaxine / duloxetine", action: "SNRIs (SERT + NET)", use: "Depression, GAD, neuropathic pain (duloxetine)" },
      { name: "Vortioxetine", action: "SERT inhibitor + multiple 5-HT receptor modulation", use: "Depression" }
    ],
    question: "SSRIs block reuptake within hours. Why does the antidepressant effect take 2–6 weeks?",
    answer: "Acutely, extra serotonin around raphe cell bodies activates inhibitory 5-HT1A autoreceptors, reducing neuron firing and partly cancelling the gain at terminals. Over weeks these autoreceptors desensitise, so firing recovers and net serotonergic transmission rises. Slow downstream adaptations (BDNF, synaptic plasticity, hippocampal neurogenesis) are thought to underlie mood improvement. Side effects (nausea via 5-HT3, anxiety) appear early, before benefit.",
    pearl: "Platelets can't make serotonin, they take it up via SERT, so SSRIs deplete platelet 5-HT and raise bleeding risk (especially with NSAIDs). Serotonin syndrome with MAOIs, tramadol or linezolid. Discontinuation syndrome is worst with short half-life drugs (paroxetine).",
    pathways: ["synapse"]
  },
  {
    id: "drd2", name: "Dopamine D2 receptor", short: "D2", gene: "DRD2",
    family: "GPCR (Gi/o)", area: "Neuro & psychiatry",
    location: "Striatum (nigrostriatal), nucleus accumbens (mesolimbic), pituitary lactotrophs (tuberoinfundibular), chemoreceptor trigger zone; also presynaptic autoreceptors",
    role: "Mediates dopamine's effects on motor control, motivation and reward, prolactin inhibition and nausea.",
    signalling: [
      "Dopamine binds D2 → Gi/o",
      "↓ cAMP/PKA; Gβγ → GIRK activation, ↓ Ca²⁺ channels",
      "β-arrestin-2 → AKT/GSK3 pathway (implicated in antipsychotic and lithium action)",
      "Pathways: mesolimbic (positive psychotic symptoms), mesocortical (negative/cognitive), nigrostriatal (movement), tuberoinfundibular (prolactin)",
      "Pituitary: D2 → tonic suppression of prolactin secretion"
    ],
    mechanism: "Antagonists and partial agonists treat psychosis and nausea. Agonists treat Parkinson's disease and hyperprolactinaemia.",
    drugs: [
      { name: "Haloperidol / risperidone", action: "D2 antagonists (typical / atypical antipsychotics)", use: "Schizophrenia, mania, delirium" },
      { name: "Aripiprazole", action: "D2 partial agonist", use: "Schizophrenia, bipolar, adjunct in depression" },
      { name: "Pramipexole / ropinirole", action: "D2/D3 agonists", use: "Parkinson's disease, restless legs" },
      { name: "Cabergoline / bromocriptine", action: "D2 agonists", use: "Prolactinoma, hyperprolactinaemia" },
      { name: "Metoclopramide / domperidone", action: "D2 antagonists (domperidone peripheral only)", use: "Nausea, gastroparesis" }
    ],
    question: "Why do antipsychotics cause parkinsonism and raised prolactin?",
    answer: "D2 blockade isn't pathway-selective. The therapeutic effect is in the mesolimbic pathway, but the drug also blocks D2 in the nigrostriatal pathway (→ extrapyramidal effects: parkinsonism, dystonia, akathisia, tardive dyskinesia) and the tuberoinfundibular pathway. There, dopamine normally inhibits prolactin release tonically, so blockade → hyperprolactinaemia (galactorrhoea, amenorrhoea, sexual dysfunction). Antipsychotic efficacy needs ~65–80% striatal D2 occupancy; EPS rise above ~80%.",
    pearl: "Domperidone doesn't cross the BBB (except at the CTZ, outside the BBB), so it's the antiemetic of choice in Parkinson's. Never give haloperidol or metoclopramide in Parkinson's or Lewy body dementia. Dopamine agonists can cause impulse-control disorders (gambling).",
    pathways: ["gi", "synapse"]
  },
  {
    id: "htr2a", name: "Serotonin 5-HT2A receptor", short: "5-HT2A", gene: "HTR2A",
    family: "GPCR (Gq)", area: "Neuro & psychiatry",
    location: "Cortical layer V pyramidal neurons (high in prefrontal cortex), also platelets and smooth muscle",
    role: "Modulates cortical excitability, perception, sensory integration, mood, and dopamine release. Also promotes platelet aggregation and vasoconstriction.",
    signalling: [
      "5-HT binds 5-HT2A → Gq → PLCβ → IP3/Ca²⁺ and DAG/PKC",
      "Increased excitability and glutamate release in cortical pyramidal neurons",
      "Also β-arrestin-2 signalling (biased agonism concepts)",
      "Psychedelic agonists → altered cortical network dynamics; may promote neuroplasticity",
      "5-HT2A on nigrostriatal circuits tonically reduces striatal dopamine release"
    ],
    mechanism: "Antagonists and inverse agonists (antipsychotics) or agonists (psychedelics, investigational).",
    drugs: [
      { name: "Risperidone / olanzapine / quetiapine", action: "5-HT2A + D2 antagonists (atypical antipsychotics)", use: "Schizophrenia, bipolar" },
      { name: "Pimavanserin", action: "Selective 5-HT2A inverse agonist (no D2 activity)", use: "Parkinson's disease psychosis" },
      { name: "Psilocybin (→ psilocin)", action: "5-HT2A agonist (psychedelic)", use: "Investigational: treatment-resistant depression" }
    ],
    question: "Why might 5-HT2A antagonism give atypical antipsychotics fewer motor side effects?",
    answer: "Serotonin acting at 5-HT2A receptors reduces dopamine release in the nigrostriatal pathway. Blocking 5-HT2A disinhibits striatal dopamine release, so more endogenous dopamine competes with the drug at D2 in the motor striatum. That partly offsets D2 blockade there and lowers EPS at therapeutic doses. In the mesolimbic pathway the D2 antagonism still dominates. (This is a classic hypothesis; looser D2 binding, i.e. fast dissociation, also contributes.)",
    pearl: "Pimavanserin treats Parkinson's psychosis without worsening motor symptoms, which is direct evidence that 5-HT2A alone can drive psychosis. The 5-HT2B agonism of some drugs (fenfluramine, pergolide) caused cardiac valvulopathy, a cautionary example of subtype selectivity.",
    pathways: ["gq", "synapse"]
  },
  {
    id: "ache", name: "Acetylcholinesterase", short: "AChE", gene: "ACHE",
    family: "Enzyme (serine hydrolase)", area: "Neuro & psychiatry",
    location: "Neuromuscular junction, cholinergic synapses (CNS and autonomic), red blood cells",
    role: "Hydrolyses acetylcholine into choline + acetate within milliseconds, ending cholinergic signalling. It is one of the fastest enzymes known.",
    signalling: [
      "Nerve terminal releases ACh",
      "ACh activates nicotinic receptors (NMJ: muscle contraction; ganglia) and muscarinic receptors (M1–M5 GPCRs)",
      "AChE in the synaptic cleft hydrolyses ACh → termination",
      "Inhibition → ACh accumulates → prolonged/enhanced cholinergic signalling",
      "Excess at the NMJ → depolarising block (paralysis), as in organophosphate poisoning"
    ],
    mechanism: "Reversible (donepezil), pseudo-irreversible carbamates (neostigmine, rivastigmine) and irreversible organophosphates.",
    drugs: [
      { name: "Donepezil / rivastigmine / galantamine", action: "Centrally acting AChE inhibitors", use: "Alzheimer's disease (symptomatic), Lewy body / Parkinson's dementia" },
      { name: "Pyridostigmine", action: "Peripheral AChE inhibitor (doesn't cross BBB)", use: "Myasthenia gravis" },
      { name: "Neostigmine", action: "Peripheral AChE inhibitor", use: "Reversal of non-depolarising neuromuscular blockade" }
    ],
    question: "Why do AChE inhibitors improve muscle strength in myasthenia gravis?",
    answer: "In myasthenia, autoantibodies against nicotinic ACh receptors (or MuSK) reduce the number of functional receptors at the NMJ, so the endplate potential often fails to reach threshold, especially with repeated firing (fatigable weakness). Blocking AChE keeps each ACh molecule in the cleft longer and lets it bind repeatedly, raising the chance of activating the remaining receptors → endplate potential back above threshold. It's symptomatic, not disease-modifying.",
    pearl: "Muscarinic side effects (bradycardia, salivation, diarrhoea) are why glycopyrrolate is co-given with neostigmine. Organophosphate poisoning → atropine (muscarinic) + pralidoxime (reactivates AChE before 'ageing'). Newer MG drugs: FcRn blockers (efgartigimod), complement C5 inhibitors (eculizumab).",
    pathways: ["synapse"]
  },
  {
    id: "cgrp", name: "CGRP / CGRP receptor", short: "CGRP", gene: "CALCA (ligand); CALCRL + RAMP1 (receptor)",
    family: "Neuropeptide / GPCR (class B, Gs)", area: "Neuro & psychiatry",
    location: "CGRP made by trigeminal sensory neurons. Receptor on meningeal blood vessels, trigeminal ganglion neurons and satellite glia, mast cells",
    role: "The most potent vasodilator peptide known, and a key nociceptive messenger in the trigeminovascular system.",
    signalling: [
      "Trigeminal afferent activation → CGRP released at meningeal terminals and in the trigeminal ganglion",
      "CGRP binds CLR/RAMP1 → Gαs → cAMP → PKA",
      "Meningeal arterial vasodilation; mast cell degranulation (neurogenic inflammation)",
      "Peripheral and central sensitisation of trigeminal nociceptors → throbbing pain, allodynia",
      "Triptans (5-HT1B/1D, Gi) inhibit CGRP release from trigeminal terminals"
    ],
    mechanism: "Antibodies against the ligand or receptor (prevention), and small-molecule receptor antagonists ('gepants', acute and preventive).",
    drugs: [
      { name: "Erenumab", action: "Anti-CGRP receptor antibody", use: "Migraine prevention (monthly)" },
      { name: "Fremanezumab / galcanezumab / eptinezumab", action: "Anti-CGRP ligand antibodies", use: "Migraine prevention; galcanezumab also cluster headache" },
      { name: "Rimegepant / ubrogepant / atogepant", action: "Small-molecule CGRP receptor antagonists (gepants)", use: "Acute migraine (rimegepant, ubrogepant); prevention (rimegepant, atogepant)" },
      { name: "Sumatriptan", action: "5-HT1B/1D agonist (reduces CGRP release, vasoconstricts)", use: "Acute migraine and cluster headache" }
    ],
    question: "Why does blocking CGRP treat migraine, and how do the antibodies work if they barely cross the blood–brain barrier?",
    answer: "CGRP levels rise in jugular blood during attacks, triptans normalise them, and IV CGRP triggers migraine-like attacks in migraineurs (but not controls). This makes CGRP a causal mediator of trigeminovascular pain and sensitisation. The antibodies work peripherally, at the meninges and especially the trigeminal ganglion, which lies outside the blood–brain barrier. Unlike triptans, CGRP blockers don't vasoconstrict, so they're usable in people with cardiovascular disease.",
    pearl: "Side effects include constipation (CGRP in gut motility), injection-site reactions and hypertension (erenumab). Medication-overuse headache isn't seen with gepants.",
    pathways: ["gs"]
  },

  // ───────────── More cardiovascular / renal / GI / haematology ─────────────
  {
    id: "cav12", name: "L-type calcium channel (Cav1.2)", short: "Cav1.2", gene: "CACNA1C",
    family: "Voltage-gated ion channel", area: "Cardiovascular & renal",
    location: "Vascular smooth muscle, cardiomyocytes, SA and AV nodes, GI smooth muscle",
    role: "Admits Ca²⁺ during depolarisation: the plateau of the cardiac action potential, nodal upstroke, and smooth muscle tone.",
    signalling: [
      "Depolarisation → Cav1.2 opens → Ca²⁺ influx",
      "Heart: triggers Ca²⁺-induced Ca²⁺ release (RyR2) → contraction; sustains plateau (phase 2)",
      "SA/AV nodes: Ca²⁺ current is the upstroke → conduction velocity",
      "Vascular smooth muscle: Ca²⁺–calmodulin → MLCK → contraction (tone)",
      "β1/PKA phosphorylation increases channel opening"
    ],
    mechanism: "Dihydropyridines (DHPs) prefer depolarised vascular smooth muscle (inactivated state). Non-DHPs (verapamil, diltiazem) are use-dependent and act more on the heart.",
    drugs: [
      { name: "Amlodipine / nifedipine", action: "Dihydropyridine Cav1.2 blockers (vascular-selective)", use: "Hypertension, angina, Raynaud's" },
      { name: "Verapamil / diltiazem", action: "Non-dihydropyridine Cav1.2 blockers (cardiac + vascular)", use: "AF/SVT rate control, angina, hypertension" }
    ],
    question: "Why does amlodipine cause ankle oedema, while verapamil causes bradycardia and constipation?",
    answer: "DHPs bind preferentially to inactivated channels in the relatively depolarised vascular smooth muscle and dilate arterioles (pre-capillary) but not veins. Capillary hydrostatic pressure rises → fluid leaks → oedema (diuretics don't help; ACEi/ARBs, which venodilate, do). Verapamil binds from inside the pore in a use-dependent way, so it acts strongly on frequently firing nodal tissue (↓ SA rate, ↓ AV conduction → bradycardia, heart block) and also relaxes gut smooth muscle → constipation.",
    pearl: "Never combine verapamil with a β-blocker IV (risk of asystole). Avoid non-DHPs in HFrEF (negative inotropy). Short-acting nifedipine → reflex tachycardia and was linked to MI, so long-acting formulations are used.",
    pathways: ["ecc"]
  },
  {
    id: "nkcc2", name: "Na⁺-K⁺-2Cl⁻ cotransporter 2", short: "NKCC2", gene: "SLC12A1",
    family: "Transporter (SLC12)", area: "Cardiovascular & renal",
    location: "Apical membrane of the thick ascending limb (TAL) of the loop of Henle; macula densa",
    role: "Reabsorbs ~25% of filtered Na⁺. Builds the medullary concentration gradient and drives paracellular Ca²⁺/Mg²⁺ reabsorption.",
    signalling: [
      "NKCC2 moves 1 Na⁺ + 1 K⁺ + 2 Cl⁻ from lumen into the TAL cell",
      "K⁺ recycles back into the lumen via ROMK → lumen-positive voltage",
      "Lumen-positive voltage drives paracellular Ca²⁺ and Mg²⁺ reabsorption",
      "NaCl into a water-impermeable segment → hypertonic medulla (concentrating urine)",
      "Macula densa NKCC2 senses NaCl → tubuloglomerular feedback and renin release"
    ],
    mechanism: "Loop diuretics bind the Cl⁻ site from the lumen. They need to be secreted into the tubule by OAT transporters in the proximal tubule.",
    drugs: [
      { name: "Furosemide / bumetanide / torasemide", action: "NKCC2 inhibitors (loop diuretics)", use: "Oedema in heart failure, cirrhosis, nephrotic syndrome; hypercalcaemia (with fluids)" }
    ],
    question: "Why do loop diuretics cause hypokalaemia, hypomagnesaemia and HYPERcalciuria (while thiazides cause hypocalciuria)?",
    answer: "Blocking NKCC2 stops K⁺ recycling via ROMK, so the lumen-positive potential collapses → paracellular Ca²⁺ and Mg²⁺ reabsorption fails → urinary Ca²⁺ and Mg²⁺ loss. Hypokalaemia: more Na⁺ is delivered to the collecting duct, flow is higher and aldosterone rises (volume contraction), so ENaC Na⁺ reabsorption drives K⁺ secretion through ROMK/BK. Thiazides (NCC in the distal tubule) cause hypocalciuria via increased distal Ca²⁺ reabsorption, which is why they're used for calcium stones.",
    pearl: "Ototoxicity (NKCC1 in the inner ear stria vascularis, especially with high-dose IV or aminoglycosides). Bartter syndrome = genetic NKCC2/ROMK loss, mimicking chronic furosemide. 'Diuretic resistance' in HF: distal tubule hypertrophy → add a thiazide (sequential nephron blockade).",
    pathways: ["raas"]
  },
  {
    id: "ppi", name: "Gastric H⁺/K⁺-ATPase (proton pump)", short: "H⁺/K⁺-ATPase", gene: "ATP4A / ATP4B",
    family: "P-type ATPase (ion pump)", area: "GI & hepatology",
    location: "Canalicular membrane of gastric parietal cells (moved there from tubulovesicles on stimulation)",
    role: "Final step of acid secretion: pumps H⁺ into the gastric lumen in exchange for K⁺, using ATP.",
    signalling: [
      "Three stimuli: histamine (H2 → Gs → cAMP), gastrin (CCK2 → Gq → Ca²⁺), ACh (M3 → Gq → Ca²⁺)",
      "Gastrin also stimulates ECL cells to release histamine (the main amplifier)",
      "PKA and Ca²⁺ signals → tubulovesicles fuse with the canalicular membrane → pumps inserted",
      "H⁺/K⁺-ATPase pumps H⁺ out (pH ~1 in the canaliculus)"
    ],
    mechanism: "PPIs are prodrugs: protonated and trapped in the acidic canaliculus → converted to a sulfenamide → covalent disulfide bond with pump cysteines (irreversible). P-CABs bind reversibly and compete with K⁺.",
    drugs: [
      { name: "Omeprazole / lansoprazole / pantoprazole", action: "Proton pump inhibitors (irreversible, prodrugs)", use: "GORD, peptic ulcer, H. pylori eradication, NSAID gastroprotection, Zollinger–Ellison" },
      { name: "Vonoprazan", action: "Potassium-competitive acid blocker (reversible, acid-stable)", use: "Erosive oesophagitis, H. pylori eradication" }
    ],
    question: "Why are PPIs more effective than H2 blockers, and why should they be taken before meals?",
    answer: "PPIs block the final common pathway, so they suppress acid whatever the stimulus (histamine, gastrin or ACh). H2 blockers block only one input and show tolerance. PPIs need activating in acid and only bind pumps that are actively secreting (inserted in the canalicular membrane). Taking them 30–60 minutes before a meal means peak drug levels coincide with meal-stimulated pump activation. Because binding is irreversible, effect lasts until new pumps are made (~24–48 h), despite a plasma half-life of ~1 h.",
    pearl: "Long-term risks (associations): hypomagnesaemia, B12 deficiency, C. difficile, fractures. Rebound acid hypersecretion on stopping (hypergastrinaemia → ECL hyperplasia). Omeprazole inhibits CYP2C19, which may reduce clopidogrel activation.",
    pathways: ["gs", "gq"]
  },
  {
    id: "pde5", name: "Phosphodiesterase type 5", short: "PDE5", gene: "PDE5A",
    family: "Enzyme (phosphodiesterase)", area: "Cardiovascular & renal",
    location: "Corpus cavernosum smooth muscle, pulmonary vascular smooth muscle, platelets, bladder/prostate",
    role: "Hydrolyses cGMP to GMP, terminating NO–cGMP signalling.",
    signalling: [
      "Sexual stimulation → nitrergic nerves and endothelium release NO",
      "NO activates soluble guanylyl cyclase (sGC) → GTP → cGMP",
      "cGMP → PKG → ↓ intracellular Ca²⁺, ↑ MLCP activity → smooth muscle relaxation",
      "Cavernosal arterial inflow ↑ → erection; same pathway relaxes pulmonary arteries",
      "PDE5 breaks down cGMP → detumescence"
    ],
    mechanism: "Competitive cGMP-site inhibitors amplify NO signalling when it is present. They don't generate it.",
    drugs: [
      { name: "Sildenafil", action: "PDE5 inhibitor (t½ ~4 h; some PDE6)", use: "Erectile dysfunction, pulmonary arterial hypertension" },
      { name: "Tadalafil", action: "PDE5 inhibitor (t½ ~17.5 h)", use: "ED, PAH, BPH (daily low dose)" }
    ],
    question: "Why are PDE5 inhibitors contraindicated with nitrates, and why do they need sexual stimulation to work?",
    answer: "PDE5 inhibitors only slow cGMP breakdown. Without NO production (no sexual stimulation) there's little cGMP to preserve, so no erection. Nitrates are NO donors that massively increase cGMP production systemically. Combining 'more production' with 'less breakdown' causes synergistic, profound systemic vasodilation and life-threatening hypotension. Avoid nitrates within 24 h of sildenafil or 48 h of tadalafil.",
    pearl: "Sildenafil inhibits PDE6 in retinal photoreceptors (blue-tinged vision). Tadalafil inhibits PDE11 (myalgia, back pain). Riociguat (sGC stimulator) is also contraindicated with PDE5i.",
    pathways: ["ecc"]
  },
  {
    id: "fxa", name: "Factor Xa", short: "FXa", gene: "F10",
    family: "Enzyme (serine protease)", area: "Haematology & thrombosis",
    location: "Plasma (zymogen FX made in the liver, vitamin K-dependent). Active on phospholipid surfaces of activated platelets",
    role: "Converges the extrinsic (TF–FVIIa) and intrinsic (FIXa–FVIIIa) routes. With FVa it forms prothrombinase, which converts prothrombin to thrombin.",
    signalling: [
      "TF–FVIIa (initiation) and FIXa–FVIIIa tenase (propagation) both activate FX → FXa",
      "FXa + FVa + Ca²⁺ on platelet phospholipid = prothrombinase",
      "Prothrombinase converts prothrombin → thrombin (one FXa → ~1000 thrombin)",
      "Thrombin → fibrin, platelet activation, and feedback activation of FV, FVIII, FXI",
      "Natural inhibitors: antithrombin, TFPI"
    ],
    mechanism: "Direct oral inhibitors bind the FXa active site (free and prothrombinase-bound). Heparins work indirectly via antithrombin.",
    drugs: [
      { name: "Apixaban / rivaroxaban / edoxaban", action: "Direct oral FXa inhibitors (DOACs)", use: "AF stroke prevention, VTE treatment and prophylaxis" },
      { name: "Enoxaparin / fondaparinux", action: "Indirect FXa inhibitors via antithrombin (LMWH / pentasaccharide)", use: "VTE prophylaxis/treatment, ACS, pregnancy (LMWH)" },
      { name: "Andexanet alfa", action: "Catalytically inactive FXa decoy (reversal agent)", use: "Life-threatening bleeding on apixaban/rivaroxaban" }
    ],
    question: "Why is Factor Xa such a good anticoagulant target, and how did DOACs improve on warfarin?",
    answer: "FXa sits at the amplification point where both pathways converge: one FXa generates ~1000 thrombins, so inhibiting it blunts the thrombin burst efficiently without blocking existing thrombin directly (possibly preserving some haemostasis). DOACs vs warfarin: fixed dosing, rapid onset and offset, no INR monitoring, few food interactions, and less intracranial haemorrhage, because warfarin also lowers factor VII (needed for TF-driven haemostasis in the brain) while FXa inhibitors leave it intact.",
    pearl: "DOACs are contraindicated in mechanical heart valves and are poor in antiphospholipid syndrome (warfarin is better). Dabigatran is the direct thrombin inhibitor alternative (reversal: idarucizumab).",
    pathways: ["coag"]
  },
  {
    id: "vkorc1", name: "Vitamin K epoxide reductase", short: "VKORC1", gene: "VKORC1",
    family: "Enzyme (ER membrane reductase)", area: "Haematology & thrombosis",
    location: "Endoplasmic reticulum of hepatocytes",
    role: "Recycles vitamin K epoxide back to reduced vitamin K (hydroquinone), the cofactor that γ-glutamyl carboxylase needs to activate clotting factors.",
    signalling: [
      "γ-glutamyl carboxylase adds carboxyl groups to Glu residues on factors II, VII, IX, X and proteins C and S",
      "Gla residues bind Ca²⁺ → factors can dock on phospholipid membranes (functional)",
      "This oxidises vitamin K → vitamin K epoxide",
      "VKORC1 reduces the epoxide back → vitamin K is recycled",
      "Warfarin blocks VKORC1 → newly made factors are under-carboxylated (non-functional)"
    ],
    mechanism: "Warfarin (a coumarin) inhibits VKORC1. Effect reversed by vitamin K (bypasses via another reductase) or prothrombin complex concentrate (PCC, immediate).",
    drugs: [
      { name: "Warfarin", action: "VKORC1 inhibitor (vitamin K antagonist)", use: "Mechanical valves, antiphospholipid syndrome, AF/VTE (when DOACs unsuitable)" },
      { name: "Vitamin K (phytomenadione)", action: "Replenishes reduced vitamin K", use: "Warfarin reversal, neonatal prophylaxis" }
    ],
    question: "Why does warfarin take days to work, and why can it initially cause clotting (skin necrosis)?",
    answer: "Warfarin doesn't affect factors already in the blood. It only stops new ones being activated, so the anticoagulant effect waits for existing factors to clear: FVII (t½ ~6 h) falls first, prothrombin (t½ ~60–72 h) last. Real antithrombotic effect takes ~5 days. Protein C (a natural anticoagulant, t½ ~8 h) also falls early, before prothrombin, giving a transient procoagulant state that can cause microvascular thrombosis (warfarin skin necrosis, worse with protein C deficiency). Hence heparin 'bridging' for at least 5 days and until the INR is in range.",
    pearl: "Dose variability is explained by VKORC1 (sensitivity) and CYP2C9 (metabolism of S-warfarin) polymorphisms. Huge interaction list (CYP2C9 inhibitors such as amiodarone and metronidazole), and diet (vitamin K) affects it. Teratogenic.",
    pathways: ["coag"]
  }
];
