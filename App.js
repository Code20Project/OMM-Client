// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReviewScreen from './screens/ReviewScreen';
import PreOrderLectureScreen from './screens/PreOrderLectureScreen';
import SearchScreen from './screens/SearchScreen';
import PreOrderLectureDetailScreen from './screens/PreOrderLectureDetailScreen';

// App 메인화면
export default function App() {
  // session이 유지가 안 되어 있으면 Main 화면으로 return
  // return <ReviewScreen />;
  // return <PreOrderLectureScreen />;
  // return <SearchScreen />;
  return <PreOrderLectureDetailScreen />;
}
