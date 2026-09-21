import React from "react";
import { GraduationCap } from "lucide-react";
import educations from "@/assets/education";

const EducationTimeline: React.FC = () => {
  return (
    <div className="w-full p-0 sm:p-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {educations.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-neutral-100 dark:border-slate-800 bg-[#FAF7F2]/95 dark:bg-slate-900/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-green-500 opacity-70 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100/70 dark:bg-green-900 transition-transform duration-300 group-hover:scale-110">
                <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-green-300" />
              </div>
              <span className="text-2xl font-bold text-neutral-300 dark:text-slate-800">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-green-900/60 text-emerald-600 dark:text-green-300 mb-3 w-fit">
              {item.period}
            </span>

            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-1 leading-snug">
              {item.degree}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
              {item.institute}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
