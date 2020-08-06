import { SET_USERID, SET_TOKEN, SET_LOGIN } from '../constants';

export const setUserId = (userId) => ({
  type: SET_USERID,
  userId,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setIsLogin = (isLogin) => ({
  type: SET_LOGIN,
  isLogin,
});
