import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  TextField,
} from 'react-native-material-textfield';
import { TextButton } from 'react-native-material-buttons';

import loginStyle from '../styles/loginStyle';
// var Button = require('react-native-material-button');

const styles = StyleSheet.create(loginStyle);

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <TextField
          style={styles.textfield}
          label="ID"
          labelOffset={{
            x0: 50,
            x1: 50,
            y1: 30,
          }}
          tintColor="#488888"
          keyboardType="phone-pad"
          contentInset={{
            top: 0,
          }}
        />
        <TextField
          style={styles.textfield}
          label="password"
          labelOffset={{
            y1: 30,
          }}
          tintColor="#488888"
          keyboardType="phone-pad"
          contentInset={{
            top: 0,
          }}
        />
      </View>
      <View style={{ height: 30 }} />
      <View>
        <TextButton title="Login" titleColor="#ffffff" color="#488888" />
        <View style={{ height: 20 }} />
        <TextButton style={styles.button} title="Sign Up" titleColor="#488888" />
      </View>

    </View>
  );
}
