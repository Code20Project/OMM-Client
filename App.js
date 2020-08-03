// import { StatusBar } from 'expo-status-bar';
import React from 'react';

// import Main from "./screens/MainScreen";
// import Signup from './screens/SignupScreen';
import Login from './screens/LoginScreen';
// import Reservation from "../OMM-client/Component/Reservation";

// App 메인화면
export default function App() {
  // session이 유지가 안 되어 있으면 Main 화면으로 return
  return <Login />;
}
