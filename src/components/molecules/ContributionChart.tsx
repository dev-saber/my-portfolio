import { cloneElement, useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent as ReactMouseEvent } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";

const GITHUB_USERNAME = "dev-saber";
const CONTRIBUTIONS_API = "https://github-contributions-api.jogruber.de/v4";

type Range = "all" | "year";

const RANGE_OPTIONS: { key: Range; label: string }[] = [
  { key: "all", label: "All Time" },
  { key: "year", label: "This Year" },
];

function useResolvedColorScheme(): "light" | "dark" {
  const [scheme, setScheme] = useState<"light" | "dark">(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    const update = () =>
      setScheme(root.classList.contains("dark") ? "dark" : "light");

    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return scheme;
}

const ContributionChart = () => {
  const colorScheme = useResolvedColorScheme();
  const [range, setRange] = useState<Range>("all");
  const [data, setData] = useState<Activity[] | null>(null);
  const [error, setError] = useState(false);
  const cache = useRef<Partial<Record<Range, Activity[]>>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<{
    activity: Activity;
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    const cached = cache.current[range];
    if (cached) {
      setData(cached);
      setError(false);
      return;
    }

    let cancelled = false;
    setData(null);
    setError(false);

    const yearParam = range === "year" ? new Date().getFullYear() : "all";

    fetch(`${CONTRIBUTIONS_API}/${GITHUB_USERNAME}?y=${yearParam}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch contributions");
        return res.json();
      })
      .then((json: { contributions: Activity[] }) => {
        if (cancelled) return;
        const sorted = [...json.contributions].sort((a, b) =>
          a.date.localeCompare(b.date)
        );
        cache.current[range] = sorted;
        setData(sorted);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [range]);

  const totalContributions = useMemo(
    () => data?.reduce((sum, activity) => sum + activity.count, 0) ?? 0,
    [data]
  );

  const handleBlockEnter = (
    e: ReactMouseEvent<SVGRectElement>,
    activity: Activity
  ) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setHovered({
      activity,
      x:
        rect.left - containerRect.left + rect.width / 2 + container.scrollLeft,
      y: rect.bottom - containerRect.top + container.scrollTop + 8,
    });
  };

  const formatTooltip = (activity: Activity) =>
    `${activity.count} contribution${
      activity.count === 1 ? "" : "s"
    } on ${activity.date}`;

  return (
    <div className="w-4/5 mx-auto bg-white/90 dark:bg-slate-900/80 border border-neutral-100 dark:border-slate-800 rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <h3 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
          GitHub Contributions
        </h3>
        <div className="inline-flex items-center gap-1 rounded-full bg-neutral-100 dark:bg-slate-800 p-1 w-fit">
          {RANGE_OPTIONS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setRange(key)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                range === key
                  ? "bg-white dark:bg-slate-950 text-emerald-600 dark:text-green-400 shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative">
        {error ? (
          <p className="text-sm text-neutral-500 dark:text-neutral-400 py-6 text-center">
            Couldn't load contribution data right now.
          </p>
        ) : (
          <ActivityCalendar
            data={data ?? []}
            loading={!data}
            blockSize={12}
            blockMargin={4}
            blockRadius={2}
            fontSize={12}
            colorScheme={colorScheme}
            theme={{
              light: ["#ebedf0", "#a7f3d0", "#6ee7b7", "#34d399", "#059669"],
              dark: ["#1e293b", "#064e3b", "#065f46", "#059669", "#34d399"],
            }}
            renderBlock={(block, activity) =>
              cloneElement(block, {
                onMouseEnter: (e: ReactMouseEvent<SVGRectElement>) =>
                  handleBlockEnter(e, activity),
                onMouseLeave: () => setHovered(null),
              })
            }
            labels={{
              totalCount: `${totalContributions} contributions ${
                range === "all" ? "in total" : "this year"
              }`,
            }}
          />
        )}

        <span
          className={`absolute z-20 w-max max-w-[220px] -translate-x-1/2 whitespace-nowrap rounded-lg bg-white dark:bg-slate-900 text-neutral-700 dark:text-neutral-200 text-xs px-4 py-2 shadow-lg pointer-events-none transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
          style={{ left: hovered?.x ?? 0, top: hovered?.y ?? 0 }}
        >
          {hovered ? formatTooltip(hovered.activity) : ""}
        </span>
      </div>
    </div>
  );
};

export default ContributionChart;
