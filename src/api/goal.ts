import request from '../services/request';
export function getGoal(params: object) {
  return request({
    url: '/goal/search',
    method: 'get',
    params,
  });
}
export function createGoal(data: object) {
  return request({
    url: '/goal',
    method: 'post',
    data,
  });
}
