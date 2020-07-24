import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';

import mainStyle from '../styles/mainStyle';

const styles = StyleSheet.create(mainStyle);

export default function Main() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          OOM
        </Text>
      </View>

      <View>
        <Button
          onpress={() => {
            console.log('test');
          }}
          title="Mentor"
        />
        <Button
          onpress={() => {
            console.log('test');
          }}
          title="Mentee"
        />
      </View>
    </View>
  );
}
