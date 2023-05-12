import axios from "axios"

const API_KEY = "81577682a3754dd7a5395349231205"

export default axios.create({
    baseURL: "http://api.weatherapi.com/v1",
    params: {
        key: API_KEY
    }
})