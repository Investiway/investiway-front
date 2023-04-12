import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:8010/v1',
  timeout: 30000,
});

request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => Promise.reject(error),
);
request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.data.statusCode === 401) {
      // location.replace(import.meta.env.VITE_BASE_API_URL + 'auth');
    }
    return Promise.reject(error);
  },
);
export default request;
