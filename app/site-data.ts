export const profiles = [
  { label: "Google Scholar", detail: "Complete publication and citation record", href: "https://scholar.google.com/citations?user=kzGUHjYAAAAJ&hl=en", code: "GS" },
  { label: "ORCID", detail: "0000-0002-9411-2091", href: "https://orcid.org/0000-0002-9411-2091", code: "OR" },
  { label: "Scopus", detail: "Author ID 35237153400", href: "https://www.scopus.com/authid/detail.uri?authorId=35237153400", code: "SC" },
  { label: "Web of Science", detail: "Researcher record 1089074", href: "https://www.webofscience.com/wos/author/record/1089074", code: "WS" },
  { label: "Kean profile", detail: "Official institutional directory", href: "https://www.kean.edu/directory/supratik-kar", code: "KU" },
  { label: "Kean Research", detail: "142 research outputs and collaborations", href: "https://researchers.kean.edu/en/persons/supratik-kar/", code: "KR" },
  { label: "Old Research website", detail: "Wix research archive", href: "https://supratikkar.wixsite.com/website", code: "WX" },
];

export const researchAreas = [
  { number: "01", title: "Computer-aided drug design", text: "Ligand- and structure-based discovery, virtual screening, molecular docking, dynamics, network pharmacology and drug repurposing.", tags: ["CADD", "Cheminformatics", "Docking", "Molecular dynamics"], flow: ["Targets & ligands", "Docking + simulation", "Prioritized leads"] },
  { number: "02", title: "Predictive toxicology", text: "Mechanistically interpretable QSAR, q-RASAR and read-across models for human toxicity, drug safety and chemical data-gap filling.", tags: ["QSAR", "q-RASAR", "Risk assessment"], flow: ["Chemical structure", "Interpretable models", "Safety evidence"] },
  { number: "03", title: "Environmental chemoinformatics", text: "Prediction and prioritization of PFAS, pesticides, pharmaceuticals, mixtures and emerging contaminants across species.", tags: ["PFAS", "Ecotoxicity", "Mixtures"], flow: ["Contaminant space", "Cheminformatics", "Ecological priority"] },
  { number: "04", title: "Nanomaterial safety", text: "Periodic-table descriptors, nano-QTTR and inter-cell-line modeling to explain cellular uptake and metal-oxide nanotoxicity.", tags: ["Nano-QSAR", "Descriptors", "Uptake"], flow: ["Nano descriptors", "Mechanistic QSTR", "Safer materials"] },
  { number: "05", title: "Materials & clean energy", text: "QSPR- and quantum-informed design of dye sensitizers, fullerene acceptors and high-efficiency solar-cell materials.", tags: ["QSPR", "Solar cells", "Materials informatics"], flow: ["Candidate structures", "QSPR + quantum", "Energy performance"] },
  { number: "06", title: "Trustworthy model validation", text: "Metrics and decision tools that communicate applicability, rank-order performance and prediction reliability.", tags: ["r²m metrics", "Applicability domain", "Reliability"], flow: ["New prediction", "Domain + reliability", "Trust decision"] },
];

export const books = [
  { kind: "Textbook · Elsevier", year: "2015", title: "Understanding the Basics of QSAR for Applications in Pharmaceutical Sciences and Risk Assessment", href: "https://shop.elsevier.com/books/understanding-the-basics-of-qsar-for-applications-in-pharmaceutical-sciences-and-risk-assessment/roy/978-0-12-801505-6" },
  { kind: "Textbook · Springer", year: "2015", title: "A Primer on QSAR/QSPR Modeling: Fundamental Concepts", href: "https://link.springer.com/book/10.1007/978-3-319-17281-1" },
  { kind: "Edited book · Springer", year: "2026", title: "Handbook of Chem- and Bioinformatics", href: "https://link.springer.com/book/10.1007/978-3-031-81728-1" },
  { kind: "Edited book · Springer", year: "2023", title: "Current Trends in Computational Modeling for Drug Discovery", href: "https://link.springer.com/book/10.1007/978-3-031-33871-7" },
  { kind: "Edited book · Springer", year: "2020", title: "Development of Solar Cells — Theory and Experiment", href: "https://link.springer.com/book/10.1007/978-3-030-69445-6" },
];

