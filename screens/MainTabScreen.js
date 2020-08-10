import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import HomeScreen from './Home/HomeScreen';
import MyLectureListScreen from './MyLectureListScreen';

import Tab1 from './LectureTab/Tab1';
import Tab2 from './LectureTab/Tab2';
import Tab3 from './LectureTab/Tab3';

const HomeStack = createStackNavigator();
// const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MyLectrueStack = createStackNavigator();
// 보류
const MyWishListStack = createStackNavigator();
const PreOrderLectureStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

// ************* BottomTabNav 쪽 *****************

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Lecture"
      component={Tab3}
      options={{
        tabBarLabel: '강의 목록',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="collections" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={Tab2}
      options={{
        tabBarLabel: '채팅',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <EntypoIcon name="chat" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Point Store"
      component={Tab3}
      options={{
        tabBarLabel: 'Point Store',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <EntypoIcon name="shop" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

// ************ header 쪽 ( 햄버거 포함 ) ****************

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        // header 전체쪽 색깔
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
        // 햄버거 버튼 쪽
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
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        // header 전체쪽 색깔
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <ProfileStack.Screen
      name="강의 목록"
      component={Tab1}
      options={{
        headerLeft: () => (
          // 햄버거 버튼 쪽
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
  </ProfileStack.Navigator>
);

const MyLectureListStackScreen = ({ navigation }) => (
  <MyLectrueStack.Navigator
    screenOptions={{
      headerStyle: {
        // header 전체쪽 색깔
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <MyLectrueStack.Screen
      name="나의 강의 목록"
      component={Tab1}
      options={{
        headerLeft: () => (
          // 햄버거 버튼 쪽
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
  </MyLectrueStack.Navigator>
);

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 16,
  },
});
