import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import signupStyle from '../styles/signupStyle';

const styles = StyleSheet.create(signupStyle);

export default function Main() {
  // state
  // const [state, setState] = useState({
  //   mentee_name: '',
  //   email: '',
  //   password: '',
  //   sex: '',
  //   phone: '',
  //   birthday: '',
  // });

  const [sex, setSex] = useState('남');

  useEffect(() => { // 랜더링이 끝나면 useEffect 훅에 입력된 함수가 호출된다.

  });

  return (
    <View style={styles.container}>
      <View style={styles.textfield}>
        <View style={styles.text}>
          <Text>이름</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="김**"
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
          />
        </View>
      </View>
      <View style={styles.textfield}>
        <View style={styles.text}>
          <Text>비밀번호 확인</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="********"
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
            placeholder="010-0000-0000"
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
          />
        </View>
      </View>
      <View style={styles.radios}>
        <View style={{ width: '37%', marginTop: 5 }}>
          <Text>성별</Text>
        </View>
        <RadioButton.Group onValueChange={(value) => setSex(value)} value={sex}>
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
        <Button
          title="가입"
          color="#488888"
          disabled={false}
          // onPress 이벤트가 발생했을 경우에 서버로 value들을 전송하는 작업이 일어나야 한다.
          //  onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </View>
  );
}
