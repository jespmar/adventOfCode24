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
};
exports.part1 = part1;
const part2 = (input) => {
};
exports.part2 = part2;
const puzzle = (year, day) => __awaiter(void 0, void 0, void 0, function* () {
    const input = yield (0, inputData_1.getPuzzleData)(`https://adventofcode.com/${year}/day/${day}/input`);
    const result1 = (0, exports.part1)(input);
    const result2 = (0, exports.part2)(input);
    console.log({ result1, result2 });
});
exports.default = puzzle;
