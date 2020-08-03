// import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './screens/MainScreen';
import Login from './screens/LoginScreen';
import Signup from './screens/SignupScreen';
// import Reservation from "../OMM-client/Component/Reservation";

const Stack = createStackNavigator();

// App 메인화면
export default function App() {
  // session이 유지가 안 되어 있으면 Main 화면으로 return
  // Mavigation

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false } /* 헤더바를 숨긴다 */} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Signup />
  );
}
