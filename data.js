// Unissant Talent Radar — Open Requisitions
// Source: unissant.applicantpro.com/jobs/
// Updated: April 2, 2026

const JOBS = [
  {
    id: 1,
    title: "AI Architect",
    location: "Chantilly, VA",
    track: "aiml",
    experience: "12+ years (3+ yr Gen AI/LLMs, 2+ yr agentic AI)",
    education: "Bachelor's req; Master's or PhD strongly preferred",
    clearance: "TS/SCI w/ Poly",
    clearance_key: "tssci-poly",
    work_type: "Onsite",
    remote: false,
    contract: "Contingent on contract award",
    date_posted: "2026-03-16",
    skills: "LangChain, AutoGen, OpenAI, Claude, RAG, Vector DB, Python, AWS/Azure/GCP, MLOps",
    description: "Lead the architecture and deployment of agentic AI systems that autonomously perform complex tasks for federal government clients. Design enterprise-scale solutions for LLM orchestration and multi-agent coordination within secure, classified environments.",
    url: "https://unissant.applicantpro.com/jobs/4023816",
    level: "Principal / Staff",
    level_key: "principal"
  },
  {
    id: 2,
    title: "AI/ML Developer",
    location: "Ashburn, VA",
    track: "aiml",
    experience: "3+ years in AI/ML engineering",
    education: "Bachelor's in CS, IT Management, or Engineering preferred",
    clearance: "Active DHS",
    clearance_key: "dhs",
    work_type: "Onsite",
    remote: false,
    contract: "DHS federal program",
    date_posted: "2025-11-21",
    skills: "Python, R, Java, TensorFlow, PyTorch, Keras, Scikit-Learn, NLP (SpaCy, Hugging Face, OpenAI), AWS/Azure/GCP, MLOps, DevSecOps, SQL/NoSQL/Vector/Graph DB, ETL/ELT",
    description: "Develop, train, and deploy advanced AI/ML and Generative AI models to support a federal DHS customer. Design innovative AI solutions, optimize performance, and integrate them into existing systems while ensuring data security compliance.",
    url: "https://unissant.applicantpro.com/jobs/3919809",
    level: "Mid-Senior",
    level_key: "mid"
  },
  {
    id: 3,
    title: "AI/ML Developer",
    location: "Chantilly, VA",
    track: "aiml",
    experience: "3+ years in AI/ML engineering",
    education: "Bachelor's req; Master's or PhD preferred",
    clearance: "TS/SCI w/ Poly",
    clearance_key: "tssci-poly",
    work_type: "Onsite",
    remote: false,
    contract: "Contingent on contract award",
    date_posted: "2026-03-16",
    skills: "Python, R, Java, TensorFlow, Keras, PyTorch, Hugging Face, OpenAI, NLP, MLOps, DevSecOps, AWS/Azure/GCP",
    description: "Drive a big data approach for a federal customer. Design, train, and deploy advanced AI/ML and Gen-AI models while collaborating with cross-functional teams to integrate solutions into existing systems at a client site in Northern Virginia.",
    url: "https://unissant.applicantpro.com/jobs/4023821",
    level: "Mid-Senior",
    level_key: "mid"
  },
  {
    id: 4,
    title: "Automation Test Engineer",
    location: "Ashburn, VA",
    track: "qa",
    experience: "5+ years automation testing",
    education: "Bachelor's in Software Design, IS, Engineering or related",
    clearance: "CBP BI / DHS",
    clearance_key: "cbp-bi",
    work_type: "Hybrid",
    remote: false,
    contract: "DHS CBP federal program",
    date_posted: "2026-02-19",
    skills: "Selenium (Web/Desktop/Mobile/API/DB), Java, TestNG, Selenium WebDriver, Maven, Rest Assured, Appium, Citrus, CI/CD, TDD, Playwright, JMeter, 508 compliance (JAWS, Andi)",
    description: "Develop and maintain automated scripts using Selenium and Java, integrating Test Driven Development (TDD) into existing frameworks within a CI/CD environment, supporting a federal CBP client in the Washington DC Metro area.",
    url: "https://unissant.applicantpro.com/jobs/4012305",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 5,
    title: "Automation Test Engineer",
    location: "Ashburn, VA",
    track: "qa",
    experience: "5+ years automation testing",
    education: "Bachelor's in Software Design, IS, Engineering or related",
    clearance: "CBP BI / DHS",
    clearance_key: "cbp-bi",
    work_type: "Hybrid",
    remote: false,
    contract: "DHS CBP federal program",
    date_posted: "2026-03-07",
    skills: "Selenium, Java, TestNG, Selenium WebDriver, Maven, Rest Assured, Appium, Citrus, TDD, CI/CD, Playwright, JMeter",
    description: "Join the team supporting a federal CBP client to develop and maintain automated test scripts. Enhance automation frameworks within an Agile CI/CD pipeline using Selenium and Java as the primary tech stack.",
    url: "https://unissant.applicantpro.com/jobs/4012275",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 6,
    title: "Automation Test Engineer",
    location: "Ashburn, VA",
    track: "qa",
    experience: "5+ years testing experience",
    education: "Bachelor's in Software Design, IS, Engineering or related (desired)",
    clearance: "CBP BI / DHS",
    clearance_key: "cbp-bi",
    work_type: "Onsite",
    remote: false,
    contract: "DHS CBP information systems modernization",
    date_posted: "2026-02-11",
    skills: "Test engineering methodology, automated testing tools, Eclipse, Jira, Confluence, Agile/Scrum",
    description: "Support the modernization of DHS CBP information systems. Design, maintain, and upgrade automated test scripts using Eclipse and Atlassian products in an Agile environment.",
    url: "https://unissant.applicantpro.com/jobs/4002833",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 7,
    title: "AWS Cloud Engineer",
    location: "Washington, DC",
    track: "cloud",
    experience: "5+ years with AWS cloud services",
    education: "Bachelor's in CS, IT, or related field",
    clearance: "Public Trust (federal customer; pre-employment screening required)",
    clearance_key: "public-trust",
    work_type: "Remote",
    remote: true,
    contract: "Federal customer (unspecified)",
    date_posted: "2026-02-25",
    skills: "AWS cloud services, DevOps (Jenkins, GitLab, Ansible), Network Architecture, IAM, Terraform, CloudFormation (IaC)",
    description: "Support a federal customer by optimizing and advancing AWS environments. Design robust network architectures, integrate innovative services, and leverage Infrastructure as Code (IaC) practices for enhanced efficiency. Fully remote position.",
    url: "https://unissant.applicantpro.com/jobs/4003477",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 8,
    title: "DevSecOps Engineer",
    location: "Chantilly, VA",
    track: "cloud",
    experience: "7–10 years in related fields",
    education: "Bachelor's in CS or related req; Master's or PhD strongly preferred",
    clearance: "TS/SCI w/ Poly",
    clearance_key: "tssci-poly",
    work_type: "Onsite",
    remote: false,
    contract: "Contingent on contract award",
    date_posted: "2026-03-16",
    skills: "GitLab, GitLab CI, Kubernetes, Harness, ArgoCD, Docker, Dynatrace, AppDynamics, Elasticsearch, Kibana, Splunk, Prometheus, Grafana, Terraform, AWS (EC2/ECS/ECR/EKS/NLB/ALB/RDS/S3/Kafka), Python, Java, Chef, Puppet, Ansible",
    description: "Join an embedded team at a client site in Northern Virginia to support modernization initiatives. Develop and maintain automated CI/CD pipelines and integrate security best practices into the DevOps lifecycle to ensure operational resiliency and scalability.",
    url: "https://unissant.applicantpro.com/jobs/4023834",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 9,
    title: "Enterprise Solutions Architect",
    location: "Washington, DC / Herndon, VA",
    track: "engineering",
    experience: "10–15 years in federal technology solutioning / enterprise architecture",
    education: "Bachelor's in CS, Engineering, IS or related; Advanced degree preferred",
    clearance: "Public Trust (U.S. Citizen required; Federal Health agencies)",
    clearance_key: "public-trust",
    work_type: "Hybrid",
    remote: false,
    contract: "Federal Health agencies",
    date_posted: "2026-02-19",
    skills: "Cloud (AWS/Azure/GCP), Data Architecture/Analytics, AI/ML, DevSecOps, DoDAF, TOGAF, Zero Trust, FedRAMP, RMF, CMMC, Digital Engineering",
    description: "Senior strategic technology leader responsible for developing and executing transformative, enterprise-scale solutions for Federal Health agencies. Integrate deep mission understanding with technical expertise to lead solution strategy, design architectures, and drive digital transformation.",
    url: "https://unissant.applicantpro.com/jobs/3998459",
    level: "Principal / Staff",
    level_key: "principal"
  },
  {
    id: 10,
    title: "Enterprise Solutions Executive",
    location: "Washington, DC / Herndon, VA",
    track: "leadership",
    experience: "10–15 years in federal technology solutioning / enterprise solution architecture",
    education: "Bachelor's in CS, Engineering, IS or related",
    clearance: "Min: ability to obtain TS/SCI; Active TS/SCI w/ Full-Scope Poly preferred",
    clearance_key: "ts",
    work_type: "Hybrid",
    remote: false,
    contract: "DoW and Intelligence Community (IC)",
    date_posted: "2026-01-25",
    skills: "Cloud (AWS/Azure/GCP), Data Architecture, AI/ML, DevSecOps, Application Modernization, DoDAF, TOGAF, NIST, Zero Trust, RMF",
    description: "Senior strategic technology leader developing and executing transformative, enterprise-scale solutions for customers across the Department of War and Intelligence Community. Partners with growth, capture, and delivery organizations to define technical approaches and drive digital transformation roadmaps.",
    url: "https://unissant.applicantpro.com/jobs/3971468",
    level: "Executive",
    level_key: "executive"
  },
  {
    id: 11,
    title: "IT Support Intern",
    location: "Herndon, VA",
    track: "intern",
    experience: "Prior internship or co-op preferred (not required)",
    education: "Currently pursuing IT, CS, Cybersecurity, or related degree",
    clearance: "None",
    clearance_key: "none",
    work_type: "Onsite",
    remote: false,
    contract: "Unissant HQ corporate — Summer 2026",
    date_posted: "2026-03-27",
    skills: "Windows OS, Microsoft 365, Azure Active Directory, PowerShell, Python, ITIL, ISO 27001, ServiceNow or Jira",
    description: "Motivated IT Support Intern to assist Unissant's Information Technology team in supporting corporate systems, infrastructure, and end-user operations. Seasonal summer internship at company headquarters in Herndon, VA. Exposure to enterprise IT operations and security compliance.",
    url: "https://unissant.applicantpro.com/jobs/4036276",
    level: "Intern",
    level_key: "intern"
  },
  {
    id: 12,
    title: "Senior Automation QA Engineer",
    location: "Washington, DC (Remote)",
    track: "qa",
    experience: "6–10 years QA/Automation; 3+ yr building Java frameworks from scratch",
    education: "Bachelor's in CS or scientific field preferred; CTSE/CSQA/CAST certs a plus",
    clearance: "Public Trust (CMS federal program)",
    clearance_key: "public-trust",
    work_type: "Remote",
    remote: true,
    contract: "CMS (Center for Medicare & Medicaid Services) — ESMD",
    date_posted: "2026-03-30",
    skills: "Java (Rest Assured, TestNG, JUnit), SQL, API/Backend Automation, JSON/XML validation, CI/CD (Jenkins, GitLab, Azure DevOps), PHI/PII data validation",
    description: "Design and build API-first automation frameworks from scratch using Java-based technologies. Focus on backend/API testing and data validation for complex, data-intensive systems supporting a CMS client. Fully remote — must handle sensitive PHI/PII data with strict compliance.",
    url: "https://unissant.applicantpro.com/jobs/4037516",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 13,
    title: "Senior Program Manager",
    location: "Chantilly, VA",
    track: "leadership",
    experience: "10+ years Program Management",
    education: "Bachelor's req; Master's or PhD in AI, ML, CS or related strongly preferred",
    clearance: "TS/SCI w/ Poly",
    clearance_key: "tssci-poly",
    work_type: "Onsite",
    remote: false,
    contract: "Contingent on contract award",
    date_posted: "2026-03-16",
    skills: "IT Agile Methodologies (DevOps/DevSecOps), Agile software delivery, application modernization, cloud migration, data engineering, advanced analytics, IC mission sets, CSM or PMP (preferred)",
    description: "Lead an embedded team at a client site in Northern Virginia, overseeing program management, resource management, and administrative functions. Primary liaison with federal customers, managing agile software delivery and technical teams in a hybrid low-side/high-side classified environment.",
    url: "https://unissant.applicantpro.com/jobs/4023829",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 14,
    title: "Senior Program Manager",
    location: "Washington, DC",
    track: "leadership",
    experience: "10+ years managing large IT programs with Agile",
    education: "Bachelor's in CS, IS or similar req; MBA or Master's preferred",
    clearance: "US Citizen; ability to obtain necessary clearance (HS systems)",
    clearance_key: "public-trust",
    work_type: "Onsite",
    remote: false,
    contract: "Federal customer — Homeland Security Systems preferred",
    date_posted: "2026-01-08",
    skills: "IT Agile Methodologies (DevOps/DevSecOps), Cloud Migration, Application Modernization, PMP (required), CSM (preferred)",
    description: "Oversee large-scale IT programs for a federal client in the Washington DC metro area. Manage resource allocation, service delivery, and customer relationships within agile software development, cloud migration, and data analytics environments.",
    url: "https://unissant.applicantpro.com/jobs/3640656",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 15,
    title: "Senior Technical Recruiter",
    location: "Herndon, VA",
    track: "corporate",
    experience: "8+ years full-cycle recruiting; 3+ yr federal contracting focus",
    education: "Bachelor's in HR, Business or related; equivalent experience considered",
    clearance: "Preferred: prior TS/SCI w/ or w/o poly (active or within 24 mo)",
    clearance_key: "public-trust",
    work_type: "Hybrid",
    remote: false,
    contract: "Unissant HQ — DoW, IC, Law Enforcement, DHS programs",
    date_posted: "2026-03-25",
    skills: "Full-cycle recruitment, sourcing cleared candidates, ATS, LinkedIn Recruiter, federal employment law (OFCCP/EEO), stakeholder management",
    description: "Lead full-cycle recruitment for highly cleared technical talent supporting critical federal missions. Build strong talent pipelines in software engineering, cybersecurity, and data analytics while collaborating with hiring managers and program leaders across DoW, IC, and DHS accounts.",
    url: "https://unissant.applicantpro.com/jobs/4034126",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 16,
    title: "Systems Engineer",
    location: "Ashburn, VA",
    track: "engineering",
    experience: "5–10 years (2+ yr Agile Development)",
    education: "Bachelor's in CS, Software Engineering, IT or related (experience in lieu accepted)",
    clearance: "CBP BI / DHS",
    clearance_key: "cbp-bi",
    work_type: "Onsite",
    remote: false,
    contract: "CBP federal modernization",
    date_posted: "2025-11-21",
    skills: "Java technologies, SELC, Agile/Scrum, project management, data analysis, data modeling",
    description: "Support modernization initiatives for a federal CBP client. Manage day-to-day planning, scheduling, tracking, and reporting for software development projects using Java technologies in an Agile environment.",
    url: "https://unissant.applicantpro.com/jobs/3919798",
    level: "Mid-Senior",
    level_key: "mid"
  },
  {
    id: 17,
    title: "UI Front End Developer",
    location: "Ashburn, VA",
    track: "engineering",
    experience: "5+ yr Angular; 2+ yr NgRx",
    education: "Bachelor's in CS, Software Engineering, IT or related",
    clearance: "CBP BI / DHS",
    clearance_key: "cbp-bi",
    work_type: "Onsite",
    remote: false,
    contract: "CBP federal program",
    date_posted: "2025-10-15",
    skills: "Angular (10+), NgRx, HTML5, CSS3, SASS, JSON, NPM, Microservices, Git, Visual Studio, Atlassian tools",
    description: "Build single-page applications with modern JavaScript frameworks for a CBP federal client. Work in an agile environment to design, code, test, and deploy cloud applications using DevOps tools in Ashburn, Virginia.",
    url: "https://unissant.applicantpro.com/jobs/3781479",
    level: "Senior",
    level_key: "senior"
  },
  {
    id: 18,
    title: "VP, Homeland Security & Law Enforcement",
    location: "Washington, DC",
    track: "leadership",
    experience: "15+ years supporting HS and Law Enforcement in government contracting",
    education: "Bachelor's in CS, Engineering, IS or related",
    clearance: "Active or prior TS/SCI security clearance",
    clearance_key: "ts",
    work_type: "Hybrid",
    remote: false,
    contract: "DHS, DOJ, FBI — HS & Law Enforcement accounts",
    date_posted: "2026-02-11",
    skills: "Growth & Capture leadership, Business Development, P&L management, DHS/FBI/DOJ customer engagement, Proposal Development, Win Strategy, Relationship Management",
    description: "Vice President driving strategic growth and long-term account success across DOJ, FBI, and other law enforcement agencies. Dual-hatted executive role combining early-stage business development and capture leadership with post-award account ownership and delivery oversight.",
    url: "https://unissant.applicantpro.com/jobs/3989782",
    level: "Executive",
    level_key: "executive"
  }
];

