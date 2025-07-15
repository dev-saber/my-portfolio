import React, { useRef } from "react";
import ProjectCard from "../atoms/ProjectCard";
import { projects } from "@/assets/Projects";

const ProjectsGrid = ({ filters }: { filters: string[] }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!gridRef.current) return;

    const featureCards = gridRef.current.querySelectorAll(".project");
    featureCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      (card as HTMLElement).style.setProperty("--x", `${x}`);
      (card as HTMLElement).style.setProperty("--y", `${y}`);
    });
  };

  return (
    <div className="w-full">
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12"
        onPointerMove={handlePointerMove}
      >
        {projects
          .filter(project =>
            filters.length === 0 ||
            filters.every(filter => project.tools.includes(filter))
          )
          .map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tools={project.tools}
              github={project.github}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
