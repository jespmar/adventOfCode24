import { getPuzzleData } from "../utils/inputData"

export const part1 = (input:any) => {

}

export const part2 = (input:any) => {
    
}

const puzzle = async (year:string, day:string) => {

    const input = await getPuzzleData(`https://adventofcode.com/${year}/day/${day}/input`)
    
    const result1 = part1(input)
    const result2 = part2(input)

    console.log({result1, result2})

}


export default puzzle