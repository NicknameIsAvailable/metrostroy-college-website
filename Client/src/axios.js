import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost/MetrostroyCollege/",
    withCredentials: true
})

export default instance;