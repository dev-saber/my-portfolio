import Title from "@/components/atoms/Title";
import ActivityGrid from "@/components/molecules/ActivityGrid";
import ContributionChart from "@/components/molecules/ContributionChart";
import Skills from "@/components/molecules/Skills";
import { useState } from "react";

const Activity = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const toggleFilter = (technology: string) => {
    setFilters((prev) =>
      prev.includes(technology)
        ? prev.filter((item) => item !== technology)
        : [...prev, technology]
    );
  };

  const isFiltered = (technology: string) => {
    return filters.includes(technology);
  };

  return (
    <section
      id="activity"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-32 lg:w-full mx-auto"
    >
      <Title>Activity</Title>

      <div className="flex flex-col gap-8 sm:gap-10">
        <div className="text-center sm:text-lg">
          Here are a few of my projects, you can explore them all from{" "}
          <span
            className="text-green-500 dark:text-green-400 font-semibold cursor-pointer"
            onClick={() =>
              window.open(
                "https://github.com/dev-saber?tab=repositories",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            here
          </span>
          .
        </div>

        <ContributionChart />

        <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 justify-between items-start">
          <div className="w-full lg:w-1/4 lg:order-2">
            <Skills
              isFiltered={isFiltered}
              filter={toggleFilter}
              filtersLength={filters.length}
            />
          </div>

          <div className="w-full lg:w-3/4 lg:order-1">
            <ActivityGrid filters={filters} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
