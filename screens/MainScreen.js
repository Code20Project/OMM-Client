import React from 'react';
import {
  StyleSheet, View, Text, Button, ImageBackground, Platform,
} from 'react-native';

import Constants from 'expo-constants';

import mainStyle from '../styles/mainStyle';

const styles = StyleSheet.create(mainStyle);

const image = require('../imgs/mainImg.jpg');

export default function Main({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.text}>
              OOM
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.button}>
              <Button
                title="Mentor"
                color="#488888"
                onPress={() => navigation.navigate('Login', { user: 'mentor' })}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Mentee"
                color="#488888"
                onPress={() => navigation.navigate('Login', { user: 'mentee' })}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
