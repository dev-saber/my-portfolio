import React from "react";
import educations from "@/assets/education";

const EducationTimeline: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-0 sm:p-6">
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700"></div>

        <div className="space-y-10">
          {educations.map((item, index) => (
            <div key={index} className="relative flex items-start">
              <div
                className={`absolute left-3.5 top-6 w-4 h-4 rounded-full border-2 border-green-400 z-10 transition-colors ${
                  item.period.includes("Present")
                    ? "bg-green-500 dark:bg-green-400"
                    : "bg-white dark:bg-slate-900"
                }`}
              ></div>

              <div className="ml-12 flex-1 bg-white/90 dark:bg-slate-900/80 border border-neutral-100 dark:border-slate-800 rounded-xl shadow-sm px-5 py-4 transition hover:shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300">
                    {item.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                  {item.institute}
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {item.degree}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
