"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const day1_1 = require("../days/day1");
(0, globals_1.describe)('Day 1', () => {
    const testData = `3   4
4   3
2   5
1   3
3   9
3   3`;
    (0, globals_1.test)('Should return 11', () => {
        (0, globals_1.expect)((0, day1_1.part1)(testData)).toBe(11);
    });
    (0, globals_1.test)('Should return 31', () => {
        (0, globals_1.expect)((0, day1_1.part2)(testData)).toBe(31);
    });
});
