import {
  SET_EMAIL, SET_NAME, SET_TOKEN, SET_LOGIN, SET_POSITION,
} from '../constants';

// 기본값을 설정해주고
const initialState = {
  email: '',
  name: '',
  token: '',
  isLogin: false,
  position: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // 위에서 작성한것처럼 type이 'SET_EMAIL'로 요청이 오면
    case SET_EMAIL:
      // 그밖의 state 값들을 포함하고 email 라는 값에 actions에서 받은 email 값을 Set 합니다.
      return { ...state, email: action.email };
    case SET_NAME:
      return { ...state, name: action.name };
    case SET_TOKEN:
      return { ...state, token: action.token };
    case SET_LOGIN:
      return { ...state, isLogin: action.isLogin };
    case SET_POSITION:
      return { ...state, position: action.position };
    default:
      return state;
  }
};

export default userReducer;
