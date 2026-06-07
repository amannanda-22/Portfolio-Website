export const SITE = {
  firstName: "Aman",
  lastName: "Nanda",
  name: "Aman Nanda",
  role: "AI Developer & Quantum Computing Enthusiast",
  email: "amannanda740@gmail.com",
  phone: "+91 6281947629",
  location: "Visakhapatnam, India",
  bio: "AI undergraduate passionate about building intelligent systems, full-stack applications, and futuristic digital experiences. Skilled in Machine Learning, NLP, Generative AI, Data Analytics, and Quantum Computing.",
  github: "https://github.com/amannanda-22",
  linkedin: "https://www.linkedin.com/in/nanda-aman",
  resume: "/resume.pdf",
  education: { degree: "B.Sc. Artificial Intelligence", college: "Aditya Degree College, Visakhapatnam", year: "2023–2026", cgpa: "8.21" },
};

export const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const EXPERIENCE = [
  {
    id: 1, company: "VaultOfCodes", role: "Python Programmer Intern", period: "2025",
    description: "Worked on automation scripts, data preprocessing, debugging, and API integrations using Python. Collaborated on real-world development workflows, optimized scripts, and delivered solutions aligned with quality standards.",
    tags: ["Python", "Automation", "APIs", "Data Processing", "Git"],
  },
  {
    id: 2, company: "Deloitte", role: "Data Analytics Virtual Intern", period: "2025",
    description: "Applied data analytics techniques to solve business problems, generated insights from structured datasets, and created interactive dashboards aligned with Deloitte's quality standards.",
    tags: ["Data Analytics", "Power BI", "Excel", "SQL", "Visualization"],
  },
  {
    id: 3, company: "Power BI Internship", role: "Power BI & Visualization Intern", period: "2025",
    description: "Designed interactive dashboards, analyzed KPIs, and visualized business datasets to deliver actionable insights using DAX, Power Query, and Power BI reporting tools.",
    tags: ["Power BI", "DAX", "Power Query", "KPIs", "Data Visualization"],
  },
];

export const PROJECTS = [
  {
    id: 1, title: "Nova AI", year: "2025", featured: true,
    description: "AI-powered voice assistant that executes system commands, automates tasks, and fetches real-time data using NLP and speech recognition. Won 1st Prize at Project Expo.",
    tags: ["Python", "NLP", "Speech Recognition", "AI", "Automation"],
    github: "https://github.com/amannanda22", live: "",
  },
  {
    id: 2, title: "Cardio Predict", year: "2025", featured: true,
    description: "Heart disease analysis and prediction system using EDA and Machine Learning. Identifies critical risk factors for early intervention and improved patient outcome forecasting.",
    tags: ["Machine Learning", "EDA", "Scikit-learn", "Python", "Healthcare"],
    github: "https://github.com/amannanda22", live: "",
  },
  {
    id: 3, title: "Quantum Job Tracker", year: "2026", featured: true,
    description: "Specialized dashboard to monitor quantum computing job roles, Qiskit skills demand, and global hiring trends using IBM Quantum API integration.",
    tags: ["Qiskit", "IBM Quantum", "Python", "Power BI", "Analytics"],
    github: "https://github.com/amannanda22", live: "",
  },
  {
    id: 4, title: "AI Chatbot", year: "2025", featured: false,
    description: "Conversational AI chatbot with contextual understanding and intelligent response generation using NLP and prompt engineering.",
    tags: ["Generative AI", "NLP", "Python", "Prompt Engineering"],
    github: "https://github.com/amannanda22", live: "",
  },
  {
    id: 5, title: "Traffic Prediction System", year: "2026", featured: false,
    description: "ML-based urban traffic prediction using regression techniques to analyze mobility patterns and traffic flow trends.",
    tags: ["Machine Learning", "Regression", "Python", "Data Analytics"],
    github: "https://github.com/amannanda22", live: "",
  },
  {
    id: 6, title: "AI Healthcare Analytics", year: "2025", featured: false,
    description: "Data analytics system for extracting healthcare insights and visualizing patient-related trends using dashboards.",
    tags: ["Healthcare", "Power BI", "Analytics", "Python"],
    github: "https://github.com/amannanda22", live: "",
  },
];

