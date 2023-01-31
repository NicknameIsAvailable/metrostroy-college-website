import axios from "axios";

const instance = axios.create({
    baseURL: "10.1.2.22"
})

export default instance;