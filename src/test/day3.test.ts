import {describe, expect, test} from '@jest/globals';
import {part1, part2} from "../days/day3"


describe('Day 3', () => {

    const testData = 
    `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`

    const testData2 = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5)"

  test('Should return 161', () => {
    expect(part1(testData)).toBe(161);
  });

  test('Should return 48', () => {
    expect(part2(testData2)).toBe(48);
  });
});