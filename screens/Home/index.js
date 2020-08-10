import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';

// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// stack에 쌓을 screen을 불러온다.
import HomeScreen from './HomeScreen';
import LectureScreen from '../LectureScreen';

const HomeStack = createStackNavigator();

export default function HomeStackComponent() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Lecture" component={LectureScreen} />
    </HomeStack.Navigator>
  );
}
