import axios from "./axios";

export const aboba = () => {axios.get("/?action=schedule").then(response => alert(response.data))};