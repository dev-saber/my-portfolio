import React, { useRef } from "react";
import ProjectCard from "../atoms/ProjectCard";
import { projects } from "@/assets/Projects";

const ProjectsGrid = () => {
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
  console.log(projects)

  return (
    <div className=" p-4">
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 -ml-48"
        onPointerMove={handlePointerMove}
      >
        {projects.map((project, index) => (
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
