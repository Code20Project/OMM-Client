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
            requestAPI.mentor.post('/signin', inputDataObj)
              .then((res) => {
                if (res) { // 응답으로 id가 존재하면 로그인이 성공했다는 것이다.
                  // mentor 홈 화면으로 이동하는 이벤트가 발생되어야 한다.
                  console.log('mentor home화면으로 이동합니다.');
                } else { // 로그인에 실패
                  Alert.alert(user, '로그인에 실패했습니다.');
                }
              });
          } else if (user === 'mentee') {
            requestAPI.mentee.post('/signin', inputDataObj)
              .then((res) => {
                console.log(res);
                if (res) { // res의 값이 undefined가 아니면 status가 200, 성공
                  // res에 담겨있는 username과 email이 store에 저장되어야 한다.
                  // mentee 홈 화면으로 이동하는 이벤트가 발생되어야 한다.
                  console.log('mentee home화면으로 이동합니다.');
                  // navigation.navigate();
                } else { // 로그인에 실패
                  Alert.alert(user, '로그인에 실패했습니다.');
                  // state값들을 초기화 해줘야 한다.
                  // setValueHandler('email', '');
                  // setValueHandler('password', '');
                }
              });
          }
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
              value={email}
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
              value={password}
              secureTextEntry // 입력한 테스트를 암호화 해주는 속성
              onChangeText={(text) => setValueHandler('password', text)}
            />
          </View>
        </View>
        <View style={styles.button}>
          {setButton()}
        </View>
        <View>
          <Text
            style={{ color: 'blue', padding: 20 }}
            onPress={() => {
            // state값들을 초기화 해줘야 한다.
              setValueHandler('email', '');
              setValueHandler('password', '');
              if (user === 'mentor') {
                navigation.navigate('Signup', { user: 'mentor' });
              } else if (user === 'mentee') {
                navigation.navigate('Signup', { user: 'mentee' });
              }
            }}
          >
            아이디가 없으십니까?
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