export const publications = [
  { year: "2026", journal: "Expert Opinion on Drug Metabolism & Toxicology", title: "Inavolisib: a second-generation PI3Kα inhibitor in HR+/HER2-negative breast cancer", meta: "22 · 483–494", href: "https://doi.org/10.1080/17425255.2026.2710110" },
  { year: "2026", journal: "Scientific Reports", title: "KidneyTox_v1.0 enables explainable artificial intelligence prediction of nephrotoxicity in small molecules", meta: "16 · 5099", href: "https://doi.org/10.1038/s41598-026-35496-4" },
  { year: "2026", journal: "ACS Omega", title: "KOC-WebPredictor: An open-access tool for prediction and insights into soil sorption", meta: "11 · 19083–19093", href: "https://doi.org/10.1021/acsomega.5c11696" },
  { year: "2026", journal: "Aquatic Toxicology", title: "Biomarker-guided q-RASAR modeling of antibiotics–microplastics mixtures", meta: "107819", href: "https://doi.org/10.1016/j.aquatox.2026.107819" },
  { year: "2026", journal: "In Silico Research in Biomedicine", title: "Targeting Nipah virus matrix protein through QSAR, docking, MD and metadynamics", meta: "2 · 100352", href: "https://doi.org/10.1016/j.insi.2026.100352" },
  { year: "2025", journal: "WIREs Computational Molecular Science", title: "From feature-based chemical similarity to chemical language models", meta: "15 · e70057", href: "https://doi.org/10.1002/wcms.70057" },
  { year: "2025", journal: "Journal of Hazardous Materials", title: "Integrative QSAR and q-RASAR modeling for Danio rerio toxicity", meta: "497 · 139710", href: "https://doi.org/10.1016/j.jhazmat.2025.139710" },
  { year: "2025", journal: "Science of the Total Environment", title: "Chemical space, scaffold diversity and machine-learning studies of pesticide toxicity", meta: "1001 · 180489", href: "https://doi.org/10.1016/j.scitotenv.2025.180489" },
  { year: "2025", journal: "ACS Omega", title: "pDILI_v1: A web-based machine-learning tool for drug-induced liver injury", meta: "10 · 13502–13514", href: "https://doi.org/10.1021/acsomega.5c00075" },
  { year: "2025", journal: "Ecotoxicology and Environmental Safety", title: "Decoding cyanide toxicity: Integrating QSTR with species sensitivity distributions and q-RASAR modeling", meta: "291 · 117824", href: "https://doi.org/10.1016/j.ecoenv.2025.117824" },
  { year: "2025", journal: "Computational Biology and Chemistry", title: "Ligand-based cheminformatics and free-energy-inspired simulations for prioritizing GRK6 inhibitors", meta: "115 · 108347", href: "https://doi.org/10.1016/j.compbiolchem.2025.108347" },
  { year: "2024", journal: "Journal of Hazardous Materials", title: "In silico modeling of aquatic toxicity of organic chemicals to three trout species", meta: "136060", href: "https://www.sciencedirect.com/science/article/pii/S0304389424026396" },
  { year: "2024", journal: "Scientific Reports", title: "Protracted molecular dynamics to identify dual-target inhibitors of Nipah virus", meta: "14 · 3696", href: "https://www.nature.com/articles/s41598-024-54281-9" },
  { year: "2024", journal: "Science of the Total Environment", title: "First report on chemometric modeling of tilapia fish aquatic toxicity", meta: "910 · 167991", href: "https://doi.org/10.1016/j.scitotenv.2023.167991" },
  { year: "2024", journal: "Molecular Diversity", title: "Exploring monkeypox: From genomic insights to prospective targeted therapies", meta: "Review", href: "https://doi.org/10.1007/s11030-023-10767-8" },
  { year: "2023", journal: "Molecules", title: "Computational modeling of human serum albumin binding of PFAS", meta: "28 · 5375", href: "https://www.mdpi.com/1420-3049/28/14/5375" },
  { year: "2023", journal: "Computers in Biology and Medicine", title: "Quinolone derivatives targeting Nipah virus glycoprotein attachment", meta: "163 · 107240", href: "https://doi.org/10.1016/j.compbiomed.2023.107240" },
  { year: "2023", journal: "Structural Chemistry", title: "Are we ready to fight the Nipah virus pandemic?", meta: "Review", href: "https://doi.org/10.1007/s11224-023-02148-6" },
  { year: "2023", journal: "Nanotoxicology", title: "q-RASAR predictions of multicomponent nanoparticle cytotoxicity", meta: "Research article", href: "https://doi.org/10.1080/17435390.2023.2186280" },
  { year: "2023", journal: "Aquatic Toxicology", title: "Ecotoxicity of COVID-19 pharmaceuticals: An in silico risk assessment", meta: "256 · 106416", href: "https://doi.org/10.1016/j.aquatox.2023.106416" },
  { year: "2022", journal: "Nanotoxicology", title: "Mixture cytotoxicity of metal oxide nanoparticles to Escherichia coli", meta: "Research article", href: "https://doi.org/10.1080/17435390.2022.2123750" },
  { year: "2022", journal: "Chemosphere", title: "Androgen receptor binding affinity using 2D-QSAR and read-across", meta: "309 · 136579", href: "https://www.sciencedirect.com/science/article/pii/S0045653522030727" },
  { year: "2022", journal: "Chemical Reviews", title: "Green chemistry in the synthesis of pharmaceuticals", meta: "122 · 3637–3710", href: "https://doi.org/10.1021/acs.chemrev.1c00631" },
  { year: "2022", journal: "SAR and QSAR in Environmental Research", title: "Potential antivirals against 3CLpro for treatment of SARS-CoV-2", meta: "33 · 357–386", href: "https://doi.org/10.1080/1062936X.2022.2055140" },
  { year: "2021", journal: "Chemosphere", title: "Mechanistic evaluation of metal oxide nanoparticle cytotoxicity", meta: "264 · 128428", href: "https://doi.org/10.1016/j.chemosphere.2020.128428" },
];

