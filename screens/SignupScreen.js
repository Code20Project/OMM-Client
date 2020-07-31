import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';

import signupStyle from '../styles/signupStyle';

const styles = StyleSheet.create(signupStyle);

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <Text>ID(email)</Text>
        <TextInput
          style={styles.textInput}
        // onChangeText={text => onChangeText(text)}
        // value={value}
        />
      </View>
      <View style={styles.textfield}>
        <Text>password</Text>
        <TextInput
          style={styles.textInput}
        // onChangeText={text => onChangeText(text)}
        // value={value}
        />
      </View>
    </View>
  );
}
