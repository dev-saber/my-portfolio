import { Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  tools,
  github,
}: {
  title: string;
  description: string;
  tools: string[];
  github?: string;
}) => {
  return (
    <div className="project relative rounded-xl bg-[rgba(255,255,255,0.125)] w-full overflow-hidden">
      <div className="project-glow absolute inset-0 rounded-xl z-0 pointer-events-none" />
      <div className="project-content relative m-[2px] rounded-xl bg-white/80 dark:bg-slate-950 flex flex-col gap-4 p-6 z-10 min-h-[calc(100%-4px)]">
        <div className="flex-shrink-0">
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            {github ? (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors" />
              </a>
            ) : (
              <span title="Private repository" className="cursor-not-allowed">
                <Github className="w-5 h-5 text-gray-400 dark:text-gray-600 opacity-50" />
              </span>
            )}
          </div>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        <div className="flex-1 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2 content-end">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-green-600/20 dark:bg-green-800/30 text-green-800 dark:text-green-200 border border-green-600/30 dark:border-green-800/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
