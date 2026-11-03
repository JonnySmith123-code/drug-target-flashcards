// Infectious disease: 10 pathogen drug targets (bacterial, viral, fungal).
// Selective toxicity depends on the target being absent from, or structurally different in, human cells.
window.FC_TARGETS.push(
  // ───────────── Infectious disease ─────────────
  {
    id: "pbp", name: "Penicillin-binding proteins (transpeptidases)", short: "PBPs", gene: "pbp genes (e.g. mecA encodes PBP2a in MRSA)",
    family: "Enzyme (serine transpeptidase)", area: "Infectious disease",
    location: "Outer face of the bacterial cytoplasmic membrane (in the periplasm of Gram-negatives)",
    role: "Build the peptidoglycan cell wall: cross-link the peptide side chains of glycan strands so the wall can withstand the cell's high internal osmotic pressure.",
    signalling: [
      "Lipid II (NAG–NAM–pentapeptide ending D-Ala-D-Ala) is flipped across the membrane",
      "Transglycosylases polymerise lipid II into glycan strands",
      "PBP transpeptidase active-site serine attacks the D-Ala-D-Ala bond, releasing the terminal D-Ala",
      "The acyl-enzyme cross-links to a neighbouring peptide → rigid, mesh-like wall",
      "β-lactam mimics D-Ala-D-Ala → irreversibly acylates the serine → no cross-links",
      "Wall weakens while autolysins keep remodelling → osmotic lysis of growing cells"
    ],
    mechanism: "β-lactams (penicillins, cephalosporins, carbapenems) are suicide substrates that covalently inactivate PBPs. Vancomycin acts on the same step differently: it binds the D-Ala-D-Ala substrate itself, not the enzyme.",
    drugs: [
      { name: "Amoxicillin / piperacillin", action: "Penicillins (β-lactams), usually paired with a β-lactamase inhibitor (clavulanate, tazobactam)", use: "Respiratory, urinary, skin and intra-abdominal infections" },
      { name: "Ceftriaxone / ceftazidime-avibactam", action: "Cephalosporins; avibactam is a non-β-lactam β-lactamase inhibitor", use: "Meningitis, pneumonia, gonorrhoea; avibactam combination for resistant Gram-negatives (e.g. KPC producers)" },
      { name: "Meropenem", action: "Carbapenem (broadest β-lactam, stable to most ESBLs)", use: "Severe or ESBL-producing Gram-negative infections" },
      { name: "Vancomycin", action: "Glycopeptide: binds D-Ala-D-Ala of wall precursors (substrate, not PBP)", use: "MRSA (IV), C. difficile (oral, not absorbed)" }
    ],
    question: "Why are β-lactams bactericidal, and why is their killing time-dependent rather than concentration-dependent?",
    answer: "A β-lactam's four-membered ring looks like the D-Ala-D-Ala end of the peptide chain, so the PBP's serine opens it and becomes stuck as a stable acyl-enzyme. Cross-linking stops, but autolysins carry on cutting the wall as the cell grows, so the weakened wall gives way and the cell bursts. They only kill bacteria that are actively building wall, and once PBPs are saturated a higher concentration adds little. What matters is how long free drug stays above the MIC (fT>MIC), which is why they are dosed frequently or by extended or continuous infusion. Mammalian cells have no peptidoglycan, which is the basis of their wide safety margin.",
    pearl: "Resistance: β-lactamases hydrolyse the ring (inhibitors protect the partner drug; avibactam covers KPC and OXA-48 but not metallo-β-lactamases such as NDM). MRSA carries mecA, encoding PBP2a, which has low affinity for almost all β-lactams (ceftaroline is an exception). Gram-negatives also reduce porin entry and increase efflux. VRE replace D-Ala-D-Ala with D-Ala-D-Lac, which vancomycin binds poorly. Allergy (IgE) is to the β-lactam structure. Vancomycin causes infusion flushing ('red man' / vancomycin flushing syndrome) and nephrotoxicity, so levels are monitored.",
    pathways: ["bacteria"]
  },
  {
    id: "ribosome", name: "Bacterial ribosome (30S and 50S subunits)", short: "70S ribosome", gene: "16S rRNA (30S) / 23S rRNA (50S)",
    family: "Ribonucleoprotein (rRNA is the drug target)", area: "Infectious disease",
    location: "Bacterial cytoplasm",
    role: "Translates mRNA into protein. The 30S subunit decodes mRNA against tRNA; the 50S subunit forms peptide bonds and the exit tunnel.",
    signalling: [
      "30S, mRNA and initiator fMet-tRNA join the 50S → 70S initiation complex (linezolid blocks)",
      "Aminoacyl-tRNA enters the A site (tetracyclines block)",
      "16S rRNA decoding centre checks the codon–anticodon match (aminoglycosides cause misreading)",
      "50S peptidyl transferase forms the peptide bond",
      "Growing chain passes through the 50S exit tunnel (macrolides block)",
      "Ribosome translocates and repeats → functional protein"
    ],
    mechanism: "Different classes bind distinct rRNA sites. Bacterial 70S (30S + 50S) differs enough from human cytoplasmic 80S ribosomes for selectivity, but mitochondrial ribosomes are bacterial in origin and are an off-target.",
    drugs: [
      { name: "Gentamicin / amikacin", action: "Aminoglycosides: bind 16S rRNA (30S) → misreading, bactericidal", use: "Severe Gram-negative sepsis, endocarditis (synergy), amikacin for resistant organisms" },
      { name: "Doxycycline", action: "Tetracycline: blocks aminoacyl-tRNA binding at 30S A site (bacteriostatic)", use: "Atypical pneumonia, Lyme disease, rickettsiae, chlamydia, acne, malaria prophylaxis" },
      { name: "Clarithromycin / azithromycin", action: "Macrolides: bind 23S rRNA in the 50S exit tunnel", use: "Atypical pneumonia, H. pylori (clarithromycin), chlamydia (azithromycin)" },
      { name: "Linezolid", action: "Oxazolidinone: binds 50S, prevents 70S initiation complex", use: "MRSA and VRE infections" }
    ],
    question: "How do bacterial ribosome inhibitors achieve selectivity, and how does the same logic explain linezolid myelosuppression and aminoglycoside ototoxicity?",
    answer: "Bacterial ribosomes are 70S, built from 30S and 50S subunits with rRNA sequences that differ from human cytoplasmic 80S ribosomes, so the drugs bind bacterial rRNA far more tightly. Mitochondria, however, descend from bacteria and keep their own bacterial-like ribosomes. Linezolid inhibits mitochondrial protein synthesis, so with longer courses (typically beyond about two weeks) it can cause myelosuppression (especially thrombocytopenia), lactic acidosis and optic or peripheral neuropathy. Aminoglycosides act on mitochondrial ribosomes in cochlear hair cells, causing irreversible hearing loss; carriers of the mitochondrial 12S rRNA variant m.1555A>G make the site more bacteria-like and are exquisitely sensitive. Selectivity is real but relative.",
    pearl: "Aminoglycosides are concentration-dependent with a post-antibiotic effect, so they are given once daily (high peak, low trough to limit nephro- and ototoxicity); uptake needs oxygen, so they do not work against anaerobes. Tetracyclines chelate Ca²⁺, Fe²⁺ and antacids, stain developing teeth and cause photosensitivity and oesophagitis. Macrolides prolong QT; clarithromycin and erythromycin strongly inhibit CYP3A4 (azithromycin does not); erythromycin is a motilin agonist. Resistance: erm methylation of 23S rRNA (macrolides), efflux pumps (macrolides, tetracyclines), aminoglycoside-modifying enzymes. Linezolid is a weak MAO inhibitor (serotonin syndrome with SSRIs).",
    pathways: ["bacteria"]
  },
  {
    id: "gyrase", name: "DNA gyrase / topoisomerase IV", short: "Gyrase / Topo IV", gene: "gyrA / gyrB (gyrase); parC / parE (topo IV)",
    family: "Enzyme (type II topoisomerase)", area: "Infectious disease",
    location: "Bacterial cytoplasm, bound to the chromosome",
    role: "Manage DNA topology. Gyrase introduces negative supercoils to relieve the tension ahead of replication forks; topoisomerase IV separates (decatenates) linked daughter chromosomes after replication.",
    signalling: [
      "Enzyme binds DNA and cuts both strands, forming a covalent enzyme–DNA cleavage complex",
      "A second DNA segment is passed through the break",
      "Break is resealed → supercoils removed or daughter chromosomes unlinked",
      "Fluoroquinolone binds the enzyme–DNA interface (bridged by Mg²⁺) → traps the cleaved complex",
      "Replication forks collide with trapped complexes → double-strand breaks → cell death"
    ],
    mechanism: "Fluoroquinolones are topoisomerase poisons, not simple inhibitors: they turn the enzyme into a DNA-breaking toxin. Gyrase is the main target in Gram-negatives, topoisomerase IV in many Gram-positives.",
    drugs: [
      { name: "Ciprofloxacin", action: "Fluoroquinolone (strongest Gram-negative and Pseudomonas activity)", use: "Complicated UTI, Pseudomonas, prostatitis, some GI infections" },
      { name: "Levofloxacin / moxifloxacin", action: "'Respiratory' fluoroquinolones (better pneumococcal cover)", use: "Community-acquired pneumonia when β-lactams unsuitable; moxifloxacin in some TB regimens" }
    ],
    question: "Why are fluoroquinolones described as topoisomerase 'poisons' and why does this make them rapidly bactericidal?",
    answer: "Gyrase and topo IV must briefly cut both DNA strands to pass another strand through. Fluoroquinolones lodge in the cut, held by a Mg²⁺–water bridge to the enzyme, and stop the reseal step. The enzyme is not just switched off; it is converted into a stable lesion on the chromosome. When replication forks and transcription run into these trapped complexes, they become permanent double-strand breaks that overwhelm repair. Killing is concentration-dependent (AUC/MIC). Human topoisomerase II is much less sensitive, giving selectivity (the same 'poison' idea underlies the anticancer drugs etoposide and doxorubicin).",
    pearl: "Resistance: point mutations in the quinolone-resistance-determining region of gyrA (and parC) step up resistance, plus efflux pumps, reduced porins and plasmid qnr genes. Toxicities: tendinopathy and rupture (Achilles; higher risk in older people and with corticosteroids), QT prolongation, aortic aneurysm/dissection, dysglycaemia, peripheral neuropathy, CNS effects, and high C. difficile risk. Chelation with Ca²⁺, Mg²⁺, Al³⁺, Fe and Zn (antacids, dairy, supplements) slashes absorption. Ciprofloxacin inhibits CYP1A2 (raises theophylline and clozapine). Regulators restrict use to infections where alternatives are unsuitable.",
    pathways: ["bacteria", "dna"]
  },
  {
    id: "hivrt", name: "HIV reverse transcriptase", short: "HIV RT", gene: "pol (RT domain)",
    family: "Enzyme (RNA-dependent DNA polymerase, with RNase H)", area: "Infectious disease",
    location: "Inside the viral capsid in the cytoplasm of infected CD4⁺ T cells, shortly after entry",
    role: "Copies the single-stranded viral RNA genome into double-stranded DNA so it can be integrated into the host genome.",
    signalling: [
      "Virion fuses with the CD4⁺ cell → capsid enters the cytoplasm",
      "RT uses a host tRNA primer to copy viral RNA → RNA:DNA hybrid",
      "RNase H domain degrades the RNA template",
      "RT synthesises the second DNA strand → double-stranded proviral DNA",
      "Proviral DNA is carried to the nucleus for integration (see integrase)"
    ],
    mechanism: "Two classes: NRTIs are nucleoside/nucleotide analogues that are incorporated and terminate the chain; NNRTIs bind an allosteric pocket near the active site and lock the enzyme. RT has no proofreading, so mutation rates are high and drugs are always combined.",
    drugs: [
      { name: "Tenofovir (TAF / TDF)", action: "Nucleotide RT inhibitor (NtRTI), chain terminator", use: "Backbone of most HIV regimens and PrEP; chronic hepatitis B" },
      { name: "Emtricitabine / lamivudine", action: "Cytidine-analogue NRTIs, chain terminators", use: "Paired with tenofovir (e.g. in Biktarvy) or dolutegravir; also active against HBV" },
      { name: "Efavirenz / rilpivirine / doravirine", action: "NNRTIs (allosteric, HIV-1 only)", use: "HIV-1 regimens; rilpivirine is the RT partner in long-acting Cabenuva" }
    ],
    question: "How do NRTIs and NNRTIs inhibit the same enzyme by different mechanisms, and why do they not cross-resist?",
    answer: "NRTIs are prodrugs phosphorylated by host kinases to triphosphates that compete with natural nucleotides. They lack a 3'-OH group, so once RT adds one to the growing DNA no further nucleotide can be joined and the chain terminates. NNRTIs are not incorporated at all: they bind a hydrophobic pocket about 10 Å from the active site, distorting it so catalysis slows dramatically (non-competitive inhibition). Because the binding sites differ, mutations that defeat one class usually leave the other active. The NNRTI pocket is absent in HIV-2, which is why NNRTIs only work against HIV-1. Human DNA polymerases have little affinity for these analogues, although mitochondrial polymerase γ inhibition explains toxicities of older NRTIs.",
    pearl: "M184V (selected by lamivudine/emtricitabine) causes high-level resistance to those two drugs but reduces viral fitness and increases tenofovir susceptibility. NNRTIs have a low genetic barrier: a single mutation (e.g. K103N for efavirenz) can abolish activity. Tenofovir and lamivudine/emtricitabine also inhibit HBV polymerase, so stopping them in co-infection can cause a severe hepatitis flare. TDF causes more renal tubular and bone toxicity than TAF (TAF gives lower plasma tenofovir). Efavirenz causes vivid dreams and neuropsychiatric effects and induces CYP3A4; oral rilpivirine needs food and acid, so PPIs are contraindicated. Islatravir is an RT translocation inhibitor (NRTTI) that keeps its 3'-OH yet still stops chain extension.",
    pathways: ["hiv"]
  },
  {
    id: "hivin", name: "HIV integrase", short: "HIV IN", gene: "pol (IN domain)",
    family: "Enzyme (Mg²⁺-dependent DNA transposase/recombinase)", area: "Infectious disease",
    location: "Pre-integration complex in the cytoplasm and nucleus of infected cells",
    role: "Inserts proviral DNA permanently into the host chromosome, making infection lifelong.",
    signalling: [
      "Integrase binds the ends of viral DNA (forming the intasome)",
      "3'-processing: removes two nucleotides from each 3' end",
      "Complex enters the nucleus",
      "Strand transfer: the processed 3' ends attack host DNA (two Mg²⁺ ions in the active site catalyse this)",
      "Host repair fills the gaps → integrated provirus, transcribed by host machinery"
    ],
    mechanism: "Integrase strand-transfer inhibitors (INSTIs) bind the intasome, chelate the two catalytic Mg²⁺ ions and displace the viral DNA 3' end, so it cannot attack host DNA. Humans have no equivalent enzyme.",
    drugs: [
      { name: "Bictegravir", action: "INSTI", use: "In Biktarvy (bictegravir/emtricitabine/TAF), single-tablet first-line therapy" },
      { name: "Dolutegravir", action: "INSTI", use: "First-line HIV worldwide, including two-drug regimens with lamivudine or rilpivirine" },
      { name: "Cabotegravir", action: "Long-acting injectable INSTI", use: "With rilpivirine as Cabenuva (treatment, monthly or every 2 months); alone as Apretude (PrEP, every 2 months)" }
    ],
    question: "How do integrase inhibitors stop HIV, and why does this make them interact with antacids and iron?",
    answer: "Integrase uses two Mg²⁺ ions to catalyse strand transfer, the step where viral DNA ends are joined into host DNA. INSTIs carry a set of oxygen atoms arranged to grip both metal ions, so they sit in the active site and push the viral DNA end out of position. Integration is blocked and the viral DNA is degraded or forms dead-end circles. That same metal-chelating chemistry means INSTIs also bind polyvalent cations in the gut (Mg²⁺, Al³⁺, Ca²⁺, Fe, Zn in antacids and supplements), forming complexes that are poorly absorbed. They must be separated in time from these products. Second-generation INSTIs (dolutegravir, bictegravir) bind tightly and dissociate slowly, giving a high genetic barrier to resistance.",
    pearl: "Dolutegravir and bictegravir inhibit the renal transporter OCT2, raising serum creatinine slightly without true loss of GFR; dolutegravir also raises metformin levels. INSTI-based regimens are associated with weight gain (more with TAF). Rifampicin induces their metabolism (dose adjustment or avoidance). Resistance to first-generation raltegravir and elvitegravir arises more easily than to dolutegravir/bictegravir. Long-acting cabotegravir leaves a long pharmacokinetic 'tail' after stopping, a window of low levels that can select resistance if HIV is acquired.",
    pathways: ["hiv"]
  },
  {
    id: "hivpr", name: "HIV protease", short: "HIV PR", gene: "pol (PR domain)",
    family: "Enzyme (aspartyl protease, homodimer)", area: "Infectious disease",
    location: "Inside newly budding and released virions",
    role: "Cuts the Gag and Gag-Pol polyproteins into their individual structural proteins and enzymes, so the virion can mature into an infectious particle.",
    signalling: [
      "Host cell translates viral mRNA into Gag and Gag-Pol polyproteins",
      "Polyproteins assemble at the cell membrane and bud as an immature virion",
      "Protease dimerises and cleaves Gag-Pol → matrix, capsid, nucleocapsid, RT, integrase, protease",
      "Capsid protein reassembles into the conical core → mature, infectious virion",
      "Protease inhibitor → immature, non-infectious particles are released"
    ],
    mechanism: "Protease inhibitors (PIs) are transition-state mimics that bind the active site with high affinity. Most are given with a pharmacokinetic booster (ritonavir or cobicistat) to inhibit their CYP3A4 metabolism.",
    drugs: [
      { name: "Darunavir (boosted with ritonavir or cobicistat)", action: "PI; high genetic barrier", use: "First-line or after treatment failure; preferred where adherence is uncertain" },
      { name: "Atazanavir (boosted)", action: "PI", use: "Alternative regimens (less used now)" },
      { name: "Ritonavir / cobicistat", action: "Strong CYP3A4 inhibitors used as boosters (cobicistat has no anti-HIV activity)", use: "Pharmacokinetic enhancement of PIs (and of elvitegravir)" }
    ],
    question: "Why are HIV protease inhibitors given with ritonavir or cobicistat, and what does that mean for drug interactions?",
    answer: "PIs are extensively metabolised by CYP3A4 in the gut wall and liver, so alone they have low and short-lived levels. Low-dose ritonavir (or cobicistat) is a potent CYP3A4 inhibitor, which raises PI concentrations and prolongs their half-life, allowing once-daily dosing and keeping troughs well above the level that selects resistance. The cost is that the booster raises levels of every other CYP3A4 substrate the patient takes. Classic dangers are simvastatin (rhabdomyolysis), inhaled or intranasal fluticasone (Cushing's syndrome and adrenal suppression), some antiarrhythmics and sedatives. Conversely, strong inducers such as rifampicin or St John's wort can drop PI levels and cause virological failure.",
    pearl: "Boosted darunavir has a high genetic barrier: many mutations are needed for resistance. Atazanavir inhibits UGT1A1 and causes benign unconjugated hyperbilirubinaemia (jaundice without liver injury); its absorption needs gastric acid. PIs have been associated with dyslipidaemia. Lenacapavir is a different class, a capsid inhibitor that disrupts capsid assembly and disassembly at several stages; it is given as a twice-yearly subcutaneous injection for multidrug-resistant HIV and for PrEP.",
    pathways: ["hiv"]
  },
  {
    id: "hcv", name: "HCV NS5B polymerase and NS5A", short: "HCV NS5A/NS5B", gene: "NS5B, NS5A, NS3/4A (HCV polyprotein)",
    family: "Viral replication proteins (NS5B: RNA-dependent RNA polymerase; NS5A: non-enzymatic; NS3/4A: serine protease)", area: "Infectious disease",
    location: "Membrane-bound replication complex on the ER of infected hepatocytes",
    role: "NS3/4A cuts the viral polyprotein into functional proteins; NS5A organises the replication complex and virion assembly; NS5B copies the viral RNA genome.",
    signalling: [
      "HCV RNA is translated into a single polyprotein",
      "NS3/4A protease cleaves it into non-structural proteins",
      "NS5A organises membrane 'replication factories' and helps assemble virions",
      "NS5B polymerase copies the RNA genome",
      "New genomes are packaged into virions and released"
    ],
    mechanism: "Direct-acting antivirals (DAAs) hit two or three of these proteins at once. HCV RNA never enters the nucleus and there is no latent reservoir, so clearing replication cures the infection.",
    drugs: [
      { name: "Sofosbuvir", action: "Nucleotide NS5B polymerase inhibitor (chain terminator)", use: "Backbone of pangenotypic regimens" },
      { name: "Sofosbuvir/velpatasvir (Epclusa) / ledipasvir/sofosbuvir (Harvoni)", action: "NS5B + NS5A inhibitor combinations", use: "Chronic HCV; sofosbuvir/velpatasvir is pangenotypic" },
      { name: "Glecaprevir/pibrentasvir (Maviret / Mavyret)", action: "NS3/4A protease inhibitor + NS5A inhibitor", use: "Pangenotypic chronic HCV, often 8 weeks" }
    ],
    question: "Why can HCV be cured with a short course of antivirals when HIV and HBV cannot?",
    answer: "HCV is an RNA virus that replicates entirely in the cytoplasm. It has no DNA stage, does not integrate into the host genome and forms no stable nuclear reservoir like HIV provirus or HBV cccDNA. If replication is suppressed long enough, infected hepatocytes clear or turn over and the virus is gone. Combining a high-barrier NS5B nucleotide inhibitor with a very potent NS5A inhibitor (and/or an NS3/4A protease inhibitor) prevents resistant variants escaping. A sustained virological response 12 weeks after treatment (SVR12) is regarded as cure, achieved in over 95% of patients with modern regimens.",
    pearl: "Sofosbuvir has a high barrier because the NS5B active site is highly conserved; NS5A inhibitors are extremely potent but have a lower barrier (resistance-associated substitutions). HBV can reactivate when HCV is cleared, so screen for HBV first (boxed warning). Severe bradycardia occurs when sofosbuvir is given with amiodarone (contraindicated). NS3/4A protease inhibitors (e.g. glecaprevir) are avoided in decompensated cirrhosis. NS5A inhibitor absorption falls with acid suppression (PPIs). Cure does not protect against reinfection.",
    pathways: []
  },
  {
    id: "flu", name: "Influenza neuraminidase and PA cap-dependent endonuclease", short: "NA / PA endonuclease", gene: "NA (neuraminidase); PA (polymerase acidic subunit)",
    family: "Viral enzymes (glycosidase; endonuclease)", area: "Infectious disease",
    location: "Neuraminidase: surface of the virion and infected cell; PA: within the viral RNA polymerase in the host nucleus",
    role: "PA 'snatches' capped primers from host mRNAs so the viral polymerase can make viral mRNA; neuraminidase cleaves sialic acid so new virions are released and do not clump.",
    signalling: [
      "Haemagglutinin binds sialic acid → virus enters, genome segments go to the nucleus",
      "PA endonuclease cleaves the 5' cap from host pre-mRNAs ('cap-snatching') (baloxavir blocks)",
      "Viral polymerase uses the capped fragment to prime viral mRNA → viral proteins made",
      "New virions bud but stay tethered to sialic acid on the cell surface",
      "Neuraminidase cleaves sialic acid → virions released and spread through mucus (oseltamivir/zanamivir block)"
    ],
    mechanism: "Neuraminidase inhibitors are sialic acid analogues that block the NA active site, so new virions stay stuck to the infected cell. Baloxavir inhibits PA endonuclease, stopping viral mRNA synthesis at an earlier step. Both work against influenza A and B.",
    drugs: [
      { name: "Oseltamivir", action: "Neuraminidase inhibitor (oral prodrug)", use: "Treatment and prophylaxis of influenza A and B" },
      { name: "Zanamivir", action: "Neuraminidase inhibitor (inhaled)", use: "Influenza, including some oseltamivir-resistant strains; avoid in asthma/COPD (bronchospasm)" },
      { name: "Baloxavir marboxil", action: "PA cap-dependent endonuclease inhibitor (single oral dose)", use: "Uncomplicated influenza and post-exposure prophylaxis" }
    ],
    question: "Why must influenza antivirals be started early, ideally within 48 hours of symptoms?",
    answer: "Neither class kills virus or infected cells: they block virus production (baloxavir) or release (neuraminidase inhibitors), so they only help while the virus is still multiplying rapidly. In uncomplicated influenza, viral replication in the airway peaks within the first one to two days and then falls as immunity takes over. Later on, symptoms are driven mainly by the host inflammatory response, which these drugs do not affect. Started early they shorten illness by about a day and reduce viral shedding. In hospitalised or high-risk patients treatment is still given beyond 48 hours because replication can be prolonged.",
    pearl: "H275Y in N1 neuraminidase confers oseltamivir resistance but usually leaves zanamivir active. Baloxavir resistance arises through PA substitutions such as I38T, emerging more often in children. Baloxavir chelates polyvalent cations, so avoid co-administration with dairy, antacids or supplements. Oseltamivir commonly causes nausea (take with food) and needs renal dose adjustment. Amantadine/rimantadine (M2 blockers) are no longer used because of widespread resistance.",
    pathways: []
  },
  {
    id: "mpro", name: "SARS-CoV-2 main protease", short: "Mpro (3CLpro)", gene: "nsp5 (ORF1a/1ab)",
    family: "Enzyme (cysteine protease, Cys–His catalytic dyad)", area: "Infectious disease",
    location: "Cytoplasm of infected respiratory epithelial cells",
    role: "Cuts the large viral polyproteins pp1a and pp1ab at most of their cleavage sites, releasing the non-structural proteins that form the replication–transcription complex.",
    signalling: [
      "Viral RNA is translated into polyproteins pp1a and pp1ab",
      "Mpro dimerises and cleaves them at 11 sites (after a glutamine residue)",
      "Released nsps (including nsp12 RdRp) assemble the replication–transcription complex",
      "RdRp copies the RNA genome and makes subgenomic mRNAs",
      "Structural proteins and genomes assemble into new virions"
    ],
    mechanism: "Mpro inhibitors block polyprotein processing, so no replication machinery is made. Humans have no protease with Mpro's glutamine-after-cleavage specificity, giving selectivity. Remdesivir hits the next step: the RNA polymerase.",
    drugs: [
      { name: "Nirmatrelvir/ritonavir (Paxlovid)", action: "Covalent (reversible) Mpro inhibitor, boosted by ritonavir", use: "Mild–moderate COVID-19 in people at high risk, started within 5 days of symptoms" },
      { name: "Ensitrelvir", action: "Non-covalent Mpro inhibitor (no booster needed)", use: "COVID-19 (approved in Japan)" },
      { name: "Remdesivir", action: "Adenosine nucleotide prodrug; RdRp (nsp12) inhibitor causing delayed chain termination", use: "IV; hospitalised COVID-19 and short outpatient courses in high-risk patients" }
    ],
    question: "Why is nirmatrelvir co-packaged with ritonavir, and why does this make Paxlovid an interaction-heavy drug?",
    answer: "Nirmatrelvir's nitrile group forms a reversible covalent bond with Mpro's catalytic cysteine (Cys145). Alone it is rapidly cleared by CYP3A4, so levels would fall below effective concentrations. Low-dose ritonavir strongly inhibits CYP3A4, keeping nirmatrelvir levels high through the 5-day course. Ritonavir also inhibits CYP3A4 for every other drug the patient takes, so substrates with narrow margins (some statins, antiarrhythmics such as amiodarone, tacrolimus/ciclosporin, certain anticoagulants and sedatives) can reach toxic levels. Strong inducers (rifampicin, carbamazepine, St John's wort) are contraindicated because they reduce nirmatrelvir levels and the inhibition does not offset this.",
    pearl: "Ritonavir's CYP3A4 inhibition persists for a few days after the last dose, so held drugs are restarted with care. Dose reduction is needed in moderate renal impairment. Dysgeusia (metallic taste) is common. Symptom and viral 'rebound' after a course can occur but also happens without treatment, and is not usually due to resistance. Ensitrelvir is itself a CYP3A inhibitor. Remdesivir partly evades the coronavirus proofreading exonuclease (nsp14) because termination is delayed.",
    pathways: []
  },
  {
    id: "cyp51", name: "Fungal lanosterol 14α-demethylase and the ergosterol pathway", short: "CYP51 (ERG11)", gene: "ERG11 (yeasts) / cyp51A (Aspergillus)",
    family: "Enzyme (cytochrome P450)", area: "Infectious disease",
    location: "Endoplasmic reticulum of fungal cells",
    role: "Removes the 14α-methyl group from lanosterol, a key step in making ergosterol, the fungal equivalent of cholesterol that keeps the fungal membrane fluid and functional.",
    signalling: [
      "Squalene → squalene epoxide by squalene epoxidase (terbinafine blocks)",
      "Squalene epoxide → lanosterol",
      "CYP51 demethylates lanosterol (azoles block) → ergosterol",
      "Ergosterol is inserted into the cell membrane (amphotericin B binds it)",
      "Separately, β-1,3-glucan synthase builds the cell wall (echinocandins block)"
    ],
    mechanism: "Azoles bind the haem iron of CYP51 through a ring nitrogen, depleting ergosterol and building up toxic 14α-methylated sterols. Other antifungals hit the same pathway or the cell wall.",
    drugs: [
      { name: "Fluconazole / voriconazole / posaconazole", action: "Triazoles: CYP51 inhibitors", use: "Candida and Cryptococcus (fluconazole); Aspergillus (voriconazole first-line); prophylaxis and mucormycosis (posaconazole)" },
      { name: "Amphotericin B (liposomal)", action: "Polyene: binds ergosterol → membrane pores and sterol extraction (fungicidal)", use: "Cryptococcal meningitis, mucormycosis, severe invasive fungal infection" },
      { name: "Terbinafine", action: "Squalene epoxidase inhibitor (fungicidal for dermatophytes)", use: "Onychomycosis, tinea" },
      { name: "Caspofungin / micafungin", action: "Echinocandins: inhibit β-1,3-D-glucan synthase (FKS1), the cell-wall enzyme", use: "Invasive candidiasis (first-line), including C. auris; salvage for aspergillosis" }
    ],
    question: "Why do azole antifungals cause so many drug interactions, and why is amphotericin B nephrotoxic?",
    answer: "Fungal CYP51 is a cytochrome P450, and azoles work by binding the haem iron at its core. Human P450s share this haem chemistry, so azoles also inhibit human CYP3A4 (and, depending on the drug, CYP2C9 and CYP2C19), raising levels of many co-prescribed drugs such as tacrolimus, statins and vinca alkaloids. Amphotericin B binds ergosterol preferentially, but it also binds cholesterol in human membranes to a lesser degree. In the renal tubules this causes leakiness and afferent vasoconstriction, leading to falling GFR, K⁺ and Mg²⁺ wasting and distal tubular acidosis. Lipid formulations deliver less free drug to the kidney and reduce, but do not abolish, this toxicity.",
    pearl: "Fluconazole does not cover moulds; C. krusei is intrinsically resistant and C. glabrata often less susceptible. Voriconazole: CYP2C19 polymorphisms make levels unpredictable (therapeutic drug monitoring), visual disturbance, hallucinations, photosensitivity and skin cancer with long use, periostitis (fluoride). Most azoles prolong QT; isavuconazole shortens it. Azole resistance: ERG11 mutations or overexpression and efflux pumps; environmental Aspergillus cyp51A mutations (TR34/L98H) from agricultural azole use. Echinocandin resistance comes from FKS mutations. Echinocandins have no human target (no glucan cell wall) and few interactions, but do not cover Cryptococcus. Terbinafine can cause hepatotoxicity and inhibits CYP2D6.",
    pathways: []
  }
);