export const SKILLS = [
  { category: "Programming", icon: "💻", items: [{ name: "Python", level: 95 }, { name: "SQL", level: 88 }, { name: "Java", level: 78 }, { name: "C Language", level: 75 }, { name: "DSA", level: 82 }] },
  { category: "AI & Machine Learning", icon: "🤖", items: [{ name: "Prompt Engineering", level: 92 }, { name: "Generative AI", level: 90 }, { name: "TensorFlow", level: 88 }, { name: "Scikit-learn", level: 86 }, { name: "NLP", level: 85 }] },
  { category: "Data Analytics", icon: "📊", items: [{ name: "Pandas", level: 92 }, { name: "Power BI", level: 90 }, { name: "NumPy", level: 88 }, { name: "Matplotlib", level: 84 }, { name: "Seaborn", level: 82 }] },
  { category: "Frameworks & Tools", icon: "⚙️", items: [{ name: "Streamlit", level: 85 }, { name: "Git / GitHub", level: 88 }, { name: "Flask", level: 80 }, { name: "FastAPI", level: 78 }, { name: "Jupyter", level: 90 }] },
  { category: "Cloud & Databases", icon: "☁️", items: [{ name: "MySQL", level: 84 }, { name: "MongoDB", level: 80 }, { name: "AWS", level: 75 }, { name: "Azure", level: 72 }, { name: "Qiskit", level: 78 }] },
];

export const ACHIEVEMENTS = [
  { id: 1, icon: "🏆", title: "1st Prize — Amaravati Quantum Valley Hackathon", sub: "National Level · 2026", desc: "Won first prize for designing an innovative quantum-based optimization solution using IBM Quantum Platform and Qiskit. Recognized for applying AI + quantum computing to a real-world problem." },
  { id: 2, icon: "🥇", title: "1st Prize — Project Expo (Nova AI)", sub: "College Level · 2025", desc: "Achieved first prize at the college Project Expo with Nova AI, an AI-powered voice assistant designed for intelligent task execution, automation, and seamless human-computer interaction." },
  { id: 3, icon: "🤖", title: "Generative AI & NLP Hackathon Projects", sub: "Multiple Events · 2025–2026", desc: "Applied Generative AI and NLP techniques across multiple hackathon events, building intelligent automation and AI-driven solutions." },
];

export const CERTS = [
  { name: "IBM + Simplilearn: AI & Machine Learning", issuer: "IBM", year: "2025" },
  { name: "RPA Automation Anywhere: Essentials Automation Professional", issuer: "Automation Anywhere", year: "2025" },
  { name: "Deloitte: Data Analytics Job Simulation", issuer: "Deloitte", year: "2025" },
  { name: "Infosys Springboard: NLP and Deep Learning", issuer: "Infosys", year: "2025" },
  { name: "Python Essentials", issuer: "Cisco", year: "2025" },
  { name: "C Language Fundamentals", issuer: "Cisco", year: "2024" },
  { name: "Fundamentals of Quantum Algorithms", issuer: "IBM", year: "2026" },
  { name: "Basics of Quantum Information", issuer: "IBM", year: "2026" },
  { name: "WISER Quantum Fundamentals Phase-1", issuer: "APSCHE & Qubitech", year: "2026" },
];

export const MARQUEE = ["Python","TensorFlow","Machine Learning","Generative AI","NLP","Power BI","Qiskit","Quantum Computing","FastAPI","Flask","Streamlit","SQL","MongoDB","AWS","Azure","GitHub","Pandas","NumPy","Scikit-learn","Prompt Engineering"];
