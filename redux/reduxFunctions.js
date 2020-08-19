// props에 store와 dispatch 할 함수를 넣어주는 함수를 작성하는 곳입니다.

// 아까 만들었던 setToken() 라는 액션을 가져옵니다.
import {
  setEmail, setToken, setName, setIsLogin, setPosition,
} from './actions';

// props에 store의 값들을 넣는다.
export const mapStateToProps = (state) => ({
  email: state.userReducer.email,
  name: state.userReducer.email,
  token: state.userReducer.token,
  isLogin: state.userReducer.isLogin,
  position: state.userReducer.position,

});

// Reducer에 action을 알리는 함수 dispatch를 어떻게 props에 엮을 지 정하는 함수
export const mapDispatchToProps = (dispatch) => ({
  dispatchSetEmail: (email) => dispatch(setEmail(email)),
  dispatchSetName: (name) => dispatch(setName(name)),
  dispatchSetToken: (token) => dispatch(setToken(token)),
  dispatchSetIsLogin: (isLogin) => dispatch(setIsLogin(isLogin)),
  dispatchSetPosition: (position) => dispatch(setPosition(position)),
});