export const tools = [
  { state: "Live tool", title: "MammalTox", text: "Open-access computational screening of mammalian toxicity for rapid, responsible chemical-safety assessment.", href: "https://mammaltox.streamlit.app/", link: "Launch MammalTox" },
  { state: "Live tool", title: "KidneyTox_v1.0", text: "Explainable AI classification of small-molecule nephrotoxicity with applicability-domain and SHAP interpretation.", href: "https://kidneytoxv1.streamlit.app/", link: "Launch KidneyTox" },
  { state: "Live tool", title: "KOC-WebPredictor", text: "QSAR and machine-learning predictions of soil organic-carbon sorption.", href: "https://koc-predictorv1.streamlit.app/", link: "Launch KOC-WebPredictor" },
  { state: "Live tool", title: "pDILI_v1", text: "Screening and visualization of drug-induced liver-injury risk.", href: "https://pdiliv1web.streamlit.app/", link: "Launch pDILI" },
  { state: "Validation method", title: "Prediction Reliability Indicator", text: "Classifies QSAR predictions while reporting applicability-domain context.", href: "https://doi.org/10.1021/acsomega.8b01647", link: "Read the paper" },
  { state: "Validation metrics", title: "r²m and r²m(rank)", text: "Metrics for numerical agreement and rank-order quality.", href: "https://doi.org/10.1007/s00204-022-03252-y", link: "View overview" },
  { state: "Modeling method", title: "Intelligent consensus", text: "Interpretation-aware combination of QSAR/QSPR/QSTR models.", href: "https://doi.org/10.1002/cem.2992", link: "Read the paper" },
];

