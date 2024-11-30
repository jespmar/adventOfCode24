"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const day1_1 = require("../days/day1");
(0, globals_1.describe)('Day 1', () => {
    const testData = "";
    (0, globals_1.test)('adds 1 + 2 to equal 3', () => {
        (0, globals_1.expect)((0, day1_1.part1)(testData)).toBe(undefined);
    });
    (0, globals_1.test)('adds 1 + 2 to equal 3', () => {
        (0, globals_1.expect)((0, day1_1.part2)(testData)).toBe(undefined);
    });
});
