// 17 additional drug targets: neuro & psychiatry, reproductive & urology, musculoskeletal & bone.
// Same schema as targets.js. Loaded after targets.js and appended to window.FC_TARGETS.
window.FC_TARGETS.push(
  // ───────────── Neuro & psychiatry ─────────────
  {
    id: "nmda", name: "NMDA receptor", short: "NMDAR", gene: "GRIN1 / GRIN2A–D",
    family: "Ligand-gated ion channel (glutamate, cation)", area: "Neuro & psychiatry",
    location: "Postsynaptic membrane of excitatory synapses throughout the CNS, especially hippocampus and cortex; also on GABAergic interneurons",
    role: "Glutamate-gated Ca²⁺ channel that acts as a 'coincidence detector', driving synaptic plasticity (long-term potentiation), learning and memory.",
    signalling: [
      "Glutamate binds GluN2 and the co-agonist glycine or D-serine binds GluN1 (both needed)",
      "At resting potential, Mg²⁺ sits in the pore and blocks it",
      "Coincident depolarisation (via AMPA receptors) expels Mg²⁺ → channel conducts Na⁺ and Ca²⁺",
      "Ca²⁺ → CaMKII → more AMPA receptors inserted → long-term potentiation",
      "Excess activation → Ca²⁺ overload → calpains, nNOS, mitochondrial failure → excitotoxic neuronal death"
    ],
    mechanism: "Uncompetitive open-channel blockers (ketamine, memantine, dextromethorphan) enter the pore only when it is open, so they block most where the channel is most active.",
    drugs: [
      { name: "Ketamine / esketamine", action: "High-affinity NMDA channel blockers", use: "Anaesthesia and analgesia (ketamine); treatment-resistant depression (esketamine nasal spray)" },
      { name: "Memantine", action: "Low-affinity, fast off-rate channel blocker", use: "Moderate–severe Alzheimer's disease" },
      { name: "Dextromethorphan", action: "NMDA channel blocker (also σ1 agonist, SERT inhibitor)", use: "Cough; with bupropion for depression; with quinidine for pseudobulbar affect" }
    ],
    question: "Why can ketamine relieve depression within hours, when monoamine antidepressants take weeks?",
    answer: "At low doses ketamine preferentially blocks NMDA receptors on tonically active GABAergic interneurons. This disinhibits pyramidal neurons, causing a burst of glutamate release that activates AMPA receptors. AMPA activation drives BDNF release and mTORC1 signalling, which rapidly rebuilds dendritic spines and synapses lost in chronic stress. So the effect comes from fast synaptic plasticity, not slow adaptive changes in monoamine receptors.",
    pearl: "Memantine is tolerated because its low affinity and fast off-rate let it block pathological tonic activation while leaving normal synaptic bursts largely intact; high-affinity blockers (ketamine, PCP) cause dissociation and psychosis. Esketamine needs post-dose monitoring for dissociation, sedation and raised BP. Chronic recreational ketamine causes ulcerative cystitis. Anti-NMDA receptor encephalitis (often with ovarian teratoma) presents with psychosis, supporting the NMDA hypofunction model of schizophrenia.",
    pathways: ["synapse"]
  },
  {
    id: "maob", name: "Monoamine oxidase A and B", short: "MAO-A/B", gene: "MAOA / MAOB",
    family: "Enzyme (flavin-dependent oxidase)", area: "Neuro & psychiatry",
    location: "Outer mitochondrial membrane. MAO-A: neurons, gut and liver (first-pass). MAO-B: astrocytes, platelets, basal ganglia",
    role: "Oxidatively deaminates monoamines to terminate their action. MAO-A prefers serotonin, noradrenaline and dietary tyramine; MAO-B prefers phenylethylamine; both break down dopamine.",
    signalling: [
      "Monoamine taken back into the presynaptic terminal or glia",
      "Cytosolic monoamine not packaged by VMAT2 is deaminated by MAO → aldehyde + H₂O₂",
      "In the gut wall and liver, MAO-A destroys dietary tyramine before it reaches the circulation",
      "MAO inhibition → more cytosolic monoamine → more vesicular storage and release",
      "MAO-B inhibition in the striatum → dopamine from remaining neurons (or levodopa) lasts longer"
    ],
    mechanism: "Selective MAO-B inhibitors boost striatal dopamine in Parkinson's. Non-selective irreversible inhibitors raise serotonin and noradrenaline in depression. Irreversible inhibitors need new enzyme synthesis (~2 weeks) for recovery.",
    drugs: [
      { name: "Selegiline / rasagiline", action: "Irreversible selective MAO-B inhibitors", use: "Parkinson's disease (monotherapy or levodopa adjunct)" },
      { name: "Safinamide", action: "Reversible MAO-B inhibitor (also Na⁺ channel blocker)", use: "Parkinson's 'wearing-off' as levodopa adjunct" },
      { name: "Phenelzine / tranylcypromine", action: "Irreversible non-selective MAO inhibitors", use: "Treatment-resistant / atypical depression" },
      { name: "Moclobemide", action: "Reversible MAO-A inhibitor (RIMA)", use: "Depression, social anxiety" }
    ],
    question: "Why can cheese or cured meat cause a hypertensive crisis on a non-selective MAOI but rarely on a MAO-B inhibitor at normal doses?",
    answer: "Dietary tyramine is normally destroyed by MAO-A in the gut wall and liver. With MAO-A blocked it reaches the circulation, enters sympathetic nerve terminals via NET and displaces stored noradrenaline (which MAO inhibition has also increased). The resulting surge of noradrenaline causes severe hypertension, headache and risk of stroke ('cheese reaction'). Selective MAO-B inhibitors leave intestinal MAO-A working, so tyramine is still cleared; selectivity is lost at high doses.",
    pearl: "Serotonin syndrome (hyperthermia, clonus, agitation) with SSRIs, SNRIs, tramadol, pethidine, triptans, linezolid and methylene blue (both are MAO inhibitors). Allow a 2-week washout after an irreversible MAOI before starting a serotonergic drug, and 5 weeks after stopping fluoxetine before an MAOI. Sympathomimetics (pseudoephedrine) are also dangerous. Selegiline is metabolised to amphetamine derivatives (insomnia).",
    pathways: ["synapse"]
  },
  {
    id: "nachr", name: "Nicotinic acetylcholine receptors", short: "nAChR", gene: "CHRNA1 (muscle); CHRNA4 / CHRNB2 (neuronal)",
    family: "Ligand-gated ion channel (cation, Cys-loop pentamer)", area: "Neuro & psychiatry",
    location: "Muscle type (α1₂β1δε) at the neuromuscular junction; neuronal types in autonomic ganglia (α3β4) and brain (α4β2, α7), including the mesolimbic reward pathway",
    role: "Fast excitatory transmission by acetylcholine: skeletal muscle contraction, autonomic ganglionic transmission, and central reward and attention.",
    signalling: [
      "Nerve impulse releases ACh into the neuromuscular junction",
      "Two ACh molecules bind the α-subunit interfaces → channel opens",
      "Na⁺ influx → end-plate potential → muscle Nav1.4 fires an action potential",
      "Action potential → DHPR–RyR1 coupling → Ca²⁺ release → contraction",
      "Acetylcholinesterase rapidly hydrolyses ACh → channel closes, muscle repolarises"
    ],
    mechanism: "Non-depolarising blockers competitively prevent ACh binding. Depolarising blockers (suxamethonium) open the channel persistently, so the end-plate stays depolarised and muscle Na⁺ channels inactivate. Partial agonists (varenicline) give modest receptor activation while blocking nicotine.",
    drugs: [
      { name: "Rocuronium / atracurium", action: "Non-depolarising competitive nAChR antagonists", use: "Muscle relaxation for intubation and surgery" },
      { name: "Suxamethonium (succinylcholine)", action: "Depolarising nAChR agonist (phase I block)", use: "Rapid-sequence intubation (fast onset, short action)" },
      { name: "Sugammadex", action: "Modified γ-cyclodextrin that encapsulates rocuronium/vecuronium", use: "Rapid reversal of aminosteroid neuromuscular block" },
      { name: "Varenicline", action: "α4β2 partial agonist", use: "Smoking cessation" }
    ],
    question: "Why does varenicline help smokers quit, and why is a partial agonist better here than a full agonist or an antagonist?",
    answer: "Nicotine activates α4β2 receptors on VTA dopamine neurons, releasing dopamine in the nucleus accumbens (reward). Varenicline binds these receptors with high affinity and partially activates them, giving enough dopamine release to blunt craving and withdrawal. Because it occupies the receptor, a cigarette's nicotine can only produce a partial effect, so smoking becomes less rewarding. A full agonist (nicotine itself) maintains addiction; a pure antagonist would worsen withdrawal.",
    pearl: "Suxamethonium releases K⁺ from muscle (serum K⁺ rises ~0.5 mmol/L), but in burns, denervation, crush injury or prolonged immobility extrajunctional receptors proliferate and can cause life-threatening hyperkalaemia. It also triggers malignant hyperthermia in RYR1 (or CACNA1S) variant carriers (with volatile anaesthetics; treat with dantrolene). Butyrylcholinesterase deficiency causes prolonged apnoea. Sugammadex also binds progestogens, so it is treated like a missed contraceptive pill. Myasthenia gravis is caused by antibodies to muscle nAChR.",
    pathways: ["synapse", "ecc"]
  },
  {
    id: "htr1b", name: "Serotonin 5-HT1B and 5-HT1D receptors", short: "5-HT1B/1D", gene: "HTR1B / HTR1D",
    family: "GPCR (Gi/o)", area: "Neuro & psychiatry",
    location: "5-HT1B: smooth muscle of meningeal and cranial blood vessels (also coronary arteries). 5-HT1D: trigeminal sensory nerve terminals",
    role: "Inhibitory serotonin receptors: constrict cranial vessels and reduce neuropeptide release from trigeminal nerves.",
    signalling: [
      "Serotonin or a triptan binds 5-HT1B/1D",
      "Gαi → ↓ adenylyl cyclase → ↓cAMP",
      "5-HT1B on dilated meningeal arteries → vasoconstriction",
      "5-HT1D on trigeminal terminals → ↓ release of CGRP and substance P → less neurogenic inflammation",
      "Presynaptic inhibition in the trigeminal nucleus caudalis → less pain transmission to the thalamus"
    ],
    mechanism: "Triptans are selective 5-HT1B/1D agonists that abort a migraine attack. They are acute treatments and do not prevent attacks.",
    drugs: [
      { name: "Sumatriptan / rizatriptan / zolmitriptan", action: "5-HT1B/1D agonists (triptans)", use: "Acute migraine (oral, nasal)" },
      { name: "Sumatriptan subcutaneous", action: "5-HT1B/1D agonist (fast onset)", use: "Acute cluster headache, severe migraine with vomiting" },
      { name: "Dihydroergotamine", action: "5-HT1B/1D agonist (also α-adrenergic and dopamine receptors)", use: "Refractory migraine" }
    ],
    question: "How does a triptan stop a migraine, and why is it contraindicated in coronary artery disease?",
    answer: "Migraine pain involves activation of trigeminal nerves that release CGRP, dilating meningeal vessels and sensitising pain pathways. Triptans act at 5-HT1D on trigeminal terminals to cut CGRP release and central transmission, and at 5-HT1B on cranial vessels to constrict them. Coronary arteries also express 5-HT1B, so triptans cause a small coronary vasoconstriction. In a healthy heart this is harmless (though it can cause chest tightness), but in coronary disease it can cause ischaemia or MI.",
    pearl: "Avoid in ischaemic heart disease, previous stroke, peripheral vascular disease and uncontrolled hypertension. Lasmiditan (a 5-HT1F agonist, 'ditan') inhibits trigeminal CGRP release without vasoconstriction, but causes dizziness and sedation (no driving for 8 h). Gepants (CGRP receptor antagonists) are another non-vasoconstrictor option. Using triptans on ≥10 days a month risks medication-overuse headache. Most triptans are cleared by MAO-A, so avoid with MAOIs; propranolol raises rizatriptan levels.",
    pathways: ["gi"]
  },
  {
    id: "orexin", name: "Orexin (hypocretin) receptors", short: "OX1R / OX2R", gene: "HCRTR1 / HCRTR2",
    family: "GPCR (Gq; OX2R also Gi/o)", area: "Neuro & psychiatry",
    location: "Arousal nuclei targeted by lateral hypothalamic orexin neurons: locus coeruleus (noradrenaline), tuberomammillary nucleus (histamine), dorsal raphe (serotonin), basal forebrain (ACh), VTA",
    role: "Orexin-A and -B, made only by a small group of lateral hypothalamic neurons, sustain and stabilise wakefulness and suppress REM intrusion.",
    signalling: [
      "Orexin neurons fire during wakefulness and fall silent in sleep",
      "Orexin binds OX1R/OX2R on monoaminergic and cholinergic arousal neurons",
      "Gαq → PLCβ → Ca²⁺ rise and cation channel opening; K⁺ channels close → depolarisation",
      "Arousal neurons fire more → cortex kept awake",
      "Stable orexin tone locks the 'flip-flop' sleep–wake switch in the wake position"
    ],
    mechanism: "Dual orexin receptor antagonists (DORAs) switch off the wake-promoting signal instead of globally enhancing GABA-A inhibition like benzodiazepines and Z-drugs.",
    drugs: [
      { name: "Suvorexant / lemborexant / daridorexant", action: "Dual orexin receptor antagonists (DORAs)", use: "Insomnia (sleep onset and maintenance)" }
    ],
    question: "How does narcolepsy type 1 validate orexin as a drug target, and what does it predict about DORA side effects?",
    answer: "In narcolepsy type 1 the orexin neurons are selectively lost (probably autoimmune, strongly linked to HLA-DQB1*06:02), and CSF orexin is undetectable. Patients have daytime sleepiness, fragmented night sleep and REM intrusions such as cataplexy, sleep paralysis and hypnagogic hallucinations. Canine narcolepsy is caused by HCRTR2 mutations and orexin-knockout mice are narcoleptic, confirming cause rather than association. So blocking orexin should promote sleep, and DORAs do; the predicted side effects are a mild, reversible version of narcolepsy.",
    pearl: "DORAs can cause next-day somnolence, sleep paralysis and hypnagogic hallucinations, and are contraindicated in narcolepsy. They cause less rebound insomnia, tolerance and respiratory depression than GABA-A hypnotics. Metabolised by CYP3A4 (avoid strong inhibitors). The reverse strategy, selective OX2R agonists (e.g. oveporexton), has restored wakefulness in narcolepsy type 1 trials.",
    pathways: ["gq"]
  },
  {
    id: "sv2a", name: "Synaptic vesicle glycoprotein 2A", short: "SV2A", gene: "SV2A",
    family: "Vesicle membrane protein (major facilitator superfamily)", area: "Neuro & psychiatry",
    location: "Membrane of synaptic vesicles in virtually all neurons (and endocrine cells)",
    role: "Regulates how many vesicles are primed and ready for Ca²⁺-triggered neurotransmitter release; interacts with synaptotagmin, the Ca²⁺ sensor.",
    signalling: [
      "Action potential opens presynaptic Ca²⁺ channels",
      "SV2A helps keep a normal pool of primed vesicles linked to synaptotagmin",
      "Ca²⁺ binds synaptotagmin → SNARE-driven vesicle fusion → transmitter release",
      "Drug binding to SV2A → reduced release, especially during sustained high-frequency firing",
      "Less excess glutamate release → seizure spread is limited"
    ],
    mechanism: "Levetiracetam and brivaracetam bind SV2A. The exact downstream mechanism is not fully understood, but binding affinity across analogues closely tracks anticonvulsant potency.",
    drugs: [
      { name: "Levetiracetam", action: "SV2A ligand", use: "Focal and generalised epilepsy, status epilepticus (IV)" },
      { name: "Brivaracetam", action: "Higher-affinity, more selective SV2A ligand", use: "Focal epilepsy" }
    ],
    question: "Why is levetiracetam often a first choice antiepileptic in hospital, pregnancy and polypharmacy?",
    answer: "It acts on a target not shared by other antiepileptics, so it is broad spectrum and can be added to other drugs. It is excreted largely unchanged by the kidneys, is minimally protein bound and does not induce or inhibit CYP enzymes, so it has few drug interactions (unlike carbamazepine, phenytoin or valproate). It can be loaded IV or orally and titrated quickly. Its teratogenic risk appears low compared with valproate. The main limitation is behavioural side effects, not organ toxicity.",
    pearl: "Behavioural effects are common: irritability, aggression, low mood and, rarely, psychosis or suicidal ideation; switching to brivaracetam sometimes helps. Reduce dose in renal impairment. SV2A knockout mice have severe seizures, and SV2A PET tracers are now used as a marker of synaptic density.",
    pathways: ["synapse"]
  },
  {
    id: "a2d", name: "α2δ subunit of voltage-gated Ca²⁺ channels", short: "α2δ-1", gene: "CACNA2D1",
    family: "Ion channel auxiliary subunit", area: "Neuro & psychiatry",
    location: "Presynaptic terminals of sensory (dorsal root ganglion) neurons in the spinal dorsal horn; cortex and other CNS synapses",
    role: "Auxiliary subunit that traffics voltage-gated Ca²⁺ channels (e.g. N- and P/Q-type) to the presynaptic membrane, setting how much Ca²⁺ enters per action potential.",
    signalling: [
      "Nerve injury upregulates α2δ-1 in sensory neurons",
      "More α2δ-1 → more Ca²⁺ channels delivered to dorsal horn terminals",
      "↑ Ca²⁺ entry → ↑ release of glutamate, substance P and CGRP → central sensitisation",
      "Gabapentinoid binds α2δ-1 → reduces channel trafficking and recycling to the membrane",
      "Fewer functional channels → less transmitter release → reduced neuropathic pain and excitability"
    ],
    mechanism: "Gabapentinoids are α2δ ligands. Despite the name, they do not act on GABA receptors. They do not block the channel pore directly; they reduce channel numbers at the terminal, so effects build over days.",
    drugs: [
      { name: "Gabapentin", action: "α2δ-1/α2δ-2 ligand", use: "Neuropathic pain (e.g. postherpetic neuralgia), focal epilepsy" },
      { name: "Pregabalin", action: "α2δ-1/α2δ-2 ligand (linear absorption)", use: "Neuropathic pain, focal epilepsy, generalised anxiety disorder, fibromyalgia" },
      { name: "Mirogabalin", action: "α2δ ligand with slower dissociation from α2δ-1", use: "Peripheral neuropathic pain (Japan and parts of Asia)" }
    ],
    question: "Why do gabapentinoids help neuropathic pain but do little for acute pain?",
    answer: "Acute nociceptive pain uses normal synaptic transmission. After nerve injury, α2δ-1 is strongly upregulated in sensory neurons, increasing presynaptic Ca²⁺ channel density and driving excess glutamate and peptide release in the dorsal horn (central sensitisation). Gabapentinoids target this upregulated trafficking, so they mainly dampen the pathologically amplified signal. That is also why the benefit develops over days to weeks of titration rather than after a single dose.",
    pearl: "Dizziness, sedation, weight gain and peripheral oedema are common. Both drugs are renally excreted unchanged, so reduce dose in CKD (toxicity in renal failure). Gabapentin absorption uses a saturable amino-acid transporter, so bioavailability falls at higher doses; pregabalin is linear. Misuse and dependence (controlled drugs in the UK), and respiratory depression when combined with opioids or other CNS depressants.",
    pathways: ["synapse"]
  },
  {
    id: "dat", name: "Dopamine and noradrenaline transporters", short: "DAT / NET", gene: "SLC6A3 / SLC6A2",
    family: "Transporter (SLC6, Na⁺/Cl⁻-coupled)", area: "Neuro & psychiatry",
    location: "Presynaptic membrane of dopaminergic (striatum, nucleus accumbens) and noradrenergic neurons. In the prefrontal cortex DAT is sparse and NET clears much of the dopamine",
    role: "Terminate dopamine and noradrenaline signalling by pumping them back into the presynaptic neuron using the Na⁺ gradient.",
    signalling: [
      "Dopamine/noradrenaline released into the synapse",
      "DAT/NET co-transport the amine with Na⁺ and Cl⁻ back into the terminal",
      "VMAT2 repackages it into vesicles; the rest is broken down by MAO",
      "Reuptake inhibitors block the transporter → more amine stays in the synapse",
      "Amphetamines are transported in, deplete vesicles via VMAT2 and reverse DAT/NET → amine efflux"
    ],
    mechanism: "Two strategies raise synaptic catecholamines: block reuptake (methylphenidate, atomoxetine, bupropion, cocaine) or act as a substrate-releaser (amphetamines), which releases amine independently of nerve firing.",
    drugs: [
      { name: "Methylphenidate", action: "DAT/NET reuptake inhibitor", use: "ADHD, narcolepsy" },
      { name: "Dexamfetamine / lisdexamfetamine", action: "DAT/NET substrates → vesicle depletion and transporter reversal (lisdexamfetamine is a prodrug)", use: "ADHD; binge-eating disorder (lisdexamfetamine)" },
      { name: "Atomoxetine", action: "Selective NET inhibitor", use: "ADHD (non-stimulant)" },
      { name: "Bupropion", action: "NET/DAT reuptake inhibitor", use: "Depression, smoking cessation" }
    ],
    question: "Why does atomoxetine treat ADHD without the abuse potential of stimulants?",
    answer: "Abuse potential comes from rapid dopamine rises in the nucleus accumbens, which depend on DAT. Atomoxetine blocks only NET. In the prefrontal cortex, where DAT is scarce, NET clears both noradrenaline and dopamine, so atomoxetine raises both there and improves attention and executive control. In the striatum and accumbens it barely changes dopamine, so there is no reward signal. Lisdexamfetamine lowers abuse risk differently: the lysine must be cleaved off in red blood cells, which gives a slow, smooth rise even if it is injected or snorted.",
    pearl: "Stimulants raise heart rate and BP and cause insomnia, appetite loss and slowed growth in children; never combine with MAOIs (hypertensive crisis). Atomoxetine is metabolised by CYP2D6 (poor metabolisers have much higher levels) and carries a suicidal-ideation warning. Bupropion lowers seizure threshold (avoid in epilepsy and eating disorders) and inhibits CYP2D6. Cocaine blocks DAT, NET and SERT, and also Na⁺ channels (local anaesthetic, arrhythmias). DAT imaging (ioflupane SPECT) shows nigrostriatal loss in Parkinson's.",
    pathways: ["synapse"]
  },
  {
    id: "abeta", name: "Amyloid-β", short: "Aβ", gene: "APP",
    family: "Peptide aggregate (APP cleavage product)", area: "Neuro & psychiatry",
    location: "Extracellular plaques in cortex and hippocampus; walls of cerebral vessels (cerebral amyloid angiopathy)",
    role: "Peptide (mainly Aβ40 and Aβ42) cut from amyloid precursor protein. Aggregation of Aβ is thought to trigger the cascade that leads to Alzheimer's disease.",
    signalling: [
      "APP is cleaved by β-secretase (BACE1) then γ-secretase (presenilin) → Aβ peptides",
      "Aβ42 is sticky → soluble oligomers and protofibrils → insoluble fibrils → plaques",
      "Aβ aggregates impair synapses and activate microglia and astrocytes",
      "Downstream: tau hyperphosphorylation and spread of tangles",
      "Synapse and neuron loss → progressive cognitive decline"
    ],
    mechanism: "Anti-amyloid monoclonal antibodies bind aggregated Aβ and recruit microglia (via Fc receptors) to clear it, removing plaque as shown on amyloid PET.",
    drugs: [
      { name: "Lecanemab", action: "Anti-Aβ antibody (preferentially binds soluble protofibrils)", use: "Early Alzheimer's (mild cognitive impairment or mild dementia) with confirmed amyloid" },
      { name: "Donanemab", action: "Anti-Aβ antibody (binds pyroglutamate-modified Aβ in established plaques)", use: "Early Alzheimer's with confirmed amyloid; can be stopped once plaque is cleared" }
    ],
    question: "What is the evidence that amyloid causes Alzheimer's disease, and why is the clinical benefit of clearing it only modest?",
    answer: "Genetics supports a causal role: APP, PSEN1 and PSEN2 mutations cause early-onset familial Alzheimer's, people with Down syndrome (an extra copy of APP on chromosome 21) develop it early, and a protective APP variant (A673T) that reduces β-secretase cleavage lowers risk. Clearing plaque with lecanemab or donanemab slows decline, which supports the hypothesis. But amyloid builds up for years before symptoms, and by then tau pathology and neuron loss are partly independent of amyloid. So removing plaque slows decline modestly rather than stopping or reversing it, which is why treatment is limited to early disease.",
    pearl: "ARIA (amyloid-related imaging abnormalities): ARIA-E (vasogenic oedema/effusion) and ARIA-H (microhaemorrhage, superficial siderosis), probably from clearing amyloid out of vessel walls. Risk is highest in APOE ε4 homozygotes, so APOE genotyping and serial MRI are needed; anticoagulants and thrombolysis raise bleeding risk. In Europe, use is restricted to people who are not APOE ε4 homozygous. Earlier approaches (BACE inhibitors, γ-secretase inhibitors) failed or worsened cognition.",
    pathways: []
  },

  // ───────────── Reproductive & urology ─────────────
  {
    id: "pr", name: "Progesterone receptor", short: "PR", gene: "PGR",
    family: "Nuclear receptor (type I)", area: "Reproductive & urology",
    location: "Endometrium, myometrium, breast, cervix, ovary, hypothalamus and pituitary",
    role: "Mediates progesterone: secretory transformation of oestrogen-primed endometrium, maintenance of pregnancy, thickening of cervical mucus and negative feedback on GnRH/LH.",
    signalling: [
      "Oestrogen (via ERα) induces PR expression, priming tissues to respond",
      "Progesterone or a progestin enters the cell and binds PR (released from HSP90 chaperones)",
      "PR dimerises → binds progesterone response elements → transcription",
      "Endometrium: stops proliferation, causes secretory change; withdrawal → menstruation",
      "Hypothalamus/pituitary: slows GnRH pulses and blocks the LH surge → no ovulation"
    ],
    mechanism: "Agonists (progestins) suppress ovulation, thicken cervical mucus and protect the endometrium. Antagonists (mifepristone) and selective modulators (ulipristal) block progesterone action.",
    drugs: [
      { name: "Levonorgestrel / desogestrel", action: "PR agonists (progestins)", use: "Contraception (pills, implant, intrauterine system); levonorgestrel emergency contraception" },
      { name: "Micronised progesterone / norethisterone", action: "PR agonists", use: "Endometrial protection in HRT; heavy menstrual bleeding" },
      { name: "Mifepristone", action: "PR antagonist (also glucocorticoid receptor antagonist)", use: "Medical abortion (with misoprostol), management of miscarriage" },
      { name: "Ulipristal acetate", action: "Selective PR modulator (SPRM)", use: "Emergency contraception up to 120 h after sex" }
    ],
    question: "Why must a woman with a uterus taking oestrogen HRT also take a progestogen?",
    answer: "Oestrogen drives endometrial proliferation. Unopposed, it causes endometrial hyperplasia and raises the risk of endometrial cancer. Progesterone acting through PR stops proliferation, converts the endometrium to a secretory state and reduces its oestrogen responsiveness (it lowers ER levels and increases local oestradiol inactivation). Adding a progestogen, cyclically or continuously, removes the excess cancer risk. Women without a uterus can take oestrogen alone.",
    pearl: "Combined oestrogen–progestogen HRT carries a higher breast cancer risk than oestrogen alone, consistent with progesterone's proliferative effect in breast. Enzyme inducers (carbamazepine, rifampicin, St John's wort) reduce progestogen contraceptive efficacy; a copper IUD is preferred for emergency contraception in this situation. Ulipristal works even after the LH rise has begun, so it delays ovulation later in the cycle than levonorgestrel; starting a progestogen within 5 days after ulipristal can reduce its effect. Mifepristone's GR antagonism is used in Cushing's syndrome.",
    pathways: ["nuclear"]
  },
  {
    id: "gnrhr", name: "Gonadotrophin-releasing hormone receptor", short: "GnRHR", gene: "GNRHR",
    family: "GPCR (Gq)", area: "Reproductive & urology",
    location: "Gonadotroph cells of the anterior pituitary",
    role: "Responds to pulsatile hypothalamic GnRH to drive LH and FSH secretion, and so gonadal testosterone and oestrogen production.",
    signalling: [
      "Hypothalamus releases GnRH in pulses",
      "GnRH binds GnRHR → Gαq → PLCβ → IP3 (Ca²⁺) + DAG (PKC)",
      "Gonadotrophs synthesise and release LH and FSH",
      "LH/FSH → testes and ovaries → testosterone, oestradiol, ovulation",
      "Continuous (non-pulsatile) stimulation → receptor uncoupling and downregulation → LH/FSH fall"
    ],
    mechanism: "Pulsatility is essential. Long-acting agonists stimulate first (flare), then desensitise the pituitary, giving medical castration. Antagonists block the receptor directly, suppressing LH/FSH within hours without a flare.",
    drugs: [
      { name: "Leuprorelin / goserelin / triptorelin", action: "GnRH receptor agonists (depot)", use: "Prostate cancer, breast cancer, endometriosis, central precocious puberty" },
      { name: "Degarelix", action: "Injectable GnRH receptor antagonist", use: "Advanced prostate cancer" },
      { name: "Relugolix / elagolix", action: "Oral GnRH receptor antagonists", use: "Prostate cancer (relugolix); endometriosis and fibroids (often with oestrogen–progestogen add-back)" },
      { name: "Cetrorelix / ganirelix", action: "GnRH receptor antagonists", use: "IVF: prevent premature LH surge" }
    ],
    question: "Why does a GnRH agonist lower testosterone, and why is an anti-androgen given when starting it in prostate cancer?",
    answer: "The pituitary only responds properly to pulsatile GnRH. A depot agonist provides constant stimulation: at first it activates the receptor strongly, causing a surge of LH and testosterone ('flare') for 1–2 weeks. Continuous occupancy then uncouples and downregulates the receptors, so LH and testosterone fall to castrate levels. The flare can worsen bone pain, urinary obstruction or spinal cord compression from metastases, so an androgen receptor blocker (e.g. bicalutamide) is given to cover it. Antagonists avoid the flare entirely.",
    pearl: "Effects follow from sex-steroid deprivation: hot flushes, loss of libido, bone loss, weight gain, insulin resistance and higher cardiovascular risk. In a head-to-head trial, oral relugolix produced fewer major cardiovascular events than leuprorelin. In endometriosis and fibroids, add-back hormone therapy limits bone loss and flushes. In IVF, a GnRH agonist trigger instead of hCG lowers the risk of ovarian hyperstimulation syndrome.",
    pathways: ["gq"]
  },
  {
    id: "srd5a", name: "5α-reductase", short: "5AR", gene: "SRD5A1 / SRD5A2",
    family: "Enzyme (ER membrane reductase)", area: "Reproductive & urology",
    location: "Type 2: prostate, genital skin, hair follicles. Type 1: skin, sebaceous glands, liver",
    role: "Converts testosterone to dihydrotestosterone (DHT), a much more potent androgen receptor agonist that drives prostate growth, male external genital development and androgenic hair loss.",
    signalling: [
      "Testosterone enters target cells",
      "5α-reductase (NADPH-dependent) reduces it to DHT",
      "DHT binds the androgen receptor with higher affinity and dissociates more slowly than testosterone",
      "AR–DHT → nuclear transcription → prostate epithelial and stromal growth, hair follicle miniaturisation",
      "Inhibition → DHT falls; testosterone rises slightly"
    ],
    mechanism: "Inhibitors lower DHT in the prostate and scalp, gradually shrinking the prostate and slowing hair loss. Testosterone-dependent effects (muscle, most libido) are largely preserved.",
    drugs: [
      { name: "Finasteride", action: "Type 2-selective 5α-reductase inhibitor", use: "Benign prostatic hyperplasia (5 mg); male-pattern hair loss (1 mg)" },
      { name: "Dutasteride", action: "Type 1 + type 2 5α-reductase inhibitor", use: "Benign prostatic hyperplasia (alone or with tamsulosin)" }
    ],
    question: "How did a rare genetic condition lead to finasteride, and why do 5α-reductase inhibitors work slowly in BPH?",
    answer: "Males with inherited SRD5A2 deficiency are born with under-virilised external genitalia, but virilise at puberty because testosterone itself still acts. As adults they have a small prostate and do not develop male-pattern baldness. That showed DHT, not testosterone, drives prostate growth and scalp hair loss, and that blocking it is tolerable. Inhibitors shrink the gland by reducing growth over months (roughly 6–12 months for full effect), unlike α1 blockers, which relax prostatic smooth muscle within days. Combining both gives fast relief plus a lower risk of retention and surgery.",
    pearl: "Inhibitors roughly halve serum PSA after about 6 months, so double the measured PSA when screening. Teratogenic to a male fetus (under-virilisation): pregnant women should not handle broken tablets, and men on dutasteride should not donate blood until 6 months after stopping (long half-life). Side effects include reduced libido, erectile and ejaculatory dysfunction, gynaecomastia and reports of depression and suicidal thoughts. They lower overall prostate cancer detection but with a relative increase in high-grade tumours found.",
    pathways: ["nuclear"]
  },
  {
    id: "adrb3", name: "β3-adrenergic receptor", short: "β3-AR", gene: "ADRB3",
    family: "GPCR (Gs)", area: "Reproductive & urology",
    location: "Detrusor smooth muscle of the bladder (the main β subtype there); adipose tissue",
    role: "Sympathetic noradrenaline relaxes the detrusor during bladder filling, allowing urine storage at low pressure.",
    signalling: [
      "Sympathetic (hypogastric nerve) noradrenaline binds β3-AR during the storage phase",
      "Gαs → adenylyl cyclase → ↑cAMP → PKA",
      "PKA opens BKCa K⁺ channels and lowers cytosolic Ca²⁺",
      "Detrusor relaxes → bladder capacity increases",
      "Fewer involuntary contractions → less urgency and urge incontinence"
    ],
    mechanism: "Agonists relax the detrusor during filling. Unlike antimuscarinics, they do not block the parasympathetic (M3) contraction needed for voiding, so retention is rare.",
    drugs: [
      { name: "Mirabegron", action: "β3-AR agonist", use: "Overactive bladder" },
      { name: "Vibegron", action: "β3-AR agonist", use: "Overactive bladder" }
    ],
    question: "Why are β3 agonists often preferred over antimuscarinics for overactive bladder in older people?",
    answer: "Antimuscarinics (oxybutynin, solifenacin) block M3 receptors on the detrusor, but muscarinic receptors are everywhere, causing dry mouth, constipation, blurred vision and confusion. Their cumulative anticholinergic burden is associated with cognitive decline and dementia in older adults. β3 agonists reach the same goal (detrusor relaxation) through a different receptor with a narrow tissue distribution, so they avoid anticholinergic effects. They can also be combined with an antimuscarinic when one drug is not enough.",
    pearl: "Mirabegron can raise BP and heart rate (avoid in severe uncontrolled hypertension; monitor BP). It is a moderate CYP2D6 inhibitor, raising levels of metoprolol, tricyclics and flecainide, and can increase digoxin levels. Vibegron does not meaningfully inhibit CYP enzymes. Both take several weeks to reach full effect.",
    pathways: ["gs"]
  },

  // ───────────── Musculoskeletal & bone ─────────────
  {
    id: "rankl", name: "Receptor activator of NF-κB ligand", short: "RANKL", gene: "TNFSF11",
    family: "Cytokine (TNF superfamily)", area: "Musculoskeletal & bone",
    location: "Membrane-bound and soluble; made mainly by osteocytes and osteoblasts, also activated T cells and synovial fibroblasts",
    role: "The essential signal for osteoclast formation, activation and survival. Its decoy receptor osteoprotegerin (OPG) balances it.",
    signalling: [
      "PTH, vitamin D, glucocorticoids, inflammation and oestrogen deficiency raise the RANKL:OPG ratio",
      "RANKL binds RANK on osteoclast precursors (with M-CSF also required)",
      "RANK → TRAF6 → NF-κB, MAPK and c-Fos → NFATc1 (master osteoclast transcription factor)",
      "Precursors fuse into multinucleated osteoclasts expressing cathepsin K and TRAP",
      "Osteoclasts seal onto bone, acidify and digest matrix → resorption; OPG binds RANKL to prevent this"
    ],
    mechanism: "Denosumab is a human monoclonal antibody that mimics OPG, binding RANKL so osteoclast formation and activity stop.",
    drugs: [
      { name: "Denosumab 60 mg (Prolia)", action: "Anti-RANKL antibody, SC every 6 months", use: "Postmenopausal and male osteoporosis, glucocorticoid-induced osteoporosis, bone loss on hormone ablation" },
      { name: "Denosumab 120 mg (Xgeva)", action: "Anti-RANKL antibody, SC monthly", use: "Prevention of skeletal events in bone metastases, giant cell tumour of bone" }
    ],
    question: "Why can stopping denosumab cause multiple vertebral fractures, when stopping a bisphosphonate does not?",
    answer: "Denosumab does not bind to bone; it suppresses osteoclasts only while antibody levels are high. As it wears off (from about 7 months after the last dose), a backlog of osteoclast precursors responds to RANKL at once, producing a surge of resorption above baseline. The BMD gained is lost quickly and some people get multiple spontaneous vertebral fractures. Bisphosphonates are stored in bone for years, so their effect fades slowly. Denosumab should not be stopped or delayed without switching to a bisphosphonate (often zoledronic acid).",
    pearl: "Hypocalcaemia, particularly in severe CKD or vitamin D deficiency; correct calcium and vitamin D before starting. Not renally cleared, so it can be used when bisphosphonates are contraindicated by low eGFR. Osteonecrosis of the jaw and atypical femoral fractures occur (more with high-dose oncology use). Genetics: loss of RANKL or RANK causes osteoclast-poor osteopetrosis, while loss of OPG causes juvenile Paget's disease.",
    pathways: ["bone", "nfkb"]
  },
  {
    id: "fpps", name: "Farnesyl pyrophosphate synthase", short: "FPPS", gene: "FDPS",
    family: "Enzyme (prenyltransferase, mevalonate pathway)", area: "Musculoskeletal & bone",
    location: "Cytosol of all cells; the drugs reach it almost only in osteoclasts",
    role: "Mevalonate-pathway enzyme downstream of HMG-CoA reductase that makes farnesyl pyrophosphate, needed to prenylate small GTPases (Ras, Rho, Rac, Rab) and to make cholesterol.",
    signalling: [
      "Bisphosphonate binds hydroxyapatite, especially at surfaces being actively resorbed",
      "Osteoclast acidifies the resorption pit → releases the drug → takes it up by endocytosis",
      "Nitrogen-containing bisphosphonate inhibits FPPS → no farnesyl/geranylgeranyl pyrophosphate",
      "Small GTPases cannot be prenylated → loss of ruffled border, cytoskeleton and vesicle trafficking",
      "Osteoclast stops resorbing and undergoes apoptosis; upstream IPP accumulates"
    ],
    mechanism: "Bone-seeking FPPS inhibitors concentrate in the skeleton and are delivered to osteoclasts by the act of resorption itself. Older non-nitrogen bisphosphonates (etidronate, clodronate) work differently, forming toxic ATP analogues.",
    drugs: [
      { name: "Alendronate / risedronate", action: "Oral nitrogen-containing bisphosphonates", use: "Osteoporosis (weekly), Paget's disease" },
      { name: "Zoledronic acid", action: "IV nitrogen-containing bisphosphonate", use: "Osteoporosis (yearly infusion), bone metastases, hypercalcaemia of malignancy" },
      { name: "Ibandronate", action: "Nitrogen-containing bisphosphonate (oral monthly or IV)", use: "Postmenopausal osteoporosis" }
    ],
    question: "Why must oral alendronate be taken fasting with plain water, staying upright for at least 30 minutes?",
    answer: "Bisphosphonates are highly charged and very poorly absorbed (under 1% of the dose), and they chelate Ca²⁺ and other cations. Any food, milk, coffee, calcium or iron in the gut binds them and blocks what little absorption there is. A full glass of water helps the tablet reach the stomach, and staying upright prevents it lodging in or refluxing into the oesophagus, where it causes erosive oesophagitis. Once absorbed, roughly half goes to bone and the rest is excreted unchanged by the kidneys.",
    pearl: "Avoid with low eGFR (renal excretion). Because they stay in bone for years, a 'drug holiday' is considered after about 5 years of oral or 3 years of IV treatment in lower-risk patients. Long-term suppression of remodelling links to atypical femoral fractures (prodromal thigh pain) and osteonecrosis of the jaw (dental check first). The first zoledronic acid infusion often causes a flu-like acute-phase reaction: accumulated IPP activates γδ T cells. Correct vitamin D first to avoid hypocalcaemia.",
    pathways: ["bone", "lipid"]
  },
  {
    id: "xo", name: "Xanthine oxidase", short: "XO", gene: "XDH",
    family: "Enzyme (molybdenum-containing oxidoreductase)", area: "Musculoskeletal & bone",
    location: "Mainly liver and intestinal epithelium; also endothelium",
    role: "Final steps of purine breakdown: hypoxanthine → xanthine → uric acid. Humans lack uricase, so urate is the end product.",
    signalling: [
      "Purines from cell turnover and diet → hypoxanthine",
      "XO: hypoxanthine → xanthine → uric acid",
      "Urate above its saturation point → monosodium urate crystals in joints",
      "Crystals activate the NLRP3 inflammasome in macrophages → IL-1β → acute gout flare",
      "XO inhibition → ↓ urate; more soluble hypoxanthine and xanthine are excreted instead"
    ],
    mechanism: "XO inhibitors lower urate production. Treat-to-target: lower serum urate below about 0.36 mmol/L (0.30 if tophi) so existing crystals dissolve.",
    drugs: [
      { name: "Allopurinol", action: "Purine-analogue XO inhibitor (active metabolite oxypurinol)", use: "Gout (urate-lowering), prevention of tumour lysis syndrome" },
      { name: "Febuxostat", action: "Non-purine selective XO inhibitor", use: "Gout when allopurinol is unsuitable" },
      { name: "Rasburicase", action: "Recombinant uricase (converts urate to soluble allantoin)", use: "Treatment/prevention of tumour lysis syndrome in high-risk patients" }
    ],
    question: "Why does starting allopurinol often trigger a gout flare, and how is it prevented?",
    answer: "Lowering serum urate changes the equilibrium with existing urate crystal deposits in the joint. As they start to dissolve and remodel, crystals are shed from the cartilage surface into the joint space, where they activate the NLRP3 inflammasome and IL-1β. So the drug that will eventually prevent flares makes them more likely in the first months. It is managed by starting at a low dose and titrating slowly, and giving prophylactic colchicine or an NSAID for the first 3–6 months. Allopurinol should not be stopped if a flare occurs.",
    pearl: "HLA-B*58:01 strongly predisposes to allopurinol SJS/TEN and DRESS; it is common in Han Chinese, Korean and Thai populations, where screening is advised (risk also higher with CKD). Azathioprine and mercaptopurine are inactivated by XO, so combining them with allopurinol or febuxostat causes severe myelosuppression unless the thiopurine dose is cut sharply. Febuxostat had higher cardiovascular death than allopurinol in a large trial, so it is used with caution in CVD. Rasburicase is contraindicated in G6PD deficiency (H₂O₂ by-product → haemolysis, methaemoglobinaemia).",
    pathways: []
  },
  {
    id: "sost", name: "Sclerostin", short: "Sclerostin", gene: "SOST",
    family: "Secreted glycoprotein (Wnt inhibitor)", area: "Musculoskeletal & bone",
    location: "Secreted by osteocytes embedded in bone; acts on nearby osteoblasts and their precursors",
    role: "Brake on bone formation. Osteocytes reduce sclerostin when bone is mechanically loaded, allowing new bone to form where it is needed.",
    signalling: [
      "Wnt binds Frizzled + LRP5/6 co-receptor → the β-catenin destruction complex (APC, Axin, GSK3β) is inhibited",
      "β-catenin accumulates → enters the nucleus → TCF/LEF transcription",
      "Osteoblast differentiation and bone formation ↑; OPG ↑ (so resorption ↓)",
      "Sclerostin binds LRP5/6 → blocks Wnt signalling → β-catenin degraded",
      "Loading and PTH lower sclerostin; unloading (immobility) raises it"
    ],
    mechanism: "Romosozumab neutralises sclerostin, releasing the Wnt brake. It both increases bone formation and decreases resorption (a dual effect no other osteoporosis drug has). Intermittent PTH1R agonists are the other anabolic option.",
    drugs: [
      { name: "Romosozumab", action: "Anti-sclerostin monoclonal antibody, SC monthly for 12 months", use: "Severe osteoporosis at very high fracture risk" },
      { name: "Teriparatide / abaloparatide", action: "Intermittent PTH1R agonists (PTH 1–34 / PTHrP analogue)", use: "Severe osteoporosis, glucocorticoid-induced osteoporosis (anabolic)" }
    ],
    question: "How did a rare bone disease validate sclerostin as a target, and why is romosozumab given for only 12 months?",
    answer: "Sclerosteosis (loss-of-function SOST mutations) and van Buchem disease (loss of a SOST regulatory element) cause very high bone mass that resists fracture. Heterozygous carriers have raised bone density without the complications, suggesting partial inhibition is safe and beneficial. Antibody blockade reproduces this: bone formation rises sharply and resorption falls. The anabolic effect wanes after several months as compensatory mechanisms (such as other Wnt inhibitors) increase, so it is given for 12 months and then followed by an antiresorptive to keep the gains.",
    pearl: "In a trial against alendronate, romosozumab had more myocardial infarctions and strokes, so it is contraindicated after MI or stroke. Hypocalcaemia and osteonecrosis of the jaw can occur. Intermittent PTH is anabolic (bursts of osteoblast activity), whereas continuously high PTH (hyperparathyroidism) is catabolic; teriparatide and abaloparatide can cause hypercalcaemia and orthostatic dizziness. Anabolic-first then antiresorptive gives larger BMD gains than the reverse order.",
    pathways: ["bone", "gs"]
  }
);