export const grants = [
  { period: "2026–2029", agency: "USDA NIFA", amount: "$200,000", title: "Identifying mechanisms of insect repellence in polypore fungi", detail: "Collaborative Research: RUI · Grant 2026-67039-45932 · with Dr. Maria Shumskaya" },
  { period: "2025–2028", agency: "National Science Foundation", amount: "$455,029", title: "Identifying mechanisms of insect repellence in polypore fungi", detail: "Collaborative Research: RUI · Award 2447179 · with Dr. Maria Shumskaya" },
  { period: "2022–2025", agency: "U.S. Environmental Protection Agency", amount: "$725,000 project", title: "Protein binding affinity as the driver for studying PFAS mixture toxicity", detail: "$166,224 Kean subaward · collaboration with Purdue University" },
  { period: "2024–2026", agency: "Kean University", amount: "$25,000", title: "Student Partnering Faculty awards", detail: "Two consecutive awards supporting mentored undergraduate research" },
  { period: "2022", agency: "Kean University Dean’s Office", amount: "~$20,000", title: "Institutional seed funding", detail: "Seed support for research development and laboratory activities." },
  { period: "2023–2026", agency: "Kean University Dean’s & Provost Offices", amount: "$10,000", title: "Institutional research fund", detail: "Research support provided jointly through the Dean’s and Provost’s offices." },
];


export const currentMembers = [
  { name: "Lihui Xin", program: "Cell & Molecular Biology · CURF", image: "/people/lih-xin.webp", focus: "Computational prediction of drug behavior, toxicity and biological interactions." },
  { name: "Shiuli Roy", program: "Cell & Molecular Biology", image: "/people/shiuli-roy.webp", focus: "In silico modeling of cardiotoxicity." },
  { name: "Melanie Rios", program: "Biology", image: "/people/melanie-rios.webp", focus: "Anti-aging drug discovery through CADD and in silico PFAS toxicity modeling." },
  { name: "Sara Calvo Londono", program: "CURF researcher", focus: "Undergraduate computational research in the CMM Laboratory." },
];

export const alumni = [
  { name: "Lu Li", image: "/people/lu-li.webp", bullets: ["Incoming graduate student at Johns Hopkins University.", "Co-authored 5 peer-reviewed publications, including 4 in top-tier journals.", "Undergraduate Researcher Honorable Mention, Kean Research Days 2026.", "Projects: fish aquatic toxicity modeling and CADD for Zika virus."] },
  { name: "Jonelle Brown", image: "/people/jonelle-brown.webp", bullets: ["Recent CMM Laboratory alumna; post-graduation placement update pending.", "Published a Bentham book chapter; two Q1 manuscripts developed.", "Supported through NIH-URISE and Student Partnering Faculty awards.", "Project: computer-aided drug discovery for Zika virus."] },
  { name: "Salma Abdallah", image: "/people/salma-abdallah.webp", bullets: ["CMM Laboratory alumna in Biology and former CURF researcher.", "Research on computational advances in Zika virus drug and vaccine design."] },
  { name: "Diego Amariles Salazar", bullets: ["CMM Laboratory alumnus and former CURF researcher.", "Participated in undergraduate computational research and molecular modeling."] },
  { name: "Juxei Lu", bullets: ["CMM Laboratory alumna and former undergraduate researcher.", "Participated in computational chemistry and molecular modeling research."] },
  { name: "Siyun Yang", image: "/people/siyun-yang.webp", bullets: ["Ph.D. student, Icahn School of Medicine at Mount Sinai.", "Kean Research Student of the Year 2024; first prize poster at William Paterson University.", "3 Q1 papers, 1 Q2 paper and 2 book chapters; 5 conference presentations."] },
  { name: "Andrea Gallagher", image: "/people/andrea-gallagher.webp", bullets: ["Medical student, Hackensack Meridian School of Medicine.", "3 Q1 papers and 4 national conference presentations.", "Research on PFAS protein binding and fish aquatic toxicity."] },
  { name: "Daniela Grajales", image: "/people/daniela-grajales.webp", bullets: ["Ph.D. student in Toxicology, Rutgers University.", "Published 1 Q1 and 1 Q2 paper.", "Research on PFAS mixture toxicity and computational therapeutics."] },
  { name: "Mariela Nunez", image: "/people/mariela-nunez.webp", bullets: ["Medical laboratory science training with plans to pursue nursing.", "Published 1 Q1 paper and 1 book chapter.", "Research on ritlecitinib and JAK3 inhibition in alopecia areata."] },
  { name: "Nermala Sewadat", image: "/people/nermala-sewadat.webp", bullets: ["Research & Innovation Technologist, MANE USA.", "Published 1 Q1 paper; additional Q1 work developed.", "Research on computational toxicity of chemicals in e-cigarettes."] },
  { name: "Kevin Mata", bullets: ["Perfumery Application Laboratory Technician, Agilex, USA.", "Developed Q1 research on computational toxicity of e-cigarette chemicals."] },
  { name: "Kelly Molinare", bullets: ["Analytical Chemist, Robertson Microlit Laboratories.", "Developed Q1 work on PFAS protein binding and bioconcentration."] },
  { name: "Maria Baquero", image: "/people/maria-baquero.webp", bullets: ["CMM Laboratory alumna in Chemistry.", "Developed Q1 work on PFAS protein binding and bioconcentration."] },
  { name: "Brayan Martinez", image: "/people/brayan-martinez.webp", bullets: ["Graduate researcher in Computer Science, 2024–2025.", "Full Graduate Research Assistant scholarship.", "Developed Q1 work on placental transfer of environmental chemicals."] },
];

