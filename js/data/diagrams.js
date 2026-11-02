// Cell-diagram layouts for each pathway (viewBox width 360).
// nodes: [id, label ("\n" = new line), x, y, kind, info?]
//   kinds: ligand, receptor, channel, gprotein, enzyme, kinase, messenger, tf, inhib, output
// edges: "A>B" activates · "A-|B" inhibits · "A~>B" converts/moves · "A=>B" feedback (+) · "A=|B" feedback (−) · "A<>B" mutual
// steps: node ids lit at each step, index-aligned with the pathway's text steps in pathways.js
// drugs: { d: name, at: node id, fx: "block" | "stim", note }
// targets: target id → node id, used to highlight a target inside the pathway
// scene: membrane {t:"membrane", y, x1?, x2?} · {t:"box", x, y, w, h, label, kind?} · {t:"nucleus", cx, cy, rx, ry} · {t:"label", x, y, text}
window.FC_DIAGRAMS = {
  gs: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "label", x: 8, y: 127, text: "Cytoplasm" },
      { t: "nucleus", cx: 180, cy: 425, rx: 165, ry: 48 }
    ],
    nodes: [
      ["L", "Ligand", 70, 40, "ligand", "Adrenaline, noradrenaline, GLP-1, CGRP, histamine (H2), vasopressin (V2)…"],
      ["R", "Gs-GPCR", 70, 90, "receptor", "Seven-transmembrane receptor. Agonist binding shifts it into an active shape that acts as a GEF for Gαs."],
      ["G", "Gαs-GTP", 70, 160, "gprotein", "Active Gαs. Its intrinsic GTPase switches it off within seconds (cholera toxin blocks this → permanent activation)."],
      ["AC", "Adenylyl\ncyclase", 220, 90, "enzyme", "Membrane enzyme that converts ATP into the second messenger cAMP."],
      ["ATP", "ATP", 315, 140, "messenger"],
      ["cAMP", "cAMP", 220, 175, "messenger", "Second messenger: one receptor → many cAMP molecules (amplification)."],
      ["PDE", "PDE → AMP", 315, 215, "inhib", "Phosphodiesterases degrade cAMP and terminate the signal. PDE3 (heart), PDE4 (immune cells, airway)."],
      ["PKA", "PKA", 160, 245, "kinase", "Protein kinase A. cAMP binds its regulatory subunits and frees the catalytic subunits."],
      ["Epac", "Epac", 260, 260, "kinase", "cAMP-activated GEF for Rap1, important in β-cell insulin granule exocytosis."],
      ["GRK", "GRK +\nβ-arrestin", 140, 160, "inhib", "Phosphorylate the active receptor; β-arrestin uncouples it and drives internalisation (desensitisation)."],
      ["Heart", "Heart: Ca²⁺ channels,\nRyR2, phospholamban", 95, 325, "output"],
      ["SM", "Smooth muscle:\n⊣ MLCK → relax", 260, 325, "output"],
      ["CREB", "CREB → gene\ntranscription", 180, 425, "tf", "PKA enters the nucleus and phosphorylates CREB → long-term changes in gene expression."]
    ],
    edges: ["L>R", "R>G", "G>AC", "AC>cAMP", "ATP~>cAMP", "cAMP>PKA", "cAMP>Epac", "PKA>Heart", "PKA>SM", "PKA~>CREB", "PDE-|cAMP", "GRK-|R"],
    steps: [["L", "R"], ["R", "G"], ["G", "AC", "ATP", "cAMP"], ["cAMP", "PKA", "Epac"], ["PKA", "Heart", "SM", "CREB"], ["PDE", "cAMP", "GRK", "R"]],
    drugs: [
      { d: "Salbutamol, dobutamine, semaglutide", at: "R", fx: "stim", note: "Agonists at Gs-coupled receptors (β2, β1, GLP-1R) → ↑cAMP." },
      { d: "β-blockers (bisoprolol, propranolol)", at: "R", fx: "block", note: "Antagonists at β1/β2 → ↓cAMP in the heart and kidney." },
      { d: "Erenumab / gepants", at: "R", fx: "block", note: "Block the Gs-coupled CGRP receptor (migraine)." },
      { d: "Milrinone, roflumilast", at: "PDE", fx: "block", note: "PDE3 / PDE4 inhibitors stop cAMP breakdown → ↑cAMP (inotropy; anti-inflammatory in COPD)." }
    ],
    targets: { adrb2: "R", adrb1: "R", glp1r: "R", cgrp: "R" }
  },

  gq: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "box", x: 20, y: 250, w: 150, h: 80, label: "ER / SR", kind: "er" }
    ],
    nodes: [
      ["L", "Ligand", 70, 40, "ligand", "Angiotensin II, serotonin (5-HT2A), ACh (M3), histamine (H1), noradrenaline (α1)…"],
      ["R", "Gq-GPCR", 70, 90, "receptor"],
      ["G", "Gαq-GTP", 70, 160, "gprotein"],
      ["PLC", "PLCβ", 185, 135, "enzyme", "Phospholipase Cβ cleaves the membrane lipid PIP2 into two messengers."],
      ["PIP2", "PIP2", 290, 120, "messenger", "Phosphatidylinositol 4,5-bisphosphate, a membrane lipid."],
      ["IP3", "IP3", 230, 205, "messenger", "Water-soluble: diffuses to the ER/SR."],
      ["DAG", "DAG", 320, 175, "messenger", "Stays in the membrane and recruits PKC."],
      ["IP3R", "IP3R", 135, 250, "channel", "IP3-gated Ca²⁺ channel on the ER/SR membrane."],
      ["Ca", "Ca²⁺ ↑", 95, 300, "messenger"],
      ["PKC", "PKC", 305, 255, "kinase", "Protein kinase C, activated by DAG + Ca²⁺."],
      ["ROCK", "RhoA/ROCK\n⊣ MLCP", 285, 340, "kinase", "Inhibiting myosin light chain phosphatase keeps myosin phosphorylated: Ca²⁺ sensitisation."],
      ["CaM", "Ca²⁺–calmodulin\n→ MLCK", 110, 385, "kinase", "Ca²⁺–calmodulin activates myosin light chain kinase."],
      ["Out", "Smooth muscle\ncontraction", 200, 450, "output"]
    ],
    edges: ["L>R", "R>G", "G>PLC", "PLC>PIP2", "PIP2~>IP3", "PIP2~>DAG", "IP3>IP3R", "IP3R>Ca", "DAG>PKC", "Ca>PKC", "PKC>ROCK", "Ca>CaM", "CaM>Out", "ROCK>Out"],
    steps: [["L", "R"], ["R", "G", "PLC"], ["PLC", "PIP2", "IP3", "DAG"], ["IP3", "IP3R", "Ca"], ["DAG", "Ca", "PKC"], ["Ca", "CaM", "Out", "PKC", "ROCK"]],
    drugs: [
      { d: "ARBs (losartan)", at: "R", fx: "block", note: "Block AT1 → less vasoconstriction and aldosterone." },
      { d: "Antimuscarinics, α1-blockers, antihistamines", at: "R", fx: "block", note: "Block M3, α1 and H1 respectively." },
      { d: "Atypical antipsychotics, pimavanserin", at: "R", fx: "block", note: "5-HT2A antagonists / inverse agonists." },
      { d: "Fasudil", at: "ROCK", fx: "block", note: "ROCK inhibitor (used in Japan for cerebral vasospasm)." }
    ],
    targets: { at1r: "R", htr2a: "R" }
  },

  gi: {
    h: 440,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "label", x: 230, y: 135, text: "Neuron / platelet" }
    ],
    nodes: [
      ["L", "Ligand", 50, 40, "ligand", "Opioids, dopamine (D2), ADP (P2Y12), noradrenaline (α2), 5-HT (5-HT1)…"],
      ["R", "Gi-GPCR", 50, 90, "receptor"],
      ["Gi", "Gαi", 50, 165, "gprotein"],
      ["Gby", "Gβγ", 165, 165, "gprotein", "The released βγ dimer does much of the work in neurons: it opens GIRK and closes Ca²⁺ channels."],
      ["AC", "AC", 130, 90, "enzyme", "Adenylyl cyclase, inhibited by Gαi."],
      ["cAMP", "↓ cAMP / PKA", 105, 235, "messenger"],
      ["GIRK", "GIRK", 225, 90, "channel", "G-protein-gated inwardly rectifying K⁺ channel."],
      ["K", "K⁺ out →\nhyperpolarise", 225, 35, "output"],
      ["CaV", "N-type\nCa²⁺", 310, 90, "channel", "Presynaptic voltage-gated Ca²⁺ channel that triggers vesicle release."],
      ["Ves", "↓ Transmitter\nrelease", 300, 235, "output", "Less glutamate / substance P → less pain signalling."],
      ["Plt", "Platelet: ↓VASP-P\n→ GPIIb/IIIa active", 150, 315, "output"],
      ["PTX", "Pertussis toxin", 60, 390, "inhib", "ADP-ribosylates Gαi so it can't couple. A classic experimental tool."]
    ],
    edges: ["L>R", "R>Gi", "R>Gby", "Gi-|AC", "AC>cAMP", "Gby>GIRK", "GIRK>K", "Gby-|CaV", "CaV>Ves", "cAMP>Plt", "PTX-|Gi"],
    steps: [["L", "R", "Gi", "Gby"], ["Gi", "AC", "cAMP"], ["Gby", "GIRK", "K"], ["Gby", "CaV", "Ves"], ["cAMP", "Plt"], ["PTX", "Gi"]],
    drugs: [
      { d: "Morphine, fentanyl, clonidine, triptans", at: "R", fx: "stim", note: "Agonists at μ-opioid, α2 and 5-HT1B/1D receptors." },
      { d: "Naloxone", at: "R", fx: "block", note: "μ-opioid antagonist reverses overdose." },
      { d: "Clopidogrel, ticagrelor", at: "R", fx: "block", note: "P2Y12 antagonists keep platelet cAMP high → less aggregation." },
      { d: "Haloperidol, aripiprazole", at: "R", fx: "block", note: "D2 antagonist / partial agonist." }
    ],
    targets: { oprm1: "R", p2y12: "R", drd2: "R" }
  },

  mapk: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "nucleus", cx: 190, cy: 428, rx: 160, ry: 46 }
    ],
    nodes: [
      ["L", "Growth factor", 75, 35, "ligand", "EGF, TGF-α, PDGF, VEGF…"],
      ["RTK", "RTK\ndimer", 75, 90, "receptor", "Receptor tyrosine kinase. Ligand-induced dimerisation activates the kinase domains."],
      ["pY", "P-Tyr", 75, 155, "messenger", "Phosphotyrosines on the receptor tail act as docking sites for SH2-domain proteins."],
      ["GRB2", "GRB2", 75, 215, "enzyme", "Adaptor protein (SH2 + SH3)."],
      ["SOS", "SOS (GEF)", 160, 215, "enzyme", "Swaps GDP for GTP on RAS."],
      ["RAS", "RAS-GTP", 240, 130, "gprotein", "Membrane-anchored GTPase switch. Mutated (KRAS/NRAS) in ~30% of cancers."],
      ["NF1", "NF1 (GAP)", 320, 175, "inhib", "GTPase-activating protein: accelerates GTP hydrolysis to switch RAS off."],
      ["RAF", "RAF", 250, 215, "kinase", "BRAF/CRAF. V600E BRAF is constitutively active."],
      ["MEK", "MEK1/2", 250, 275, "kinase"],
      ["ERK", "ERK1/2", 250, 335, "kinase"],
      ["DUSP", "DUSP /\nSprouty", 90, 315, "inhib", "Negative feedback proteins induced by ERK."],
      ["TF", "FOS · MYC · ELK1", 190, 410, "tf"],
      ["Out", "Cyclin D → proliferation", 190, 450, "output"]
    ],
    edges: ["L>RTK", "RTK>pY", "pY>GRB2", "GRB2>SOS", "SOS>RAS", "NF1-|RAS", "RAS>RAF", "RAF>MEK", "MEK>ERK", "ERK~>TF", "TF>Out", "ERK=|SOS", "ERK>DUSP", "DUSP-|ERK"],
    steps: [["L", "RTK"], ["RTK", "pY"], ["pY", "GRB2", "SOS"], ["SOS", "RAS", "NF1"], ["RAS", "RAF", "MEK"], ["MEK", "ERK", "TF", "Out"], ["ERK", "SOS", "DUSP"]],
    drugs: [
      { d: "Osimertinib, cetuximab, trastuzumab", at: "RTK", fx: "block", note: "EGFR TKI / anti-EGFR antibody / anti-HER2 antibody." },
      { d: "Sotorasib, adagrasib", at: "RAS", fx: "block", note: "Covalently lock KRAS G12C in the inactive GDP state." },
      { d: "Dabrafenib, encorafenib", at: "RAF", fx: "block", note: "BRAF V600 inhibitors (paradoxical activation in wild-type cells)." },
      { d: "Trametinib, binimetinib", at: "MEK", fx: "block", note: "Allosteric MEK inhibitors, combined with BRAF inhibitors." },
      { d: "Palbociclib (downstream)", at: "Out", fx: "block", note: "CDK4/6 inhibitors block the cyclin D output." }
    ],
    targets: { egfr: "RTK", her2: "RTK", vegf: "RTK", kras: "RAS", braf: "RAF", bcrabl: "GRB2", cdk46: "Out" }
  },

  pi3k: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 }
    ],
    nodes: [
      ["L", "Insulin / GF", 60, 35, "ligand"],
      ["RTK", "RTK /\nInsulin R", 60, 90, "receptor"],
      ["IRS", "IRS1", 60, 160, "enzyme", "Insulin receptor substrate, the docking platform for PI3K."],
      ["PI3K", "PI3K", 145, 140, "kinase", "p85 regulatory + p110 catalytic (α, β, δ, γ). PIK3CA (p110α) is mutated in ~40% of HR+ breast cancers."],
      ["PIP3", "PIP2 → PIP3", 235, 120, "messenger", "PIP3 at the membrane recruits PH-domain proteins (AKT, PDK1)."],
      ["PTEN", "PTEN", 325, 160, "inhib", "Lipid phosphatase that reverses PI3K. A major tumour suppressor."],
      ["PDK1", "PDK1", 120, 225, "kinase", "Phosphorylates AKT T308."],
      ["AKT", "AKT", 210, 225, "kinase", "Central survival and metabolism kinase."],
      ["mTORC2", "mTORC2", 305, 235, "kinase", "Phosphorylates AKT S473."],
      ["GLUT4", "GLUT4", 318, 90, "channel", "Insulin → AKT → GLUT4 vesicles fuse with the membrane → glucose uptake."],
      ["TSC", "TSC1/2", 110, 300, "inhib", "GAP for RHEB. AKT phosphorylation inhibits it."],
      ["RHEB", "RHEB-GTP", 110, 360, "gprotein"],
      ["mTORC1", "mTORC1", 210, 360, "kinase", "Growth controller that senses nutrients, energy and growth factors."],
      ["Growth", "S6K · 4E-BP1 →\nprotein synthesis", 210, 430, "output"],
      ["FOXO", "⊣ FOXO, BAD\n(survival)", 305, 310, "output"]
    ],
    edges: ["L>RTK", "RTK>IRS", "IRS>PI3K", "PI3K>PIP3", "PTEN-|PIP3", "PIP3>AKT", "PIP3>PDK1", "PDK1>AKT", "mTORC2>AKT", "AKT-|TSC", "TSC-|RHEB", "RHEB>mTORC1", "mTORC1>Growth", "AKT>FOXO", "AKT>GLUT4"],
    steps: [["L", "RTK", "IRS", "PI3K"], ["PI3K", "PIP3", "PTEN"], ["PIP3", "AKT", "PDK1"], ["PDK1", "mTORC2", "AKT"], ["AKT", "TSC", "RHEB", "mTORC1", "Growth"], ["AKT", "FOXO", "GLUT4"]],
    drugs: [
      { d: "Alpelisib", at: "PI3K", fx: "block", note: "PI3Kα inhibitor for PIK3CA-mutant breast cancer (on-target hyperglycaemia)." },
      { d: "Idelalisib", at: "PI3K", fx: "block", note: "PI3Kδ inhibitor (B-cell malignancies)." },
      { d: "Capivasertib", at: "AKT", fx: "block", note: "AKT inhibitor (breast cancer)." },
      { d: "Everolimus, sirolimus", at: "mTORC1", fx: "block", note: "Allosteric mTORC1 inhibitors via FKBP12." }
    ],
    targets: {}
  },

  jakstat: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "nucleus", cx: 190, cy: 430, rx: 160, ry: 44 }
    ],
    nodes: [
      ["Cyt", "Cytokine", 180, 35, "ligand", "IL-6, IFN, IL-2/4/7/15/21, IL-23, EPO, TPO, GH…"],
      ["R1", "Receptor\nchain α", 130, 90, "receptor", "Cytokine receptors have no kinase domain of their own."],
      ["R2", "Receptor\nchain β", 230, 90, "receptor"],
      ["JAK1", "JAK", 100, 160, "kinase", "Janus kinase, constitutively bound to the receptor's box1/box2 motifs."],
      ["JAK2", "JAK", 260, 160, "kinase"],
      ["STAT", "STAT", 180, 215, "tf", "Signal Transducer and Activator of Transcription. Docks via SH2 onto phospho-receptor."],
      ["STATd", "pSTAT dimer", 180, 290, "tf"],
      ["SOCS", "SOCS", 315, 245, "inhib", "Suppressor of cytokine signalling, induced by STATs. Classic negative feedback."],
      ["Pairs", "γc: JAK1+JAK3\ngp130: JAK1/2/TYK2\nEPO/TPO: JAK2+JAK2\nIL-23: JAK2+TYK2", 65, 300, "output"],
      ["Gene", "Target genes", 190, 430, "output"]
    ],
    edges: ["Cyt>R1", "Cyt>R2", "JAK1<>JAK2", "JAK1>R1", "JAK2>R2", "JAK1>STAT", "STAT>STATd", "STATd~>Gene", "Gene=>SOCS", "SOCS-|JAK2"],
    steps: [["Cyt", "R1", "R2"], ["JAK1", "JAK2"], ["JAK1", "JAK2", "R1", "R2"], ["JAK1", "STAT"], ["STAT", "STATd", "Gene"], ["Gene", "SOCS", "JAK2"], ["Pairs", "JAK1", "JAK2"]],
    drugs: [
      { d: "Tocilizumab, dupilumab", at: "R1", fx: "block", note: "Antibodies against the receptor chain (IL-6R, IL-4Rα)." },
      { d: "Tofacitinib, upadacitinib, baricitinib", at: "JAK1", fx: "block", note: "ATP-competitive JAK inhibitors." },
      { d: "Ruxolitinib", at: "JAK2", fx: "block", note: "JAK1/2 inhibitor (myelofibrosis, JAK2 V617F)." },
      { d: "Deucravacitinib", at: "JAK2", fx: "block", note: "Allosteric TYK2 inhibitor (psoriasis)." }
    ],
    targets: { jak: "JAK1", il6r: "R1", il4ra: "R1", il23: "Cyt" }
  },

  nfkb: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "nucleus", cx: 190, cy: 432, rx: 165, ry: 42 }
    ],
    nodes: [
      ["TNF", "TNF", 75, 35, "ligand"],
      ["IL1", "IL-1β / TLR ligand", 265, 35, "ligand"],
      ["TNFR", "TNFR1", 75, 90, "receptor"],
      ["IL1R", "IL-1R /\nTLR", 265, 90, "receptor"],
      ["TRADD", "TRADD·TRAF2\n·RIPK1", 75, 160, "enzyme", "TNFR1 adaptor complex. Can also switch to cell death (caspase-8 or necroptosis)."],
      ["MyD88", "MyD88·IRAK4\n·TRAF6", 265, 160, "enzyme", "The 'Myddosome'. Shared by IL-1R and most TLRs."],
      ["Ub", "Ubiquitin scaffold", 170, 215, "messenger", "K63-linked and linear (LUBAC) chains act as a platform, not a degradation tag."],
      ["TAK1", "TAK1", 90, 265, "kinase"],
      ["IKK", "IKK α/β/NEMO", 245, 265, "kinase"],
      ["IkB", "IκBα · p65/p50", 170, 320, "tf", "IκBα holds NF-κB in the cytoplasm."],
      ["Prot", "Proteasome", 305, 330, "enzyme", "Degrades phosphorylated, ubiquitinated IκBα."],
      ["A20", "A20, IκBα\n(brakes)", 322, 212, "inhib", "NF-κB-induced negative feedback."],
      ["NFkB", "NF-κB", 170, 375, "tf"],
      ["Genes", "TNF · IL-1β · IL-6 · COX-2 · ICAM", 190, 437, "output"]
    ],
    edges: ["TNF>TNFR", "IL1>IL1R", "TNFR>TRADD", "IL1R>MyD88", "TRADD>Ub", "MyD88>Ub", "Ub>TAK1", "Ub>IKK", "TAK1>IKK", "IKK>IkB", "IkB~>Prot", "IkB~>NFkB", "NFkB~>Genes", "Genes>A20", "A20-|IKK", "Genes=>TNF"],
    steps: [["TNF", "TNFR", "TRADD", "IL1", "IL1R", "MyD88"], ["TRADD", "MyD88", "Ub", "TAK1", "IKK"], ["IKK", "IkB"], ["IkB", "Prot"], ["IkB", "NFkB"], ["NFkB", "Genes", "A20", "IKK", "TNF"]],
    drugs: [
      { d: "Adalimumab, infliximab, etanercept", at: "TNF", fx: "block", note: "Neutralise TNF." },
      { d: "Anakinra, canakinumab", at: "IL1", fx: "block", note: "IL-1 receptor antagonist / anti-IL-1β antibody." },
      { d: "Bortezomib", at: "Prot", fx: "block", note: "Proteasome inhibition stabilises IκBα → less NF-κB (plus ER stress)." },
      { d: "Glucocorticoids", at: "NFkB", fx: "block", note: "GR tethers to NF-κB (transrepression) and induces IκBα." }
    ],
    targets: { tnf: "TNF", il1b: "IL1", proteasome: "Prot", gr: "NFkB", cox: "Genes" }
  },

  nuclear: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "Extracellular" },
      { t: "membrane", y: 90 },
      { t: "nucleus", cx: 185, cy: 410, rx: 170, ry: 62 }
    ],
    nodes: [
      ["Lig", "Lipophilic hormone", 95, 35, "ligand", "Steroids (cortisol, estradiol, testosterone, aldosterone), thyroid hormone, retinoids, fatty acids."],
      ["NRH", "Receptor · HSP90", 95, 165, "tf", "Type I (steroid) receptors wait in the cytoplasm, held by the chaperone HSP90."],
      ["HSP", "HSP90", 235, 165, "messenger"],
      ["NR", "Active receptor", 95, 235, "tf"],
      ["Dimer", "Receptor dimer", 70, 300, "tf"],
      ["RXR", "PPAR/TR–RXR\n+ co-repressor", 270, 380, "tf", "Type II receptors sit on DNA with RXR and are kept silent by co-repressors until ligand arrives."],
      ["Coact", "Co-activators\n(SRC, p300)", 175, 302, "enzyme", "Histone acetyltransferases recruited when helix 12 folds over the bound agonist."],
      ["HRE", "Hormone response\nelement (DNA)", 95, 400, "output"],
      ["Txn", "Transcription\n(hours–days)", 225, 445, "output"]
    ],
    edges: ["Lig~>NRH", "NRH~>HSP", "NRH>NR", "NR>Dimer", "Lig~>RXR", "Coact>HRE", "Coact>RXR", "Dimer~>HRE", "HRE>Txn", "RXR>Txn"],
    steps: [["Lig", "NRH"], ["NRH", "HSP", "NR", "Dimer"], ["RXR", "Lig"], ["Coact", "HRE", "RXR"], ["Dimer", "HRE", "Txn", "RXR"], ["Txn"]],
    drugs: [
      { d: "Prednisolone, dexamethasone", at: "NRH", fx: "stim", note: "GR agonists." },
      { d: "Tamoxifen, enzalutamide, spironolactone", at: "NRH", fx: "block", note: "Antagonists / SERMs at ER, AR, MR." },
      { d: "Fulvestrant", at: "NR", fx: "block", note: "SERD: pure antagonist that triggers receptor degradation." },
      { d: "Pioglitazone", at: "RXR", fx: "stim", note: "PPARγ agonist (type II receptor)." }
    ],
    targets: { gr: "NRH", er: "NRH", ar: "NRH", pparg: "RXR", aromatase: "Lig" }
  },

  raas: {
    h: 490,
    scene: [
      { t: "box", x: 10, y: 15, w: 140, h: 70, label: "Liver", kind: "organ" },
      { t: "box", x: 200, y: 15, w: 150, h: 90, label: "Kidney (JG cells)", kind: "organ" },
      { t: "box", x: 10, y: 190, w: 150, h: 65, label: "Lung endothelium", kind: "organ" },
      { t: "box", x: 10, y: 355, w: 150, h: 65, label: "Adrenal cortex", kind: "organ" },
      { t: "box", x: 190, y: 405, w: 160, h: 75, label: "Collecting duct", kind: "organ" },
      { t: "label", x: 175, y: 175, text: "Blood" }
    ],
    nodes: [
      ["Agt", "Angiotensinogen", 80, 55, "ligand"],
      ["Trig", "↓BP · ↓NaCl · β1", 275, 45, "output", "Low renal perfusion, low NaCl at the macula densa, or sympathetic β1 stimulation."],
      ["Renin", "Renin", 275, 85, "enzyme"],
      ["AngI", "Ang I", 80, 150, "ligand"],
      ["ACE", "ACE", 80, 230, "enzyme", "Also inactivates bradykinin (kininase II)."],
      ["Brady", "Bradykinin\n→ inactive", 255, 225, "messenger", "Builds up with ACE inhibitors → cough and angioedema."],
      ["AngII", "Ang II", 80, 300, "ligand"],
      ["AT1", "AT1\nreceptor", 185, 320, "receptor"],
      ["Vaso", "Vasoconstriction\nefferent arteriole ↑", 290, 300, "output"],
      ["Thirst", "Thirst · ADH\nfibrosis", 290, 360, "output"],
      ["Aldo", "Aldosterone", 80, 395, "ligand"],
      ["MR", "MR → ENaC\nNa⁺ in · K⁺ out", 270, 450, "tf"]
    ],
    edges: ["Trig>Renin", "Agt~>AngI", "Renin>AngI", "AngI~>ACE", "ACE>AngII", "ACE-|Brady", "AngII>AT1", "AT1>Vaso", "AT1>Thirst", "AT1>Aldo", "Aldo>MR"],
    steps: [["Trig"], ["Trig", "Renin"], ["Renin", "Agt", "AngI"], ["AngI", "ACE", "AngII", "Brady"], ["AngII", "AT1", "Vaso", "Thirst"], ["AT1", "Aldo", "MR"]],
    drugs: [
      { d: "β-blockers", at: "Renin", fx: "block", note: "Block β1 on JG cells → less renin release." },
      { d: "Aliskiren", at: "Renin", fx: "block", note: "Direct renin inhibitor." },
      { d: "Ramipril, lisinopril", at: "ACE", fx: "block", note: "ACE inhibitors: ↓Ang II and ↑bradykinin." },
      { d: "Losartan, valsartan", at: "AT1", fx: "block", note: "ARBs block Ang II at AT1." },
      { d: "Spironolactone, finerenone", at: "MR", fx: "block", note: "Mineralocorticoid receptor antagonists." }
    ],
    targets: { ace: "ACE", at1r: "AT1", adrb1: "Renin", nkcc2: "Trig" }
  },

  coag: {
    h: 490,
    scene: [
      { t: "box", x: 10, y: 4, w: 160, h: 82, label: "Injured vessel wall", kind: "organ" },
      { t: "label", x: 200, y: 110, text: "Plasma" },
      { t: "box", x: 10, y: 320, w: 340, h: 80, label: "Activated platelet surface (phospholipid)", kind: "er" }
    ],
    nodes: [
      ["TF", "Tissue factor\n+ FVIIa", 90, 56, "receptor", "Exposed when the vessel wall is damaged. The physiological trigger of coagulation."],
      ["AT", "Antithrombin\n(+ heparin)", 280, 50, "inhib", "Natural serine-protease inhibitor of thrombin and FXa. Heparin accelerates it ~1000-fold."],
      ["FX", "FXa", 55, 135, "enzyme", "Factor Xa: the convergence point of the coagulation cascade."],
      ["FIX", "FIXa", 178, 135, "enzyme"],
      ["ProtC", "Protein C / S", 285, 150, "inhib", "Activated protein C (with protein S) inactivates FVa and FVIIIa."],
      ["Thr1", "Thrombin (trace)", 90, 200, "enzyme"],
      ["Plt", "Platelet\nactivation", 70, 270, "output"],
      ["FV", "FVa · FVIIIa · FXIa", 245, 245, "messenger", "Cofactors and FXI activated by the first trace of thrombin (amplification)."],
      ["Ten", "Tenase\nFIXa + FVIIIa", 95, 365, "enzyme"],
      ["Pro", "Prothrombinase\nFXa + FVa", 255, 365, "enzyme"],
      ["Thr2", "Thrombin burst", 255, 445, "enzyme"],
      ["Fib", "Fibrinogen → fibrin\n(FXIIIa cross-links)", 90, 450, "output"]
    ],
    edges: ["TF>FX", "TF>FIX", "FX>Thr1", "Thr1>Plt", "Thr1>FV", "FIX>Ten", "FV>Ten", "FV>Pro", "Ten>Pro", "Pro>Thr2", "Thr2>Fib", "Thr2=>FV", "AT-|FX", "ProtC-|FV"],
    steps: [["TF", "FX", "FIX", "Thr1"], ["Thr1", "Plt", "FV"], ["FIX", "FV", "Ten"], ["Ten", "FV", "Pro", "Thr2"], ["Thr2", "Fib"], ["AT", "ProtC", "Thr2", "FX", "FV"]],
    drugs: [
      { d: "Heparin, enoxaparin", at: "AT", fx: "stim", note: "Boost antithrombin's inhibition of thrombin / FXa." },
      { d: "Apixaban, rivaroxaban", at: "FX", fx: "block", note: "Direct FXa inhibitors (free and in prothrombinase)." },
      { d: "Warfarin", at: "FX", fx: "block", note: "VKORC1 inhibition → under-carboxylated II, VII, IX, X (plus protein C/S)." },
      { d: "Dabigatran", at: "Thr2", fx: "block", note: "Direct thrombin inhibitor." },
      { d: "Abelacimab, milvexian (trials)", at: "FV", fx: "block", note: "FXI/FXIa inhibitors block thrombin-driven amplification." },
      { d: "Aspirin, clopidogrel", at: "Plt", fx: "block", note: "Antiplatelets block TXA2 and P2Y12 amplification loops." }
    ],
    targets: { fxa: "FX", vkorc1: "FX", p2y12: "Plt" }
  },

  tcell: {
    h: 480,
    scene: [
      { t: "label", x: 8, y: 14, text: "APC (dendritic cell)" },
      { t: "membrane", y: 85 },
      { t: "label", x: 92, y: 133, text: "Immune synapse" },
      { t: "membrane", y: 175 },
      { t: "label", x: 8, y: 217, text: "T cell" },
      { t: "nucleus", cx: 185, cy: 435, rx: 165, ry: 38 }
    ],
    nodes: [
      ["MHC", "peptide–\nMHC", 60, 85, "receptor", "Signal 1: antigen presented on MHC."],
      ["B7", "B7\nCD80/86", 175, 85, "receptor", "Co-stimulatory ligands, upregulated when innate danger signals activate the APC."],
      ["PDL1", "PD-L1", 300, 85, "receptor", "Induced by IFN-γ on tumour cells and APCs."],
      ["TCR", "TCR/\nCD3", 60, 175, "receptor"],
      ["CD28", "CD28", 145, 175, "receptor", "Signal 2: co-stimulation."],
      ["CTLA4", "CTLA-4", 220, 175, "receptor", "Brake during priming: out-competes CD28 for B7 and strips B7 off APCs."],
      ["PD1", "PD-1", 300, 175, "receptor", "Brake in tissues: recruits SHP2."],
      ["LCK", "LCK → ZAP-70", 70, 245, "kinase"],
      ["AKT", "PI3K–AKT", 175, 245, "kinase"],
      ["SHP2", "SHP2", 300, 245, "inhib", "Phosphatase that dephosphorylates CD28 and TCR signalling proteins."],
      ["PLC", "LAT → PLCγ1", 70, 300, "enzyme"],
      ["Cyt", "Signal 3: cytokines\n(IL-12 · IL-4 · IL-6/23)", 270, 320, "ligand", "Determine the T-helper fate: Th1, Th2, Th17…"],
      ["NFAT", "Ca²⁺ →\nNFAT", 55, 365, "tf", "Calcineurin dephosphorylates NFAT so it can enter the nucleus."],
      ["NFKB", "NF-κB · AP-1", 160, 370, "tf"],
      ["IL2", "IL-2 · proliferation · effector fate", 185, 440, "output"]
    ],
    edges: ["MHC>TCR", "TCR>LCK", "LCK>PLC", "PLC>NFAT", "PLC>NFKB", "NFAT~>IL2", "NFKB~>IL2", "B7>CD28", "CD28>AKT", "AKT>IL2", "Cyt>IL2", "CTLA4-|B7", "PDL1>PD1", "PD1>SHP2", "SHP2-|CD28"],
    steps: [["MHC", "TCR", "LCK", "PLC"], ["PLC", "NFAT", "NFKB", "IL2"], ["B7", "CD28", "AKT", "IL2"], ["Cyt", "IL2"], ["CTLA4", "B7", "CD28"], ["PDL1", "PD1", "SHP2", "CD28", "LCK"]],
    drugs: [
      { d: "Tacrolimus, ciclosporin", at: "NFAT", fx: "block", note: "Calcineurin inhibitors stop NFAT activation (transplant)." },
      { d: "Abatacept", at: "B7", fx: "block", note: "CTLA-4–Ig coats B7, so there's no CD28 co-stimulation (RA)." },
      { d: "Ipilimumab", at: "CTLA4", fx: "block", note: "Releases the priming brake (cancer)." },
      { d: "Pembrolizumab, nivolumab", at: "PD1", fx: "block", note: "Anti-PD-1 reinvigorates exhausted T cells." },
      { d: "Atezolizumab, durvalumab", at: "PDL1", fx: "block", note: "Anti-PD-L1." }
    ],
    targets: { pd1: "PD1", ctla4: "CTLA4" }
  },

  th17: {
    h: 480,
    scene: [
      { t: "box", x: 10, y: 50, w: 170, h: 70, label: "Dendritic cell", kind: "organ" },
      { t: "box", x: 10, y: 150, w: 340, h: 105, label: "CD4 T cell", kind: "organ" },
      { t: "box", x: 10, y: 320, w: 340, h: 90, label: "Keratinocyte / epithelium", kind: "organ" }
    ],
    nodes: [
      ["Mic", "Microbes / damage", 95, 25, "ligand"],
      ["IL23", "IL-23\n(p19 + p40)", 95, 90, "ligand", "IL-23 shares p40 with IL-12."],
      ["IL6", "IL-1β · IL-6 · TGF-β", 270, 100, "ligand"],
      ["Naive", "Naive CD4", 70, 190, "output"],
      ["Th17", "RORγt⁺ Th17", 270, 190, "tf"],
      ["IL23R", "IL-23R → JAK2/TYK2 → STAT3", 175, 235, "kinase"],
      ["Cyt", "IL-17A/F · IL-22 · GM-CSF", 180, 290, "ligand"],
      ["Act1", "IL-17R → Act1\n→ NF-κB", 85, 365, "kinase"],
      ["Out", "CXCL1/8 · AMPs\nhyperproliferation", 255, 365, "output"],
      ["Neut", "Neutrophil influx\n(psoriatic plaque)", 255, 450, "output"]
    ],
    edges: ["Mic>IL23", "Mic>IL6", "IL6>Th17", "Naive>Th17", "IL23>IL23R", "IL23R>Th17", "Th17>Cyt", "Cyt>Act1", "Act1>Out", "Out>Neut", "Out=>IL23"],
    steps: [["Mic", "IL23", "IL6"], ["IL6", "Naive", "Th17"], ["IL23", "IL23R", "Th17"], ["Th17", "Cyt"], ["Cyt", "Act1", "Out", "Neut"], ["Out", "IL23"]],
    drugs: [
      { d: "Risankizumab, guselkumab (p19); ustekinumab (p40)", at: "IL23", fx: "block", note: "Anti-IL-23: upstream, durable, safe in IBD." },
      { d: "Deucravacitinib", at: "IL23R", fx: "block", note: "Oral allosteric TYK2 inhibitor." },
      { d: "Secukinumab, ixekizumab, bimekizumab", at: "Cyt", fx: "block", note: "Anti-IL-17: fast and potent, but candida and IBD risk." }
    ],
    targets: { il23: "IL23", il17a: "Cyt" }
  },

  incretin: {
    h: 480,
    scene: [
      { t: "box", x: 10, y: 10, w: 340, h: 85, label: "Gut", kind: "organ" },
      { t: "label", x: 175, y: 125, text: "Blood" },
      { t: "box", x: 10, y: 195, w: 340, h: 115, label: "Pancreatic islet", kind: "organ" },
      { t: "box", x: 10, y: 340, w: 165, h: 70, label: "Hypothalamus / hindbrain", kind: "organ" },
      { t: "box", x: 185, y: 340, w: 165, h: 70, label: "Stomach", kind: "organ" }
    ],
    nodes: [
      ["Food", "Nutrients", 60, 55, "ligand"],
      ["L", "L-cell → GLP-1", 175, 50, "enzyme", "Enteroendocrine cells of the ileum and colon."],
      ["K", "K-cell → GIP", 285, 72, "enzyme", "Enteroendocrine cells of the duodenum."],
      ["Inc", "GLP-1 / GIP", 175, 150, "ligand"],
      ["DPP4", "DPP-4\n(t½ ~2 min)", 300, 150, "inhib"],
      ["R", "GLP-1R\n/ GIPR", 40, 245, "receptor", "Gs-coupled on β-cells."],
      ["cAMP", "cAMP", 175, 240, "messenger"],
      ["Ins", "Insulin ↑\n(glucose-dep.)", 190, 290, "output"],
      ["Gcg", "Glucagon ↓", 300, 250, "output"],
      ["Sat", "Satiety ↑", 60, 380, "output"],
      ["GE", "Gastric\nemptying ↓", 300, 380, "output"],
      ["Eff", "Incretin effect: oral glucose ≫ IV glucose", 180, 450, "output", "The same blood glucose gives far more insulin when glucose is taken orally. This is blunted in T2D."]
    ],
    edges: ["Food>L", "Food>K", "L>Inc", "K>Inc", "DPP4-|Inc", "Inc>R", "R>cAMP", "cAMP>Ins", "Inc-|Gcg", "Inc>Sat", "Inc>GE"],
    steps: [["Food", "L", "K", "Inc"], ["Inc", "R", "cAMP", "Ins"], ["Inc", "Gcg", "Sat", "GE"], ["DPP4", "Inc"], ["Eff", "Ins"], ["Eff"]],
    drugs: [
      { d: "Semaglutide, liraglutide, tirzepatide", at: "R", fx: "stim", note: "DPP-4-resistant agonists at pharmacological levels → also central satiety." },
      { d: "Sitagliptin, linagliptin", at: "DPP4", fx: "block", note: "DPP-4 inhibitors raise endogenous GLP-1/GIP 2–3 fold." }
    ],
    targets: { glp1r: "R", dpp4: "DPP4" }
  },

  synapse: {
    h: 440,
    scene: [
      { t: "label", x: 8, y: 14, text: "Presynaptic terminal" },
      { t: "membrane", y: 190 },
      { t: "label", x: 8, y: 238, text: "Synaptic cleft" },
      { t: "membrane", y: 285 },
      { t: "label", x: 8, y: 330, text: "Postsynaptic neuron" }
    ],
    nodes: [
      ["AP", "Action potential\n(Nav channels)", 75, 40, "output", "Voltage-gated Na⁺ channels propagate the spike into the terminal."],
      ["Ves", "Vesicles\n(SNARE fusion)", 185, 110, "enzyme", "Ca²⁺ triggers SNARE-mediated fusion. Botulinum toxin cleaves SNAREs."],
      ["CaV", "CaV\nCa²⁺", 60, 190, "channel"],
      ["Reup", "SERT/\nNET/DAT", 215, 190, "channel", "Reuptake transporters: the main way monoamine signals are terminated."],
      ["Auto", "Auto-\nreceptor", 305, 190, "receptor", "Presynaptic inhibitory GPCRs (5-HT1A, α2, D2) give negative feedback."],
      ["NT", "Neurotransmitter", 175, 240, "ligand"],
      ["Deg", "AChE · MAO", 300, 240, "inhib", "Enzymatic breakdown. AChE in the cleft; MAO/COMT intracellular."],
      ["Iono", "Ionotropic\nGABA-A, nAChR", 95, 285, "channel"],
      ["Meta", "GPCR", 265, 285, "receptor"],
      ["Fast", "Fast (ms):\nion flux", 95, 380, "output"],
      ["Slow", "Slow: second\nmessengers", 265, 380, "output"]
    ],
    edges: ["AP>CaV", "CaV>Ves", "Ves~>NT", "NT>Iono", "NT>Meta", "Iono>Fast", "Meta>Slow", "NT>Auto", "Auto=|Ves", "Reup-|NT", "Deg-|NT"],
    steps: [["AP", "CaV"], ["CaV", "Ves", "NT"], ["NT", "Iono", "Meta", "Fast", "Slow"], ["NT", "Auto", "Ves"], ["Reup", "Deg", "NT"]],
    drugs: [
      { d: "Gabapentin, pregabalin", at: "CaV", fx: "block", note: "Bind the α2δ subunit → less Ca²⁺ channel trafficking and release." },
      { d: "Botulinum toxin", at: "Ves", fx: "block", note: "Cleaves SNARE proteins, so vesicles can't fuse." },
      { d: "SSRIs, SNRIs, cocaine", at: "Reup", fx: "block", note: "Block reuptake → more transmitter in the cleft." },
      { d: "Donepezil, neostigmine, MAOIs", at: "Deg", fx: "block", note: "Block breakdown." },
      { d: "Benzodiazepines", at: "Iono", fx: "stim", note: "GABA-A positive allosteric modulators." },
      { d: "Antipsychotics, opioids", at: "Meta", fx: "block", note: "Act at postsynaptic GPCRs (antagonist / agonist)." }
    ],
    targets: { sert: "Reup", ache: "Deg", gabaa: "Iono", nav: "AP", drd2: "Meta", htr2a: "Meta" }
  },

  ecc: {
    h: 470,
    scene: [
      { t: "label", x: 8, y: 14, text: "Cardiomyocyte" },
      { t: "label", x: 250, y: 14, text: "Smooth muscle" },
      { t: "membrane", y: 90 },
      { t: "box", x: 15, y: 175, w: 165, h: 70, label: "SR", kind: "er" }
    ],
    nodes: [
      ["Nav", "Nav", 25, 90, "channel", "Fast Na⁺ current: depolarises the myocyte."],
      ["Cav", "Cav1.2", 80, 90, "channel", "L-type Ca²⁺ channel (cardiac)."],
      ["NCX", "NCX", 135, 90, "channel", "Na⁺/Ca²⁺ exchanger: removes Ca²⁺ using the Na⁺ gradient."],
      ["NaK", "Na⁺/K⁺\nATPase", 195, 90, "channel", "Keeps intracellular Na⁺ low, which powers NCX."],
      ["Cav2", "Cav1.2", 300, 90, "channel", "L-type Ca²⁺ channel (vascular). The dihydropyridine target."],
      ["Ca1", "Ca²⁺ trigger", 80, 150, "messenger"],
      ["RyR", "RyR2", 60, 195, "channel", "Ca²⁺-induced Ca²⁺ release from the SR."],
      ["SERCA", "SERCA\n(PLB)", 140, 225, "enzyme", "Pumps Ca²⁺ back into the SR. Phospholamban inhibits it until PKA phosphorylates it."],
      ["Ca2", "Ca²⁺ ↑↑", 70, 290, "messenger"],
      ["TnC", "Troponin C →\ncontraction", 80, 360, "output"],
      ["CaM", "Ca²⁺–CaM\n→ MLCK", 290, 165, "kinase"],
      ["MLCP", "MLCP", 320, 235, "enzyme", "Myosin light chain phosphatase: relaxes smooth muscle."],
      ["Con", "Vascular\ncontraction", 255, 300, "output"],
      ["NO", "NO → sGC → cGMP", 265, 380, "messenger", "Nitrates donate NO. PDE5 normally degrades cGMP."],
      ["PKG", "PKG", 265, 440, "kinase"]
    ],
    edges: ["Nav>Cav", "Cav>Ca1", "Ca1>RyR", "RyR>Ca2", "Ca2>TnC", "SERCA-|Ca2", "NCX-|Ca2", "NaK>NCX", "Cav2>CaM", "CaM>Con", "MLCP-|Con", "NO>PKG", "PKG>MLCP"],
    steps: [["Nav", "Cav", "Cav2"], ["Cav", "Ca1", "Cav2"], ["Ca1", "RyR", "Ca2", "TnC"], ["SERCA", "NCX", "NaK", "Ca2"], ["Cav2", "CaM", "Con", "MLCP"], ["NO", "PKG", "MLCP", "Con"]],
    drugs: [
      { d: "Verapamil, diltiazem", at: "Cav", fx: "block", note: "Non-DHP: cardiac and nodal Ca²⁺ channel block." },
      { d: "Amlodipine, nifedipine", at: "Cav2", fx: "block", note: "DHP: vascular-selective Ca²⁺ channel block." },
      { d: "Digoxin", at: "NaK", fx: "block", note: "↑Na⁺ → less NCX Ca²⁺ extrusion → more SR Ca²⁺ → stronger contraction." },
      { d: "Lidocaine, flecainide", at: "Nav", fx: "block", note: "Class I antiarrhythmics." },
      { d: "Nitrates, sildenafil", at: "NO", fx: "stim", note: "NO donors ↑cGMP; PDE5 inhibitors stop cGMP breakdown." }
    ],
    targets: { cav12: "Cav2", pde5: "NO", nav: "Nav" }
  }
};
