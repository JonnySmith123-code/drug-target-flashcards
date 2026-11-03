// Disease pathology, part 1: brain, eye, thyroid, lungs, heart, vessels, liver, stomach.
// Each disease links mechanism → presentation → drug targets. Target/pathway ids match targets.js and pathways.js.
(window.FC_DISEASES = window.FC_DISEASES || []).push(
  // ───────────── Brain ─────────────
  {
    id: "alzheimers",
    name: "Alzheimer's disease",
    short: "Alzheimer's",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "The commonest cause of dementia: a progressive neurodegenerative disease defined by amyloid-β plaques and tau neurofibrillary tangles, with risk rising steeply with age.",
    pathophys: [
      "Amyloid precursor protein is cleaved by β- then γ-secretase → aggregation-prone Aβ42 accumulates (impaired clearance in late-onset disease; APOE ε4 is the main genetic risk factor)",
      "Aβ oligomers and plaques → synaptic dysfunction and microglial/astrocyte activation",
      "Downstream hyperphosphorylated tau detaches from microtubules → neurofibrillary tangles that spread through connected networks (entorhinal cortex → hippocampus → neocortex)",
      "Loss of cholinergic neurones in the basal forebrain (nucleus basalis of Meynert) → ↓ACh in cortex and hippocampus",
      "Progressive synapse and neurone loss → cortical atrophy → memory, then language, executive and functional decline"
    ],
    features: "Insidious episodic memory loss, then word-finding difficulty, disorientation, apraxia and behavioural change; late dependence, immobility and aspiration pneumonia.",
    diagnosis: "Clinical assessment with cognitive testing, supported by amyloid/tau biomarkers (CSF Aβ42/40 and p-tau, amyloid or tau PET, or plasma p-tau217) and MRI to exclude other causes and assess atrophy.",
    treatments: [
      { name: "Donepezil / rivastigmine / galantamine", action: "Acetylcholinesterase inhibitors: boost synaptic ACh", target: "ache" },
      { name: "Memantine", action: "Low-affinity, uncompetitive NMDA receptor antagonist", target: "nmda" },
      { name: "Lecanemab / donanemab", action: "Anti-amyloid monoclonal antibodies that clear plaques in early disease", target: "abeta" }
    ],
    targets: ["ache", "nmda", "abeta"],
    pathways: ["synapse"],
    question: "Why do cholinesterase inhibitors help symptoms but not stop Alzheimer's, and how do anti-amyloid antibodies differ?",
    answer: "Basal forebrain cholinergic neurones are lost early, so inhibiting AChE prolongs the action of the ACh that is still released and modestly improves cognition. But the neurones keep dying, so the benefit fades as the disease progresses. Anti-amyloid antibodies act further upstream: they bind aggregated Aβ and recruit microglia (via Fc receptors) to clear plaques. In mild cognitive impairment or mild dementia with confirmed amyloid, this modestly slows decline. They do not reverse established neurone loss, which is why they are given only early.",
    pearl: "Anti-amyloid antibodies cause ARIA (amyloid-related imaging abnormalities: oedema or microhaemorrhage). The risk is highest in APOE ε4 homozygotes and with anticoagulation, so MRI monitoring and APOE genotyping are part of treatment."
  },
  {
    id: "parkinsons",
    name: "Parkinson's disease",
    short: "Parkinson's",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "The second commonest neurodegenerative disease: α-synuclein pathology and loss of dopaminergic neurones in the substantia nigra cause a progressive movement disorder with many non-motor features.",
    pathophys: [
      "Misfolded α-synuclein aggregates into Lewy bodies and neurites (genetic risk includes GBA1 and LRRK2 variants; mitochondrial and lysosomal dysfunction contribute)",
      "Dopaminergic neurones of the substantia nigra pars compacta degenerate → ↓dopamine in the striatum",
      "Loss of D1 (direct pathway) stimulation and D2 (indirect pathway) inhibition → excess basal ganglia output that inhibits the thalamus",
      "↓Thalamocortical drive → bradykinesia and rigidity; tremor from abnormal oscillating circuits",
      "Pathology also involves non-dopaminergic systems (brainstem, autonomic, cortical) → non-motor and levodopa-resistant symptoms"
    ],
    features: "Asymmetric resting tremor, bradykinesia and rigidity, later postural instability; non-motor features include anosmia, REM sleep behaviour disorder, constipation, depression, orthostatic hypotension and dementia.",
    diagnosis: "Clinical diagnosis (bradykinesia plus rest tremor or rigidity, with a clear response to levodopa); DaT-SPECT can confirm presynaptic dopaminergic deficit in uncertain cases.",
    treatments: [
      { name: "Levodopa + carbidopa/benserazide", action: "Dopamine precursor + peripheral DOPA decarboxylase inhibitor", target: null },
      { name: "Pramipexole / ropinirole / rotigotine", action: "Dopamine D2/D3 receptor agonists", target: "drd2" },
      { name: "Rasagiline / safinamide / selegiline", action: "MAO-B inhibitors: slow central dopamine breakdown", target: "maob" },
      { name: "Entacapone / opicapone", action: "COMT inhibitors: prolong levodopa half-life, reduce 'wearing off'", target: null },
      { name: "Amantadine", action: "NMDA antagonist: reduces levodopa-induced dyskinesia", target: "nmda" }
    ],
    targets: ["drd2", "maob", "nmda"],
    pathways: ["synapse"],
    question: "Why is levodopa given with carbidopa, and why do motor fluctuations appear as the disease advances?",
    answer: "Dopamine cannot cross the blood–brain barrier, but levodopa can, via the large neutral amino acid transporter. Peripheral DOPA decarboxylase would convert most levodopa to dopamine before it reaches the brain, causing nausea and hypotension. Carbidopa blocks this peripheral conversion but does not cross the BBB itself. Early on, surviving nigral terminals store dopamine and release it smoothly. As they are lost, striatal dopamine follows the short plasma half-life of levodopa, causing 'wearing off' and peak-dose dyskinesia.",
    pearl: "Dopamine agonists commonly cause impulse-control disorders (gambling, hypersexuality, compulsive shopping) and sudden sleep attacks. Warn patients and ask about these at every review. Avoid D2 antagonists (haloperidol, metoclopramide); prefer domperidone for nausea, as it does not cross the BBB."
  },
  {
    id: "ms",
    name: "Multiple sclerosis",
    short: "MS",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "A chronic immune-mediated demyelinating disease of the CNS, the commonest cause of non-traumatic neurological disability in young adults. It is more common in women and at higher latitudes.",
    pathophys: [
      "Genetic risk (HLA-DRB1*15:01) plus environmental triggers (EBV infection, low vitamin D, smoking) → loss of tolerance to CNS antigens",
      "Autoreactive T cells and B cells activated in the periphery cross the blood–brain barrier using α4-integrin",
      "Th1/Th17 cells, B cells (antigen presentation, cytokines) and macrophages → focal inflammatory demyelinating plaques in white and grey matter",
      "Demyelination → slowed or blocked saltatory conduction → relapses; partial remyelination → remission",
      "Chronic compartmentalised inflammation (microglia, meningeal B cell follicles) → axonal loss and atrophy → progressive disability"
    ],
    features: "Relapses of optic neuritis, sensory disturbance, limb weakness, brainstem symptoms (diplopia, internuclear ophthalmoplegia) or myelitis; Uhthoff's phenomenon, Lhermitte's sign, fatigue, bladder dysfunction; later progressive gait disability.",
    diagnosis: "McDonald criteria: MRI lesions disseminated in space and time (periventricular, juxtacortical, infratentorial, spinal cord), with CSF-specific oligoclonal bands supporting the diagnosis.",
    treatments: [
      { name: "Ocrelizumab / ofatumumab / ublituximab", action: "Anti-CD20 B cell depletion", target: "cd20" },
      { name: "Fingolimod / siponimod / ozanimod / ponesimod", action: "S1P receptor modulators: trap lymphocytes in lymph nodes", target: "s1p1" },
      { name: "Natalizumab", action: "Anti-α4-integrin: blocks lymphocyte entry into the CNS", target: null },
      { name: "Dimethyl fumarate / teriflunomide / cladribine", action: "Oral immunomodulators (Nrf2 activation / DHODH inhibition / lymphocyte depletion)", target: null },
      { name: "Methylprednisolone (high dose)", action: "Glucocorticoid: shortens acute relapses", target: "gr" }
    ],
    targets: ["cd20", "s1p1", "gr"],
    pathways: ["tcell", "bcell", "th17"],
    question: "MS was long thought to be a T cell disease. Why are B cell-depleting anti-CD20 antibodies so effective?",
    answer: "B cells drive CNS autoimmunity through more than antibodies. They present myelin antigens to T cells, secrete pro-inflammatory cytokines, and form follicle-like aggregates in the meninges. Anti-CD20 antibodies deplete circulating B cells by antibody- and complement-dependent cytotoxicity. Antibody-secreting plasma cells do not express CD20, so they are spared and immunoglobulin levels fall only slowly. Removing B cell antigen presentation dampens pathogenic T cell activation, which explains the large fall in relapses and new MRI lesions. Ocrelizumab is also licensed for primary progressive MS, though its effect on progression is more modest.",
    pearl: "Natalizumab carries a risk of progressive multifocal leukoencephalopathy (JC virus), highest with JCV antibody positivity, long treatment duration and prior immunosuppression. S1P modulators cause first-dose bradycardia (S1P1 on atrial myocytes) and macular oedema."
  },
  {
    id: "migraine",
    name: "Migraine",
    short: "Migraine",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "A common primary headache disorder of recurrent disabling attacks, about three times more common in women, and a leading cause of years lived with disability worldwide.",
    pathophys: [
      "Genetically primed hyperexcitable brain; hypothalamic and brainstem changes in the premonitory phase",
      "Cortical spreading depolarisation (a slow wave of neuronal depolarisation) → aura in about a third of patients",
      "Activation of the trigeminovascular system → release of CGRP, substance P and PACAP from trigeminal afferents around meningeal vessels",
      "CGRP → meningeal vasodilation and neurogenic inflammation → peripheral sensitisation of trigeminal nociceptors",
      "Central sensitisation in the trigeminocervical complex and thalamus → throbbing pain, photophobia, phonophobia, allodynia"
    ],
    features: "Unilateral throbbing headache lasting 4–72 h with nausea, photophobia and phonophobia, sometimes with visual or sensory aura; chronic migraine means ≥15 headache days/month; medication-overuse headache is a common complication.",
    diagnosis: "Clinical diagnosis using ICHD-3 criteria; imaging only for red flags (thunderclap onset, new headache over 50, focal deficit, papilloedema).",
    treatments: [
      { name: "Sumatriptan / rizatriptan / zolmitriptan", action: "Triptans: 5-HT1B/1D agonists (acute)", target: "htr1b" },
      { name: "Ibuprofen / aspirin / naproxen", action: "NSAIDs: COX inhibition (acute)", target: "cox" },
      { name: "Erenumab / fremanezumab / galcanezumab / eptinezumab", action: "Anti-CGRP or anti-CGRP-receptor monoclonal antibodies (prevention)", target: "cgrp" },
      { name: "Rimegepant / ubrogepant / atogepant", action: "Gepants: small-molecule CGRP receptor antagonists (acute and/or prevention)", target: "cgrp" },
      { name: "Propranolol / topiramate / amitriptyline / onabotulinumtoxinA", action: "Older preventives (onabotulinumtoxinA for chronic migraine)", target: null }
    ],
    targets: ["htr1b", "cgrp", "cox"],
    pathways: ["gi"],
    question: "How do triptans abort a migraine, and why are they contraindicated in coronary disease when gepants are not?",
    answer: "Triptans act on Gi-coupled 5-HT1B receptors on meningeal vessels, causing constriction, and on 5-HT1D receptors on trigeminal terminals, inhibiting CGRP release and transmission in the trigeminocervical complex. 5-HT1B receptors are also present on coronary arteries, so triptans can cause coronary vasoconstriction. This makes them contraindicated in ischaemic heart disease, stroke and uncontrolled hypertension. Gepants block the CGRP receptor without directly constricting vessels, so they suit patients with vascular risk. Gepants and CGRP antibodies work downstream at the key neuropeptide signal, not on serotonin receptors.",
    pearl: "Using acute medication too often (triptans or combination analgesics on ≥10 days/month, simple analgesics on ≥15 days/month) causes medication-overuse headache. Limit acute treatment days and start a preventive."
  },
  {
    id: "epilepsy",
    name: "Epilepsy",
    short: "Epilepsy",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "An enduring tendency to unprovoked seizures, affecting around 1% of people. Causes include genetic, structural (stroke, tumour, hippocampal sclerosis), infectious, metabolic and immune.",
    pathophys: [
      "Imbalance between excitation (glutamate, Na⁺/Ca²⁺ channels) and inhibition (GABA) in cortical networks",
      "Focal lesion or channel/receptor variant (e.g. SCN1A, GABRG2) → hyperexcitable neurones with paroxysmal depolarisation shifts",
      "Hypersynchronous firing spreads locally (focal seizure) or engages thalamocortical circuits bilaterally (generalised seizure)",
      "Absence seizures arise from T-type Ca²⁺ channel-driven thalamocortical oscillations (3 Hz spike-and-wave)",
      "Recurrent seizures → network remodelling, risk of status epilepticus, injury and SUDEP"
    ],
    features: "Focal seizures (with or without impaired awareness, may become bilateral tonic–clonic), generalised tonic–clonic, absence and myoclonic seizures; tongue biting, incontinence and post-ictal confusion; status epilepticus is an emergency.",
    diagnosis: "Clinical history from a witness, EEG (interictal epileptiform discharges), and MRI brain to look for a structural cause.",
    treatments: [
      { name: "Lamotrigine / carbamazepine / phenytoin / lacosamide", action: "Voltage-gated Na⁺ channel blockers", target: "nav" },
      { name: "Levetiracetam / brivaracetam", action: "SV2A ligands: modulate vesicular release", target: "sv2a" },
      { name: "Sodium valproate", action: "Broad-spectrum (Na⁺ channel, T-type Ca²⁺, ↑GABA)", target: null },
      { name: "Ethosuximide", action: "T-type Ca²⁺ channel blocker (absence seizures)", target: null },
      { name: "Lorazepam / midazolam / diazepam", action: "Benzodiazepines: GABA-A positive allosteric modulators (status epilepticus)", target: "gabaa" }
    ],
    targets: ["nav", "sv2a", "gabaa"],
    pathways: ["synapse"],
    question: "Why can Na⁺ channel blockers worsen absence seizures and Dravet syndrome?",
    answer: "Drugs like carbamazepine and phenytoin bind Na⁺ channels in their inactivated state. This preferentially stops rapidly firing neurones while sparing normal activity. Absence seizures are driven by T-type Ca²⁺ channel oscillations in thalamocortical circuits, not Na⁺ channel-dependent focal firing, so these drugs do not help and may aggravate absence and myoclonic seizures. In Dravet syndrome, loss-of-function SCN1A variants mainly impair Nav1.1 in inhibitory GABAergic interneurones. Further Na⁺ channel blockade silences these interneurones even more and increases network excitability. Broad-spectrum agents (valproate) or ethosuximide (absence) are used instead.",
    pearl: "Valproate is highly teratogenic (neural tube defects, neurodevelopmental harm) and must not be used in women of childbearing potential unless no alternative exists and a pregnancy-prevention programme is followed. Carbamazepine-induced SJS/TEN is strongly linked to HLA-B*15:02 in people of South-East Asian ancestry."
  },
  {
    id: "mdd",
    name: "Major depressive disorder",
    short: "Depression",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "A common, often recurrent mood disorder and a leading cause of disability worldwide, with persistent low mood or anhedonia and an increased risk of suicide.",
    pathophys: [
      "Genetic vulnerability plus chronic stress or adversity → sustained HPA-axis activation and raised cortisol",
      "Altered monoaminergic (5-HT, noradrenaline, dopamine) signalling in limbic and prefrontal circuits",
      "Stress and glucocorticoids → ↓BDNF, dendritic atrophy and synapse loss in prefrontal cortex and hippocampus",
      "Dysfunctional network connectivity (default mode, reward circuits) → anhedonia, negative bias, rumination",
      "Inflammatory cytokines contribute in a subset of patients"
    ],
    features: "Low mood and/or anhedonia with sleep and appetite change, fatigue, poor concentration, worthlessness or guilt, psychomotor change and suicidal thoughts.",
    diagnosis: "Clinical diagnosis by DSM-5/ICD-11 criteria (≥5 symptoms for ≥2 weeks including low mood or anhedonia), with severity scales such as PHQ-9 and exclusion of bipolar disorder, hypothyroidism and substance causes.",
    treatments: [
      { name: "Sertraline / escitalopram / fluoxetine", action: "SSRIs: SERT inhibition", target: "sert" },
      { name: "Venlafaxine / duloxetine", action: "SNRIs: SERT + NET inhibition", target: "sert" },
      { name: "Bupropion", action: "Noradrenaline–dopamine reuptake inhibitor", target: "dat" },
      { name: "Mirtazapine", action: "α2 antagonist (↑NA and 5-HT release) with 5-HT2/H1 blockade", target: null },
      { name: "Esketamine (intranasal)", action: "NMDA receptor antagonist: rapid action in treatment-resistant depression", target: "nmda" },
      { name: "Phenelzine / tranylcypromine", action: "Irreversible MAO inhibitors (specialist use)", target: "maob" }
    ],
    targets: ["sert", "dat", "nmda", "maob"],
    pathways: ["synapse"],
    question: "SSRIs block SERT within hours, so why does the antidepressant effect take weeks, while ketamine acts within hours?",
    answer: "Blocking SERT raises synaptic 5-HT at once, but somatodendritic 5-HT1A autoreceptors first reduce raphe firing and offset the effect. Over weeks, the autoreceptors desensitise and serotonergic transmission increases. Slower downstream adaptations follow, including ↑BDNF, neurogenesis and synaptic remodelling, and these are thought to track clinical response. Ketamine and esketamine block NMDA receptors on GABAergic interneurones. This disinhibits glutamate release, and the resulting AMPA receptor activation triggers BDNF release and mTOR-dependent synaptogenesis within hours. The same plasticity endpoint is reached by a faster route.",
    pearl: "Antidepressants carry a warning for increased suicidal thinking in under-25s early in treatment. Combining serotonergic drugs (SSRIs, MAOIs, tramadol, linezolid, triptans to a lesser extent) can cause serotonin syndrome. Leave a washout before switching to or from an MAOI."
  },
  {
    id: "schizophrenia",
    name: "Schizophrenia",
    short: "Schizophrenia",
    organ: "brain",
    organs: ["brain"],
    area: "Neuro & psychiatry",
    summary: "A chronic psychotic disorder with lifetime prevalence of about 1%, usually beginning in late adolescence or early adulthood. It reduces life expectancy substantially, largely through cardiometabolic disease.",
    pathophys: [
      "Polygenic risk and neurodevelopmental insults (obstetric complications, cannabis use, urbanicity, migration) → abnormal cortical circuit development and synaptic pruning",
      "NMDA receptor hypofunction on cortical GABAergic interneurones → disinhibited glutamatergic output",
      "↑Presynaptic dopamine synthesis and release in the associative striatum (mesolimbic/mesostriatal hyperdopaminergia) → aberrant salience → delusions and hallucinations",
      "↓Prefrontal (mesocortical) dopamine and cortical dysfunction → negative and cognitive symptoms",
      "Progressive grey matter loss and social/functional decline in many patients"
    ],
    features: "Positive symptoms (delusions, hallucinations, thought disorder), negative symptoms (avolition, alogia, blunted affect, social withdrawal) and cognitive impairment; high rates of smoking, metabolic syndrome and suicide.",
    diagnosis: "Clinical diagnosis by DSM-5/ICD-11 criteria (psychotic symptoms persisting with functional decline), after excluding organic, substance-induced and mood disorders.",
    treatments: [
      { name: "Haloperidol", action: "First-generation antipsychotic: D2 antagonist", target: "drd2" },
      { name: "Risperidone / olanzapine / quetiapine", action: "Second-generation: D2 + 5-HT2A antagonists", target: "htr2a" },
      { name: "Aripiprazole / brexpiprazole / cariprazine", action: "D2 partial agonists", target: "drd2" },
      { name: "Clozapine", action: "Low D2 occupancy multi-receptor antagonist: treatment-resistant schizophrenia", target: "htr2a" },
      { name: "Xanomeline–trospium", action: "Central M1/M4 muscarinic agonist + peripherally restricted muscarinic antagonist", target: null }
    ],
    targets: ["drd2", "htr2a"],
    pathways: ["synapse", "gi"],
    question: "Why do D2 antagonists treat hallucinations but cause parkinsonism and raise prolactin?",
    answer: "Psychotic symptoms track excess dopamine signalling in the striatum, and antipsychotic efficacy correlates with D2 blockade; clinical response typically needs about 60–70% striatal D2 occupancy. The same blockade acts in other dopamine pathways. In the nigrostriatal pathway it causes extrapyramidal side effects (dystonia, parkinsonism, akathisia, tardive dyskinesia). In the tuberoinfundibular pathway it removes dopamine's tonic inhibition of lactotrophs, causing hyperprolactinaemia. Second-generation drugs add 5-HT2A antagonism, which increases striatal dopamine release and lowers extrapyramidal side effects. Partial agonists stabilise D2 tone and spare prolactin.",
    pearl: "Clozapine is the only drug with proven superiority in treatment-resistant schizophrenia and reduces suicidality. It can cause severe neutropenia/agranulocytosis (neutrophil monitoring), myocarditis, seizures, constipation (sometimes fatal ileus) and hypersalivation. Smoking induces CYP1A2, so stopping smoking can raise clozapine levels sharply."
  },

  // ───────────── Eye ─────────────
  {
    id: "glaucoma",
    name: "Primary open-angle glaucoma",
    short: "Glaucoma",
    organ: "eye",
    organs: ["eye"],
    area: "Ophthalmology",
    summary: "A progressive optic neuropathy, usually linked to raised intraocular pressure (IOP), and the leading cause of irreversible blindness worldwide. Vision is lost silently until late.",
    pathophys: [
      "Aqueous humour is secreted by the ciliary body epithelium (carbonic anhydrase- and β-adrenergic-dependent) and drains via the trabecular meshwork (conventional) and uveoscleral (unconventional) routes",
      "↑Resistance to outflow in the trabecular meshwork/Schlemm's canal → raised IOP (though some patients have normal-tension glaucoma)",
      "Pressure and vascular stress at the lamina cribrosa → impaired axonal transport in retinal ganglion cell axons",
      "Retinal ganglion cell apoptosis → optic disc cupping and thinning of the retinal nerve fibre layer",
      "Peripheral (arcuate) visual field loss progressing towards central vision"
    ],
    features: "Asymptomatic until advanced; peripheral field defects, increased cup-to-disc ratio, and eventual tunnel vision and blindness. Acute angle-closure glaucoma (a different mechanism) presents with a painful red eye, haloes and a fixed mid-dilated pupil.",
    diagnosis: "Tonometry (IOP), optic disc examination, OCT of the retinal nerve fibre layer, perimetry (visual fields) and gonioscopy to confirm an open angle.",
    treatments: [
      { name: "Latanoprost / bimatoprost / travoprost", action: "Prostaglandin FP agonists: ↑uveoscleral outflow (first-line)", target: "fp" },
      { name: "Timolol", action: "Topical β-blocker: ↓aqueous production", target: "adrb2" },
      { name: "Dorzolamide / brinzolamide; acetazolamide", action: "Carbonic anhydrase inhibitors: ↓aqueous production", target: "ca" },
      { name: "Brimonidine", action: "α2 agonist: ↓production, ↑uveoscleral outflow", target: null },
      { name: "Netarsudil", action: "Rho kinase inhibitor: ↑trabecular outflow", target: null },
      { name: "Pilocarpine", action: "Muscarinic agonist: miosis opens the angle (angle-closure)", target: "m3" }
    ],
    targets: ["fp", "adrb2", "ca", "m3"],
    pathways: ["gq", "gs"],
    question: "How do the different glaucoma drug classes lower IOP, and why are prostaglandin analogues first-line?",
    answer: "IOP reflects the balance between aqueous production and outflow. β-blockers (blocking β-receptor cAMP signalling in the ciliary epithelium), carbonic anhydrase inhibitors (reducing HCO₃⁻ and linked fluid secretion) and α2 agonists all reduce production. Prostaglandin FP agonists remodel the ciliary muscle extracellular matrix through matrix metalloproteinases, increasing uveoscleral outflow. Rho kinase inhibitors relax the trabecular meshwork to increase conventional outflow. Prostaglandin analogues are first-line because once-daily dosing gives the largest IOP reduction with few systemic effects.",
    pearl: "Topical timolol is absorbed systemically through the nasolacrimal mucosa, bypassing first-pass metabolism. It can cause bronchospasm in asthma and bradycardia, so punctal occlusion helps. Prostaglandin analogues darken the iris and lengthen eyelashes."
  },
  {
    id: "amd",
    name: "Age-related macular degeneration (dry and wet)",
    short: "AMD",
    organ: "eye",
    organs: ["eye"],
    area: "Ophthalmology",
    summary: "The leading cause of central vision loss in older adults in high-income countries. Dry (atrophic) AMD is commonest; wet (neovascular) AMD causes most rapid, severe loss.",
    pathophys: [
      "Ageing, smoking and genetic risk (complement factor H variants, ARMS2/HTRA1) → oxidative stress in retinal pigment epithelium (RPE)",
      "Lipid and protein debris accumulates between the RPE and Bruch's membrane → drusen",
      "Chronic complement over-activation (C3, C5, membrane attack complex) and inflammation → RPE and photoreceptor death",
      "Dry/late: geographic atrophy, an expanding area of RPE and photoreceptor loss",
      "Wet: hypoxic, damaged RPE releases VEGF → choroidal neovascularisation through Bruch's membrane → leakage, haemorrhage, fibrotic scar"
    ],
    features: "Gradual central blurring, metamorphopsia (straight lines appear wavy) and central scotoma with preserved peripheral vision; wet AMD causes sudden distortion or loss.",
    diagnosis: "Fundoscopy (drusen, atrophy, haemorrhage) with OCT (fluid, atrophy) and OCT-angiography or fluorescein angiography to show neovascularisation; Amsler grid for self-monitoring.",
    treatments: [
      { name: "Aflibercept / ranibizumab / bevacizumab (off-label)", action: "Intravitreal anti-VEGF (wet AMD)", target: "vegf" },
      { name: "Faricimab", action: "Bispecific anti-VEGF-A + anti-angiopoietin-2 (wet AMD)", target: "vegf" },
      { name: "Pegcetacoplan", action: "Intravitreal C3 inhibitor (geographic atrophy)", target: null },
      { name: "Avacincaptad pegol", action: "Intravitreal C5 inhibitor (geographic atrophy)", target: "c5" },
      { name: "AREDS2 supplement", action: "Antioxidant vitamins + zinc + lutein/zeaxanthin: slows progression in intermediate AMD", target: null }
    ],
    targets: ["vegf", "c5"],
    pathways: ["complement"],
    question: "Why does anti-VEGF therapy transform wet AMD but do nothing for geographic atrophy?",
    answer: "In wet AMD the damage comes mainly from VEGF-driven choroidal neovessels that leak fluid and blood under the macula. Blocking VEGF-A shuts down vascular permeability and new vessel growth, so fluid resolves and vision is often stabilised or improved. Repeated injections are needed because VEGF production continues. Geographic atrophy is a degenerative process: chronic complement activation and RPE death, with no neovascular component. Treatment therefore targets complement C3 or C5 instead. This only slows expansion of the atrophic area modestly and does not restore vision.",
    pearl: "Some risk factors can be changed: smoking is the strongest one and should be stopped. Complement inhibitors for geographic atrophy carry a small risk of conversion to neovascular AMD and of intraocular inflammation."
  },
  {
    id: "diabetic-retinopathy",
    name: "Diabetic retinopathy and diabetic macular oedema",
    short: "Diabetic eye",
    organ: "eye",
    organs: ["eye", "vessels"],
    area: "Ophthalmology",
    summary: "The commonest microvascular complication of diabetes and a leading cause of vision loss in working-age adults. Macular oedema is the main cause of visual loss.",
    pathophys: [
      "Chronic hyperglycaemia → AGEs, polyol and PKC pathway activation, oxidative stress in retinal microvasculature",
      "Pericyte loss and basement membrane thickening → microaneurysms and breakdown of the blood–retinal barrier",
      "Leakage of plasma and lipid → intraretinal haemorrhages, hard exudates and macular oedema (DMO)",
      "Capillary closure → retinal ischaemia (cotton-wool spots) → hypoxia-driven VEGF release",
      "VEGF → neovascularisation of disc, retina and iris (proliferative retinopathy) → vitreous haemorrhage, tractional detachment, neovascular glaucoma"
    ],
    features: "Often asymptomatic until macular oedema or proliferative disease develops; blurred central vision, floaters or sudden loss from vitreous haemorrhage.",
    diagnosis: "Regular retinal screening by digital fundus photography, with OCT to detect and quantify macular oedema and fluorescein angiography for ischaemia and neovascularisation.",
    treatments: [
      { name: "Aflibercept / ranibizumab / faricimab", action: "Intravitreal anti-VEGF (centre-involving DMO, proliferative disease)", target: "vegf" },
      { name: "Dexamethasone implant / fluocinolone implant", action: "Intravitreal corticosteroids (DMO)", target: "gr" },
      { name: "Panretinal photocoagulation", action: "Laser ablation of ischaemic retina → ↓VEGF drive", target: null },
      { name: "Glycaemic, blood pressure and lipid control", action: "Slows onset and progression", target: null },
      { name: "Fenofibrate", action: "PPARα agonist: slows retinopathy progression", target: null }
    ],
    targets: ["vegf", "gr"],
    pathways: [],
    question: "How does panretinal photocoagulation, which destroys retina, protect vision in proliferative retinopathy?",
    answer: "Neovascularisation is driven by VEGF released from ischaemic but still metabolically active peripheral retina. Laser burns ablate this tissue and lower the overall oxygen demand of the retina. Oxygen from the choroid can then diffuse more easily to the remaining inner retina. The hypoxic stimulus for VEGF falls, so new vessels regress. Some peripheral and night vision is sacrificed to protect central vision. Anti-VEGF injections block the same signal pharmacologically without destroying tissue, but their effect lasts only while injections continue.",
    pearl: "Rapid improvement in glycaemic control can cause transient early worsening of retinopathy, seen with intensive insulin and with potent GLP-1 agonists. Patients with established retinopathy need eye monitoring when starting intensive glucose-lowering. Pregnancy also accelerates retinopathy."
  },

  // ───────────── Thyroid ─────────────
  {
    id: "graves",
    name: "Graves' disease (hyperthyroidism)",
    short: "Graves'",
    organ: "thyroid",
    organs: ["thyroid", "eye", "heart"],
    area: "Metabolic & endocrine",
    summary: "The commonest cause of hyperthyroidism in iodine-replete regions: an autoimmune disease in which stimulating antibodies activate the TSH receptor. It is much more common in women.",
    pathophys: [
      "Loss of tolerance → B cells produce TSH receptor-stimulating antibodies (TRAb/TSI)",
      "TRAb activate TSHR (Gs → cAMP) independently of TSH → thyroid follicular hyperplasia, diffuse goitre and ↑vascularity",
      "↑TPO-mediated iodination and coupling → excess T4 and T3 secretion; pituitary TSH suppressed by negative feedback",
      "Excess T3 → ↑metabolic rate, ↑β-adrenergic receptor sensitivity, ↑cardiac output",
      "TSHR (with IGF-1R) on orbital fibroblasts → adipogenesis, glycosaminoglycan deposition and muscle swelling → thyroid eye disease"
    ],
    features: "Weight loss, heat intolerance, palpitations, tremor, anxiety, diarrhoea; diffuse goitre with bruit; orbitopathy (proptosis, lid retraction, diplopia) and pretibial myxoedema; complications include AF, osteoporosis and thyroid storm.",
    diagnosis: "Suppressed TSH with raised free T4 and/or T3, positive TSH receptor antibodies; diffusely increased uptake on radioisotope scan if needed.",
    treatments: [
      { name: "Carbimazole / methimazole; propylthiouracil", action: "Thionamides: inhibit thyroid peroxidase (TPO)", target: "thr" },
      { name: "Propranolol", action: "Non-selective β-blocker: rapid symptom control", target: "adrb1" },
      { name: "Radioactive iodine (¹³¹I)", action: "Concentrated by NIS, then destroys follicular cells", target: null },
      { name: "Total thyroidectomy", action: "Definitive surgical treatment", target: null },
      { name: "IV methylprednisolone; teprotumumab", action: "Active moderate–severe orbitopathy (glucocorticoid; anti-IGF-1R antibody)", target: "gr" }
    ],
    targets: ["thr", "adrb1", "gr"],
    pathways: ["gs"],
    question: "Why do carbimazole and β-blockers act on different timescales in Graves' disease?",
    answer: "Thionamides inhibit TPO, the enzyme that iodinates thyroglobulin tyrosines and couples them into T4/T3. They block new hormone synthesis but do not affect hormone already stored in colloid, and T4 has a half-life of about a week. Euthyroidism therefore takes several weeks. Many manifestations of thyrotoxicosis come from increased adrenergic sensitivity, so a β-blocker relieves tremor, palpitations and anxiety within hours. Propylthiouracil also inhibits peripheral deiodinase (T4 → T3 conversion), which is useful in thyroid storm.",
    pearl: "Thionamides can cause agranulocytosis. Patients must stop the drug and get an urgent full blood count if they develop sore throat or fever. Propylthiouracil carries a risk of severe hepatotoxicity and is preferred mainly in the first trimester of pregnancy, when carbimazole/methimazole is teratogenic. Radioiodine can worsen thyroid eye disease, especially in smokers."
  },
  {
    id: "hashimoto",
    name: "Hashimoto's thyroiditis (autoimmune hypothyroidism)",
    short: "Hashimoto's",
    organ: "thyroid",
    organs: ["thyroid"],
    area: "Metabolic & endocrine",
    summary: "The commonest cause of hypothyroidism in iodine-sufficient regions: chronic autoimmune destruction of the thyroid, much more common in women and often associated with other autoimmune diseases.",
    pathophys: [
      "Genetic susceptibility (HLA, CTLA-4 variants) plus triggers (iodine excess, pregnancy, checkpoint inhibitors, interferon) → loss of tolerance to thyroid antigens",
      "Lymphocytic infiltration with germinal centres; anti-TPO and anti-thyroglobulin antibodies",
      "Cytotoxic T cells and apoptosis destroy follicular cells (antibodies are mainly a marker)",
      "↓T4/T3 synthesis → loss of negative feedback → ↑TSH (driving goitre early, atrophy later)",
      "Low T3 → ↓metabolic rate, ↓cardiac output, glycosaminoglycan accumulation (myxoedema), hyperlipidaemia"
    ],
    features: "Fatigue, weight gain, cold intolerance, constipation, dry skin, hair loss, bradycardia, menorrhagia, low mood and slow-relaxing reflexes; goitre may be present; myxoedema coma is the rare severe form.",
    diagnosis: "Raised TSH with low free T4 (subclinical: raised TSH with normal free T4), plus positive anti-TPO antibodies.",
    treatments: [
      { name: "Levothyroxine (T4)", action: "Hormone replacement acting via the thyroid hormone receptor after conversion to T3", target: "thr" },
      { name: "Liothyronine (T3)", action: "Active hormone; occasional use (myxoedema coma, selected cases)", target: "thr" }
    ],
    targets: ["thr"],
    pathways: ["nuclear"],
    question: "Why is levothyroxine (T4) used instead of the active hormone T3, and how is the dose titrated?",
    answer: "T4 is a prohormone with a long half-life (about 7 days), so once-daily dosing gives stable levels. Tissues convert it locally to T3 through deiodinases, which is how T3 is normally supplied. T3 then binds nuclear thyroid hormone receptors (TRα/TRβ) to regulate gene transcription. Liothyronine has a short half-life and produces T3 peaks that can cause palpitations. TSH is the titration marker because the pituitary integrates feedback over weeks. TSH is rechecked 6–8 weeks after a dose change, about five half-lives to reach steady state.",
    pearl: "Levothyroxine absorption is reduced by food, calcium, iron, PPIs and coffee. Take it on an empty stomach, separated from these. Dose requirements rise early in pregnancy, so the dose is usually increased once pregnancy is confirmed."
  },
  {
    id: "thyroid-cancer",
    name: "Thyroid cancer",
    short: "Thyroid ca",
    organ: "thyroid",
    organs: ["thyroid"],
    area: "Oncology",
    summary: "The commonest endocrine malignancy. Most cases are differentiated (papillary or follicular) with an excellent prognosis; medullary and anaplastic types are rarer and more aggressive.",
    pathophys: [
      "Radiation exposure in childhood and genetic predisposition → driver alterations in follicular cells",
      "Papillary: mainly BRAF V600E or RET fusions; follicular: RAS mutations or PAX8–PPARG",
      "Constitutive MAPK signalling → proliferation and ↓expression of the sodium–iodide symporter (NIS) in aggressive tumours",
      "Medullary: activating RET mutations in parafollicular C cells (sporadic or MEN2) → calcitonin and CEA secretion",
      "Further hits (TP53, TERT promoter) → dedifferentiation to anaplastic carcinoma"
    ],
    features: "Painless thyroid nodule or neck mass, cervical lymphadenopathy; hoarseness, dysphagia or rapid growth suggest invasive or anaplastic disease.",
    diagnosis: "Thyroid ultrasound with risk-stratified fine-needle aspiration cytology (Bethesda system), molecular testing of indeterminate nodules, and serum calcitonin when medullary carcinoma is suspected.",
    treatments: [
      { name: "Thyroidectomy ± radioactive iodine", action: "Surgery, then ¹³¹I ablation of remnant/metastases in differentiated cancer", target: null },
      { name: "Levothyroxine (TSH suppression)", action: "Lowers TSH drive to residual differentiated tumour in higher-risk disease", target: "thr" },
      { name: "Lenvatinib / sorafenib", action: "Multikinase (VEGFR-predominant) inhibitors for radioiodine-refractory disease", target: "vegf" },
      { name: "Selpercatinib / pralsetinib", action: "Selective RET inhibitors (medullary and RET fusion-positive)", target: null },
      { name: "Dabrafenib + trametinib", action: "BRAF + MEK inhibitors (BRAF V600E anaplastic)", target: "braf" }
    ],
    targets: ["thr", "vegf", "braf"],
    pathways: ["mapk"],
    question: "Why does radioactive iodine work for differentiated thyroid cancer but not for medullary carcinoma?",
    answer: "Radioiodine relies on the sodium–iodide symporter, which concentrates iodide in thyroid follicular cells. Differentiated papillary and follicular cancers arise from follicular cells and usually keep NIS, so ¹³¹I is taken up and its β-emission kills tumour locally. Raising TSH (by withdrawing levothyroxine or giving recombinant TSH) increases NIS expression before treatment. Medullary carcinoma arises from neural crest-derived C cells, which have no NIS, so radioiodine does not work. Those tumours are treated with surgery and, when advanced, selective RET inhibitors. Strong MAPK activation (e.g. BRAF V600E) can suppress NIS and cause radioiodine-refractory disease.",
    pearl: "Medullary thyroid carcinoma with a germline RET mutation means MEN2. Screen for phaeochromocytoma (and treat it first) before thyroid surgery, and offer genetic testing to relatives."
  },

  // ───────────── Lungs ─────────────
  {
    id: "asthma",
    name: "Asthma",
    short: "Asthma",
    organ: "lungs",
    organs: ["lungs"],
    area: "Respiratory",
    summary: "A common chronic inflammatory airway disease with variable, reversible airflow obstruction and airway hyperresponsiveness, affecting all ages.",
    pathophys: [
      "Allergens, viruses or pollutants damage airway epithelium → release of alarmins (TSLP, IL-33, IL-25)",
      "Alarmins activate dendritic cells, Th2 cells and ILC2s → IL-4, IL-5, IL-13 (type 2 inflammation)",
      "IL-4/IL-13 → IgE class switching; IgE arms mast cells → allergen cross-linking releases histamine, cysteinyl leukotrienes, PGD2",
      "IL-5 → eosinophil maturation and survival; IL-13 → mucus hypersecretion, ↑FeNO, airway hyperresponsiveness",
      "Bronchoconstriction, oedema and mucus plugging → reversible obstruction; chronic remodelling (smooth muscle hypertrophy, subepithelial fibrosis) → fixed obstruction"
    ],
    features: "Episodic wheeze, breathlessness, chest tightness and cough, worse at night or with triggers; acute exacerbations can be life-threatening (silent chest, hypoxia, rising CO₂).",
    diagnosis: "Demonstrated variable airflow obstruction (spirometry with bronchodilator reversibility, peak flow variability or bronchial challenge), supported by raised FeNO or blood eosinophils.",
    treatments: [
      { name: "Budesonide / fluticasone / beclometasone", action: "Inhaled corticosteroids (ICS): suppress airway inflammation", target: "gr" },
      { name: "Formoterol / salmeterol / vilanterol; salbutamol", action: "β2 agonists (LABA with ICS; SABA reliever)", target: "adrb2" },
      { name: "Tiotropium", action: "LAMA: M3 antagonist add-on", target: "m3" },
      { name: "Montelukast", action: "CysLT1 receptor antagonist", target: "cyslt1" },
      { name: "Omalizumab; mepolizumab / benralizumab; dupilumab; tezepelumab", action: "Biologics for severe asthma: anti-IgE; anti-IL-5/IL-5Rα; anti-IL-4Rα; anti-TSLP", target: "il5" }
    ],
    targets: ["gr", "adrb2", "m3", "cyslt1", "ige", "il5", "il4ra"],
    pathways: ["gs", "gq", "eicosanoid", "jakstat"],
    question: "Why do guidelines now recommend ICS–formoterol as reliever instead of salbutamol alone, even in mild asthma?",
    answer: "Salbutamol relieves bronchoconstriction but does nothing to the type 2 inflammation behind exacerbations. SABA-only treatment, and over-reliance on SABA, is associated with more severe attacks and asthma deaths. Using budesonide–formoterol as needed delivers a dose of corticosteroid every time symptoms prompt the patient to use the inhaler, so anti-inflammatory therapy matches disease activity. Formoterol is suitable because it has a rapid onset, like salbutamol, as well as a long duration. In trials this approach cut severe exacerbations compared with SABA alone, using far less steroid than daily maintenance ICS.",
    pearl: "Blood eosinophils and FeNO identify type 2-high severe asthma that responds to biologics. Benralizumab binds IL-5Rα on eosinophils and depletes them by NK cell ADCC. Mepolizumab instead neutralises the IL-5 ligand."
  },
  {
    id: "copd",
    name: "Chronic obstructive pulmonary disease (COPD)",
    short: "COPD",
    organ: "lungs",
    organs: ["lungs", "heart"],
    area: "Respiratory",
    summary: "A common, largely preventable lung disease with persistent, progressive airflow limitation, caused mainly by tobacco smoke and biomass fuel exposure. It is one of the leading causes of death worldwide.",
    pathophys: [
      "Inhaled smoke and particles → epithelial injury and activation of macrophages and neutrophils (CD8⁺ T cells in chronic disease)",
      "Release of proteases (neutrophil elastase, MMP-12) exceeds antiproteases (α1-antitrypsin) + oxidative stress",
      "Destruction of alveolar walls → emphysema with loss of elastic recoil and air trapping",
      "Small airway inflammation, fibrosis and mucus hypersecretion (goblet cell hyperplasia) → chronic bronchitis and fixed obstruction",
      "Hyperinflation, V/Q mismatch → hypoxaemia, hypercapnia, pulmonary hypertension and cor pulmonale"
    ],
    features: "Progressive exertional breathlessness, chronic productive cough and recurrent exacerbations (often viral or bacterial); hyperinflated chest, weight loss, and right heart failure in advanced disease.",
    diagnosis: "Post-bronchodilator spirometry FEV1/FVC <0.70 in a patient with symptoms and exposure; check α1-antitrypsin level, blood eosinophils and imaging.",
    treatments: [
      { name: "Tiotropium / umeclidinium / glycopyrronium", action: "LAMA: M3 antagonism → bronchodilation", target: "m3" },
      { name: "Salmeterol / formoterol / vilanterol / indacaterol", action: "LABA: β2 agonism → bronchodilation", target: "adrb2" },
      { name: "ICS (triple therapy)", action: "Added for frequent exacerbations with raised blood eosinophils", target: "gr" },
      { name: "Roflumilast; ensifentrine", action: "PDE4 inhibitor (chronic bronchitis); inhaled PDE3/4 inhibitor", target: "pde4" },
      { name: "Dupilumab / mepolizumab", action: "Biologics for COPD with eosinophilic (type 2) inflammation", target: "il4ra" },
      { name: "Azithromycin (long-term)", action: "Macrolide: reduces exacerbations in selected patients", target: "ribosome" }
    ],
    targets: ["m3", "adrb2", "gr", "pde4", "il4ra", "il5"],
    pathways: ["gs", "gq"],
    question: "Why are inhaled corticosteroids less effective in COPD than in asthma, and when do they help?",
    answer: "COPD inflammation is mostly neutrophilic and macrophage-driven, not eosinophilic type 2 inflammation, which glucocorticoids suppress most effectively. Oxidative stress from smoke also reduces histone deacetylase-2 activity, the enzyme glucocorticoid receptors recruit to switch off inflammatory genes, causing relative steroid resistance. About a third of patients have raised blood eosinophils. In this group ICS reduce exacerbations, so ICS are added according to blood eosinophil count and exacerbation history. In patients with low eosinophils, ICS mainly add risk, especially pneumonia.",
    pearl: "Bronchodilators improve symptoms. Smoking cessation is the only intervention that clearly slows the decline in lung function, and long-term oxygen improves survival in chronic hypoxaemia. Test for α1-antitrypsin deficiency in young patients or those with basal-predominant emphysema."
  },
  {
    id: "cystic-fibrosis",
    name: "Cystic fibrosis",
    short: "CF",
    organ: "lungs",
    organs: ["lungs", "liver"],
    area: "Respiratory",
    summary: "The commonest life-limiting autosomal recessive disease in people of European ancestry. It is caused by CFTR mutations and affects lungs, pancreas, gut, liver and reproductive tract.",
    pathophys: [
      "Biallelic CFTR mutations; F508del (the commonest) causes misfolding and ER degradation, while gating mutations (e.g. G551D) reach the membrane but stay closed",
      "Loss of apical Cl⁻ and HCO₃⁻ secretion (with relatively increased ENaC-mediated Na⁺ absorption in airways)",
      "Dehydrated airway surface liquid and acidic, viscous mucus → impaired mucociliary clearance",
      "Chronic infection (S. aureus, P. aeruginosa) and neutrophilic inflammation → bronchiectasis and progressive respiratory failure",
      "Thick secretions block pancreatic ducts, bile ducts and vas deferens → exocrine pancreatic insufficiency, CF-related diabetes, liver disease, male infertility"
    ],
    features: "Recurrent chest infections, bronchiectasis, steatorrhoea and failure to thrive, meconium ileus in neonates, distal intestinal obstruction, nasal polyps, CF-related diabetes and salty sweat.",
    diagnosis: "Newborn screening (immunoreactive trypsinogen), confirmed by sweat chloride ≥60 mmol/L and/or two disease-causing CFTR variants.",
    treatments: [
      { name: "Elexacaftor / tezacaftor / ivacaftor", action: "CFTR correctors + potentiator (≥1 F508del or responsive variant)", target: "cftr" },
      { name: "Vanzacaftor / tezacaftor / deutivacaftor", action: "Once-daily corrector + potentiator combination", target: "cftr" },
      { name: "Ivacaftor", action: "CFTR potentiator (gating mutations)", target: "cftr" },
      { name: "Dornase alfa; hypertonic saline", action: "Cleaves neutrophil DNA in sputum; rehydrates airway surface", target: null },
      { name: "Inhaled tobramycin / colistin / aztreonam", action: "Suppress chronic Pseudomonas infection", target: "ribosome" },
      { name: "Pancreatic enzyme replacement", action: "Replaces lipase, protease and amylase", target: null }
    ],
    targets: ["cftr"],
    pathways: [],
    question: "Why does F508del need both a corrector and a potentiator, while G551D responds to ivacaftor alone?",
    answer: "F508del CFTR misfolds and is mostly degraded before it reaches the cell surface. The small fraction that arrives also gates poorly and is unstable. Correctors (elexacaftor, tezacaftor) bind the protein during folding and stabilise it so more reaches the apical membrane. A potentiator (ivacaftor) then raises the channel's open probability. G551D CFTR traffics normally but cannot open in response to ATP, so a potentiator alone restores function. Matching the drug to the molecular defect is the basis of mutation-class-directed therapy.",
    pearl: "Sweat chloride falls substantially on CFTR modulators and serves as an in vivo marker of CFTR function. Modulators are strong CYP3A substrates: CYP3A inducers (rifampicin, carbamazepine, St John's wort) markedly reduce exposure, and strong CYP3A inhibitors require dose reduction."
  },
  {
    id: "ipf",
    name: "Idiopathic pulmonary fibrosis",
    short: "IPF",
    organ: "lungs",
    organs: ["lungs"],
    area: "Respiratory",
    summary: "A progressive fibrosing interstitial lung disease of older adults, commoner in men and ex-smokers, with a poor prognosis (median survival historically 3–5 years without treatment).",
    pathophys: [
      "Repetitive micro-injury to an ageing, genetically susceptible alveolar epithelium (MUC5B promoter variant, telomere-related gene mutations, short telomeres)",
      "Dysfunctional type II alveolar cells fail to regenerate → aberrant wound repair",
      "Release of TGF-β, PDGF, FGF and other mediators → fibroblast recruitment, proliferation and differentiation into myofibroblasts",
      "Excess collagen and extracellular matrix deposition → fibroblastic foci, honeycombing (usual interstitial pneumonia pattern)",
      "Stiff lungs with ↓compliance and impaired gas transfer → restrictive physiology, hypoxaemia, respiratory failure"
    ],
    features: "Progressive exertional dyspnoea and dry cough, bibasal 'velcro' inspiratory crackles and finger clubbing; acute exacerbations, pulmonary hypertension and lung cancer are complications.",
    diagnosis: "HRCT showing a usual interstitial pneumonia pattern (basal, subpleural reticulation and honeycombing) after excluding known causes (connective tissue disease, exposures, drugs), with restrictive spirometry and reduced DLCO.",
    treatments: [
      { name: "Nintedanib", action: "Tyrosine kinase inhibitor of VEGFR, FGFR and PDGFR", target: "vegf" },
      { name: "Pirfenidone", action: "Antifibrotic: reduces TGF-β-driven fibroblast proliferation and collagen synthesis (mechanism incompletely defined)", target: null },
      { name: "Nerandomilast", action: "Preferential PDE4B inhibitor: antifibrotic and anti-inflammatory", target: "pde4" },
      { name: "Supplemental oxygen, pulmonary rehabilitation, lung transplantation", action: "Supportive and definitive care", target: null }
    ],
    targets: ["vegf", "pde4"],
    pathways: ["mapk"],
    question: "Why are antifibrotics, not immunosuppressants, the mainstay of IPF treatment?",
    answer: "IPF is driven mainly by abnormal epithelial repair and fibroblast activation, not by inflammation. Nintedanib blocks the receptor tyrosine kinases for PDGF, FGF and VEGF that drive fibroblast proliferation and migration. Pirfenidone dampens TGF-β-mediated fibroblast activation and collagen production. Both slow the decline in FVC by roughly half, but neither reverses established fibrosis. A trial of prednisone plus azathioprine plus N-acetylcysteine increased deaths and hospitalisations, confirming that immunosuppression harms patients with IPF.",
    pearl: "The main side effects are GI: diarrhoea with nintedanib, and nausea plus photosensitivity rash with pirfenidone (avoid sun exposure). Early transplant referral matters because the disease course is unpredictable."
  },
  {
    id: "nsclc",
    name: "Non-small cell lung cancer",
    short: "NSCLC",
    organ: "lungs",
    organs: ["lungs"],
    area: "Oncology",
    summary: "About 85% of lung cancers and the leading cause of cancer death worldwide. Subtypes are mainly adenocarcinoma and squamous cell carcinoma; driver mutations are particularly common in never-smokers.",
    pathophys: [
      "Tobacco carcinogens (polycyclic aromatic hydrocarbons, nitrosamines), radon, air pollution → DNA damage in airway epithelium",
      "Driver alterations: EGFR, KRAS (G12C mainly in smokers), ALK/ROS1/RET fusions, BRAF V600E, MET exon 14, HER2",
      "Constitutive RTK–RAS–MAPK and PI3K–AKT signalling → proliferation and survival (oncogene addiction)",
      "Loss of tumour suppressors (TP53, STK11, KEAP1) and a high mutational burden in smokers",
      "PD-L1 upregulation and other immune escape → invasion, lymph node, brain, bone, liver and adrenal metastases"
    ],
    features: "Persistent cough, haemoptysis, weight loss, dyspnoea and chest pain; hoarseness, SVC obstruction, Pancoast/Horner syndrome; paraneoplastic hypercalcaemia (PTHrP, squamous); often diagnosed late.",
    diagnosis: "CT chest, PET-CT staging and tissue biopsy with histology, plus broad molecular profiling (NGS for EGFR, ALK, ROS1, KRAS, BRAF, MET, RET, HER2, NTRK) and PD-L1 immunohistochemistry.",
    treatments: [
      { name: "Osimertinib", action: "Third-generation EGFR TKI (also targets T790M)", target: "egfr" },
      { name: "Alectinib / lorlatinib", action: "ALK inhibitors (CNS-penetrant)", target: "alk" },
      { name: "Sotorasib / adagrasib", action: "Covalent KRAS G12C inhibitors", target: "kras" },
      { name: "Dabrafenib + trametinib", action: "BRAF V600E + MEK inhibition", target: "braf" },
      { name: "Pembrolizumab / nivolumab ± ipilimumab", action: "Immune checkpoint inhibitors (anti-PD-1 ± anti-CTLA-4)", target: "pd1" },
      { name: "Platinum doublet chemotherapy (e.g. carboplatin + pemetrexed)", action: "DNA cross-linking + antifolate", target: "dhfr" }
    ],
    targets: ["egfr", "alk", "kras", "braf", "her2", "pd1", "ctla4", "dhfr"],
    pathways: ["mapk", "pi3k", "tcell", "dna"],
    question: "Why does an EGFR-mutant tumour respond dramatically to osimertinib, and how does resistance develop?",
    answer: "Activating EGFR mutations (exon 19 deletions, L858R) make the kinase constitutively active, and the tumour depends on this signal for survival. Blocking it with a TKI triggers rapid apoptosis. First-generation TKIs (gefitinib, erlotinib) usually fail when the gatekeeper mutation T790M emerges and restores ATP affinity. Osimertinib binds covalently to Cys797 and remains active against T790M, so it is now used first-line. Resistance to osimertinib arises from C797S (which removes the covalent binding site), MET amplification, or histological transformation to small cell carcinoma. This is why progression is often re-biopsied.",
    pearl: "Oncogene-driven NSCLC (especially EGFR and ALK) usually responds poorly to PD-1 monotherapy because of low tumour mutational burden. Molecular results should be obtained before starting immunotherapy. Giving osimertinib soon after a checkpoint inhibitor has been linked to severe pneumonitis."
  },

  // ───────────── Heart ─────────────
  {
    id: "heart-failure",
    name: "Heart failure (HFrEF and HFpEF)",
    short: "Heart failure",
    organ: "heart",
    organs: ["heart", "vessels", "kidney"],
    area: "Cardiovascular & renal",
    summary: "A clinical syndrome in which the heart cannot meet the body's demands at normal filling pressures. It is classified by ejection fraction: reduced (HFrEF, ≤40%), mildly reduced, or preserved (HFpEF, ≥50%).",
    pathophys: [
      "Myocardial injury (MI, hypertension, cardiomyopathy, valve disease) or stiffening (age, obesity, diabetes, hypertension in HFpEF)",
      "↓Cardiac output or ↑filling pressure → baroreceptor and renal sensing → activation of RAAS and the sympathetic nervous system",
      "Angiotensin II, aldosterone and noradrenaline → vasoconstriction, Na⁺/water retention and ↑preload and afterload",
      "Chronic neurohormonal drive → myocyte hypertrophy, apoptosis, fibrosis and ventricular remodelling (a vicious cycle)",
      "Natriuretic peptides (ANP/BNP) rise as compensation but are degraded by neprilysin → congestion: pulmonary and peripheral oedema"
    ],
    features: "Breathlessness, orthopnoea, paroxysmal nocturnal dyspnoea, fatigue, ankle oedema, raised JVP, crackles and a third heart sound; arrhythmias and sudden death in HFrEF.",
    diagnosis: "Symptoms and signs plus raised natriuretic peptides (BNP/NT-proBNP), with echocardiography to measure ejection fraction and identify the cause.",
    treatments: [
      { name: "Sacubitril/valsartan (or ACE inhibitor/ARB)", action: "ARNI: neprilysin inhibition + AT1 blockade", target: "nep" },
      { name: "Bisoprolol / carvedilol / metoprolol succinate", action: "β-blockers: reverse remodelling, ↓arrhythmic death", target: "adrb1" },
      { name: "Spironolactone / eplerenone; finerenone", action: "Mineralocorticoid receptor antagonists (finerenone in HFmrEF/HFpEF)", target: "mr" },
      { name: "Dapagliflozin / empagliflozin", action: "SGLT2 inhibitors: benefit across the ejection fraction range", target: "sglt2" },
      { name: "Furosemide / bumetanide", action: "Loop diuretics: relieve congestion (no mortality benefit)", target: "nkcc2" }
    ],
    targets: ["nep", "at1r", "ace", "adrb1", "mr", "sglt2", "nkcc2", "glp1r"],
    pathways: ["raas", "gs"],
    question: "Why does HFrEF need four drug classes (the 'four pillars'), and why do they work in HFrEF but mostly not in HFpEF?",
    answer: "HFrEF progresses through several parallel compensatory systems, each of which drives remodelling. ARNI blocks angiotensin II and increases natriuretic peptides. β-blockers blunt sympathetic toxicity, MRAs block aldosterone-driven fibrosis, and SGLT2 inhibitors add natriuresis with favourable metabolic and renal effects. Each independently reduces mortality, so they are combined and titrated early. HFpEF is a heterogeneous disease of stiffness, obesity, inflammation and comorbidities, not a neurohormonal disease of a dilating ventricle. Most neurohormonal blockers have shown little benefit there. SGLT2 inhibitors (and finerenone, plus GLP-1-based therapy in obese HFpEF) reduce events or improve symptoms.",
    pearl: "Sacubitril/valsartan must not be given within 36 hours of an ACE inhibitor. Both drugs block bradykinin breakdown, and the combination greatly increases angioedema risk. BNP is a neprilysin substrate and rises on ARNI, so use NT-proBNP for monitoring."
  },
  {
    id: "cad-mi",
    name: "Coronary artery disease and myocardial infarction",
    short: "CAD / MI",
    organ: "heart",
    organs: ["heart", "vessels"],
    area: "Cardiovascular & renal",
    summary: "Atherosclerotic narrowing of the coronary arteries causes stable angina and acute coronary syndromes. It is the leading cause of death worldwide.",
    pathophys: [
      "LDL-driven atherosclerotic plaques develop in coronary arteries (see atherosclerosis)",
      "Fixed stenosis limits flow when demand rises → reversible ischaemia (stable angina)",
      "Plaque rupture or erosion exposes collagen and tissue factor → platelet adhesion, activation (TXA2, ADP–P2Y12) and aggregation",
      "Coagulation cascade → thrombin generation and fibrin → occlusive (STEMI) or non-occlusive (NSTEMI) thrombus",
      "Myocyte necrosis spreads from subendocardium to epicardium over hours → arrhythmia, pump failure, then scar and adverse remodelling"
    ],
    features: "Exertional angina; in acute coronary syndrome, crushing central chest pain radiating to arm or jaw with sweating and nausea (atypical in women, older people and diabetes); complications include VF, heart failure, cardiogenic shock and mechanical rupture.",
    diagnosis: "12-lead ECG (ST elevation or ischaemic changes) and serial high-sensitivity troponin; coronary angiography (invasive or CT) defines anatomy.",
    treatments: [
      { name: "Aspirin", action: "Irreversible COX-1 acetylation → ↓platelet TXA2", target: "cox" },
      { name: "Ticagrelor / prasugrel / clopidogrel", action: "P2Y12 antagonists (dual antiplatelet therapy with aspirin)", target: "p2y12" },
      { name: "High-intensity statin ± ezetimibe ± PCSK9 inhibitor", action: "LDL lowering and plaque stabilisation", target: "hmgcr" },
      { name: "Bisoprolol; GTN / isosorbide mononitrate", action: "↓O₂ demand (rate) and venodilation/coronary dilation (NO)", target: "adrb1" },
      { name: "Ramipril", action: "ACE inhibitor: limits post-MI remodelling", target: "ace" },
      { name: "Colchicine (low dose)", action: "Microtubule inhibitor: reduces inflammatory cardiovascular events", target: "tubulin" }
    ],
    targets: ["cox", "p2y12", "hmgcr", "pcsk9", "adrb1", "ace", "tubulin", "fxa", "thrombin"],
    pathways: ["coag", "eicosanoid", "lipid"],
    question: "Why is dual antiplatelet therapy, not anticoagulation alone, the mainstay after MI and stenting?",
    answer: "Arterial thrombi form under high shear and are platelet-rich ('white clots'). Platelet activation is amplified by two main feedback signals: TXA2, made by COX-1, and ADP acting on P2Y12. Aspirin blocks the first and a P2Y12 antagonist the second, so combining them blocks aggregation more than either alone. They also protect stents from thrombosis until the metal is endothelialised. Anticoagulants mainly prevent fibrin-rich venous or atrial clots formed under low flow. Adding them to DAPT sharply increases bleeding, so triple therapy is kept as short as possible.",
    pearl: "Aspirin's antiplatelet effect lasts the platelet's lifespan (about 7–10 days) because anucleate platelets cannot make new COX-1. Clopidogrel is a prodrug activated by CYP2C19, so loss-of-function alleles reduce its effect. Ticagrelor is a reversible, direct-acting alternative."
  },
  {
    id: "atrial-fibrillation",
    name: "Atrial fibrillation",
    short: "AF",
    organ: "heart",
    organs: ["heart", "brain"],
    area: "Cardiovascular & renal",
    summary: "The commonest sustained arrhythmia, rising sharply with age. It increases the risk of ischaemic stroke about fivefold and is a major cause of heart failure.",
    pathophys: [
      "Risk factors (age, hypertension, obesity, alcohol, sleep apnoea, valve disease, thyrotoxicosis) → atrial stretch, fibrosis and ion channel remodelling",
      "Ectopic triggers, mainly from the pulmonary vein sleeves, initiate the arrhythmia",
      "Shortened atrial refractory period and slowed, heterogeneous conduction → multiple re-entrant wavelets/rotors ('AF begets AF')",
      "Chaotic atrial activity → loss of atrial contraction; the AV node filters impulses → irregularly irregular ventricular rhythm",
      "Stasis in the left atrial appendage + endothelial dysfunction → thrombus → cardioembolic stroke; persistent fast rates → tachycardiomyopathy"
    ],
    features: "Palpitations, breathlessness, fatigue, dizziness or no symptoms; irregularly irregular pulse; presents with stroke, heart failure or haemodynamic compromise.",
    diagnosis: "ECG showing an irregularly irregular rhythm without P waves; echocardiography, thyroid function, and stroke risk scoring (CHA₂DS₂-VASc / CHA₂DS₂-VA) with bleeding risk assessment.",
    treatments: [
      { name: "Apixaban / rivaroxaban / edoxaban", action: "Direct factor Xa inhibitors (stroke prevention)", target: "fxa" },
      { name: "Dabigatran", action: "Direct thrombin inhibitor", target: "thrombin" },
      { name: "Warfarin", action: "VKORC1 inhibitor: required for mechanical valves and moderate–severe mitral stenosis", target: "vkorc1" },
      { name: "Bisoprolol; diltiazem / verapamil; digoxin", action: "Rate control (β-blockade; non-dihydropyridine CCB; vagal AV slowing)", target: "adrb1" },
      { name: "Flecainide", action: "Class Ic Na⁺ channel blocker (rhythm control, structurally normal heart)", target: "nav" },
      { name: "Amiodarone / dronedarone", action: "Class III multichannel blockers (rhythm control)", target: "herg" }
    ],
    targets: ["fxa", "thrombin", "vkorc1", "adrb1", "cav12", "nav", "herg"],
    pathways: ["coag"],
    question: "Why does stroke prevention in AF need an anticoagulant and not aspirin?",
    answer: "AF thrombi form in the left atrial appendage under low flow and stasis. Like venous clots, they are fibrin- and red cell-rich, driven by the coagulation cascade more than by platelet activation. Anticoagulants that block thrombin generation (FXa inhibitors, warfarin) or thrombin itself (dabigatran) prevent most of these strokes. Aspirin targets platelet TXA2, which matters little in stasis thrombi. It gives little or no protection and still causes bleeding. Guidelines therefore recommend anticoagulation by stroke risk score, not aspirin.",
    pearl: "Flecainide is contraindicated in structural or ischaemic heart disease, where class Ic drugs increased mortality, probably through proarrhythmia. It can also convert AF to atrial flutter with 1:1 conduction, so it is co-prescribed with an AV-nodal blocker."
  },
  {
    id: "hcm",
    name: "Hypertrophic cardiomyopathy",
    short: "HCM",
    organ: "heart",
    organs: ["heart"],
    area: "Cardiovascular & renal",
    summary: "The commonest inherited heart muscle disease (about 1 in 500 people): unexplained left ventricular hypertrophy, often with outflow tract obstruction, and a leading cause of sudden cardiac death in young people.",
    pathophys: [
      "Autosomal dominant variants in sarcomere genes, most often MYH7 (β-myosin heavy chain) and MYBPC3 (myosin-binding protein C)",
      "Fewer myosin heads held in the energy-sparing 'super-relaxed' state → excess actin–myosin cross-bridges → hypercontractility and ↑ATP consumption",
      "Impaired relaxation, energy deficit and myocyte disarray → asymmetric (often septal) hypertrophy and interstitial fibrosis",
      "Thick septum + systolic anterior motion of the mitral valve → dynamic LV outflow tract obstruction and mitral regurgitation",
      "Diastolic dysfunction, ischaemia and fibrotic scar → heart failure, AF and ventricular arrhythmias"
    ],
    features: "Exertional breathlessness, chest pain, presyncope/syncope and palpitations; ejection systolic murmur that increases with Valsalva or standing; sudden death, AF with stroke and heart failure.",
    diagnosis: "Echocardiography or cardiac MRI showing LV wall thickness ≥15 mm (or ≥13 mm in relatives) without another cause, LVOT gradient measurement (including provocation), plus genetic testing and family screening.",
    treatments: [
      { name: "Bisoprolol / metoprolol; verapamil / diltiazem", action: "Negative inotropes/chronotropes: ↑filling time, ↓obstruction", target: "adrb1" },
      { name: "Mavacamten (aficamten newer)", action: "Cardiac myosin inhibitors: reduce cross-bridge formation", target: "myosin" },
      { name: "Disopyramide", action: "Class Ia antiarrhythmic with negative inotropy", target: "nav" },
      { name: "Septal myectomy / alcohol septal ablation", action: "Mechanical relief of LVOT obstruction", target: null },
      { name: "Implantable cardioverter-defibrillator", action: "Prevents sudden death in high-risk patients", target: null }
    ],
    targets: ["adrb1", "cav12", "myosin", "nav"],
    pathways: ["ecc"],
    question: "How do cardiac myosin inhibitors treat HCM at its root, and why must LVEF be monitored?",
    answer: "HCM mutations shift myosin heads out of the super-relaxed state, so too many cross-bridges form, causing hypercontractility, energy wastage and impaired relaxation. Mavacamten is an allosteric inhibitor of cardiac myosin ATPase. It stabilises the super-relaxed state, reducing the number of heads available to bind actin. This reduces contractility and the LVOT gradient and improves filling and symptoms. Because it works by reducing systolic function, too much effect can cause systolic heart failure. Echocardiographic LVEF monitoring and attention to CYP2C19/CYP3A4 interactions are therefore required.",
    pearl: "In obstructive HCM, avoid vasodilators (nitrates, dihydropyridines, high-dose ACE inhibitors), dehydration and positive inotropes. All of them worsen dynamic obstruction by lowering preload/afterload or increasing contractility."
  },
  {
    id: "attr-cm",
    name: "Transthyretin amyloid cardiomyopathy (ATTR-CM)",
    short: "ATTR-CM",
    organ: "heart",
    organs: ["heart"],
    area: "Cardiovascular & renal",
    summary: "An infiltrative cardiomyopathy caused by deposition of misfolded transthyretin, increasingly recognised as an underdiagnosed cause of heart failure (often HFpEF) in older adults.",
    pathophys: [
      "Transthyretin (TTR), made mainly in the liver, circulates as a tetramer carrying thyroxine and retinol-binding protein",
      "Wild-type ageing or a destabilising TTR variant (e.g. V122I, common in people of West African ancestry; V30M with neuropathy) → tetramer dissociation, the rate-limiting step",
      "Monomers misfold and aggregate → amyloid fibrils deposit in myocardium, ligaments and nerves",
      "Extracellular infiltration → thick, stiff ventricles with restrictive filling, plus direct proteotoxic myocyte injury",
      "Progressive diastolic heart failure, conduction disease and atrial arrhythmias"
    ],
    features: "Heart failure with thickened walls but low-voltage ECG, intolerance of antihypertensives, conduction disease and AF; preceded years earlier by bilateral carpal tunnel syndrome, lumbar spinal stenosis or biceps tendon rupture.",
    diagnosis: "Bone scintigraphy (⁹⁹ᵐTc-PYP/DPD/HMDP) showing grade 2–3 myocardial uptake with no monoclonal protein (serum/urine immunofixation and free light chains) confirms ATTR without biopsy; TTR gene sequencing distinguishes variant from wild-type.",
    treatments: [
      { name: "Tafamidis", action: "TTR stabiliser: binds the thyroxine-binding sites", target: "ttr" },
      { name: "Acoramidis", action: "TTR stabiliser mimicking the protective T119M variant", target: "ttr" },
      { name: "Vutrisiran", action: "siRNA silencer: knocks down hepatic TTR production", target: "ttr" },
      { name: "Patisiran / eplontersen", action: "siRNA / antisense TTR silencers (licensed for variant ATTR polyneuropathy)", target: "ttr" },
      { name: "Loop diuretics", action: "Relieve congestion", target: "nkcc2" }
    ],
    targets: ["ttr", "nkcc2"],
    pathways: [],
    question: "How do TTR stabilisers and TTR silencers attack the same disease from opposite ends?",
    answer: "Amyloid formation requires TTR tetramers to dissociate into monomers, which can then misfold. Stabilisers (tafamidis, acoramidis) bind the thyroxine-binding pockets at the dimer–dimer interface and kinetically stabilise the tetramer, so fewer monomers enter the amyloid pathway. Silencers (vutrisiran, patisiran: siRNA; eplontersen: antisense) degrade TTR mRNA in hepatocytes and lower circulating TTR protein substantially. Either way, less new amyloid is deposited, so progression slows. Existing deposits are not removed, which is why early diagnosis matters.",
    pearl: "A 'monoclonal protein screen' is mandatory before diagnosing ATTR by scintigraphy. AL amyloidosis can also show some tracer uptake, and it is a haematological emergency needing chemotherapy, not a TTR drug."
  },

  // ───────────── Vessels ─────────────
  {
    id: "hypertension",
    name: "Hypertension",
    short: "Hypertension",
    organ: "vessels",
    organs: ["vessels", "heart", "kidney", "brain"],
    area: "Cardiovascular & renal",
    summary: "Persistently raised arterial blood pressure affects over a billion adults. It is the leading modifiable risk factor for stroke, MI, heart failure, CKD and dementia.",
    pathophys: [
      "Most cases are primary: polygenic risk + salt intake, obesity, alcohol, inactivity and ageing",
      "Impaired renal Na⁺ excretion (pressure–natriuresis shifted) and RAAS activation → volume expansion",
      "Sympathetic over-activity and angiotensin II → arteriolar vasoconstriction and ↑peripheral resistance",
      "Endothelial dysfunction (↓NO) and arterial stiffening with age → ↑pulse pressure and systolic pressure",
      "Sustained pressure → LV hypertrophy, small vessel arteriolosclerosis, glomerulosclerosis, retinopathy and accelerated atherosclerosis"
    ],
    features: "Usually asymptomatic; presents through target organ damage (LVH, CKD, retinopathy, stroke, MI) or rarely as a hypertensive emergency.",
    diagnosis: "Confirmed with out-of-office readings (ambulatory or home BP monitoring); assess cardiovascular risk and target organ damage, and screen for secondary causes (primary aldosteronism, renal artery stenosis) in young or resistant cases.",
    treatments: [
      { name: "Ramipril / lisinopril; losartan / candesartan", action: "ACE inhibitors / ARBs", target: "ace" },
      { name: "Amlodipine", action: "Dihydropyridine L-type Ca²⁺ channel blocker", target: "cav12" },
      { name: "Indapamide / chlortalidone", action: "Thiazide-like diuretics: NCC inhibition", target: "ncc" },
      { name: "Spironolactone", action: "MR antagonist: resistant hypertension", target: "mr" },
      { name: "Doxazosin; bisoprolol", action: "α1 blocker; β-blocker (add-on or specific indications)", target: "adra1" }
    ],
    targets: ["ace", "at1r", "cav12", "ncc", "mr", "adra1", "adrb1"],
    pathways: ["raas", "gq"],
    question: "Why are drug classes combined at low doses in hypertension instead of maximising one drug?",
    answer: "Blood pressure is regulated by redundant, interacting systems, so blocking one triggers counter-regulation. A thiazide or calcium channel blocker lowers volume or resistance but reflexly activates renin. Adding an ACE inhibitor or ARB blocks this response, giving additive and sometimes synergistic lowering. Most side effects are dose-dependent, such as amlodipine oedema and thiazide hypokalaemia. Low-dose combinations therefore lower BP more with fewer adverse effects, and single-pill combinations improve adherence. ACE inhibitors and ARBs should not be combined with each other: same pathway, more hyperkalaemia and AKI, no extra benefit.",
    pearl: "In resistant hypertension, screen for primary aldosteronism (aldosterone:renin ratio). It is far more common than once thought, and spironolactone is the most effective fourth-line drug."
  },
  {
    id: "atherosclerosis",
    name: "Atherosclerosis and hypercholesterolaemia",
    short: "Atheroma",
    organ: "vessels",
    organs: ["vessels", "heart", "brain", "liver"],
    area: "Cardiovascular & renal",
    summary: "A chronic, lipid-driven inflammatory disease of large and medium arteries that underlies most MIs, ischaemic strokes and peripheral arterial disease. LDL cholesterol (and other apoB lipoproteins) is causal.",
    pathophys: [
      "ApoB-containing lipoproteins (LDL, remnants, Lp(a)) enter and are retained in the arterial intima at sites of disturbed flow",
      "Retained LDL is oxidised → endothelial activation (VCAM-1) → monocyte recruitment and differentiation into macrophages",
      "Macrophages take up modified LDL via scavenger receptors → foam cells → fatty streak; NLRP3 inflammasome → IL-1β, IL-6",
      "Smooth muscle cells migrate and form a fibrous cap over a necrotic lipid core",
      "Inflammation and MMPs thin the cap → rupture or erosion → thrombosis (MI, stroke); progressive stenosis → angina, claudication"
    ],
    features: "Silent until stenosis or thrombosis: angina, MI, TIA/stroke, claudication, critical limb ischaemia; familial hypercholesterolaemia gives tendon xanthomas and premature disease.",
    diagnosis: "Lipid profile (LDL-C, non-HDL-C, apoB, Lp(a) at least once), cardiovascular risk scores, and imaging (coronary calcium score, carotid ultrasound) where needed.",
    treatments: [
      { name: "Atorvastatin / rosuvastatin", action: "HMG-CoA reductase inhibitors → ↑hepatic LDL receptors", target: "hmgcr" },
      { name: "Ezetimibe", action: "Blocks intestinal NPC1L1 cholesterol uptake", target: "npc1l1" },
      { name: "Evolocumab / alirocumab; inclisiran", action: "PCSK9 antibody; PCSK9 siRNA", target: "pcsk9" },
      { name: "Bempedoic acid", action: "ATP-citrate lyase inhibitor (liver-activated): statin-intolerant patients", target: null },
      { name: "Icosapent ethyl", action: "Purified EPA: residual risk with raised triglycerides", target: null }
    ],
    targets: ["hmgcr", "npc1l1", "pcsk9", "il1b"],
    pathways: ["lipid", "nfkb"],
    question: "Why do statins and PCSK9 inhibitors lower LDL additively, and why do statins actually raise PCSK9?",
    answer: "Statins inhibit hepatic cholesterol synthesis. The fall in intracellular sterol activates SREBP-2, which upregulates LDL receptor transcription, and more LDL receptors clear more LDL from plasma. PCSK9 is also an SREBP-2 target gene, so statins increase PCSK9 secretion. PCSK9 binds LDL receptors and sends them to lysosomal degradation instead of recycling, which partly blunts the statin effect. Blocking PCSK9 lets receptors recycle many times, so the increased receptor number becomes increased receptor activity. This is why adding a PCSK9 inhibitor to a statin lowers LDL-C by roughly another 50–60%.",
    pearl: "Lp(a) is largely genetically determined, barely affected by lifestyle or statins, and an independent causal risk factor. Measure it once in every adult. Statin myalgia is common, but true myopathy is rare; check CK, and consider interacting drugs and hypothyroidism."
  },
  {
    id: "vte",
    name: "Venous thromboembolism (DVT and PE)",
    short: "VTE",
    organ: "vessels",
    organs: ["vessels", "lungs"],
    area: "Haematology & thrombosis",
    summary: "Deep vein thrombosis and pulmonary embolism together form the third commonest cardiovascular disease. PE is a major preventable cause of death in hospital.",
    pathophys: [
      "Virchow's triad: stasis (immobility, surgery, travel), hypercoagulability (cancer, pregnancy, oestrogen, thrombophilia, antiphospholipid syndrome) and endothelial injury",
      "Tissue factor exposure and low flow in venous valve pockets → coagulation cascade → FXa → thrombin generation",
      "Thrombin converts fibrinogen to fibrin and activates platelets → red cell-rich 'red' thrombus propagates along deep veins",
      "Thrombus fragments embolise through the right heart → occlude pulmonary arteries → V/Q mismatch and hypoxaemia",
      "Acute ↑pulmonary vascular resistance → RV dilatation and failure → shock; incomplete resolution → post-thrombotic syndrome or CTEPH"
    ],
    features: "DVT: unilateral painful, swollen calf or leg. PE: pleuritic chest pain, dyspnoea, tachycardia, haemoptysis, hypoxia, syncope or shock.",
    diagnosis: "Clinical probability score (Wells), D-dimer to rule out in low-probability patients, compression ultrasound for DVT and CT pulmonary angiography (or V/Q scan) for PE.",
    treatments: [
      { name: "Apixaban / rivaroxaban / edoxaban", action: "Direct oral FXa inhibitors (first-line for most)", target: "fxa" },
      { name: "Dabigatran", action: "Direct thrombin inhibitor (after parenteral lead-in)", target: "thrombin" },
      { name: "Enoxaparin / dalteparin; unfractionated heparin", action: "Potentiate antithrombin (LMWH mainly anti-FXa)", target: "fxa" },
      { name: "Warfarin", action: "VKORC1 inhibitor (antiphospholipid syndrome, severe renal impairment)", target: "vkorc1" },
      { name: "Alteplase", action: "Systemic thrombolysis for high-risk (haemodynamically unstable) PE", target: null }
    ],
    targets: ["fxa", "thrombin", "vkorc1"],
    pathways: ["coag"],
    question: "Why does warfarin need heparin bridging at the start, while DOACs do not?",
    answer: "Warfarin inhibits VKORC1, so the liver can no longer γ-carboxylate the vitamin K-dependent factors II, VII, IX and X, as well as anticoagulant proteins C and S. Existing factors are cleared at their own half-lives. Factor VII and protein C fall within hours, but prothrombin (II) takes days. Early on, the INR rises before full antithrombotic effect, and the fall in protein C causes transient hypercoagulability (the mechanism of warfarin skin necrosis). Heparin overlap until the INR is therapeutic covers this gap. DOACs directly inhibit FXa or thrombin within hours, so they work from the first dose (apixaban and rivaroxaban need only a higher initial dose).",
    pearl: "DOACs are inferior to warfarin in triple-positive antiphospholipid syndrome (more arterial thrombosis), so warfarin remains preferred there. Unprovoked VTE often warrants indefinite anticoagulation; provoked VTE usually needs about 3 months."
  },
  {
    id: "pah",
    name: "Pulmonary arterial hypertension",
    short: "PAH",
    organ: "vessels",
    organs: ["vessels", "lungs", "heart"],
    area: "Cardiovascular & renal",
    summary: "A rare, progressive disease of the small pulmonary arteries (WHO group 1). It is idiopathic, heritable, or associated with connective tissue disease, drugs, HIV, portal hypertension or congenital heart disease, and leads to right heart failure.",
    pathophys: [
      "Endothelial injury in a susceptible host (BMPR2 loss-of-function variants in heritable PAH)",
      "Imbalance of vasoactive mediators: ↓nitric oxide and ↓prostacyclin, ↑endothelin-1",
      "Vasoconstriction plus proliferation of endothelial and smooth muscle cells → intimal and medial thickening, plexiform lesions",
      "Progressive obliteration of small arteries → ↑pulmonary vascular resistance and pressure",
      "RV pressure overload → hypertrophy, then dilatation and failure → low cardiac output and death"
    ],
    features: "Progressive exertional dyspnoea, fatigue, exertional syncope or chest pain; loud P2, raised JVP, peripheral oedema and hepatomegaly as RV failure develops.",
    diagnosis: "Echocardiography for screening; right heart catheterisation confirms precapillary pulmonary hypertension (mPAP >20 mmHg, PAWP ≤15 mmHg, PVR >2 Wood units) after excluding left heart, lung and thromboembolic causes.",
    treatments: [
      { name: "Sildenafil / tadalafil", action: "PDE5 inhibitors: ↑cGMP in the NO pathway", target: "pde5" },
      { name: "Riociguat", action: "Soluble guanylate cyclase stimulator", target: null },
      { name: "Ambrisentan / macitentan / bosentan", action: "Endothelin receptor antagonists", target: null },
      { name: "Epoprostenol / treprostinil; selexipag", action: "Prostacyclin analogues; oral IP receptor agonist", target: null },
      { name: "Sotatercept", action: "Activin signalling inhibitor: rebalances BMPR2/activin pro-proliferative signalling", target: null },
      { name: "High-dose nifedipine / amlodipine", action: "Only for the minority who are vasoreactive on testing", target: "cav12" }
    ],
    targets: ["pde5", "cav12"],
    pathways: ["gs"],
    question: "Why is PAH treated by targeting three pathways (NO, endothelin, prostacyclin) at once?",
    answer: "PAH endothelium is deficient in two vasodilator and antiproliferative signals, NO–cGMP and prostacyclin–cAMP, and overproduces the vasoconstrictor and mitogen endothelin-1. Each drug class corrects one arm: PDE5 inhibitors or riociguat restore cGMP, ERAs block endothelin receptors, and prostacyclin-pathway drugs raise cAMP. The pathways act independently, so initial combination therapy (typically ERA + PDE5 inhibitor) improves outcomes over monotherapy. Sotatercept adds a fourth, anti-remodelling mechanism by trapping activins and growth differentiation factors that drive vascular cell proliferation.",
    pearl: "Never combine a PDE5 inhibitor with riociguat or nitrates, because of severe hypotension. Endothelin receptor antagonists are teratogenic, so pregnancy prevention is mandatory."
  },

  // ───────────── Liver ─────────────
  {
    id: "masld",
    name: "Metabolic dysfunction-associated steatotic liver disease (MASLD / MASH)",
    short: "MASLD",
    organ: "liver",
    organs: ["liver"],
    area: "GI & hepatology",
    summary: "The commonest chronic liver disease worldwide, affecting about a third of adults. It is hepatic steatosis linked to obesity, type 2 diabetes and dyslipidaemia, and its inflammatory form (MASH) can progress to cirrhosis and hepatocellular carcinoma.",
    pathophys: [
      "Insulin resistance in adipose tissue → ↑lipolysis and free fatty acid flux to the liver",
      "Hyperinsulinaemia and dietary fructose/sugar → ↑hepatic de novo lipogenesis (SREBP-1c, ChREBP); genetic risk from PNPLA3 I148M and TM6SF2",
      "Triglyceride accumulation exceeds oxidation and VLDL export → steatosis",
      "Lipotoxic species (ceramides, diacylglycerols, free cholesterol) → ER stress, mitochondrial dysfunction, hepatocyte ballooning and apoptosis (MASH)",
      "Kupffer cell and gut-derived inflammatory signals → hepatic stellate cell activation → fibrosis → cirrhosis and HCC"
    ],
    features: "Usually asymptomatic with incidental raised ALT or fatty liver on imaging; progression to cirrhosis causes portal hypertension and liver failure. Cardiovascular disease is the commonest cause of death.",
    diagnosis: "Steatosis on imaging plus at least one cardiometabolic risk factor; fibrosis risk stratified with FIB-4, then elastography (VCTE) or ELF test, with biopsy reserved for uncertain cases.",
    treatments: [
      { name: "Lifestyle weight loss (≥7–10%)", action: "Reduces steatosis, inflammation and fibrosis", target: null },
      { name: "Resmetirom", action: "Liver-directed THR-β agonist (MASH with F2–F3 fibrosis)", target: "thr" },
      { name: "Semaglutide", action: "GLP-1 receptor agonist: weight loss and MASH resolution (MASH with F2–F3 fibrosis)", target: "glp1r" },
      { name: "Pioglitazone", action: "PPARγ agonist: improves insulin sensitivity and MASH histology (off-label)", target: "pparg" },
      { name: "Statins", action: "Treat the cardiovascular risk; safe in MASLD", target: "hmgcr" }
    ],
    targets: ["thr", "glp1r", "pparg", "hmgcr"],
    pathways: ["lipid", "insulin", "nuclear", "incretin"],
    question: "How does a thyroid hormone receptor agonist treat fatty liver without causing thyrotoxicosis?",
    answer: "Hepatocytes mainly express TRβ, whereas the heart (tachycardia, arrhythmia) and bone mainly express TRα. Resmetirom is selective for TRβ and is concentrated in the liver by OATP1B1 uptake, so it activates hepatic thyroid hormone signalling with little systemic thyroid effect. Hepatic TRβ activation increases mitochondrial fatty acid β-oxidation and mitophagy, reducing intrahepatic fat and lipotoxicity. It also lowers LDL-C and triglycerides. In MASH with moderate–advanced fibrosis, this improves steatohepatitis and fibrosis histology.",
    pearl: "Fibrosis stage, not inflammation or ALT, is the main predictor of liver-related and overall mortality in MASLD. ALT can be normal with advanced fibrosis, so non-invasive fibrosis scoring (FIB-4 first) is essential."
  },
  {
    id: "ald-cirrhosis",
    name: "Alcohol-related liver disease and cirrhosis",
    short: "ARLD",
    organ: "liver",
    organs: ["liver", "brain", "kidney"],
    area: "GI & hepatology",
    summary: "A spectrum from steatosis to alcohol-related hepatitis and cirrhosis caused by chronic heavy drinking. It is a leading cause of cirrhosis and liver deaths, and cirrhosis from any cause shares the same complications.",
    pathophys: [
      "Ethanol is oxidised by ADH and CYP2E1 → acetaldehyde (forms protein and DNA adducts) and ↑NADH/NAD⁺ ratio",
      "High NADH inhibits fatty acid β-oxidation and promotes lipogenesis → steatosis; CYP2E1 induction → reactive oxygen species",
      "Increased gut permeability → portal endotoxin (LPS) → Kupffer cell TLR4 activation → TNF, IL-1β, IL-8 → neutrophilic hepatitis",
      "Hepatic stellate cells transform into myofibroblasts → collagen deposition → bridging fibrosis and regenerative nodules (cirrhosis)",
      "↑Intrahepatic resistance + splanchnic vasodilation (NO) → portal hypertension → varices, ascites, hepatorenal syndrome; ↓hepatocyte function → encephalopathy and coagulopathy"
    ],
    features: "Steatosis is asymptomatic; alcohol-related hepatitis gives jaundice, tender hepatomegaly and fever; cirrhosis causes ascites, variceal bleeding, hepatic encephalopathy, spider naevi, palmar erythema, gynaecomastia and HCC risk.",
    diagnosis: "Alcohol history with raised AST > ALT (ratio often >2) and GGT, elastography for fibrosis, ultrasound; severity scores (MELD, Child–Pugh; Maddrey/GAHS for alcohol-related hepatitis).",
    treatments: [
      { name: "Abstinence ± acamprosate / naltrexone / baclofen", action: "Treat alcohol use disorder (naltrexone: μ-opioid antagonist; avoid in decompensated disease)", target: "oprm1" },
      { name: "Prednisolone", action: "Glucocorticoid for severe alcohol-related hepatitis (short-term survival)", target: "gr" },
      { name: "Carvedilol / propranolol", action: "Non-selective β-blockers: ↓portal pressure, prevent variceal bleeding", target: "adrb1" },
      { name: "Spironolactone ± furosemide", action: "MR antagonist ± loop diuretic for ascites", target: "mr" },
      { name: "Lactulose + rifaximin", action: "Hepatic encephalopathy: ↓gut ammonia production/absorption", target: null },
      { name: "Terlipressin", action: "V1 agonist: splanchnic vasoconstriction (variceal bleeding, hepatorenal syndrome)", target: null }
    ],
    targets: ["oprm1", "gr", "adrb1", "mr", "nkcc2", "tnf"],
    pathways: ["nfkb"],
    question: "Why are non-selective β-blockers used for portal hypertension when a β1-selective agent is not enough?",
    answer: "Portal pressure depends on intrahepatic resistance and on portal inflow from the splanchnic circulation, which is increased in cirrhosis by hyperdynamic circulation and splanchnic vasodilation. β1 blockade lowers cardiac output and so reduces inflow somewhat. β2 blockade removes β2-mediated vasodilation in the splanchnic arterioles and leaves α1 vasoconstriction unopposed, further reducing portal inflow. Both effects are needed for a meaningful fall in portal pressure, so non-selective agents (propranolol, nadolol) or carvedilol are used. Carvedilol's α1 blockade also lowers intrahepatic resistance.",
    pearl: "Spironolactone is the key ascites diuretic because cirrhosis causes secondary hyperaldosteronism: splanchnic vasodilation reduces effective arterial volume and drives RAAS. Loop diuretics alone work poorly because distal sodium reabsorption is aldosterone-driven."
  },
  {
    id: "hepatitis-b",
    name: "Chronic hepatitis B",
    short: "Hepatitis B",
    organ: "liver",
    organs: ["liver"],
    area: "Infectious disease",
    summary: "Chronic infection with the hepatitis B DNA virus affects over 250 million people worldwide and is a leading cause of cirrhosis and HCC. Infection at birth usually becomes chronic, but adult infection usually clears.",
    pathophys: [
      "HBV enters hepatocytes via the NTCP bile acid transporter; relaxed circular DNA is repaired into covalently closed circular DNA (cccDNA) in the nucleus",
      "cccDNA acts as a stable minichromosome template → pregenomic RNA → reverse-transcribed by the viral polymerase into new DNA genomes",
      "The virus is not directly cytopathic; damage comes from CD8⁺ T cell-mediated killing of infected hepatocytes",
      "Repeated immune-mediated flares → necroinflammation → fibrosis → cirrhosis",
      "Integration of HBV DNA into the host genome and chronic inflammation → HCC, even without cirrhosis"
    ],
    features: "Often asymptomatic; flares cause fatigue, raised transaminases and jaundice; complications include cirrhosis, HCC and extrahepatic disease (polyarteritis nodosa, membranous nephropathy); co-infection with hepatitis D worsens disease.",
    diagnosis: "HBsAg positive for >6 months, with HBeAg/anti-HBe, HBV DNA viral load, ALT and fibrosis assessment to define the phase and need for treatment; check anti-HDV.",
    treatments: [
      { name: "Tenofovir (TDF/TAF) / entecavir", action: "Nucleos(t)ide analogues: inhibit HBV polymerase reverse transcriptase activity", target: null },
      { name: "Pegylated interferon-α", action: "Finite-duration immunomodulator", target: null },
      { name: "Bulevirtide", action: "NTCP entry inhibitor for hepatitis D co-infection", target: null },
      { name: "HBV vaccine (HBsAg)", action: "Prevention, including birth-dose vaccination", target: null }
    ],
    targets: [],
    pathways: [],
    question: "Why do nucleos(t)ide analogues suppress HBV but rarely cure it, unlike the direct-acting antivirals for hepatitis C?",
    answer: "Tenofovir and entecavir block the reverse transcription step, stopping production of new viral DNA and virions. HBV DNA becomes undetectable, inflammation settles and fibrosis can regress. However, cccDNA persists in hepatocyte nuclei as a long-lived template that the polymerase inhibitors do not touch. Integrated HBV DNA can also keep producing HBsAg. Stopping treatment therefore usually leads to relapse, and loss of HBsAg (functional cure) is uncommon. HCV, by contrast, is an RNA virus that replicates only in the cytoplasm with no nuclear reservoir, so blocking replication long enough eradicates it.",
    pearl: "HBV reactivation can be fatal during B cell-depleting therapy (rituximab and other anti-CD20s), chemotherapy and high-dose steroids. Screen HBsAg and anti-HBc before starting, and give antiviral prophylaxis to those at risk."
  },
  {
    id: "hepatitis-c",
    name: "Chronic hepatitis C",
    short: "Hepatitis C",
    organ: "liver",
    organs: ["liver"],
    area: "Infectious disease",
    summary: "A blood-borne RNA virus, spread mainly by injecting drug use and unsafe medical procedures, that becomes chronic in most infected people. It causes cirrhosis and HCC, but is now curable in more than 95% of cases with oral antivirals.",
    pathophys: [
      "HCV (positive-sense RNA flavivirus) infects hepatocytes; its genome is translated as one polyprotein",
      "The NS3/4A protease cleaves the polyprotein; NS5A organises the replication complex; the NS5B RNA-dependent RNA polymerase copies the genome",
      "Error-prone replication → quasispecies that evade antibodies and T cells → chronic infection in most people",
      "Persistent immune-mediated hepatocyte injury and steatosis → stellate cell activation → slow fibrosis over decades (accelerated by alcohol, HIV, obesity)",
      "Cirrhosis → HCC, plus extrahepatic disease (mixed cryoglobulinaemia, membranoproliferative GN, porphyria cutanea tarda, lymphoma)"
    ],
    features: "Usually asymptomatic for years; fatigue; presents with cirrhosis, HCC or extrahepatic manifestations.",
    diagnosis: "Anti-HCV antibody screening, confirmed by HCV RNA (active infection), with fibrosis assessment; cure is defined as undetectable RNA 12 weeks after treatment (SVR12).",
    treatments: [
      { name: "Sofosbuvir / velpatasvir", action: "NS5B nucleotide polymerase inhibitor + NS5A inhibitor (pan-genotypic, 12 weeks)", target: "hcv" },
      { name: "Glecaprevir / pibrentasvir", action: "NS3/4A protease inhibitor + NS5A inhibitor (pan-genotypic, 8 weeks in most)", target: "hcv" },
      { name: "Sofosbuvir / velpatasvir / voxilaprevir", action: "Triple regimen for DAA-experienced patients", target: "hcv" }
    ],
    targets: ["hcv"],
    pathways: [],
    question: "Why are hepatitis C regimens always combinations of DAAs from different classes?",
    answer: "HCV's NS5B polymerase lacks proofreading, and the virus turns over rapidly, so every possible single-point mutation arises daily in an infected person. Monotherapy would quickly select pre-existing resistance-associated substitutions. Combining drugs with different targets (NS5B polymerase, NS5A, NS3/4A protease) means a virus would need several simultaneous resistance mutations to escape. This is vanishingly unlikely. Sofosbuvir also has a high genetic barrier because it binds the conserved polymerase active site. With no latent reservoir, suppressing replication for 8–12 weeks lets infected hepatocytes turn over and clears the virus.",
    pearl: "Screen for HBV before DAAs, because clearing HCV can trigger HBV reactivation in co-infected patients. Sofosbuvir with amiodarone can cause severe bradycardia. Cure does not remove HCC risk in established cirrhosis, so surveillance continues."
  },
  {
    id: "hcc",
    name: "Hepatocellular carcinoma",
    short: "HCC",
    organ: "liver",
    organs: ["liver"],
    area: "Oncology",
    summary: "The commonest primary liver cancer and a leading cause of cancer death worldwide. It arises mostly in cirrhosis (any cause) or chronic hepatitis B.",
    pathophys: [
      "Chronic injury (HBV, HCV, alcohol, MASLD, aflatoxin) → cycles of necrosis and regeneration in a fibrotic, inflamed liver",
      "Telomere shortening and oxidative DNA damage → TERT promoter mutations (early), then CTNNB1 (β-catenin), TP53 and AXIN1 alterations",
      "HBV integration directly disrupts host genes and promotes genomic instability",
      "Dysplastic nodules → HCC with strong arterial neoangiogenesis (VEGF-driven), losing portal venous supply",
      "Immunosuppressive liver microenvironment (PD-L1, regulatory T cells) → immune escape, vascular invasion and intrahepatic spread"
    ],
    features: "Often asymptomatic, found on surveillance; may present with decompensation of known cirrhosis, right upper quadrant pain, weight loss or portal vein thrombosis.",
    diagnosis: "Surveillance ultrasound ± AFP every 6 months in cirrhosis; multiphase CT or MRI showing arterial-phase hyperenhancement with washout (LI-RADS) is diagnostic without biopsy in cirrhotic patients.",
    treatments: [
      { name: "Resection, ablation, transplantation, TACE", action: "Curative or locoregional treatment by stage (BCLC)", target: null },
      { name: "Atezolizumab + bevacizumab", action: "Anti-PD-L1 + anti-VEGF (first-line systemic)", target: "pd1" },
      { name: "Durvalumab + tremelimumab; nivolumab + ipilimumab", action: "Anti-PD-L1/PD-1 + anti-CTLA-4 (first-line systemic)", target: "ctla4" },
      { name: "Lenvatinib / sorafenib", action: "Multikinase (VEGFR-predominant) inhibitors", target: "vegf" },
      { name: "Regorafenib / cabozantinib / ramucirumab", action: "Later-line VEGF-pathway inhibitors (ramucirumab if AFP ≥400 ng/mL)", target: "vegf" }
    ],
    targets: ["pd1", "ctla4", "vegf"],
    pathways: ["tcell", "mapk"],
    question: "Why can HCC be diagnosed by imaging alone, and why is VEGF such an effective target in this cancer?",
    answer: "As nodules progress from dysplasia to HCC, they lose normal portal venous supply and develop unpaired arteries through VEGF-driven neoangiogenesis. On contrast imaging, they therefore enhance brightly in the arterial phase and 'wash out' in the portal venous phase, a pattern specific enough in cirrhosis to make biopsy unnecessary. The same dependence on angiogenesis makes VEGF-pathway blockade effective. VEGF also suppresses dendritic cells and promotes regulatory T cells. Combining anti-VEGF with anti-PD-L1 (atezolizumab + bevacizumab) therefore both starves the tumour and relieves immunosuppression, which is why it outperformed sorafenib.",
    pearl: "Before bevacizumab-based therapy, screen for and treat oesophageal varices endoscopically. Anti-VEGF agents raise the risk of variceal and other bleeding in patients with portal hypertension."
  },
  {
    id: "pbc",
    name: "Primary biliary cholangitis",
    short: "PBC",
    organ: "liver",
    organs: ["liver"],
    area: "GI & hepatology",
    summary: "A chronic autoimmune cholestatic liver disease that destroys small intrahepatic bile ducts. It predominantly affects middle-aged women and can progress to cirrhosis.",
    pathophys: [
      "Loss of tolerance to the E2 subunit of the pyruvate dehydrogenase complex (PDC-E2) on biliary epithelial cells → anti-mitochondrial antibodies (AMA)",
      "Autoreactive CD4⁺ and CD8⁺ T cells attack small interlobular bile ducts (lymphocytic cholangitis, granulomas)",
      "Weakening of the protective biliary 'bicarbonate umbrella' makes cholangiocytes vulnerable to toxic bile acids",
      "Ductopenia → cholestasis → retained hydrophobic bile acids injure hepatocytes",
      "Progressive periportal fibrosis → biliary cirrhosis, portal hypertension and liver failure"
    ],
    features: "Fatigue and pruritus (often before jaundice), xanthelasma, hyperlipidaemia, osteoporosis, fat-soluble vitamin deficiency; associated with Sjögren's syndrome and autoimmune thyroid disease.",
    diagnosis: "Raised alkaline phosphatase with positive AMA (or PBC-specific ANA such as anti-gp210/sp100); biopsy rarely needed.",
    treatments: [
      { name: "Ursodeoxycholic acid (UDCA)", action: "Hydrophilic bile acid: choleretic and cytoprotective (first-line)", target: null },
      { name: "Elafibranor / seladelpar", action: "PPAR agonists (α/δ; δ): ↓bile acid synthesis, anti-cholestatic, anti-pruritic (second-line)", target: null },
      { name: "Bezafibrate (off-label)", action: "Pan-PPAR agonist", target: null },
      { name: "Colestyramine; rifampicin; naltrexone; sertraline", action: "Stepwise treatment of cholestatic pruritus", target: "oprm1" }
    ],
    targets: ["oprm1"],
    pathways: ["nuclear"],
    question: "How does ursodeoxycholic acid protect the liver in PBC, and why is ALP used to judge response?",
    answer: "UDCA is a hydrophilic bile acid that becomes a large share of the bile acid pool. This displaces more toxic hydrophobic bile acids. It stimulates bile flow and bicarbonate secretion, strengthening the biliary bicarbonate umbrella, and reduces bile acid-induced apoptosis. ALP comes from damaged, cholestatic biliary epithelium. Its fall on UDCA reflects reduced biliary injury and predicts transplant-free survival. Patients with inadequate biochemical response after about a year are offered second-line PPAR agonists.",
    pearl: "Fatigue and pruritus can be disabling even in early PBC and do not track disease stage. UDCA does not improve itch, so it needs separate stepwise treatment."
  },

  // ───────────── Stomach ─────────────
  {
    id: "gord",
    name: "Gastro-oesophageal reflux disease",
    short: "GORD",
    organ: "stomach",
    organs: ["stomach"],
    area: "GI & hepatology",
    summary: "Reflux of gastric contents into the oesophagus causing troublesome symptoms or mucosal injury. It is very common in Western populations and the main risk factor for Barrett's oesophagus and oesophageal adenocarcinoma.",
    pathophys: [
      "Transient lower oesophageal sphincter relaxations (vagally mediated), a hypotensive LOS or a hiatus hernia disrupt the antireflux barrier",
      "Obesity, pregnancy and large meals raise intragastric pressure and gastric distension",
      "Acid and pepsin (± bile) reflux into the oesophagus, with impaired oesophageal clearance and salivary neutralisation",
      "Mucosal injury → reflux oesophagitis, erosions, ulceration and peptic stricture",
      "Chronic injury → columnar intestinal metaplasia (Barrett's oesophagus) → dysplasia → adenocarcinoma"
    ],
    features: "Heartburn and acid regurgitation, worse after meals and lying down; atypical chronic cough, hoarseness or asthma; alarm features (dysphagia, weight loss, bleeding, anaemia) need urgent endoscopy.",
    diagnosis: "Usually a clinical diagnosis with response to PPI; endoscopy for alarm features or refractory symptoms, and ambulatory pH-impedance monitoring when the diagnosis is uncertain.",
    treatments: [
      { name: "Omeprazole / lansoprazole / esomeprazole", action: "Proton pump inhibitors: irreversible H⁺/K⁺-ATPase blockade", target: "ppi" },
      { name: "Vonoprazan", action: "Potassium-competitive acid blocker (reversible H⁺/K⁺-ATPase inhibition)", target: "ppi" },
      { name: "Famotidine", action: "H2 receptor antagonist (milder or nocturnal symptoms)", target: "h2" },
      { name: "Alginates / antacids", action: "Raft formation over gastric contents; neutralise acid", target: null },
      { name: "Fundoplication", action: "Surgical reinforcement of the antireflux barrier", target: null }
    ],
    targets: ["ppi", "h2"],
    pathways: ["gs"],
    question: "Why are PPIs taken 30–60 minutes before breakfast, and why are they more effective than H2 antagonists?",
    answer: "PPIs are inactive prodrugs (weak bases) that accumulate in the acidic secretory canaliculus of the parietal cell. There acid converts them into a reactive sulphenamide that binds covalently to cysteines on actively secreting H⁺/K⁺-ATPase pumps. Pumps are activated by eating, so dosing before the first meal means peak drug levels coincide with the most active pumps. The pump is the final common pathway for histamine, gastrin and ACh stimulation, so blocking it suppresses acid more completely than H2 blockade, which leaves gastrin and vagal (ACh) drive intact. Covalent inhibition means acid secretion returns only as new pumps are made.",
    pearl: "Long-term PPI use is linked to hypomagnesaemia, B12 deficiency, C. difficile infection and fractures. Review the indication and step down where possible. Stopping suddenly can cause rebound acid hypersecretion from hypergastrinaemia."
  },
  {
    id: "peptic-ulcer",
    name: "Peptic ulcer disease and Helicobacter pylori",
    short: "Peptic ulcer",
    organ: "stomach",
    organs: ["stomach"],
    area: "GI & hepatology",
    summary: "Gastric and duodenal ulcers caused mainly by H. pylori infection and NSAIDs. Bleeding and perforation are the main life-threatening complications.",
    pathophys: [
      "Mucosal defence (mucus–bicarbonate layer, prostaglandin-dependent blood flow and epithelial repair) is overwhelmed by acid and pepsin",
      "H. pylori survives acid using urease (ammonia buffer), and its virulence factors (CagA, VacA) cause chronic active gastritis",
      "Antral-predominant gastritis → ↓somatostatin-producing D cells → ↑gastrin → acid hypersecretion → duodenal ulcer",
      "NSAIDs inhibit COX-1 → ↓mucosal PGE2/PGI2 → ↓mucus, bicarbonate and blood flow, plus direct topical injury → gastric ulcer",
      "Ulcer erodes through the muscularis mucosae → bleeding (e.g. gastroduodenal artery in posterior duodenal ulcers) or perforation"
    ],
    features: "Epigastric pain (duodenal ulcer classically relieved by eating, gastric worsened), dyspepsia and nausea; upper GI bleeding (haematemesis, melaena) or perforation with peritonitis; many NSAID ulcers are painless.",
    diagnosis: "Non-invasive H. pylori testing (urea breath test or stool antigen, off PPI for 2 weeks) and endoscopy with biopsy for alarm features, older patients and gastric ulcers.",
    treatments: [
      { name: "Omeprazole / lansoprazole / vonoprazan", action: "Acid suppression to heal ulcers", target: "ppi" },
      { name: "Bismuth quadruple therapy (PPI + bismuth + tetracycline + metronidazole)", action: "H. pylori eradication (preferred where clarithromycin resistance is common)", target: "ribosome" },
      { name: "PPI + amoxicillin + clarithromycin", action: "Triple therapy, only if clarithromycin susceptibility is likely or confirmed", target: "pbp" },
      { name: "Misoprostol", action: "PGE1 analogue: prevents NSAID ulcers (contraindicated in pregnancy)", target: null },
      { name: "Endoscopic haemostasis + high-dose IV PPI", action: "Bleeding ulcer management", target: "ppi" }
    ],
    targets: ["ppi", "h2", "cox", "ribosome", "pbp"],
    pathways: ["eicosanoid", "bacteria"],
    question: "Why does H. pylori eradication need a PPI as well as antibiotics, and why has clarithromycin triple therapy declined?",
    answer: "Raising gastric pH with a PPI makes H. pylori replicate more actively, and growing bacteria are more susceptible to antibiotics. It also stabilises acid-labile antibiotics such as amoxicillin and clarithromycin and increases their concentration in gastric mucus. Clarithromycin binds the bacterial 50S ribosome. Point mutations in 23S rRNA confer resistance, and these have become common worldwide, so cure rates of clarithromycin triple therapy have fallen. Bismuth quadruple therapy uses drugs to which resistance matters less. Confirm eradication afterwards with a test of cure.",
    pearl: "PPIs, bismuth and antibiotics suppress H. pylori and cause false-negative breath and stool tests. Stop PPIs 2 weeks and antibiotics/bismuth 4 weeks before testing."
  },
  {
    id: "gastric-cancer",
    name: "Gastric cancer",
    short: "Gastric ca",
    organ: "stomach",
    organs: ["stomach"],
    area: "Oncology",
    summary: "A leading cause of cancer death worldwide, most common in East Asia. Most cases are adenocarcinomas, and H. pylori infection is the main cause of non-cardia disease.",
    pathophys: [
      "Chronic H. pylori gastritis (with salt, smoking, low fruit and vegetable intake) → chronic inflammation",
      "Correa cascade: atrophic gastritis → intestinal metaplasia → dysplasia → intestinal-type adenocarcinoma",
      "Diffuse type: loss of E-cadherin (CDH1, sporadic or hereditary) → discohesive signet-ring cells infiltrating the wall (linitis plastica)",
      "Molecular subgroups include chromosomal instability (HER2 amplification), microsatellite instability (MSI-high), EBV-positive and genomically stable tumours",
      "Local invasion → lymph node, peritoneal and liver metastases; often advanced at diagnosis"
    ],
    features: "Dyspepsia, early satiety, weight loss, anaemia from occult bleeding, dysphagia (cardia tumours), vomiting (pyloric obstruction); Virchow's node, ascites or ovarian (Krukenberg) metastases in advanced disease.",
    diagnosis: "Upper GI endoscopy with multiple biopsies, CT ± PET and staging laparoscopy, with biomarker testing for HER2, PD-L1 (CPS), MSI/MMR and claudin 18.2.",
    treatments: [
      { name: "Gastrectomy + perioperative FLOT chemotherapy", action: "5-FU (thymidylate synthase), leucovorin, oxaliplatin, docetaxel (tubulin)", target: "tyms" },
      { name: "Trastuzumab; trastuzumab deruxtecan", action: "Anti-HER2 antibody; HER2 antibody–drug conjugate", target: "her2" },
      { name: "Nivolumab / pembrolizumab + chemotherapy", action: "Anti-PD-1 checkpoint inhibitors (PD-L1-positive, MSI-high)", target: "pd1" },
      { name: "Zolbetuximab + chemotherapy", action: "Anti-claudin 18.2 antibody (claudin 18.2-positive, HER2-negative)", target: null },
      { name: "Ramucirumab + paclitaxel", action: "Anti-VEGFR2 antibody (second-line)", target: "vegf" }
    ],
    targets: ["tyms", "tubulin", "her2", "pd1", "vegf"],
    pathways: ["mapk", "tcell", "dna"],
    question: "Why do MSI-high gastric cancers respond so well to PD-1 blockade?",
    answer: "Mismatch repair deficiency lets replication errors accumulate, especially frameshift mutations in repetitive sequences. These generate many abnormal peptides (neoantigens) that MHC class I presents. The tumour is therefore heavily infiltrated by cytotoxic T cells but survives by upregulating PD-L1 and other checkpoints. Anti-PD-1 antibodies remove this brake and let pre-existing tumour-specific T cells kill. MSI-high tumours are therefore among the most immunotherapy-responsive. Because of their high response rates, some guidelines now favour immunotherapy-based approaches for them.",
    pearl: "Eradicating H. pylori reduces gastric cancer incidence, including in first-degree relatives of patients. After total gastrectomy, loss of intrinsic factor means lifelong B12 replacement."
  }
);
