import test from 'node:test';
import assert from 'node:assert/strict';
import { getYearsOfExperience } from './experience';

test('getYearsOfExperience returns 3 for late 2026', () => {
  const d = new Date(2026, 9, 31); // October 31, 2026
  assert.equal(getYearsOfExperience(d), 3);
});

test('getYearsOfExperience returns 3 on Sep 1, 2027 (day before anniversary)', () => {
  const d = new Date(2027, 8, 1); // September 1, 2027
  assert.equal(getYearsOfExperience(d), 3);
});

test('getYearsOfExperience increments to 4 on Sep 2, 2027 (anniversary date)', () => {
  const d = new Date(2027, 8, 2); // September 2, 2027
  assert.equal(getYearsOfExperience(d), 4);
});

test('getYearsOfExperience returns 4 on Sep 3, 2027 and throughout remainder of year', () => {
  const d = new Date(2027, 8, 3); // September 3, 2027
  assert.equal(getYearsOfExperience(d), 4);
});

test('getYearsOfExperience increments to 5 on Sep 2, 2028', () => {
  const d = new Date(2028, 8, 2); // September 2, 2028
  assert.equal(getYearsOfExperience(d), 5);
});
