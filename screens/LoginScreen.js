import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import {
  TextField,
} from 'react-native-material-textfield';

import mainStyle from '../styles/loginStyle';

const styles = StyleSheet.create(mainStyle);

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextField
          label="ID"
          keyboardType="phone-pad"
          lineWidth={0.5}
        />
        <TextField
          label="password"
          keyboardType="phone-pad"
        />
      </View>
      <View />
    </View>
  );
}
