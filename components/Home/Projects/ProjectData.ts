export type ProjectType = "complete" | "mini" | "landing";

export interface ProjectData {
  title: string;
  category: string[];
  img: string;
  demoUrl: string;
  githubUrl?: string;
  description?: string;
  technologies?: string[];
  type: ProjectType;
}

export const projectsData: ProjectData[] = [
  {
    title: "Groclone Analytics LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/groclone.png",
    demoUrl: "https://groclone-nine.vercel.app/",
    githubUrl: "https://github.com/davi-p-oliveira-11/groclone",
    description: "Interactive software dashboard for data analytics, designed to provide clear insights and actionable metrics. Built with Next.js, TailwindCSS, and React. Features responsive charts, real-time data updates, and intuitive user interactions",
    technologies: ["React", "TailwindCSS", "NextJs"],
    type: "landing",
  },
  {
    title: "Hala Lab LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/hala-lab.png",
    demoUrl: "https://hala-lab.vercel.app/",
    description: "Interactive landing page for an accountability software, designed to boost productivity and track progress efficiently. Built with React, Next.js, and TailwindCSS. Features responsive design, engaging UI animations, and seamless user interactions.",
    technologies: ["React", "TailwindCSS", "NextJs"],
    type: "landing",
  },
  {
    title: "FieldGuide AI LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/fieldguide.png",
    demoUrl: "https://fieldguide-ai.vercel.app/",
    description: "Landing page for Fieldguide AI, showcasing an AI-powered tool with intuitive user interactions. Built with React, Next.js, and TailwindCSS. Includes responsive layouts, smooth animations, and interactive components for a seamless experience.",
    technologies: ["React", "TailwindCSS", "NextJs"],
    type: "landing",
  },
  {
    title: "My Portfolio",
    category: ["Landing Pages ", " Full-Stack"],
    img: "/images/portfolio.png",
    demoUrl: "https://davi-p-oliveira-dev.vercel.app",
    githubUrl: "https://github.com/davi-p-oliveira-11/davi-p-oliveira-dev",
    description: "This portfolio demonstrates my front-end and full-stack capabilities. Developed with React, Next.js, and TailwindCSS, it includes dynamic project rendering, responsive design, and smooth animations for an engaging user experience.",
    technologies: ["React", "TailwindCSS", "NextJs", "AOS", "Nodejs", "Express", "PostgreSQL"],
    type: "landing",
  },
  {
    title: "Stract Mixland LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/stract.png",
    demoUrl: "https://stract-mixland.vercel.app/",
    description: "Landing page for Stract Mixland LP, showcasing an AI-powered tool with intuitive user interactions. Built with React, Next.js, and TailwindCSS. Includes responsive layouts, smooth animations, and interactive components for a seamless experience.",
    technologies: ["React", "TailwindCSS", "NextJs"],
    type: "landing",
  },
  {
    title: "ADA AI LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/ada.png",
    demoUrl: "https://ada-ai-tau.vercel.app/",
    description: "Landing page for ADA AI LP, showcasing an AI-powered tool with intuitive user interactions. Built with React, Next.js, and TailwindCSS. Includes responsive layouts, smooth animations, and interactive components for a seamless experience.",
    technologies: ["React", "TailwindCSS", "NextJs"],
    type: "landing",
  },
  {
    title: "Gericht Restaurant",
    category: ["Landing Pages", "Front-End"],
    img: "/images/gericht.png",
    demoUrl: "https://gericht-restaurant-murex.vercel.app/",
    description: "A stylish restaurant landing page for Gericht, showcasing menus, reservations, and chef specials. Developed with React, and CSS.",
    technologies: ["React", "CSS"],
    type: "landing",
  },
  {
    title: "Cryptoshield VPN LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/cryptoshield.png",
    demoUrl: "https://cryptoshieldvpn.vercel.app/",
    description: "Landing page for a VPN service showcasing security features and benefits. Built with HTML and Bootstrap 5 for a responsive and clean design.",
    technologies: ["HTML", "Boostrap5"],
    type: "landing",
  },
  {
    title: "Buildcon LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/buildcon.png",
    demoUrl: "https://build-con-beta.vercel.app/",
    githubUrl: "https://github.com/davi-p-oliveira-11/build-con",
    description: "Template landing page for construction services, emphasizing layout, responsiveness, and UI design. Built with HTML and Bootstrap 5.",
    technologies: ["HTML", "Bootstrap5"],
    type: "landing",
  },
  {
    title: "GPT-3 LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/gpt3.png",
    demoUrl: "https://github.com/davi-p-oliveira-11/gpt-3-LP",
    githubUrl: "https://github.com/davi-p-oliveira-11/build-con",
    description: "Landing page showcasing the capabilities of GPT-3, with interactive sections and a modern responsive design. Built with React and TailwindCSS, emphasizing clean UI and user engagement.",
    technologies: ["React", "TailwindCSS"],
    type: "landing",
  },
];
