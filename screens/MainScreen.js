import React from 'react';
import {
  StyleSheet, View, Text, Button, ImageBackground, Platform,
} from 'react-native';

// redux 관련 import
// import { connect } from 'react-redux'; // connect 함수를 통해서 redux와 연결할 수 있습니다.
// import {mapStateToProps, mapDispatchToProps} from '../redux/reduxFunctions';

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

// Main 컴포넌트와 user라는 reducer가 연결 합니다.
// export default connect(mapStateToProps, mapDispatchToProps)(Main);
