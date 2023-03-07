import axios from "axios";

export const api = axios.create({
    baseURL: "https://project-m3-kenzie-group7.onrender.com",
    timeout: 12000,
});