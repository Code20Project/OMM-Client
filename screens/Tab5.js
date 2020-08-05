import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

export default function Tab5() {
  return (
    <View style={styles.container}>
      <View style={styles.myButton}>
        <Text>Rounded Corner</Text>
      </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  myButton: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#23b11b',
  },
});
