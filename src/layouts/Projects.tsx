import Title from "@/components/atoms/Title";
import ProjectsGrid from "@/components/molecules/ProjectsGrid";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-32 lg:w-4/5 mx-auto"
    >
      <Title>Projects</Title>
      <div className="flex w-full gap-4 justify-between">
        <ProjectsGrid />
        {/* skills here + their filter */}
        <span>skills</span>
      </div>
    </section>
  );
};

export default Projects;