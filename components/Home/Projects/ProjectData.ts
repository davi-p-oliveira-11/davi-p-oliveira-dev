export type ProjectType = "complete" | "mini" | "landing";

export interface ProjectData {
  title: string;
  category: string;
  img: string;
  demoUrl: string;
  githubUrl?: string;
  description?: string;
  type: ProjectType;
}

export const projectsData: ProjectData[] = [
  {
    title: "Modern Finance Dashboard UI",
    category: "Apps, UI/UX",
    img: "/images/p1.jpg",
    demoUrl: "https://seu-projeto.com",
    githubUrl: "https://github.com/seu-repo",
    type: "landing",
  },
  {
    title: "Password Generator",
    category: "Tools, JavaScript",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    githubUrl: "https://github.com/seu-repo",
    description: "A modern landing page focused on clean UI, responsive layout, and smooth animations.",
    type: "landing",
  },
  {
    title: "Cost Counter App",
    category: "Apps, React",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    type: "landing",
  },
  {
    title: "React Landing Page",
    category: "Landing Page, UI",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    type: "landing",
  },
  {
    title: "React Landing Page",
    category: "Landing Page, UI",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    type: "landing",
  },
  {
    title: "React Landing Page",
    category: "Landing Page, UI",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    type: "mini",
  },
  {
    title: "React Landing Page",
    category: "Landing Page, UI",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    type: "mini",
  },
  {
    title: "React Landing Page",
    category: "Landing Page, UI",
    img: "/images/placeholder.jpg",
    demoUrl: "https://seu-projeto.com",
    type: "mini",
  },
];
