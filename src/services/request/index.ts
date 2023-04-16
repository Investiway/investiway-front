import axios from 'axios';
import { RefreshTokenUser } from '../../api/user';
import { useNavigate } from 'react-router-dom';

const request = axios.create({
  baseURL: 'http://localhost:8010/v1',
  timeout: 30000,
});

request.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  (error) => Promise.reject(error),
);
request.interceptors.response.use(
  (response) => response,
  async (err) => {
    // if (err.response.data.statusCode === 401 && localStorage.getItem('token')) {
    const originalConfig = err.config;

    // Access Token was expired
    if (err.response.data.statusCode === 401) {
      try {
        if (originalConfig.url !== '/auth/refresh') {
          await localStorage.removeItem('token');
          const refreshToken = String(localStorage.getItem('refresh_token'));
          const rs = await RefreshTokenUser(refreshToken);

          const { accessToken } = rs.data.result;
          if (accessToken) localStorage.setItem('token', accessToken);
          else {
            const navigate = useNavigate();
            navigate('/');
          }
          return request(originalConfig);
        }
      } catch (_error) {
        return Promise.reject(_error);
      }
    }
    return Promise.reject(err);
  },

  //   const originalRequest = error.config;
  //   console.log('originalRequest', originalRequest);
  //   localStorage.removeItem('token');
  //   const refreshToken = String(localStorage.getItem('refresh_token'));
  //   RefreshTokenUser(refreshToken)
  //     .then((response) => {
  //       const token = response.data.result.accessToken;
  //       localStorage.setItem('token', token);
  //     })
  //     .catch()
  //     .finally(() => {}); // location.replace(import.meta.env.VITE_BASE_API_URL + 'auth');
  // }
  // return Promise.reject(error);
  // },
);
export default request;
