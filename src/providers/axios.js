import axios from "axios";


export const instance = axios.create({
    baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
    timeout: 10000,
})
