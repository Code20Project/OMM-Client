import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

export default function Tab3() {
  return (
    <View style={styles.container}>
      <Text style={styles.tabContent}>#1. 한국어로 하고 싶은 말 적어봐.</Text>
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
