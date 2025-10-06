import axios from "axios"

export const api = axios.create({
    baseURL: "https://foodbridge-backend-nj4z.onrender.com",
    timeout: 2000
})