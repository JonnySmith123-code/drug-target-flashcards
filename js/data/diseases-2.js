// Disease pathology, part 2: pancreas, intestine, kidney, bladder & prostate, reproductive,
// breast, skin, joints & bone, blood & bone marrow. Each entry links mechanism to drug targets.
(window.FC_DISEASES = window.FC_DISEASES || []).push(
  // ───────────── Pancreas ─────────────
  {
    id: "t1d", name: "Type 1 diabetes", short: "T1D",
    organ: "pancreas", organs: ["pancreas", "eye", "kidney", "vessels"],
    area: "Metabolic & endocrine",
    summary: "Autoimmune destruction of pancreatic β-cells causing absolute insulin deficiency. It accounts for about 5–10% of diabetes, usually presents in childhood or young adulthood, and requires lifelong insulin.",
    pathophys: [
      "Genetic risk (HLA-DR3-DQ2 / DR4-DQ8) plus an environmental trigger breaks tolerance to β-cell antigens",
      "Autoreactive CD4⁺ and CD8⁺ T cells infiltrate islets (insulitis); autoantibodies (GAD65, IA-2, ZnT8, insulin) appear years earlier",
      "Progressive β-cell loss: stage 1 (≥2 autoantibodies, normoglycaemia) → stage 2 (dysglycaemia) → stage 3 (symptomatic)",
      "Absolute insulin deficiency → unrestrained hepatic glucose output and lipolysis",
      "Free fatty acids → hepatic ketogenesis → diabetic ketoacidosis (DKA); chronic hyperglycaemia → micro- and macrovascular damage"
    ],
    features: "Polyuria, polydipsia, weight loss and fatigue, often presenting acutely as DKA. Long term: retinopathy, nephropathy, neuropathy, cardiovascular disease and treatment-related hypoglycaemia.",
    diagnosis: "Hyperglycaemia (HbA1c ≥48 mmol/mol, random glucose ≥11.1 mmol/L with symptoms) plus islet autoantibodies and low C-peptide; ketones assessed for DKA.",
    treatments: [
      { name: "Basal–bolus insulin (glargine, degludec + aspart, lispro)", action: "Insulin receptor agonists replacing basal and prandial secretion", target: "insr" },
      { name: "Insulin pumps / hybrid closed-loop systems", action: "CGM-driven automated insulin delivery", target: "insr" },
      { name: "Teplizumab", action: "Anti-CD3 antibody that delays progression from stage 2 to stage 3 disease", target: null },
      { name: "Glucagon (IM / nasal)", action: "Glucagon receptor agonist for severe hypoglycaemia", target: null }
    ],
    targets: ["insr"],
    pathways: ["tcell", "insulin"],
    question: "Why does insulin deficiency cause ketoacidosis in T1D but rarely in T2D?",
    answer: "Insulin is the main brake on lipolysis in adipose tissue and on ketogenesis in the liver, and it inhibits these processes at much lower concentrations than it needs to drive glucose uptake. In T1D insulin is essentially absent, so hormone-sensitive lipase releases free fatty acids freely. At the same time the high glucagon:insulin ratio pushes them into mitochondrial β-oxidation and ketone body production. In T2D some endogenous insulin remains, usually enough to suppress lipolysis and ketogenesis even though it cannot control glucose. So T2D tends to present with hyperosmolar hyperglycaemia rather than DKA.",
    pearl: "C-peptide is cleaved from proinsulin in equal amounts to insulin, but injected insulin contains none. Low C-peptide therefore confirms loss of endogenous secretion, and high insulin with low C-peptide during hypoglycaemia suggests surreptitious insulin use."
  },
  {
    id: "t2d", name: "Type 2 diabetes", short: "T2D",
    organ: "pancreas", organs: ["pancreas", "liver", "kidney", "heart", "vessels", "eye"],
    area: "Metabolic & endocrine",
    summary: "Hyperglycaemia from insulin resistance combined with progressive β-cell failure. It makes up about 90% of diabetes worldwide and is driven largely by obesity.",
    pathophys: [
      "Visceral and ectopic fat (liver, muscle) → lipotoxicity and inflammation → impaired insulin receptor–PI3K–AKT signalling",
      "Muscle takes up less glucose; the liver keeps producing glucose despite hyperinsulinaemia",
      "β-cells compensate by hypersecreting, then fail (glucolipotoxicity, amyloid deposition) → relative insulin deficiency",
      "Reduced incretin effect, raised glucagon and increased renal glucose reabsorption via SGLT2 worsen hyperglycaemia",
      "Chronic hyperglycaemia → advanced glycation end products and oxidative stress → micro- and macrovascular complications"
    ],
    features: "Often asymptomatic and found on screening. It may present with thirst, polyuria, infections or complications (retinopathy, CKD, neuropathy, MI, stroke, heart failure).",
    diagnosis: "HbA1c ≥48 mmol/mol (6.5%), fasting glucose ≥7.0 mmol/L or 2-h OGTT glucose ≥11.1 mmol/L (repeat if asymptomatic).",
    treatments: [
      { name: "Metformin", action: "Reduces hepatic gluconeogenesis (mitochondrial / AMPK effects)", target: null },
      { name: "SGLT2 inhibitors (empagliflozin, dapagliflozin)", action: "Block proximal tubule glucose reabsorption; cardiorenal protection", target: "sglt2" },
      { name: "Semaglutide / tirzepatide", action: "GLP-1R (± GIPR) agonists: glucose-dependent insulin secretion, weight loss", target: "glp1r" },
      { name: "DPP-4 inhibitors (sitagliptin)", action: "Prolong endogenous GLP-1/GIP", target: "dpp4" },
      { name: "Sulfonylureas (gliclazide)", action: "Close β-cell K_ATP channels → glucose-independent insulin release", target: "katp" },
      { name: "Pioglitazone / insulin", action: "PPARγ insulin sensitiser; insulin when β-cell failure advances", target: "pparg" }
    ],
    targets: ["sglt2", "glp1r", "dpp4", "katp", "pparg", "insr"],
    pathways: ["insulin", "incretin", "pi3k"],
    question: "Why do GLP-1 agonists rarely cause hypoglycaemia while sulfonylureas often do?",
    answer: "Sulfonylureas bind SUR1 and close K_ATP channels directly, bypassing the step where glucose metabolism normally raises ATP. The β-cell depolarises and releases insulin whatever the blood glucose. GLP-1R agonists act through Gs–cAMP–PKA/Epac, which only amplifies insulin release once glucose metabolism has already closed K_ATP channels and depolarised the cell. As glucose falls toward normal, the amplification has nothing to act on and insulin secretion stops. GLP-1 also suppresses glucagon only when glucose is high, so the counter-regulatory response to hypoglycaemia stays intact.",
    pearl: "SGLT2 inhibitors can cause euglycaemic DKA. Glucose stays near normal because it is lost in the urine, while low insulin and high glucagon drive ketogenesis. Withhold them during acute illness, before surgery and during prolonged fasting."
  },
  {
    id: "pdac", name: "Pancreatic ductal adenocarcinoma", short: "PDAC",
    organ: "pancreas", organs: ["pancreas", "liver"],
    area: "Oncology",
    summary: "The main type of pancreatic cancer and one of the deadliest solid tumours, with 5-year survival around 10–13%. Most patients present with unresectable or metastatic disease.",
    pathophys: [
      "Activating KRAS mutation (>90%, mostly G12D/G12V) in ductal cells → constitutive MAPK and PI3K signalling",
      "Stepwise loss of tumour suppressors CDKN2A, TP53 and SMAD4 as PanIN precursors progress to invasive cancer",
      "Dense desmoplastic stroma (activated stellate cells) → hypoxia, poor drug delivery and an immunosuppressive microenvironment",
      "Early perineural and vascular invasion → spread to liver and peritoneum",
      "Cachexia, biliary obstruction and exocrine/endocrine insufficiency follow"
    ],
    features: "Painless obstructive jaundice (head tumours), epigastric pain radiating to the back, weight loss, new-onset diabetes, steatorrhoea and Trousseau migratory thrombophlebitis / VTE.",
    diagnosis: "Pancreas-protocol CT (± EUS-guided biopsy) for staging and resectability; CA19-9 for monitoring (not screening); germline BRCA/HRR testing for all.",
    treatments: [
      { name: "(m)FOLFIRINOX / NALIRIFOX", action: "5-FU (thymidylate synthase), irinotecan (topo I), oxaliplatin", target: "top1" },
      { name: "Gemcitabine + nab-paclitaxel", action: "Nucleoside analogue + microtubule stabiliser", target: "tubulin" },
      { name: "Olaparib (germline BRCA, maintenance)", action: "PARP inhibitor exploiting HR deficiency", target: "parp" },
      { name: "KRAS G12C inhibitors (sotorasib, adagrasib)", action: "Covalent KRAS-G12C inhibitors for the rare (~1–2%) G12C subset", target: "kras" },
      { name: "Pancreatic enzyme replacement (pancreatin)", action: "Replaces lipase/protease for exocrine insufficiency", target: null }
    ],
    targets: ["kras", "parp", "top1", "tyms", "tubulin"],
    pathways: ["mapk", "pi3k", "dna"],
    question: "Why has KRAS been so hard to drug in PDAC even though nearly every tumour carries a KRAS mutation?",
    answer: "KRAS is a small GTPase with no deep pocket. It binds GTP with picomolar affinity, so competitive nucleotide inhibitors were never feasible. The first successes (sotorasib, adagrasib) exploit the reactive cysteine of G12C, locking KRAS in its inactive GDP-bound state. In PDAC, however, G12C is rare and most mutations are G12D or G12V, which lack that cysteine. Newer G12D-selective and pan-RAS (RAS-GTP 'ON-state') inhibitors are in development for this reason. The dense stroma and adaptive MAPK reactivation also limit how well a single targeted drug works.",
    pearl: "Every patient with PDAC should have germline testing. About 5–7% carry BRCA1/2 or other HRR mutations, which predicts sensitivity to platinum and PARP inhibitor maintenance and has implications for relatives."
  },
  {
    id: "acute_pancreatitis", name: "Acute pancreatitis", short: "Pancreatitis",
    organ: "pancreas", organs: ["pancreas", "liver", "lungs", "kidney"],
    area: "GI & hepatology",
    summary: "Acute inflammation of the pancreas caused by premature activation of digestive enzymes, most often from gallstones or alcohol. Most cases are mild, but about a fifth become severe with organ failure.",
    pathophys: [
      "Trigger (gallstone at ampulla, alcohol, hypertriglyceridaemia, ERCP, drugs) → ductal obstruction / acinar Ca²⁺ overload",
      "Trypsinogen is activated to trypsin inside acinar cells → activates other proenzymes (phospholipase A2, elastase)",
      "Autodigestion → acinar necrosis, release of DAMPs and cytokines (IL-1β, IL-6, TNF)",
      "Systemic inflammatory response → capillary leak, hypovolaemia, ARDS, AKI",
      "Fat necrosis saponifies Ca²⁺ (hypocalcaemia); necrotic tissue may become infected"
    ],
    features: "Severe epigastric pain radiating to the back, vomiting, tachycardia. Severe disease brings shock, respiratory and renal failure, and Grey Turner / Cullen signs from retroperitoneal haemorrhage.",
    diagnosis: "Two of three (revised Atlanta): typical pain, lipase or amylase ≥3× upper limit of normal, characteristic imaging; ultrasound for gallstones, triglycerides and Ca²⁺ for cause.",
    treatments: [
      { name: "Goal-directed IV fluids (Hartmann's / Ringer's lactate)", action: "Restore intravascular volume while avoiding overload", target: null },
      { name: "Opioid analgesia", action: "μ-opioid agonists for severe pain", target: "oprm1" },
      { name: "Early enteral nutrition", action: "Maintains gut barrier, reduces infectious complications", target: null },
      { name: "ERCP / cholecystectomy", action: "Clear common bile duct stones (if cholangitis); prevent recurrence", target: null }
    ],
    targets: ["oprm1"],
    pathways: ["nfkb"],
    question: "Why does a gallstone at the ampulla cause the pancreas to digest itself?",
    answer: "Normally pancreatic proteases are secreted as inactive zymogens and only activated in the duodenum, where enteropeptidase cleaves trypsinogen to trypsin. A stone at the ampulla obstructs the pancreatic duct and raises ductal pressure. This disrupts acinar secretion and causes pathological Ca²⁺ signalling. Zymogen granules then fuse with lysosomes, and cathepsin B activates trypsinogen inside the cell. Trypsin activates the other enzymes, overwhelming the protective inhibitor SPINK1, and acinar necrosis and inflammation spread locally and systemically.",
    pearl: "Lipase level does not predict severity. Severity is defined by organ failure: transient (<48 h) in moderately severe disease and persistent (>48 h) in severe disease. Early warning signs are a rising urea and haematocrit, which reflect third-space fluid loss."
  },

  // ───────────── Intestine ─────────────
  {
    id: "crohns", name: "Crohn's disease", short: "Crohn's",
    organ: "intestine", organs: ["intestine", "joints", "skin", "eye", "liver"],
    area: "GI & hepatology",
    summary: "Chronic relapsing transmural inflammatory bowel disease that can affect any part of the GI tract from mouth to anus, most often the terminal ileum. It typically begins between ages 15 and 35.",
    pathophys: [
      "Genetic susceptibility (NOD2, ATG16L1, IL23R variants) impairs bacterial sensing and autophagy in Paneth cells and macrophages",
      "Barrier dysfunction plus dysbiosis → excess microbial antigen reaches the lamina propria",
      "Dendritic cells release IL-12 and IL-23 → Th1 and Th17 responses with TNF, IFN-γ and IL-17",
      "Transmural, patchy (skip-lesion) inflammation with non-caseating granulomas",
      "Chronic inflammation → fibrosis (strictures), fistulae, abscesses and malabsorption"
    ],
    features: "Abdominal pain, diarrhoea (often non-bloody), weight loss, perianal disease (fistulae, abscesses), mouth ulcers. Extraintestinal: arthritis, erythema nodosum, uveitis, gallstones, B12 deficiency.",
    diagnosis: "Ileocolonoscopy with biopsies (patchy inflammation, granulomas), MR enterography, faecal calprotectin and CRP.",
    treatments: [
      { name: "Budesonide / prednisolone", action: "Glucocorticoids for induction only", target: "gr" },
      { name: "Infliximab / adalimumab", action: "Anti-TNF monoclonal antibodies", target: "tnf" },
      { name: "Risankizumab, mirikizumab, guselkumab; ustekinumab", action: "IL-23 p19 antibodies; ustekinumab blocks shared IL-12/23 p40", target: "il23" },
      { name: "Vedolizumab", action: "Anti-α4β7 integrin: blocks lymphocyte homing to gut", target: null },
      { name: "Upadacitinib", action: "JAK1-selective inhibitor", target: "jak" },
      { name: "Azathioprine / methotrexate", action: "Immunomodulators for maintenance; reduce anti-drug antibodies", target: "dhfr" }
    ],
    targets: ["tnf", "il23", "jak", "gr", "dhfr"],
    pathways: ["th17", "nfkb", "jakstat", "tcell"],
    question: "Why do IL-23 inhibitors work in Crohn's disease while IL-17A inhibitors made it worse?",
    answer: "IL-23 sits upstream: it expands and maintains pathogenic Th17 and innate lymphoid cells, which produce IL-17, IL-22, GM-CSF and IFN-γ. Blocking IL-23 switches off this whole pathogenic programme. In the gut, IL-17A also has a protective barrier role. It maintains tight junctions (occludin) and antimicrobial peptide production by epithelial cells, partly independently of IL-23. Secukinumab removed this protection without controlling the other effector cytokines, and Crohn's disease worsened. So IL-23 blockade treats both psoriasis and IBD, whereas IL-17 inhibitors are cautioned in IBD.",
    pearl: "Smoking worsens Crohn's disease but appears protective in ulcerative colitis. Stopping smoking is one of the most effective interventions in Crohn's."
  },
  {
    id: "uc", name: "Ulcerative colitis", short: "UC",
    organ: "intestine", organs: ["intestine", "liver", "joints", "skin", "eye"],
    area: "GI & hepatology",
    summary: "Chronic inflammatory bowel disease confined to the colonic mucosa, starting at the rectum and extending continuously proximally. It carries a long-term risk of colorectal cancer.",
    pathophys: [
      "Epithelial barrier defects and a thinned mucus layer let luminal bacteria contact the mucosa",
      "Innate activation → atypical Th2-like (IL-13) and Th17 responses with TNF and IL-23 signalling",
      "Neutrophil influx into crypts → crypt abscesses, goblet-cell depletion",
      "Continuous mucosal ulceration from rectum upward (proctitis → left-sided → pancolitis)",
      "Long-standing inflammation → dysplasia and colorectal cancer; toxic megacolon in severe flares"
    ],
    features: "Bloody diarrhoea, urgency, tenesmus, crampy abdominal pain. Extraintestinal: primary sclerosing cholangitis, peripheral arthritis, episcleritis, pyoderma gangrenosum.",
    diagnosis: "Colonoscopy with biopsy (continuous mucosal inflammation, crypt architectural distortion), faecal calprotectin, stool cultures and C. difficile testing to exclude infection.",
    treatments: [
      { name: "Mesalazine (5-ASA), oral ± rectal", action: "Topical mucosal anti-inflammatory; first-line in mild–moderate UC", target: null },
      { name: "Prednisolone / IV hydrocortisone", action: "Glucocorticoid induction for flares", target: "gr" },
      { name: "Infliximab / adalimumab / golimumab", action: "Anti-TNF antibodies", target: "tnf" },
      { name: "Tofacitinib / upadacitinib / filgotinib", action: "Oral JAK inhibitors", target: "jak" },
      { name: "Ozanimod / etrasimod", action: "S1P receptor modulators: trap lymphocytes in lymph nodes", target: "s1p1" },
      { name: "Vedolizumab; mirikizumab / guselkumab / risankizumab", action: "Gut-selective anti-integrin; IL-23 p19 antibodies", target: "il23" }
    ],
    targets: ["tnf", "jak", "s1p1", "il23", "gr"],
    pathways: ["jakstat", "th17", "nfkb"],
    question: "How do S1P receptor modulators reduce colonic inflammation without killing immune cells?",
    answer: "Lymphocytes leave lymph nodes by following a sphingosine-1-phosphate gradient that is high in lymph and blood. They sense it through S1P1 receptors. Ozanimod and etrasimod are functional antagonists: they bind S1P1, trigger its internalisation and degradation, and leave lymphocytes blind to the exit signal. Naive and central memory T cells are retained in lymph nodes, so fewer activated cells reach the inflamed colon. The effect is reversible and peripheral lymphocyte counts recover after stopping. Atrial S1P1 expression explains first-dose bradycardia and AV block, and macular oedema is another class effect.",
    pearl: "Acute severe UC (≥6 bloody stools/day plus systemic toxicity) is a medical emergency. Give IV steroids and assess on day 3. Non-responders need rescue infliximab or ciclosporin, or colectomy."
  },
  {
    id: "crc", name: "Colorectal cancer", short: "CRC",
    organ: "intestine", organs: ["intestine", "liver", "lungs"],
    area: "Oncology",
    summary: "Adenocarcinoma of the colon or rectum, one of the most common cancers and causes of cancer death worldwide. Incidence is rising in adults under 50.",
    pathophys: [
      "Chromosomal instability pathway: APC loss → constitutive Wnt/β-catenin → adenoma",
      "KRAS activation → larger adenoma; TP53 and SMAD4 loss → invasive carcinoma",
      "Alternative pathways: mismatch repair deficiency (Lynch or MLH1 hypermethylation) → microsatellite instability (MSI-H); serrated pathway with BRAF V600E",
      "Local invasion → lymph nodes → portal venous spread to liver (rectal cancer can also reach the lungs)",
      "Molecular subtype (RAS, BRAF, MSI, HER2) and sidedness determine targeted therapy"
    ],
    features: "Change in bowel habit, rectal bleeding, iron-deficiency anaemia (especially right-sided), weight loss, obstruction; many are found by screening.",
    diagnosis: "Colonoscopy and biopsy; CT chest/abdomen/pelvis and MRI pelvis (rectal) for staging; tumour RAS, BRAF, MMR/MSI and HER2 testing; CEA for monitoring; FIT for screening.",
    treatments: [
      { name: "FOLFOX / CAPOX / FOLFIRI", action: "Fluoropyrimidine (thymidylate synthase) + oxaliplatin or irinotecan", target: "tyms" },
      { name: "Cetuximab / panitumumab", action: "Anti-EGFR antibodies (RAS wild-type, left-sided)", target: "egfr" },
      { name: "Bevacizumab", action: "Anti-VEGF-A antiangiogenic", target: "vegf" },
      { name: "Pembrolizumab / nivolumab ± ipilimumab", action: "Checkpoint inhibitors for MSI-H/dMMR disease", target: "pd1" },
      { name: "Encorafenib + cetuximab", action: "BRAF V600E inhibitor plus EGFR blockade", target: "braf" },
      { name: "Sotorasib / adagrasib + anti-EGFR", action: "KRAS G12C inhibitors", target: "kras" }
    ],
    targets: ["tyms", "egfr", "vegf", "pd1", "ctla4", "braf", "kras", "her2", "top1"],
    pathways: ["mapk", "dna", "tcell"],
    question: "Why must BRAF inhibitors be combined with an EGFR antibody in BRAF V600E colorectal cancer, unlike in melanoma?",
    answer: "In melanoma, BRAF V600E inhibitors (± MEK) suppress MAPK signalling effectively. In colorectal epithelium, BRAF inhibition removes ERK-dependent negative feedback, and EGFR is highly expressed there. Its signalling rebounds, reactivating RAS and CRAF and restoring ERK output, so vemurafenib alone produced few responses. Adding cetuximab blocks that EGFR feedback loop, which is why encorafenib + cetuximab is the standard combination. The same EGFR feedback explains why KRAS G12C inhibitors are paired with an anti-EGFR antibody in CRC.",
    pearl: "MSI-H/dMMR tumours (about 15% of early-stage CRC, about 5% of metastatic) carry many neoantigens and respond very well to PD-1 blockade. Test every tumour for MMR, which also screens for Lynch syndrome."
  },
  {
    id: "coeliac", name: "Coeliac disease", short: "Coeliac",
    organ: "intestine", organs: ["intestine", "skin", "joints", "blood"],
    area: "GI & hepatology",
    summary: "Immune-mediated enteropathy triggered by dietary gluten in genetically susceptible people. It affects about 1% of the population, and most cases are undiagnosed.",
    pathophys: [
      "Gliadin peptides resist digestion (proline/glutamine-rich) and cross the epithelium",
      "Tissue transglutaminase 2 (tTG) deamidates glutamine → glutamate, increasing binding to HLA-DQ2 or DQ8",
      "Gliadin-specific CD4⁺ T cells release IFN-γ and help B cells make anti-tTG and anti-deamidated gliadin antibodies",
      "Epithelial IL-15 activates cytotoxic intraepithelial lymphocytes (NKG2D) → enterocyte killing",
      "Villous atrophy and crypt hyperplasia (proximal small bowel) → malabsorption"
    ],
    features: "Diarrhoea, bloating, weight loss, iron/folate deficiency anaemia, osteoporosis, fatigue, dermatitis herpetiformis. It is associated with T1D and autoimmune thyroid disease, and rarely with enteropathy-associated T-cell lymphoma.",
    diagnosis: "IgA anti-tTG with total IgA on a gluten-containing diet, confirmed by duodenal biopsy (intraepithelial lymphocytosis, villous atrophy; Marsh grading).",
    treatments: [
      { name: "Strict lifelong gluten-free diet", action: "Removes antigen; mucosa heals and antibodies fall", target: null },
      { name: "Iron, folate, vitamin D / calcium", action: "Correct deficiencies and protect bone", target: null },
      { name: "Dapsone", action: "Neutrophil-directed therapy for dermatitis herpetiformis", target: null },
      { name: "Budesonide (refractory coeliac disease)", action: "Gut-targeted glucocorticoid", target: "gr" }
    ],
    targets: ["gr"],
    pathways: ["tcell"],
    question: "Why does a negative HLA-DQ2/DQ8 test nearly exclude coeliac disease, while anti-tTG testing requires gluten in the diet?",
    answer: "Only HLA-DQ2 or DQ8 molecules can present deamidated gliadin peptides strongly enough to activate pathogenic CD4⁺ T cells. Almost every patient carries one of them, so their absence gives a very high negative predictive value. Carriage is common (about 30–40% of the population), so a positive result means little. Anti-tTG and endomysial antibodies are made by B cells that depend on help from gliadin-specific T cells. If gluten is withdrawn, T-cell help stops and antibody levels fall, so testing on a gluten-free diet gives false negatives.",
    pearl: "Selective IgA deficiency is 10–15 times more common in coeliac disease and causes false-negative IgA anti-tTG. Always measure total IgA, and use IgG-based tests (IgG DGP or tTG) if it is low."
  },

  // ───────────── Kidney ─────────────
  {
    id: "ckd", name: "Chronic kidney disease (incl. diabetic kidney disease)", short: "CKD",
    organ: "kidney", organs: ["kidney", "heart", "vessels", "blood", "joints"],
    area: "Cardiovascular & renal",
    summary: "Persistent loss of kidney function or kidney damage for more than 3 months. It affects about 10% of adults, and diabetes and hypertension are the leading causes. It sharply increases cardiovascular risk.",
    pathophys: [
      "Diabetes/hypertension → glomerular hyperfiltration and intraglomerular hypertension (efferent constriction by angiotensin II; reduced tubuloglomerular feedback as SGLT2 reabsorbs more Na⁺)",
      "Podocyte injury and glomerular basement membrane thickening → albuminuria",
      "Mineralocorticoid receptor overactivation, inflammation and TGF-β → mesangial expansion and fibrosis",
      "Nephron loss → remaining nephrons hyperfilter further → glomerulosclerosis and tubulointerstitial fibrosis",
      "Falling GFR → reduced EPO (anaemia), reduced 1α-hydroxylation and phosphate retention (CKD-MBD), acidosis, hyperkalaemia, uraemia"
    ],
    features: "Often silent until advanced. Then fatigue, oedema, hypertension, anaemia, pruritus, bone disease, and eventually uraemia needing dialysis or transplant. Cardiovascular death is more common than kidney failure.",
    diagnosis: "eGFR <60 mL/min/1.73 m² and/or albuminuria (urine albumin:creatinine ratio ≥3 mg/mmol, ≈30 mg/g) for >3 months; staged by KDIGO G and A categories.",
    treatments: [
      { name: "ACE inhibitors / ARBs (ramipril, losartan)", action: "Dilate efferent arteriole, lower intraglomerular pressure and albuminuria", target: "at1r" },
      { name: "SGLT2 inhibitors (dapagliflozin, empagliflozin)", action: "Restore tubuloglomerular feedback → afferent constriction; slow eGFR decline", target: "sglt2" },
      { name: "Finerenone", action: "Non-steroidal MR antagonist; reduces inflammation and fibrosis in diabetic CKD", target: "mr" },
      { name: "Semaglutide", action: "GLP-1R agonist with kidney outcome benefit in T2D with CKD", target: "glp1r" },
      { name: "ESAs / HIF-PH inhibitors + iron", action: "Treat renal anaemia", target: "epor" },
      { name: "Statins; phosphate binders", action: "Cardiovascular risk reduction; CKD-MBD control", target: "hmgcr" }
    ],
    targets: ["at1r", "ace", "sglt2", "mr", "glp1r", "epor", "hmgcr"],
    pathways: ["raas"],
    question: "Why does eGFR dip after starting an ACE inhibitor or SGLT2 inhibitor, and why is that a sign the drug is working?",
    answer: "Both drugs lower intraglomerular pressure, from opposite sides of the glomerulus. ACE inhibitors and ARBs remove angiotensin II-mediated efferent arteriolar constriction. SGLT2 inhibitors increase Na⁺ delivery to the macula densa, which restores tubuloglomerular feedback and constricts the afferent arteriole. Either way, filtration pressure and GFR fall acutely, typically by up to about 30%, and this is haemodynamic rather than structural injury. Lower pressure reduces hyperfiltration-driven podocyte stress and albuminuria, so the long-term slope of eGFR decline flattens. Continue the drug unless the fall exceeds about 30% or there is hyperkalaemia or volume depletion.",
    pearl: "The 'pillars' of diabetic kidney disease therapy now stack: RAS blockade + SGLT2 inhibitor + finerenone (if albuminuric) + GLP-1R agonist. Each acts on a different mechanism (haemodynamic, MR-driven fibrosis, metabolic/inflammatory)."
  },
  {
    id: "aki", name: "Acute kidney injury", short: "AKI",
    organ: "kidney", organs: ["kidney", "heart"],
    area: "Cardiovascular & renal",
    summary: "Abrupt fall in kidney function over hours to days, common in hospital (especially with sepsis, surgery and nephrotoxins). It is associated with higher mortality and later CKD.",
    pathophys: [
      "Pre-renal: hypovolaemia, sepsis, heart failure or drugs reduce glomerular perfusion pressure",
      "Intrinsic: sustained ischaemia or toxins (aminoglycosides, contrast, myoglobin) → acute tubular necrosis",
      "Tubular cell death → casts obstruct tubules; back-leak of filtrate; inflammation",
      "Post-renal: urinary tract obstruction (prostate, stones) raises tubular pressure and opposes filtration",
      "Falling GFR → retention of K⁺, H⁺, urea and fluid → hyperkalaemia, acidosis, pulmonary oedema, uraemia"
    ],
    features: "Oliguria, fluid overload, hyperkalaemia (arrhythmia), metabolic acidosis, uraemic encephalopathy or pericarditis. It is often asymptomatic and detected on bloods.",
    diagnosis: "KDIGO criteria: creatinine rise ≥26.5 µmol/L (0.3 mg/dL) within 48 h, or ≥1.5× baseline within 7 days, or urine output <0.5 mL/kg/h for 6 h; urinalysis and renal tract ultrasound to find the cause.",
    treatments: [
      { name: "IV fluids (pre-renal)", action: "Restore renal perfusion", target: null },
      { name: "Stop nephrotoxins and RAS blockers (NSAIDs, ACEi/ARB, diuretics, metformin)", action: "Remove insults to glomerular haemodynamics or tubules", target: "cox" },
      { name: "Calcium gluconate + insulin–dextrose + salbutamol", action: "Membrane stabilisation; shift K⁺ into cells (Na⁺/K⁺-ATPase)", target: "insr" },
      { name: "Furosemide (fluid overload only)", action: "Loop diuretic; does not improve renal recovery", target: "nkcc2" },
      { name: "Catheter / nephrostomy; renal replacement therapy", action: "Relieve obstruction; dialysis for refractory K⁺, acidosis, overload, uraemia", target: null }
    ],
    targets: ["cox", "ace", "at1r", "insr", "adrb2", "nkcc2"],
    pathways: ["raas", "eicosanoid"],
    question: "Why is the 'triple whammy' of an NSAID, ACE inhibitor and diuretic so dangerous for the kidney?",
    answer: "When perfusion falls, the glomerulus keeps its filtration pressure in two ways. Prostaglandins (PGE2, PGI2) dilate the afferent arteriole, and angiotensin II constricts the efferent arteriole. NSAIDs inhibit COX and remove the afferent dilation. ACE inhibitors or ARBs remove the efferent constriction. A diuretic adds volume depletion, so perfusion pressure is already low. Together they collapse glomerular capillary pressure and GFR falls abruptly, especially during intercurrent illness such as diarrhoea or vomiting. This is why 'sick day rules' advise pausing these drugs.",
    pearl: "In hyperkalaemia, IV calcium protects the heart within minutes but does not lower K⁺. Insulin and β2 agonists shift K⁺ into cells temporarily. Only binders, diuresis or dialysis remove K⁺ from the body."
  },
  {
    id: "adpkd", name: "Autosomal dominant polycystic kidney disease", short: "ADPKD",
    organ: "kidney", organs: ["kidney", "liver", "brain", "heart"],
    area: "Cardiovascular & renal",
    summary: "The most common inherited kidney disease, affecting about 1 in 1000 people. Progressive growth of countless kidney cysts typically leads to kidney failure by middle age.",
    pathophys: [
      "Germline mutation in PKD1 (polycystin-1, most cases, more severe) or PKD2 (polycystin-2); a second somatic hit in individual tubular cells",
      "Loss of polycystin function in the primary cilium → reduced intracellular Ca²⁺",
      "Low Ca²⁺ plus vasopressin V2 receptor–Gs signalling → raised cAMP",
      "cAMP drives epithelial proliferation (via B-Raf/MAPK) and CFTR-mediated Cl⁻ and fluid secretion into cysts",
      "Expanding cysts compress normal parenchyma → RAAS activation, hypertension, fibrosis and GFR loss"
    ],
    features: "Hypertension (often early), flank pain, haematuria, cyst infection or haemorrhage, kidney stones, enlarging palpable kidneys. Extrarenal: liver cysts, intracranial aneurysms, mitral valve prolapse.",
    diagnosis: "Renal ultrasound with age-specific cyst-number criteria in at-risk individuals (MRI if equivocal); total kidney volume (Mayo class) predicts progression; genetic testing if unclear.",
    treatments: [
      { name: "Tolvaptan", action: "V2 receptor antagonist: lowers cAMP, slows cyst growth and eGFR decline", target: "v2r" },
      { name: "ACE inhibitors / ARBs", action: "Blood pressure control (target ≤110/75 in younger patients with preserved function)", target: "ace" },
      { name: "High water intake, low-salt diet", action: "Suppresses vasopressin release", target: null },
      { name: "Analgesia avoiding NSAIDs", action: "Pain control without nephrotoxicity", target: null }
    ],
    targets: ["v2r", "ace", "at1r", "cftr"],
    pathways: ["gs", "raas", "mapk"],
    question: "How does blocking the vasopressin V2 receptor slow cyst growth in ADPKD?",
    answer: "Cyst-lining cells derive mainly from the collecting duct and distal nephron, where the V2 receptor is highly expressed. Vasopressin binding activates Gs and adenylyl cyclase, and because polycystin loss lowers Ca²⁺ (which normally restrains cAMP), cAMP accumulates. In cystic epithelium cAMP stimulates proliferation through B-Raf–ERK and drives CFTR chloride secretion with water following into the cyst. Tolvaptan blocks the V2 receptor, lowering cAMP and so slowing both cell proliferation and fluid secretion. The expected side effect is aquaresis, with polyuria, nocturia and thirst.",
    pearl: "Tolvaptan can cause idiosyncratic hepatotoxicity, so liver enzymes are monitored frequently, especially in the first 18 months. Screen for intracranial aneurysm (MR angiography) in patients with a family history of aneurysm or subarachnoid haemorrhage."
  },
  {
    id: "rcc", name: "Renal cell carcinoma", short: "RCC",
    organ: "kidney", organs: ["kidney", "lungs", "blood"],
    area: "Oncology",
    summary: "Cancer of the renal tubular epithelium; clear-cell RCC makes up about 75%. It is increasingly found incidentally on imaging, and smoking, obesity and hypertension are risk factors.",
    pathophys: [
      "Biallelic inactivation of VHL (sporadic or von Hippel–Lindau syndrome) in clear-cell RCC",
      "Without VHL, HIF-α (especially HIF-2α) escapes ubiquitination and proteasomal degradation",
      "HIF-2α drives transcription of VEGF, PDGF-β, TGF-α, GLUT1 and EPO → pseudohypoxic programme",
      "Intense angiogenesis → highly vascular tumour; lipid and glycogen accumulation gives the clear cytoplasm",
      "Immune-infiltrated but immunosuppressed microenvironment → responsive to checkpoint inhibitors"
    ],
    features: "Often incidental. The classic triad of haematuria, flank pain and mass is uncommon. Paraneoplastic: polycythaemia (EPO), hypercalcaemia (PTHrP), hypertension, fever; varicocele from renal vein invasion.",
    diagnosis: "Contrast CT (enhancing renal mass) ± biopsy; staging CT chest; IMDC risk score in metastatic disease.",
    treatments: [
      { name: "Partial / radical nephrectomy; adjuvant pembrolizumab", action: "Surgery for localised disease; PD-1 blockade for high-risk resected disease", target: "pd1" },
      { name: "Pembrolizumab + axitinib / lenvatinib; nivolumab + cabozantinib", action: "PD-1 inhibitor + VEGFR TKI first-line combinations", target: "vegf" },
      { name: "Nivolumab + ipilimumab", action: "Dual PD-1 + CTLA-4 checkpoint blockade", target: "ctla4" },
      { name: "Belzutifan", action: "HIF-2α inhibitor (later-line; VHL disease tumours)", target: null },
      { name: "Everolimus", action: "mTORC1 inhibitor (later-line)", target: "mtor" }
    ],
    targets: ["vegf", "pd1", "ctla4", "mtor"],
    pathways: ["pi3k", "tcell"],
    question: "Why is clear-cell RCC so sensitive to VEGF pathway inhibitors, and how does belzutifan act further upstream?",
    answer: "VHL is the substrate-recognition part of an E3 ubiquitin ligase that tags hydroxylated HIF-α for destruction in normoxia. When VHL is lost, HIF-2α accumulates and transcribes VEGF continuously, so the tumour is addicted to angiogenesis. Inhibiting VEGFR tyrosine kinases (axitinib, cabozantinib, lenvatinib) removes this vascular support. Belzutifan binds HIF-2α and prevents it from dimerising with HIF-1β (ARNT), so it switches off the whole programme (VEGF, cyclin D1, GLUT1, EPO) at the source. Its on-target side effect is anaemia, because HIF-2α normally drives renal EPO production.",
    pearl: "RCC is resistant to conventional chemotherapy and radiosensitivity is modest. Systemic treatment is built on immunotherapy and anti-angiogenic drugs."
  },

  // ───────────── Bladder & prostate ─────────────
  {
    id: "bph", name: "Benign prostatic hyperplasia", short: "BPH",
    organ: "bladder", organs: ["bladder"],
    area: "Reproductive & urology",
    summary: "Non-malignant enlargement of the prostate transition zone that causes lower urinary tract symptoms in ageing men. It affects about half of men by 60 and most by 85.",
    pathophys: [
      "Testosterone is converted by 5α-reductase type 2 (stromal cells) to dihydrotestosterone (DHT)",
      "DHT binds the androgen receptor → growth factors → stromal and glandular hyperplasia of the transition (periurethral) zone",
      "Static component: enlarged gland compresses the prostatic urethra",
      "Dynamic component: α1A-adrenoceptor-mediated smooth-muscle tone in the prostate and bladder neck",
      "Outflow obstruction → detrusor hypertrophy, storage symptoms, incomplete emptying, retention"
    ],
    features: "Voiding symptoms (hesitancy, weak stream, straining, terminal dribbling) and storage symptoms (frequency, urgency, nocturia). Complications: acute urinary retention, UTI, stones, obstructive uropathy.",
    diagnosis: "Symptom score (IPSS), digital rectal examination (smooth, enlarged), urinalysis, PSA with counselling, flow rate and post-void residual.",
    treatments: [
      { name: "Tamsulosin / alfuzosin / doxazosin", action: "α1-adrenoceptor antagonists: relax prostate smooth muscle (fast, days)", target: "adra1" },
      { name: "Finasteride / dutasteride", action: "5α-reductase inhibitors: shrink prostate by about 20–30% over months", target: "srd5a" },
      { name: "Tadalafil", action: "PDE5 inhibitor: relaxes prostate/bladder smooth muscle", target: "pde5" },
      { name: "Antimuscarinic or mirabegron add-on", action: "Treat persistent storage symptoms", target: "m3" },
      { name: "TURP / laser enucleation", action: "Surgical removal of obstructing tissue", target: null }
    ],
    targets: ["adra1", "srd5a", "pde5", "m3", "adrb3", "ar"],
    pathways: ["gq", "nuclear"],
    question: "Why does tamsulosin work within days whereas finasteride takes months, and why combine them?",
    answer: "Tamsulosin blocks α1A receptors on prostatic and bladder-neck smooth muscle. This relieves the dynamic component of obstruction straight away, but the gland does not shrink. Finasteride inhibits type 2 5α-reductase, lowering intraprostatic DHT by about 70–90%. Epithelial atrophy and a 20–30% fall in volume take 6–12 months. Combination therapy gives fast relief plus a long-term reduction in progression, acute retention and need for surgery, especially in large glands (over about 30–40 mL).",
    pearl: "5α-reductase inhibitors roughly halve PSA after about 6 months, so double the measured PSA when interpreting it for cancer. Tamsulosin can cause intraoperative floppy iris syndrome; tell the ophthalmologist before cataract surgery."
  },
  {
    id: "prostate_ca", name: "Prostate cancer", short: "Prostate Ca",
    organ: "bladder", organs: ["bladder", "joints"],
    area: "Oncology",
    summary: "Adenocarcinoma usually arising in the peripheral zone, the most common cancer in men in many countries. Its course ranges from indolent to lethal metastatic disease.",
    pathophys: [
      "Androgen receptor signalling drives prostate epithelial growth and PSA production",
      "Genomic events (TMPRSS2–ERG fusion, PTEN loss, NKX3.1 loss) → invasive carcinoma",
      "Spread to pelvic nodes and osteoblastic bone metastases (spine, pelvis)",
      "Androgen deprivation works initially but cells adapt → castration-resistant prostate cancer (CRPC)",
      "CRPC mechanisms: AR amplification/mutation, AR splice variants (AR-V7), intratumoural androgen synthesis; ~20–25% have DNA repair (HRR) defects"
    ],
    features: "Usually asymptomatic (PSA-detected). Advanced disease: LUTS, haematuria, bone pain, pathological fracture, spinal cord compression.",
    diagnosis: "PSA → multiparametric MRI → targeted biopsy with ISUP Grade Group (Gleason); PSMA-PET or CT/bone scan for staging; germline/somatic HRR testing in metastatic disease.",
    treatments: [
      { name: "Active surveillance; radical prostatectomy or radiotherapy", action: "Low-risk monitoring; curative local therapy", target: null },
      { name: "GnRH agonists (leuprorelin, goserelin) / antagonists (degarelix, relugolix)", action: "Androgen deprivation therapy (ADT)", target: "gnrhr" },
      { name: "Enzalutamide / apalutamide / darolutamide", action: "Second-generation AR antagonists", target: "ar" },
      { name: "Abiraterone + prednisolone", action: "CYP17A1 inhibitor: blocks adrenal and intratumoural androgen synthesis", target: null },
      { name: "Docetaxel / cabazitaxel", action: "Taxane microtubule stabilisers", target: "tubulin" },
      { name: "Olaparib; ¹⁷⁷Lu-PSMA-617", action: "PARP inhibitor (HRR-mutated mCRPC); PSMA-targeted radioligand", target: "parp" }
    ],
    targets: ["gnrhr", "ar", "parp", "tubulin", "rankl"],
    pathways: ["nuclear", "dna"],
    question: "Why does starting a GnRH agonist cause a tumour flare, and why don't antagonists?",
    answer: "Native GnRH is released in pulses. A continuous agonist first stimulates pituitary GnRH receptors, causing an LH surge and testosterone rise for 1–2 weeks. Only after that do receptor desensitisation and downregulation suppress LH and testosterone to castrate levels. That initial surge can worsen bone pain or precipitate cord compression or urinary obstruction in high-volume disease, so an AR antagonist (e.g. bicalutamide) is given for cover. GnRH antagonists such as degarelix and relugolix block the receptor directly. Testosterone falls within days without any surge.",
    pearl: "Abiraterone blocks CYP17A1, which reduces cortisol, so ACTH rises and drives mineralocorticoid excess (hypertension, hypokalaemia, oedema). Low-dose prednisolone is co-prescribed to suppress ACTH."
  },
  {
    id: "oab", name: "Overactive bladder", short: "OAB",
    organ: "bladder", organs: ["bladder", "brain"],
    area: "Reproductive & urology",
    summary: "A symptom syndrome of urinary urgency, usually with frequency and nocturia, with or without urge incontinence, in the absence of infection. It affects roughly one in six adults, and prevalence rises with age.",
    pathophys: [
      "Parasympathetic (pelvic nerve) ACh → M3 receptors → Gq–Ca²⁺ → detrusor contraction (voiding)",
      "Sympathetic noradrenaline → β3-adrenoceptors → cAMP → detrusor relaxation (storage)",
      "Increased afferent signalling from urothelium and suburothelium, and spontaneous myogenic activity",
      "Reduced central inhibition (ageing, stroke, Parkinson's, MS) → involuntary detrusor contractions in the filling phase",
      "Detrusor overactivity → urgency, frequency and urge incontinence"
    ],
    features: "Urgency, frequency (>8 voids/day), nocturia, urge incontinence; large impact on quality of life, sleep and falls risk in the elderly.",
    diagnosis: "Clinical history and bladder diary; urinalysis to exclude UTI/haematuria; post-void residual; urodynamics only if considering invasive therapy.",
    treatments: [
      { name: "Bladder training, fluid/caffeine management, pelvic floor exercises", action: "First-line conservative therapy", target: null },
      { name: "Solifenacin / oxybutynin / tolterodine / trospium", action: "Muscarinic (M3) antagonists", target: "m3" },
      { name: "Mirabegron / vibegron", action: "β3-adrenoceptor agonists: relax detrusor during filling", target: "adrb3" },
      { name: "OnabotulinumtoxinA (intradetrusor)", action: "Blocks ACh release (SNAP-25 cleavage)", target: null },
      { name: "Sacral or tibial nerve stimulation", action: "Neuromodulation of bladder reflexes", target: null }
    ],
    targets: ["m3", "adrb3"],
    pathways: ["gq", "gs"],
    question: "Why are β3 agonists often preferred over antimuscarinics in frail older patients?",
    answer: "Antimuscarinics block M3 in the detrusor but also block muscarinic receptors elsewhere. Effects include dry mouth (salivary M3), constipation, blurred vision and, importantly, central M1 blockade causing confusion. Cumulative anticholinergic burden has been associated with cognitive decline and dementia risk in observational studies. Mirabegron and vibegron instead activate β3 receptors on detrusor smooth muscle, raising cAMP and relaxing it during filling. They avoid cholinergic side effects. Trospium, a quaternary amine that crosses the blood–brain barrier poorly, is an alternative antimuscarinic.",
    pearl: "Mirabegron moderately inhibits CYP2D6 and can raise blood pressure. Check BP and avoid it in severe uncontrolled hypertension."
  },

  // ───────────── Reproductive ─────────────
  {
    id: "endometriosis", name: "Endometriosis", short: "Endometriosis",
    organ: "reproductive", organs: ["reproductive", "intestine", "bladder"],
    area: "Reproductive & urology",
    summary: "Oestrogen-dependent chronic inflammatory condition in which endometrium-like tissue grows outside the uterus. It affects about 10% of women of reproductive age, and diagnosis is often delayed by years.",
    pathophys: [
      "Retrograde menstruation (plus coelomic metaplasia, lymphatic spread) deposits endometrial cells on pelvic peritoneum and ovaries",
      "Ectopic lesions express aromatase → local oestradiol synthesis; progesterone resistance (reduced PR-B)",
      "Oestradiol → COX-2 → PGE2, which in turn induces aromatase (positive feedback loop)",
      "Cyclical bleeding and inflammation (IL-1β, TNF, macrophages) → nerve sprouting, adhesions, fibrosis",
      "Distorted pelvic anatomy and hostile peritoneal environment → pain and subfertility; ovarian endometriomas"
    ],
    features: "Cyclical pelvic pain, severe dysmenorrhoea, deep dyspareunia, dyschezia or dysuria, subfertility; endometriomas ('chocolate cysts'); deep disease can involve bowel and bladder.",
    diagnosis: "Clinical diagnosis supported by transvaginal ultrasound or MRI (endometriomas, deep disease); laparoscopy with histology when imaging is negative or surgery is planned.",
    treatments: [
      { name: "NSAIDs (naproxen, mefenamic acid)", action: "COX inhibition → less PGE2-driven pain", target: "cox" },
      { name: "Combined hormonal contraception (continuous)", action: "Suppresses ovulation and endometrial proliferation", target: "er" },
      { name: "Progestogens (dienogest, desogestrel, LNG-IUS)", action: "Decidualisation and atrophy of lesions", target: "pr" },
      { name: "GnRH antagonists (relugolix combination therapy, elagolix) / agonists + add-back", action: "Lower oestradiol to a therapeutic window", target: "gnrhr" },
      { name: "Laparoscopic excision / ablation", action: "Removes lesions; may improve pain and fertility", target: null }
    ],
    targets: ["cox", "pr", "gnrhr", "er", "aromatase"],
    pathways: ["eicosanoid", "nuclear"],
    question: "Why is add-back hormone therapy given with GnRH-targeted treatment for endometriosis, and why doesn't it reactivate the disease?",
    answer: "GnRH agonists (after desensitisation) or antagonists suppress LH and FSH, lowering ovarian oestradiol and starving lesions of their main growth signal. Profound hypo-oestrogenism also causes hot flushes and loss of bone mineral density, which limits unopposed use to about 6 months. The 'oestrogen threshold' hypothesis holds that lesions need higher oestradiol levels than bone and the brain do. Low-dose add-back oestradiol with a progestogen keeps levels in a window that protects bone and reduces vasomotor symptoms while still keeping lesions suppressed. Relugolix combination therapy builds this add-back into a single daily tablet.",
    pearl: "Disease severity on laparoscopy correlates poorly with pain. Small deep lesions with nerve infiltration can be very painful, while large endometriomas may cause few symptoms."
  },
  {
    id: "pcos", name: "Polycystic ovary syndrome", short: "PCOS",
    organ: "reproductive", organs: ["reproductive", "pancreas", "liver", "skin"],
    area: "Reproductive & urology",
    summary: "The most common endocrine disorder in women of reproductive age (about 8–13%). It combines hyperandrogenism, ovulatory dysfunction and metabolic risk.",
    pathophys: [
      "Increased GnRH pulse frequency → raised LH relative to FSH",
      "LH stimulates theca cells → excess androstenedione/testosterone",
      "Insulin resistance → hyperinsulinaemia synergises with LH on theca androgen production and lowers hepatic SHBG (more free testosterone)",
      "Intraovarian androgen excess and relative FSH deficiency → follicular arrest (many small antral follicles, high AMH), anovulation",
      "Chronic anovulation → unopposed oestrogen on endometrium; insulin resistance → T2D, dyslipidaemia, MASLD"
    ],
    features: "Oligo/amenorrhoea, subfertility, hirsutism, acne, androgenic alopecia, weight gain, acanthosis nigricans. Long-term: T2D, endometrial hyperplasia/cancer, sleep apnoea, depression.",
    diagnosis: "Rotterdam criteria (2 of 3): oligo/anovulation, clinical or biochemical hyperandrogenism, polycystic ovarian morphology on ultrasound (or raised AMH in adults); exclude thyroid disease, hyperprolactinaemia, non-classic CAH.",
    treatments: [
      { name: "Lifestyle and weight loss; GLP-1R agonists", action: "Improve insulin resistance and can restore ovulation", target: "glp1r" },
      { name: "Combined oral contraceptive pill", action: "Suppresses LH and ovarian androgens, raises SHBG, protects endometrium", target: "er" },
      { name: "Letrozole (ovulation induction)", action: "Aromatase inhibitor → reduced oestrogen feedback → FSH rise", target: "aromatase" },
      { name: "Metformin", action: "Insulin sensitiser; metabolic and menstrual benefit", target: null },
      { name: "Spironolactone (with contraception)", action: "Anti-androgen (AR blockade) for hirsutism", target: "ar" }
    ],
    targets: ["aromatase", "er", "pr", "glp1r", "ar"],
    pathways: ["insulin", "nuclear"],
    question: "How does letrozole induce ovulation in PCOS, and why is it preferred over clomifene?",
    answer: "Both drugs trick the hypothalamus into sensing low oestrogen. Clomifene, a SERM, blocks hypothalamic oestrogen receptors. Letrozole blocks aromatase, transiently lowering oestradiol. Either way, oestrogen negative feedback falls and the pituitary releases more FSH, which recruits and matures a dominant follicle. Clomifene's prolonged ER blockade also thins the endometrium and thickens cervical mucus. Letrozole has a short half-life and leaves endometrial ERs free, so it gives higher live-birth rates in PCOS and fewer multiple pregnancies.",
    pearl: "Because anovulation leaves the endometrium exposed to unopposed oestrogen, women with fewer than about 4 periods a year need endometrial protection (a progestogen or COCP) to reduce hyperplasia and cancer risk."
  },
  {
    id: "menopause_vms", name: "Menopause & vasomotor symptoms", short: "Menopause",
    organ: "reproductive", organs: ["reproductive", "brain", "joints", "bladder"],
    area: "Reproductive & urology",
    summary: "Permanent cessation of menstruation from ovarian follicle depletion, typically around age 51. Up to about 80% of women experience hot flushes and night sweats, often for years.",
    pathophys: [
      "Follicle depletion → falling oestradiol and inhibin; FSH and LH rise",
      "Loss of oestrogen negative feedback → hypertrophy and hyperactivity of hypothalamic KNDy (kisspeptin/neurokinin B/dynorphin) neurons",
      "Excess neurokinin B acts on NK3 receptors projecting to the median preoptic thermoregulatory centre",
      "The thermoneutral zone narrows → small core temperature rises trigger heat-dissipation (vasodilation, sweating) → hot flush",
      "Oestrogen loss also → genitourinary atrophy, accelerated bone loss and adverse lipid changes"
    ],
    features: "Hot flushes, night sweats, sleep disturbance, mood and cognitive changes, genitourinary syndrome (vaginal dryness, dyspareunia, urgency, recurrent UTI), joint aches, osteoporosis.",
    diagnosis: "Clinical in women ≥45 with typical symptoms or 12 months of amenorrhoea; FSH only helpful under 45 (suspected premature ovarian insufficiency).",
    treatments: [
      { name: "Menopausal hormone therapy (oestradiol ± progestogen)", action: "Replaces oestrogen; progestogen protects endometrium if uterus present", target: "er" },
      { name: "Micronised progesterone / LNG-IUS", action: "Endometrial protection in combined MHT", target: "pr" },
      { name: "Fezolinetant; elinzanetant", action: "NK3 receptor antagonist; dual NK1/NK3 antagonist (non-hormonal)", target: null },
      { name: "Low-dose paroxetine, venlafaxine, escitalopram", action: "SSRIs/SNRIs as non-hormonal options", target: "sert" },
      { name: "Gabapentin", action: "α2δ ligand; reduces night sweats", target: "a2d" },
      { name: "Vaginal oestrogen", action: "Local treatment of genitourinary syndrome, minimal systemic absorption", target: "er" }
    ],
    targets: ["er", "pr", "sert", "a2d"],
    pathways: ["nuclear", "gq"],
    question: "How does an NK3 receptor antagonist stop hot flushes without replacing oestrogen?",
    answer: "Oestrogen normally restrains KNDy neurons in the arcuate nucleus. After menopause these neurons become hyperactive and release excess neurokinin B. NKB acts through Gq-coupled NK3 receptors on the KNDy neurons themselves and on their projections to the median preoptic nucleus, the thermoregulatory centre. This signalling narrows the thermoneutral zone, so small temperature changes set off a heat-dissipation response. Fezolinetant blocks NK3R and quietens this hypothalamic circuit downstream of the missing oestrogen, without stimulating oestrogen receptors in breast or endometrium. That makes it an option where MHT is contraindicated, such as after breast cancer.",
    pearl: "Fezolinetant can cause liver injury, so liver tests are monitored before and during the first months of treatment. Systemic oestrogen in a woman with a uterus must always be paired with a progestogen to prevent endometrial hyperplasia."
  },

  // ───────────── Breast ─────────────
  {
    id: "bc_hrpos", name: "HR+/HER2− breast cancer", short: "HR+ breast",
    organ: "breast", organs: ["breast", "joints", "liver", "lungs"],
    area: "Oncology",
    summary: "Oestrogen/progesterone receptor-positive, HER2-negative breast cancer, about 70% of breast cancers. It is often indolent but carries a risk of late recurrence many years after diagnosis.",
    pathophys: [
      "Oestradiol binds ERα in luminal epithelial cells → ER dimerises and binds oestrogen response elements",
      "ER drives cyclin D1 transcription → cyclin D1–CDK4/6 phosphorylates Rb",
      "Phosphorylated Rb releases E2F → G1→S progression and proliferation",
      "PIK3CA mutations (~40%) activate PI3K–AKT–mTOR; acquired ESR1 mutations make ER ligand-independent under aromatase inhibitors",
      "Spread to bone (most commonly), liver, lung; dormant micrometastases cause late relapses"
    ],
    features: "Breast lump, skin or nipple changes, axillary nodes, or a screen-detected lesion. Metastatic disease: bone pain, hypercalcaemia, liver dysfunction.",
    diagnosis: "Triple assessment (exam, mammography/ultrasound, core biopsy) with ER/PR/HER2 status and Ki-67; genomic assays (e.g. Oncotype DX) guide chemotherapy; germline BRCA testing where eligible.",
    treatments: [
      { name: "Aromatase inhibitors (letrozole, anastrozole, exemestane)", action: "Block peripheral oestrogen synthesis (postmenopausal or with ovarian suppression)", target: "aromatase" },
      { name: "Tamoxifen", action: "SERM: ER antagonist in breast", target: "er" },
      { name: "Fulvestrant / elacestrant", action: "Selective ER degraders (elacestrant oral, for ESR1-mutant)", target: "er" },
      { name: "Palbociclib / ribociclib / abemaciclib", action: "CDK4/6 inhibitors with endocrine therapy (metastatic; ribociclib/abemaciclib adjuvant)", target: "cdk46" },
      { name: "Alpelisib / capivasertib / inavolisib", action: "PI3Kα or AKT inhibitors for PI3K-pathway-altered tumours", target: null },
      { name: "Goserelin; olaparib; trastuzumab deruxtecan", action: "Ovarian suppression; PARP inhibitor (gBRCA); HER2 ADC for HER2-low", target: "gnrhr" }
    ],
    targets: ["er", "aromatase", "cdk46", "gnrhr", "parp", "her2", "pr"],
    pathways: ["nuclear", "pi3k"],
    question: "Why do CDK4/6 inhibitors work so well alongside endocrine therapy in HR+ breast cancer?",
    answer: "In HR+ cells, ER signalling converges on cyclin D1, which partners CDK4/6 to phosphorylate Rb and release E2F at the G1/S checkpoint. Endocrine therapy lowers cyclin D1 transcription, but cells escape through ER-independent routes to cyclin D–CDK4/6 activity, such as growth factor and PI3K signalling. CDK4/6 inhibitors block the shared bottleneck directly, keeping Rb hypophosphorylated and cells arrested in G1. Because Rb is almost always intact in HR+ disease, the combination roughly doubles progression-free survival in metastatic disease compared with endocrine therapy alone. Neutropenia, the main toxicity, reflects CDK6 dependence of haematopoietic progenitors and is cytostatic and reversible.",
    pearl: "Tamoxifen is a prodrug activated by CYP2D6 to endoxifen, so strong CYP2D6 inhibitors (paroxetine, fluoxetine) should be avoided. Its partial agonism raises endometrial cancer and VTE risk, whereas aromatase inhibitors cause bone loss and arthralgia."
  },
  {
    id: "bc_her2", name: "HER2-positive breast cancer", short: "HER2+ breast",
    organ: "breast", organs: ["breast", "brain", "liver", "lungs"],
    area: "Oncology",
    summary: "Breast cancer with ERBB2 amplification or HER2 protein overexpression, about 15–20% of cases. It was historically aggressive, but outcomes have been transformed by HER2-targeted therapy.",
    pathophys: [
      "ERBB2 gene amplification → massive HER2 overexpression on the cell surface",
      "HER2 has no ligand but is the preferred dimerisation partner; HER2–HER3 heterodimers are the most potent signalling unit",
      "Constitutive activation of PI3K–AKT–mTOR and RAS–MAPK → proliferation, survival",
      "High grade, rapid growth, early visceral and brain metastasis",
      "Resistance via HER3/PI3K activation, truncated p95-HER2, or loss of antibody binding"
    ],
    features: "Breast lump, often high-grade with nodal involvement; relatively high risk of brain metastases in metastatic disease.",
    diagnosis: "IHC 3+ or ISH-amplified HER2 on core biopsy (IHC 2+ reflexes to ISH); IHC 1+ or 2+/ISH− is 'HER2-low'.",
    treatments: [
      { name: "Trastuzumab + pertuzumab + taxane", action: "Antibodies to HER2 domains IV and II (blocks dimerisation) + chemotherapy", target: "her2" },
      { name: "Trastuzumab emtansine (T-DM1)", action: "HER2 ADC with maytansinoid microtubule toxin; adjuvant for residual disease", target: "her2" },
      { name: "Trastuzumab deruxtecan (T-DXd)", action: "HER2 ADC with topoisomerase I payload and bystander effect", target: "her2" },
      { name: "Tucatinib / lapatinib / neratinib", action: "Oral HER2 tyrosine kinase inhibitors (tucatinib penetrates CNS)", target: "her2" },
      { name: "Docetaxel / paclitaxel", action: "Taxane chemotherapy backbone", target: "tubulin" }
    ],
    targets: ["her2", "tubulin", "top1", "er"],
    pathways: ["pi3k", "mapk"],
    question: "Why does adding pertuzumab to trastuzumab give a better HER2 blockade than either alone?",
    answer: "The two antibodies bind different extracellular domains of HER2. Trastuzumab binds domain IV, inhibiting ligand-independent HER2 signalling, preventing ectodomain shedding and flagging the cell for antibody-dependent cellular cytotoxicity (ADCC). Pertuzumab binds domain II, the dimerisation arm, sterically blocking ligand-induced HER2–HER3 heterodimers, the strongest activators of PI3K–AKT. Trastuzumab alone does not stop that dimerisation. Dual blockade therefore covers both ligand-independent and ligand-driven signalling and doubles the immune effector engagement. It improves outcomes in early and metastatic disease.",
    pearl: "Trastuzumab cardiotoxicity (falling LVEF) comes from blocking HER2-dependent cardiomyocyte survival signalling. Unlike anthracycline toxicity, it is usually reversible and not cumulative-dose related, but echo/MUGA monitoring is mandatory. T-DXd's key toxicity is interstitial lung disease."
  },
  {
    id: "tnbc", name: "Triple-negative breast cancer", short: "TNBC",
    organ: "breast", organs: ["breast", "brain", "lungs", "liver"],
    area: "Oncology",
    summary: "Breast cancer lacking ER, PR and HER2, about 15% of cases. It is more common in younger and Black women and BRCA1 carriers, and it relapses early.",
    pathophys: [
      "Mostly basal-like tumours; TP53 mutation in ~80%",
      "BRCA1 loss (germline or epigenetic) → homologous recombination deficiency and genomic instability",
      "No hormone or HER2 driver to target → reliance on cytotoxic, DNA-damaging and immune approaches",
      "High proliferation and frequent tumour-infiltrating lymphocytes (immunogenic subset)",
      "Early visceral and brain metastases; relapse risk peaks within the first 3–5 years"
    ],
    features: "Rapidly growing lump, often an interval cancer between screening rounds, high grade; early recurrence in lung, liver and brain.",
    diagnosis: "Core biopsy with ER <1% (ER-low 1–10% behaves similarly), PR−, HER2−; germline BRCA testing; PD-L1 testing in metastatic disease.",
    treatments: [
      { name: "Neoadjuvant carboplatin–taxane → anthracycline–cyclophosphamide + pembrolizumab", action: "Chemo-immunotherapy, then adjuvant pembrolizumab", target: "pd1" },
      { name: "Capecitabine (residual disease)", action: "Oral fluoropyrimidine prodrug", target: "tyms" },
      { name: "Olaparib (gBRCA)", action: "PARP inhibitor: adjuvant and metastatic", target: "parp" },
      { name: "Sacituzumab govitecan", action: "TROP2-directed ADC with SN-38 (topo I) payload", target: "top1" },
      { name: "Trastuzumab deruxtecan (HER2-low)", action: "HER2 ADC", target: "her2" }
    ],
    targets: ["pd1", "parp", "top1", "top2", "tubulin", "tyms", "her2"],
    pathways: ["dna", "apoptosis", "tcell"],
    question: "Why are PARP inhibitors selectively lethal to BRCA-mutant TNBC cells?",
    answer: "PARP1 detects single-strand DNA breaks and recruits repair proteins. PARP inhibitors block this and also trap PARP on DNA. Unrepaired single-strand breaks and trapped PARP collapse replication forks into double-strand breaks. Normal cells repair these by BRCA1/2-dependent homologous recombination. BRCA-deficient tumour cells cannot, so they fall back on error-prone end joining, accumulate lethal genomic damage and die. Normal tissues keep one functional BRCA allele and survive, which gives the therapeutic window. This is called synthetic lethality.",
    pearl: "Pathological complete response after neoadjuvant therapy strongly predicts survival in TNBC. Patients with residual disease receive escalated adjuvant therapy (capecitabine, or olaparib if gBRCA)."
  },

  // ───────────── Skin ─────────────
  {
    id: "psoriasis", name: "Psoriasis", short: "Psoriasis",
    organ: "skin", organs: ["skin", "joints", "heart"],
    area: "Immunology & inflammation",
    summary: "Chronic immune-mediated inflammatory skin disease affecting about 2–3% of people. It is driven by the IL-23/Th17 axis and associated with psoriatic arthritis and cardiometabolic disease.",
    pathophys: [
      "Triggers (trauma, streptococcal infection, drugs) in susceptible skin (HLA-C*06:02) → keratinocyte stress, AMP (LL-37)–nucleic acid complexes activate plasmacytoid DCs",
      "IFN-α, then myeloid dendritic cells release TNF and IL-23",
      "IL-23 maintains Th17 and Tc17 cells → IL-17A/F and IL-22",
      "IL-17 stimulates keratinocyte proliferation and production of chemokines and antimicrobial peptides → self-amplifying loop",
      "Epidermal turnover shortened to days → thick scaly plaques; systemic inflammation → arthritis, atherosclerosis"
    ],
    features: "Well-demarcated erythematous plaques with silvery scale on extensor surfaces, scalp and sacrum; nail pitting and onycholysis; Koebner phenomenon; psoriatic arthritis in about a quarter to a third.",
    diagnosis: "Clinical diagnosis; severity by PASI, BSA and DLQI; biopsy only if atypical; screen for psoriatic arthritis.",
    treatments: [
      { name: "Topical corticosteroid + vitamin D analogue (calcipotriol)", action: "Anti-inflammatory + normalises keratinocyte differentiation", target: "gr" },
      { name: "Methotrexate / ciclosporin; phototherapy", action: "Conventional systemic agents", target: "dhfr" },
      { name: "Apremilast; deucravacitinib", action: "Oral PDE4 inhibitor; allosteric TYK2 inhibitor", target: "pde4" },
      { name: "Adalimumab / etanercept / infliximab", action: "Anti-TNF", target: "tnf" },
      { name: "Secukinumab / ixekizumab / bimekizumab", action: "Anti-IL-17A (bimekizumab IL-17A + F)", target: "il17a" },
      { name: "Guselkumab / risankizumab / tildrakizumab; ustekinumab", action: "Anti-IL-23 p19; anti-IL-12/23 p40", target: "il23" }
    ],
    targets: ["il23", "il17a", "tnf", "jak", "pde4", "dhfr", "gr", "calcineurin"],
    pathways: ["th17", "jakstat", "nfkb"],
    question: "Why can IL-23 inhibitors be dosed only every 8–12 weeks yet give durable clearance of psoriasis?",
    answer: "IL-23 acts upstream as a survival and maintenance signal for pathogenic Th17 cells and tissue-resident memory T cells in the skin. IL-17 is a downstream effector cytokine that must be continuously neutralised. Blocking IL-23 p19 lets the pathogenic Th17 pool contract rather than just mopping up its product. Clearance is therefore slower in onset than with IL-17 inhibitors but more durable, with long remissions that sometimes persist after stopping. Long antibody half-lives and this immunological 'resetting' allow quarterly maintenance dosing.",
    pearl: "Systemic corticosteroids should be avoided in psoriasis because withdrawal can provoke severe flares, including generalised pustular psoriasis. IL-17 inhibitors cause mucocutaneous candidiasis because IL-17 is essential for anti-Candida immunity."
  },
  {
    id: "atopic_derm", name: "Atopic dermatitis (eczema)", short: "Eczema",
    organ: "skin", organs: ["skin", "lungs", "eye"],
    area: "Immunology & inflammation",
    summary: "Common chronic relapsing itchy inflammatory skin disease, affecting up to 20% of children and several percent of adults. It is often the first step in the 'atopic march' to food allergy, asthma and rhinitis.",
    pathophys: [
      "Barrier dysfunction: filaggrin loss-of-function and reduced ceramides → transepidermal water loss and allergen penetration",
      "Keratinocyte alarmins (TSLP, IL-33, IL-25) → type 2 immune activation (Th2, ILC2)",
      "IL-4 and IL-13 further suppress barrier proteins and drive IgE class switching",
      "IL-31 and other pruritogens act on sensory nerves → itch–scratch cycle damages the barrier more",
      "Dysbiosis with Staphylococcus aureus colonisation amplifies inflammation; chronic lesions add Th22/Th17 components"
    ],
    features: "Intensely itchy, dry, erythematous, poorly demarcated patches. Flexural in older children and adults, facial and extensor in infants. Lichenification, secondary infection (S. aureus, eczema herpeticum), sleep loss.",
    diagnosis: "Clinical (itch plus typical morphology and distribution, chronic relapsing course, atopic history); severity by EASI/SCORAD; IgE testing only for suspected specific allergies.",
    treatments: [
      { name: "Emollients and soap substitutes", action: "Restore barrier", target: null },
      { name: "Topical corticosteroids", action: "First-line anti-inflammatory for flares", target: "gr" },
      { name: "Tacrolimus / pimecrolimus (topical)", action: "Calcineurin inhibitors: steroid-sparing, no skin atrophy", target: "calcineurin" },
      { name: "Dupilumab", action: "Anti-IL-4Rα: blocks both IL-4 and IL-13 signalling", target: "il4ra" },
      { name: "Tralokinumab / lebrikizumab; nemolizumab", action: "Anti-IL-13; anti-IL-31 receptor A", target: null },
      { name: "Abrocitinib / upadacitinib / baricitinib", action: "Oral JAK inhibitors: rapid itch relief", target: "jak" }
    ],
    targets: ["il4ra", "jak", "gr", "calcineurin", "pde4"],
    pathways: ["jakstat"],
    question: "Why does blocking IL-4Rα with dupilumab treat eczema and also asthma and other type 2 diseases?",
    answer: "IL-4Rα is a shared subunit. With the common γ-chain it forms the type I receptor for IL-4, and with IL-13Rα1 it forms the type II receptor used by both IL-4 and IL-13. One antibody therefore silences both central type 2 cytokines. In skin this restores filaggrin and lipid barrier expression, reduces Th2 inflammation and lessens itch-nerve sensitisation. The same cytokines drive IgE switching, eosinophil recruitment, mucus production and airway hyperresponsiveness, which is why dupilumab also treats asthma, chronic rhinosinusitis with nasal polyps, eosinophilic oesophagitis and type 2 COPD.",
    pearl: "Dupilumab commonly causes conjunctivitis, which is more frequent in atopic dermatitis than in other indications. Transient blood eosinophilia also occurs."
  },
  {
    id: "melanoma", name: "Melanoma", short: "Melanoma",
    organ: "skin", organs: ["skin", "brain", "lungs", "liver"],
    area: "Oncology",
    summary: "Malignant tumour of melanocytes, causing most skin-cancer deaths. Immunotherapy and BRAF/MEK inhibitors have transformed outcomes in advanced disease.",
    pathophys: [
      "UV radiation (especially intermittent burning) → very high mutational burden with UV signatures",
      "Driver mutations activate MAPK: BRAF V600E/K (~50%), NRAS (~20%), NF1 loss; CDKN2A loss in familial cases",
      "Radial growth phase → vertical growth phase invading dermis (Breslow thickness)",
      "Early lymphatic and haematogenous spread to nodes, lung, liver, brain",
      "High neoantigen load makes tumours immunogenic, but PD-L1 and other checkpoints suppress T-cell attack"
    ],
    features: "Changing pigmented lesion (ABCDE: asymmetry, border, colour, diameter, evolution), 'ugly duckling' sign; nodular, acral, mucosal and amelanotic variants; metastases including brain.",
    diagnosis: "Excision biopsy with Breslow thickness, ulceration and mitoses; sentinel lymph node biopsy; BRAF testing; CT/PET and brain MRI in advanced stages; LDH as a prognostic marker.",
    treatments: [
      { name: "Wide local excision ± sentinel node biopsy", action: "Curative surgery for localised disease", target: null },
      { name: "Nivolumab / pembrolizumab", action: "Anti-PD-1: adjuvant, neoadjuvant and metastatic", target: "pd1" },
      { name: "Nivolumab + ipilimumab", action: "PD-1 + CTLA-4 blockade (high response, high toxicity)", target: "ctla4" },
      { name: "Nivolumab + relatlimab", action: "PD-1 + LAG-3 blockade", target: "lag3" },
      { name: "Dabrafenib + trametinib / encorafenib + binimetinib", action: "BRAF + MEK inhibitors for BRAF V600-mutant disease", target: "braf" },
      { name: "Lifileucel (TIL therapy)", action: "Autologous tumour-infiltrating lymphocytes after checkpoint failure", target: null }
    ],
    targets: ["pd1", "ctla4", "lag3", "braf"],
    pathways: ["mapk", "tcell"],
    question: "Why are BRAF inhibitors combined with MEK inhibitors rather than given alone?",
    answer: "BRAF V600E signals as a monomer, which selective BRAF inhibitors block well. In cells with wild-type BRAF and active RAS, however, the drug binds one protomer of a RAF dimer and allosterically transactivates the other. This is paradoxical MAPK activation, and it causes cutaneous squamous cell carcinomas and keratoacanthomas. Tumours also escape by reactivating ERK through RAS, CRAF or MEK alterations. Adding a MEK inhibitor blocks the pathway downstream of both routes. Combination therapy gives deeper, longer responses with fewer paradoxical skin tumours.",
    pearl: "Checkpoint immune-related adverse events (colitis, hepatitis, hypophysitis, thyroiditis, myocarditis) come from removing tolerance in normal tissues. They are commonest with ipilimumab combinations and are treated with corticosteroids. Hypophysitis is typical of anti-CTLA-4 and thyroiditis of anti-PD-1."
  },
  {
    id: "hs", name: "Hidradenitis suppurativa", short: "HS",
    organ: "skin", organs: ["skin", "joints", "intestine"],
    area: "Immunology & inflammation",
    summary: "Chronic inflammatory disease of hair follicles in intertriginous skin (axillae, groin, inframammary, perianal). It affects up to about 1% of people and is often diagnosed late.",
    pathophys: [
      "Follicular hyperkeratosis and occlusion (smoking, obesity, friction, androgens, γ-secretase gene variants)",
      "Follicle dilates and ruptures → keratin and bacteria spill into the dermis",
      "Innate activation → TNF, IL-1β, IL-17 and IL-23 inflammatory cascade with neutrophil influx",
      "Recurrent abscesses → epithelialised sinus tracts (tunnels) that sustain inflammation",
      "Scarring, contractures and chronic drainage"
    ],
    features: "Painful recurrent nodules and abscesses, draining tunnels and rope-like scarring in flexures; double-ended comedones; major impact on quality of life; associations with IBD, spondyloarthritis and metabolic syndrome.",
    diagnosis: "Clinical (typical lesions, sites and chronicity); severity by Hurley stage or IHS4.",
    treatments: [
      { name: "Topical clindamycin; oral tetracyclines; clindamycin + rifampicin", action: "Antibiotics with anti-inflammatory effects", target: "ribosome" },
      { name: "Adalimumab", action: "Anti-TNF", target: "tnf" },
      { name: "Secukinumab / bimekizumab", action: "Anti-IL-17A (± IL-17F)", target: "il17a" },
      { name: "Deroofing / wide excision; weight loss and smoking cessation", action: "Remove tunnels; reduce triggers", target: null }
    ],
    targets: ["tnf", "il17a", "ribosome"],
    pathways: ["th17", "nfkb"],
    question: "Why do antibiotics and biologics often fail to cure established HS, and what is needed in addition?",
    answer: "Early lesions are driven by follicular rupture and innate inflammation, which antibiotics (often through anti-inflammatory effects) and anti-TNF or anti-IL-17 biologics can suppress. Repeated inflammation creates epithelialised tunnels. These are lined by proliferative keratinocytes that themselves produce IL-1β, IL-17 and chemokines, and they harbour biofilm. Systemic drugs reduce the inflammation but cannot remove this self-sustaining structural tissue. Surgical deroofing or excision of tunnels is therefore combined with biologics in moderate–severe disease.",
    pearl: "HS is frequently misdiagnosed as recurrent 'boils'. Recurrent abscesses in the axilla or groin should prompt the diagnosis, and swabs are usually sterile or grow commensals."
  },

  // ───────────── Joints & bone ─────────────
  {
    id: "ra", name: "Rheumatoid arthritis", short: "RA",
    organ: "joints", organs: ["joints", "lungs", "heart", "eye", "blood"],
    area: "Immunology & inflammation",
    summary: "Chronic autoimmune symmetrical inflammatory polyarthritis affecting about 0.5–1% of adults, more often women. Untreated, it causes joint destruction, disability and increased cardiovascular mortality.",
    pathophys: [
      "Genetic risk (HLA-DRB1 'shared epitope') plus smoking or mucosal inflammation → PAD enzymes citrullinate proteins",
      "Loss of tolerance → anti-citrullinated protein antibodies (ACPA) and rheumatoid factor, often years before arthritis",
      "Synovial infiltration by T cells, B cells and macrophages → TNF, IL-6, IL-1 and GM-CSF",
      "Fibroblast-like synoviocytes form invasive pannus; MMPs degrade cartilage",
      "RANKL from synovial cells and T cells → osteoclast activation → marginal bone erosions"
    ],
    features: "Symmetrical small-joint polyarthritis (MCP, PIP, MTP) with prolonged morning stiffness (>1 h), fatigue. Extra-articular: nodules, interstitial lung disease, scleritis, vasculitis, anaemia of chronic disease, cardiovascular disease.",
    diagnosis: "2010 ACR/EULAR criteria (joint count, RF/anti-CCP, CRP/ESR, duration ≥6 weeks); ultrasound/MRI for synovitis; X-ray for erosions.",
    treatments: [
      { name: "Methotrexate (± sulfasalazine, hydroxychloroquine, leflunomide)", action: "Anchor csDMARD; adenosine-mediated anti-inflammatory effects", target: "dhfr" },
      { name: "Short-course glucocorticoids", action: "Bridging anti-inflammatory therapy", target: "gr" },
      { name: "Adalimumab / etanercept / infliximab / certolizumab", action: "TNF inhibitors", target: "tnf" },
      { name: "Tocilizumab / sarilumab", action: "IL-6 receptor antibodies", target: "il6r" },
      { name: "Abatacept", action: "CTLA-4–Ig: binds CD80/86 to block CD28 co-stimulation", target: "ctla4" },
      { name: "Rituximab", action: "Anti-CD20 B-cell depletion", target: "cd20" },
      { name: "Tofacitinib / baricitinib / upadacitinib", action: "Oral JAK inhibitors", target: "jak" }
    ],
    targets: ["dhfr", "tnf", "il6r", "jak", "cd20", "ctla4", "gr", "rankl"],
    pathways: ["nfkb", "jakstat", "tcell", "bcell", "bone"],
    question: "Why is rheumatoid arthritis treated aggressively and early ('treat-to-target') rather than with symptomatic NSAIDs?",
    answer: "Synovitis directly drives irreversible damage. Cytokine-activated synoviocytes and MMPs destroy cartilage, and RANKL-activated osteoclasts erode bone, with most erosions appearing in the first 2 years. NSAIDs relieve pain by inhibiting prostaglandins but do nothing to TNF/IL-6 signalling, pannus or osteoclast activation. DMARDs started within the early 'window of opportunity' and escalated to reach remission or low disease activity prevent erosions and disability. They also lower the systemic inflammation that accelerates atherosclerosis.",
    pearl: "JAK inhibitors carry warnings for MACE, malignancy and VTE in patients over 65, smokers and those with cardiovascular risk factors. Use them only when no suitable alternative exists in these groups."
  },
  {
    id: "oa", name: "Osteoarthritis", short: "OA",
    organ: "joints", organs: ["joints"],
    area: "Musculoskeletal & bone",
    summary: "The most common joint disease, a whole-joint disorder of cartilage loss, bone remodelling and low-grade synovitis. It affects hundreds of millions of people and is a leading cause of disability.",
    pathophys: [
      "Mechanical load, ageing, obesity (mechanical plus adipokines), injury and malalignment stress the joint",
      "Chondrocytes shift to a catabolic phenotype → MMP-13 and ADAMTS-5 degrade type II collagen and aggrecan",
      "Cartilage fibrillation and loss; low-grade synovitis (IL-1β, TNF) amplifies catabolism",
      "Subchondral bone sclerosis, bone marrow lesions and cysts; osteophytes form at margins",
      "Nerve ingrowth and central sensitisation → chronic pain disproportionate to imaging"
    ],
    features: "Use-related joint pain (knees, hips, hands, spine), brief morning stiffness (<30 min), crepitus, bony enlargement (Heberden and Bouchard nodes), reduced range of motion.",
    diagnosis: "Clinical in people ≥45 with activity-related pain and short morning stiffness; X-ray shows joint space narrowing, osteophytes, subchondral sclerosis and cysts (not needed routinely).",
    treatments: [
      { name: "Exercise, weight loss, education", action: "Core first-line treatment", target: null },
      { name: "Topical NSAIDs (knee/hand), then oral NSAIDs with PPI", action: "COX inhibition", target: "cox" },
      { name: "Intra-articular corticosteroid", action: "Short-term relief of inflammatory flares", target: "gr" },
      { name: "Duloxetine", action: "SNRI for chronic pain with central sensitisation", target: "sert" },
      { name: "Joint replacement", action: "Definitive treatment for end-stage hip/knee OA", target: null }
    ],
    targets: ["cox", "gr", "sert"],
    pathways: ["eicosanoid", "nfkb"],
    question: "Why are there still no approved disease-modifying drugs for osteoarthritis?",
    answer: "OA is a heterogeneous whole-joint disease, with mechanical, inflammatory, metabolic and bone-driven phenotypes, so a single molecular target rarely dominates. Cartilage is avascular and aneural, so structural improvement (e.g. cartilage thickness on MRI) does not translate reliably into less pain, which is what patients and regulators care about. Pain arises from synovium, subchondral bone and sensitised nerves rather than cartilage itself. Conversely, potent analgesics can cause harm. Anti-NGF antibodies (tanezumab) relieved pain but caused rapidly progressive OA and were not approved. Structural trials also need years to show differences in slow-progressing disease.",
    pearl: "Paracetamol has minimal efficacy in OA, and opioids are not recommended for long-term use. Exercise and weight loss are the most effective interventions; losing about 10% of body weight can substantially reduce knee pain."
  },
  {
    id: "gout", name: "Gout", short: "Gout",
    organ: "joints", organs: ["joints", "kidney"],
    area: "Musculoskeletal & bone",
    summary: "Inflammatory arthritis caused by monosodium urate crystal deposition from chronic hyperuricaemia. It is the most common inflammatory arthritis in men and is associated with CKD and cardiovascular disease.",
    pathophys: [
      "Humans lack uricase; purine breakdown via xanthine oxidase → uric acid",
      "Under-excretion (most cases: kidney URAT1/GLUT9 handling, CKD, diuretics) or overproduction raises serum urate above saturation (~0.40 mmol/L, 6.8 mg/dL)",
      "Monosodium urate crystals deposit in cooler, previously damaged joints",
      "Crystals phagocytosed by macrophages → NLRP3 inflammasome → caspase-1 → IL-1β release",
      "IL-1β drives intense neutrophilic inflammation (acute flare); chronic deposition → tophi, erosions, urate nephropathy and stones"
    ],
    features: "Sudden excruciating monoarthritis, classically the first MTP (podagra), with red, hot, swollen skin, often at night. Triggered by alcohol, purine-rich food, dehydration or diuretics. Chronic: tophi, polyarticular disease.",
    diagnosis: "Joint aspiration showing needle-shaped, negatively birefringent MSU crystals; serum urate (may be normal during a flare); dual-energy CT or ultrasound double-contour sign.",
    treatments: [
      { name: "NSAIDs (naproxen) for flares", action: "COX inhibition", target: "cox" },
      { name: "Colchicine", action: "Binds tubulin → impairs neutrophil migration and inflammasome assembly", target: "tubulin" },
      { name: "Corticosteroids (oral / intra-articular)", action: "Anti-inflammatory for flares", target: "gr" },
      { name: "Anakinra / canakinumab", action: "IL-1 blockade for refractory flares", target: "il1b" },
      { name: "Allopurinol / febuxostat (treat-to-target urate <0.36 mmol/L)", action: "Xanthine oxidase inhibitors: urate-lowering therapy", target: "xo" },
      { name: "Pegloticase; probenecid / benzbromarone", action: "Recombinant uricase; uricosurics (URAT1)", target: null }
    ],
    targets: ["xo", "cox", "tubulin", "il1b", "gr"],
    pathways: ["eicosanoid", "nfkb"],
    question: "Why can starting allopurinol trigger a gout flare, and how is this prevented?",
    answer: "Lowering serum urate makes existing MSU crystal deposits start dissolving and remodelling. As they shrink, crystals are shed from tophi and synovial deposits into the joint space. Macrophages phagocytose them, activating the NLRP3 inflammasome and releasing IL-1β, which triggers a flare. The risk is highest in the first months of urate-lowering therapy and with rapid dose escalation. It is reduced by starting low and titrating slowly ('start low, go slow'), with prophylactic low-dose colchicine (or an NSAID) for about 3–6 months. An acute flare is not a reason to stop allopurinol.",
    pearl: "Xanthine oxidase also metabolises azathioprine/6-mercaptopurine, so allopurinol or febuxostat can cause life-threatening myelotoxicity with these drugs. HLA-B*58:01 (common in Han Chinese, Thai and Korean people) predicts allopurinol SJS/TEN and DRESS."
  },
  {
    id: "osteoporosis", name: "Osteoporosis", short: "Osteoporosis",
    organ: "joints", organs: ["joints", "reproductive"],
    area: "Musculoskeletal & bone",
    summary: "Systemic skeletal disease of low bone mass and microarchitectural deterioration causing fragility fractures. About 1 in 3 women and 1 in 5 men over 50 will have an osteoporotic fracture.",
    pathophys: [
      "Peak bone mass is set by genetics, nutrition and sex hormones; bone loss begins after the 30s",
      "Oestrogen loss (menopause) → more RANKL and less OPG from osteoblasts and T cells",
      "RANKL–RANK → osteoclast differentiation and survival → resorption outpaces formation",
      "Other drivers: glucocorticoids (suppress osteoblasts), ageing, low vitamin D/Ca²⁺, hypogonadism, hyperparathyroidism",
      "Trabecular thinning and cortical porosity → vertebral, hip and wrist fragility fractures"
    ],
    features: "Silent until fracture. Vertebral compression (height loss, kyphosis, back pain), hip fracture (high morbidity and mortality), distal radius fracture.",
    diagnosis: "DXA T-score ≤ −2.5 at hip or spine, or a fragility fracture; fracture risk by FRAX; screen for secondary causes (Ca²⁺, vitamin D, PTH, TSH, testosterone, coeliac, myeloma).",
    treatments: [
      { name: "Alendronate / risedronate; zoledronic acid", action: "Bisphosphonates: inhibit FPPS in osteoclasts", target: "fpps" },
      { name: "Denosumab", action: "Anti-RANKL antibody (6-monthly)", target: "rankl" },
      { name: "Teriparatide / abaloparatide", action: "Intermittent PTH1R agonists: anabolic", target: null },
      { name: "Romosozumab", action: "Anti-sclerostin: increases formation and decreases resorption", target: "sost" },
      { name: "Raloxifene; menopausal hormone therapy", action: "SERM / oestrogen: antiresorptive", target: "er" },
      { name: "Calcium + vitamin D", action: "Adjunct to ensure adequate substrate", target: null }
    ],
    targets: ["fpps", "rankl", "sost", "er"],
    pathways: ["bone"],
    question: "Why must denosumab never be stopped without follow-on therapy, unlike bisphosphonates?",
    answer: "Bisphosphonates bind bone hydroxyapatite and are released only slowly during remodelling, so their antiresorptive effect persists for years after stopping. This allows 'drug holidays'. Denosumab is a circulating antibody that reversibly neutralises RANKL and is not stored in bone. When it wears off about 6 months after a dose, a pool of osteoclast precursors that built up during suppression differentiates at once. The result is a rebound surge in bone turnover above baseline, rapid bone loss and a risk of multiple vertebral fractures. Stopping denosumab therefore requires a bisphosphonate (usually zoledronic acid) to consolidate the gains.",
    pearl: "Romosozumab carries a warning for myocardial infarction and stroke, so avoid it in patients with recent cardiovascular events. Long-term antiresorptives rarely cause osteonecrosis of the jaw and atypical femoral fractures."
  },
  {
    id: "axspa", name: "Axial spondyloarthritis", short: "axSpA",
    organ: "joints", organs: ["joints", "eye", "intestine", "skin"],
    area: "Immunology & inflammation",
    summary: "Chronic inflammatory arthritis of the sacroiliac joints and spine, including ankylosing spondylitis (radiographic axSpA). It typically starts before age 45 and is strongly linked to HLA-B27.",
    pathophys: [
      "HLA-B27 (misfolding, ER stress, aberrant antigen presentation) plus gut dysbiosis and mechanical stress at entheses",
      "Entheseal resident cells (γδ T cells, ILC3s) produce IL-17 and TNF, partly independently of IL-23",
      "Inflammation at entheses, sacroiliac joints and vertebral corners (osteitis)",
      "Repair phase: new bone formation (Wnt, BMP) → syndesmophytes",
      "Progressive fusion ('bamboo spine') → loss of mobility"
    ],
    features: "Inflammatory back pain (onset <45, insidious, morning stiffness, improves with exercise not rest, night pain), buttock pain, enthesitis, dactylitis, anterior uveitis, IBD, psoriasis.",
    diagnosis: "ASAS classification: sacroiliitis on MRI (bone marrow oedema) or X-ray plus features, or HLA-B27 plus features; CRP often raised.",
    treatments: [
      { name: "NSAIDs + physiotherapy/exercise", action: "First-line; COX inhibition", target: "cox" },
      { name: "Adalimumab / etanercept / golimumab / certolizumab", action: "TNF inhibitors", target: "tnf" },
      { name: "Secukinumab / ixekizumab / bimekizumab", action: "IL-17 inhibitors", target: "il17a" },
      { name: "Upadacitinib / tofacitinib", action: "JAK inhibitors", target: "jak" }
    ],
    targets: ["cox", "tnf", "il17a", "jak"],
    pathways: ["th17", "jakstat", "nfkb"],
    question: "Why do IL-17 inhibitors work in axial spondyloarthritis while IL-23 inhibitors failed, even though both work in psoriasis?",
    answer: "In skin, IL-17 production depends heavily on IL-23 maintaining Th17 cells, so blocking either cytokine works. At the spinal enthesis, IL-17 is made largely by resident innate-like cells such as γδ T cells, ILC3s, MAIT cells and neutrophils. These cells can produce IL-17 without IL-23, driven by other cytokines and mechanical stress. Neutralising IL-17 itself, or TNF, therefore controls axial inflammation, whereas upstream IL-23 blockade did not separate from placebo in axSpA trials. The difference is a reminder that the 'same' cytokine axis is wired differently in different tissues.",
    pearl: "Conventional DMARDs such as methotrexate and sulfasalazine do not work for axial disease. Sulfasalazine may help peripheral arthritis only, so patients go from NSAIDs straight to biologics or JAK inhibitors."
  },

  // ───────────── Blood & bone marrow ─────────────
  {
    id: "cml", name: "Chronic myeloid leukaemia", short: "CML",
    organ: "blood", organs: ["blood"],
    area: "Oncology",
    summary: "Myeloproliferative neoplasm driven by the BCR::ABL1 fusion kinase. It changed from a fatal disease to one with near-normal life expectancy after the arrival of tyrosine kinase inhibitors.",
    pathophys: [
      "Reciprocal translocation t(9;22) creates the Philadelphia chromosome and the BCR::ABL1 fusion gene",
      "BCR coiled-coil domain causes oligomerisation → constitutively active ABL1 tyrosine kinase",
      "Downstream RAS–MAPK, PI3K–AKT and JAK–STAT5 signalling → proliferation and resistance to apoptosis",
      "Expansion of maturing myeloid cells (chronic phase) with retained differentiation",
      "Additional mutations → accelerated phase and blast crisis (acute leukaemia) if untreated"
    ],
    features: "Often incidental marked leucocytosis with left shift, basophilia, eosinophilia and thrombocytosis; splenomegaly (left upper quadrant pain, early satiety), fatigue, weight loss, sweats.",
    diagnosis: "Blood film and bone marrow; cytogenetics/FISH for t(9;22); quantitative RT-PCR for BCR::ABL1 transcripts on the International Scale for monitoring.",
    treatments: [
      { name: "Imatinib", action: "First-generation ATP-competitive BCR-ABL TKI", target: "bcrabl" },
      { name: "Dasatinib / nilotinib / bosutinib", action: "Second-generation TKIs: faster, deeper responses", target: "bcrabl" },
      { name: "Ponatinib", action: "Third-generation TKI active against T315I", target: "bcrabl" },
      { name: "Asciminib", action: "Allosteric STAMP inhibitor binding the myristoyl pocket", target: "bcrabl" },
      { name: "Allogeneic stem cell transplant", action: "For advanced phase or multiple TKI failure", target: null }
    ],
    targets: ["bcrabl"],
    pathways: ["mapk", "jakstat", "pi3k"],
    question: "Why does the T315I mutation make CML resistant to imatinib, dasatinib and nilotinib, and how is it overcome?",
    answer: "T315 is the 'gatekeeper' residue at the back of the ATP-binding pocket of ABL1. Its threonine side chain forms a hydrogen bond with imatinib, and replacing it with the bulkier isoleucine both removes that bond and sterically blocks first- and second-generation TKIs from binding. The kinase still binds ATP and stays active. Ponatinib was designed with a rigid ethynyl linker that fits past the isoleucine. Asciminib avoids the ATP site altogether, binding the myristoyl pocket and locking the kinase in an inactive conformation. Because it binds a different site, asciminib can also be combined with ATP-site TKIs.",
    pearl: "Patients with sustained deep molecular response (about MR4 or deeper for several years) may be able to stop TKIs under close PCR monitoring. This is called treatment-free remission, and about half stay in remission."
  },
  {
    id: "cll", name: "Chronic lymphocytic leukaemia", short: "CLL",
    organ: "blood", organs: ["blood"],
    area: "Oncology",
    summary: "Clonal proliferation of mature CD5⁺ B cells in blood, marrow and lymph nodes. It is the most common adult leukaemia in Western countries and usually occurs in older adults.",
    pathophys: [
      "Monoclonal B-cell lymphocytosis precursor → CLL; del(13q14) (miR-15/16 loss) is the commonest lesion",
      "Loss of miR-15/16 → overexpression of anti-apoptotic BCL-2",
      "Chronic B-cell receptor signalling (autoantigen-driven, SYK–BTK–PLCγ2) in lymph node proliferation centres",
      "Accumulation of long-lived, apoptosis-resistant B cells crowds marrow and nodes",
      "Immune dysregulation → hypogammaglobulinaemia, infections, autoimmune cytopenias; TP53 loss → aggressive disease and Richter transformation"
    ],
    features: "Often an incidental lymphocytosis. Painless lymphadenopathy, splenomegaly, B symptoms, recurrent infections, autoimmune haemolytic anaemia or ITP; smudge cells on film.",
    diagnosis: "Flow cytometry: ≥5 × 10⁹/L clonal B cells co-expressing CD5, CD19, CD23 with weak surface Ig/CD20; FISH for del(17p), TP53 mutation and IGHV status before treatment.",
    treatments: [
      { name: "Watch and wait", action: "Early asymptomatic disease (treatment does not improve survival)", target: null },
      { name: "Acalabrutinib / zanubrutinib / ibrutinib", action: "Covalent BTK inhibitors (C481)", target: "btk" },
      { name: "Pirtobrutinib", action: "Non-covalent BTK inhibitor active after C481 resistance", target: "btk" },
      { name: "Venetoclax + obinutuzumab", action: "BCL-2 inhibitor + glycoengineered anti-CD20, fixed duration", target: "bcl2" },
      { name: "Venetoclax + BTK inhibitor", action: "Fixed-duration targeted combination", target: "bcl2" }
    ],
    targets: ["btk", "bcl2", "cd20"],
    pathways: ["bcell", "apoptosis", "nfkb"],
    question: "Why does venetoclax require a slow dose ramp-up in CLL?",
    answer: "CLL cells survive because BCL-2 sequesters pro-apoptotic proteins such as BIM, preventing BAX/BAK from permeabilising mitochondria. Venetoclax is a BH3 mimetic that displaces them, so CLL cells undergo apoptosis within hours, and very rapidly in those 'primed' for death. With bulky disease, sudden lysis of a large tumour mass releases K⁺, phosphate and nucleic acids (converted to uric acid). This is tumour lysis syndrome, with hyperkalaemia, hyperphosphataemia, hypocalcaemia and AKI. A 5-week weekly dose ramp-up with hydration, urate-lowering therapy (allopurinol or rasburicase) and electrolyte monitoring lets the tumour shrink safely.",
    pearl: "Ibrutinib's off-target kinase inhibition (e.g. CSK, TEC) causes atrial fibrillation, hypertension and bleeding. Second-generation acalabrutinib and zanubrutinib are more selective, with less AF."
  },
  {
    id: "myeloma", name: "Multiple myeloma", short: "Myeloma",
    organ: "blood", organs: ["blood", "joints", "kidney"],
    area: "Oncology",
    summary: "Malignancy of clonal plasma cells in the bone marrow that secrete monoclonal immunoglobulin. It is the second most common haematological cancer and is almost always preceded by MGUS.",
    pathophys: [
      "Primary IgH translocations or hyperdiploidy → MGUS → smouldering myeloma → myeloma, with secondary hits (MYC, RAS, del17p)",
      "Malignant plasma cells depend on marrow niche signals (IL-6, APRIL via BCMA) and NF-κB",
      "Huge immunoglobulin synthesis → ER stress → dependence on proteasome and unfolded protein response",
      "Myeloma cells ↑RANKL, ↓OPG and secrete DKK1 (blocks osteoblast Wnt) → lytic lesions without new bone formation",
      "Free light chains form casts in renal tubules; marrow infiltration → anaemia; immunoparesis → infections"
    ],
    features: "CRAB: hyperCalcaemia, Renal impairment (cast nephropathy), Anaemia, Bone lesions (pain, fractures, cord compression). Also recurrent infections, hyperviscosity, amyloidosis.",
    diagnosis: "≥10% clonal marrow plasma cells plus a CRAB or SLiM biomarker (≥60% plasma cells, light-chain ratio ≥100, >1 MRI focal lesion); serum electrophoresis/immunofixation, serum free light chains, whole-body low-dose CT/PET/MRI.",
    treatments: [
      { name: "Bortezomib / carfilzomib", action: "Proteasome inhibitors", target: "proteasome" },
      { name: "Lenalidomide / pomalidomide", action: "IMiDs: cereblon modulators → degrade IKZF1/3", target: "crbn" },
      { name: "Daratumumab / isatuximab", action: "Anti-CD38 antibodies", target: "cd38" },
      { name: "Dexamethasone", action: "Lympho/plasma-cytotoxic glucocorticoid", target: "gr" },
      { name: "Teclistamab / elranatamab; cilta-cel / ide-cel", action: "BCMA×CD3 bispecifics; BCMA CAR-T", target: "bcma" },
      { name: "Autologous stem cell transplant; zoledronic acid / denosumab", action: "High-dose melphalan consolidation; bone protection", target: "fpps" }
    ],
    targets: ["proteasome", "crbn", "cd38", "bcma", "gr", "fpps", "rankl"],
    pathways: ["nfkb", "apoptosis", "bone", "bcell"],
    question: "Why are plasma cells particularly vulnerable to proteasome inhibitors?",
    answer: "Myeloma cells make immunoglobulin at extraordinary rates, and a fraction of it misfolds. They rely on ER-associated degradation through the proteasome to clear it. Bortezomib (reversible) and carfilzomib (irreversible) inhibit the β5 chymotrypsin-like subunit. Misfolded proteins accumulate and the unfolded protein response is driven to terminal, pro-apoptotic signalling (CHOP). Proteasome inhibition also stabilises IκB, suppressing the NF-κB survival signalling that myeloma depends on. Cells with lower protein loads tolerate inhibition better, which provides the therapeutic window.",
    pearl: "Daratumumab binds CD38 on reagent red cells and causes a panreactive indirect antiglobulin test that interferes with crossmatching. Tell the transfusion lab and send a baseline group and screen before the first dose."
  },
  {
    id: "dlbcl", name: "Diffuse large B-cell lymphoma", short: "DLBCL",
    organ: "blood", organs: ["blood", "brain"],
    area: "Oncology",
    summary: "The most common aggressive non-Hodgkin lymphoma, about 30% of NHL. It is curable in roughly 60–70% of patients with first-line immunochemotherapy.",
    pathophys: [
      "Arises from germinal-centre or post-germinal-centre (activated) B cells, de novo or by transformation of indolent lymphoma",
      "Cell-of-origin subtypes: GCB (EZH2, BCL2 translocation) vs ABC (MYD88 L265P, CD79B → chronic NF-κB activation)",
      "MYC and BCL2 rearrangement ('double-hit') → high-grade B-cell lymphoma with poor prognosis",
      "Loss of immune recognition (B2M, CD58, MHC loss) aids immune escape",
      "Rapidly enlarging nodal or extranodal masses; CNS relapse risk in high-risk sites"
    ],
    features: "Rapidly enlarging painless lymphadenopathy or extranodal mass (GI tract, testis, CNS, bone), B symptoms (fever, drenching sweats, >10% weight loss), raised LDH.",
    diagnosis: "Excisional or core biopsy with immunohistochemistry (CD20⁺), FISH for MYC/BCL2/BCL6; PET-CT staging; International Prognostic Index (IPI).",
    treatments: [
      { name: "R-CHOP", action: "Rituximab + cyclophosphamide, doxorubicin, vincristine, prednisolone", target: "cd20" },
      { name: "Pola-R-CHP", action: "Polatuzumab vedotin (anti-CD79b ADC with MMAE) replaces vincristine", target: "tubulin" },
      { name: "Axicabtagene ciloleucel / lisocabtagene maraleucel", action: "Anti-CD19 CAR-T for relapsed/refractory disease", target: "cd19" },
      { name: "Glofitamab / epcoritamab", action: "CD20×CD3 bispecific T-cell engagers", target: "cd20" },
      { name: "Tafasitamab + lenalidomide; loncastuximab tesirine", action: "Anti-CD19 antibody / ADC options", target: "cd19" }
    ],
    targets: ["cd20", "cd19", "top2", "tubulin", "gr", "crbn"],
    pathways: ["bcell", "nfkb", "apoptosis"],
    question: "How do CAR-T cells and bispecific antibodies kill lymphoma cells, and why do both cause cytokine release syndrome?",
    answer: "Both bypass normal MHC-restricted T-cell recognition. CAR-T cells are the patient's own T cells engineered with an anti-CD19 receptor fused to CD3ζ and a co-stimulatory domain (CD28 or 4-1BB). Bispecifics such as glofitamab bind CD20 on lymphoma cells and CD3 on any nearby T cell, physically linking them. In each case the T cell is activated, releases perforin and granzymes, and kills the target. Massive T-cell activation releases IFN-γ, which drives macrophages to secrete IL-6 and IL-1, causing fever, hypotension and hypoxia (cytokine release syndrome). Tocilizumab (anti-IL-6R) and corticosteroids treat it, and step-up dosing reduces it for bispecifics.",
    pearl: "Before rituximab, screen for hepatitis B. B-cell depletion can cause fatal HBV reactivation, so give antiviral prophylaxis to HBsAg-positive or anti-HBc-positive patients."
  },
  {
    id: "sickle_cell", name: "Sickle cell disease", short: "Sickle cell",
    organ: "blood", organs: ["blood", "brain", "lungs", "kidney", "joints", "eye"],
    area: "Haematology & thrombosis",
    summary: "Autosomal recessive haemoglobinopathy caused by HbS, most common in people of African, Middle Eastern and South Asian ancestry. It causes chronic haemolysis, painful vaso-occlusion and progressive organ damage.",
    pathophys: [
      "HBB point mutation (Glu6Val) → HbS",
      "On deoxygenation, HbS polymerises into rigid fibres (worse with low O₂, acidosis, dehydration; delayed by HbF)",
      "Red cells sickle, become rigid and adhesive → occlude microvessels with leucocytes and platelets",
      "Ischaemia–reperfusion and inflammation → painful crises and infarction (spleen, bone, brain, lung)",
      "Intravascular haemolysis releases free Hb → nitric oxide scavenging → vasculopathy, pulmonary hypertension"
    ],
    features: "Painful vaso-occlusive crises, chronic haemolytic anaemia, acute chest syndrome, stroke, functional asplenia (encapsulated bacterial sepsis), splenic sequestration, priapism, avascular necrosis, nephropathy, retinopathy.",
    diagnosis: "Newborn screening; haemoglobin HPLC or electrophoresis (HbS, absent HbA in HbSS); blood film with sickle cells and Howell–Jolly bodies; transcranial Doppler screening in children.",
    treatments: [
      { name: "Hydroxycarbamide (hydroxyurea)", action: "Induces fetal haemoglobin, lowers neutrophils and adhesion", target: null },
      { name: "Opioid analgesia, hydration, oxygen", action: "Acute vaso-occlusive crisis management", target: "oprm1" },
      { name: "Penicillin V prophylaxis + vaccinations", action: "Protect against pneumococcus with functional asplenia", target: "pbp" },
      { name: "Red cell transfusion / exchange", action: "Lowers HbS %; stroke prevention and acute chest syndrome", target: null },
      { name: "Haematopoietic stem cell transplant; exa-cel / lovo-cel gene therapies", action: "Curative: CRISPR BCL11A-enhancer editing ↑HbF or anti-sickling β-globin gene addition", target: null }
    ],
    targets: ["oprm1", "pbp"],
    pathways: [],
    question: "Why does raising fetal haemoglobin (HbF) reduce sickling, and how do hydroxycarbamide and exa-cel achieve it?",
    answer: "HbF (α2γ2) cannot join HbS polymers because the γ-chains lack the contact sites needed for the fibre lattice. Each HbF molecule in a red cell dilutes HbS and slows polymerisation, so cells are more likely to clear the microcirculation before sickling. BCL11A is the transcriptional repressor that switches γ-globin off after birth. Exa-cel uses CRISPR–Cas9 to disrupt the erythroid enhancer of BCL11A in the patient's stem cells, de-repressing γ-globin and giving pancellular HbF. Hydroxycarbamide raises HbF less specifically, through stress erythropoiesis after ribonucleotide reductase inhibition, and also lowers neutrophil counts and red-cell adhesion.",
    pearl: "Voxelotor, an HbS polymerisation inhibitor, was withdrawn worldwide in 2024 after excess deaths and vaso-occlusive events emerged in post-approval studies. Its withdrawal is a reminder that raising Hb alone is not a proven surrogate for benefit."
  },
  {
    id: "anaemia_iron_ckd", name: "Iron-deficiency anaemia & anaemia of CKD", short: "Anaemia",
    organ: "blood", organs: ["blood", "kidney", "intestine", "liver"],
    area: "Haematology & thrombosis",
    summary: "Iron deficiency is the most common cause of anaemia worldwide. Anaemia of CKD combines EPO deficiency with hepcidin-mediated iron restriction, and the two often coexist.",
    pathophys: [
      "Iron loss (menstrual, GI bleeding) or poor absorption (coeliac, PPIs, gastrectomy) exceeds intake → stores (ferritin) fall",
      "Iron-restricted erythropoiesis → microcytic, hypochromic red cells",
      "In CKD, failing peritubular fibroblasts make too little erythropoietin for the degree of anaemia (impaired HIF-mediated EPO response)",
      "Inflammation (IL-6) and reduced renal clearance raise hepcidin → degrades ferroportin → blocks gut absorption and macrophage iron release (functional iron deficiency)",
      "Reduced O₂ delivery → fatigue, cardiac strain (LVH, heart failure)"
    ],
    features: "Fatigue, dyspnoea, pallor, reduced exercise tolerance, palpitations. Iron deficiency adds angular cheilitis, glossitis, koilonychia, restless legs and pica.",
    diagnosis: "FBC (low Hb, MCV), ferritin <30 µg/L (higher thresholds e.g. <100 µg/L with TSAT <20% in CKD/inflammation), transferrin saturation; GI investigation for unexplained iron deficiency in men and postmenopausal women; coeliac serology.",
    treatments: [
      { name: "Oral ferrous sulfate / fumarate (once daily or alternate days)", action: "Iron replacement", target: null },
      { name: "IV iron (ferric carboxymaltose, ferric derisomaltose, iron sucrose)", action: "Bypasses hepcidin-blocked gut absorption", target: null },
      { name: "Epoetin / darbepoetin", action: "Erythropoiesis-stimulating agents for CKD anaemia", target: "epor" },
      { name: "Daprodustat / roxadustat / vadadustat", action: "HIF prolyl hydroxylase inhibitors → endogenous EPO and better iron handling", target: "epor" },
      { name: "Treat the cause (e.g. PPI + endoscopy, gluten-free diet)", action: "Stop ongoing loss / malabsorption", target: null }
    ],
    targets: ["epor"],
    pathways: [],
    question: "Why does oral iron often fail in CKD and inflammation, and why is alternate-day dosing now favoured?",
    answer: "Hepcidin, made by the liver, binds ferroportin, the only iron exporter, on duodenal enterocytes and macrophages and triggers its degradation. In CKD and inflammation, IL-6-driven hepcidin and reduced renal clearance keep levels high. Dietary iron is therefore trapped in enterocytes and shed, and recycled iron is locked in macrophages, so oral iron is poorly absorbed and IV iron is often needed. Even in simple iron deficiency, an oral dose raises hepcidin for about 24 hours, lowering absorption of the next day's dose. Alternate-day dosing lets hepcidin fall back, so fractional absorption improves and GI side effects decrease.",
    pearl: "In CKD, ESAs are titrated to a modest Hb target and not to normal. Targeting normal Hb increased stroke, thrombosis and cardiovascular events without clear benefit. Always correct iron first, because ESA resistance is most often due to iron deficiency."
  }
);
