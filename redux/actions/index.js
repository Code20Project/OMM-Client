import {
  SET_EMAIL, SET_NAME, SET_TOKEN, SET_LOGIN, SET_POSITION,
} from '../constants';

export const setEmail = (email) => ({
  type: SET_EMAIL,
  email,
});

export const setName = (name) => ({
  type: SET_NAME,
  name,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const setIsLogin = (isLogin) => ({
  type: SET_LOGIN,
  isLogin,
});

export const setPosition = (postion) => ({
  type: SET_POSITION,
  position,
});