// ─── Closed positions log ────────────────────────────────────
// When a role is removed from unissant.applicantpro.com/jobs/
// it is moved here with a closed_date stamp instead of being deleted.
// Format mirrors JOBS entries, add closed_date: "YYYY-MM-DD"
const CLOSED_JOBS = [
  // Example structure (populated automatically by the daily sync):
  // {
  //   id: 99,
  //   title: "Example Role",
  //   location: "Washington, DC",
  //   track: "engineering",
  //   clearance: "Public Trust",
  //   clearance_key: "public-trust",
  //   work_type: "Hybrid",
  //   contract: "Federal Health agencies",
  //   date_posted: "2026-01-10",
  //   closed_date: "2026-04-01",
  //   url: "https://unissant.applicantpro.com/jobs/9999999",
  //   level: "Senior",
  //   level_key: "senior"
  // }
];

// ─── Clearance guide ─────────────────────────────────────────
const CLEARANCE_GUIDE = [
  {
    label: "None / US Citizen",
    key: "none",
    color: "var(--color-success)",
    desc: "No active clearance required at time of application. Some roles require US citizenship and will conduct standard background screening.",
    time: "2–4 weeks onboarding",
    tier: "open"
  },
  {
    label: "Public Trust",
    key: "public-trust",
    color: "#2dd4bf",
    desc: "Federal suitability background investigation required. Common for civilian agency programs like CMS. No polygraph — typically a background/credit/fingerprint check.",
    time: "3–6 weeks",
    tier: "moderate"
  },
  {
    label: "DHS Suitability",
    key: "dhs",
    color: "var(--color-gold)",
    desc: "Active Department of Homeland Security clearance or ability to obtain it. Covers CBP, ICE, TSA, and other DHS component programs.",
    time: "4–8 weeks",
    tier: "moderate"
  },
  {
    label: "CBP Background Investigation",
    key: "cbp-bi",
    color: "var(--color-gold)",
    desc: "Active CBP Background Investigation (BI) required or ability to obtain DHS CBP clearance. Standard for CBP information systems programs.",
    time: "6–12 weeks",
    tier: "moderate"
  },
  {
    label: "Top Secret / SCI",
    key: "ts",
    color: "var(--color-error)",
    desc: "Active TS/SCI clearance required or strong preference. Covers DoD, Intelligence Community, DoW, and senior IC-adjacent positions.",
    time: "3–6 months (if not current)",
    tier: "high"
  },
  {
    label: "TS/SCI with Polygraph",
    key: "tssci-poly",
    color: "#a855f7",
    desc: "Active TS/SCI with full-scope polygraph required. Unissant's highest-classified IC and DoW roles in Chantilly, VA. Must already hold this clearance.",
    time: "Must be active on hire",
    tier: "highest"
  }
];

