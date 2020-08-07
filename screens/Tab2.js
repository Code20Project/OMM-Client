import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

export default function Tab2() {
  return (
    <View style={styles.container}>
      <Text style={styles.tabContent}>강의소개 : 서당개 3년 풍월 읊는다.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 10
    backgroundColor: 'white',
  },
  tabContent: {
    color: '#444444',
    fontSize: 16,
    margin: 8,
  },
});
