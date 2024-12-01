import { getPuzzleData } from "../utils/inputData"

export const part1 = (input:any) => {
    const lineArray = input.split("\n");

    let left:any = []
    let right:any = []

    for (let line of lineArray) {
        const spl = line.split("   ")
        if (spl.length == 2) {
            left.push(parseInt(spl[0]))
            right.push(parseInt(spl[1]))
        }
    
    }

    left.sort((a:number, b:number) => a - b)
    right.sort((a:number, b:number) => a - b)

    let diff = 0

    for (let i = 0; i < left.length; i++) {
        
        let a = left[i]
        let b = right[i]
        let d

        if (typeof a === "number") {

            if (a > b) d = a - b
            else d = b - a

            if (diff >= 0) diff = diff + d

        }


    }


    return diff

}

export const part2 = (input:any) => {

    const lineArray = input.split("\n");

    let left:any = []
    let right:any = []

    for (let line of lineArray) {
        const spl = line.split("   ")
        if (spl.length == 2) {
            left.push(parseInt(spl[0]))
            right.push(parseInt(spl[1]))
        }
    
    }

    let score = 0

    for (let i = 0; i < left.length; i++) {

        let match = 0
        const l = left[i]

        for (let r of right) {

            if (l === r) match++

        }

        score = score + (l * match)

    }

    return score

    
    
}

const puzzle = async (year:string, day:string) => {

    const input = await getPuzzleData(`https://adventofcode.com/${year}/day/${day}/input`)
    
    const result1 = part1(input.plain)
    const result2 = part2(input.plain)

    console.log({result1, result2})

}


export default puzzle