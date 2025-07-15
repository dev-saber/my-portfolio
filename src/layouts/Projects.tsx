import Title from "@/components/atoms/Title";
import ProjectsGrid from "@/components/molecules/ProjectsGrid";
import Skills from "@/components/molecules/Skills";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const toggleFilter = (technology: string) => {
    setFilter((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology]
    );
  };

  const isFiltered = (technology: string) => {
    return filter.includes(technology);
  };

  return (
    <section
      id="projects"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-32 lg:w-full mx-auto"
    >
      <Title>Projects</Title>
      <div className="flex flex-col lg:flex-row w-full gap-8 justify-between items-start">
        <div className="w-full lg:w-2/3">
          <ProjectsGrid />
        </div>
        <div className="w-full lg:w-1/3">
          <Skills
            isFiltered={isFiltered}
            filter={toggleFilter}
            filtersLength={filter.length}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
