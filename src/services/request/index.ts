import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8010",
    timeout: 30000,
});

export default request;