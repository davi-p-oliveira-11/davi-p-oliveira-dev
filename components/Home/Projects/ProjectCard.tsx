import Image from "next/image";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  category: string;
  img: string;
  demoUrl: string;
  githubUrl?: string;
  description?: string;
  technologies?: string[];
};

const ProjectCard = ({
  title,
  category,
  img,
  demoUrl,
  githubUrl,
  description,
  technologies,
}: ProjectCardProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className="group cursor-pointer"
    >
      <a href={demoUrl} target="_blank">
        <Image
          src={img}
          alt={title}
          width={800}
          height={650}
          className="rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </a>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-white">
            {title}
          </h1>
          <p className="pt-1 text-white/70">{category}</p>
        </div>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            className="text-white/80 hover:text-white transition"
          >
            <FaGithub size={26} />
          </a>
        )}
      </div>

      {technologies && (
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 bg-cyan-800 rounded-md text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* DESCRIPTION — 3 LINHAS */}
      {description && (
        <p className="mt-3 text-white/60 text-sm line-clamp-3">{description}</p>
      )}
    </div>
  );
};

export default ProjectCard;
