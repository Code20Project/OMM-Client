import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';

// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// stack에 쌓을 screen을 불러온다.
import Calender from '../MainScreen'; // 나중에 윤혁님이 만드신 스크린 경로로 바꾼다.
import LectureReservation from '../LoginScreen';
import DetailReservation from '../SignupScreen';

const LectureReservationStack = createStackNavigator();

export default function LectureReservationStackComponent() {
  return (
    <LectureReservationStack.Navigator
      initialRouteName="Calender"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <LectureReservationStack.Screen name="Calender" component={Calender} />
      <LectureReservationStack.Screen
        name="LectureReservation"
        component={LectureReservation}
      />
      <LectureReservationStack.Screen
        name="DetailReservation"
        component={DetailReservation}
      />
    </LectureReservationStack.Navigator>
  );
}
