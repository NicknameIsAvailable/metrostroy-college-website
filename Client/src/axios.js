import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost/metrostroy-college-website/"
})

export default instance;