// ─── Role level guide ─────────────────────────────────────────
const LEVEL_GUIDE = [
  { key: "intern", label: "Intern", desc: "Student/seasonal internship programs", color: "var(--color-text-muted)" },
  { key: "mid", label: "Mid-Senior", desc: "3–7 years of professional experience", color: "var(--color-blue)" },
  { key: "senior", label: "Senior", desc: "7–12 years; deep technical expertise in specific domain", color: "var(--color-success)" },
  { key: "principal", label: "Principal / Staff", desc: "10–15+ years; enterprise or IC-scale architecture ownership", color: "var(--color-gold)" },
  { key: "executive", label: "Executive / VP", desc: "15+ years; P&L, BD, strategic account ownership", color: "var(--color-error)" }
];

// ─── Track guide ─────────────────────────────────────────────
const TRACK_GUIDE = [
  {
    track: "AI / ML",
    key: "aiml",
    icon: "🤖",
    color: "var(--color-blue)",
    steps: [
      { label: "Open roles (3)", desc: "AI Architect (Chantilly, TS/SCI+Poly), AI/ML Developer ×2 (Ashburn + Chantilly)." },
      { label: "Key clearances", desc: "Active DHS for Ashburn role; TS/SCI + Polygraph for both Chantilly positions." },
      { label: "Core stack", desc: "Python, PyTorch, LangChain, AutoGen, Hugging Face, OpenAI, RAG, MLOps, Cloud platforms." },
      { label: "Entry tip", desc: "Ashburn role (Active DHS, 3+ yr) is the most accessible. Chantilly TS/SCI roles are contingent on contract award." }
    ]
  },
  {
    track: "Automation / QA",
    key: "qa",
    icon: "⚙️",
    color: "var(--color-gold)",
    steps: [
      { label: "Open roles (4)", desc: "Automation Test Engineer ×3 (all Ashburn, CBP BI) + Senior QA Engineer (Remote, CMS)." },
      { label: "Remote option", desc: "Senior Automation QA Engineer (CMS/ESMD) is fully remote — Public Trust required (CMS federal program)." },
      { label: "Core stack", desc: "Selenium, Java, TestNG, Rest Assured, CI/CD, Playwright, JMeter. CMS role needs Java frameworks from scratch." },
      { label: "Entry tip", desc: "The three Ashburn QA roles require CBP BI clearance. The CMS Sr. QA role is the best remote/no-clearance path in this track." }
    ]
  },
  {
    track: "Cloud / DevSecOps",
    key: "cloud",
    icon: "☁️",
    color: "var(--color-success)",
    steps: [
      { label: "Open roles (2)", desc: "AWS Cloud Engineer (DC, Remote) + DevSecOps Engineer (Chantilly, TS/SCI+Poly)." },
      { label: "Remote option", desc: "AWS Cloud Engineer is 100% remote — Public Trust level (federal customer pre-employment screening required)." },
      { label: "Core stack", desc: "AWS, Terraform, IaC, Jenkins, GitLab, Ansible, Kubernetes, ArgoCD, Docker, Splunk." },
      { label: "Entry tip", desc: "AWS Cloud Engineer (DC) is the most accessible cloud role — Public Trust only, fully remote, 5+ yr AWS experience." }
    ]
  },
  {
    track: "Engineering",
    key: "engineering",
    icon: "💻",
    color: "var(--color-purple)",
    steps: [
      { label: "Open roles (3)", desc: "Enterprise Solutions Architect (DC/Hybrid), Systems Engineer (Ashburn), UI Front End Developer (Ashburn)." },
      { label: "Clearance", desc: "ESA (Federal Health) requires Public Trust / US citizenship. Systems Engineer and UI Developer require CBP BI clearance." },
      { label: "Core stack", desc: "ESA: Cloud, TOGAF, Zero Trust, FedRAMP. SE: Java, SELC, Agile. UI: Angular 10+, NgRx, SASS." },
      { label: "Entry tip", desc: "Enterprise Solutions Architect (Federal Health) is the highest-prestige non-clearance engineering role." }
    ]
  },
  {
    track: "Program Mgmt",
    key: "leadership",
    icon: "📋",
    color: "var(--color-error)",
    steps: [
      { label: "Open roles (4)", desc: "Sr. Program Manager ×2 (Chantilly TS/SCI+Poly + DC), Enterprise Solutions Executive (DC), VP Homeland Security & LE (DC)." },
      { label: "Clearance range", desc: "DC PM role requires clearance ability only. ESE and VP require active or prior TS/SCI." },
      { label: "Key certs", desc: "PMP required for DC Program Manager. CSM or PMP preferred for Chantilly PM. Business development track for VP/ESE." },
      { label: "Entry tip", desc: "The Washington DC Senior Program Manager is the most accessible leadership role — PMP required, clearance obtainable." }
    ]
  }
];
