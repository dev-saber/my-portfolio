const MONTHS: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

function parseMonthYear(token: string): Date {
  const [month, year] = token.trim().split(" ");
  return new Date(Number(year), MONTHS[month.slice(0, 3).toLowerCase()], 1);
}

/** Computes a human-readable duration (e.g. "6 months", "1 yr 2 mo") from a
 * period string like "Feb 2026 - Jul 2026" or "Aug 2026 - Present". */
export function getDuration(period: string): string {
  const isPresent = /present/i.test(period);
  const [startToken, endToken] = period.split("-").map((p) => p.trim());

  const start = parseMonthYear(startToken);
  const end = isPresent ? new Date() : parseMonthYear(endToken ?? startToken);

  const totalMonths = Math.max(
    (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1,
    1
  );

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const suffix = isPresent ? "+" : "";

  if (years === 0) {
    return `${months}${suffix} ${months === 1 ? "month" : "months"}`;
  }

  const yearsLabel = `${years} ${years === 1 ? "yr" : "yrs"}`;
  const monthsLabel = months > 0 ? ` ${months} mo` : "";
  return `${yearsLabel}${monthsLabel}${suffix}`;
}
