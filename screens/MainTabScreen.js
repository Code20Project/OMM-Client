import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import HomeScreen from './HomeScreen';
// import DetailsScreen from './DetailsScreen';
// import ExploreScreen from './ExploreScreen';
// import ProfileScreen from './ProfileScreen';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

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
      component={DetailsStackScreen}
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
      name="calendar"
      component={Tab3}
      options={{
        tabBarLabel: 'calendar',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <EntypoIcon name="calendar" color={color} size={26} />
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

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
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
    <DetailsStack.Screen
      name="강의 목록"
      component={HomeScreen}
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

    {/* 계속 추가해줘야 함 */}
  </DetailsStack.Navigator>
);

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 16,
  },
});
