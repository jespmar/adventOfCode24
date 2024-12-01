import {describe, expect, test} from '@jest/globals';
import {part1, part2} from "../days/day1"


describe('Day 1', () => {

    const testData = 
    `3   4
4   3
2   5
1   3
3   9
3   3`

  test('Should return 11', () => {
    expect(part1(testData)).toBe(11);
  });

  test('Should return 31', () => {
    expect(part2(testData)).toBe(31);
  });
});