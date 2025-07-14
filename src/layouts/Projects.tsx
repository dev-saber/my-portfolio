import Title from "@/components/atoms/Title";
import ProjectsGrid from "@/components/molecules/ProjectsGrid";
import Skills from "@/components/molecules/Skills";

const Projects = () => {
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
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default Projects;
