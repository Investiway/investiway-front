import request from '../services/request';

export function RefreshTokenUser(token: string) {
  return request({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: '/auth/refresh',
    method: 'get',
  });
}
