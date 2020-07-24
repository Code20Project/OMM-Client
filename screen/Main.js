import React from 'react';
import { View, Text, Button } from 'react-native';

import '../css/main.css';

// App 메인화면
export default function Main() {
  return (
    <View>
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
