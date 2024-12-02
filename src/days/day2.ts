import { getPuzzleData } from "../utils/inputData"

export const part1 = (input:any) => {

    const reports = []

    const lineArray = input.split("\n")

    for (let line of lineArray) {

        const spl = line.split(" ")
        reports.push(spl)

    }

    const isIncrease = (a:number, b:number) => {
        if (b > a) return true
        else return false
    }

    const isDecrease = (a:number, b:number) => {
        if (a > b) return true
        else return false
    }

    const getLevel = (a:number, b:number) => {
        if (a > b) return a - b
        else return b - a
    }

    const checkReport = (report:string[]) => {


        let direction:"increase" | "decrease" | null = null
        let unsafe = false

        for (let i = 0; i < report.length - 1; i++) {
            let a = parseInt(report[i])
            let b = parseInt(report[i+1])

            const level = getLevel(a,b)

            if (level === 0 || level > 3) {
                unsafe = true
                return unsafe
            }


            if (isIncrease(a,b)) {
                if (!direction) {
                    direction = "increase"
                }
                else if (direction !== "increase") {
                    unsafe = true
                    return unsafe
                }
            }

            if (isDecrease(a,b)) {
                if (!direction) {
                    direction = "decrease"
                }
                else if (direction !== "decrease") {
                    unsafe = true
                    return unsafe
                }
            }

            

        }

        return unsafe


    }

    let safeReports = 0

    for (let report of reports) {

        if (report.length > 1) {
            const unsafe = checkReport(report)

        if (!unsafe) safeReports++
        }

    }

    return safeReports

}

export const part2 = (input:any) => {

    const reports = []

    const lineArray = input.split("\n")

    for (let line of lineArray) {

        const spl = line.split(" ")
        reports.push(spl)

    }

    const isIncrease = (a:number, b:number) => {
        if (b > a) return true
        else return false
    }

    const isDecrease = (a:number, b:number) => {
        if (a > b) return true
        else return false
    }

    const getLevel = (a:number, b:number) => {
        if (a > b) return a - b
        else return b - a
    }

    const checkReport = (report:string[]) => {


        let direction:"increase" | "decrease" | null = null
        let unsafe = false

        for (let i = 0; i < report.length - 1; i++) {
            let a = parseInt(report[i])
            let b = parseInt(report[i+1])

            const level = getLevel(a,b)

            if (level === 0 || level > 3) {
                unsafe = true
                return unsafe
            }


            if (isIncrease(a,b)) {
                if (!direction) {
                    direction = "increase"
                }
                else if (direction !== "increase") {
                    unsafe = true
                    return unsafe
                }
            }

            if (isDecrease(a,b)) {
                if (!direction) {
                    direction = "decrease"
                }
                else if (direction !== "decrease") {
                    unsafe = true
                    return unsafe
                }
            }

            

        }

        return unsafe


    }

    let safeReports = 0

    for (let report of reports) {

        if (report.length > 1) {
            const unsafe = checkReport(report)

        if (unsafe) {

            for (let i = 0; i < report.length; i++) {

                const arr = [...report]
                arr.splice(i,1)
                const unsafe = checkReport(arr)

                if (!unsafe) {
                    safeReports++
                    break
                }

            }


        }

        if (!unsafe) {
            safeReports++
        }
        }

    }

    return safeReports
    
    

}

const puzzle = async (year:string, day:string) => {

    const input = await getPuzzleData(`https://adventofcode.com/${year}/day/${day}/input`)
    
    const result1 = part1(input.plain)
    const result2 = part2(input.plain)

    console.log({result1, result2})

}


export default puzzle