export const awards = [
  { year: "2026", title: "Kean University Student Research Mentor Award", text: "Recognition of sustained undergraduate research, student authorship and career outcomes." },
  { year: "2025", title: "Top 2% Scientists in the World — single-year 2024", text: "Science-wide standardized citation indicators, September 2025 data update, Mendeley Data V8.", href: "https://doi.org/10.17632/btchxktzyw.8" },
  { year: "2025", title: "Excellence in Research Award — Basic Science", text: "Office of Research and Sponsored Programs, Kean University · May 9, 2025." },
  { year: "2025", title: "Author Service Award — Molecular Diversity", text: "Presented by Springer Nature · May 2025." },
  { year: "2025", title: "Contribution Award — Molecular Diversity", text: "Presented by Springer Nature · May 2025." },
  { year: "2025", title: "Inducted into Phi Kappa Phi", text: "Faculty induction into the nation’s oldest and most selective all-discipline honor society." },
  { year: "2025–26", title: "Research release time", text: "Six teaching-contact-hour research release from Kean University." },
  { year: "2024", title: "Presidential Excellence Award", text: "Kean University award for Scholarship, Research, and Creative Work." },
  { year: "2024", title: "Top 2% Scientists — career-long 2023", text: "Science-wide citation indicators, September 2024 update, Mendeley Data V7.", href: "https://doi.org/10.17632/btchxktzyw.7" },
  { year: "2024", title: "Top 2% Scientists — single-year 2023", text: "Science-wide citation indicators, September 2024 update, Mendeley Data V7.", href: "https://doi.org/10.17632/btchxktzyw.7" },
  { year: "ScholarGPS", title: "Top 0.5% worldwide distinction", text: "Top 0.88% lifetime and top 0.15% over the last five years across all fields, excluding self-citations.", href: "https://scholargps.com/overview" },
  { year: "2024–25", title: "Research release time", text: "Six teaching-contact-hour research release from Kean University." },
  { year: "2023", title: "Top 2% Scientists — single-year 2022", text: "Science-wide citation indicators, Mendeley Data V6.", href: "https://doi.org/10.17632/btchxktzyw.6" },
  { year: "2023–24", title: "Research release time", text: "Six teaching-contact-hour research release from Kean University." },
  { year: "2022–23", title: "Research release time", text: "Six teaching-contact-hour research release from Kean University." },
  { year: "2022", title: "Lush Prize Young Researcher Award shortlist", text: "Shortlisted for research advancing alternatives to animal testing.", href: "https://lushprize.org/2022-prize/2022-prize-shortlist/" },
  { year: "2021", title: "Top 2% Scientists — single-year 2020", text: "Science-wide citation indicators, Mendeley Data V3.", href: "https://doi.org/10.17632/btchxktzyw.3" },
  { year: "2018–19", title: "Top 1% reviewer — Pharmacology & Toxicology", text: "Global Peer Review Awards, powered by Publons." },
  { year: "2018–19", title: "Top 1% reviewer — Cross-Field", text: "Global Peer Review Awards, multidisciplinary category, powered by Publons." },
];

