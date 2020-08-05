import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';

export default function Tab5() {
  const [value, onChangeText] = React.useState(
    'https://www.google.com/search?q=%2323b11b&rlz=1C5CHFA_enKR868KR868&oq=%2323b11b&aqs=chrome..69i57.881j0j1&sourceid=chrome&ie=UTF-8',
  );
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.rountBox1}>
          <Text style={styles.text}>교제 구매처</Text>
        </View>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flex: 1,
            marginLeft: 8,
            borderRadius: 10,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>

      {/* 2번째 줄 */}
      <View style={styles.container2}>
        <View style={styles.rountBox2}>
          <Text style={styles.text}>교제 구매처</Text>
        </View>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            flex: 1,
            marginLeft: 8,
            borderRadius: 10,
          }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  container2: {
    marginTop: 28,
    flex: 1,
    padding: 10,
    flexDirection: 'row',
  },
  rountBox1: {
    height: 40,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#b11b1b',
    fontWeight: 'bold',
  },
  rountBox2: {
    height: 40,
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#0011ff',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
  },
});
