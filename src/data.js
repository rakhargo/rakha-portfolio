// Profile source: Master CV Rakha Dhifiargo Simplified, 25 September 2026.
// Project additions and links: public GitHub/LinkedIn, verified 3 October 2026.
// Dates and claims deliberately remain a snapshot of the supplied CV.
export const profile = {
  name: 'Rakha Dhifiargo Hariadi',
  email: 'rakhargo@gmail.com',
  github: 'https://github.com/rakhargo',
  linkedin: 'https://linkedin.com/in/rakhargo/',
};

export const projects = [
  {
    id: 'evergreen', name: 'Evergreen', category: 'Web3 & developer tools', year: '2026',
    short: 'Helping Soroban contracts stay alive.',
    description: 'A Soroban state-archival developer tool for monitoring contract state expiration, estimating storage costs, and managing TTL extensions.',
    contribution: 'Co-developed core TTL scanning, multi-contract ledger analysis, guarded extension workflows, scheduled automation, and CI integration. Contributed to release preparation and npm publication of @evergreen-stellar/cli.',
    stack: ['TypeScript', 'Stellar / Soroban', 'Stellar SDK', 'Node.js', 'GitHub Actions'],
    context: 'Co-developed · Stellar Instaward-funded',
    repository: 'https://github.com/Fatihmaull/evergreen',
    demo: 'https://evergreen-stellar.pages.dev/dashboard/',
    demoLabel: 'Open Testnet dashboard',
    preview: { src: '/projects/evergreen.jpg', alt: 'Evergreen dashboard showing Soroban Testnet contract TTL status', caption: 'Read-only dashboard · Stellar Testnet' },
  },
  {
    id: 'agentpay', name: 'AgentPay', category: 'Web3 & agent payments', year: '2026',
    short: 'On-chain spending rules for autonomous agents.',
    description: 'A Stellar Testnet application for funding an agent vault, authorizing a payment address, applying spending limits, and paying verified digital services.',
    contribution: 'Built two interconnected Soroban contracts for budget management and service verification. Integrated multi-wallet support, contract events, and the simulation, signing, and confirmation flow in a responsive frontend.',
    stack: ['Next.js', 'TypeScript', 'Rust', 'Soroban', 'Stellar Wallets Kit'],
    context: 'Stellar Journey to Mastery builder project · Testnet',
    repository: 'https://github.com/rakhargo/agentpay-on-stellar',
    demo: 'https://agentpay-on-stellar.vercel.app',
    demoLabel: 'Open Testnet demo',
    preview: { src: '/projects/agentpay.jpg', alt: 'AgentPay application showing the agent vault and spending policy interface', caption: 'Agent vault & spending policies · Testnet' },
  },
  {
    id: 'apex', name: 'APEX', category: 'Web3 & compute markets', year: '2026',
    short: 'A compute-power futures exchange on Stellar.',
    description: 'A Stellar Testnet prototype for trading GPU compute capacity with a virtual AMM, USDC settlement, oracle-based pricing, and margin management.',
    contribution: 'Contributed to smart contracts and frontend development for the Stellar APAC Hackathon 2026, including TWAP-based risk pricing, SEP-40 oracle integration, Testnet validation, and transaction handling.',
    stack: ['Next.js', 'TypeScript', 'Rust', 'Soroban', 'Stellar'],
    context: 'Collaborative hackathon project · Stellar Testnet',
    repository: 'https://github.com/Fatihmaull/apex-on-stellar',
    demo: 'https://apex-on-stellar.vercel.app',
    demoLabel: 'Open Testnet demo',
    preview: { src: '/projects/apex.jpg', alt: 'APEX public application showing the APAC compute market landing page', caption: 'Compute-market application · Stellar Testnet' },
  },
  {
    id: 'fedlang', name: 'FedLang', category: 'AI & decentralized systems', year: '2026',
    short: 'Collaborative learning. Private data.',
    description: 'A thesis prototype combining federated learning and decentralized identity for collaborative large language model development.',
    contribution: 'Developed a prototype enabling five clients to fine-tune GPT-2 on non-IID data without sharing raw datasets. Integrated blockchain-based verification, rewards, decentralized storage, and identity management.',
    stack: ['Python', 'GPT-2', 'Federated Learning', 'Solidity', 'Ethereum Sepolia', 'IPFS', 'DID'],
    context: 'Thesis prototype · Five participating clients',
    repository: 'https://github.com/rakhargo/FedLang',
    demo: 'https://fedlang-ui.vercel.app',
    demoLabel: 'Open Sepolia prototype',
    preview: { src: '/projects/fedlang.jpg', alt: 'FedLang public prototype showing its Sepolia project explorer with no wallet connected', caption: 'Research prototype · Sepolia Testnet' },
  },
  {
    id: 'industrial', name: 'Industrial AI Assistant', category: 'AI & data engineering', year: '2025',
    short: 'Making industrial data conversational.',
    description: 'A conversational analytics platform for industrial time-series data and technical documentation, built during an internship at PT SCADA Prima Cipta.',
    contribution: 'Built document Q&A, natural-language-to-SQL queries, forecasting, anomaly analysis, and interactive visualization. Worked on CSV ingestion, datetime normalization, schema generation, and statistical summaries, alongside a gas-turbine forecasting dashboard.',
    stack: ['Gemini API', 'ChromaDB', 'FastAPI', 'Vue.js', 'PostgreSQL', 'Machine Learning'],
    context: 'Internship project · PT SCADA Prima Cipta',
  },
  {
    id: 'credentials', name: 'Academic Credential Verification', category: 'Web3 & identity', year: '2026',
    short: 'Verifiable credentials with decentralized identity.',
    description: 'A decentralized academic credential verification prototype using smart contracts and decentralized identity.',
    contribution: 'Contributed to smart contract development and integration between the React frontend and Express.js backend.',
    stack: ['Ethereum', 'Solidity', 'Foundry', 'React', 'Express.js', 'DID'],
    context: 'Collaborative prototype',
    repository: 'https://github.com/rakhargo/digital-credential-academic-system',
    preview: { src: '/projects/credentials.png', alt: 'Academic credential verification prototype showing its verifier interface', caption: 'Verifier interface · Repository screenshot' },
  },
  {
    id: 'attention', name: 'Attention Training', category: 'Full-stack applications', year: '2025',
    short: 'Interactive cognitive training and progress tracking.',
    description: 'A web-based cognitive training platform featuring interactive exercises, progress tracking, and role-based workflows for doctors and patients.',
    contribution: 'Collaborated on the full-stack application and its frontend, backend, database, and REST API integration.',
    stack: ['Vue.js', 'FastAPI', 'PostgreSQL', 'REST APIs'],
    context: 'Collaborative application',
  },
  {
    id: 'finance', name: 'Cloud Financial Tracker', category: 'Cloud & applications', year: '2025',
    short: 'A clearer picture of everyday finances.',
    description: 'A cloud-based financial management application for recording and monitoring income and expenses with intelligent language-based features.',
    contribution: 'Collaborated on a financial tracker using Microsoft Azure, the Gemini API, and web technologies.',
    stack: ['Microsoft Azure', 'Gemini API', 'Web Technologies'],
    context: 'Collaborative application',
    repository: 'https://github.com/rakhargo/fintrack-fe',
  },
  {
    id: 'pingbound', name: 'Pingbound', category: 'Interactive applications', year: '2026',
    short: 'A browser roguelike shaped by your connection.',
    description: 'A browser-game prototype that turns a connectivity sample into a deterministic card-based dungeon, with an optional contribution registry on Arbitrum Sepolia.',
    contribution: 'Built the connectivity measurement flow, deterministic game engine, and contribution verification workflow. The prototype supports local and explicitly simulated modes; a public deployment is not listed in the repository.',
    stack: ['Next.js', 'React', 'TypeScript', 'Solidity', 'Foundry'],
    context: 'Local prototype · Repository preview',
    repository: 'https://github.com/rakhargo/pingbound',
    preview: { src: '/projects/pingbound.png', alt: 'Pingbound prototype showing its connectivity-based roguelike landing page and card encounter', caption: 'Local prototype · Repository screenshot' },
  },
  {
    id: 'cs2', name: 'CS2 Skin Inspect Server', category: 'Interactive tools & gaming', year: '2026',
    short: 'A local skin inspector and web dashboard.',
    description: 'A local Counter-Strike 2 inspection utility that connects a Node.js web dashboard to a C# game-server plugin.',
    contribution: 'Built a dashboard for selecting skins, adjusting wear and seed values, and generating commands for a local inspection server. Worked on weapon attributes and compatibility with legacy weapon models.',
    stack: ['Node.js', 'C#', '.NET 8', 'HTML / CSS'],
    context: 'Local prototype · Personal gaming project',
    repository: 'https://github.com/rakhargo/cs2_skin_server',
  },
];

