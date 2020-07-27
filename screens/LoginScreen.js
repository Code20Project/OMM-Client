import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  TextField,
} from 'react-native-material-textfield';

import loginStyle from '../styles/loginStyle';

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
          keyboardType="phone-pad"
          contentInset={{
            top: 0,
          }}
        />
      </View>
      <View />
    </View>
  );
}
