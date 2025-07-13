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
    <div className="project relative rounded-xl bg-[rgba(255,255,255,0.125)] w-full overflow-visible">
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
              <span className="relative group cursor-not-allowed">
                <Github className="w-5 h-5 text-gray-400 dark:text-gray-600 opacity-50" />
                <span className="font-mono absolute left-1/2 top-full z-50 w-40 -translate-x-1/2 rounded-lg bg-white dark:bg-slate-900 text-neutral-700 dark:text-neutral-200 text-xs px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                  Private repository
                </span>
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
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300"
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
