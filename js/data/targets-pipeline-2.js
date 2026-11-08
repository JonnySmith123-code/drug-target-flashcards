// Clinical-stage targets (no approved drug yet) — oncology, neuro. Status as of 2026; verify before relying on it.
window.FC_TARGETS.push(
  // ───────────── Oncology ─────────────
  {
    id: "rason", name: "RAS(ON) multi-selective (pan-RAS)", short: "RAS(ON)", gene: "KRAS, NRAS, HRAS",
    family: "Small GTPase (tri-complex inhibitor target)", area: "Oncology",
    location: "Inner leaflet of the plasma membrane. Any-RAS mutations in ~90% of pancreatic, ~50% of colorectal and ~30% of lung adenocarcinomas",
    role: "Active GTP-bound RAS relays growth-factor signals to RAF–MEK–ERK and PI3K. Most oncogenic mutations (G12D, G12V, G13, Q61) jam it in the 'on' state.",
    signalling: [
      "Drug first binds cyclophilin A (CypA), an abundant intracellular chaperone",
      "The drug–CypA binary complex docks onto the active, GTP-bound RAS(ON) surface",
      "A RAS–drug–CypA tri-complex forms (molecular glue)",
      "The tri-complex sterically blocks RAF (and other effector) binding to RAS",
      "RAF–MEK–ERK output collapses → tumour growth arrest and regression"
    ],
    mechanism: "'Tri-complex' molecular glues recruit cyclophilin A to the active RAS(ON) state and block effector binding. Multi-selective drugs (daraxonrasib) hit mutant and wild-type KRAS, NRAS and HRAS; mutant-selective siblings target G12C(ON) (elironrasib) or G12D(ON) (zoldonrasib).",
    drugs: [
      { name: "Daraxonrasib (RMC-6236)", action: "RAS(ON) multi-selective tri-complex inhibitor (mutant + wild-type RAS)", use: "2L metastatic pancreatic cancer (RASolute 302), 1L PDAC, RAS-mutant NSCLC", co: "Revolution Medicines", phase: "Phase 3" },
      { name: "Elironrasib (RMC-6291)", action: "Covalent KRAS G12C(ON)-selective tri-complex inhibitor", use: "KRAS G12C NSCLC incl. after G12C(OFF) inhibitor failure", co: "Revolution Medicines", phase: "Phase 2" },
      { name: "Zoldonrasib (RMC-9805)", action: "Covalent KRAS G12D(ON)-selective tri-complex inhibitor", use: "KRAS G12D NSCLC and PDAC", co: "Revolution Medicines", phase: "Phase 2" }
    ],
    question: "Why can a RAS(ON) inhibitor work where G12C(OFF) inhibitors run into resistance, and why can a drug that also hits wild-type RAS be tolerated?",
    answer: "Sotorasib and adagrasib only catch KRAS G12C in the GDP 'off' state, so anything that pushes RAS into the GTP state (RTK/SOS reactivation, new activating mutations) escapes them. Tri-complex drugs bind the GTP 'on' state itself, so upstream reactivation doesn't help the tumour, and multi-selective binders cover G12D, G12V, G13 and Q61 mutants plus amplified wild-type RAS. Tumours are 'addicted' to high RAS output, whereas normal tissues tolerate partial, intermittent RAS inhibition, which gives a usable window (rash and GI toxicity are the on-target price).",
    pearl: "Cyclophilin A recruitment borrows the cyclosporin trick: the drug has little affinity for RAS alone and only grips it as part of the complex. Pancreatic cancer (~92% KRAS-mutant, mostly G12D/G12V) is the proving ground. A win in 2L PDAC would be the first targeted therapy for most pancreatic cancer.",
    pathways: ["mapk"],
    status: "clinical", after: "kras",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "RASolute 302 (daraxonrasib vs chemo, 2L metastatic PDAC) is the pivotal trial. Topline readout and possible US filing expected 2026 (verify). FDA Breakthrough designation and a Commissioner's National Priority Voucher (2025) could speed review. Phase 1 PDAC data showed median PFS ~8 mo and OS ~13–15 mo in 2L, roughly double historical chemo (verify). RASolve 301 (NSCLC) and 1L PDAC trials ongoing.",
      risk: "Skin rash, stomatitis and diarrhoea from wild-type RAS inhibition may limit dose and long-term use. Resistance via RAS amplification or downstream (RAF/MEK) alterations. Phase 1 benefit may shrink in a randomised trial. If approved before you read this, the target has moved out of 'pipeline'.",
      why: "The first credible way to drug the RAS mutants (G12D, G12V, Q61) behind most pancreatic and colorectal cancers."
    }
  },
  {
    id: "kg12d", name: "KRAS G12D", short: "KRAS G12D", gene: "KRAS (p.G12D)",
    family: "Small GTPase", area: "Oncology",
    location: "Most common KRAS mutation overall: ~40% of pancreatic cancers, ~12% of colorectal cancers, ~4% of lung adenocarcinomas (mostly never-smokers)",
    role: "Aspartate at codon 12 blocks GAP-stimulated GTP hydrolysis, leaving KRAS persistently GTP-bound and signalling to RAF–MEK–ERK.",
    signalling: [
      "Glycine-12 → aspartate substitution in the P-loop of KRAS",
      "Steric clash prevents the GAP 'arginine finger' from catalysing GTP hydrolysis",
      "KRAS G12D accumulates in the GTP-bound 'on' state",
      "Constitutive RAF → MEK → ERK (and PI3K) signalling",
      "Uncontrolled proliferation; tumour becomes RAS-addicted"
    ],
    mechanism: "No cysteine to bond, so drugs exploit the aspartate instead: non-covalent switch-II binders that form a salt bridge with Asp12 (MRTX1133-class, HRS-4642, INCB161734), covalent Asp12-targeting tri-complex drugs (zoldonrasib), and G12D-selective degraders (ASP3082).",
    drugs: [
      { name: "Zoldonrasib (RMC-9805)", action: "Covalent G12D(ON) tri-complex inhibitor (cross-links Asp12)", use: "KRAS G12D NSCLC, PDAC", co: "Revolution Medicines", phase: "Phase 2" },
      { name: "HRS-4642", action: "Non-covalent, high-affinity G12D inhibitor", use: "KRAS G12D solid tumours (NSCLC, PDAC)", co: "Jiangsu Hengrui", phase: "Phase 3" },
      { name: "ASP3082 (setidegrasib)", action: "KRAS G12D-selective PROTAC degrader (VHL-based)", use: "KRAS G12D PDAC, CRC, NSCLC", co: "Astellas", phase: "Phase 2" },
      { name: "MRTX1133", action: "First non-covalent G12D switch-II inhibitor (proof of concept)", use: "KRAS G12D solid tumours", co: "Mirati / BMS", phase: "Discontinued" }
    ],
    question: "Sotorasib exploits cysteine-12. With no cysteine in G12D, how do drugs achieve selectivity for the mutant?",
    answer: "The aspartate side chain is itself the handle. Non-covalent drugs such as MRTX1133 place a basic amine in the switch-II pocket that forms a salt bridge with Asp12, giving >1000-fold selectivity over wild-type KRAS (glycine there). Zoldonrasib goes further, using the tri-complex to position an electrophile that covalently cross-links the aspartate carboxylate in the GTP state. Because the drug engages the mutant residue, wild-type RAS in normal tissue is largely spared.",
    pearl: "MRTX1133 proved G12D was druggable but was dropped for poor oral bioavailability. The class lesson: potency in cells is easy, oral exposure and durable responses in PDAC are hard. G12D is the commercial prize because it is the single biggest RAS allele.",
    pathways: ["mapk"],
    status: "clinical", after: "kras",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "Zoldonrasib: Phase 1 ORR ~60% in KRAS G12D NSCLC (2025) and FDA Breakthrough designation; pivotal NSCLC trial planned/started 2026 (verify). HRS-4642: Phase 3 in China (verify). Many fast followers (Lilly, Incyte, Genfleet, Zai Lab) in Phase 1/2.",
      risk: "Competition from multi-selective RAS(ON) drugs that cover G12D anyway. Adaptive feedback and acquired RAS amplification. PDAC responses are less durable than NSCLC. Oral exposure problems killed the first-in-class compound.",
      why: "G12D is the most common KRAS mutation, and allele-specific drugs could give a wider window than pan-RAS inhibition."
    }
  },
  {
    id: "prmt5", name: "PRMT5 (MTA-cooperative)", short: "PRMT5", gene: "PRMT5",
    family: "Protein arginine methyltransferase (type II)", area: "Oncology",
    location: "Nucleus and cytoplasm, all cells. Therapeutic window comes from MTAP deletion (co-deleted with CDKN2A at 9p21) in ~10–15% of cancers: ~40% of glioblastoma and mesothelioma, ~20–30% of PDAC, ~15% of NSCLC",
    role: "Symmetrically dimethylates arginines on histones and splicing proteins (Sm proteins), needed for accurate mRNA splicing and cell viability.",
    signalling: [
      "9p21 deletion removes CDKN2A together with the neighbouring MTAP gene",
      "Without MTAP, its substrate MTA (methylthioadenosine) accumulates in tumour cells",
      "MTA binds PRMT5 and partially inhibits it, competing with the methyl donor SAM",
      "MTA-cooperative drug binds only the PRMT5–MTA complex → near-complete PRMT5 shutdown",
      "Loss of symmetric dimethylarginine → splicing failure and tumour cell death; normal (MTAP-intact) cells spared"
    ],
    mechanism: "Second-generation PRMT5 inhibitors bind the PRMT5·MTA complex, so they work only where MTA is high (MTAP-deleted tumours). First-generation SAM-competitive PRMT5 inhibitors hit all cells and failed on anaemia, thrombocytopenia and neutropenia.",
    drugs: [
      { name: "AMG 193", action: "MTA-cooperative PRMT5 inhibitor", use: "MTAP-deleted NSCLC, PDAC, biliary and other solid tumours", co: "Amgen", phase: "Phase 2/3" },
      { name: "BMS-986504 (MRTX1719)", action: "MTA-cooperative PRMT5 inhibitor", use: "MTAP-deleted NSCLC (with chemo-immunotherapy), mesothelioma", co: "Bristol Myers Squibb (from Mirati)", phase: "Phase 2/3" },
      { name: "Vopimetostat (TNG462)", action: "MTA-cooperative PRMT5 inhibitor", use: "MTAP-deleted PDAC and NSCLC", co: "Tango Therapeutics", phase: "Phase 2/3" }
    ],
    question: "How does MTAP deletion create a synthetic-lethal window for PRMT5 inhibitors?",
    answer: "MTAP sits next to CDKN2A and is lost along with it. MTAP normally clears MTA, so MTAP-null tumours build up MTA, which binds PRMT5 in place of SAM and partially inhibits it. These cells are therefore already running on reduced PRMT5 activity. MTA-cooperative drugs bind the PRMT5·MTA complex specifically, finishing off PRMT5 in tumour cells while barely touching it in normal cells, where MTA is low. The bystander-deletion makes an essential enzyme selectively druggable.",
    pearl: "A rare 'passenger' synthetic lethality: MTAP isn't a driver, it's just collateral damage of CDKN2A loss. Test by IHC for MTAP loss. Unlike first-gen PRMT5 inhibitors, these drugs largely avoid haematological toxicity.",
    pathways: [],
    status: "clinical", after: "parp",
    pipeline: {
      stage: "Phase 2/3", asOf: "2026",
      readouts: "AMG 193 Phase 1: ORR ~20% across MTAP-null tumours (PDAC, NSCLC, biliary). BMS-986504 registrational NSCLC trials with pembrolizumab + chemo started 2025 (verify). Tango's TNG462 showed responses in PDAC and moved toward a pivotal 2L PDAC trial in 2026 (verify).",
      risk: "Single-agent response rates are modest; combinations (KRAS, chemo, IO) may be needed. Nausea/fatigue. Crowded field: several near-identical molecules (also AstraZeneca AZD3470, Ideaya IDE397 targeting MAT2A upstream).",
      why: "Turns one of the commonest genetic losses in cancer (9p21) into a biomarker-selected target."
    }
  },
  {
    id: "wrn", name: "WRN helicase", short: "WRN", gene: "WRN",
    family: "RecQ DNA helicase", area: "Oncology",
    location: "Nucleus. Selective dependency in microsatellite-instability-high (MSI-H / dMMR) tumours: ~15% of colorectal, ~25–30% of endometrial, ~20% of gastric cancers",
    role: "Unwinds unusual DNA structures during replication and repair. Germline loss causes Werner syndrome (premature ageing).",
    signalling: [
      "Mismatch-repair deficiency → thousands of uncorrected replication errors",
      "(TA)n dinucleotide repeats expand massively and fold into secondary structures",
      "WRN helicase is needed to unwind these expanded repeats during replication",
      "WRN inhibition → stalled forks and double-strand breaks at TA repeats",
      "Chromosome shattering and death of MSI-H cells; MSS cells unaffected"
    ],
    mechanism: "Small-molecule WRN helicase inhibitors (allosteric or covalent) selectively kill MSI-H tumour cells, which depend on WRN to resolve expanded TA-repeat DNA.",
    drugs: [
      { name: "HRO761", action: "Allosteric, non-covalent WRN helicase inhibitor (locks an inactive conformation)", use: "MSI-H / dMMR solid tumours incl. after immunotherapy", co: "Novartis", phase: "Phase 1" },
      { name: "VVD-214 (RO7589831)", action: "Covalent WRN inhibitor (targets Cys727)", use: "MSI-H solid tumours", co: "Roche (from Vividion)", phase: "Phase 1" }
    ],
    question: "Why are MSI-high cancers dependent on WRN when normal cells are not?",
    answer: "Without mismatch repair, TA dinucleotide repeats expand over many divisions into long tracts that fold into hairpins and cruciforms. These structures stall replication forks, and WRN is the helicase that unwinds them. Knock out WRN and the forks collapse into double-strand breaks at those repeats, shattering the chromosomes. MSS and normal cells have short repeats and don't need WRN, so the dependency is synthetic-lethal and tumour-selective. CRISPR screens (2019) identified WRN as the top MSI-specific dependency.",
    pearl: "MSI-H tumours already respond well to PD-1 inhibitors, so the clinical niche is IO-refractory MSI-H disease, and possibly combination with IO. Watch for acquired WRN mutations as a resistance mechanism.",
    pathways: ["dna"],
    status: "clinical", after: "parp",
    pipeline: {
      stage: "Phase 1", asOf: "2026",
      readouts: "HRO761 and VVD-214 Phase 1 dose escalations (2023–2026) reported early responses and disease control in MSI-H CRC and endometrial cancer (verify). Expansion and IO-combination cohorts ongoing.",
      risk: "Early clinical activity has been more modest than the preclinical synthetic lethality suggested (verify). Resistance through WRN drug-binding mutations seen in models. Competition with highly effective checkpoint inhibitors limits the addressable population.",
      why: "A genetically selected target for MSI-H cancers that escape immunotherapy."
    }
  },
  {
    id: "b7h3", name: "B7-H3 (CD276)", short: "B7-H3", gene: "CD276",
    family: "B7 immunoglobulin superfamily (immune checkpoint ligand)", area: "Oncology",
    location: "Tumour cell surface and tumour vasculature. Overexpressed in small-cell lung cancer (~70%), prostate, oesophageal and many other solid tumours; low on normal tissue",
    role: "Immunomodulatory B7 family member (receptor still unclear). For drug design, it is mainly a widely and selectively expressed tumour antigen.",
    signalling: [
      "ADC antibody binds B7-H3 on the tumour cell surface",
      "Receptor-mediated internalisation into endosomes and lysosomes",
      "Lysosomal proteases cleave the linker, releasing the topoisomerase I inhibitor payload",
      "Payload traps TOP1–DNA cleavage complexes → replication-associated DNA breaks",
      "Membrane-permeable payload diffuses into neighbouring cells (bystander killing) → tumour cell death"
    ],
    mechanism: "Antibody–drug conjugates (mostly topoisomerase I payloads) use B7-H3 as a delivery address. Earlier approaches (enoblituzumab antibody, CAR-T, radioconjugates) showed limited activity.",
    drugs: [
      { name: "Ifinatamab deruxtecan (I-DXd)", action: "Anti-B7-H3 ADC, DXd (TOP1 inhibitor) payload", use: "Extensive-stage SCLC (2L+), prostate, oesophageal cancer", co: "Daiichi Sankyo / Merck & Co", phase: "Filed" },
      { name: "Risvutatug rezetecan (HS-20093 / GSK'227)", action: "Anti-B7-H3 ADC, TOP1 inhibitor payload", use: "SCLC, osteosarcoma and other sarcomas", co: "Hansoh / GSK", phase: "Phase 3" },
      { name: "YL201", action: "Anti-B7-H3 ADC, TOP1 inhibitor payload", use: "SCLC, nasopharyngeal carcinoma", co: "MediLink Therapeutics", phase: "Phase 3" }
    ],
    question: "B7-H3 is an immune checkpoint ligand. Why have ADCs succeeded against it where blocking antibodies did not?",
    answer: "B7-H3's receptor and immune function are still poorly defined, so blocking it gives little immune effect. What makes it valuable is its expression pattern: high on many tumours (including SCLC) and their vasculature, low on normal tissue, and internalised after antibody binding. That makes it an ideal address label for delivering a cytotoxic payload. The ADC doesn't need B7-H3 to do anything biologically; it only needs it to be there and to internalise.",
    pearl: "SCLC has had almost no targeted therapy; B7-H3 ADCs and DLL3 bispecifics (tarlatamab) are changing that. Watch for interstitial lung disease (ILD) with deruxtecan payloads, as with trastuzumab deruxtecan.",
    pathways: ["dna"],
    status: "clinical", after: "her2",
    pipeline: {
      stage: "Filed", asOf: "2026",
      readouts: "I-DXd IDeate-Lung01 (Phase 2, 2L+ ES-SCLC): ORR ~48%, median OS ~11.8 mo; FDA Breakthrough designation; BLA submitted/under priority review for ES-SCLC in 2025–2026 (verify — may now be approved). IDeate-Lung02 (Phase 3 vs topotecan) confirmatory. HS-20093 and YL201 Phase 3 trials in China; possible Chinese approval (verify).",
      risk: "ILD/pneumonitis and myelosuppression from TOP1 payloads. Response durability in SCLC is short. Biomarker selection may not matter (expression is broad), which makes the field crowded and undifferentiated.",
      why: "A broadly expressed solid-tumour antigen that may give SCLC its first ADC."
    }
  },
  {
    id: "cdk2", name: "CDK2 (and CDK4-selective inhibition)", short: "CDK2", gene: "CDK2 (with CCNE1 / cyclin E)",
    family: "Cyclin-dependent serine/threonine kinase", area: "Oncology",
    location: "Nucleus of dividing cells. Key dependency in CCNE1 (cyclin E1)-amplified tumours (~20% of high-grade serous ovarian cancer, gastric, endometrial) and in HR+ breast cancer resistant to CDK4/6 inhibitors",
    role: "Cyclin E–CDK2 completes Rb phosphorylation at the G1/S transition and licenses DNA replication, providing a CDK4/6-independent route into S phase.",
    signalling: [
      "Mitogens → cyclin D–CDK4/6 → partial (mono-)phosphorylation of Rb",
      "Partial E2F release → transcription of cyclin E (CCNE1)",
      "Cyclin E–CDK2 hyperphosphorylates Rb → full E2F release (positive feedback)",
      "S-phase entry and origin firing; the cell is committed to divide",
      "CCNE1 amplification or CDK4/6-inhibitor resistance makes the cell CDK2-dependent"
    ],
    mechanism: "Selective CDK2 inhibitors target cyclin E–driven or CDK4/6-inhibitor-resistant tumours. A related strategy, CDK4-selective inhibition (sparing CDK6), aims to improve on palbociclib-type drugs, whose neutropenia is largely CDK6-mediated.",
    drugs: [
      { name: "Atirmociclib (PF-07220060)", action: "CDK4-selective inhibitor (spares CDK6)", use: "HR+/HER2− breast cancer, 1L with endocrine therapy and post-CDK4/6i", co: "Pfizer", phase: "Phase 3" },
      { name: "INX-315", action: "Selective CDK2 inhibitor", use: "CCNE1-amplified solid tumours; CDK4/6i-resistant HR+ breast cancer", co: "Incyclix Bio", phase: "Phase 1/2" },
      { name: "BLU-222", action: "Selective CDK2 inhibitor", use: "CCNE1-amplified tumours; HR+ breast cancer with ribociclib", co: "Blueprint Medicines (Sanofi)", phase: "Phase 1/2" }
    ],
    question: "Why is CDK2 a resistance escape route after CDK4/6 inhibitors, and why were earlier CDK2 drugs too toxic?",
    answer: "CDK4/6 and CDK2 both phosphorylate Rb. If a tumour amplifies cyclin E1 or loses p27/Rb-pathway control, cyclin E–CDK2 can hyperphosphorylate Rb on its own and push cells into S phase despite CDK4/6 blockade, so blocking CDK2 closes the bypass. Older 'pan-CDK' drugs (flavopiridol, dinaciclib) also hit CDK1 (needed by every dividing cell) and the transcriptional CDKs 7/9, causing severe myelosuppression and GI toxicity. The new generation is engineered for CDK2-over-CDK1 selectivity, which is hard because the ATP pockets are nearly identical.",
    pearl: "Neutropenia from palbociclib/ribociclib is mainly CDK6 in haematopoietic progenitors. CDK4-selective atirmociclib aims for higher, continuous target coverage with less neutropenia. CDK4/6 itself is an approved target, so the novelty here is selectivity.",
    pathways: [],
    status: "clinical", after: "cdk46",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "Atirmociclib Phase 3 trials (1L HR+/HER2− BC vs approved CDK4/6i + letrozole; post-CDK4/6i setting) started 2024–2025; readouts 2027+ (verify). CDK2: Pfizer discontinued its CDK2 inhibitor PF-07104091 (verify); INX-315 and BLU-222 Phase 1/2 data show early activity in CCNE1-amplified ovarian cancer (verify).",
      risk: "CDK2 inhibitors alone give modest responses, and CDK2 selectivity over CDK1 is hard to achieve. Non-inferior efficacy might not justify switching from established CDK4/6 inhibitors. Biomarkers (CCNE1, p16, Rb status) not yet validated.",
      why: "The next step in cell-cycle therapy: overcome CDK4/6-inhibitor resistance and widen the therapeutic window."
    }
  },
  {
    id: "kat6", name: "KAT6A / KAT6B", short: "KAT6A/B", gene: "KAT6A (MOZ), KAT6B (MORF)",
    family: "MYST-family lysine acetyltransferase (epigenetic writer)", area: "Oncology",
    location: "Nucleus. KAT6A is amplified (8p11-12) in ~10–15% of ER+ breast cancers; ER+ tumour cells depend on it for oestrogen-receptor gene programmes",
    role: "Acetylates histone H3 (notably H3K23) at promoters and enhancers, keeping lineage genes, including ESR1 and ER target genes, transcriptionally open.",
    signalling: [
      "KAT6A/B acetylates histone H3K23 at ER-driven promoters and enhancers",
      "Acetyl-lysine marks open chromatin and recruit reader/transcription complexes",
      "ESR1 (ERα) and oestrogen-responsive genes are transcribed",
      "ERα drives proliferation genes (MYC, cyclin D1) in luminal breast cancer",
      "KAT6 inhibition → loss of H3K23ac → ER programme shut down even when ESR1 is mutated"
    ],
    mechanism: "Oral KAT6A/B inhibitors block the acetyl-CoA site, removing the epigenetic support for ER signalling. They act upstream of ER, so they are complementary to endocrine therapy and still work with ESR1 mutations.",
    drugs: [
      { name: "PF-07248144", action: "First-in-class oral KAT6A/B inhibitor", use: "ER+/HER2− metastatic breast cancer after CDK4/6i, with fulvestrant", co: "Pfizer", phase: "Phase 3" },
      { name: "OP-3136", action: "KAT6 inhibitor", use: "ER+ breast cancer (combinations with palazestrant)", co: "Olema Oncology", phase: "Phase 1" }
    ],
    question: "How can an epigenetic 'writer' inhibitor treat ER+ breast cancer that is resistant to endocrine therapy?",
    answer: "Endocrine resistance often keeps the ER transcriptional programme alive through ESR1 mutations or ligand-independent activation. KAT6A/B work at the level of chromatin: they acetylate H3K23 at the promoters of ESR1 and ER target genes, keeping them accessible. Inhibiting KAT6 lowers ESR1 expression itself and closes the chromatin ER needs, so ER signalling falls regardless of how ER was activated. That makes it additive to fulvestrant or oral SERDs rather than redundant with them.",
    pearl: "Main on-target toxicity in early trials was dysgeusia (taste disturbance) and neutropenia. Swapped in here for 'mutant-selective PI3Kα' (RLY-2608, STX-478), because PI3Kα already has approved drugs (alpelisib, inavolisib).",
    pathways: ["nuclear"],
    status: "clinical", after: "er",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "PF-07248144 + fulvestrant Phase 1: ORR ~30%, median PFS ~10.7 mo in heavily pretreated ER+/HER2− mBC (Lancet 2024). Phase 3 (KATSIS-1 or similar, vs investigator's choice, post-CDK4/6i) started 2025; readout ~2027 (verify).",
      risk: "Single-arm Phase 1 results in small numbers may not hold up. Crowded post-CDK4/6 space (oral SERDs, AKT/PI3K inhibitors, CDK4-selective). Epigenetic drugs can have broad haematological effects.",
      why: "A first-in-class epigenetic route to shut down ER signalling that endocrine drugs no longer control."
    }
  },
  {
    id: "tigit", name: "TIGIT", short: "TIGIT", gene: "TIGIT",
    family: "Immunoglobulin superfamily inhibitory receptor (co-inhibitory checkpoint)", area: "Oncology",
    location: "Activated and exhausted CD8⁺ T cells, regulatory T cells (Tregs), NK cells. Ligands CD155 (PVR) and CD112 on tumour and antigen-presenting cells",
    role: "Inhibitory checkpoint that competes with the co-stimulatory receptor CD226 (DNAM-1) for the same ligand, CD155.",
    signalling: [
      "Tumour or APC expresses CD155 (PVR)",
      "TIGIT binds CD155 with higher affinity than co-stimulatory CD226 does, outcompeting it",
      "TIGIT also blocks CD226 homodimerisation in cis; its ITIM tail delivers inhibitory signals",
      "Reduced CD226 co-stimulation → dampened T-cell and NK-cell activation",
      "Anti-TIGIT antibody frees CD155 for CD226 (and Fc-active antibodies deplete TIGIT-high Tregs)"
    ],
    mechanism: "Anti-TIGIT monoclonal antibodies, almost always combined with anti-PD-1/PD-L1, intended to restore CD226 co-stimulation. Fc-active (tiragolumab) and Fc-silent (domvanalimab) designs were both tested.",
    drugs: [
      { name: "Tiragolumab", action: "Anti-TIGIT IgG1 (Fc-active), with atezolizumab", use: "NSCLC, SCLC, oesophageal, HCC", co: "Roche / Genentech", phase: "Discontinued" },
      { name: "Domvanalimab", action: "Anti-TIGIT, Fc-silent, with zimberelimab (anti-PD-1)", use: "Gastric/GEJ cancer, NSCLC", co: "Arcus Biosciences / Gilead", phase: "Discontinued" },
      { name: "Belrestotug", action: "Anti-TIGIT IgG1, with dostarlimab", use: "PD-L1-high NSCLC", co: "GSK / iTeos", phase: "Discontinued" },
      { name: "Vibostolimab", action: "Anti-TIGIT, co-formulated with pembrolizumab", use: "NSCLC, SCLC, melanoma", co: "Merck & Co", phase: "Discontinued" }
    ],
    question: "TIGIT looked like 'the next PD-1'. Why might adding anti-TIGIT to PD-(L)1 blockade have failed in Phase 3?",
    answer: "TIGIT's benefit depends on CD226 being available to take over, but CD226 is often downregulated or internalised on exhausted tumour T cells, and it is itself held down by PD-1 (PD-1 recruits SHP2, which dephosphorylates CD226). So PD-1 blockade may already release most of what TIGIT blockade adds. Redundant checkpoints (CD96, PVRIG) can compensate. The signal that launched the field, the randomised Phase 2 CITYSCAPE, was small and imbalanced, and its benefit vanished in large Phase 3 trials.",
    pearl: "A class-wide cautionary tale: more than ten companies ran TIGIT programmes on one positive randomised Phase 2 (CITYSCAPE, n=135). Roche's SKYSCRAPER-01/02/06 failures, GSK/iTeos (2025) and Merck all ended. Lesson: biomarker-free 'add-on to PD-1' combinations need large, rigorous Phase 2 evidence before Phase 3.",
    pathways: ["tcell"],
    status: "clinical", after: "pd1",
    pipeline: {
      stage: "Discontinued", asOf: "2026",
      readouts: "Tiragolumab: SKYSCRAPER-02 (SCLC) and -01 (PD-L1-high NSCLC) failed; Roche ended the programme in 2025. Belrestotug: GALAXIES Lung-201 ended, GSK/iTeos stopped 2025. Vibostolimab: KEYVIBE trials stopped for futility (2024). Domvanalimab: STAR-221 (gastric) stopped for futility late 2025 (verify); remaining NSCLC trials uncertain (verify).",
      risk: "Essentially failed as a class in PD-1 combinations. Possible niches remain (CD226-high biomarker selection, combination with chemo or other checkpoints, bispecifics such as PD-1×TIGIT rilvegostomig from AstraZeneca, still in Phase 3 (verify)).",
      why: "Teaches why a strong biological rationale and one small positive Phase 2 are not enough for checkpoint combinations."
    }
  },
  {
    id: "pd1vegf", name: "PD-1 × VEGF bispecific", short: "PD-1×VEGF", gene: "PDCD1 + VEGFA",
    family: "Bispecific antibody (checkpoint + anti-angiogenic)", area: "Oncology",
    location: "Tumour microenvironment: PD-1 on exhausted T cells, VEGF-A secreted by tumour and stromal cells at high levels",
    role: "Combines checkpoint blockade with anti-angiogenesis in one molecule. VEGF also suppresses immunity (blocks dendritic cell maturation, recruits Tregs/MDSCs, makes vessels exclude T cells).",
    signalling: [
      "Tumour secretes high levels of VEGF-A into the microenvironment",
      "Bispecific binds VEGF dimers, forming soluble complexes",
      "Complexes cluster the antibody, raising its avidity for PD-1 on T cells",
      "VEGF neutralised → vessel normalisation and reduced Treg/MDSC suppression",
      "PD-1 blocked → T-cell reactivation inside a more permeable, immune-permissive tumour"
    ],
    mechanism: "Tetravalent PD-1 × VEGF bispecific antibodies (ivonescimab) block both pathways. Binding VEGF increases PD-1 binding avidity, focusing activity in VEGF-rich tumours.",
    drugs: [
      { name: "Ivonescimab (AK112 / SMT112)", action: "Tetravalent PD-1 × VEGF bispecific antibody", use: "NSCLC (1L PD-L1+, EGFR-mutant post-TKI), other solid tumours", co: "Akeso / Summit Therapeutics", phase: "Approved (China)" },
      { name: "Pumitamig (BNT327 / PM8002)", action: "PD-L1 × VEGF-A bispecific antibody", use: "SCLC, TNBC, NSCLC", co: "BioNTech / Bristol Myers Squibb", phase: "Phase 3" },
      { name: "PF-08634404 (SSGJ-707)", action: "PD-1 × VEGF bispecific antibody", use: "NSCLC, CRC", co: "Pfizer (from 3SBio)", phase: "Phase 3" },
      { name: "MK-2010 (LM-299)", action: "PD-1 × VEGF bispecific antibody", use: "Solid tumours", co: "Merck & Co (from LaNova)", phase: "Phase 1/2" }
    ],
    question: "Why might a single PD-1 × VEGF bispecific outperform giving a PD-1 antibody and bevacizumab together?",
    answer: "Ivonescimab is cooperative: VEGF dimers crosslink several bispecific molecules, and these clusters bind PD-1 with much higher avidity. So PD-1 blockade is strongest where VEGF is highest, inside the tumour, and weaker in normal tissue. Putting both functions on one molecule also concentrates anti-VEGF and anti-PD-1 activity in the same place at the same time, so VEGF-driven immunosuppression is reversed exactly where T cells are being released.",
    pearl: "HARMONi-2 (China) was the first Phase 3 to beat pembrolizumab head-to-head (PFS 11.1 vs 5.8 mo, PD-L1+ NSCLC), setting off billion-dollar licensing deals by Pfizer, Merck and BMS. Squamous histology isn't excluded, despite bevacizumab's bleeding warning in squamous NSCLC; watch bleeding events.",
    pathways: ["tcell"],
    status: "clinical", after: "pd1",
    pipeline: {
      stage: "Filed", asOf: "2026",
      readouts: "Approved in China (2024, EGFR-mutant NSCLC post-TKI; 2025, 1L PD-L1+ NSCLC). Global HARMONi (EGFRm post-TKI): PFS benefit, OS trend not statistically significant (2025). Summit planned/submitted a US BLA (verify). HARMONi-3 (1L NSCLC vs pembrolizumab + chemo, global) and HARMONi-7 (PD-L1-high vs pembrolizumab) read out 2026–2027 (verify).",
      risk: "Whether China-only data translate to Western populations, and whether PFS gains turn into OS. FDA concerns about OS and regional heterogeneity. Anti-VEGF toxicities (hypertension, bleeding, proteinuria). Many near-identical competitors.",
      why: "The first credible challenger to pembrolizumab as the backbone of 1L lung cancer immunotherapy."
    }
  },
  {
    id: "cd47", name: "CD47 / SIRPα", short: "CD47", gene: "CD47 (ligand), SIRPA (receptor)",
    family: "Immunoglobulin superfamily 'don't eat me' checkpoint (innate immune)", area: "Oncology",
    location: "CD47 on almost all cells, highest on red blood cells and overexpressed by many tumours (AML, MDS, lymphoma). SIRPα on macrophages and dendritic cells",
    role: "'Don't eat me' signal: CD47 binding to SIRPα inhibits phagocytosis, protecting healthy (and ageing-marker-free) self cells.",
    signalling: [
      "CD47 on the target cell binds SIRPα on a macrophage",
      "SIRPα ITIMs are phosphorylated and recruit the phosphatases SHP-1/SHP-2",
      "Myosin IIA activation at the phagocytic synapse is suppressed → no engulfment",
      "Anti-CD47/SIRPα blockade removes the brake",
      "'Eat me' signals (calreticulin, or antibody Fc via Fcγ receptors) now trigger phagocytosis of the tumour cell"
    ],
    mechanism: "Anti-CD47 antibodies (magrolimab), SIRPα-Fc fusion decoys (evorpacept, Fc-inactive) and anti-SIRPα antibodies, usually combined with an 'eat me' signal (azacitidine, rituximab, trastuzumab).",
    drugs: [
      { name: "Magrolimab", action: "Anti-CD47 IgG4 antibody", use: "MDS, AML (with azacitidine), DLBCL", co: "Gilead (from Forty Seven)", phase: "Discontinued" },
      { name: "Evorpacept (ALX148)", action: "High-affinity SIRPα–Fc decoy with inactive Fc (spares RBCs)", use: "HER2+ gastric cancer (with trastuzumab), other solid tumours", co: "ALX Oncology", phase: "Phase 2" },
      { name: "Lemzoparlimab / other anti-CD47", action: "RBC-sparing anti-CD47 antibodies", use: "MDS, AML, solid tumours", co: "I-Mab and others", phase: "Discontinued" }
    ],
    question: "Why does blocking CD47 cause anaemia, and why did magrolimab fail in Phase 3 despite strong Phase 1b data?",
    answer: "Red cells carry abundant CD47, and ageing RBCs are cleared by splenic macrophages once their CD47 'don't eat me' signal fades. Anti-CD47 removes that signal from all RBCs, causing haemolytic anaemia, and the huge RBC pool soaks up the drug (an antigen sink). That required a low priming dose and very high maintenance doses. In ENHANCE (MDS) and ENHANCE-2/3 (AML), single-arm response rates did not translate into survival: no benefit over azacitidine, and more deaths from infection and bleeding in the magrolimab arms. The uncontrolled Phase 1b had overestimated efficacy.",
    pearl: "Anaemia also interferes with blood-bank cross-matching (the drug coats RBCs). Next-generation designs target SIRPα or use Fc-dead decoys to spare RBCs. FDA halted magrolimab trials and Gilead stopped the programme in 2024.",
    pathways: [],
    status: "clinical", after: "cd20",
    pipeline: {
      stage: "Phase 2", asOf: "2026",
      readouts: "Magrolimab: ENHANCE (MDS, 2023) and ENHANCE-3 (AML, 2024) stopped for futility with excess deaths; programme ended. Evorpacept: ASPEN-06 randomised Phase 2 in 2L HER2+ gastric cancer showed improved ORR with trastuzumab + ramucirumab + paclitaxel (2024); further development and partnering uncertain (verify). Pfizer discontinued its CD47 agents (TTI-621/622).",
      risk: "Haematological toxicity, antigen sink, and a strong record of single-arm overestimation. Unclear whether macrophage activation can add meaningfully to existing combination regimens. Very few active Phase 3 programmes remain.",
      why: "The leading innate-immune checkpoint, and a lesson in how single-arm data and on-target RBC toxicity can sink a hyped target."
    }
  },
  // ───────────── Neuro & psychiatry ─────────────
  {
    id: "tau", name: "Tau", short: "Tau", gene: "MAPT",
    family: "Microtubule-associated protein (intrinsically disordered)", area: "Neuro & psychiatry",
    location: "Neuronal axons. Forms neurofibrillary tangles in Alzheimer's disease and primary tauopathies (PSP, corticobasal degeneration, some frontotemporal dementias)",
    role: "Stabilises axonal microtubules. In disease, hyperphosphorylated tau detaches, aggregates and spreads between connected neurons.",
    signalling: [
      "Tau is hyperphosphorylated (driven partly by upstream Aβ pathology) and detaches from microtubules",
      "Misfolded tau aggregates into oligomers and paired helical filaments",
      "Aggregates are released into extracellular space from affected neurons",
      "Seeds taken up by connected neurons template further misfolding (prion-like spread along circuits)",
      "Tangle spread (Braak stages) tracks neuronal loss and cognitive decline"
    ],
    mechanism: "Antibodies against extracellular tau 'seeds' aim to block cell-to-cell spread (mid-domain or microtubule-binding-region epitopes now preferred). Antisense oligonucleotides lower MAPT mRNA and total tau production.",
    drugs: [
      { name: "BIIB080", action: "Intrathecal antisense oligonucleotide against MAPT mRNA (lowers total tau)", use: "Early Alzheimer's disease", co: "Biogen / Ionis", phase: "Phase 2" },
      { name: "Etalanetug (E2814)", action: "Anti-tau antibody to the microtubule-binding region (HVPGG epitope)", use: "Dominantly inherited AD (DIAN-TU, with lecanemab); sporadic AD", co: "Eisai", phase: "Phase 2/3" },
      { name: "Bepranemab", action: "Anti-tau mid-region antibody", use: "Early Alzheimer's disease", co: "UCB / Roche", phase: "Phase 2" },
      { name: "Posdinemab", action: "Anti-phospho-tau (pT217) antibody", use: "Preclinical/early Alzheimer's disease", co: "Johnson & Johnson", phase: "Discontinued" }
    ],
    question: "Why have most N-terminal anti-tau antibodies failed, and why are newer ones aimed at mid-region or microtubule-binding epitopes?",
    answer: "The tau seeds that spread between neurons are mostly fragments containing the microtubule-binding repeat region. Much extracellular tau is N-terminally truncated, so antibodies to the N-terminus (gosuranemab, semorinemab, tilavonemab) bound plenty of free tau in CSF without neutralising the seeding species, and all failed clinically. Antibodies to the mid-region or MTBR (bepranemab, E2814) target the part of tau that actually templates aggregation. ASOs take a different route: lowering total tau production removes the substrate for aggregation altogether.",
    pearl: "Tau PET tracks symptoms much better than amyloid PET, so tau is seen as the 'executioner' and Aβ as the trigger. Anti-amyloid drugs (lecanemab, donanemab) are approved; combinations of anti-amyloid and anti-tau therapy are the next frontier.",
    pathways: [],
    status: "clinical", after: "abeta",
    pipeline: {
      stage: "Phase 2/3", asOf: "2026",
      readouts: "Bepranemab TOGETHER Phase 2 (2024): missed the primary endpoint (CDR-SB) but slowed tau-PET accumulation and showed benefit in some subgroups. BIIB080 Phase 1b cut CSF tau ~50% and tau PET; CELIA Phase 2 readout 2026 (verify). E2814 in the DIAN-TU tau arm with lecanemab. Posdinemab Phase 2 (Autonomy) stopped for lack of efficacy in 2025 (verify).",
      risk: "Long list of failures (gosuranemab, semorinemab, tilavonemab, zagotenemab, and PSP trials). Antibody brain penetration is ~0.1–0.2%. Intracellular tau may be the true toxic pool, out of antibody reach. Needs long trials in early disease.",
      why: "Tau pathology drives neurodegeneration more directly than amyloid, so it is the most-watched second target in Alzheimer's."
    }
  },
  {
    id: "asyn", name: "α-Synuclein", short: "α-Syn", gene: "SNCA",
    family: "Presynaptic protein (intrinsically disordered)", area: "Neuro & psychiatry",
    location: "Presynaptic terminals throughout the brain and enteric nervous system. Aggregates into Lewy bodies (Parkinson's disease, dementia with Lewy bodies) and glial inclusions (multiple system atrophy)",
    role: "Regulates synaptic vesicle trafficking and release. SNCA mutations and duplications/triplications cause familial Parkinson's disease.",
    signalling: [
      "Monomeric α-synuclein misfolds into β-sheet-rich oligomers",
      "Oligomers assemble into fibrils that deposit as Lewy bodies and Lewy neurites",
      "Fibrillar seeds are released from neurons into the extracellular space",
      "Neighbouring neurons take up seeds, which template further misfolding (Braak spread from gut/brainstem → cortex)",
      "Dopaminergic and cortical neuron dysfunction and death → motor, then cognitive, symptoms"
    ],
    mechanism: "Antibodies against aggregated extracellular α-synuclein aim to block spread. Other approaches: aggregation inhibitors, active vaccines, and ASOs/siRNAs to lower SNCA expression.",
    drugs: [
      { name: "Prasinezumab", action: "Anti-aggregated α-synuclein antibody (C-terminal)", use: "Early Parkinson's disease", co: "Roche / Prothena", phase: "Phase 3" },
      { name: "Amlenetug (Lu AF82422)", action: "Anti-α-synuclein antibody", use: "Multiple system atrophy", co: "Lundbeck", phase: "Phase 3" },
      { name: "Cinpanemab (BIIB054)", action: "Anti-α-synuclein N-terminal antibody", use: "Early Parkinson's disease", co: "Biogen", phase: "Discontinued" }
    ],
    question: "Why does the 'prion-like spread' model justify antibodies for an intracellular protein like α-synuclein, and what has the clinical evidence shown?",
    answer: "α-synuclein aggregates are found inside neurons, but injection of fibrils into animals seeds pathology that spreads along connected circuits, and Lewy pathology appears in fetal grafts placed in Parkinson's patients. This implies aggregates move between cells through the extracellular space, where an antibody could intercept them. In practice, cinpanemab failed completely, and prasinezumab missed its primary endpoints in PASADENA and PADOVA but showed consistent slowing of motor progression in secondary analyses, especially in faster-progressing patients. That was enough for Roche to start Phase 3.",
    pearl: "The α-synuclein seed amplification assay (SAA) on CSF now detects Lewy pathology with >85% sensitivity, enabling biomarker-defined Parkinson's trials, analogous to amyloid PET in Alzheimer's.",
    pathways: [],
    status: "clinical", after: "abeta",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "Prasinezumab: PASADENA (2020–21) missed primary endpoint (MDS-UPDRS); PADOVA (2024) narrowly missed (time to motor progression, HR ~0.84). Roche moved to Phase 3 in early PD in 2025 (verify). Amlenetug: Phase 2 in MSA showed slowing; Phase 3 (MASCOT) ongoing (verify).",
      risk: "Repeated near-misses suggest small effect sizes. Uncertainty about which α-syn species is toxic. Antibodies cross the BBB poorly. Disease heterogeneity in PD dilutes signals; trials need years.",
      why: "Would be the first disease-modifying therapy for Parkinson's, which has only symptomatic dopamine-based treatment."
    }
  },
  {
    id: "lrrk2", name: "LRRK2", short: "LRRK2", gene: "LRRK2",
    family: "Large multidomain serine/threonine kinase (ROCO family; kinase + GTPase)", area: "Neuro & psychiatry",
    location: "Neurons, microglia, immune cells, lung type II pneumocytes, kidney. Gain-of-function mutations (G2019S most common) cause ~1–2% of all Parkinson's, up to ~30–40% in Ashkenazi Jewish and North African Berber populations",
    role: "Phosphorylates a subset of Rab GTPases (e.g. Rab10) that regulate lysosomal and endosomal trafficking.",
    signalling: [
      "Pathogenic mutation (e.g. G2019S in the kinase domain) increases LRRK2 kinase activity",
      "Hyperactive LRRK2 phosphorylates Rab GTPases (Rab10, Rab12)",
      "Phospho-Rabs lose interactions with effectors → impaired lysosomal and autophagic function",
      "Poor clearance of α-synuclein and damaged organelles; microglial inflammation",
      "Dopaminergic neuron degeneration → Parkinson's disease"
    ],
    mechanism: "Brain-penetrant small-molecule LRRK2 kinase inhibitors (BIIB122, NEU-411) and antisense oligonucleotides lowering LRRK2 protein. Target engagement is tracked by phospho-Rab10 and urinary BMP (a lysosomal lipid).",
    drugs: [
      { name: "BIIB122 (DNL151)", action: "Oral, CNS-penetrant LRRK2 kinase inhibitor", use: "Early Parkinson's disease (LRRK2 carriers and sporadic)", co: "Denali / Biogen", phase: "Phase 2b/3" },
      { name: "NEU-411", action: "Oral, CNS-penetrant LRRK2 kinase inhibitor", use: "Early Parkinson's disease, biomarker-selected 'LRRK2-driven' sporadic PD", co: "Neuron23", phase: "Phase 2" },
      { name: "BIIB094 (ION859)", action: "Intrathecal LRRK2 antisense oligonucleotide", use: "Parkinson's disease", co: "Biogen / Ionis", phase: "Phase 1" }
    ],
    question: "LRRK2 mutations cause only a few percent of Parkinson's. Why is it being tested in sporadic patients, and what is the main safety concern?",
    answer: "Activity-reporting biomarkers (phospho-Rab10) suggest LRRK2 kinase activity is raised in many sporadic Parkinson's brains too, and LRRK2 sits on the same lysosomal pathway as GBA (the commonest PD genetic risk factor). So inhibiting LRRK2 may correct a shared lysosomal defect beyond mutation carriers. The concern is on-target toxicity: in primates, LRRK2 inhibition causes reversible vacuolation of lung type II pneumocytes and kidney changes. Human trials monitor lung function closely; so far changes appear benign, and LRRK2 loss-of-function carriers live normally.",
    pearl: "Human genetics de-risk this: people with heterozygous LRRK2 loss-of-function variants are healthy and not protected from, nor harmed by, partial loss. Lowering, not abolishing, activity is the goal.",
    pathways: [],
    status: "clinical", after: "abeta",
    pipeline: {
      stage: "Phase 2b/3", asOf: "2026",
      readouts: "BIIB122: LUMA (Phase 2b, early sporadic PD) readout 2025–2026 (verify result); LIGHTHOUSE (Phase 3, LRRK2 carriers) was converted to a smaller Phase 2a (BEACON). NEU-411 NEULARK Phase 2 in biomarker-selected early PD ongoing (verify). Earlier Denali compound DNL201 was dropped in favour of BIIB122.",
      risk: "Slow-progressing early PD needs long, large trials; symptomatic endpoints (MDS-UPDRS) may not capture disease modification. Lung/kidney safety. Unclear whether sporadic PD is truly LRRK2-driven.",
      why: "The most genetically validated kinase target in Parkinson's, and a test of 'precision neurology'."
    }
  },
  {
    id: "htt", name: "Huntingtin (HTT lowering)", short: "HTT", gene: "HTT",
    family: "Large scaffolding protein (HEAT-repeat)", area: "Neuro & psychiatry",
    location: "Ubiquitous, highest in neurons. CAG repeat expansion (≥36–40) in exon 1 causes Huntington's disease (autosomal dominant); striatal medium spiny neurons die first",
    role: "Scaffold for vesicle transport, transcriptional regulation and development. Mutant HTT (expanded polyglutamine) gains toxic functions.",
    signalling: [
      "Inherited CAG expansion in HTT exon 1 (≥40 repeats = full penetrance)",
      "Further somatic CAG expansion in striatal neurons over decades",
      "Mutant HTT with a long polyglutamine tract misfolds; toxic N-terminal fragments form",
      "Aggregates and soluble oligomers disrupt transcription, axonal transport and mitochondria",
      "Striatal medium spiny neuron loss → chorea, psychiatric symptoms, dementia"
    ],
    mechanism: "Lower HTT production: AAV-delivered microRNA (AMT-130, infused directly into the striatum), antisense oligonucleotides (tominersen, intrathecal), or oral splicing modulators that insert a 'poison exon' into HTT mRNA (votoplam/PTC518).",
    drugs: [
      { name: "AMT-130", action: "AAV5-delivered microRNA silencing HTT (one-time intrastriatal neurosurgical infusion)", use: "Early manifest Huntington's disease", co: "uniQure", phase: "Filed" },
      { name: "Tominersen", action: "Intrathecal non-allele-selective HTT antisense oligonucleotide", use: "Younger, early-stage HD (GENERATION HD2)", co: "Roche / Ionis", phase: "Phase 2" },
      { name: "Votoplam (PTC518)", action: "Oral HTT pre-mRNA splicing modulator (poison exon → nonsense-mediated decay)", use: "Huntington's disease", co: "PTC Therapeutics / Novartis", phase: "Phase 2" }
    ],
    question: "What did tominersen's failure teach about lowering huntingtin?",
    answer: "GENERATION HD1 (2021) gave intrathecal tominersen every 8 or 16 weeks and lowered CSF mutant HTT, but the frequent-dosing arm did worse than placebo, with ventricular enlargement and raised neurofilament light, a sign of neural injury. Post-hoc analysis suggested younger patients with lower disease burden on less frequent dosing might benefit. Lessons: lowering wild-type plus mutant HTT too much or too often may be harmful, CSF HTT reduction doesn't guarantee benefit, and intervening earlier matters. That's why GENERATION HD2 uses lower doses in younger patients, and why one-time, localised approaches (AMT-130) and oral drugs are being pursued.",
    pearl: "Branaplam (Novartis), an oral HTT splicing modulator, was stopped in 2022 for peripheral neuropathy. Neurofilament light (NfL) is now a key safety and efficacy biomarker in HD trials.",
    pathways: [],
    status: "clinical", after: "abeta",
    pipeline: {
      stage: "Filed", asOf: "2026",
      readouts: "AMT-130: Sept 2025 Phase 1/2 data showed ~75% slowing of decline on cUHDRS at 36 months (high dose) vs a propensity-matched external control; uniQure planned a 2026 BLA, but FDA later questioned the external control (verify current status). Votoplam PIVOT-HD Phase 2 showed dose-dependent HTT lowering (2025); Novartis licensed it (verify Phase 3 start). Tominersen GENERATION HD2 Phase 2 readout ~2026 (verify).",
      risk: "Single-arm vs external-control evidence for a neurosurgical gene therapy is a regulatory hurdle. Long-term safety of non-allele-selective lowering. Systemic HTT lowering may affect peripheral tissues. Tominersen's harmful signal hangs over the field.",
      why: "Could be the first disease-modifying therapy for Huntington's disease, a fully penetrant monogenic neurodegeneration."
    }
  },
  {
    id: "kv7", name: "Kv7.2/7.3 (KCNQ2/3) potassium channel", short: "Kv7", gene: "KCNQ2, KCNQ3",
    family: "Voltage-gated potassium channel", area: "Neuro & psychiatry",
    location: "Axon initial segment and nodes of Ranvier of neurons. Heteromeric Kv7.2/7.3 generates the 'M-current'. KCNQ2 mutations cause neonatal epilepsies",
    role: "Generates the M-current, a slowly activating, non-inactivating K⁺ current near resting potential that acts as a brake on repetitive firing.",
    signalling: [
      "Kv7.2/7.3 channels open near resting membrane potential (subthreshold voltages)",
      "Outward K⁺ current (M-current) hyperpolarises and stabilises the membrane",
      "Opener binds the channel pore domain (Trp236) and shifts activation to more negative voltages",
      "Larger M-current raises the threshold for action potential firing",
      "Burst and repetitive firing suppressed → fewer seizures"
    ],
    mechanism: "Positive allosteric modulators ('openers') of Kv7.2–7.5 increase the M-current, damping neuronal hyperexcitability. Being tested in focal and generalised epilepsy, and in depression (Kv7 opening in reward circuits).",
    drugs: [
      { name: "Azetukalner (XEN1101)", action: "Kv7.2/7.3 opener (once-daily, no titration)", use: "Focal onset seizures, primary generalised tonic-clonic seizures; major depressive disorder", co: "Xenon Pharmaceuticals", phase: "Phase 3" },
      { name: "BHV-7000", action: "Kv7.2/7.3 opener (designed to avoid GABA-A activity)", use: "Focal epilepsy, generalised epilepsy; bipolar mania and MDD (failed)", co: "Biohaven", phase: "Phase 2/3" },
      { name: "Retigabine (ezogabine)", action: "First-generation Kv7 opener", use: "Focal seizures (adjunct)", co: "GSK / Valeant", phase: "Discontinued" }
    ],
    question: "Retigabine was an effective antiseizure drug. Why was it withdrawn, and why are new Kv7 openers still considered a novel target?",
    answer: "Retigabine (ezogabine) was approved in 2011 but withdrawn in 2017: its chromophore oxidised and dimerised into pigmented products causing blue-grey skin discolouration and retinal pigment changes, and it also caused urinary retention (Kv7 in bladder smooth muscle) and needed TID dosing. Its commercial use collapsed. With no Kv7 opener now on the market, the mechanism is effectively unexploited: no other antiseizure drug opens potassium channels (most block Na⁺/Ca²⁺ channels or boost GABA). New openers are chemically redesigned to avoid pigmentation and allow once-daily dosing.",
    pearl: "Azetukalner's Phase 2b X-TOLE showed a 52.8% median seizure reduction at 25 mg, among the largest placebo-adjusted effects in focal epilepsy. Dizziness and somnolence are the main side effects.",
    pathways: ["synapse"],
    status: "clinical", after: "nav",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "Azetukalner: X-TOLE2 (focal seizures) Phase 3 topline expected early 2026 (verify result), followed by X-TOLE3 and X-ACKT (generalised tonic-clonic); US NDA planned after X-TOLE2 (verify filing). X-NOVA2/3 in MDD (Phase 3). BHV-7000: focal epilepsy Phase 2/3 readouts 2025–2026 (verify); failed in bipolar mania (2025) and MDD.",
      risk: "Retigabine's history (pigmentation, urinary retention) raises the safety bar. CNS side effects (dizziness) may limit doses. Psychiatric indications have mixed results. Must beat a crowded generic antiseizure market.",
      why: "Reopens a validated but abandoned antiseizure mechanism, with roughly a third of epilepsy patients still drug-resistant."
    }
  },
  {
    id: "taar1", name: "Trace amine-associated receptor 1", short: "TAAR1", gene: "TAAR1",
    family: "GPCR (class A, Gs-coupled)", area: "Neuro & psychiatry",
    location: "Intracellular membranes of dopaminergic (VTA), serotonergic (dorsal raphe) and glutamatergic neurons; also pancreas and gut",
    role: "Senses trace amines (β-phenylethylamine, tyramine) and amphetamines, acting as a brake on monoamine neuron firing.",
    signalling: [
      "Agonist (trace amine or drug) binds TAAR1 in monoaminergic neurons",
      "Gs activation → adenylyl cyclase → cAMP → PKA/PKC signalling",
      "Activation of GIRK K⁺ channels and TAAR1–D2 receptor heterodimer interactions",
      "VTA dopamine neurons fire less → reduced presynaptic dopamine synthesis and release in the striatum",
      "Lower striatal hyperdopaminergia → antipsychotic-like effect without postsynaptic D2 blockade"
    ],
    mechanism: "TAAR1 agonists (often with 5-HT1A partial agonism) dampen presynaptic dopamine output, aiming for antipsychotic effects without D2-blockade side effects (EPS, hyperprolactinaemia, weight gain).",
    drugs: [
      { name: "Ulotaront (SEP-363856)", action: "TAAR1 agonist with 5-HT1A agonism", use: "Schizophrenia (failed Phase 3); adjunctive MDD, GAD", co: "Sumitomo Pharma / Otsuka", phase: "Phase 3" },
      { name: "Ralmitaront (RO6889450)", action: "TAAR1 partial agonist", use: "Schizophrenia (acute and negative symptoms)", co: "Roche", phase: "Discontinued" }
    ],
    question: "How can a TAAR1 agonist be antipsychotic without blocking D2 receptors, and why did Phase 3 trials fail?",
    answer: "Psychosis is linked to excess presynaptic dopamine synthesis and release in the associative striatum. TAAR1 activation in VTA dopamine neurons reduces their firing and dopamine release, acting upstream of the D2 receptor rather than at it, so it avoids motor and endocrine side effects. Ulotaront's Phase 2 (2020) was positive, but DIAMOND 1 and 2 (2023) failed to separate from placebo: placebo responses were very high (as in many recent schizophrenia trials), and ulotaront's effect may be smaller than D2 blockers'. Ralmitaront also failed (Phase 2).",
    pearl: "Shows that non-D2 antipsychotics are possible but hard: the muscarinic agonist xanomeline-trospium (Cobenfy, 2024) succeeded where TAAR1 has so far failed. High placebo response, especially in US sites, is a recurring cause of psychiatric trial failure.",
    pathways: ["gs"],
    status: "clinical", after: "drd2",
    pipeline: {
      stage: "Phase 3", asOf: "2026",
      readouts: "Ulotaront DIAMOND 1/2 (schizophrenia, 2023): no separation from placebo. Otsuka continued Phase 2/3 trials in adjunctive MDD and GAD (verify readouts). Ralmitaront: Phase 2 stopped for lack of efficacy (2023). Newer TAAR1 agonists (e.g. from Boehringer and others) in early development (verify).",
      risk: "Efficacy may be too weak versus D2 antagonists. High placebo response. Lack of a translatable biomarker for dopamine synthesis capacity to select patients.",
      why: "A test of whether antipsychotic efficacy can be separated from D2-blockade side effects via a presynaptic dopamine brake."
    }
  }
);
