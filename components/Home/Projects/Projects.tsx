"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./ProjectData";

const Projects = () => {
  // const completeProjects = projectsData.filter((p) => p.type === "complete");
  const miniProjects = projectsData.filter((p) => p.type === "mini");
  const landingProjects = projectsData.filter((p) => p.type === "landing");

  // Landing Pages → Load more / Show less
  const [visibleLanding, setVisibleLanding] = useState(2);
  const [visibleMini, setVisibleMini] = useState(2);
  const landingExpanded = visibleLanding >= landingProjects.length;

  const toggleLanding = () => {
    if (landingExpanded) {
      setVisibleLanding(2);
    } else {
      setVisibleLanding(landingProjects.length);
    }
  };

  return (
    <div className="pt-16 pb-24">
      {/* TITLE */}
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      {/* LANDING PAGES */}
      {landingProjects.length > 0 && (
        <Section title="Landing Pages">
          <ProjectGrid>
            {landingProjects.slice(0, visibleLanding).map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </ProjectGrid>

          {/* BUTTON */}
          {landingProjects.length > 2 && (
            <div className="text-center mt-8">
              <button
                onClick={toggleLanding}
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 transition rounded-lg text-white font-semibold"
              >
                {landingExpanded ? "Show less" : "Load more"}
              </button>
            </div>
          )}
        </Section>
      )}

      {/* MINI PROJECTS */}
      {miniProjects.length > 0 && (
        <Section title="Mini Projects">
          <ProjectGrid>
            {miniProjects.slice(0, visibleMini).map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </ProjectGrid>

          {/* LOAD MORE */}
          {visibleMini < miniProjects.length && (
            <div className="text-center mt-8">
              <button
                onClick={() => setVisibleMini((v) => v + 2)}
                className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 transition rounded-lg text-white font-semibold"
              >
                Load more
              </button>
            </div>
          )}
        </Section>
      )}

      {/* COMPLETE PROJECTS (opcional para depois) */}
      {/* 
      {completeProjects.length > 0 && (
        <Section title="Featured Projects (Complete)">
          <ProjectGrid>
            {completeProjects.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </ProjectGrid>
        </Section>
      )}
      */}
    </div>
  );
};

export default Projects;

/* -------- REUSABLE SUBCOMPONENTS -------- */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Section = ({ title, children }: any) => (
  <div className="mt-16">
    <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 mb-6 text-center">
      {title}
    </h2>
    {children}
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectGrid = ({ children }: any) => (
  <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
    {children}
  </div>
);
