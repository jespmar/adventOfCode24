import { getPuzzleData } from "../utils/inputData"

export const part1 = (input:any) => {

    const lineArray = input.split("\n")
    const arr:any = []
    for (let line of lineArray) {
        const spl = line.split("")
        arr.push(spl)
    }

    const gL = (row:number, col:number) => {

        if (arr[row]) {
            if (arr[row][col]) return arr[row][col]
            else return ""
        } else return ""

    }

    const search = (dir:string, row:number, col:number) => {

        switch(dir){
            case "fw":
                return gL(row, col) + gL(row, col+1) + gL(row, col+2) + gL(row, col+3)
            case "bw":
                return gL(row, col) + gL(row, col-1) + gL(row, col-2) + gL(row, col-3)
            case "down":
                return gL(row, col) + gL(row+1, col) + gL(row+2, col) + gL(row+3, col)
            case "up":
                return gL(row, col) + gL(row-1, col) + gL(row-2, col) + gL(row-3, col)
            case "fwUp":
                return gL(row, col) + gL(row-1, col+1) + gL(row-2, col+2) + gL(row-3, col+3)
            case "fwDown":
                return gL(row, col) + gL(row+1, col+1) + gL(row+2, col+2) + gL(row+3, col+3)
            case "bwDown":
                return gL(row, col) + gL(row+1, col-1) + gL(row+2, col-2) + gL(row+3, col-3)
            case "bwUp":
                return gL(row, col) + gL(row-1, col-1) + gL(row-2, col-2) + gL(row-3, col-3)
        }

    }

    let xmas = []

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[row].length; col++) {

            const words = [
                search("fw", row, col),
                search("bw", row, col),
                search("up", row, col),
                search("down", row, col),
                search("fwUp", row, col),
                search("fwDown", row, col),
                search("bwUp", row, col),
                search("bwDown", row, col)
            ]


            for (let word of words) {

                if (word === "XMAS") xmas.push(word)

            }


        }


    }

    console.log(xmas.length)

    return xmas.length

}

export const part2 = (input:any) => {
    
    const lineArray = input.split("\n")
    const arr:any = []
    for (let line of lineArray) {
        const spl = line.split("")
        arr.push(spl)
    }

    const gL = (row:number, col:number) => {

        if (arr[row]) {
            if (arr[row][col]) return arr[row][col]
            else return ""
        } else return ""

    }

    const search = (dir:string, row:number, col:number) => {

        switch(dir){
            case "fw":
                return gL(row, col) + gL(row, col+1) + gL(row, col+2) + gL(row, col+3)
            case "bw":
                return gL(row, col) + gL(row, col-1) + gL(row, col-2) + gL(row, col-3)
            case "down":
                return gL(row, col) + gL(row+1, col) + gL(row+2, col) + gL(row+3, col)
            case "up":
                return gL(row, col) + gL(row-1, col) + gL(row-2, col) + gL(row-3, col)
            case "fwUp":
                return gL(row, col) + gL(row-1, col+1) + gL(row-2, col+2)
            case "fwDown":
                return gL(row, col) + gL(row+1, col+1) + gL(row+2, col+2)
            case "bwDown":
                return gL(row, col) + gL(row+1, col-1) + gL(row+2, col-2)
            case "bwUp":
                return gL(row, col) + gL(row-1, col-1) + gL(row-2, col-2)
            default:
                return ""
        }

    }

    let xmas = []

    for (let row = 0; row < arr.length; row++) {

        for (let col = 0; col < arr[row].length; col++) {

           if (arr[row][col] == "A"){

            let mas = []
            let words = [
                search("fwDown", row-1, col-1),
                search("bwUp", row+1, col+1),
                search("fwUp", row+1, col-1),
                search("bwDown", row-1, col+1)
            ]

            for (let word of words) {

                if (word == "MAS") mas.push(word)

            }

            if (mas.length === 2) xmas.push(mas)

           }


        }


    }

    console.log(xmas.length)

    return xmas.length

}

const puzzle = async (year:string, day:string) => {

    const input = await getPuzzleData(`https://adventofcode.com/${year}/day/${day}/input`)
    
    const result1 = part1(input.plain)
    const result2 = part2(input.plain)

    console.log({result1, result2})

}


export default puzzle