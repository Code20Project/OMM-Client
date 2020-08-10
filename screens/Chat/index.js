import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';

// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// stack에 쌓을 screen을 불러온다.
import Calender from '../MainScreen'; // 나중에 윤혁님이 만드신 스크린 경로로 바꾼다.
import LectureReservation from '../LoginScreen';
import DetailReservation from '../SignupScreen';

const ChatStack = createStackNavigator();

export default function ChatStackComponent() {
  return (
    <ChatStack.Navigator initialRouteName="Calender">
      <ChatStack.Screen name="Calender" component={Calender} />
      <ChatStack.Screen
        name="LectureReservation"
        component={LectureReservation}
      />
      <ChatStack.Screen
        name="DetailReservation"
        component={DetailReservation}
      />
    </ChatStack.Navigator>
  );
}
