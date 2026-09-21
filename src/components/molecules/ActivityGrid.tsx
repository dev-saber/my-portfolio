import React, { useMemo, useRef } from "react";
import ProjectCard from "../atoms/ProjectCard";
import { projects } from "@/assets/Activity";

const DEFAULT_PROJECT_COUNT = 9;

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

const ActivityGrid = ({ filters }: { filters: string[] }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  const randomProjects = useMemo(
    () => shuffle(projects).slice(0, DEFAULT_PROJECT_COUNT),
    []
  );

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

  const isJsTsFilter = filters.includes("JavaScript/TypeScript");
  const otherFilters = filters.filter((f) => f !== "JavaScript/TypeScript");

  return (
    <div className="w-full">
      <div
        ref={gridRef}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12"
        onPointerMove={handlePointerMove}
      >
        {(filters.length === 0 ? randomProjects : projects)
          .filter((project) => {
            if (filters.length === 0) return true;

            const JsTsFilter =
              isJsTsFilter &&
              (project.tools.includes("React") ||
                project.tools.includes("JavaScript"));

            const normalFilter =
              otherFilters.length === 0 ||
              otherFilters.every((filter) => project.tools.includes(filter));

            if (isJsTsFilter && otherFilters.length > 0) {
              return JsTsFilter && normalFilter;
            } else if (isJsTsFilter) {
              return JsTsFilter;
            } else {
              return normalFilter;
            }
          })
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

export default ActivityGrid;