export const editorialRoles = [
  { role: "Associate Editor", journal: "Frontiers in Pharmacology", detail: "Experimental Pharmacology and Drug Discovery", period: "2021–present" },
  { role: "Associate Editor", journal: "Molecular Diversity", period: "2022–present" },
  { role: "Associate Editor", journal: "International Journal of Quantitative Structure-Property Relationships", period: "2015–present" },
  { role: "Editorial Board", journal: "Journal of Clinical Medicine", period: "2018–present" },
  { role: "Editorial Board", journal: "Current Drug Metabolism", period: "2018–present" },
  { role: "Editorial Board", journal: "Pharmaceuticals", period: "2022–present" },
  { role: "Editorial Board", journal: "Interdisciplinary Journal of Applied Nanotechnology Research", period: "2021–present" },
  { role: "Editorial Board", journal: "Pharmacogenomics Research and Personalized Medicine", period: "2022–present" },
  { role: "Reviewer Board", journal: "Polymers", period: "2020–present" },
  { role: "Reviewer Editor", journal: "Frontiers in Natural Products", period: "2022–present" },
];

export const memberships = [
  { title: "American Chemical Society", label: "Professional membership", text: "Participation in the world's largest scientific society for chemistry and related disciplines." },
  { title: "Phi Kappa Phi", label: "Faculty inductee · 2025", text: "Member of the nation's oldest and most selective all-discipline collegiate honor society." },
  { title: "Bentham Science", label: "Brand Ambassador · since 2016", text: "Longstanding scientific publishing and outreach service." },
];

export const researchPlatformSupport = [
  {
    provider: "OpenAI",
    duration: "12 months",
    title: "ChatGPT for Academic Researchers",
    text: "Complimentary research workspace for Dr. Kar and up to four verified student collaborators (five seats total).",
    href: "https://openai.com/index/chatgpt-for-academic-researchers/",
  },
  {
    provider: "Anthropic",
    duration: "12 months",
    title: "Claude Team plan for scientists",
    text: "Promotional access for the CMM Laboratory research group, with up to 25 Standard seats under the program terms.",
    href: "https://www.anthropic.com/legal/team-plan-for-scientists-terms",
  },
];

