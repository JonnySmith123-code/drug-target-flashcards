// 14 additional drug targets: cardiovascular & renal, metabolic & endocrine, and ophthalmology.
// Same schema as targets.js; appended to window.FC_TARGETS.
window.FC_TARGETS.push(
  // ───────────── Cardiovascular & renal ─────────────
  {
    id: "nep", name: "Neprilysin", short: "NEP", gene: "MME",
    family: "Enzyme (zinc metallopeptidase)", area: "Cardiovascular & renal",
    location: "Kidney proximal tubule brush border (highest), lung, vascular endothelium, heart, brain, neutrophils",
    role: "Membrane-bound endopeptidase that inactivates vasoactive peptides: natriuretic peptides (ANP, BNP, CNP), bradykinin, substance P, adrenomedullin, and also angiotensin II and endothelin.",
    signalling: [
      "Atrial/ventricular wall stretch → release of ANP and BNP",
      "Natriuretic peptides bind NPR-A (a membrane guanylyl cyclase) → ↑cGMP → PKG",
      "Effects: natriuresis and diuresis, vasodilation, ↓ renin and aldosterone, ↓ sympathetic tone, anti-hypertrophic and anti-fibrotic",
      "Neprilysin cleaves the peptides → terminates the signal",
      "Neprilysin inhibition → ↑ natriuretic peptides and bradykinin, but also ↑ angiotensin II (another substrate)"
    ],
    mechanism: "Sacubitril is a prodrug, de-esterified to the active neprilysin inhibitor (LBQ657). It is always given with an ARB (valsartan) as an ARNI, so the rise in angiotensin II is blocked at AT1.",
    drugs: [
      { name: "Sacubitril/valsartan", action: "Neprilysin inhibitor + AT1 antagonist (ARNI)", use: "HFrEF (replaces an ACEi/ARB to reduce mortality and HF admissions)" },
      { name: "Racecadotril", action: "Enkephalinase (neprilysin) inhibitor acting on gut enkephalins", use: "Acute diarrhoea (antisecretory, without slowing transit)" }
    ],
    question: "Why must a neprilysin inhibitor be paired with an ARB rather than given alone or with an ACE inhibitor?",
    answer: "Neprilysin breaks down natriuretic peptides, but it also degrades angiotensin II. Inhibiting it alone raises Ang II as well as the beneficial peptides, so vasoconstriction and aldosterone release offset the natriuretic benefit. Adding an ARB blocks that Ang II at AT1 and leaves the natriuretic peptide effects unopposed. An ACE inhibitor is not used because ACE and neprilysin both degrade bradykinin: blocking both (as the dual inhibitor omapatrilat did) caused unacceptable rates of angioedema.",
    pearl: "BNP is a neprilysin substrate, so on an ARNI BNP rises and is hard to interpret; NT-proBNP is not cleaved by neprilysin and remains a valid marker of HF severity and response. Stop an ACEi 36 h before starting (angioedema). Expect hypotension, hyperkalaemia and an eGFR dip. Neprilysin also degrades amyloid-β, a theoretical long-term cognitive concern that has been monitored in trials.",
    pathways: ["raas"]
  },
  {
    id: "mr", name: "Mineralocorticoid receptor", short: "MR", gene: "NR3C2",
    family: "Nuclear receptor (type I)", area: "Cardiovascular & renal",
    location: "Principal cells of the distal nephron and collecting duct, colon, heart, vascular smooth muscle and endothelium, adipose tissue, hippocampus",
    role: "Aldosterone receptor: drives Na⁺ retention and K⁺/H⁺ excretion. In heart, vessels and kidney it also promotes inflammation and fibrosis.",
    signalling: [
      "Aldosterone enters the cell and binds cytoplasmic MR (11β-HSD2 inactivates cortisol in the kidney so cortisol cannot occupy MR)",
      "Chaperones (HSP90) dissociate → MR translocates to the nucleus and binds hormone response elements",
      "↑ transcription of SGK1 → SGK1 phosphorylates Nedd4-2 → less ENaC ubiquitination → more ENaC in the apical membrane",
      "↑ Na⁺ reabsorption via ENaC and basolateral Na⁺/K⁺-ATPase → lumen-negative potential → K⁺ secretion (ROMK) and H⁺ secretion",
      "Non-epithelial MR (heart, kidney, vessels) → inflammatory and pro-fibrotic gene programmes"
    ],
    mechanism: "MR antagonists compete with aldosterone. Spironolactone and eplerenone are steroidal; finerenone is a non-steroidal antagonist with a different binding mode and a more balanced heart/kidney distribution.",
    drugs: [
      { name: "Spironolactone", action: "Steroidal MR antagonist (also blocks androgen receptor)", use: "HFrEF, resistant hypertension, primary hyperaldosteronism, cirrhotic ascites; acne/hirsutism" },
      { name: "Eplerenone", action: "More selective steroidal MR antagonist", use: "HFrEF and post-MI LV dysfunction, when spironolactone causes gynaecomastia" },
      { name: "Finerenone", action: "Non-steroidal selective MR antagonist", use: "CKD with type 2 diabetes and albuminuria; HF with LVEF ≥40%" }
    ],
    question: "Why add an MR antagonist to a patient already on an ACE inhibitor or ARB, if those already lower aldosterone?",
    answer: "RAAS blockade lowers aldosterone only transiently. Over months, aldosterone often returns towards or above baseline ('aldosterone escape'), driven by K⁺, ACTH and Ang II made by non-ACE routes. Aldosterone acting on MR in the heart, vessels and kidney causes fibrosis, inflammation and remodelling independent of blood pressure. Blocking the receptor itself removes this regardless of how much aldosterone is made, which is why MR antagonists add mortality benefit in HFrEF and reduce kidney and CV events in diabetic CKD.",
    pearl: "Hyperkalaemia is the main limit (MR drives K⁺ secretion), especially with ACEi/ARB, CKD or K⁺ supplements; check K⁺ and creatinine. Spironolactone also antagonises the androgen receptor (and has progestogenic activity) → gynaecomastia, breast pain, menstrual irregularity; eplerenone and finerenone are far more selective. Eplerenone and finerenone are CYP3A4 substrates (avoid strong inhibitors). Liquorice inhibits 11β-HSD2 → cortisol activates MR → apparent mineralocorticoid excess.",
    pathways: ["nuclear", "raas"]
  },
  {
    id: "ncc", name: "Na⁺–Cl⁻ cotransporter", short: "NCC", gene: "SLC12A3",
    family: "Transporter (SLC12)", area: "Cardiovascular & renal",
    location: "Apical membrane of the distal convoluted tubule (DCT)",
    role: "Reabsorbs ~5–10% of filtered Na⁺ in the cortical diluting segment. Fine-tunes Na⁺ balance and controls distal Na⁺ delivery (and therefore K⁺ secretion).",
    signalling: [
      "NCC moves 1 Na⁺ + 1 Cl⁻ from the lumen into the DCT cell (water-impermeable segment → dilutes urine)",
      "Regulated by the WNK–SPAK/OSR1 kinase cascade: Ang II, aldosterone and low K⁺ increase NCC phosphorylation and activity",
      "Basolateral Na⁺/K⁺-ATPase extrudes Na⁺; Na⁺/Ca²⁺ exchanger (NCX1) extrudes Ca²⁺ entering via apical TRPV5",
      "Thiazide block → ↓ intracellular Na⁺ → more Ca²⁺ extrusion and apical Ca²⁺ entry → ↑ Ca²⁺ reabsorption",
      "More Na⁺ delivered to the collecting duct + volume-driven aldosterone → K⁺ and H⁺ loss"
    ],
    mechanism: "Thiazide and thiazide-like diuretics bind NCC from the lumen (after proximal tubular secretion) and lock it in an inactive conformation. BP falls first from volume loss; long-term the effect is mainly reduced peripheral resistance.",
    drugs: [
      { name: "Indapamide / chlortalidone", action: "Thiazide-like NCC inhibitors (long-acting)", use: "Hypertension (preferred thiazide-type agents)" },
      { name: "Bendroflumethiazide / hydrochlorothiazide", action: "Thiazide NCC inhibitors", use: "Hypertension, oedema; hypercalciuria with calcium stones; nephrogenic diabetes insipidus" },
      { name: "Metolazone", action: "Thiazide-like NCC inhibitor", use: "Added to a loop diuretic for diuretic resistance (sequential nephron blockade)" }
    ],
    question: "Why are thiazides, rather than loop diuretics, the classic cause of severe hyponatraemia?",
    answer: "The DCT is the cortical diluting segment: removing NaCl there, without water, is how the kidney makes dilute urine. Blocking NCC impairs dilution, so free water cannot be excreted efficiently. Unlike loop diuretics, thiazides leave the medullary concentration gradient intact, so ADH (stimulated by volume depletion) can still drive water reabsorption in the collecting duct. The result is retention of free water relative to Na⁺, typically in older, low-weight women with low solute intake or high fluid intake.",
    pearl: "Metabolic effects: hypokalaemia, metabolic alkalosis, hypomagnesaemia, hyperuricaemia (gout; urate competes for tubular secretion and volume contraction increases urate reabsorption) and hyperglycaemia (hypokalaemia impairs insulin secretion). Hypocalciuria → useful for calcium stones but can unmask hyperparathyroidism. Gitelman syndrome = loss-of-function SLC12A3 mutations, a genetic mimic of chronic thiazide use. Gordon syndrome (WNK/KLHL3/CUL3 mutations, NCC overactivity) causes hypertension with hyperkalaemia and responds dramatically to thiazides.",
    pathways: ["raas"]
  },
  {
    id: "adra1", name: "α1-adrenergic receptors", short: "α1-AR", gene: "ADRA1A / ADRA1B / ADRA1D",
    family: "GPCR (Gq)", area: "Cardiovascular & renal",
    location: "Vascular smooth muscle (arterioles and veins), prostate stroma and bladder neck (mainly α1A), iris dilator muscle, urethra",
    role: "Sympathetic (noradrenaline) contraction of smooth muscle: vasoconstriction and venous tone, prostate and bladder neck tone, pupil dilation.",
    signalling: [
      "Noradrenaline / phenylephrine binds α1-AR",
      "Gαq → PLCβ → IP3 (Ca²⁺ release from SR) + DAG (PKC)",
      "Ca²⁺–calmodulin → MLCK → myosin light chain phosphorylation → contraction",
      "RhoA–ROCK inhibits myosin light chain phosphatase → Ca²⁺ sensitisation (sustained tone)",
      "Vessels: ↑ peripheral resistance and venous return; prostate/bladder neck: ↑ outflow resistance; iris: mydriasis"
    ],
    mechanism: "Antagonists ('-osins') relax vascular and prostatic smooth muscle. Subtype selectivity matters: α1A dominates in the prostate, so α1A-selective drugs relieve urinary symptoms with less effect on BP.",
    drugs: [
      { name: "Doxazosin", action: "Non-subtype-selective α1 antagonist", use: "BPH; add-on for resistant hypertension" },
      { name: "Tamsulosin", action: "α1A/α1D-selective ('uroselective') antagonist", use: "BPH lower urinary tract symptoms; distal ureteric stone expulsion" },
      { name: "Phenylephrine", action: "Selective α1 agonist", use: "IV vasopressor (e.g. anaesthesia-induced hypotension); mydriatic eye drops; topical decongestant" }
    ],
    question: "Why does doxazosin cause first-dose postural hypotension, while tamsulosin causes less hypotension but more intraoperative floppy iris syndrome?",
    answer: "Upright posture relies on α1-mediated venoconstriction and arteriolar tone; blocking α1B in vessels causes venous pooling and syncope, worst with the first dose and after dose increases before compensatory mechanisms adapt. Tamsulosin is selective for α1A, which predominates in the prostate rather than resistance vessels, so BP is less affected. But the iris dilator muscle also relies on α1A: chronic blockade leaves it hypotonic, so during cataract surgery the iris billows, prolapses and the pupil constricts. The effect can persist long after the drug is stopped, so surgeons must be told.",
    pearl: "Start doxazosin low, at bedtime (or use the modified-release form). Tamsulosin/silodosin commonly cause abnormal (reduced or retrograde) ejaculation. Phenylephrine raises BP and causes a reflex baroreceptor bradycardia. In the ALLHAT trial the doxazosin arm was stopped early for excess heart failure, so α-blockers are not first-line for hypertension.",
    pathways: ["gq"]
  },
  {
    id: "herg", name: "hERG potassium channel (Kv11.1)", short: "hERG", gene: "KCNH2",
    family: "Voltage-gated ion channel", area: "Cardiovascular & renal",
    location: "Ventricular and atrial cardiomyocytes; also some neurons and smooth muscle",
    role: "Carries IKr, the rapid delayed rectifier K⁺ current that dominates phase 3 repolarisation and sets action potential duration (and so the QT interval).",
    signalling: [
      "Depolarisation → hERG opens slowly but inactivates very rapidly → little current during the plateau",
      "As voltage begins to fall, channels recover from inactivation faster than they close → large outward IKr in phase 3",
      "IKr repolarises the cell and ends the refractory period",
      "Block of IKr → longer action potential and effective refractory period → ↑ QT",
      "Excess prolongation → L-type Ca²⁺ channels reactivate → early afterdepolarisations → torsades de pointes"
    ],
    mechanism: "Class III antiarrhythmics deliberately block IKr to prolong refractoriness and terminate or prevent re-entry. Many unrelated drugs block it accidentally: the hERG inner cavity is unusually large and lined by aromatic residues (Tyr652, Phe656) that trap lipophilic, basic molecules.",
    drugs: [
      { name: "Amiodarone", action: "Class III (also blocks Na⁺, Ca²⁺ channels and β-receptors)", use: "AF rhythm control, ventricular arrhythmias, cardiac arrest (VF/pulseless VT)" },
      { name: "Sotalol", action: "β-blocker + IKr blocker", use: "AF maintenance of sinus rhythm, ventricular arrhythmias" },
      { name: "Dofetilide", action: "Selective IKr blocker", use: "AF/atrial flutter rhythm control (in-hospital initiation, renal dosing)" }
    ],
    question: "Why does hERG block cause torsades de pointes, and why is hERG the main off-target liability in drug discovery?",
    answer: "Blocking IKr slows repolarisation, so the action potential and QT lengthen. A long plateau lets L-type Ca²⁺ channels recover and reopen, producing early afterdepolarisations; repolarisation also becomes uneven across the ventricular wall, providing a substrate for re-entry, and the result is polymorphic VT (torsades) that can degenerate into VF. hERG lacks the proline motif that narrows the inner cavity of other Kv channels, and aromatic residues in that cavity bind a huge range of lipophilic amines. Several drugs (terfenadine, cisapride, astemizole) were withdrawn for this, so regulators now require hERG assays and QT studies for new drugs.",
    pearl: "Risk rises with hypokalaemia and hypomagnesaemia, bradycardia (IKr blockers show reverse use-dependence), female sex, congenital long QT (LQT2 = KCNH2 loss of function) and CYP3A4 inhibitors raising drug levels. Common culprits: macrolides, fluoroquinolones, antipsychotics, methadone, ondansetron, citalopram. Treat torsades with IV magnesium. Amiodarone prolongs QT but rarely causes torsades (multichannel block evens out repolarisation); its toxicity is elsewhere: thyroid, lung fibrosis, liver, skin and corneal deposits, and it raises warfarin and digoxin levels.",
    pathways: ["ecc"]
  },
  {
    id: "myosin", name: "Cardiac β-myosin heavy chain", short: "Cardiac myosin", gene: "MYH7",
    family: "Motor protein (actin-activated ATPase)", area: "Cardiovascular & renal",
    location: "Thick filaments of ventricular cardiomyocyte sarcomeres (β-myosin is the main ventricular isoform in humans)",
    role: "The molecular motor of the heart: converts ATP hydrolysis into force by cycling cross-bridges with actin.",
    signalling: [
      "Ca²⁺ binds troponin C → tropomyosin shifts → myosin-binding sites on actin exposed",
      "Myosin head hydrolyses ATP → ADP·Pi (cocked) → binds actin",
      "Pi release → power stroke → thin filament slides → force",
      "ATP binds → head detaches → cycle repeats while Ca²⁺ is high",
      "Heads not needed rest in a folded, energy-saving 'super-relaxed state' on the thick filament; HCM mutations release more heads from this state → hypercontractility"
    ],
    mechanism: "Drugs act on the motor itself rather than on Ca²⁺ or cAMP. Inhibitors reduce the number of cross-bridges available (treating hypercontractile HCM); activators increase the number of heads engaged during systole (an approach to HFrEF).",
    drugs: [
      { name: "Mavacamten / aficamten", action: "Allosteric cardiac myosin inhibitors", use: "Symptomatic obstructive hypertrophic cardiomyopathy" },
      { name: "Omecamtiv mecarbil", action: "Cardiac myosin activator", use: "Investigated in HFrEF (modest benefit; not approved)" }
    ],
    question: "How does a myosin inhibitor relieve outflow obstruction in hypertrophic cardiomyopathy?",
    answer: "Most HCM is caused by sarcomere mutations (commonly MYH7 or MYBPC3) that free too many myosin heads from the super-relaxed state, so the ventricle is hypercontractile, relaxes poorly and wastes energy. In obstructive HCM, vigorous contraction of a thick septum causes high-velocity flow that drags the mitral leaflet forward (systolic anterior motion), obstructing the LV outflow tract. Mavacamten and aficamten reduce myosin ATPase activity and stabilise the super-relaxed state, so fewer cross-bridges form. Contractility normalises, the outflow gradient falls and diastolic filling improves, addressing the disease mechanism rather than just slowing the heart as β-blockers do.",
    pearl: "Too much inhibition causes systolic dysfunction, so LVEF is monitored by echo and the dose titrated (therapy is paused if LVEF falls below 50%). Mavacamten is metabolised by CYP2C19 and CYP3A4, so has many interactions and genotype-dependent exposure; it is teratogenic. Omecamtiv mecarbil contrasts with classic inotropes (dobutamine, milrinone), which raise cAMP and Ca²⁺ and increase arrhythmias and O₂ demand.",
    pathways: ["ecc"]
  },
  {
    id: "ttr", name: "Transthyretin", short: "TTR", gene: "TTR",
    family: "Transport protein (homotetramer)", area: "Cardiovascular & renal",
    location: "Made mainly by hepatocytes (also choroid plexus and retinal pigment epithelium); circulates in plasma and CSF",
    role: "Carries thyroxine and retinol (via retinol-binding protein). Misfolded TTR forms amyloid in the heart (ATTR cardiomyopathy) and nerves (ATTR polyneuropathy).",
    signalling: [
      "Liver secretes TTR as a stable homotetramer",
      "Tetramer dissociates into monomers: the rate-limiting step, accelerated by destabilising variants (hereditary ATTR) or ageing (wild-type ATTR)",
      "Monomers partially unfold → misassemble into oligomers and amyloid fibrils",
      "Fibrils deposit in myocardium (stiff, thick, restrictive ventricle) and in peripheral and autonomic nerves",
      "Stabilisers bind the thyroxine pockets and hold the tetramer together; silencers destroy TTR mRNA in hepatocytes"
    ],
    mechanism: "Two strategies: kinetic stabilisation of the tetramer (small molecules), or knocking down hepatic TTR production with siRNA or antisense oligonucleotides.",
    drugs: [
      { name: "Tafamidis / acoramidis", action: "TTR tetramer stabilisers (bind thyroxine-binding sites)", use: "ATTR cardiomyopathy (tafamidis also hereditary ATTR polyneuropathy in some regions)" },
      { name: "Patisiran / vutrisiran", action: "siRNA silencers of TTR mRNA (patisiran in lipid nanoparticles IV; vutrisiran GalNAc-conjugated subcutaneous)", use: "Hereditary ATTR polyneuropathy; vutrisiran also ATTR cardiomyopathy" },
      { name: "Eplontersen", action: "GalNAc-conjugated antisense oligonucleotide (RNase H degradation of TTR mRNA)", use: "Hereditary ATTR polyneuropathy" }
    ],
    question: "Why does simply stabilising the TTR tetramer slow amyloid disease?",
    answer: "TTR can only form amyloid as a monomer, and dissociation of the tetramer is the rate-limiting step of the whole cascade. A drug that binds the thyroxine pockets at the dimer–dimer interface raises the energy barrier to dissociation, so far fewer monomers are produced and fibril formation slows. Human genetics supports this: carriers of the T119M variant, which stabilises the tetramer, are protected against hereditary ATTR even alongside a pathogenic variant. Acoramidis was designed to mimic that protective stabilisation.",
    pearl: "Red flags for ATTR-CM: bilateral carpal tunnel syndrome, lumbar spinal stenosis, biceps tendon rupture, HFpEF with a thick LV but low-voltage ECG, and intolerance of antihypertensives. It can be diagnosed without biopsy by bone-tracer scintigraphy once a monoclonal protein (AL amyloid) is excluded. The V122I (Val142Ile) variant is common in people of West African ancestry. Silencers lower vitamin A (TTR carries retinol–RBP), so supplementation is given.",
    pathways: []
  },
  {
    id: "v2r", name: "Vasopressin V2 receptor", short: "V2R", gene: "AVPR2",
    family: "GPCR (Gs)", area: "Cardiovascular & renal",
    location: "Basolateral membrane of collecting duct principal cells; vascular endothelium",
    role: "Mediates the antidiuretic action of vasopressin (ADH): water reabsorption to concentrate urine. Endothelial V2 releases von Willebrand factor and factor VIII.",
    signalling: [
      "Vasopressin (released for ↑ plasma osmolality or ↓ volume) binds V2R",
      "Gαs → adenylyl cyclase → ↑cAMP → PKA",
      "PKA phosphorylates aquaporin-2 → AQP2 vesicles insert into the apical membrane",
      "Water flows down the medullary osmotic gradient into the cell and out via basolateral AQP3/AQP4 → concentrated urine",
      "Also ↑ urea transporters (inner medulla) and, long-term, ↑ AQP2 transcription"
    ],
    mechanism: "Agonists (desmopressin) cause antidiuresis without V1a-mediated vasoconstriction. Antagonists ('vaptans') cause aquaresis: excretion of free water without Na⁺ and K⁺ loss.",
    drugs: [
      { name: "Desmopressin", action: "Selective V2 agonist (vasopressin analogue)", use: "Central diabetes insipidus, nocturnal enuresis, nocturia; mild haemophilia A and type 1 von Willebrand disease" },
      { name: "Tolvaptan", action: "Selective oral V2 antagonist", use: "Hyponatraemia due to SIADH; slowing progression of ADPKD" }
    ],
    question: "How does a V2 antagonist slow autosomal dominant polycystic kidney disease?",
    answer: "In ADPKD, loss of polycystin function lowers intracellular Ca²⁺ in tubular cells and raises cAMP. cAMP drives both cyst epithelial proliferation (via B-Raf–MEK–ERK) and CFTR-mediated chloride and fluid secretion into the cysts, and vasopressin acting on V2R is a major source of that cAMP in collecting-duct-derived cysts. Tolvaptan blocks V2R, lowers cAMP and slows the growth in total kidney volume and the decline in eGFR. The cost is intense aquaresis: thirst, polyuria and nocturia.",
    pearl: "In hyponatraemia, start tolvaptan in hospital: correcting chronic hyponatraemia too fast risks osmotic demyelination. Tolvaptan can cause hepatotoxicity (regular LFTs in ADPKD) and is a CYP3A4 substrate. Desmopressin's main risk is water intoxication and hyponatraemia, so fluid intake is restricted. Nephrogenic DI is most often X-linked AVPR2 loss of function; lithium causes acquired nephrogenic DI by downregulating AQP2.",
    pathways: ["gs"]
  },

  // ───────────── Metabolic & endocrine ─────────────
  {
    id: "insr", name: "Insulin receptor", short: "INSR", gene: "INSR",
    family: "Receptor tyrosine kinase (insulin receptor family)", area: "Metabolic & endocrine",
    location: "Liver, skeletal muscle and adipose tissue (metabolic actions); also widely expressed",
    role: "Mediates insulin's anabolic actions: glucose uptake, glycogen, fat and protein synthesis, and suppression of hepatic glucose output and lipolysis.",
    signalling: [
      "Insulin binds the α-subunits of the pre-formed (αβ)₂ receptor dimer → β-subunit tyrosine kinase autophosphorylates",
      "Receptor phosphorylates IRS-1/2 → recruits PI3K → PIP3 → PDK1 → AKT",
      "AKT phosphorylates AS160 → GLUT4 vesicles move to the membrane in muscle and fat → glucose uptake",
      "AKT inhibits GSK3 (↑ glycogen synthesis) and FOXO1 (↓ gluconeogenesis); activates PDE3B (↓ cAMP → ↓ lipolysis) and mTORC1",
      "Shc/Grb2 → Ras–MAPK → mitogenic and growth effects"
    ],
    mechanism: "Insulin analogues are all full receptor agonists. They differ in how fast they leave the injection site (hexamer dissociation, precipitation, albumin binding), which sets their time-action profile.",
    drugs: [
      { name: "Insulin aspart / lispro / glulisine", action: "Rapid-acting analogues (amino acid changes weaken hexamer formation → fast absorption)", use: "Mealtime (bolus) insulin, insulin pumps, DKA (soluble IV insulin)" },
      { name: "Insulin glargine / degludec", action: "Basal analogues (glargine precipitates at tissue pH; degludec forms multi-hexamer chains)", use: "Once-daily basal insulin in type 1 and type 2 diabetes" },
      { name: "Insulin icodec", action: "Once-weekly basal analogue (fatty acid side chain → strong reversible albumin binding, slow clearance)", use: "Basal insulin in type 2 diabetes (approved in the EU and several other regions)" }
    ],
    question: "Why does insulin lower serum potassium, and why does this matter in diabetic ketoacidosis?",
    answer: "Insulin stimulates Na⁺/K⁺-ATPase in muscle and liver, driving K⁺ from the extracellular fluid into cells. This is why IV insulin with glucose is an emergency treatment for hyperkalaemia. In DKA, insulin deficiency and acidosis shift K⁺ out of cells, and osmotic diuresis loses it in urine, so total body K⁺ is depleted even when serum K⁺ looks normal or high. Starting insulin abruptly moves K⁺ back into cells and can cause dangerous hypokalaemia, so K⁺ is monitored closely and replaced in the fluids.",
    pearl: "Hypoglycaemia and weight gain are on-target effects. Repeated injection at one site causes lipohypertrophy and erratic absorption. Insulin resistance can be genetic: INSR mutations cause Donohue syndrome (leprechaunism), Rabson–Mendenhall syndrome and type A insulin resistance. Selective (hepatic) insulin resistance in type 2 diabetes: glucose output is resistant while lipogenesis stays insulin-sensitive, contributing to fatty liver.",
    pathways: ["insulin", "pi3k", "mapk"]
  },
  {
    id: "katp", name: "ATP-sensitive K⁺ channel (K_ATP)", short: "K_ATP", gene: "ABCC8 (SUR1) / KCNJ11 (Kir6.2)",
    family: "Inward-rectifier K⁺ channel + ABC-family regulatory subunit", area: "Metabolic & endocrine",
    location: "Pancreatic β cells (Kir6.2/SUR1); also brain. Related channels with SUR2 subunits in heart and vascular smooth muscle",
    role: "Couples β-cell metabolism to electrical activity: the glucose sensor's switch for insulin secretion.",
    signalling: [
      "Glucose enters the β cell → glucokinase → glycolysis and oxidative phosphorylation → ↑ ATP/ADP ratio",
      "ATP binds Kir6.2 → K_ATP closes (MgADP acting on SUR1 normally keeps it open)",
      "Less K⁺ efflux → membrane depolarisation",
      "Voltage-gated Ca²⁺ channels open → Ca²⁺ influx",
      "Ca²⁺ triggers insulin granule exocytosis"
    ],
    mechanism: "Sulfonylureas and glinides bind SUR1 and close the channel regardless of glucose, so insulin is released even when glucose is normal. Diazoxide binds SUR1 and holds the channel open, suppressing insulin secretion.",
    drugs: [
      { name: "Gliclazide / glimepiride / glibenclamide", action: "Sulfonylureas (SUR1 binding → channel closure)", use: "Type 2 diabetes; neonatal diabetes due to K_ATP mutations; HNF1A-MODY" },
      { name: "Repaglinide / nateglinide", action: "Glinides (short-acting SUR1-mediated channel closure)", use: "Prandial glucose control in type 2 diabetes" },
      { name: "Diazoxide", action: "K_ATP opener", use: "Hyperinsulinaemic hypoglycaemia (congenital hyperinsulinism, insulinoma)" }
    ],
    question: "Why can babies with some forms of permanent neonatal diabetes switch from insulin injections to sulfonylurea tablets?",
    answer: "Activating mutations in KCNJ11 (Kir6.2) or ABCC8 (SUR1) make the channel less sensitive to ATP, so it stays open even when glucose and ATP rise. The β cell stays hyperpolarised and cannot release insulin, although it still makes insulin. High-dose sulfonylureas bind SUR1 and force the mutant channel shut, restoring depolarisation and glucose-stimulated secretion. Many patients achieve better control than with insulin, which shows how a molecular diagnosis can change treatment.",
    pearl: "Sulfonylurea side effects follow from glucose-independent secretion: hypoglycaemia (prolonged with long-acting agents and in renal impairment; octreotide is used in overdose) and weight gain. Because K_ATP is also expressed in brain, some neonatal mutations cause developmental delay and epilepsy (DEND syndrome). Loss-of-function mutations cause the opposite, congenital hyperinsulinism. Opening vascular SUR2B channels explains minoxidil and nicorandil vasodilation; diazoxide causes fluid retention and hypertrichosis.",
    pathways: ["insulin"]
  },
  {
    id: "thr", name: "Thyroid hormone axis (THR-β and thyroid peroxidase)", short: "THR-β / TPO", gene: "THRB / TPO",
    family: "Nuclear receptor (type II, RXR heterodimer) + enzyme (haem peroxidase)", area: "Metabolic & endocrine",
    location: "TPO: apical membrane of thyroid follicular cells. THR-β: liver (dominant isoform), pituitary and hypothalamus, cochlea, retina. THR-α: heart, bone, brain, skeletal muscle",
    role: "TPO makes thyroid hormone; thyroid hormone receptors mediate its effects on metabolic rate, lipid handling, heart rate, development and TSH feedback.",
    signalling: [
      "TSH → TSH receptor (Gs) → iodide uptake via NIS and thyroglobulin synthesis",
      "TPO (using H₂O₂) oxidises iodide, iodinates tyrosines on thyroglobulin and couples them → T4 (and some T3)",
      "Deiodinases in tissues convert T4 → active T3",
      "T3 binds THR (as an RXR heterodimer on thyroid response elements) → co-repressors released, co-activators recruited → transcription",
      "Liver THR-β: ↑ LDLR, ↑ fatty acid oxidation, ↓ liver fat; pituitary THR-β: negative feedback on TSH; heart THR-α: ↑ heart rate and contractility"
    ],
    mechanism: "Replace the hormone (levothyroxine), block its synthesis at TPO (thionamides), or selectively activate the liver receptor isoform (resmetirom).",
    drugs: [
      { name: "Levothyroxine", action: "Synthetic T4 (converted to T3 in tissues)", use: "Hypothyroidism; TSH suppression after thyroid cancer surgery" },
      { name: "Carbimazole / propylthiouracil", action: "Thionamide TPO inhibitors (PTU also blocks peripheral T4 → T3 conversion)", use: "Graves' disease and toxic nodular hyperthyroidism; PTU in first-trimester pregnancy and thyroid storm" },
      { name: "Resmetirom", action: "Liver-directed THR-β-selective agonist", use: "MASH (metabolic dysfunction-associated steatohepatitis) with moderate to advanced fibrosis" }
    ],
    question: "Why can a THR-β-selective agonist treat fatty liver disease without the cardiac effects of thyroid hormone?",
    answer: "Thyroid hormone's beneficial liver effects (more fat oxidation, less lipogenesis, more LDL receptors) are mediated mainly by THR-β, the dominant isoform in hepatocytes. Its harmful effects on the heart (tachycardia, AF) and bone are mediated mainly by THR-α. Resmetirom binds THR-β preferentially and is concentrated in the liver, so it reduces liver fat, inflammation and LDL cholesterol while sparing THR-α in the heart. People with resistance to thyroid hormone β (THRB mutations) show the logic in reverse: high hormone levels with tachycardia, because their intact THR-α still responds.",
    pearl: "Carbimazole can cause agranulocytosis (warn about sore throat or fever → urgent blood count) and is avoided in the first trimester (embryopathy); PTU carries a risk of severe hepatotoxicity. Levothyroxine has a ~7-day half-life (dose changes take ~6 weeks to show in TSH) and its absorption is reduced by calcium, iron and PPIs; over-replacement risks AF and osteoporosis. Resmetirom is metabolised by CYP2C8 and raises some statin levels, so statin doses are capped.",
    pathways: ["nuclear", "lipid"]
  },
  {
    id: "npc1l1", name: "Niemann–Pick C1-Like 1", short: "NPC1L1", gene: "NPC1L1",
    family: "Transporter (sterol-sensing membrane protein)", area: "Metabolic & endocrine",
    location: "Brush border of jejunal enterocytes; in humans also the canalicular membrane of hepatocytes",
    role: "Takes up dietary and biliary cholesterol (and plant sterols) from the gut lumen; in the liver it recaptures cholesterol from bile.",
    signalling: [
      "Cholesterol in bile acid micelles binds NPC1L1 at the brush border",
      "Clathrin/AP2-mediated endocytosis internalises the NPC1L1–cholesterol complex",
      "Enterocyte esterifies cholesterol (ACAT2) and packages it into chylomicrons → lymph → remnants delivered to the liver",
      "Less absorbed cholesterol → ↓ hepatic cholesterol → SREBP2 activation",
      "SREBP2 → ↑ LDL receptors → ↑ LDL clearance from plasma (but also ↑ HMG-CoA reductase and PCSK9)"
    ],
    mechanism: "Ezetimibe (and its active glucuronide) binds NPC1L1 and blocks the cholesterol-induced endocytosis. It undergoes enterohepatic recycling, giving a long half-life and once-daily dosing.",
    drugs: [
      { name: "Ezetimibe", action: "NPC1L1 inhibitor", use: "Hypercholesterolaemia, alone (statin intolerance) or added to a statin; sitosterolaemia" },
      { name: "Statin + ezetimibe (e.g. simvastatin/ezetimibe)", action: "Synthesis inhibition + absorption inhibition", use: "LDL lowering when a statin alone is not enough; reduced CV events after ACS (IMPROVE-IT)" }
    ],
    question: "Why are ezetimibe and statins additive for LDL lowering?",
    answer: "The liver's cholesterol pool comes from two sources: synthesis (via HMG-CoA reductase) and absorption from the gut. Blocking one source alone triggers compensation from the other: statins increase intestinal absorption, and ezetimibe increases hepatic synthesis. Combining them blocks both, so hepatic cholesterol falls further, SREBP2 drives more LDL receptor expression and LDL clearance increases. Ezetimibe lowers LDL by about 20% alone and by a similar extra amount on top of a statin, more than doubling the statin dose would achieve.",
    pearl: "Well tolerated; myalgia is uncommon. Genetic support: people with loss-of-function NPC1L1 variants have lower LDL and lower coronary risk. Sitosterolaemia (ABCG5/ABCG8 loss, so plant sterols aren't pumped back out) responds well to ezetimibe. Bempedoic acid is another non-statin option: a prodrug activated only in the liver (not muscle) that inhibits ATP-citrate lyase upstream of HMG-CoA reductase, so causes little myalgia, but can raise uric acid (gout) and is combined with ezetimibe in a fixed-dose tablet.",
    pathways: ["lipid"]
  },

  // ───────────── Ophthalmology ─────────────
  {
    id: "fp", name: "Prostaglandin F receptor", short: "FP receptor", gene: "PTGFR",
    family: "GPCR (Gq)", area: "Ophthalmology",
    location: "Ciliary muscle, iris, trabecular meshwork; also uterine myometrium, corpus luteum, hair follicles",
    role: "Receptor for PGF2α. In the eye it remodels the ciliary muscle extracellular matrix; in the uterus it causes contraction.",
    signalling: [
      "Ester prodrug penetrates the cornea → hydrolysed by corneal esterases to the active acid",
      "Acid binds FP receptor → Gαq → PLCβ → IP3/Ca²⁺ + DAG/PKC",
      "Downstream MAPK signalling → ↑ matrix metalloproteinase expression in the ciliary muscle",
      "MMPs degrade collagen between ciliary muscle bundles → wider intermuscular spaces",
      "↑ uveoscleral (unconventional) outflow of aqueous humour → ↓ intraocular pressure"
    ],
    mechanism: "PGF2α analogues ('-prosts') lower IOP by increasing outflow rather than reducing aqueous production. Once-daily dosing (usually evening) gives a sustained 24-hour effect.",
    drugs: [
      { name: "Latanoprost / travoprost / bimatoprost / tafluprost", action: "FP receptor agonists (prostaglandin analogues)", use: "First-line for open-angle glaucoma and ocular hypertension" },
      { name: "Bimatoprost (cosmetic)", action: "FP agonist on hair follicles", use: "Eyelash hypotrichosis" },
      { name: "Carboprost", action: "Synthetic PGF2α analogue (FP agonist on myometrium)", use: "Postpartum haemorrhage due to uterine atony" }
    ],
    question: "How do prostaglandin analogues lower intraocular pressure, and why do they change iris colour?",
    answer: "Aqueous humour drains via the trabecular meshwork or the uveoscleral route through the ciliary muscle. FP activation induces matrix metalloproteinases that remodel the extracellular matrix of the ciliary muscle, widening the spaces between muscle bundles and increasing uveoscleral outflow. Because this needs gene expression and matrix turnover, the full effect builds over days to weeks. FP signalling also increases melanin synthesis in iris stromal melanocytes (without proliferation), so irides, especially mixed-colour (hazel, green-brown) ones, darken permanently.",
    pearl: "Local, on-target effects: conjunctival hyperaemia, longer, thicker, darker eyelashes (prolonged anagen phase), periocular skin darkening and orbital fat atrophy (deepened upper lid sulcus, especially bimatoprost). Use with caution in active uveitis, herpetic keratitis and in those at risk of cystoid macular oedema. Few systemic effects, unlike topical β-blockers (timolol: bronchospasm, bradycardia). Carboprost is avoided in asthma (FP-mediated bronchoconstriction).",
    pathways: ["gq", "eicosanoid"]
  },
  {
    id: "ca", name: "Carbonic anhydrase II", short: "CA II", gene: "CA2",
    family: "Enzyme (zinc metalloenzyme)", area: "Ophthalmology",
    location: "Ciliary body epithelium, proximal tubule (with membrane-bound CA IV), red cells, choroid plexus, osteoclasts",
    role: "Catalyses CO₂ + H₂O ⇌ HCO₃⁻ + H⁺. Supplies bicarbonate for aqueous humour and CSF secretion, and mediates proximal tubular bicarbonate reabsorption.",
    signalling: [
      "CA II in the ciliary epithelium generates HCO₃⁻, which is secreted with Na⁺ into the posterior chamber",
      "Water follows osmotically → aqueous humour production",
      "Kidney: luminal CA IV and cytosolic CA II let the proximal tubule reclaim filtered HCO₃⁻",
      "Choroid plexus: HCO₃⁻ transport drives CSF secretion",
      "Inhibition → ↓ aqueous (↓ IOP), ↓ CSF, bicarbonaturia → hyperchloraemic metabolic acidosis and alkaline urine"
    ],
    mechanism: "Sulfonamide inhibitors bind the active-site zinc. Topical drugs act on the eye with minimal systemic effect; oral acetazolamide acts throughout the body.",
    drugs: [
      { name: "Dorzolamide / brinzolamide", action: "Topical CA inhibitors", use: "Open-angle glaucoma and ocular hypertension (often combined with timolol)" },
      { name: "Acetazolamide", action: "Systemic CA inhibitor (oral/IV)", use: "Acute angle-closure glaucoma, prevention of acute mountain sickness, idiopathic intracranial hypertension" }
    ],
    question: "How does acetazolamide help prevent altitude sickness?",
    answer: "At altitude, hypoxia drives hyperventilation, but the resulting respiratory alkalosis then inhibits the respiratory centre and limits further ventilation. Acetazolamide blocks proximal tubular bicarbonate reabsorption, so HCO₃⁻ is lost in urine and a mild metabolic acidosis develops. The acidosis offsets the alkalosis, allowing ventilation to rise further and improving oxygenation. In effect, it speeds up the renal compensation that normally takes days of acclimatisation.",
    pearl: "Systemic effects follow from mechanism: metabolic acidosis, paraesthesia, altered taste (carbonated drinks taste flat), polyuria, hypokalaemia and calcium phosphate kidney stones (alkaline urine, low citrate). The diuretic effect is self-limiting, because as plasma HCO₃⁻ falls, less is filtered. Avoid in severe liver disease (alkaline urine reduces ammonium excretion → encephalopathy). Topical CAIs cause stinging, bitter taste and, rarely, corneal decompensation. Genetic CA II deficiency causes osteopetrosis, renal tubular acidosis and cerebral calcification.",
    pathways: []
  }
);
