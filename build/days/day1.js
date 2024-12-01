"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.part2 = exports.part1 = void 0;
const inputData_1 = require("../utils/inputData");
const part1 = (input) => {
    const lineArray = input.split("\n");
    let left = [];
    let right = [];
    for (let line of lineArray) {
        const spl = line.split("   ");
        if (spl.length == 2) {
            left.push(parseInt(spl[0]));
            right.push(parseInt(spl[1]));
        }
    }
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);
    let diff = 0;
    for (let i = 0; i < left.length; i++) {
        let a = left[i];
        let b = right[i];
        let d;
        if (typeof a === "number") {
            if (a > b)
                d = a - b;
            else
                d = b - a;
            if (diff >= 0)
                diff = diff + d;
        }
    }
    console.log(diff);
    return diff;
};
exports.part1 = part1;
const part2 = (input) => {
    const lineArray = input.split("\n");
    let left = [];
    let right = [];
    for (let line of lineArray) {
        const spl = line.split("   ");
        if (spl.length == 2) {
            left.push(parseInt(spl[0]));
            right.push(parseInt(spl[1]));
        }
    }
    let score = 0;
    for (let i = 0; i < left.length; i++) {
        let match = 0;
        const l = left[i];
        for (let r of right) {
            if (l === r)
                match++;
        }
        score = score + (l * match);
    }
    return score;
};
exports.part2 = part2;
const puzzle = (year, day) => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield (0, inputData_1.getPuzzleData)(`https://adventofcode.com/${year}/day/${day}/input`);
    const result1 = (0, exports.part1)(input.plain);
    const result2 = (0, exports.part2)(input.plain);
    console.log({ result1, result2 });
});
exports.default = puzzle;
