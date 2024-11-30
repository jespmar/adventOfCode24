import axios from "axios"

export const getPuzzleData = async (url:string) => {


    const config = {
        headers: {
            "cookie": process.env.COOKIE
        }
    }

    const response = await axios.get(url, config)

    const plain = response.data
    const lineArray = response.data.split("\n")

    return {plain, lineArray}

}