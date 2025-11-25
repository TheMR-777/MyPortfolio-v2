import { Experience, Project, PhilosophyItem, SkillCategory, Publication, Article, Interest } from './types';

export const SOCIALS = {
  github: "https://github.com/TheMR-777",
  linkedin: "https://www.linkedin.com/in/777-ammar",
  email: "m.shahzad.ms72@gmail.com",
  phone: "+92 314 5401405"
};

export const TAGLINES = [
  "Software Architect & Security Engineer",
  "C++ Expert & Cryptography Specialist",
  "Creating What Hasn't Been Built Before",
  "AI-Powered Innovation Engineer"
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    title: "First Principles",
    content: "Breaking down complex problems to fundamental truths to engineer solutions that don't yet exist, rather than iterating on the status quo."
  },
  {
    title: "Simplicity as Sophistication",
    content: "The most elegant solutions are often the simplest. Reducing complexity while maintaining functionality is the ultimate engineering art."
  },
  {
    title: "Security by Design",
    content: "Security is a fundamental requirement, not an afterthought. Every system is architected with defense-in-depth strategies."
  },
  {
    title: "Tool-Builder Mindset",
    content: "Building tools that automate and elevate workflows. Treating products as art pieces where aesthetics and code quality receive equal care."
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "ACE Money Transfer",
    role: ".NET Developer & Architecture Consultant",
    period: "June 2023 - Present",
    description: [
      "Engineered the Employee Monitoring Suite solo, resulting in a 200% productivity boost.",
      "Architected the migration of ERP systems to a multi-tenant SaaS platform.",
      "Designed the ACE Password Vault with custom multi-layered cryptographic security.",
      "Implemented SignalR infrastructure for real-time enterprise notifications."
    ],
    tech: [".NET 9", "C#", "Blazor", "PostgreSQL", "SignalR", "GraphQL"]
  },
  {
    id: 2,
    company: "MIMOS Berhad (Malaysia)",
    role: "Lead Developer & System Architect (Contract)",
    period: "Dec 2024 - July 2025",
    description: [
      "Built a sophisticated UWB indoor positioning simulation engine.",
      "Pioneered accurate indoor positioning without physical hardware.",
      "Developed Python computational modules for signal processing."
    ],
    tech: ["C# 13", "Python 3.13", "NumPy", "WPF", "SciPy"]
  },
  {
    id: 3,
    company: "TeqHolic",
    role: "Flutter Development Intern",
    period: "3 Months (2023)",
    description: [
      "Developed 'Chirp', a Twitter-like social media app with real-time updates.",
      "Built 'Sara Kuch', an e-commerce platform integrating Shopify APIs."
    ],
    tech: ["Flutter", "Firebase", "Dart", "REST APIs"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Employee Monitoring Suite",
    role: "Lead Architect",
    description: "A comprehensive monitoring solution engineered solo over one year. Features real-time data processing, OS-level integration, and an intuitive dashboard.",
    impact: "200% increase in team productivity, 35% reduction in unauthorized breaks, Zero defects at launch.",
    tech: [".NET 9", "Blazor", "GraphQL", "ApexCharts"]
  },
  {
    id: 2,
    title: "ACE ERP Platform",
    role: "Full-Stack Engineer",
    description: "Transformation of a single-company system into a scalable multi-tenant SaaS platform. Includes dynamic form engines, approval workflows, and audit logging.",
    impact: "Backbone of daily operations for thousands of users.",
    tech: ["Angular 20", ".NET 9", "PrimeNG", "PostgreSQL"]
  },
  {
    id: 3,
    title: "UWB Simulation System",
    role: "Solo Developer",
    description: "A sophisticated simulation engine for indoor positioning, modeling obstacle attenuation and signal propagation without physical hardware.",
    impact: "Reduced deployment costs by eliminating need for physical testing.",
    tech: ["C#", "Python", "Math", "WPF"]
  },
  {
    id: 4,
    title: "mr_crypt",
    role: "Open Source Creator",
    description: "A revolutionary C++ cryptography library featuring range-like syntax for C++23 and seamless OpenSSL integration.",
    impact: "10x reduction in implementation time for cryptographic functions.",
    tech: ["C++23", "OpenSSL", "Template Metaprogramming"],
    link: "https://github.com/TheMR-777"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C++ (Expert)", "C# 13", "TypeScript", "Python", "SQL", "Dart", "MATLAB"]
  },
  {
    category: "Core Tech",
    items: [".NET 9", "React", "Angular 20", "Flutter", "PostgreSQL", "GraphQL", "SignalR"]
  },
  {
    category: "Concepts",
    items: ["System Architecture", "Cryptography", "Microservices", "Event-Driven", "AI Integration", "Low-Level Optimization"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Identification of Paddy Disease Along Its Processing Time",
    journal: "Quantum Journal of Social Sciences and Humanities",
    authors: "Khan, S.N., Khan, M.A., et al.",
    year: "2023",
    link: "https://doi.org/10.55197/qjssh.v4i3.251"
  },
  {
    title: "Paddy Leaf Disease Symptoms Detection Through ANN",
    journal: "Quantum Journal of Engineering, Science and Technology",
    authors: "Khan, S.N., Khan, M.A., et al.",
    year: "2023",
    link: "https://qjoest.com/index.php/qjoest/article/view/123/75"
  }
];

export const NULL_BYTE_ARTICLES: Article[] = [
  { id: "01", title: "Installing Metasploit Framework on Android (Termux)", link: "https://null-byte.wonderhowto.com/forum/to-install-metasploit-framework-android-part-1-termux-0186792/" },
  { id: "02", title: "Hack Android Device with Termux (Over WAN)", link: "https://null-byte.wonderhowto.com/forum/to-hack-android-device-with-termux-android-part-1-over-internet-ultimate-guide-0187005/" },
  { id: "03", title: "Hack Android Device with Termux (Over WLAN)", link: "https://null-byte.wonderhowto.com/forum/to-hack-android-device-with-termux-android-part-2-over-wlan-hotspot-ultimate-guide-0187637/" },
  { id: "04", title: "Sign APK File with Embedded Payload", link: "https://null-byte.wonderhowto.com/forum/to-sign-apk-file-with-embedded-payload-the-ultimate-guide-0186656/" },
  { id: "05", title: "Multi-threaded Password Cracking with John the Ripper", link: "https://null-byte.wonderhowto.com/forum/to-use-multiple-threads-cpus-while-cracking-passwords-with-john-ripper-free-version-0187017/" },
  { id: "06", title: "Embed MSF Payload in APK (TheFatRat)", link: "https://null-byte.wonderhowto.com/forum/to-embed-msf-payload-original-apk-files-part-1-using-thefatrat-0188918/" }
];

export const INTERESTS: Interest[] = [
  {
    key: "COSMIC_PERSPECTIVE",
    value: "Astronomy & Astrophysics",
    description: "Studying the cosmos to build intuition about scale, entropy, and origins. Listening to StarTalk and analyzing stellar evolution."
  },
  {
    key: "PHYSICS_ENGINE",
    value: "Theoretical Physics",
    description: "Reasoning about electromagnetism, chip architecture, and the fundamental laws of reality via first-principles thinking."
  },
  {
    key: "HUMAN_OS",
    value: "Cognitive Psychology",
    description: "Understanding biases, motivation, and social dynamics to engineer humane products and effective teams."
  }
];