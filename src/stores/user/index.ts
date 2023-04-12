import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../../utils/interfaces';
import request from '../../services/request';
import { RefreshTokenUser } from '../../api/user';
import { setLoading } from '../common';

const ACTION = {
  GET_USER: 'GET_USER',
};
interface UserStore {
  currentUser: User;
  token: string;
  refreshToken: string;
}
const userSlice = createSlice({
  name: 'user',
  initialState: {} as UserStore,
  reducers: {
    setUser(state, { payload }) {
      state.currentUser = payload;
    },
    setToken(state, { payload }) {
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      localStorage.setItem('token', payload.token);
      localStorage.setItem('refresh_token', payload.refreshToken);
    },
    [ACTION.GET_USER]() {
      request
        .post('/')
        .then(() => {
          // setUser(result.data)
        })
        .catch()
        .finally();
    },
    refreshToken(state) {
      setLoading(true);
      console.log(state.refreshToken);
      console.log(state.refreshToken===state.token);
      RefreshTokenUser(state.refreshToken)
        .then((response) => {
          setToken(response.data);
        })
        .catch()
        .finally(() => {
          setLoading(false);
        });
    },
  },
});

export const { setUser, setToken, refreshToken } = userSlice.actions;
export default userSlice.reducer;