export const experiences = [
  { role: 'Ambassador (Builder)', org: 'Stellar Development Foundation', date: 'Aug 2026 — Present', start: '2026', description: 'Build and experiment with decentralized applications using Rust, Soroban, and full-stack technologies. Co-develop Evergreen, a Stellar Instaward-funded developer tool.', tags: ['Stellar', 'Soroban', 'Rust'] },
  { role: 'Campus Club Lead', org: 'Superteam Indonesia · UPI Bandung', date: 'Jul 2026 — Present', start: '2026', description: 'Lead the Superteam Campus Club at Universitas Pendidikan Indonesia, connecting students with Web3 learning, builder opportunities, and ecosystem programs. Support community direction, project ideation, and student participation.', tags: ['Web3 community', 'Leadership'] },
  { role: 'Freelance Developer', org: 'Self-employed', date: 'Jul 2025 — Present', start: '2025', description: 'Develop custom full-stack and interactive applications. Work across architecture, APIs, databases, testing, and deployment, translating client requirements into working prototypes.', tags: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Unity', 'C#'] },
  { role: 'Cloud & DevOps Teaching Assistant', org: 'Universitas Pendidikan Indonesia', date: 'Mar 2026 — Jun 2026', start: '2026', description: 'Conducted practical sessions and designed assignments on cloud infrastructure, microservices, event-driven systems, data engineering, CI/CD, containerization, and deployment.', tags: ['Docker', 'Kubernetes', 'Azure', 'Terraform', 'Jenkins', 'Kafka', 'Airflow', 'MongoDB'] },
  { role: 'AI/ML Engineer Intern', org: 'PT SCADA Prima Cipta · Bandung', date: 'Feb 2025 — Jun 2025', start: '2025', description: 'Built an internal AI assistant for querying industrial time-series data and technical documentation. Developed an interactive gas-turbine performance forecasting dashboard.', tags: ['FastAPI', 'Gemini', 'ChromaDB', 'Vue.js', 'PostgreSQL'] },
  { role: 'Programming Teaching Assistant', org: 'Universitas Pendidikan Indonesia', date: 'Sep 2023 — Jun 2025', start: '2023', description: 'Taught algorithms, programming, data structures, and object-oriented programming. Mentored 100+ students through labs, assignments, consultations, and debugging support, and developed learning materials.', tags: ['Algorithms', 'Data structures', 'OOP', 'Mentoring'] },
];

export const skills = [
  { title: 'Blockchain & Web3', icon: 'network', summary: 'Contracts, identity, and decentralized systems.', items: ['Stellar', 'Soroban', 'Ethereum', 'Foundry', 'IPFS', 'DID'] },
  { title: 'AI & data', icon: 'brain', summary: 'From raw data to intelligent applications.', items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'pandas', 'LLM / NLP', 'RAG', 'ChromaDB', 'Hugging Face'] },
  { title: 'Software development', icon: 'code', summary: 'Full-stack products and interactive experiences.', items: ['FastAPI', 'Vue.js', 'React', 'Next.js', 'Express.js', 'Laravel', 'Flutter', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { title: 'Cloud & DevOps', icon: 'cloud', summary: 'Infrastructure, pipelines, and deployment.', items: ['Microsoft Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Kafka', 'Airflow', 'Terraform'] },
];
export const languages = ['Python', 'Solidity', 'TypeScript', 'JavaScript', 'Rust', 'SQL', 'Java', 'C / C++', 'C#', 'PHP', 'Dart'];
export const courses = ['Financial Technology', 'Cloud Computing', 'Natural Language Processing', 'Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Data Mining & Warehousing', 'Software Engineering', 'Database Systems', 'Non-relational Database', 'Project Consultation'];
export const achievements = [
  { title: 'GEMASTIK XVI', detail: 'Finalist', year: '2023' },
  { title: 'Schematics NPC', detail: 'Finalist', year: '2023' },
  { title: 'Blockchain Basics', detail: 'Cyfrin Updraft certification', year: '2025' },
];
