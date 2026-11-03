// Cell diagrams for the additional pathways (same format as diagrams.js).
Object.assign(window.FC_DIAGRAMS, {
  lipid: {
    h: 480,
    scene: [
      { t: "box", x: 10, y: 8, w: 215, h: 74, label: "Intestine", kind: "organ" },
      { t: "box", x: 10, y: 100, w: 225, h: 250, label: "Hepatocyte (liver)", kind: "organ" },
      { t: "label", x: 262, y: 110, text: "Blood" },
      { t: "box", x: 242, y: 255, w: 110, h: 215, label: "Artery wall", kind: "organ" }
    ],
    nodes: [
      ["Diet", "Dietary / biliary\ncholesterol", 70, 48, "ligand"],
      ["NPC", "NPC1L1", 175, 48, "channel", "Enterocyte sterol transporter. Ezetimibe blocks it."],
      ["AcCoA", "Acetyl-CoA", 60, 140, "messenger"],
      ["ACL", "ACL", 60, 192, "enzyme", "ATP-citrate lyase, upstream of HMG-CoA reductase. Bempedoic acid is activated only in the liver, so it causes no muscle symptoms."],
      ["HMG", "HMG-CoA\nreductase", 60, 255, "enzyme", "Rate-limiting enzyme of cholesterol synthesis."],
      ["Chol", "Hepatocyte\ncholesterol ↓", 160, 140, "messenger"],
      ["SREBP", "SREBP2", 160, 215, "tf", "Sterol-sensing transcription factor that turns on LDLR (and PCSK9) when cholesterol falls."],
      ["PCSK9", "PCSK9", 160, 295, "inhib", "Escorts LDL receptors to the lysosome."],
      ["LDLR", "LDL\nreceptor", 235, 215, "receptor"],
      ["LDL", "LDL (apoB)", 300, 160, "ligand"],
      ["Ox", "Oxidised\nLDL", 297, 305, "messenger"],
      ["Foam", "Foam cells", 297, 365, "output"],
      ["Plaque", "Plaque", 297, 430, "output"]
    ],
    edges: ["Diet>NPC", "NPC~>Chol", "AcCoA>ACL", "ACL>HMG", "HMG>Chol", "Chol>SREBP", "SREBP>LDLR", "SREBP>PCSK9", "PCSK9-|LDLR", "LDL>LDLR", "LDL~>Ox", "Ox>Foam", "Foam>Plaque"],
    steps: [["Diet", "NPC", "Chol"], ["AcCoA", "ACL", "HMG", "Chol"], ["Chol", "SREBP", "LDLR", "PCSK9"], ["LDL", "LDLR"], ["PCSK9", "LDLR"], ["LDL", "Ox", "Foam", "Plaque"]],
    drugs: [
      { d: "Ezetimibe", at: "NPC", fx: "block", note: "Blocks intestinal cholesterol uptake → ~20% LDL reduction." },
      { d: "Bempedoic acid", at: "ACL", fx: "block", note: "Liver-activated ACL inhibitor (statin-intolerant patients)." },
      { d: "Atorvastatin, rosuvastatin", at: "HMG", fx: "block", note: "Statins: ↓ synthesis → SREBP2 → more LDL receptors." },
      { d: "Evolocumab, inclisiran", at: "PCSK9", fx: "block", note: "Anti-PCSK9 antibody / siRNA → LDL receptors recycle → LDL ↓ ~50–60%." }
    ],
    targets: { npc1l1: "NPC", hmgcr: "HMG", pcsk9: "PCSK9" }
  },

  insulin: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Blood" },
      { t: "membrane", y: 70 },
      { t: "label", x: 190, y: 112, text: "Pancreatic β-cell" },
      { t: "label", x: 8, y: 238, text: "Blood" },
      { t: "membrane", y: 270 },
      { t: "label", x: 150, y: 305, text: "Muscle · fat · liver cell" }
    ],
    nodes: [
      ["Glc", "Glucose", 45, 22, "ligand"],
      ["GLUT2", "GLUT2", 45, 70, "channel"],
      ["KATP", "K_ATP\nSUR1", 145, 70, "channel", "Kir6.2/SUR1 channel. Open at rest; ATP closes it."],
      ["CaV", "Ca²⁺\nchannel", 235, 70, "channel"],
      ["GLP1R", "GLP-1R", 322, 70, "receptor"],
      ["Met", "Glycolysis →\n↑ ATP/ADP", 55, 145, "messenger"],
      ["Dep", "Depolarisation", 160, 145, "messenger"],
      ["cAMP", "cAMP", 322, 140, "messenger"],
      ["Gran", "Insulin granule\nexocytosis", 255, 195, "output"],
      ["Ins", "Insulin", 175, 230, "ligand"],
      ["IR", "Insulin\nreceptor", 95, 270, "receptor", "Receptor tyrosine kinase (pre-formed dimer)."],
      ["GLUT4", "GLUT4", 290, 270, "channel", "Insulin-responsive glucose transporter in muscle and fat."],
      ["IRS", "IRS → PI3K", 95, 340, "kinase"],
      ["AKT", "AKT", 210, 340, "kinase"],
      ["Glyc", "Glycogen ↑\ngluconeogenesis ↓", 105, 420, "output"],
      ["K", "K⁺ into cells\nlipolysis ↓", 265, 420, "output"]
    ],
    edges: ["Glc>GLUT2", "GLUT2>Met", "Met-|KATP", "KATP>Dep", "Dep>CaV", "CaV>Gran", "GLP1R>cAMP", "cAMP>Gran", "Gran~>Ins", "Ins>IR", "IR>IRS", "IRS>AKT", "AKT>GLUT4", "AKT>Glyc", "AKT>K"],
    steps: [["Glc", "GLUT2", "Met"], ["Met", "KATP", "Dep"], ["Dep", "CaV", "Gran", "GLP1R", "cAMP"], ["Gran", "Ins", "IR", "IRS", "AKT"], ["AKT", "GLUT4", "Glyc"], ["AKT", "K"]],
    drugs: [
      { d: "Gliclazide, glimepiride", at: "KATP", fx: "block", note: "Sulfonylureas close K_ATP independently of glucose → hypoglycaemia risk." },
      { d: "Diazoxide", at: "KATP", fx: "stim", note: "Opens K_ATP → ↓ insulin (hyperinsulinism)." },
      { d: "Semaglutide, tirzepatide", at: "GLP1R", fx: "stim", note: "Amplify glucose-triggered secretion via cAMP." },
      { d: "Insulin analogues", at: "IR", fx: "stim", note: "Rapid, basal and weekly insulins." },
      { d: "Metformin", at: "Glyc", fx: "block", note: "Lowers hepatic glucose output (mechanism partly via mitochondrial effects / AMPK)." }
    ],
    targets: { katp: "KATP", insr: "IR", glp1r: "GLP1R" }
  },

  eicosanoid: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 70 }
    ],
    nodes: [
      ["Stim", "Injury · cytokines", 70, 30, "ligand"],
      ["Phos", "Membrane\nphospholipids", 205, 70, "messenger"],
      ["PLA2", "cPLA2", 85, 125, "enzyme", "Cytosolic phospholipase A2 cleaves arachidonic acid from phospholipids."],
      ["GC", "Glucocorticoids\n→ annexin-1", 300, 130, "inhib"],
      ["AA", "Arachidonic acid", 195, 180, "messenger"],
      ["COX", "COX-1 / COX-2", 90, 235, "enzyme"],
      ["LOX", "5-LOX (FLAP)", 290, 235, "enzyme"],
      ["PGH2", "PGH2", 90, 290, "messenger"],
      ["Prost", "PGE2 · PGI2\nTXA2 · PGF2α", 90, 360, "output", "Each made by a tissue-specific synthase and acting on its own GPCR (EP, IP, TP, FP)."],
      ["LTB4", "LTB4 →\nneutrophils", 230, 300, "output"],
      ["CysLT", "LTC4/D4/E4", 320, 300, "messenger"],
      ["CysR", "CysLT1", 310, 370, "receptor"],
      ["Bron", "Bronchoconstriction\nmucus · oedema", 270, 445, "output"]
    ],
    edges: ["Stim>PLA2", "PLA2>AA", "Phos~>AA", "AA>COX", "AA>LOX", "COX>PGH2", "PGH2>Prost", "LOX>LTB4", "LOX>CysLT", "CysLT>CysR", "CysR>Bron", "GC-|PLA2"],
    steps: [["Stim", "PLA2", "Phos", "AA"], ["AA", "COX", "PGH2"], ["PGH2", "Prost"], ["AA", "LOX", "LTB4", "CysLT"], ["CysLT", "CysR", "Bron"], ["GC", "PLA2", "COX"]],
    drugs: [
      { d: "Aspirin, ibuprofen, celecoxib", at: "COX", fx: "block", note: "NSAIDs / coxibs block prostanoid synthesis." },
      { d: "Zileuton", at: "LOX", fx: "block", note: "5-lipoxygenase inhibitor (asthma)." },
      { d: "Montelukast", at: "CysR", fx: "block", note: "CysLT1 antagonist (asthma, allergic rhinitis)." },
      { d: "Prednisolone, inhaled steroids", at: "GC", fx: "stim", note: "Induce annexin-1 (↓PLA2) and repress COX-2." },
      { d: "Latanoprost, epoprostenol", at: "Prost", fx: "stim", note: "Prostanoid analogues: FP agonist (glaucoma), PGI2 (pulmonary hypertension)." }
    ],
    targets: { cox: "COX", cyslt1: "CysR", fp: "Prost", gr: "GC" }
  },

  complement: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Plasma" },
      { t: "membrane", y: 400 },
      { t: "label", x: 8, y: 440, text: "Target cell" }
    ],
    nodes: [
      ["Class", "Classical\nantibody · C1q", 65, 45, "ligand"],
      ["Lectin", "Lectin\nMBL", 180, 45, "ligand"],
      ["Alt", "Alternative\nC3 tick-over", 295, 45, "ligand"],
      ["C3c", "C3 convertase", 180, 120, "enzyme", "C4b2a (classical/lectin) or C3bBb (alternative)."],
      ["C3a", "C3a", 60, 165, "messenger", "Anaphylatoxin."],
      ["C3b", "C3b (opsonin)", 300, 170, "messenger", "Coats targets for phagocytosis and builds more convertase."],
      ["FB", "Factor B / D", 305, 240, "enzyme", "Alternative-pathway amplification. Factor H (a regulator) competes with factor B."],
      ["C5c", "C5 convertase", 175, 215, "enzyme"],
      ["C5a", "C5a →\nneutrophils", 60, 275, "output", "The most potent anaphylatoxin and chemoattractant."],
      ["C5b", "C5b", 175, 290, "messenger"],
      ["Reg", "CD55 · CD59\nfactor H", 300, 330, "inhib", "Host-cell regulators. Absent on PNH red cells (PIGA mutation → no GPI anchors)."],
      ["MAC", "MAC\nC5b–C9", 175, 400, "channel", "Membrane attack complex: a pore that lyses the cell."],
      ["Lysis", "Cell lysis", 290, 450, "output"]
    ],
    edges: ["Class>C3c", "Lectin>C3c", "Alt>C3c", "C3c>C3a", "C3c>C3b", "C3b>FB", "FB=>C3c", "C3c>C5c", "C5c>C5a", "C5c>C5b", "C5b>MAC", "MAC>Lysis", "Reg-|MAC"],
    steps: [["Class", "Lectin", "Alt", "C3c"], ["C3c", "C3a", "C3b"], ["C3b", "FB", "C3c"], ["C3c", "C5c", "C5a", "C5b"], ["C5b", "MAC", "Lysis"], ["Reg", "MAC"]],
    drugs: [
      { d: "Eculizumab, ravulizumab", at: "C5c", fx: "block", note: "Anti-C5 antibodies prevent cleavage to C5a + C5b (PNH, aHUS, gMG, NMOSD)." },
      { d: "Pegcetacoplan", at: "C3c", fx: "block", note: "C3 inhibitor: also stops C3b opsonisation (extravascular haemolysis)." },
      { d: "Iptacopan", at: "FB", fx: "block", note: "Oral factor B inhibitor blocks the amplification loop." },
      { d: "Avacopan", at: "C5a", fx: "block", note: "C5a receptor antagonist (ANCA vasculitis)." },
      { d: "C1-inhibitor", at: "Class", fx: "block", note: "Replaces the missing regulator in hereditary angioedema." }
    ],
    targets: { c5: "C5c" }
  },

  bcell: {
    h: 480,
    scene: [
      { t: "box", x: 10, y: 6, w: 340, h: 66, label: "Bone marrow", kind: "organ" },
      { t: "box", x: 10, y: 92, w: 340, h: 180, label: "Lymph node · germinal centre", kind: "organ" },
      { t: "box", x: 10, y: 292, w: 340, h: 112, label: "Plasma cell niche", kind: "organ" }
    ],
    nodes: [
      ["Pre", "Pre-B → naive B\nCD19 · CD20", 180, 42, "tf"],
      ["Ag", "Antigen", 60, 128, "ligand"],
      ["BCR", "BCR → BTK", 60, 190, "kinase"],
      ["B", "Activated B cell\nCD19 · CD20", 180, 190, "tf"],
      ["Th", "T-cell help\nCD40L · IL-21", 295, 130, "ligand"],
      ["GC", "Class switch ·\naffinity maturation", 180, 245, "output"],
      ["PC", "Plasma cell\nCD38 · BCMA", 180, 330, "tf"],
      ["APRIL", "APRIL / BAFF", 300, 330, "ligand", "Survival factors. BAFF also supports B cells (belimumab target)."],
      ["Ab", "IgG · IgA · IgE", 180, 380, "messenger"],
      ["Eff", "Neutralise · opsonise\ncomplement", 95, 448, "output"],
      ["FcRn", "FcRn recycling\n(endothelium)", 275, 448, "enzyme", "Rescues IgG and albumin from lysosomes → ~3-week half-life."]
    ],
    edges: ["Pre>B", "Ag>BCR", "BCR>B", "Th>GC", "B>GC", "GC>PC", "APRIL>PC", "PC>Ab", "Ab>Eff", "FcRn>Ab"],
    steps: [["Pre", "B"], ["Ag", "BCR", "B"], ["Th", "B", "GC"], ["GC", "PC", "APRIL"], ["PC", "Ab", "Eff"], ["FcRn", "Ab"]],
    drugs: [
      { d: "CD19 CAR-T, blinatumomab", at: "Pre", fx: "block", note: "Target CD19 across the B lineage." },
      { d: "Rituximab, ocrelizumab", at: "B", fx: "block", note: "Deplete CD20⁺ B cells (plasma cells spared)." },
      { d: "Ibrutinib, zanubrutinib", at: "BCR", fx: "block", note: "BTK inhibitors cut BCR signalling." },
      { d: "Belimumab", at: "APRIL", fx: "block", note: "Anti-BAFF (lupus)." },
      { d: "Daratumumab, teclistamab", at: "PC", fx: "block", note: "CD38 / BCMA-directed myeloma therapies." },
      { d: "Efgartigimod", at: "FcRn", fx: "block", note: "FcRn blockade → IgG degraded faster (myasthenia gravis)." }
    ],
    targets: { cd19: "Pre", cd20: "B", btk: "BCR", cd38: "PC", bcma: "PC", fcrn: "FcRn", ige: "Ab" }
  },

  apoptosis: {
    h: 480,
    scene: [
      { t: "label", x: 200, y: 14, text: "Extracellular" },
      { t: "membrane", y: 70, x1: 230 },
      { t: "box", x: 125, y: 182, w: 225, h: 103, label: "Mitochondrion", kind: "er" }
    ],
    nodes: [
      ["Stress", "Stress · DNA\ndamage · chemo", 60, 115, "output"],
      ["DL", "FAS-L / TRAIL", 300, 22, "ligand"],
      ["DR", "Death\nreceptor", 300, 70, "receptor"],
      ["C8", "Caspase-8", 310, 140, "enzyme"],
      ["BH3", "BH3-only\nBIM · PUMA", 60, 180, "tf", "Pro-apoptotic sensors that are switched on by stress."],
      ["BCL2", "BCL-2 /\nMCL-1", 60, 260, "inhib", "Anti-apoptotic guardians that sequester BH3-only proteins and BAX/BAK."],
      ["BAX", "BAX/BAK", 250, 182, "channel", "Pore-forming effectors in the outer mitochondrial membrane."],
      ["Cyt", "Cytochrome c", 200, 255, "messenger"],
      ["Apop", "Apoptosome\n→ caspase-9", 190, 335, "enzyme"],
      ["C3", "Caspase-3/7", 190, 400, "enzyme"],
      ["Death", "Apoptosis", 190, 455, "output"]
    ],
    edges: ["Stress>BH3", "BH3-|BCL2", "BCL2-|BAX", "BH3>BAX", "BAX>Cyt", "Cyt>Apop", "Apop>C3", "C3>Death", "DL>DR", "DR>C8", "C8>C3", "C8>BAX"],
    steps: [["Stress", "BH3"], ["BCL2", "BH3", "BAX"], ["BH3", "BAX"], ["BAX", "Cyt", "Apop"], ["Apop", "C3", "Death"], ["DL", "DR", "C8", "C3", "BAX"]],
    drugs: [
      { d: "Venetoclax", at: "BCL2", fx: "block", note: "BH3 mimetic: frees BIM → BAX/BAK → apoptosis (CLL, AML)." },
      { d: "Chemotherapy, radiotherapy", at: "Stress", fx: "stim", note: "DNA damage → p53 → BH3-only proteins." },
      { d: "Bortezomib", at: "BH3", fx: "stim", note: "Proteasome inhibition stabilises NOXA." }
    ],
    targets: { bcl2: "BCL2" }
  },

  dna: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Cytoplasm" },
      { t: "nucleus", cx: 180, cy: 305, rx: 172, ry: 110 },
      { t: "label", x: 8, y: 440, text: "Mitosis" }
    ],
    nodes: [
      ["DHF", "DHF", 50, 50, "messenger"],
      ["DHFR", "DHFR", 145, 50, "enzyme", "Dihydrofolate reductase regenerates THF."],
      ["THF", "THF", 240, 50, "messenger", "Tetrahydrofolate: one-carbon donor for purine and thymidine synthesis."],
      ["dUMP", "dUMP", 330, 115, "messenger"],
      ["TS", "Thymidylate\nsynthase", 240, 115, "enzyme"],
      ["dTMP", "dTMP · purines", 140, 140, "messenger"],
      ["DNA", "Replicating DNA", 180, 225, "output"],
      ["TOP1", "Topo I\n(nick)", 65, 280, "enzyme", "Cuts one strand to release torsional strain."],
      ["TOP2", "Topo II\n(DS break)", 295, 280, "enzyme", "Cuts both strands and passes another duplex through."],
      ["SSB", "SSB → PARP\nrepair", 85, 345, "enzyme"],
      ["DSB", "DSB → HR\n(BRCA1/2)", 275, 345, "enzyme"],
      ["Arrest", "Fork collapse → p53\n→ arrest / apoptosis", 180, 390, "output"],
      ["Tub", "Tubulin → mitotic spindle", 190, 450, "kinase", "α/β-tubulin dimers polymerise into microtubules."]
    ],
    edges: ["DHF>DHFR", "DHFR>THF", "THF>TS", "dUMP>TS", "TS>dTMP", "TS~>DHF", "dTMP~>DNA", "DNA>TOP1", "DNA>TOP2", "TOP1>SSB", "TOP2>DSB", "SSB~>DSB", "DSB>Arrest"],
    steps: [["DHF", "DHFR", "THF"], ["THF", "TS", "dUMP", "dTMP", "DHF"], ["dTMP", "DNA", "TOP1", "TOP2"], ["TOP1", "SSB", "TOP2", "DSB"], ["SSB", "DSB", "Arrest"], ["Tub"]],
    drugs: [
      { d: "Methotrexate, pemetrexed", at: "DHFR", fx: "block", note: "Antifolates (trimethoprim targets bacterial DHFR)." },
      { d: "5-FU, capecitabine", at: "TS", fx: "block", note: "FdUMP locks thymidylate synthase." },
      { d: "Irinotecan, topotecan", at: "TOP1", fx: "block", note: "Trap the topo I cleavage complex." },
      { d: "Doxorubicin, etoposide", at: "TOP2", fx: "block", note: "Trap topo II → double-strand breaks." },
      { d: "Olaparib", at: "SSB", fx: "block", note: "PARP inhibition → synthetic lethality with BRCA loss." },
      { d: "Paclitaxel, vincristine", at: "Tub", fx: "block", note: "Stabilise / destabilise microtubules → mitotic arrest." }
    ],
    targets: { dhfr: "DHFR", tyms: "TS", top1: "TOP1", top2: "TOP2", parp: "SSB", tubulin: "Tub" }
  },

  bone: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Bone surface" },
      { t: "box", x: 10, y: 380, w: 340, h: 92, label: "Bone matrix", kind: "er" }
    ],
    nodes: [
      ["PTH", "PTH · cytokines", 90, 32, "ligand"],
      ["OPG", "OPG (decoy)", 200, 50, "inhib", "Osteoprotegerin: soluble decoy receptor for RANKL."],
      ["Ob", "Osteoblast", 90, 110, "kinase"],
      ["RANKL", "RANKL", 185, 110, "ligand"],
      ["RANK", "RANK", 280, 110, "receptor"],
      ["Pre", "Osteoclast\nprecursor", 280, 185, "kinase"],
      ["Oc", "Osteoclast", 280, 255, "enzyme", "Multinucleated resorbing cell: acid + cathepsin K under a sealed zone."],
      ["Wnt", "Wnt → LRP5/6", 90, 250, "kinase"],
      ["Form", "New bone\nformation", 65, 330, "output"],
      ["Sost", "Sclerostin", 165, 330, "inhib", "Osteocyte-derived Wnt inhibitor."],
      ["Ocyte", "Osteocyte", 140, 425, "enzyme", "Mechanosensing cell buried in bone matrix."],
      ["Res", "Resorption →\nCa²⁺ released", 280, 425, "output"]
    ],
    edges: ["PTH>Ob", "Ob>RANKL", "OPG-|RANKL", "RANKL>RANK", "RANK>Pre", "Pre>Oc", "Oc>Res", "Ocyte>Sost", "Sost-|Wnt", "Wnt>Form"],
    steps: [["PTH", "Ob", "Ocyte"], ["Ob", "RANKL", "OPG"], ["RANKL", "RANK", "Pre", "Oc"], ["Oc", "Res"], ["Ocyte", "Sost", "Wnt"], ["Wnt", "Form", "PTH"]],
    drugs: [
      { d: "Denosumab", at: "RANKL", fx: "block", note: "Anti-RANKL antibody (acts like OPG)." },
      { d: "Alendronate, zoledronic acid", at: "Oc", fx: "block", note: "Bisphosphonates inhibit osteoclast FPPS." },
      { d: "Romosozumab", at: "Sost", fx: "block", note: "Anti-sclerostin → ↑ bone formation and ↓ resorption." },
      { d: "Teriparatide, abaloparatide", at: "PTH", fx: "stim", note: "Intermittent PTH1R agonism is anabolic." }
    ],
    targets: { rankl: "RANKL", fpps: "Oc", sost: "Sost" }
  },

  hiv: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "label", x: 8, y: 122, text: "CD4 T cell" },
      { t: "nucleus", cx: 180, cy: 395, rx: 168, ry: 70 }
    ],
    nodes: [
      ["Virion", "HIV virion\ngp120 / gp41", 95, 35, "ligand"],
      ["Bud", "Budding →\nmaturation", 290, 35, "output"],
      ["CD4", "CD4", 60, 90, "receptor"],
      ["CCR5", "CCR5 /\nCXCR4", 135, 90, "receptor", "Co-receptor. CCR5Δ32 homozygotes are resistant to R5 virus."],
      ["Cap", "Capsid", 95, 165, "messenger", "The cone-shaped capsid protects the genome and docks at the nuclear pore."],
      ["RNA", "Viral RNA", 200, 165, "messenger"],
      ["RT", "Reverse\ntranscriptase", 200, 225, "enzyme"],
      ["PR", "Protease", 305, 200, "enzyme", "Cleaves Gag-Pol after budding."],
      ["vDNA", "Viral DNA", 200, 290, "messenger"],
      ["mRNA", "mRNA → Gag-Pol", 300, 290, "messenger"],
      ["IN", "Integrase", 95, 380, "enzyme"],
      ["Pro", "Provirus (latent\nreservoir)", 240, 405, "output"]
    ],
    edges: ["Virion>CD4", "Virion>CCR5", "CCR5>Cap", "Cap~>RNA", "RNA>RT", "RT>vDNA", "vDNA~>IN", "IN>Pro", "Pro>mRNA", "mRNA>PR", "PR>Bud"],
    steps: [["Virion", "CD4", "CCR5"], ["CCR5", "Cap", "RNA"], ["RNA", "RT", "vDNA"], ["vDNA", "IN", "Pro"], ["Pro", "mRNA"], ["mRNA", "PR", "Bud"]],
    drugs: [
      { d: "Maraviroc", at: "CCR5", fx: "block", note: "CCR5 antagonist (R5-tropic virus only)." },
      { d: "Lenacapavir", at: "Cap", fx: "block", note: "Capsid inhibitor, twice-yearly injection." },
      { d: "Tenofovir, emtricitabine, efavirenz", at: "RT", fx: "block", note: "NRTIs (chain terminators) and NNRTIs (allosteric)." },
      { d: "Bictegravir, dolutegravir, cabotegravir", at: "IN", fx: "block", note: "Integrase strand-transfer inhibitors." },
      { d: "Darunavir (boosted)", at: "PR", fx: "block", note: "Protease inhibitor → immature, non-infectious virions." }
    ],
    targets: { hivrt: "RT", hivin: "IN", hivpr: "PR" }
  },

  bacteria: {
    h: 470,
    scene: [
      { t: "label", x: 150, y: 14, text: "Outside" },
      { t: "membrane", y: 70 },
      { t: "label", x: 8, y: 102, text: "Bacterial cytoplasm" },
      { t: "nucleus", cx: 120, cy: 285, rx: 108, ry: 58, label: "Nucleoid" },
      { t: "label", x: 8, y: 400, text: "Resistance" }
    ],
    nodes: [
      ["Pep", "Peptidoglycan\ncross-links", 85, 22, "output", "The rigid cell wall. Without cross-links, bacteria lyse."],
      ["PBP", "PBP", 85, 70, "receptor", "Penicillin-binding proteins (transpeptidases)."],
      ["Outer", "Membranes\n(Gram − / +)", 270, 70, "channel"],
      ["PABA", "PABA", 40, 145, "messenger"],
      ["DHPS", "DHPS", 120, 145, "enzyme", "Dihydropteroate synthase. Humans lack it (we absorb folate)."],
      ["DHFRb", "DHFR", 205, 145, "enzyme", "Bacterial DHFR; trimethoprim binds it ~50,000× more tightly than human DHFR."],
      ["Fol", "Folate (THF)", 300, 145, "messenger"],
      ["Gyr", "Gyrase /\ntopo IV", 120, 285, "enzyme"],
      ["Ribo", "70S ribosome\n30S · 50S", 280, 250, "enzyme"],
      ["Prot", "Protein", 280, 325, "output"],
      ["Res", "β-lactamases · efflux · PBP2a · gyrA", 180, 435, "inhib"]
    ],
    edges: ["PBP>Pep", "PABA>DHPS", "DHPS>DHFRb", "DHFRb>Fol", "Fol~>Gyr", "Gyr~>Ribo", "Ribo>Prot"],
    steps: [["PBP", "Pep"], ["PABA", "DHPS", "DHFRb", "Fol"], ["Fol", "Gyr"], ["Gyr", "Ribo", "Prot"], ["Outer"], ["Res"]],
    drugs: [
      { d: "Penicillins, cephalosporins, carbapenems", at: "PBP", fx: "block", note: "β-lactams acylate PBPs." },
      { d: "Vancomycin", at: "Pep", fx: "block", note: "Binds D-Ala-D-Ala so PBPs can't cross-link." },
      { d: "Sulfamethoxazole", at: "DHPS", fx: "block", note: "PABA mimic." },
      { d: "Trimethoprim", at: "DHFRb", fx: "block", note: "Bacterial DHFR inhibitor (synergy with sulfa = co-trimoxazole)." },
      { d: "Ciprofloxacin, levofloxacin", at: "Gyr", fx: "block", note: "Fluoroquinolones trap gyrase / topo IV on cut DNA." },
      { d: "Gentamicin, doxycycline, azithromycin, linezolid", at: "Ribo", fx: "block", note: "30S (aminoglycosides, tetracyclines) and 50S (macrolides, oxazolidinones)." },
      { d: "Colistin, daptomycin", at: "Outer", fx: "block", note: "Membrane-active agents." }
    ],
    targets: { pbp: "PBP", ribosome: "Ribo", gyrase: "Gyr" }
  }
});
