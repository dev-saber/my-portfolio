import Title from "@/components/atoms/Title";
import EducationTimeline from "@/components/molecules/EducationTimeline";

const Resume = () => {
  return (
    <section id="resume">
      <Title>Resume</Title>
      <div className="flex flex-col items-start w-4/5">
        <EducationTimeline />
      </div>
    </section>
  );
};

export default Resume;
