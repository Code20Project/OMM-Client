import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

// Navigation을 쓰기 위한  import
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// stack에 쌓을 screen을 불러온다.
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import LectureScreen from '../LectureScreen';

const HomeStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function HomeStackComponent(navigation) {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      //* ******** header 전체쪽 색깔 옵션주는 곳
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
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          // *********** 햄버거 버튼 쪽 옵션
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              style={styles.headerLeft}
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
      <HomeStack.Screen name="Lecture" component={LectureScreen} />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 16,
  },
});
