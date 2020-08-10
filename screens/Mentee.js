import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import HomeStack from './Home';
import CollectLectureStack from './CollectLecture';
import ChatStack from './Chat';
import LectureReservationStack from './LectureReservation';
import PointStoreStack from './PointStore';

const Tab = createMaterialBottomTabNavigator();

export default function Mentee() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#3a6e6e"
        inactiveColor="#f0edf6"
        barStyle={{ backgroundColor: '#488888' }}
      >
        {/* home */}

        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <Icon name="ios-home" color={color} size={26} />
            ),
          }}
        />

        {/* collect Lecutre  */}
        <Tab.Screen
          name="CollectLecture"
          component={CollectLectureStack}
          options={{
            tabBarLabel: '',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <AntDesignIcon name="appstore1" color={color} size={26} />
            ),
          }}
        />

        {/*  chat  */}
        <Tab.Screen
          name="Chat"
          component={ChatStack}
          options={{
            tabBarLabel: '',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <EntypoIcon name="chat" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="LectureReservation"
          component={LectureReservationStack}
          options={{
            tabBarLabel: '',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <EntypoIcon name="calendar" color={color} size={26} />
            ),
          }}
          //   tabBarLabel: "Home",
          // tabBarColor: "#009387",
          // tabBarIcon: ({ color }) => (
          //   <Icon name="ios-home" color={color} size={26} />
        />
        <Tab.Screen
          name="PointStore"
          component={PointStoreStack}
          options={{
            tabBarLabel: '',
            tabBarColor: '#009387',
            tabBarIcon: ({ color }) => (
              <EntypoIcon name="shop" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
