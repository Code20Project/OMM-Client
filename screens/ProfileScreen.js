import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button, Alert, Image, TouchableOpacity, // Platform,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// mentor 업로드를 구현하기 위한 모듈
import * as Permissions from 'expo-permissions';
// mentor MediaLibrary를 이용해 사진 정보 가져오기 위한 모듈
import * as MediaLibrary from 'expo-media-library';

// import Constants from 'expo-constants';

import { connect } from 'react-redux';
import profileStyle from '../styles/profileStyle';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp
// } from 'react-native-responsive-screen';

// connect
import requestAPI from '../connect';

// redux
import { mapStateToProps, mapDispatchToProps } from '../redux/reduxFunctions';
import store from '../redux/store';

const styles = StyleSheet.create(profileStyle);
const image = require('../imgs/mentorSignIn.png');

function Profile({ navigation, position }) {
  const mentor = 'mentor';
  const mentee = 'mentee';

  // store에 있는 position을 참조할 수 있도록 해야 한다.
  const [userPosition, setUserPosition] = useState(position);
  // fetch에서 받아온 데이터를 초기값으로 셋팅해줘야 한다.
  // 값들을 셋팅하는 함수
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [selectedSex, setSelectedSex] = useState('남');
  const [phone, setPhone] = useState('');
  const [birthday, setBirthday] = useState('');

  // mentor에게만 필요한 state
  const [introduce, setIntroduce] = useState('');

  // 수정한 정보에 대한 메타데이터
  const [changeDataList, setChangeDataList] = useState([]);

  const setValueHandler = (key, value) => {
    setChangeDataList((oldArray) => {
      if (oldArray.length === 0) {
        return [key];
      }
      return [...oldArray, key];
    });
    // console.log(`changeDataList: ${changeDataList}`);
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

  const makeUniqChangDataList = () => {
    const array = changeDataList;

    console.log(array);

    // 중복데이는 데이터를 걸러준다.
    const uniq = array.reduce((a, b) => {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);

    console.log(`uniq: ${typeof (uniq)}, ${Array.isArray(uniq)}, ${uniq}`);

    return uniq;
  };

  const choiceData = (str) => {
    switch (str) {
      case 'username': return username;
      case 'nickname': return nickname;
      case 'selectedSex': return selectedSex;
      case 'phone': return phone;
      case 'birthday': return birthday;
      case 'introduce': return introduce;
    }
  };

  // 버튼을 눌렀을 때 이전 데이터와 현재 데이터가 다른 데이터만 서버에 보내주도록 하는 로직 작성
  const submitData = async () => {
    const uniq = makeUniqChangDataList();
    console.log(uniq);
    // 서버에 보내줄 정보, 수정한 내용만 담아줄 수 있도록 한다.
    const inputDataObj = {};
    for (let i = 0; i < uniq.length; i++) {
      inputDataObj[uniq[i]] = choiceData(uniq[i]);
    }
    // 담아준 정보를 서버에 보내주도록 한다.
    if (position === mentor) {
      // console.log('data: ', inputDataObj);
      // requestAPI.mentor.patch('/mypage/profile', inputDataObj);

      // console.log(token);
      // console.log('token: ', store.getState().userReducer.token);
      // console.log('test:', )
      requestAPI.mentor.test(store.getState().userReducer.token);
    }

    if (position === mentee) {
      requestAPI.mentee.patch('/mypage/profile', inputDataObj)
        .then()
        .catch((err) => console.log(`mentee PATCH profile ERR: ${err}`));
    }
    // for(let key in inputDataObj)
    // {
    //   console.log(`key: ${key}, data: ${inputDataObj[key]}`);
    // }
  };

  // 강사소개 rendering
  const renderingInroduceField = () => {
    if (position === mentor) {
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

  const setRequestData = async (res) => {
    await setUsername(res.username);
    await setNickname(res.nickname);
    await setPhone(res.phone);
    await setSelectedSex(res.sex);
    await setBirthday(res.birthday);
  };

  useEffect(() => { // 랜더링이 끝나면 useEffect[](componentDidMount) 훅에 입력된 함수가 호출된다.
    // profile get 실행
    console.log('position: ', position);
    console.log(u);
    if (position === mentor) {
      requestAPI
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    } else if (position === mentee) {
      console.log('check!!!');
      requestAPI.mentee.get('/mypage/profile')
        .then((res) => {
          setRequestData(res);
        })
        .catch((err) => console.log(`mentee GET profile ERR: ${err}`));
    }
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
              editable={false}
              value={username}
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
              placeholder="추후 기능 제공 :)"
              editable={false} // DB에 컬럼이 있지 않아 잠가놓았습니다.
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
              value={phone}
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
              value={birthday}
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
            onPress={() => {
              submitData();

            // console.log(`inputDataObj: ${inputDataObj}`);
            }}
            // Alert.alert('Simple Button pressed')
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  // </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
