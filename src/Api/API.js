import axios from "axios"
const baseURL = "https://react-midterm.kreosoft.space/api"

export const instance = axios.create({
    headers:{
        Authorization : "Bearer " + localStorage.getItem("token"),
    },
    baseURL,
})
