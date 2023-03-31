import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8010/v1",
    timeout: 30000,
});

request.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}, error => Promise.reject(error))

export default request;