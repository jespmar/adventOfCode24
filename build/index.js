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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
const prompts_1 = require("@inquirer/prompts");
require("dotenv/config");
const days_1 = __importDefault(require("./days"));
const functionName_1 = require("./utils/functionName");
console.log("Welcome to Advent of Code! 🧑‍🎄");
const sum = (a, b) => {
    return a + b;
};
exports.sum = sum;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const days = [];
    for (let i = 0; i < 24; i++) {
        days.push({
            name: `Day ${i + 1}`,
            value: (i + 1).toString()
        });
    }
    const answer = yield (0, prompts_1.select)({
        message: 'Day to run',
        choices: [
            {
                name: 'Todays Puzzle',
                value: 'today',
            },
            ...days
        ],
    });
    if (answer === "today") {
        const day = new Date().getDate().toString();
        const month = new Date().getMonth() + 1;
        if (month !== 12)
            console.log("Not December Yet");
        else {
            const p = (0, functionName_1.getFunctionName)(day);
            yield (0, days_1.default)()[p]("2024", day);
        }
    }
    else {
        const p = (0, functionName_1.getFunctionName)(answer);
        yield (0, days_1.default)()[p]("2024", answer);
    }
});
main();
