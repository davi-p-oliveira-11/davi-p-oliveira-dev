"use client";

import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiVite,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPrisma,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiJest,
  SiFigma,
  SiRedux
} from "react-icons/si";


import Tilt from "react-parallax-tilt";

const skills = [
  // Frontend
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Angular", icon: <SiAngular /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux / Zustand", icon: <SiRedux /> },

  // Backend
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Prisma ORM", icon: <SiPrisma /> },
  { name: "Docker", icon: <SiDocker /> },

  // Tools
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Figma", icon: <SiFigma /> },
];

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, i) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={i * 100}
                className="bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
              >
                <div className="text-5xl mb-4 text-gray-300">{skill.icon}</div>
                <p className="text-purple-400 mt-1">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
