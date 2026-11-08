// Clinical-stage targets (no approved drug yet): cardiometabolic and immunology. Status as of 2026; verify before relying on it.
window.FC_TARGETS.push(
  {
    id: "lpa", name: "Lipoprotein(a) / apolipoprotein(a)", short: "Lp(a)", gene: "LPA",
    family: "Lipoprotein (apo(a) bound to apoB-100 of an LDL-like particle)", area: "Cardiovascular & renal",
    location: "apo(a) is made only by hepatocytes; Lp(a) circulates in plasma and deposits in arterial walls and aortic valve leaflets",
    role: "No essential physiological role is known. Levels are ~90% genetically set by the LPA gene (kringle IV-2 copy number) and barely change with diet or statins.",
    signalling: [
      "Hepatocytes transcribe LPA and secrete apo(a)",
      "apo(a) binds apoB-100 by a disulfide bond → Lp(a) particle",
      "Lp(a) enters the arterial intima and carries oxidised phospholipids",
      "Oxidised phospholipids drive monocyte recruitment and inflammation; the plasminogen-like apo(a) impairs fibrinolysis",
      "Net effect: atherosclerosis, thrombosis and calcific aortic stenosis"
    ],
    mechanism: "Silence LPA mRNA in hepatocytes with GalNAc-conjugated antisense (pelacarsen) or siRNA (olpasiran, lepodisiran, zerlasiran), cutting Lp(a) by 80–95%+. Muvalaplin is an oral small molecule that blocks apo(a) binding to apoB, so the particle can't assemble.",
    drugs: [
      { name: "Pelacarsen", action: "GalNAc antisense oligonucleotide against LPA mRNA", use: "Secondary prevention of ASCVD in people with high Lp(a)", co: "Novartis / Ionis", phase: "Phase 3" },
      { name: "Olpasiran", action: "GalNAc siRNA against LPA mRNA", use: "ASCVD with high Lp(a)", co: "Amgen", phase: "Phase 3" },
      { name: "Lepodisiran", action: "Long-acting GalNAc siRNA (dosed about twice a year or less)", use: "ASCVD with high Lp(a)", co: "Eli Lilly", phase: "Phase 3" },
      { name: "Muvalaplin", action: "Oral inhibitor of apo(a)–apoB binding", use: "High Lp(a)", co: "Eli Lilly", phase: "Phase 2" }
    ],
    question: "Why can't statins treat high Lp(a), and why does the field need outcome trials rather than just Lp(a) lowering?",
    answer: "Lp(a) levels are set by apo(a) production, not LDL-receptor clearance, so statins (which upregulate LDLR) don't lower it and can even raise it slightly. Mendelian randomisation says lifelong high Lp(a) causes heart disease, but no trial has yet proved that lowering it in adulthood prevents events, or by how much it must fall. Lp(a)HORIZON (pelacarsen) and OCEAN(a)-Outcomes (olpasiran) are testing that.",
    pearl: "About 1 in 5 people have raised Lp(a). Guidelines now recommend measuring it once in a lifetime, because it barely changes.",
    pathways: ["lipid"],
    status: "clinical", after: "pcsk9",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "Strong human genetic validation, and about 20% of people are affected, with no current therapy.", readouts: "Lp(a)HORIZON (pelacarsen) is the first cardiovascular outcomes readout, expected around 2025–26 (verify result). OCEAN(a)-Outcomes (olpasiran) and ACCLAIM-Lp(a) (lepodisiran) follow.", risk: "How much absolute Lp(a) reduction is needed is unknown. Particle number may matter more than percentage lowering. A neutral HORIZON result would hit the whole class." }
  },
  {
    id: "fxi", name: "Coagulation factor XI / XIa", short: "FXI", gene: "F11",
    family: "Serine protease (contact pathway of coagulation)", area: "Haematology & thrombosis",
    location: "Made in the liver; circulates in plasma as the zymogen FXI",
    role: "Amplifies thrombin generation. Thrombin activates FXI → FXIa, which activates FIX, sustaining clot growth. It contributes more to thrombosis than to stopping bleeding after injury.",
    signalling: [
      "Thrombin (or FXIIa) cleaves FXI → FXIa",
      "FXIa activates factor IX → FIXa",
      "FIXa with FVIIIa (tenase) activates factor X → FXa",
      "FXa (prothrombinase) makes a burst of thrombin",
      "Thrombin converts fibrinogen → fibrin and feeds back to activate more FXI"
    ],
    mechanism: "Antibodies (abelacimab, osocimab), oral small-molecule FXIa inhibitors (milvexian, asundexian) and antisense (fesomersen) block the amplification loop while leaving tissue-factor-driven haemostasis largely intact.",
    drugs: [
      { name: "Abelacimab", action: "Monoclonal antibody locking FXI and FXIa in an inactive state (monthly injection)", use: "Atrial fibrillation in patients unsuitable for DOACs; cancer-associated VTE", co: "Anthos (now Novartis)", phase: "Phase 3" },
      { name: "Milvexian", action: "Oral small-molecule FXIa inhibitor", use: "Stroke prevention in AF, secondary stroke prevention, ACS", co: "Bristol Myers Squibb / Johnson & Johnson", phase: "Phase 3" },
      { name: "Asundexian", action: "Oral small-molecule FXIa inhibitor", use: "Secondary stroke prevention (failed in AF)", co: "Bayer", phase: "Phase 3 / filed (verify)" }
    ],
    question: "Why might blocking FXI prevent clots with less bleeding than a factor Xa inhibitor?",
    answer: "People with congenital FXI deficiency (haemophilia C) rarely bleed spontaneously but have fewer strokes and VTE. FXI mainly amplifies thrombin inside a growing clot, while the tissue factor → FVIIa → FX pathway that seals a wound works without it. Blocking FXI should cut pathological clot growth and spare most haemostasis. FXa sits on the common pathway, so DOACs blunt both.",
    pearl: "OCEANIC-AF stopped early because asundexian was less effective than apixaban at preventing stroke, even though it bled less. Abelacimab's AZALEA trial showed much less bleeding than rivaroxaban. Efficacy, not safety, is the question for the class.",
    pathways: ["coag"],
    status: "clinical", after: "fxa",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "The promise is an anticoagulant that separates clot prevention from bleeding.", readouts: "LIBREXIA trials (milvexian in AF, stroke and ACS) and LILAC-TIMI 76 (abelacimab in AF patients unfit for anticoagulants) are the key readouts. Asundexian's OCEANIC-STROKE readout and filing need checking (verify).", risk: "OCEANIC-AF showed you can lose efficacy along with bleeding. Dose and depth of FXIa inhibition may decide success." }
  },
  {
    id: "fgf21", name: "Fibroblast growth factor 21 (FGFR1c/β-klotho agonism)", short: "FGF21", gene: "FGF21",
    family: "Endocrine FGF hormone (acts via FGFR1c with the co-receptor β-klotho)", area: "GI & hepatology",
    location: "Made mainly by the liver; acts on adipose tissue, liver and brain",
    role: "A fasting and stress hormone that increases insulin sensitivity, fat oxidation and energy expenditure, and reduces hepatic fat.",
    signalling: [
      "FGF21 binds β-klotho, which presents it to FGFR1c on adipocytes",
      "FGFR1c dimerises and autophosphorylates its tyrosine kinase domain",
      "FRS2 → RAS–MAPK and PI3K signalling → adiponectin release and better insulin sensitivity",
      "Adiponectin and lower lipolysis reduce fatty-acid flux to the liver",
      "Less de novo lipogenesis and lipotoxicity → reduced liver fat, inflammation and fibrosis"
    ],
    mechanism: "Engineered long-acting FGF21 analogues (Fc fusion or glycoPEGylated) restore and amplify FGF21 signalling, given as weekly or two-weekly injections. They aim to reverse MASH fibrosis, not just steatosis.",
    drugs: [
      { name: "Efruxifermin", action: "Fc-fused long-acting FGF21 analogue", use: "MASH with fibrosis, including compensated cirrhosis", co: "Akero (acquired by Novo Nordisk, verify)", phase: "Phase 3" },
      { name: "Pegozafermin", action: "GlycoPEGylated FGF21 analogue", use: "MASH with fibrosis, severe hypertriglyceridaemia", co: "89bio (acquired by Roche, verify)", phase: "Phase 3" }
    ],
    question: "Why are FGF21 analogues exciting for MASH cirrhosis, where resmetirom and GLP-1s are less proven?",
    answer: "Phase 2 trials showed efruxifermin regressing fibrosis in compensated cirrhosis (F4), the stage that predicts liver failure and death. FGF21 hits several drivers at once: it reduces liver fat, improves insulin sensitivity through adiponectin, and has direct anti-fibrotic effects. Most other MASH drugs mainly reduce fat or weight.",
    pearl: "In 2025 big pharma bought into the class: Roche acquired 89bio and Novo Nordisk acquired Akero (verify). That's a strong industry signal that FGF21 could pair with GLP-1s.",
    pathways: [],
    status: "clinical", after: "thr",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "It could be the first drug to reverse cirrhosis-stage MASH fibrosis.", readouts: "SYNCHRONY Histology and Outcomes (efruxifermin), ENLIGHTEN-Fibrosis and Cirrhosis (pegozafermin). Cirrhosis outcome data are years away.", risk: "Bone density signals (FGF21 can be catabolic for bone), GI side effects, injection burden, and whether histology gains translate into fewer outcome events." }
  },
  {
    id: "cyp11b2", name: "Aldosterone synthase", short: "CYP11B2", gene: "CYP11B2",
    family: "Mitochondrial cytochrome P450 enzyme", area: "Cardiovascular & renal",
    location: "Zona glomerulosa of the adrenal cortex",
    role: "Catalyses the final steps of aldosterone synthesis from 11-deoxycorticosterone. It is driven by angiotensin II and potassium.",
    signalling: [
      "Angiotensin II (via AT1R) or high K⁺ depolarises zona glomerulosa cells",
      "Ca²⁺ influx increases CYP11B2 expression and activity",
      "CYP11B2 converts 11-deoxycorticosterone → corticosterone → aldosterone",
      "Aldosterone activates the mineralocorticoid receptor in the distal nephron",
      "ENaC and Na⁺/K⁺-ATPase increase → Na⁺ and water retention, K⁺ loss, ↑ blood pressure, and fibrosis in heart and kidney"
    ],
    mechanism: "Selective oral inhibitors block aldosterone production at its source, rather than blocking its receptor (spironolactone and finerenone are MR antagonists). The difficulty is sparing CYP11B1 (cortisol synthase), which is about 93% identical.",
    drugs: [
      { name: "Baxdrostat", action: "Highly selective oral aldosterone synthase inhibitor", use: "Uncontrolled or resistant hypertension; CKD (with dapagliflozin)", co: "AstraZeneca", phase: "Phase 3 / filed (verify)" },
      { name: "Lorundrostat", action: "Selective oral aldosterone synthase inhibitor", use: "Uncontrolled and resistant hypertension", co: "Mineralys Therapeutics", phase: "Phase 3 / filed (verify)" },
      { name: "Vicadrostat", action: "Aldosterone synthase inhibitor (with empagliflozin)", use: "CKD, heart failure", co: "Boehringer Ingelheim", phase: "Phase 3" }
    ],
    question: "Why inhibit aldosterone synthesis instead of using an MR antagonist like spironolactone?",
    answer: "MR blockade causes reflex aldosterone escape: levels rise and still act through non-MR (non-genomic) routes. Spironolactone's anti-androgen effects (gynaecomastia) also limit its use. Cutting aldosterone at its source avoids escape and steroidal side effects. Hyperkalaemia remains a risk because the potassium-wasting signal is lost either way.",
    pearl: "Early aldosterone synthase inhibitors (osilodrostat) also blocked cortisol synthesis. That off-target effect became a use: osilodrostat is approved for Cushing's disease. Selectivity over CYP11B1 is what makes the new agents viable for hypertension.",
    pathways: ["raas"],
    status: "clinical", after: "mr",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "It targets the large population with uncontrolled hypertension, roughly 1 in 10 of whom have high-aldosterone states.", readouts: "BaxHTN (baxdrostat) was positive in 2025. Launch-HTN and Advance-HTN (lorundrostat) were positive. Filings in 2025–26 may have led to approval (verify).", risk: "Hyperkalaemia, especially in CKD, and differentiation against cheap spironolactone. If approved, this target moves to 'approved'." }
  },
  {
    id: "agt", name: "Angiotensinogen", short: "AGT", gene: "AGT",
    family: "Serpin-family plasma protein (the sole precursor of angiotensins)", area: "Cardiovascular & renal",
    location: "Made and secreted mainly by hepatocytes",
    role: "The only substrate for renin. Its cleavage starts the whole RAAS cascade.",
    signalling: [
      "Hepatocytes secrete angiotensinogen into plasma",
      "Renin (from the kidney) cleaves angiotensinogen → angiotensin I",
      "ACE converts angiotensin I → angiotensin II",
      "Angiotensin II activates AT1R → vasoconstriction and aldosterone release",
      "Blood pressure rises; chronic activation drives cardiac and renal remodelling"
    ],
    mechanism: "A GalNAc siRNA silences hepatic AGT mRNA. One injection lowers angiotensinogen by about 90% for up to 6 months, switching the RAAS off upstream of renin, ACE and AT1R.",
    drugs: [
      { name: "Zilebesiran", action: "GalNAc siRNA against AGT mRNA (twice-yearly injection)", use: "Hypertension with high cardiovascular risk", co: "Alnylam / Roche", phase: "Phase 3" }
    ],
    question: "What problem does a twice-yearly RAAS blocker solve that daily ACE inhibitors or ARBs don't?",
    answer: "Adherence and smoothness. About half of patients stop antihypertensives within a year, and daily pills give peaks and troughs. One injection that suppresses angiotensinogen gives steady 24-hour blood-pressure lowering for months. The open questions are the absence of an off-switch (problematic in hypotension, AKI or pregnancy) and whether outcomes match the BP drop.",
    pearl: "Silencing an upstream precursor also avoids ACE-inhibitor bradykinin effects (cough, angioedema). A reversal strategy matters because it can't be stopped quickly.",
    pathways: ["raas"],
    status: "clinical", after: "at1r",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "It turns hypertension treatment into a twice-yearly injection.", readouts: "KARDIA-1/-2/-3 Phase 2 trials showed sustained systolic BP reduction. The ZENITH cardiovascular outcomes trial is ongoing (verify).", risk: "No rapid off-switch for hypotension, hyperkalaemia or acute kidney injury. Payers may resist an expensive alternative to generic pills unless outcomes are clearly better." }
  },
  {
    id: "tl1a", name: "TNF-like ligand 1A", short: "TL1A", gene: "TNFSF15",
    family: "TNF superfamily cytokine (ligand for death receptor 3, DR3)", area: "Immunology & inflammation",
    location: "Expressed by antigen-presenting cells and endothelium in inflamed gut; DR3 is on T cells, ILCs and fibroblasts",
    role: "Co-stimulates T-cell and innate lymphoid cell responses and drives intestinal fibroblast activation. Genetic variants in TNFSF15 are linked to Crohn's disease.",
    signalling: [
      "Microbial signals induce TL1A on gut dendritic cells and macrophages",
      "TL1A binds DR3 on T cells and innate lymphoid cells",
      "DR3 recruits TRADD → NF-κB and MAPK activation",
      "Th1, Th17 and ILC cytokines rise (IFN-γ, IL-17, IL-13)",
      "Inflammation, plus TL1A–DR3 on fibroblasts → collagen deposition and fibrosis"
    ],
    mechanism: "Anti-TL1A monoclonal antibodies neutralise the ligand, aiming to reduce both inflammation and fibrosis (strictures) in IBD.",
    drugs: [
      { name: "Tulisokibart", action: "Anti-TL1A monoclonal antibody", use: "Ulcerative colitis, Crohn's disease", co: "Merck & Co. (MSD)", phase: "Phase 3" },
      { name: "Duvakitug", action: "Anti-TL1A monoclonal antibody", use: "Ulcerative colitis, Crohn's disease", co: "Teva / Sanofi", phase: "Phase 3" },
      { name: "Afimkibart", action: "Anti-TL1A monoclonal antibody", use: "Ulcerative colitis, Crohn's disease", co: "Roche", phase: "Phase 3" }
    ],
    question: "Why did TL1A attract roughly $20 billion of deals, when IBD already has anti-TNF, anti-integrin, IL-23 and JAK drugs?",
    answer: "Two reasons. First, it may treat fibrosis as well as inflammation; no current IBD drug reverses strictures, which cause most Crohn's surgery. Second, Prometheus/Merck paired the drug with a genetic biomarker test, so patients predicted to respond can be selected. Phase 2 remission rates on top of prior biologic failure were competitive.",
    pearl: "Merck bought Prometheus for $10.8 bn (2023) and Roche bought Telavant for $7.1 bn (2023). TL1A was one of the biggest-bet immunology targets of the decade.",
    pathways: ["nfkb"],
    status: "clinical", after: "tnf",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "It's a possible anti-inflammatory and anti-fibrotic drug for IBD, with biomarker selection.", readouts: "ARTEMIS-UC and APOLLO-CD (tulisokibart) and RELIEVE-UCCD (duvakitug) Phase 2 were positive. Phase 3 induction and maintenance data are due around 2026–27 (verify).", risk: "Phase 3 IBD trials often show smaller effects than Phase 2. The anti-fibrotic claim is unproven in humans. The class is crowded, with three near-identical antibodies." }
  },
  {
    id: "ox40", name: "OX40 (CD134) / OX40 ligand", short: "OX40/OX40L", gene: "TNFRSF4 / TNFSF4",
    family: "TNF receptor superfamily co-stimulatory pair", area: "Immunology & inflammation",
    location: "OX40 on activated and memory T cells; OX40L on dendritic cells and other antigen-presenting cells",
    role: "A late co-stimulatory signal that keeps effector and memory T cells alive and expanding, especially Th2 cells in atopic disease.",
    signalling: [
      "Allergen-loaded dendritic cells, primed by TSLP, upregulate OX40L",
      "OX40L binds OX40 on recently activated T cells",
      "OX40 recruits TRAF2/5 → NF-κB and PI3K–AKT survival signalling",
      "Effector T cells (especially Th2) survive and expand into memory pools",
      "Sustained IL-4, IL-13 and IL-31 → eczema, itch and barrier damage"
    ],
    mechanism: "Antibodies either block or deplete OX40-positive T cells (rocatinlimab) or block OX40L (amlitelimab), aiming at the pathogenic memory T cells behind chronic atopic disease, possibly with longer remissions.",
    drugs: [
      { name: "Rocatinlimab", action: "Anti-OX40 antibody that depletes OX40⁺ T cells", use: "Moderate-to-severe atopic dermatitis", co: "Amgen / Kyowa Kirin", phase: "Phase 3" },
      { name: "Amlitelimab", action: "Non-depleting anti-OX40L antibody", use: "Atopic dermatitis, asthma", co: "Sanofi", phase: "Phase 3" }
    ],
    question: "How does an OX40 pathway drug differ conceptually from dupilumab in atopic dermatitis?",
    answer: "Dupilumab blocks IL-4Rα, cutting the cytokine output of Th2 cells. OX40 drugs act further upstream, on the T cells themselves, removing the survival signal for the memory T cells that keep producing those cytokines. The hope is disease modification: responses that last after stopping, and dosing every 3–6 months.",
    pearl: "The ROCKET programme (rocatinlimab) met its endpoints but efficacy looked below dupilumab across trials, and fever/chills were seen. Differentiation will rest on dosing interval and durability.",
    pathways: ["tcell"],
    status: "clinical", after: "il4ra",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "It could bring disease-modifying, infrequently dosed treatment for atopic disease.", readouts: "ROCKET Phase 3 (rocatinlimab) readouts 2025, with filings expected (verify). OCEANA Phase 3 (amlitelimab) ongoing.", risk: "Efficacy versus dupilumab and JAK inhibitors, infection risk from T-cell depletion, and whether durability holds." }
  },
  {
    id: "cd40l", name: "CD40 ligand (CD154) / CD40", short: "CD40L", gene: "CD40LG / CD40",
    family: "TNF superfamily co-stimulatory pair", area: "Immunology & inflammation",
    location: "CD40L on activated CD4⁺ T cells and platelets; CD40 on B cells, dendritic cells and macrophages",
    role: "The key T-cell help signal to B cells: it drives germinal centres, class switching and antibody production.",
    signalling: [
      "An activated CD4⁺ T follicular helper cell expresses CD40L",
      "CD40L binds CD40 on an antigen-presenting B cell",
      "CD40 recruits TRAFs → canonical and non-canonical NF-κB",
      "The B cell proliferates, forms germinal centres and switches class (AID)",
      "High-affinity autoantibodies and plasma cells form; antigen-presenting cells are also licensed"
    ],
    mechanism: "Block the help signal without depleting B cells: anti-CD40L antibodies with engineered Fc regions (dazodalibep, frexalimab) or anti-CD40 antibodies (iscalimab).",
    drugs: [
      { name: "Dazodalibep", action: "CD40L antagonist fusion protein (Fc-free)", use: "Sjögren's disease", co: "Amgen (from Horizon)", phase: "Phase 3" },
      { name: "Frexalimab", action: "Second-generation anti-CD40L antibody with silenced Fc", use: "Multiple sclerosis, type 1 diabetes, SLE", co: "Sanofi", phase: "Phase 3" },
      { name: "Iscalimab", action: "Anti-CD40 antibody", use: "Sjögren's disease, transplantation", co: "Novartis", phase: "Phase 2" }
    ],
    question: "Why did the first anti-CD40L antibodies fail, and how do newer ones avoid that?",
    answer: "Early anti-CD40L antibodies (ruplizumab, toralizumab) caused thromboembolism in the early 2000s. Platelets express CD40L and FcγRIIa; antibody–CD40L complexes cross-linked platelet Fc receptors and activated them. New agents remove or silence the Fc portion (dazodalibep has no Fc; frexalimab is Fc-engineered), keeping the blockade without platelet activation.",
    pearl: "A classic lesson in Fc engineering: the antibody's Fc region, not its target, can create the safety problem.",
    pathways: ["bcell", "tcell"],
    status: "clinical", after: "ctla4",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "It could be the first therapy aimed at Sjögren's disease, plus a new B-cell-sparing MS mechanism.", readouts: "Dazodalibep Phase 3 in Sjögren's (2025–26). Frexalimab FREVIVA and FREXALT in MS (verify).", risk: "Thrombosis history, infection risk, and proving it beats B-cell depletion (anti-CD20) in MS." }
  },
  {
    id: "nlrp3", name: "NLRP3 inflammasome", short: "NLRP3", gene: "NLRP3",
    family: "NOD-like receptor (cytosolic innate immune sensor)", area: "Immunology & inflammation",
    location: "Cytoplasm of macrophages, monocytes, neutrophils and microglia",
    role: "Senses danger signals (urate crystals, cholesterol crystals, ATP, K⁺ efflux) and assembles the inflammasome, which activates caspase-1 to process IL-1β and IL-18.",
    signalling: [
      "Priming: TLR/NF-κB signalling induces NLRP3 and pro-IL-1β expression",
      "Activation: crystals, ATP or K⁺ efflux trigger NLRP3 oligomerisation",
      "NLRP3 recruits ASC, forming a speck, which recruits pro-caspase-1",
      "Active caspase-1 cleaves pro-IL-1β and pro-IL-18 into their mature forms",
      "Caspase-1 also cleaves gasdermin D → pores → IL-1β release and pyroptosis"
    ],
    mechanism: "Oral small molecules bind the NLRP3 NACHT domain and lock it inactive, blocking IL-1β and IL-18 production at the source while leaving other inflammasomes intact. Brain-penetrant versions target neuroinflammation.",
    drugs: [
      { name: "Dapansutrile", action: "Oral NLRP3 inhibitor", use: "Gout flares, cardiovascular inflammation", co: "Olatec", phase: "Phase 2/3" },
      { name: "Selnoflast", action: "Oral NLRP3 inhibitor", use: "Inflammatory and neurodegenerative disease", co: "Roche", phase: "Phase 2" },
      { name: "VTX3232", action: "Oral brain-penetrant NLRP3 inhibitor", use: "Parkinson's disease, cardiometabolic inflammation", co: "Ventyx Biosciences", phase: "Phase 2" }
    ],
    question: "If anti-IL-1β antibodies already exist, why develop NLRP3 inhibitors?",
    answer: "Canakinumab is an expensive injection, and it blocks only IL-1β. NLRP3 inhibitors are oral pills that act upstream, stopping IL-1β and IL-18 together, and only where the NLRP3 inflammasome fires, so other host-defence inflammasomes keep working. CANTOS showed that cutting IL-1β lowers cardiovascular events; an oral NLRP3 drug could make that approach practical, and brain-penetrant ones could test neuroinflammation in Parkinson's and Alzheimer's.",
    pearl: "This links straight back to your first question: blocking IL-1β reduces inflammation. NLRP3 is the machine upstream that makes active IL-1β.",
    pathways: ["nfkb"],
    status: "clinical", after: "il1b",
    pipeline: { stage: "Phase 2–3", asOf: "2026", why: "It could give an oral, upstream version of proven anti-IL-1β biology.", readouts: "Many Phase 2 readouts in gout, cardiovascular inflammation, obesity and Parkinson's (2025–26). Novo Nordisk and others have bought NLRP3 programmes (verify).", risk: "Earlier candidates had liver toxicity. Infection risk is possible with long-term IL-1 suppression. Benefit beyond colchicine is unproven." }
  },
  {
    id: "irak4", name: "Interleukin-1 receptor-associated kinase 4", short: "IRAK4", gene: "IRAK4",
    family: "Serine/threonine kinase and scaffold (myddosome)", area: "Immunology & inflammation",
    location: "Cytoplasm of innate immune cells and some lymphocytes",
    role: "The master kinase and scaffold of the myddosome, connecting TLRs and IL-1-family receptors to NF-κB.",
    signalling: [
      "A TLR or IL-1R/IL-18R/IL-33R binds its ligand",
      "The receptor recruits the adaptor MyD88",
      "MyD88 recruits IRAK4, which assembles the myddosome and phosphorylates IRAK1/2",
      "IRAK1 activates TRAF6 → TAK1 → IKK",
      "NF-κB and MAPKs switch on → IL-6, TNF and IL-1β production"
    ],
    mechanism: "Kinase inhibitors block catalytic activity, but IRAK4 also works as a scaffold. Targeted degraders (heterobifunctional molecules that recruit an E3 ligase, such as KT-474) destroy the whole protein, removing both functions.",
    drugs: [
      { name: "KT-474 (SAR444656)", action: "Oral IRAK4 degrader", use: "Hidradenitis suppurativa, atopic dermatitis", co: "Kymera / Sanofi", phase: "Phase 2" },
      { name: "Zimlovisertib", action: "Oral IRAK4 kinase inhibitor", use: "Inflammatory diseases", co: "Pfizer", phase: "Phase 2" }
    ],
    question: "Why might degrading IRAK4 work better than inhibiting its kinase activity?",
    answer: "IRAK4 kinase-dead mice still build myddosomes and partly signal, because the protein's scaffold role holds the complex together. A degrader removes the protein entirely, shutting down both kinase and scaffold functions. That's the core argument for degraders whenever a target has non-catalytic roles.",
    pearl: "Children with IRAK4 deficiency get serious bacterial infections in early childhood, but these become rarer with age. That suggests long-term IRAK4 suppression in adults might be tolerable.",
    pathways: ["nfkb"],
    status: "clinical", after: "il1b",
    pipeline: { stage: "Phase 2", asOf: "2026", why: "It's a leading test case for targeted protein degradation in immunology.", readouts: "KT-474 Phase 2 in hidradenitis suppurativa and atopic dermatitis (2025–26, verify).", risk: "Redundancy (IRAK1 and other routes) may blunt efficacy. Infection risk. Degrader pharmacology is still maturing." }
  },
  {
    id: "stat6", name: "Signal transducer and activator of transcription 6", short: "STAT6", gene: "STAT6",
    family: "Transcription factor (STAT family)", area: "Immunology & inflammation",
    location: "Cytoplasm, moving to the nucleus when activated; in T cells, B cells, epithelium and macrophages",
    role: "The dedicated transcription factor for IL-4 and IL-13 signalling, driving Th2 differentiation, IgE class switching and allergic inflammation.",
    signalling: [
      "IL-4 or IL-13 binds the IL-4Rα receptor complex",
      "Receptor-associated JAK1 (and JAK3 or TYK2) phosphorylates IL-4Rα",
      "STAT6 docks and is phosphorylated",
      "pSTAT6 dimerises and moves into the nucleus",
      "It drives GATA3 (Th2 fate), IgE switching, mucus and eotaxin → allergic inflammation"
    ],
    mechanism: "Oral degraders (e.g. KT-621) destroy STAT6 to give dupilumab-like IL-4/IL-13 blockade as a pill. Transcription factors are hard to drug with classic inhibitors, so degradation is the enabling approach.",
    drugs: [
      { name: "KT-621", action: "Oral STAT6 degrader", use: "Atopic dermatitis, asthma", co: "Kymera Therapeutics", phase: "Phase 2" }
    ],
    question: "Why is a STAT6 pill an attractive alternative to dupilumab?",
    answer: "STAT6 is the single node that IL-4 and IL-13 both depend on, and it isn't needed by most other cytokines. Removing it should copy dupilumab's IL-4Rα blockade without injections, and without the broad cytokine suppression of JAK inhibitors, which act across many receptors and carry boxed warnings.",
    pearl: "This is a good example of 'undruggable' becoming druggable: transcription factors lack enzyme pockets, but degraders only need a binding surface.",
    pathways: ["jakstat"],
    status: "clinical", after: "il4ra",
    pipeline: { stage: "Phase 2", asOf: "2026", why: "It could be dupilumab-level efficacy in an oral pill.", readouts: "KT-621 Phase 1b showed deep STAT6 degradation and reduced Th2 biomarkers. Phase 2b in atopic dermatitis (2026, verify).", risk: "Early stage. Long-term safety of systemic STAT6 loss, and whether pill efficacy matches the biologic." }
  },
  {
    id: "il33", name: "Interleukin-33 / ST2", short: "IL-33", gene: "IL33 / IL1RL1",
    family: "IL-1 family alarmin cytokine and its receptor ST2", area: "Respiratory",
    location: "Stored in airway epithelial and endothelial cell nuclei; ST2 on mast cells, ILC2s, Th2 cells and macrophages",
    role: "An alarmin released when the epithelium is damaged (smoke, viruses, pollutants) that triggers type 2 and non-type 2 airway inflammation.",
    signalling: [
      "Epithelial damage (cigarette smoke, viral infection) releases IL-33",
      "IL-33 binds ST2 with IL-1RAcP on immune cells",
      "MyD88 → IRAK → NF-κB and MAPK activation",
      "ILC2s and mast cells release IL-5 and IL-13; inflammatory cells activate",
      "Mucus hypersecretion, airway inflammation and exacerbations"
    ],
    mechanism: "Antibodies neutralise IL-33 (itepekimab, tozorakimab) or block ST2 (astegolimab), aiming at COPD exacerbations, especially in former smokers.",
    drugs: [
      { name: "Itepekimab", action: "Anti-IL-33 monoclonal antibody", use: "COPD in former smokers", co: "Regeneron / Sanofi", phase: "Phase 3" },
      { name: "Tozorakimab", action: "Anti-IL-33 antibody (blocks ST2 and RAGE/EGFR signalling)", use: "COPD", co: "AstraZeneca", phase: "Phase 3" },
      { name: "Astegolimab", action: "Anti-ST2 monoclonal antibody", use: "COPD", co: "Roche / Amgen", phase: "Phase 3" }
    ],
    question: "Why are IL-33 drugs being tested in COPD rather than asthma, where most type 2 biologics started?",
    answer: "COPD has few biologic options and is mostly driven by non-type 2 inflammation from smoking-related epithelial damage, the main IL-33 trigger. IL-33 sits upstream, so blocking it may reduce both type 2 and non-type 2 inflammation. That fits the many COPD patients without high eosinophils, who don't qualify for dupilumab or mepolizumab.",
    pearl: "Itepekimab's 2025 Phase 3 pair split: AERIFY-1 was positive and AERIFY-2 missed (verify). This shows how risky COPD exacerbation trials are, even with strong biology.",
    pathways: ["nfkb"],
    status: "clinical", after: "il5",
    pipeline: { stage: "Phase 3", asOf: "2026", why: "Upstream alarmin blockade for COPD patients without high eosinophils.", readouts: "AERIFY-1/-2 (itepekimab, mixed 2025, verify), OBERON/TITANIA (tozorakimab) and ARNASA (astegolimab) Phase 3 readouts.", risk: "Inconsistent Phase 3 results, a heterogeneous COPD population, and smoking status changing the effect." }
  }
);
