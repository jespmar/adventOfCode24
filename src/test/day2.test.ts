import {describe, expect, test} from '@jest/globals';
import {part1, part2} from "../days/day2"


describe('Day 1', () => {

    const testData = 
    `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`

  test('Should return 2', () => {
    expect(part1(testData)).toBe(2);
  });

  test('Should return 4', () => {
    expect(part2(testData)).toBe(4);
  });
});