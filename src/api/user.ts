import request from '../services/request';

export function RefreshTokenUser(token: string) {
  const headers = {
    Authorization: 'Bearer ' + token,
  };
  return request({
    headers,
    url: '/auth/refresh',
    method: 'get',
  });
}
