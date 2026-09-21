import React from "react";
import experiences from "@/assets/experience";
import { getDuration } from "@/lib/duration";

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="w-full p-0 sm:p-6">
      <div className="relative">
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700 sm:-translate-x-1/2"></div>

        <div className="space-y-8 sm:space-y-10">
          {experiences.map((item, index) => {
            const isCurrent = item.positions[0].period.includes("Present");
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-start">
                <div
                  className={`absolute left-5 sm:left-1/2 top-4 sm:top-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-green-400 z-10 -translate-x-1/2 transition-colors ${
                    isCurrent
                      ? "bg-green-500 dark:bg-green-400"
                      : "bg-white dark:bg-slate-900"
                  }`}
                ></div>

                <div
                  className={`ml-10 sm:ml-0 sm:w-[calc(50%-1.25rem)] flex-1 sm:flex-none bg-white/90 dark:bg-slate-900/80 border border-neutral-100 dark:border-slate-800 rounded-xl shadow-sm px-3 sm:px-5 py-3 sm:py-4 transition hover:shadow-lg ${
                    isLeft
                      ? "sm:mr-auto sm:pr-6"
                      : "sm:ml-auto sm:pl-6"
                  }`}
                >
                  <div
                    className={
                      item.positions.length > 1
                        ? "space-y-5 relative pr-4 border-r-2 border-dashed border-emerald-200 dark:border-green-900"
                        : "space-y-4"
                    }
                  >
                    {item.positions.map((position, posIdx) => (
                      <div key={posIdx} className="relative">
                        {item.positions.length > 1 && (
                          <span
                            className={`absolute -right-[1.32rem] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-white dark:ring-slate-900 ${
                              posIdx === 0
                                ? "bg-emerald-400 dark:bg-green-400"
                                : "bg-transparent border-2 border-emerald-400 dark:border-green-400"
                            }`}
                          ></span>
                        )}
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100">
                            {position.title}
                          </h3>
                          <div className="flex items-center gap-1 sm:gap-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-emerald-100/70 dark:bg-green-900 text-emerald-600 dark:text-green-300 w-fit">
                              {position.period}
                            </span>
                            <span className="text-xs text-neutral-500 dark:text-neutral-400">
                              {getDuration(position.period)}
                            </span>
                          </div>
                        </div>

                        {posIdx === 0 && (
                          <p className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
                            {item.company} · {item.location}
                          </p>
                        )}

                        <div className="space-y-2">
                          {position.responsibilities.map(
                            (responsibility, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2"
                              >
                                <span className="text-green-400 dark:text-green-300 text-xs sm:text-sm flex items-center">
                                  •
                                </span>
                                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                  {responsibility}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4">
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
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
