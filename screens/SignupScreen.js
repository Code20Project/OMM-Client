import React from 'react';
import {
  StyleSheet, View, Text, TextInput,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

import signupStyle from '../styles/signupStyle';

const styles = StyleSheet.create(signupStyle);

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.textfield}>
        <View style={styles.text}>
          <Text>아이디(이메일)</Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
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
          />
        </View>
      </View>
      <View style={styles.radios}>
        <View style={{ width: '25%', marginTop: 10 }}>
          <Text>성별</Text>
        </View>
        <RadioButton.Group>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value="남"
            />
            <Text style={styles.radioText}>남</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 20 }}>
            <RadioButton
              value="여"
            />
            <Text style={styles.radioText}>여</Text>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
}
