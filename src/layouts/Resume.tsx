import Title from "@/components/atoms/Title";
import EducationTimeline from "@/components/molecules/EducationTimeline";
import ExperienceTimeline from "@/components/molecules/ExperienceTimeline";
import { GraduationCap, Briefcase } from "lucide-react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-32 lg:w-4/5 mx-auto"
    >
      <Title>Resume</Title>
      <div className="p-4 sm:p-10 flex flex-col gap-12 sm:gap-20 relative overflow-x-visible">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              Education
            </h2>
          </div>
          <div className="flex">
            <div className="w-full max-w-2xl">
              <EducationTimeline />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-green-600 dark:text-green-400" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              Experience
            </h2>
          </div>
          <div className="flex justify-end">
            <div className="w-full max-w-2xl">
              <ExperienceTimeline />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
