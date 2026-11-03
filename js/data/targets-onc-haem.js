// Additional oncology and haematology targets: plasma-cell and B-cell antigens, apoptosis, protein degradation,
// cytotoxic chemotherapy targets (tubulin, topoisomerases, folate pathway), LAG-3, ALK, thrombin and haematopoietic growth-factor receptors.
window.FC_TARGETS.push(
  // ───────────── Oncology ─────────────
  {
    id: "cd38", name: "CD38", short: "CD38", gene: "CD38",
    family: "Cell-surface ectoenzyme (NAD⁺ glycohydrolase / ADP-ribosyl cyclase)", area: "Oncology",
    location: "Very high on plasma cells and myeloma cells; lower on NK cells, activated T and B cells, myeloid cells and red blood cells",
    role: "Breaks down extracellular NAD⁺ to cyclic ADP-ribose and ADP-ribose (Ca²⁺-mobilising messengers). Together with CD203a and CD73 it feeds adenosine production, which suppresses immune cells. Also acts as an adhesion molecule (binds CD31).",
    signalling: [
      "Anti-CD38 IgG1 binds CD38 on a myeloma cell",
      "Fc engages FcγRIII on NK cells → antibody-dependent cellular cytotoxicity (ADCC)",
      "Fc fixes C1q → complement-dependent cytotoxicity (CDC)",
      "Fc engages macrophage Fcγ receptors → antibody-dependent cellular phagocytosis (ADCP)",
      "Cross-linking → direct apoptosis; ↓ CD38 enzyme activity → less immunosuppressive adenosine",
      "CD38⁺ regulatory T cells, regulatory B cells and myeloid-derived suppressor cells are depleted → T-cell expansion"
    ],
    mechanism: "Monoclonal antibodies that kill CD38-high myeloma cells through several Fc-dependent effector mechanisms, and also remove CD38⁺ immunosuppressive cells.",
    drugs: [
      { name: "Daratumumab (Darzalex)", action: "Anti-CD38 IgG1κ antibody (IV, or subcutaneous with hyaluronidase)", use: "Multiple myeloma at all lines, usually combined with lenalidomide, bortezomib and dexamethasone; AL amyloidosis" },
      { name: "Isatuximab", action: "Anti-CD38 IgG1 antibody (distinct epitope)", use: "Multiple myeloma (with pomalidomide or carfilzomib plus dexamethasone, and in first-line combinations)" }
    ],
    question: "Why does a patient on daratumumab cause problems for the blood bank, and how is it solved?",
    answer: "Red blood cells carry a small amount of CD38. Daratumumab in the patient's plasma coats any reagent red cells in the antibody screen, so the indirect antiglobulin test is positive against every panel cell. That pan-reactivity can hide a real alloantibody. Labs treat the reagent red cells with dithiothreitol (DTT), which denatures CD38 so the drug no longer binds. DTT also destroys Kell antigens, so patients are given K-negative blood unless they are known to be K-negative.",
    pearl: "Do a baseline blood group, antibody screen and ideally red-cell phenotype before the first dose. Daratumumab is an IgG1κ, so it can show up as a small M-protein band on serum electrophoresis and immunofixation, which can confuse response assessment in IgG-κ myeloma. Infusion reactions are common with the first IV dose, so patients are premedicated (steroid, antihistamine, paracetamol). NK cells also carry CD38 and fall on treatment. Infections increase.",
    pathways: ["bcell", "complement"]
  },
  {
    id: "bcma", name: "B-cell maturation antigen", short: "BCMA", gene: "TNFRSF17",
    family: "TNF receptor superfamily", area: "Oncology",
    location: "Restricted to plasma cells, plasmablasts and some mature B cells; present on almost all myeloma cells. Absent from naive B cells and haematopoietic stem cells",
    role: "Survival receptor for long-lived plasma cells in the bone marrow niche. Binds APRIL (high affinity) and BAFF (lower affinity).",
    signalling: [
      "APRIL (or BAFF) from bone marrow stromal and myeloid cells binds BCMA on a plasma cell",
      "Receptor recruits TRAF adaptor proteins",
      "Canonical and non-canonical NF-κB activation; also MAPK and PI3K–AKT",
      "↑ anti-apoptotic proteins (especially MCL-1) → plasma-cell survival",
      "γ-Secretase cleaves BCMA from the surface → soluble BCMA in serum (a myeloma marker and a decoy for antibodies)"
    ],
    mechanism: "BCMA is used as a highly specific 'address' on myeloma cells. CAR-T cells and T-cell-engaging bispecific antibodies redirect T cells to kill BCMA⁺ cells. An antibody–drug conjugate delivers a cytotoxin.",
    drugs: [
      { name: "Idecabtagene vicleucel (Abecma) / ciltacabtagene autoleucel (Carvykti)", action: "Autologous anti-BCMA CAR-T cells (4-1BB costimulatory domain)", use: "Relapsed/refractory multiple myeloma" },
      { name: "Teclistamab / elranatamab", action: "BCMA × CD3 bispecific T-cell engagers", use: "Relapsed/refractory multiple myeloma" },
      { name: "Belantamab mafodotin", action: "Anti-BCMA antibody–drug conjugate (auristatin payload, MMAF)", use: "Relapsed/refractory multiple myeloma, in combination" }
    ],
    question: "How do BCMA bispecific antibodies kill myeloma cells, and why does this cause cytokine release syndrome?",
    answer: "One arm binds BCMA on the myeloma cell and the other binds CD3 on any nearby T cell. This forms an artificial immune synapse that activates the T cell without needing MHC or antigen-specific TCR recognition. The activated T cell releases perforin and granzymes and kills the target. Mass T-cell activation also releases IFN-γ, which drives macrophages to release IL-6 and other cytokines → fever, hypotension and hypoxia (CRS). Step-up dosing reduces CRS, and tocilizumab (anti-IL-6R) treats it.",
    pearl: "On-target loss of normal plasma cells → hypogammaglobulinaemia and serious infections, so immunoglobulin replacement and antimicrobial prophylaxis are often needed. Neurotoxicity (ICANS) can occur with CAR-T and bispecifics; cilta-cel can also cause delayed movement and neurocognitive toxicity (including parkinsonism). Belantamab causes corneal toxicity (keratopathy, blurred vision), so eye examinations are needed before each dose. Relapse can follow loss of BCMA from the tumour.",
    pathways: ["nfkb", "bcell", "tcell"]
  },
  {
    id: "cd19", name: "CD19", short: "CD19", gene: "CD19",
    family: "B-cell co-receptor (Ig superfamily)", area: "Oncology",
    location: "B-lineage cells from pro-B cell to mature B cell; lost on most plasma cells. Present on most B-cell leukaemias and lymphomas",
    role: "Forms a complex with CD21 and CD81 that lowers the threshold for B-cell receptor activation, especially when antigen is tagged with complement (C3d).",
    signalling: [
      "Antigen engages the BCR; C3d-coated antigen also engages CD21, bringing in CD19",
      "LYN phosphorylates CD19 cytoplasmic tyrosines",
      "Phospho-CD19 recruits PI3K and VAV → PI3K–AKT signalling",
      "Amplified BCR signalling → B-cell activation, proliferation and survival",
      "As a drug target, the key point is lineage restriction: CD19 is on almost all malignant and normal B cells but not on stem cells"
    ],
    mechanism: "CD19 is a lineage marker used to redirect T cells. CAR-T cells and the bispecific blinatumomab make T cells kill every CD19⁺ cell, malignant or normal.",
    drugs: [
      { name: "Tisagenlecleucel (Kymriah) / axicabtagene ciloleucel (Yescarta) / lisocabtagene maraleucel (Breyanzi)", action: "Autologous anti-CD19 CAR-T cells", use: "Relapsed/refractory DLBCL and other large B-cell lymphomas; B-ALL in children and young adults (tisagenlecleucel); follicular lymphoma, CLL" },
      { name: "Blinatumomab", action: "CD19 × CD3 bispecific T-cell engager (BiTE), continuous IV infusion", use: "B-cell acute lymphoblastic leukaemia, including measurable residual disease" },
      { name: "Loncastuximab tesirine / tafasitamab", action: "Anti-CD19 antibody–drug conjugate / Fc-enhanced anti-CD19 antibody", use: "Relapsed/refractory DLBCL" }
    ],
    question: "How does a CD19 CAR-T cell work, and why does it cause long-term B-cell aplasia?",
    answer: "The patient's own T cells are engineered to express a chimeric antigen receptor: an anti-CD19 antibody fragment (scFv) joined to CD3ζ plus a costimulatory domain (CD28 or 4-1BB). Binding CD19 activates the T cell directly, without MHC, so it kills the target and expands in the body. The CAR cannot tell malignant from normal B cells, so every CD19⁺ B cell is destroyed for as long as the CAR-T cells persist. Ongoing B-cell aplasia is therefore an on-target effect and a marker that the CAR-T cells are still working. Plasma cells are mostly CD19-negative, so some existing antibody production continues.",
    pearl: "Cytokine release syndrome is driven largely by IL-6 from macrophages and is treated with tocilizumab. ICANS (neurotoxicity: confusion, aphasia, seizures) responds to steroids rather than tocilizumab. Lymphodepletion (fludarabine + cyclophosphamide) is given before infusion to help CAR-T expansion. Hypogammaglobulinaemia may need immunoglobulin replacement. Relapse with CD19-negative disease (antigen loss or splicing variants) is a major escape route. Rare secondary T-cell malignancies have been reported after CAR-T.",
    pathways: ["bcell", "tcell", "pi3k"]
  },
  {
    id: "bcl2", name: "B-cell lymphoma 2", short: "BCL-2", gene: "BCL2",
    family: "BCL-2 family (anti-apoptotic)", area: "Oncology",
    location: "Outer mitochondrial membrane and ER. Overexpressed in CLL, follicular lymphoma (t(14;18)) and many AML cells",
    role: "Gatekeeper of the intrinsic (mitochondrial) apoptosis pathway. It binds and neutralises pro-apoptotic BH3-only proteins (e.g. BIM) and the effectors BAX and BAK.",
    signalling: [
      "Cell stress (DNA damage, growth-factor loss, oncogene activity) → ↑ BH3-only proteins (BIM, PUMA, NOXA)",
      "BCL-2 sequesters BIM in its BH3-binding groove → cell survives ('primed for death')",
      "If BIM is freed → BAX/BAK oligomerise → mitochondrial outer membrane permeabilisation (MOMP)",
      "Cytochrome c release → APAF-1 apoptosome → caspase-9",
      "Caspase-3/7 activation → apoptosis"
    ],
    mechanism: "BH3 mimetics occupy the BCL-2 groove and displace BIM, so cancer cells that depend on BCL-2 to stay alive undergo apoptosis within hours.",
    drugs: [
      { name: "Venetoclax", action: "Selective BCL-2 inhibitor (BH3 mimetic), oral", use: "CLL (with obinutuzumab, or with ibrutinib, as fixed-duration therapy); AML unfit for intensive chemotherapy (with azacitidine or low-dose cytarabine)" }
    ],
    question: "Why is CLL so dependent on BCL-2, and why must venetoclax be started with a ramp-up?",
    answer: "In CLL, deletion of 13q14 often removes miR-15a and miR-16-1, microRNAs that normally repress BCL2, so BCL-2 is strongly overexpressed. CLL cells carry high levels of BIM held in check by BCL-2, so they are 'primed' and survive only because BCL-2 keeps BIM bound. Venetoclax releases BIM and the cells die quickly. This rapid, large-scale cell death releases potassium, phosphate and uric acid (tumour lysis syndrome), which can cause arrhythmia and kidney injury. The dose is therefore increased weekly over 5 weeks in CLL, with hydration, uric-acid lowering and blood monitoring.",
    pearl: "Venetoclax was designed to spare BCL-xL. The earlier dual inhibitor navitoclax caused dose-limiting thrombocytopenia because platelets depend on BCL-xL to survive. Neutropenia is the main toxicity. It is a CYP3A4 and P-gp substrate: strong CYP3A inhibitors (posaconazole, clarithromycin) need large dose reductions, and are contraindicated during the CLL ramp-up. Resistance: BCL2 mutations in the binding groove (e.g. G101V) or switching to MCL-1 dependence.",
    pathways: ["apoptosis"]
  },
  {
    id: "crbn", name: "Cereblon", short: "CRBN", gene: "CRBN",
    family: "E3 ubiquitin ligase substrate receptor (CRL4–CRBN)", area: "Oncology",
    location: "Ubiquitous; cytoplasm and nucleus",
    role: "Substrate receptor of the cullin-4 RING E3 ligase complex (CUL4–DDB1–RBX1), which tags selected proteins with ubiquitin for proteasomal degradation.",
    signalling: [
      "Immunomodulatory drug (IMiD) binds a pocket on cereblon via its glutarimide ring",
      "The drug changes cereblon's surface → it now recruits 'neosubstrates' it would not normally bind (molecular glue)",
      "Neosubstrates IKZF1 (Ikaros) and IKZF3 (Aiolos) are ubiquitinated and degraded by the proteasome",
      "Myeloma cells: loss of IKZF1/3 → ↓ IRF4 and MYC → cell death",
      "T cells: IKZF1/3 normally repress the IL-2 gene → ↑ IL-2 → T-cell and NK-cell activation",
      "Lenalidomide also degrades CK1α (casein kinase 1α)"
    ],
    mechanism: "IMiDs are molecular glues. Rather than inhibiting cereblon, they redirect it to destroy transcription factors that myeloma cells depend on, while boosting T-cell and NK-cell immunity.",
    drugs: [
      { name: "Lenalidomide (Revlimid)", action: "Cereblon modulator (degrades IKZF1/3 and CK1α)", use: "Multiple myeloma (induction and maintenance), del(5q) MDS, some lymphomas" },
      { name: "Pomalidomide (Pomalyst/Imnovid)", action: "More potent cereblon modulator", use: "Relapsed/refractory multiple myeloma" },
      { name: "Thalidomide", action: "First-generation cereblon modulator", use: "Multiple myeloma; erythema nodosum leprosum" }
    ],
    question: "How does lenalidomide kill myeloma cells, and why is it particularly effective in del(5q) MDS?",
    answer: "Lenalidomide binds cereblon and acts as a molecular glue, making the CRL4–CRBN ligase ubiquitinate IKZF1 and IKZF3. Myeloma cells need these transcription factors to keep IRF4 and MYC switched on, so degrading them kills the cells, and loss of IKZF1/3 in T cells releases IL-2 to boost anti-tumour immunity. Lenalidomide also triggers degradation of CK1α, encoded by CSNK1A1 on chromosome 5q. Cells with del(5q) have only one copy of CSNK1A1, so they have less CK1α to begin with. Further drug-induced degradation pushes the malignant clone below a survival threshold while normal cells, with two copies, cope.",
    pearl: "Thalidomide's teratogenicity (phocomelia) is linked to cereblon-dependent degradation of the developmental transcription factor SALL4. All IMiDs therefore need a strict pregnancy prevention programme. Venous thromboembolism risk rises, especially with dexamethasone, so patients get aspirin or LMWH prophylaxis. Lenalidomide is renally cleared (adjust the dose in CKD) and causes cytopenias. Thalidomide causes peripheral neuropathy, sedation and constipation. Cereblon ligands are also the 'hook' used in many PROTAC degraders.",
    pathways: ["tcell"]
  },
  {
    id: "tubulin", name: "Tubulin / microtubules", short: "Tubulin", gene: "TUBA / TUBB genes",
    family: "Cytoskeletal GTPase polymer (α/β-tubulin heterodimers)", area: "Oncology",
    location: "All nucleated cells. Microtubules form the mitotic spindle and the tracks for axonal transport",
    role: "Microtubules grow and shrink constantly (dynamic instability). This lets the mitotic spindle capture and separate chromosomes, and supports intracellular transport, including along long axons.",
    signalling: [
      "GTP-bound α/β-tubulin dimers add to the plus end → microtubule growth",
      "GTP hydrolysis in the lattice → instability → rapid shrinkage ('catastrophe')",
      "In mitosis, dynamic spindle microtubules attach to kinetochores",
      "Drugs that freeze dynamics (stabilise or destabilise) → unattached kinetochores → spindle assembly checkpoint stays on",
      "Prolonged mitotic arrest → apoptosis (or abnormal exit and death)"
    ],
    mechanism: "Taxanes stabilise microtubules and block disassembly. Vinca alkaloids and eribulin block polymerisation. Both kinds stop the spindle from working, so dividing cells arrest in mitosis.",
    drugs: [
      { name: "Paclitaxel / docetaxel (nab-paclitaxel)", action: "Taxanes: bind β-tubulin inside the microtubule and stabilise it", use: "Breast, ovarian, lung, prostate (docetaxel), gastric and pancreatic (nab-paclitaxel) cancer" },
      { name: "Vincristine / vinblastine / vinorelbine", action: "Vinca alkaloids: bind β-tubulin and inhibit polymerisation", use: "ALL and lymphomas (vincristine), Hodgkin lymphoma (vinblastine), NSCLC and breast (vinorelbine)" },
      { name: "Eribulin", action: "Binds microtubule plus ends and inhibits growth", use: "Metastatic breast cancer, liposarcoma" },
      { name: "Brentuximab vedotin / enfortumab vedotin / polatuzumab vedotin", action: "Antibody–drug conjugates with the tubulin inhibitor MMAE", use: "Hodgkin lymphoma, urothelial cancer, DLBCL" }
    ],
    question: "Why do both microtubule stabilisers (taxanes) and destabilisers (vinca alkaloids) cause mitotic arrest and peripheral neuropathy?",
    answer: "The spindle needs microtubules to keep growing and shrinking so it can find, attach to and pull apart chromosomes. Locking microtubules in either state stops this, so kinetochores stay unattached, the spindle assembly checkpoint stays active and the cell arrests in mitosis and dies. Neurons do not divide, but their long axons depend on microtubule tracks for transport of cargo to and from the cell body. Disrupting these tracks causes a length-dependent sensory (and, with vincristine, motor and autonomic) neuropathy. This is why the longest nerves (feet, then hands) are affected first.",
    pearl: "Vincristine must never be given intrathecally: it causes fatal ascending neurotoxicity, so it is given in a mini-bag. Vincristine also causes constipation and ileus (autonomic neuropathy) and is a CYP3A4 substrate (azoles worsen neuropathy). Paclitaxel's Cremophor solvent causes hypersensitivity, so steroid and antihistamine premedication is needed. Docetaxel causes fluid retention. Colchicine binds a different site on tubulin and inhibits neutrophil microtubules, which is how it treats gout. Its narrow therapeutic index makes CYP3A4/P-gp inhibitors (clarithromycin) dangerous. Benzimidazoles (albendazole, mebendazole) selectively bind helminth β-tubulin.",
    pathways: ["apoptosis"]
  },
  {
    id: "top1", name: "Topoisomerase I", short: "TOP1", gene: "TOP1",
    family: "Enzyme (type IB DNA topoisomerase)", area: "Oncology",
    location: "Nucleus of all cells; higher in proliferating cells",
    role: "Relieves the DNA supercoiling (torsional strain) that builds up ahead of replication forks and transcription by cutting one strand, letting it swivel, then resealing it.",
    signalling: [
      "TOP1 nicks one DNA strand and forms a transient covalent TOP1–DNA bond (cleavage complex)",
      "Strand rotates to relieve supercoiling → TOP1 religates the nick",
      "Camptothecins bind at the TOP1–DNA interface and block religation ('trapping' the cleavage complex)",
      "Advancing replication fork collides with the trapped complex → double-strand break",
      "S-phase-specific DNA damage → cell-cycle arrest and apoptosis"
    ],
    mechanism: "TOP1 inhibitors are 'poisons', not simple enzyme blockers. They turn TOP1 into a DNA-damaging lesion by trapping it on DNA.",
    drugs: [
      { name: "Irinotecan", action: "Prodrug converted by carboxylesterase to the active TOP1 poison SN-38", use: "Colorectal cancer (FOLFIRI), pancreatic cancer (FOLFIRINOX)" },
      { name: "Topotecan", action: "Camptothecin TOP1 poison", use: "Small cell lung cancer, ovarian cancer" },
      { name: "Trastuzumab deruxtecan / sacituzumab govitecan", action: "Antibody–drug conjugates with TOP1-inhibitor payloads (deruxtecan; SN-38)", use: "HER2-positive and HER2-low breast cancer, other HER2 tumours (T-DXd); triple-negative breast cancer (anti-TROP2 sacituzumab)" }
    ],
    question: "Why does a patient homozygous for UGT1A1*28 get severe neutropenia and diarrhoea on irinotecan?",
    answer: "Irinotecan is a prodrug converted to SN-38, which is about 100–1000 times more potent. SN-38 is inactivated by glucuronidation through UGT1A1 and then excreted in bile. UGT1A1*28 (an extra TA repeat in the promoter, the variant behind Gilbert's syndrome) reduces UGT1A1 expression. Homozygous patients clear SN-38 slowly, so higher exposure damages the rapidly dividing cells of the bone marrow and gut epithelium. A reduced starting dose is recommended.",
    pearl: "Two kinds of diarrhoea: early (within 24 h) cholinergic diarrhoea, because irinotecan inhibits acetylcholinesterase, is treated with atropine. Late diarrhoea comes from gut bacterial β-glucuronidase reactivating SN-38 in the bowel and needs high-dose loperamide. Sacituzumab govitecan carries the same UGT1A1 issue. Trastuzumab deruxtecan can cause interstitial lung disease/pneumonitis, which needs monitoring.",
    pathways: ["dna"]
  },
  {
    id: "top2", name: "Topoisomerase II", short: "TOP2", gene: "TOP2A / TOP2B",
    family: "Enzyme (type IIA DNA topoisomerase, ATP-dependent)", area: "Oncology",
    location: "Nucleus. TOP2A is high in proliferating cells; TOP2B is present in non-dividing cells, including cardiomyocytes",
    role: "Cuts both strands of one DNA duplex, passes another duplex through the gap, then reseals. Unknots and untangles (decatenates) DNA so sister chromosomes can separate.",
    signalling: [
      "TOP2 dimer binds DNA and makes a double-strand break, covalently attached to each 5′ end",
      "A second DNA duplex is passed through (uses ATP) → break is resealed",
      "Etoposide and anthracyclines trap the cleavage complex → persistent double-strand breaks",
      "Anthracyclines also intercalate into DNA and generate reactive oxygen species (iron-dependent)",
      "DNA damage response → cell-cycle arrest and apoptosis"
    ],
    mechanism: "TOP2 poisons stabilise the enzyme–DNA cleavage complex, converting an essential enzyme into a source of double-strand breaks.",
    drugs: [
      { name: "Doxorubicin / epirubicin / daunorubicin", action: "Anthracyclines: TOP2 poisons + DNA intercalation + ROS", use: "Breast cancer, lymphomas (R-CHOP), sarcomas; AML (daunorubicin)" },
      { name: "Etoposide", action: "Non-intercalating TOP2 poison", use: "Small cell lung cancer, germ cell tumours, lymphomas" },
      { name: "Dexrazoxane", action: "Iron chelator and catalytic TOP2 inhibitor (not a poison)", use: "Cardioprotection with anthracyclines; anthracycline extravasation" }
    ],
    question: "Why are anthracyclines cardiotoxic, and how does dexrazoxane protect the heart?",
    answer: "Cardiomyocytes do not divide but they express TOP2B. Doxorubicin traps TOP2B on DNA, causing DNA breaks and disrupting mitochondrial gene expression. It also generates reactive oxygen species through iron-dependent redox cycling, to which the heart has weak antioxidant defences. Cardiomyocytes are not replaced, so damage accumulates and risk rises with cumulative lifetime dose, leading to cardiomyopathy and heart failure, sometimes years later. Dexrazoxane chelates iron and binds TOP2B, preventing doxorubicin from trapping it.",
    pearl: "Echocardiogram (LVEF) before and during treatment, and lifetime cumulative dose limits are applied. Trastuzumab adds to the cardiotoxicity. Liposomal doxorubicin is less cardiotoxic but causes hand–foot syndrome. Red urine is expected. Etoposide and other TOP2 poisons cause therapy-related AML with a short latency (about 1–3 years), no preceding MDS, and KMT2A (MLL) rearrangements at 11q23. Bacterial type II topoisomerases (DNA gyrase and topo IV) are the targets of fluoroquinolones.",
    pathways: ["dna", "apoptosis"]
  },
  {
    id: "dhfr", name: "Dihydrofolate reductase", short: "DHFR", gene: "DHFR",
    family: "Enzyme (NADPH-dependent reductase)", area: "Oncology",
    location: "Cytoplasm of all cells; highest activity in rapidly dividing cells (bone marrow, gut epithelium, tumours)",
    role: "Regenerates tetrahydrofolate (THF) from dihydrofolate (DHF). THF carries one-carbon units for thymidylate and purine synthesis.",
    signalling: [
      "DHF + NADPH → (DHFR) → THF",
      "THF → 5,10-methylene-THF, the one-carbon donor for thymidylate synthase",
      "Thymidylate synthase makes dTMP and oxidises the folate back to DHF, which must be recycled by DHFR",
      "Other THF derivatives provide carbons for purine synthesis",
      "DHFR inhibition → THF depletion → ↓ dTMP and purines → DNA synthesis stops (S-phase)"
    ],
    mechanism: "Antifolates mimic folate and bind DHFR very tightly. Methotrexate is trapped in cells as polyglutamates, which also inhibit other folate enzymes. Leucovorin (folinic acid) bypasses the block.",
    drugs: [
      { name: "Methotrexate (high dose)", action: "DHFR inhibitor, with leucovorin rescue", use: "ALL, osteosarcoma, CNS lymphoma" },
      { name: "Methotrexate (low dose, once weekly)", action: "Antifolate; anti-inflammatory partly via adenosine release", use: "Rheumatoid arthritis (first-line DMARD), psoriasis, Crohn's disease" },
      { name: "Pemetrexed", action: "Multi-targeted antifolate (thymidylate synthase > DHFR, GARFT)", use: "Non-squamous NSCLC, mesothelioma" }
    ],
    question: "Why is low-dose methotrexate for rheumatoid arthritis given once a week with folic acid, and how does leucovorin rescue work in high-dose therapy?",
    answer: "Inside cells methotrexate is converted to polyglutamates, which are retained for days, so one weekly dose keeps its effect while giving the bone marrow and gut time to recover. Accidental daily dosing has caused fatal myelosuppression and mucositis. Folic acid on a different day refills folate stores and reduces mouth ulcers, GI upset, liver toxicity and cytopenias without losing anti-inflammatory efficacy. In high-dose cancer therapy, leucovorin (folinic acid) is given after a timed interval. It is already a reduced folate, so it enters the THF pool downstream of DHFR and rescues normal cells. Tumour cells take it up less well.",
    pearl: "Methotrexate is renally excreted. NSAIDs, PPIs and penicillins reduce clearance, and trimethoprim adds a second antifolate effect, which together can cause pancytopenia. Trimethoprim is many thousands of times more selective for bacterial DHFR than human DHFR. Pyrimethamine is selective for protozoal DHFR. Other methotrexate toxicities: hepatic fibrosis, pneumonitis and teratogenicity. Pemetrexed needs folic acid and vitamin B12 premedication to cut toxicity. Glucarpidase breaks down methotrexate when levels are toxic and the kidneys are failing.",
    pathways: ["dna", "bacteria"]
  },
  {
    id: "tyms", name: "Thymidylate synthase", short: "TS", gene: "TYMS",
    family: "Enzyme (methyltransferase)", area: "Oncology",
    location: "Cytoplasm and nucleus of proliferating cells",
    role: "The only de novo source of thymidylate. It methylates dUMP to dTMP, using 5,10-methylene-THF as the one-carbon donor.",
    signalling: [
      "dUMP + 5,10-methylene-THF → (TS) → dTMP + DHF",
      "dTMP → dTTP → DNA synthesis and repair",
      "5-FU → FdUMP, which forms a covalent ternary complex with TS and 5,10-methylene-THF",
      "Leucovorin raises 5,10-methylene-THF → stabilises the inhibitory complex",
      "dTTP depletion ('thymineless death') + 5-FU metabolites misincorporated into RNA and DNA → apoptosis"
    ],
    mechanism: "Fluoropyrimidines are converted to FdUMP, which irreversibly locks TS. Leucovorin is given with 5-FU to strengthen inhibition, not to rescue.",
    drugs: [
      { name: "5-Fluorouracil (with leucovorin)", action: "Fluoropyrimidine; FdUMP inhibits TS", use: "Colorectal (FOLFOX, FOLFIRI), gastro-oesophageal, pancreatic, head & neck cancer" },
      { name: "Capecitabine", action: "Oral prodrug of 5-FU (final step by thymidine phosphorylase, which is higher in tumours)", use: "Colorectal and breast cancer" },
      { name: "Trifluridine/tipiracil", action: "Thymidine analogue (also inhibits TS) + thymidine phosphorylase inhibitor", use: "Refractory metastatic colorectal and gastric cancer" }
    ],
    question: "Why should patients be tested for DPD deficiency before 5-FU or capecitabine?",
    answer: "Dihydropyrimidine dehydrogenase (DPD, encoded by DPYD) breaks down most of a dose of 5-FU in the liver, converting it to inactive metabolites. Patients with reduced-function or non-functional DPYD variants cannot clear the drug, so active metabolites build up. They develop severe or fatal mucositis, diarrhoea, neutropenia and hand–foot syndrome after the first doses. Pre-treatment testing (DPYD genotyping, or uracil levels in some countries) lets clinicians reduce the dose in partial deficiency and avoid fluoropyrimidines in complete deficiency. It is now standard practice in the UK and EU.",
    pearl: "The antiviral brivudine irreversibly inhibits DPD, and combining it with 5-FU or capecitabine has been fatal. Uridine triacetate is an antidote for overdose or early severe toxicity. Capecitabine raises INR with warfarin. Fluoropyrimidines can cause coronary vasospasm (chest pain during infusion). Hand–foot syndrome is common with capecitabine.",
    pathways: ["dna"]
  },
  {
    id: "lag3", name: "Lymphocyte-activation gene 3", short: "LAG-3", gene: "LAG3 (CD223)",
    family: "Immune checkpoint receptor (Ig superfamily, CD4-like)", area: "Oncology",
    location: "Activated and exhausted CD4⁺ and CD8⁺ T cells, regulatory T cells, NK cells. Often co-expressed with PD-1 on tumour-infiltrating T cells",
    role: "Inhibitory receptor that limits T-cell activation and proliferation during chronic antigen exposure. Structurally related to CD4 and binds MHC class II, with higher affinity than CD4.",
    signalling: [
      "Chronic antigen exposure → LAG-3 upregulated on T cells alongside PD-1",
      "LAG-3 binds peptide–MHC class II on antigen-presenting or tumour cells (FGL1 is another ligand)",
      "Its cytoplasmic tail sends inhibitory signals through a motif distinct from the ITIMs used by PD-1",
      "↓ TCR signalling, proliferation and cytokine production; supports Treg suppression",
      "LAG-3 and PD-1 act through separate pathways, so blocking both releases more T-cell function than blocking either alone"
    ],
    mechanism: "Anti-LAG-3 antibodies remove a second, non-redundant brake on exhausted T cells. They are used with PD-1 blockade.",
    drugs: [
      { name: "Relatlimab + nivolumab (Opdualag)", action: "Anti-LAG-3 + anti-PD-1 antibodies, fixed-dose combination", use: "Unresectable or metastatic melanoma (first line)" }
    ],
    question: "Why combine relatlimab with nivolumab rather than giving it alone?",
    answer: "Exhausted tumour-infiltrating T cells co-express several inhibitory receptors, and each one uses a different signal. LAG-3 alone has modest effects because PD-1 can still hold the T cell back, and vice versa. Blocking both removes two separate brakes and restores more proliferation and cytokine production than either antibody alone. In melanoma, the fixed-dose combination improved progression-free survival compared with nivolumab alone (RELATIVITY-047 trial). It added less toxicity than the established ipilimumab + nivolumab combination.",
    pearl: "Immune-related adverse events are the same kinds seen with PD-1 blockade (thyroiditis, colitis, hepatitis, adrenal insufficiency, myocarditis), slightly more frequent than with nivolumab alone. Steroids are the mainstay of treatment. LAG-3 is the third checkpoint class to reach approval, after CTLA-4 and PD-1/PD-L1.",
    pathways: ["tcell"]
  },
  {
    id: "alk", name: "Anaplastic lymphoma kinase", short: "ALK", gene: "ALK",
    family: "Receptor tyrosine kinase (insulin receptor superfamily)", area: "Oncology",
    location: "Normally mainly in the developing nervous system. Activated by gene fusion in ~3–5% of NSCLC (EML4-ALK), anaplastic large-cell lymphoma (NPM1-ALK) and inflammatory myofibroblastic tumour; point mutations in neuroblastoma",
    role: "Neural development. In cancer, fusion partners make ALK constitutively active, and the tumour becomes dependent on it.",
    signalling: [
      "Inversion on chromosome 2p joins EML4 to the ALK kinase domain → EML4-ALK fusion",
      "EML4 coiled-coil domain forces ligand-independent dimerisation → constitutive ALK autophosphorylation",
      "→ RAS–RAF–MEK–ERK (proliferation)",
      "→ PI3K–AKT–mTOR and JAK–STAT3 (survival)",
      "Tumour becomes 'oncogene-addicted': ALK inhibition → rapid apoptosis"
    ],
    mechanism: "ATP-competitive ALK TKIs switch off the fusion kinase. Successive generations cover resistance mutations and penetrate the brain better.",
    drugs: [
      { name: "Alectinib / brigatinib", action: "2nd-generation ALK TKIs (CNS-active)", use: "First-line ALK-positive NSCLC; alectinib also adjuvant after resection" },
      { name: "Lorlatinib", action: "3rd-generation macrocyclic ALK/ROS1 TKI, highly CNS-penetrant; active against G1202R", use: "First-line or after earlier ALK TKIs in ALK-positive NSCLC" },
      { name: "Crizotinib", action: "1st-generation ALK/ROS1/MET TKI", use: "ROS1-positive NSCLC, ALK-positive ALCL and inflammatory myofibroblastic tumour; largely replaced in ALK NSCLC" }
    ],
    question: "Why do ALK inhibitors produce dramatic responses in EML4-ALK lung cancer, and why does the choice of drug matter for the brain?",
    answer: "The EML4-ALK fusion is the driver mutation and the tumour depends on its signal through MAPK, PI3K and STAT3 to survive (oncogene addiction). Blocking the kinase removes that signal and the cells undergo apoptosis, so most patients respond, often for years. ALK-positive NSCLC frequently spreads to the brain, and crizotinib is a P-gp substrate that is pumped out of the CNS. That made the brain a common site of relapse. Alectinib, brigatinib and especially lorlatinib reach the CNS well and prevent and treat brain metastases.",
    pearl: "Typical patients are younger never- or light smokers with adenocarcinoma, so all advanced non-squamous NSCLC is tested (IHC, FISH or NGS). Resistance arises from kinase mutations (G1202R is the classic solvent-front mutation after 2nd-generation drugs) or bypass signalling (e.g. MET amplification). Lorlatinib causes hyperlipidaemia, weight gain and CNS effects (mood, cognition). Crizotinib causes visual disturbance and bradycardia. Alectinib causes myalgia/raised CK and photosensitivity.",
    pathways: ["mapk", "pi3k", "jakstat"]
  },

  // ───────────── Haematology & thrombosis ─────────────
  {
    id: "thrombin", name: "Thrombin (factor IIa)", short: "Thrombin", gene: "F2",
    family: "Enzyme (serine protease)", area: "Haematology & thrombosis",
    location: "Circulates as inactive prothrombin (made in the liver, vitamin K-dependent). Generated on activated platelet surfaces by the prothrombinase complex (Xa + Va)",
    role: "The central effector enzyme of coagulation: makes fibrin, amplifies its own generation, activates platelets, and also switches on the protein C anticoagulant pathway.",
    signalling: [
      "Prothrombinase (FXa + FVa on phospholipid) cleaves prothrombin → thrombin",
      "Thrombin cleaves fibrinogen → fibrin; activates FXIII → cross-linked, stable clot",
      "Positive feedback: activates FV, FVIII and FXI → thrombin burst",
      "Cleaves platelet PAR-1 (and PAR-4) → Gq/G12/13 → platelet shape change, granule release, aggregation",
      "Bound to endothelial thrombomodulin → activates protein C (negative feedback)"
    ],
    mechanism: "Direct thrombin inhibitors bind the active site (and sometimes exosite 1) of free and clot-bound thrombin. Heparin acts indirectly by speeding up antithrombin.",
    drugs: [
      { name: "Dabigatran etexilate", action: "Oral direct thrombin inhibitor (prodrug)", use: "Stroke prevention in AF, VTE treatment and prevention" },
      { name: "Argatroban / bivalirudin", action: "Parenteral direct thrombin inhibitors", use: "Heparin-induced thrombocytopenia (argatroban); PCI (bivalirudin)" },
      { name: "Idarucizumab", action: "Humanised antibody Fab that binds dabigatran with very high affinity", use: "Rapid reversal of dabigatran for bleeding or urgent surgery" },
      { name: "Unfractionated heparin", action: "Indirect: binds antithrombin and bridges it to thrombin (and FXa)", use: "VTE, ACS, cardiopulmonary bypass" }
    ],
    question: "How do unfractionated heparin, LMWH and dabigatran differ in how they inhibit thrombin?",
    answer: "Heparins have no activity alone. A specific pentasaccharide sequence binds antithrombin and changes its shape so it inhibits FXa much faster. To inhibit thrombin, the heparin chain must also be long enough (at least about 18 sugars) to bind thrombin and hold it next to antithrombin. Unfractionated heparin has many long chains, so it inhibits thrombin and Xa equally. Most LMWH chains are too short, so LMWH mainly inhibits Xa, and fondaparinux (the pentasaccharide alone) inhibits only Xa. Dabigatran binds thrombin's active site directly, without antithrombin, and also inhibits thrombin already bound to fibrin in the clot.",
    pearl: "Dabigatran is about 80% renally cleared, so it accumulates in CKD and is a P-gp substrate. Capsules must not be opened (exposure rises sharply). Dyspepsia is common. It is contraindicated with mechanical heart valves. Argatroban is hepatically cleared and falsely raises the INR, which complicates switching to warfarin. Protamine reverses unfractionated heparin (and LMWH only partly). Vorapaxar is a PAR-1 antagonist antiplatelet.",
    pathways: ["coag", "gq"]
  },
  {
    id: "epor", name: "Erythropoietin receptor / HIF pathway", short: "EPOR", gene: "EPOR (EPO, HIF2A/EPAS1, EGLN1)",
    family: "Type I cytokine receptor (JAK2-associated)", area: "Haematology & thrombosis",
    location: "EPOR on erythroid progenitors (CFU-E, proerythroblasts) in bone marrow. EPO is made mainly by renal peritubular interstitial cells, which sense oxygen",
    role: "Matches red-cell production to oxygen delivery. Hypoxia → more EPO → more red cells survive and mature.",
    signalling: [
      "Normal O₂: prolyl hydroxylases (PHDs) hydroxylate HIF-α → VHL tags it for proteasomal degradation",
      "Hypoxia (or anaemia): PHDs inactive → HIF-2α accumulates → ↑ EPO gene transcription in the kidney",
      "EPO binds the EPOR dimer → conformational change → JAK2 trans-phosphorylation",
      "JAK2 → STAT5 → ↑ BCL-xL and other survival genes; also PI3K–AKT and MAPK",
      "Erythroid progenitors escape apoptosis, proliferate and mature into red cells"
    ],
    mechanism: "ESAs replace missing EPO and activate EPOR directly. HIF-PH inhibitors make the body produce its own EPO by mimicking hypoxia. Luspatercept acts on late erythroid maturation through a different pathway.",
    drugs: [
      { name: "Epoetin alfa / darbepoetin alfa", action: "EPOR agonists (darbepoetin is hyperglycosylated → longer half-life)", use: "Anaemia of CKD; chemotherapy-induced anaemia; lower-risk MDS" },
      { name: "Daprodustat / roxadustat", action: "Oral HIF-prolyl hydroxylase inhibitors (stabilise HIF → endogenous EPO, better iron use)", use: "Anaemia of CKD (approval varies by country)" },
      { name: "Luspatercept (Reblozyl)", action: "Activin receptor IIB–Fc ligand trap: binds TGF-β-family ligands (e.g. GDF11, activins) → ↓ SMAD2/3 signalling → late-stage erythroid maturation", use: "Anaemia in lower-risk MDS and β-thalassaemia" }
    ],
    question: "Why does chronic kidney disease cause anaemia, and why are ESAs dosed to a modest haemoglobin target rather than to normal?",
    answer: "EPO is made by oxygen-sensing interstitial cells in the kidney. As CKD progresses these cells are lost or transformed into fibrosis-producing cells, so EPO is inappropriately low for the degree of anaemia. Iron restriction from inflammation and raised hepcidin makes it worse. ESAs replace the missing hormone. However, trials aiming for normal haemoglobin showed more stroke, hypertension, vascular access thrombosis and cardiovascular events without better outcomes. The goal is therefore to avoid transfusion and relieve symptoms, typically a haemoglobin of about 100–120 g/L.",
    pearl: "Iron deficiency (absolute or functional) is the commonest cause of poor ESA response, so iron stores are checked and often IV iron is given. Hypertension is an on-target effect. Anti-EPO antibodies can rarely cause pure red cell aplasia. In cancer, ESAs carry concerns about tumour progression and are used cautiously. Gain-of-function JAK2 V617F makes erythroid cells EPO-independent and causes polycythaemia vera. ESAs are also misused for doping in endurance sport.",
    pathways: ["jakstat"]
  },
  {
    id: "tpor", name: "Thrombopoietin receptor", short: "TPO-R (MPL)", gene: "MPL",
    family: "Type I cytokine receptor (JAK2-associated)", area: "Haematology & thrombosis",
    location: "Megakaryocytes and their progenitors, platelets, and haematopoietic stem cells",
    role: "Main regulator of platelet production. Thrombopoietin (TPO) is made at a steady rate by the liver. Its free level is set by how much is bound and removed by MPL on platelets and megakaryocytes.",
    signalling: [
      "TPO (liver) binds MPL on megakaryocyte progenitors",
      "Receptor dimer reorientation → JAK2 activation",
      "JAK2 → STAT3/STAT5, MAPK and PI3K–AKT",
      "Megakaryocyte proliferation, maturation and polyploidisation → ↑ platelet release",
      "Platelets also take up and degrade TPO via MPL, so a high platelet mass lowers free TPO (negative feedback)"
    ],
    mechanism: "TPO receptor agonists stimulate megakaryocytes to make more platelets. They do not stop platelet destruction; they increase production enough to outpace it.",
    drugs: [
      { name: "Romiplostim", action: "Peptide–Fc fusion ('peptibody'); binds the TPO-binding site; weekly SC", use: "Immune thrombocytopenia (ITP)" },
      { name: "Eltrombopag", action: "Oral small molecule; binds the transmembrane domain (does not compete with TPO)", use: "ITP; severe aplastic anaemia" },
      { name: "Avatrombopag", action: "Oral small-molecule TPO-R agonist, taken with food", use: "ITP; thrombocytopenia in chronic liver disease before a procedure" }
    ],
    question: "ITP is a disease of antibody-mediated platelet destruction. Why does stimulating platelet production work?",
    answer: "In ITP, autoantibodies also damage megakaryocytes, so platelet production is impaired as well as survival shortened. TPO levels stay inappropriately normal rather than high, because megakaryocyte and platelet mass is still enough to soak up TPO. TPO-receptor agonists give a much stronger signal than the body's own TPO, so megakaryocytes produce enough platelets to stay ahead of destruction. They do not change the autoimmunity, which is why counts usually fall again when the drug is stopped. Because MPL is also on haematopoietic stem cells, eltrombopag can restore all three cell lines in aplastic anaemia.",
    pearl: "Eltrombopag chelates polyvalent cations: take it at least 2 hours before or 4 hours after calcium, antacids, iron, dairy or mineral supplements. It can cause hepatotoxicity (monitor LFTs), and people of East Asian ancestry need lower starting doses because exposure is higher. Avatrombopag has neither the food/chelation problem nor the hepatotoxicity signal. Class risks: thrombosis, bone marrow reticulin fibrosis, and rebound thrombocytopenia on stopping. Activating MPL mutations (e.g. W515L) drive essential thrombocythaemia and myelofibrosis.",
    pathways: ["jakstat"]
  }
);
