import {
  SET_USERID, SET_EMAIL, SET_NAME, SET_TOKEN, SET_LOGIN,
} from '../constants';

// 기본값을 설정해주고
const initialState = {
  userId: undefined,
  email: '',
  name: '',
  token: '',
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // 위에서 작성한것처럼 type이 'SET_USERID'로 요청이 오면
    case SET_USERID:
      // 그밖의 state 값들을 포함하고 userId 라는 값에 actions에서 받은 userId 값을 Set 합니다.
      return { ...state, userId: action.userId };
    case SET_EMAIL:
      return { ...state, email: action.email };
    case SET_NAME:
      return { ...state, name: action.name };
    case SET_TOKEN:
      return { ...state, token: action.token };
    case SET_LOGIN:
      return { ...state, isLogin: action.isLogin };
    default:
      return state;
  }
};

export default userReducer;
