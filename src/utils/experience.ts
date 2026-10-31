/**
 * Calculates full completed years of experience from September 2, 2023.
 * Automatically increments on September 2nd of each year.
 */
export function getYearsOfExperience(currentDate: Date = new Date()): number {
  const startYear = 2023;
  const targetMonth = 8; // September (0-indexed)
  const targetDay = 2;   // 2nd

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let years = currentYear - startYear;

  // Check if September 2nd has arrived in the current year
  const anniversaryReached =
    currentMonth > targetMonth ||
    (currentMonth === targetMonth && currentDay >= targetDay);

  if (!anniversaryReached) {
    years -= 1;
  }

  return Math.max(1, years);
}
