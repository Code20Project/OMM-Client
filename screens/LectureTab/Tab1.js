import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

export default function Tab1() {
  return (
    <View style={styles.container}>
      <Text style={styles.tabContent}>
        profile : 이름 : 루이스 아니어스 룰라다 실바 "영어 어럽지 않다"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 10
  },
  tabContent: {
    color: '#444444',
    fontSize: 16,
    margin: 8,
  },
});
