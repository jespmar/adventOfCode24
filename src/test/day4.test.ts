import {describe, expect, test} from '@jest/globals';
import {part1, part2} from "../days/day4"


describe('Day 4', () => {

    const testData = 
    `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`


  test('Should return 18', () => {
    expect(part1(testData)).toBe(18);
  });

  test('Should return 9', () => {
    expect(part2(testData)).toBe(9);
  });
});