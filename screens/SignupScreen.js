import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button, Alert, // Platform,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import Constants from 'expo-constants';

import signupStyle from '../styles/signupStyle';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp
// } from 'react-native-responsive-screen';

const styles = StyleSheet.create(signupStyle);

export default function Main() {
  // 값들을 셋팅하는 함수
  const [mentee_name, setMentee_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');
  const [selectedSex, setSelectedSex] = useState('남');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  const setValueHandler = (key, value) => {
    switch (key) {
      case 'mentee_name': setMentee_name(value);
        break;
      case 'email': setEmail(value);
        break;
      case 'password': setPassword(value);
        break;
      case 'confirmPassword': setComfirmPassword(value);
        break;
      case 'selectedSex': setSelectedSex(value);
        break;
      case 'phone': setPhone(value);
        break;
      case 'birthday': setBirthday(value);
        break;
    }
  };

  // 서버에 보내줄 정보
  const inputDataObj = {
    mentee_name,
    email,
    password,
    sex: selectedSex,
    phone,
    birthday,
  };

  let checkPassword = false;
  const checkPasswordHandler = () => {
    if (confirmPassword.length !== 0 && confirmPassword !== password) { // password가 일치 하지 않으면
      return (
        <View>
          <TextInput
            style={styles.checkPassword}
            placeholder="********"
            secureTextEntry // 입력한 테스트를 암호화 해주는 속성
            onChangeText={(text) => setValueHandler('confirmPassword', text)}
            value={confirmPassword}
          />
          <Text style={{ fontSize: 10, marginLeft: 20, color: 'red' }}>패스워드가 일치하지 않습니다.</Text>
        </View>
      );
    }
    checkPassword = true;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="********"
          secureTextEntry // 입력한 테스트를 암호화 해주는 속성
          onChangeText={(text) => setValueHandler('confirmPassword', text)}
          value={confirmPassword}
        />
      </View>
    );
  };

  const setButton = () => { // button의 상태를 결정하는 함수
    let checkInputValue = true;
    for (const i in inputDataObj) {
      if (inputDataObj[i].length === 0) {
        checkInputValue = false;
      }
    }

    // 비밀번호확인까지 채워져야 한다.
    if (confirmPassword.length === 0) {
      checkInputValue = false;
    }

    // checkpassword true, checkInputValue true => buttonState false
    const buttonState = !(checkInputValue && checkPassword);
    return (
      <Button
        title="가입"
        color="#488888"
        disabled={buttonState} // boolean function 작성
    // onPress 이벤트가 발생했을 경우에 서버로 value들을 전송하는 작업이 일어나야 한다.
    // 또한 성공적으로 가입했으면 로그인 화면으로, 성공적으로 가입이 되지 않았으면 경고 메세지를 띄운다.
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    );
  };

  // useEffect(() => { // 랜더링이 끝나면 useEffect 훅에 입력된 함수가 호출된다.

  // });

  return (
  // <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }} enableOnAndroid>
      <View style={styles.container}>
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>이름</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="홍길동"
              onChangeText={(text) => setValueHandler('mentee_name', text)}
            />
          </View>
        </View>
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
        <View style={styles.textfield}>
          <View classname="checkPassword" style={styles.text}>
            <Text>비밀번호 확인</Text>
          </View>
          {checkPasswordHandler()}
        </View>
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>휴대폰 번호</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="01000000000"
              onChangeText={(text) => setValueHandler('phone', text)}
            />
          </View>
        </View>
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>생년월일</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="000000(6자리)"
              onChangeText={(text) => setValueHandler('birthday', text)}
            />
          </View>
        </View>
        <View style={styles.radios}>
          <View style={{ width: '37%', marginTop: 5 }}>
            <Text>성별</Text>
          </View>
          <RadioButton.Group onValueChange={(value) => setValueHandler('selectedSex', value)} value={selectedSex}>
            <View style={{ flexDirection: 'row' }}>
              <RadioButton
                value="남"
                color="#488888"
              />
              <Text style={styles.radioText}>남</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <RadioButton
                value="여"
                color="#488888"
              />
              <Text style={styles.radioText}>여</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.button}>
          {/* <Button
          title="가입"
          color="#488888"
          disabled={setButton()} // boolean function 작성
          // onPress 이벤트가 발생했을 경우에 서버로 value들을 전송하는 작업이 일어나야 한다.
          // 또한 성공적으로 가입했으면 로그인 화면으로, 성공적으로 가입이 되지 않았으면 경고 메세지를 띄운다.
            // onPress={() => console.log('onPress')}
            // Alert.alert('Simple Button pressed')
        /> */}
          {setButton()}
        </View>
      </View>
    </KeyboardAwareScrollView>
  // </View>
  );
}
