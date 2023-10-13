import axios from "axios";

const instance = axios.create({
    baseURL: "http://185.22.232.236",
    withCredentials: true
})

export default instance;