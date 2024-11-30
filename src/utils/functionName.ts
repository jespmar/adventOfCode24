export const getFunctionName = (day:string):
"day1" | "day2" | "day3" | "day4" | "day5" | "day6" | "day7" | "day8" | "day9" | "day10" | "day11" | "day12" | "day13" | "day14"  => {

    switch(day){
        case "1":
            return "day1"
        case "2":
            return "day2"
        case "3":
            return "day3"
        case "4":
            return "day4"
        case "5":
            return "day5"
        case "6":
            return "day6"
        case "7":
            return "day7"
        case "8":
            return "day8"
        case "9":
            return "day9"
        case "10":
            return "day10"
        case "11":
            return "day11"
        case "12":
            return "day12"
        case "13":
            return "day13"
        case "14":
            return "day14"
        default:
            return "day1"

    }


}