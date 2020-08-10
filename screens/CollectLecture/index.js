import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';

// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// stack에 쌓을 screen을 불러온다.
import CollectureLectureScreen from '../MainScreen'; // 나중에 윤혁님이 만드신 스크린 경로로 바꾼다.
import LectureScreen from '../LectureScreen';

const CollectureLectureStack = createStackNavigator();

export default function CollectureLectureStackComponent() {
  return (
    <CollectureLectureStack.Navigator
      initialRouteName="CollectLecture"
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
      <CollectureLectureStack.Screen
        name="CollectLecture"
        component={CollectureLectureScreen}
      />
      <CollectureLectureStack.Screen name="Lecture" component={LectureScreen} />
    </CollectureLectureStack.Navigator>
  );
}
