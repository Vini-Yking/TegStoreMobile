import axios from "axios";

export const api = axios.create({
    baseURL: "https://teg-store-api.herokuapp.com/tegloja",

})