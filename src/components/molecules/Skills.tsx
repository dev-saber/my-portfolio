import { skills } from "@/assets/Projects";
import AnimatedCursor from "../atoms/AnimatedCursor";

const Skills = ({
  isFiltered,
  filter,
  filtersLength,
}: {
  isFiltered: (skillName: string) => boolean;
  filter: (skillName: string) => void;
  filtersLength: number;
}) => {
  return (
    <div className="relative">
      {filtersLength === 0 && <AnimatedCursor />}
      {skills.map((skill) => (
        <div key={skill.category} className="mt-4">
          <h3 className="text-lg font-semibold mb-2">{skill.category}</h3>
          <div className="flex flex-wrap gap-2">
            {skill.skills.map((skillName) => (
              <div
                key={skillName}
                data-skill-tag
                className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold hover:bg-green-50 dark:hover:bg-green-900 text-green-700 dark:text-green-300 cursor-pointer transition-colors border border-green-700 dark:border-green-900 ${
                  isFiltered(skillName) ? "bg-green-100 dark:bg-green-800" : ""
                }`}
                onClick={() => filter(skillName)}
              >
                {skillName}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
