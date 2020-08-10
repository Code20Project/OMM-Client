import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button, Alert, Image, TouchableOpacity, // Platform,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// mentor 자격인증 사진 업로드를 구현하기 위한 모듈
import * as Permissions from 'expo-permissions';
// mentor MediaLibrary를 이용해 사진 정보 가져오기 위한 모듈
import * as MediaLibrary from 'expo-media-library';

// import Constants from 'expo-constants';

import profileStyle from '../styles/profileStyle';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp
// } from 'react-native-responsive-screen';

// connect
import requestAPI from '../connect';

const styles = StyleSheet.create(profileStyle);
const image = require('../imgs/mentorSignIn.png');

export default function Profile({ navigation }) {
  const mentor = 'mentor';
  const mentee = 'mentee';

  // store에 있는 position을 참조할 수 있도록 해야 한다.
  const user = 'mentee';

  // 값들을 셋팅하는 함수
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedSex, setSelectedSex] = useState('남');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  // mentor에게만 필요한 state
  const [introduce, setIntroduce] = useState('');

  const setValueHandler = (key, value) => {
    switch (key) {
      case 'username': setUsername(value);
        break;
      case 'nickname': setNickname(value);
        break;
      case 'selectedSex': setSelectedSex(value);
        break;
      case 'phone': setPhone(value);
        break;
      case 'birthday': setBirthday(value);
        break;
      case 'introduce': setIntroduce(value);
        break;
    }
  };

  // 서버에 보내줄 정보, 수정한 내용만 담아줄 수 있도록 한다.
  const menteeInputDataObj = {
    username,
    nickname,
    sex: selectedSex,
    phone,
    birthday,
  };

  const mentorInputDataObj = {
    username,
    nickname,
    sex: selectedSex,
    phone,
    birthday,
    introduce,
  };

  // 강사소개 rendering
  const renderingInroduceField = () => {
    if (user === mentor) {
      return (
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>강사소개</Text>
          </View>
          <View>
            <TextInput
              style={styles.multiLineTextInput}
              placeholder="강사소개를 자유롭게 써주세요."
              onChangeText={(text) => setValueHandler('introduce', text)}
              multiline
              numberOfLines={4}
              editable
              maxLength={200}
            />
          </View>
        </View>
      );
    }
  };

  useEffect(() => { // 랜더링이 끝나면 useEffect[] 훅에 입력된 함수가 호출된다.
    requestPermission();
  }, []);

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
              onChangeText={(text) => setValueHandler('username', text)}
            />
          </View>
        </View>
        <View style={styles.textfield}>
          <View style={styles.text}>
            <Text>별명</Text>
          </View>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Nickname"
              onChangeText={(text) => setValueHandler('nickname', text)}
            />
          </View>
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
        {renderingInroduceField()}

        <View style={styles.button}>
          <Button
            title="저장하기"
            color="#488888"
          // onPress 이벤트가 발생했을 경우에 서버로 value들을 전송하는 작업이 일어나야 한다.
          // 또한 성공적으로 가입했으면 로그인 화면으로, 성공적으로 가입이 되지 않았으면 경고 메세지를 띄운다.
            // onPress={() => console.log('onPress')}
            // Alert.alert('Simple Button pressed')
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  // </View>
  );
}
