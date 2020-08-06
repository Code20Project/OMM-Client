import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Tab5 from './Tab5';
import PreOrderLectureScreen from './PreOrderLectureScreen';
import MainTabScreen from './MainTabScreen';

import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function Mentee() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen
          name="PreOrderLectureScreen"
          component={PreOrderLectureScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
