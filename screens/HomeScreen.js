import React, { useState } from 'react';

import { View, Text, FlatList } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import NewLectureScreen from './NewLectureScreen';
import RecommendationLectureScreen from './RecommendationLectureScreen';
import PopularLectureScreen from './PopularLectureScreen';

export default function HomeScreen() {
  return (
    <ScrollView>
      <NewLectureScreen />
      {/* <View
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 1,
          padding: 1,
          marginLeft: 18,
          marginRight: 18,
          marginTop: 8
        }}
      /> */}
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 2,
          marginLeft: 18,
          marginRight: 18,
          marginTop: 8,
        }}
      />

      <RecommendationLectureScreen />
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 2,
          marginLeft: 18,
          marginRight: 18,
          marginTop: 8,
        }}
      />
      <PopularLectureScreen />
    </ScrollView>
  );
}
