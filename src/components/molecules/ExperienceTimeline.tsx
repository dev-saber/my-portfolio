import React from "react";
import experiences from "@/assets/experience";

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-0 sm:p-6">
      <div className="relative">
        <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700"></div>

        <div className="space-y-10">
          {experiences.map((item, index) => (
            <div key={index} className="relative flex items-start">
              <div
                className={`absolute right-3.5 top-6 w-4 h-4 rounded-full border-2 border-green-400 z-10 transition-colors ${
                  item.period.includes("Present")
                    ? "bg-green-500 dark:bg-green-400"
                    : "bg-white dark:bg-slate-900"
                }`}
              ></div>

              <div className="mr-12 flex-1 bg-white/90 dark:bg-slate-900/80 border border-neutral-100 dark:border-slate-800 rounded-xl shadow-sm px-5 py-4 transition hover:shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100/70 dark:bg-green-900 text-emerald-600 dark:text-green-300">
                      {item.period}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {item.duration}
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  {item.company}
                </p>

                <div className="space-y-2 mb-4">
                  {item.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-neutral-400 dark:text-neutral-500 mt-1.5 text-sm">
                        -
                      </span>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-emerald-100/70 dark:bg-green-900 text-emerald-600 dark:text-green-300 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
