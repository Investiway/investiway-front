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
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // request.get('/auth/refresh')
      //     .then(response => {
      //         error.config.headers['Authorization'] = 'Bearer ' + response.data;
      //     })
      // error.config.baseURL = undefined;
      // return request.request(error.config);
    }
    return Promise.reject(error);
  },
);
export default request;
