// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import Main from './screens/MainScreen';
import Login from './screens/LoginScreen';
import Signup from './screens/SignupScreen';
// import Reservation from "../OMM-client/Component/Reservation";

// redux 관련
import store from './redux/store';

const Stack = createStackNavigator();

// App 메인화면
export default function App() {
  // Mavigation

  return (
    // React-redux 컴포넌트로 감싸고 속성으로 store가 선언됩니다.
    // 이렇게하여 내부의 모든 컴포넌트는 react-redux의 손아귀에 들어옵니다.
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false } /* 헤더바를 숨긴다 */} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
