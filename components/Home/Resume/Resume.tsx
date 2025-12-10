"use client";

import React from "react";
import ResumeCard from "./ResumeCard";
import { BsDatabase } from "react-icons/bs";
import { FaCodepen, FaReact, FaServer } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Work Experience */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div
            className="mt-10 space-y-6"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaCodepen}
              role="Freelance Full-Stack Developer"
              date="2024 – Present"
              description="Building modern, efficient and reliable web applications for clients and personal projects."
            />

            <ResumeCard
              Icon={FaReact}
              role="Frontend Developer — Personal Projects"
              date="2023 – Present"
              description="Developing responsive interfaces and refining frontend architecture using React and TypeScript."
            />

            <ResumeCard
              Icon={BsDatabase}
              role="Backend Developer — Personal Labs"
              date="2024 – Present"
              description="Designing APIs, authentication flows and backend structures with Node.js, Express and TypeScript."
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div
            className="mt-10 space-y-6"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="A.S. in Systems Analysis and Development"
              date="Apr 2023 – Oct 2025"
              description="Focused on software engineering principles, algorithms, database fundamentals and modern web development practices."
            />

            <ResumeCard
              Icon={FaReact}
              role="Web Development — MERN & PERN Stack"
              date="2022 – Present"
              description="Autodidact focused on consistent growth: building with React, TypeScript and full-stack architectures through disciplined, continuous learning."
            />

            <ResumeCard
              Icon={FaServer}
              role="DevOps & Cloud Foundations"
              date="2025 – Present"
              description="Developing a solid foundation in modern infrastructure through Docker containerization, Kubernetes orchestration, core AWS services and CI/CD automation practices."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
