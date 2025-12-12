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
    title: "Hoobank LP",
    category: ["Landing Pages", "Front-End"],
    img: "/images/hoobank.png",
    demoUrl: "hhttps://hoobank-nu-three.vercel.app/",
    description: "A sleek and modern banking landing page built to showcase financial services with a clean, futuristic design.",
    technologies: ["React", "TailwindCSS"],
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

  /* Mini -Projects utilities */

  {
    title: "Voltaris Password Generator",
    category: ["Front-End", "Utilities"],
    img: "/images/pwd-generator.png",
    demoUrl: "https://voltaris-password-generator.vercel.app/",
    githubUrl: "https://github.com/davi-p-oliveira-11/voltaris-password-generator",
    description: "A clean and efficient password generator built with React, TypeScript, and Zustand for state management. Users can generate secure passwords with customizable length and character sets. Styled with TailwindCSS, featuring a minimalist and responsive UI for a smooth user experience.",
    technologies: ["React", "Typescript", "TailwindCSS", "Zustand"],
    type: "mini",
  },
  {
    title: "Voltaris To-Do-List",
    category: ["Front-End", "Utilities"],
    img: "/images/todo.png",
    demoUrl: "https://voltaris-todo-list.vercel.app/",
    githubUrl: "https://github.com/davi-p-oliveira-11/voltaris-todo-list/tree/main",
    description: "A lightweight task manager built with React and TypeScript, featuring task creation, completion toggling, and deletion. Focused on clean UI, component structure, and state management using Zustand.",
    technologies: ["React", "Typescript", "TailwindCSS", "Zustand"],
    type: "mini",
  },
  {
    title: "Wallet Watch",
    category: ["Front-End", "Utilities"],
    img: "/images/walletwatch.png",
    demoUrl: "https://wallet-watch-delta.vercel.app/",
    githubUrl: "https://github.com/davi-p-oliveira-11/WalletWatch",
    description: "A simple and intuitive expense-tracking tool that helps users organize their daily spending. Built with React and TailwindCSS, it features real-time balance updates, categorized expenses, and a clean, responsive interface.",
    technologies: ["React", "Javascript", "TailwindCSS"],
    type: "mini",
  },
  // fullstack projects

  {
    title: "Carepilot",
    category: ["Full-Stack", "MERN"],
    img: "/images/carepilot.png",
    demoUrl: "https://carepilot-app-xyly.vercel.app/",
    githubUrl: "https://github.com/davi-p-oliveira-11/carepilot-app/tree/main",
    description:
      "A full MERN-stack medical appointment platform featuring patient/doctor management, authentication, scheduling flow, and dynamic data handling. Currently under active development with ongoing backend expansion.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React (Vite + TypeScript)",
      "Node.js",
      "TailwindCSS",
      "Context API",
      "REST API"
    ],
    type: "complete",
  },
  {
    title: "PERN Management System",
    category: ["Full-Stack", "PERN"],
    img: "/images/placeholder.jpg",
    demoUrl: "#",
    githubUrl: "#",
    description:
      "A Postgres-based management system using Express, React, and Node.js. Includes CRUD operations and REST API structure. In progress.",
    technologies: ["PostgreSQL", "Express", "React", "Node.js"],
    type: "complete",
  },
  {
    title: "Angular + Spring Boot App",
    category: ["Full-Stack", "Java"],
    img: "/images/placeholder.jpg",
    demoUrl: "#",
    githubUrl: "#",
    description:
      "A modern Angular frontend connected to a Spring Boot back-end, featuring authentication and database integration. In development.",
    technologies: ["Angular", "TypeScript", "Java", "Spring Boot", "PostgreSQL"],
    type: "complete",
  },
  {
    title: "Portfolio v1",
    category: ["Front-End", "Full-Stack"],
    img: "/images/placeholder.jpg",
    demoUrl: "https://davi-p-oliveira-dev.vercel.app",
    githubUrl: "https://github.com/seu-repo",
    description:
      "A modern portfolio website with animations, optimized UI, responsive layout, and future email API integration.",
    technologies: ["React", "Next.js", "TailwindCSS", "AOS"],
    type: "complete",
  },
];

export const completeProjects = [

];

