/**
 * Benford's Law anomaly detection logic for ERP Exception-Detection Engine.
 * First digit d (1 <= d <= 9) theoretical probability: P(d) = log10(1 + 1/d)
 */

export interface BenfordDigitStat {
  digit: number;
  expectedPct: number; // percentage (e.g. 30.1% for 1)
  observedPct: number; // observed percentage in ERP sample
  count: number;
  isAnomaly: boolean;
  deviation: number;
}

export function getTheoreticalBenfordProbability(digit: number): number {
  if (digit < 1 || digit > 9 || !Number.isInteger(digit)) {
    throw new Error('Digit must be an integer between 1 and 9');
  }
  return Math.log10(1 + 1 / digit);
}

export function extractFirstDigit(value: number): number | null {
  const absVal = Math.abs(value);
  if (absVal === 0) return null;
  const str = absVal.toString().replace(/^0+/, '').replace('.', '');
  for (let i = 0; i < str.length; i++) {
    const d = parseInt(str[i], 10);
    if (d >= 1 && d <= 9) return d;
  }
  return null;
}

export function analyzeBenfordDistribution(
  numbers: number[],
  anomalyThresholdPct: number = 5.0
): {
  stats: BenfordDigitStat[];
  totalSample: number;
  anomalyDetected: boolean;
  chiSquareScore: number;
} {
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  let totalValid = 0;

  for (const n of numbers) {
    const digit = extractFirstDigit(n);
    if (digit !== null) {
      counts[digit] = (counts[digit] || 0) + 1;
      totalValid++;
    }
  }

  if (totalValid === 0) {
    const stats: BenfordDigitStat[] = Array.from({ length: 9 }, (_, i) => {
      const d = i + 1;
      const exp = getTheoreticalBenfordProbability(d) * 100;
      return {
        digit: d,
        expectedPct: parseFloat(exp.toFixed(1)),
        observedPct: 0,
        count: 0,
        isAnomaly: false,
        deviation: 0,
      };
    });
    return { stats, totalSample: 0, anomalyDetected: false, chiSquareScore: 0 };
  }

  let chiSquareScore = 0;
  let hasAnomaly = false;

  const stats: BenfordDigitStat[] = [];
  for (let d = 1; d <= 9; d++) {
    const expectedProb = getTheoreticalBenfordProbability(d);
    const expectedCount = expectedProb * totalValid;
    const expectedPct = expectedProb * 100;
    const actualCount = counts[d] || 0;
    const observedPct = (actualCount / totalValid) * 100;
    const deviation = observedPct - expectedPct;

    if (expectedCount > 0) {
      chiSquareScore += Math.pow(actualCount - expectedCount, 2) / expectedCount;
    }

    const isAnomaly = Math.abs(deviation) >= anomalyThresholdPct;
    if (isAnomaly) hasAnomaly = true;

    stats.push({
      digit: d,
      expectedPct: parseFloat(expectedPct.toFixed(1)),
      observedPct: parseFloat(observedPct.toFixed(1)),
      count: actualCount,
      isAnomaly,
      deviation: parseFloat(deviation.toFixed(1)),
    });
  }

  return {
    stats,
    totalSample: totalValid,
    anomalyDetected: hasAnomaly,
    chiSquareScore: parseFloat(chiSquareScore.toFixed(2)),
  };
}
