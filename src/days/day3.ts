import { getPuzzleData } from "../utils/inputData"

export const part1 = (input:any) => {
    let rep = input.replaceAll(/mul[(]/gm, "start")
    rep = rep.replaceAll(/[)]/gm, "end")
    let spl = rep.split("start")
    spl = spl.join("join")
    spl = spl.split("end")
    spl = spl.join("join")
    spl = spl.split("join")

    let nums = []
    
    for (let i = 0; i < spl.length; i++) {

        if (spl[i] != "") {
          const m = spl[i].match(/[^0-9\.,]/g)
        if (m == null) nums.push(spl[i])  
        }
        
    }

    let val = 0


    for (let num of nums) {

       if (num !== ",") {
        let spl = num.split(",")
        
        val = val + (parseInt(spl[0]) * parseInt(spl[1]))
       }

    }

    return val

}

export const part2 = (input:any) => {

    let rep = input.replaceAll("don't()", "donotstart")
    rep = rep.replaceAll("do()", "dothisnow")
    rep = rep.replaceAll(/donotstart(.*?)dothisnow/g, "")
    rep = rep.replaceAll("donotstart", "")
    rep = rep.replaceAll("dothisnow", "")
    console.log(rep)
    rep = rep.replaceAll(/mul[(]/gm, "start")
    rep = rep.replaceAll(/[)]/gm, "end")
    console.log(rep)
    let spl = rep.split("start")
    spl = spl.join("join")
    spl = spl.split("end")
    spl = spl.join("join")
    spl = spl.split("join")

    let nums = []
    
    for (let i = 0; i < spl.length; i++) {

        //console.log(spl[i])
        if (spl[i] != "") {
          const m = spl[i].match(/[^0-9\.,]/g)
          //console.log(m)
        if (m == null) nums.push(spl[i])  
        }
        
    }

    let val = 0

    //console.log(nums)

    for (let num of nums) {

       if (num !== ",") {
        let spl = num.split(",")
        
        val = val + (parseInt(spl[0]) * parseInt(spl[1]))
       }

    }

    return val
    
}

const puzzle = async (year:string, day:string) => {

    const input = await getPuzzleData(`https://adventofcode.com/${year}/day/${day}/input`)
    
    const result1 = part1(input.plain)
    const result2 = part2(input.plain)

    console.log({result1, result2})

}


export default puzzle