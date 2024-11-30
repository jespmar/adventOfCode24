import { getPuzzleData } from "./utils/inputData"
import { select, Separator } from '@inquirer/prompts';
import 'dotenv/config'
import puzzle from "./days"

import inquirer from 'inquirer';
import { getFunctionName } from "./utils/functionName";

console.log("Welcome to Advent of Code! 🧑‍🎄")
console.log(process.env.NODE_ENV)

export const sum = (a:number, b:number) => {

    return a + b

}

const testGetData = async () => {

    const data = await getPuzzleData("https://adventofcode.com/2023/day/7/input")
    console.log(data.plain)
    console.log(data.lineArray)

}



const main = async () => {

    const days = []
    for (let i = 0; i < 24; i++) {

        days.push({
            name: `Day ${i + 1}`,
            value: (i + 1).toString()
        })

    }

    const answer = await select({
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

        const day = new Date().getDate().toString()
        const month = new Date().getMonth() + 1
        
        if (month !== 12) console.log("Not December Yet") 
            else {
                const p = getFunctionName(day)
                puzzle()[p]("2023", day )
            }

      }
        else {
    

            const p = getFunctionName(answer)

            puzzle()[p]("2023", answer)

            }

      

}

main()