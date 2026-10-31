import test from 'node:test';
import assert from 'node:assert/strict';
import { getTheoreticalBenfordProbability, extractFirstDigit, analyzeBenfordDistribution } from './benford';
import { filterSystems, getRelatedSystemsForSkill } from './systemFilter';
import { SYSTEMS_DATA } from './portfolioData';

test("Benford's Law theoretical probability calculates standard values", () => {
  // P(1) = log10(1 + 1/1) = log10(2) ≈ 0.30103
  const p1 = getTheoreticalBenfordProbability(1);
  assert.ok(Math.abs(p1 - 0.30103) < 0.001, `Expected ~0.30103, got ${p1}`);

  // P(9) = log10(1 + 1/9) = log10(10/9) ≈ 0.045757
  const p9 = getTheoreticalBenfordProbability(9);
  assert.ok(Math.abs(p9 - 0.045757) < 0.001, `Expected ~0.045757, got ${p9}`);

  // Sum of P(1..9) must be 1.0
  let sum = 0;
  for (let d = 1; d <= 9; d++) {
    sum += getTheoreticalBenfordProbability(d);
  }
  assert.ok(Math.abs(sum - 1.0) < 0.0001, `Sum should be 1.0, got ${sum}`);
});

test('extractFirstDigit parses numbers with leading decimals and signs', () => {
  assert.equal(extractFirstDigit(1234), 1);
  assert.equal(extractFirstDigit(0.00456), 4);
  assert.equal(extractFirstDigit(-789.2), 7);
  assert.equal(extractFirstDigit(9), 9);
  assert.equal(extractFirstDigit(0), null);
});

test('analyzeBenfordDistribution detects anomalies when abnormal counts occur', () => {
  // Synthetic data with an unnatural spike in digit 7 (e.g. fraudulent invoice amounts like $7,900)
  const numbers: number[] = [];
  // Add some normal entries
  for (let i = 0; i < 50; i++) numbers.push(100 + i);
  // Add huge spike in 7s
  for (let i = 0; i < 150; i++) numbers.push(7000 + i);

  const result = analyzeBenfordDistribution(numbers, 5.0);
  assert.equal(result.totalSample, 200);
  assert.equal(result.anomalyDetected, true);

  const digit7Stat = result.stats.find((s) => s.digit === 7);
  assert.ok(digit7Stat !== undefined);
  assert.equal(digit7Stat?.isAnomaly, true);
  assert.ok((digit7Stat?.deviation ?? 0) > 20); // 75% observed vs ~5.8% expected
});

test('filterSystems filters correctly by category and skill keyword', () => {
  const allSystems = filterSystems(SYSTEMS_DATA, 'All');
  assert.equal(allSystems.length, 6);

  const pySparkSystems = filterSystems(SYSTEMS_DATA, 'PySpark & Distributed');
  assert.equal(pySparkSystems.length, 3);
  assert.ok(pySparkSystems.every((s) => s.category === 'PySpark & Distributed'));

  const genAiSystems = filterSystems(SYSTEMS_DATA, 'GenAI & RAG');
  assert.equal(genAiSystems.length, 1);
  assert.equal(genAiSystems[0].id, 'system-02');

  const dbtRelated = getRelatedSystemsForSkill('dbt');
  assert.ok(dbtRelated.includes('system-03'));
  assert.ok(dbtRelated.includes('system-04'));
});
