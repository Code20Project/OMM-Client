import React, { useState } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import Tab5 from './Tab5';

import { DrawerContent } from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function Mentee() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Tab5" component={Tab5} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