export const newsItems = [
  {
    year: "2026",
    date: "September 13",
    source: "The Ridgewood Blog",
    title: "Game-Changer in Medicine: Free AI Tool Spotlights Drug Safety Before Clinical Trials",
    image: "/news/kean-kidneytox-2026.jpg",
    href: "https://theridgewoodblog.net/game-changer-in-medicine-free-ai-tool-spotlights-drug-safety-before-clinical-trials/",
  },
  {
    year: "2026",
    date: "September 11",
    source: "RLS Media",
    title: "Kean University Professor Helps Develop AI Tool to Predict Kidney Damage From Potential Medicines",
    image: "/news/kean-kidneytox-2026.jpg",
    href: "https://www.rlsmedia.com/article/kean-university-professor-helps-develop-ai-tool-predict-kidney-damage-potential-medicines",
  },
  {
    year: "2026",
    date: "September 10",
    source: "Insider NJ",
    title: "Kean Researcher Develops AI Tool to Help Make Drug Discovery Safer and More Efficient",
    image: "/news/kean-kidneytox-2026.jpg",
    href: "https://www.insidernj.com/press-release/kean-researcher-develops-ai-tool-to-help-make-drug-discovery-safer-and-more-efficient/",
  },
  {
    year: "2026",
    date: "September 4",
    source: "Kean University",
    title: "Kean Researcher Develops AI Tool to Help Make Drug Discovery Safer and More Efficient",
    image: "/news/kean-kidneytox-2026.jpg",
    href: "https://www.kean.edu/news/kean-researcher-develops-ai-tool-help-make-drug-discovery-safer-and-more-efficient-0",
  },
  {
    year: "2025",
    date: "December 9",
    source: "Kean University",
    title: "Kean Professor Leading Research Toward Zika Virus Treatment",
    image: "/news/zika-2025.webp",
    href: "https://www.kean.edu/news/kean-professor-leading-research-toward-zika-virus-treatment",
  },
  {
    year: "2025",
    date: "September 23",
    source: "Kean University",
    title: "Kean Faculty Recognized Again Among World’s Top 2% of Scientists",
    image: "/news/top-scientists-2025.webp",
    href: "https://www.kean.edu/news/kean-faculty-recognized-again-among-worlds-top-2-scientists",
  },
  {
    year: "2025",
    date: "September 12",
    source: "ROI-NJ",
    title: "Kean University Gets NSF Grant to Probe Biological Insecticides Originating from Fungi",
    image: "/news/nsf-fungi-2025.webp",
    href: "https://www.roi-nj.com/2025/09/12/education/kean-university-gets-nsf-grant-to-probe-biological-insecticides-originating-from-fungi/",
  },
  {
    year: "2025",
    date: "September 8",
    source: "Kean University",
    title: "Kean University Awarded National Science Foundation Grant to Explore Biological Insecticides Originating from Fungi",
    image: "/news/nsf-fungi-2025.webp",
    href: "https://www.kean.edu/news/kean-university-awarded-national-science-foundation-grant-explore-biological-insecticides",
  },
  {
    year: "2025",
    date: "January 16",
    source: "Phi Kappa Phi Merit Pages",
    title: "Supratik Kar Elected to Membership into The Honor Society of Phi Kappa Phi",
    image: "/news/qa-2024.webp",
    href: "https://meritpages.com/supratikkar",
  },
  {
    year: "2024",
    date: "November 6",
    source: "The Link News",
    title: "Two Kean University Faculty Named Among the World’s Top 2% of Scientists",
    image: "/news/top-scientists-2024.webp",
    href: "https://thelinknews.net/2024/11/06/two-kean-university-faculty-named-among-the-worlds-top-2-of-scientists/",
  },
  {
    year: "2024",
    date: "October",
    source: "TAPinto Cranford",
    title: "Two Kean University Faculty Named Among the World’s Top 2% of Scientists",
    image: "/news/top-scientists-2024.webp",
    href: "https://www.tapinto.net/towns/cranford/sections/education/articles/two-kean-university-faculty-named-among-the-world-s-top-2-of-scientists",
  },
  {
    year: "2024",
    date: "October 15",
    source: "Kean University",
    title: "Two Kean Faculty Named Among the World’s Top 2% of Scientists",
    image: "/news/top-scientists-2024.webp",
    href: "https://www.kean.edu/news/two-kean-faculty-named-among-worlds-top-2-scientists",
  },
  {
    year: "2024",
    date: "March 5",
    source: "Kean University",
    title: "Q&A: Faculty Researcher Supratik Kar, Ph.D.",
    image: "/news/qa-2024.webp",
    href: "https://www.kean.edu/news/qa-faculty-researcher-supratik-kar-phd",
  },
  {
    year: "2023",
    date: "November",
    source: "TAPinto Union",
    title: "Kean University Assistant Professor Named Among Top 2% of Scientists Worldwide",
    image: "/news/top-scientist-2023.webp",
    href: "https://www.tapinto.net/towns/union/articles/kean-university-assistant-professor-named-among-top-2-of-scientists-worldwide",
  },
  {
    year: "2023",
    date: "November 13",
    source: "Kean University",
    title: "Kean Assistant Professor Named Among Top 2% of Scientists Worldwide",
    image: "/news/top-scientist-2023.webp",
    href: "https://www.kean.edu/news/kean-assistant-professor-named-among-top-2-scientists-worldwide",
  },
];

export const galleryEras = [
  { title: "Kean University years", period: "2022—present", prefix: "kean", count: 24 },
  { title: "CMM Laboratory", period: "Mentorship & research", prefix: "cmm", count: 20 },
  { title: "Jackson State University", period: "Postdoctoral years · 2015—2022", prefix: "jsu", count: 12 },
  { title: "University of Gdańsk", period: "Marie-Curie exchange · 2013—2014", prefix: "gdansk", count: 4 },
  { title: "Jadavpur University", period: "B.Pharm. · M.Pharm. · Ph.D.", prefix: "jadavpur", count: 7 },
];

