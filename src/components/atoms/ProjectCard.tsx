import React from "react";

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
    <div className="project relative rounded-xl bg-[rgba(255,255,255,0.125)] aspect-[4/3] min-h-[250px] w-full">
      <div className="project-glow absolute inset-0 rounded-xl z-0" />
      <div className="project-content absolute inset-[2px] rounded-xl bg-white/80 dark:bg-slate-950 flex flex-col gap-4 p-6 z-10 h-[calc(100%-4px)]">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
        </div>

        <div className="flex-1 min-h-[60px] flex flex-col justify-end">
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

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline z-20 relative"
          >
            View on GitHub
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
