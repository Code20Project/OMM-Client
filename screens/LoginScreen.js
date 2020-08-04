import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button, Alert,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import signupStyle from '../styles/signupStyle';

// connect
import requestAPI from '../connect';

const styles = StyleSheet.create(signupStyle);

export default function Login({ route, navigation }) {
  // router로 전달 받은 param
  const { user } = route.params;

  // 값 셋팅 함수
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 서버에 보내줄 정보
  const inputDataObj = {
    email,
    password,
  };

  const setValueHandler = (key, value) => {
    switch (key) {
      case 'email': setEmail(value);
        break;
      case 'password': setPassword(value);
        break;
    }
  };

  const setButton = () => { // button의 상태를 결정하는 함수
    let checkInputValue = false;
    for (const i in inputDataObj) {
      if (inputDataObj[i].length === 0) {
        checkInputValue = true;
      }
    }

    return (
      <Button
        title="Sign in"
        color="#488888"
        disabled={checkInputValue} // boolean function 작성
      // onPress 이벤트가 발생했을 경우에 서버로 value들을 전송하는 작업이 일어나야 한다.
      // 또한 성공적으로 가입했으면 로그인 화면으로, 성공적으로 가입이 되지 않았으면 경고 메세지를 띄운다.
        onPress={() => {
          // requestAPI
          if (user === 'mentor') {
            requestAPI.mentor.post('/signin', { message: 'test' })
              .then((json) => console.log(json));
          } else if (user === 'mentee') {
            requestAPI.mentee(user);
          }

          Alert.alert(user);
        }}
      />
    );
  };

  return (
  // flexGrow를 써야 KeyboardAwareScrollView scroll이 움직인다.
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} enableOnAndroid>
      <View style={styles.container}>
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>아이디(이메일)</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="ID@email.com"
              onChangeText={(text) => setValueHandler('email', text)}
            />
          </View>
        </View>
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>비밀번호</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="********"
              secureTextEntry // 입력한 테스트를 암호화 해주는 속성
              onChangeText={(text) => setValueHandler('password', text)}
            />
          </View>
        </View>
        <View style={styles.button}>
          {setButton()}
        </View>
        <View>
          <Text style={{ color: 'blue', padding: 20 }} onPress={() => navigation.navigate('Signup', { user: 'mentor' })}>
            아이디가 없으십니까?
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
