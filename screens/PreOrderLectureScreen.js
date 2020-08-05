import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
// ******** 이렇게 네비 하는거는 이거는 구식인가??************
// import { StackNavigator } from "react-navigation";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const list = [
  {
    date: '2020.07.19',
    count: '1',
  },
  {
    date: '2020.07.20',
    count: '1',
  },
  {
    date: '2020.07.21',
    count: '2',
  },
  {
    date: '2020.07.22',
    count: '1',
  },
  {
    date: '2020.07.23',
    count: '1',
  },
];
// navigateToAbout = () => {
//   this.props.navigation.navigate("About");
// };

export default function PreOrderLectureScreen() {
  return (
    <View style={styles.container}>
      <View>
        {list.map((l, i) => (
          <ListItem
            key={i}
            title={(
              <View style={styles.titleView}>
                <View style={styles.container2}>
                  <Text>{l.date}</Text>
                </View>
                <View style={styles.container}>
                  <Text style={styles.st}>{l.count}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => this.moveDetailPage()}>
                    <View style={styles.container3}>
                      <Icon name="right" size={15} color="#7d7d7d" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            bottomDivider
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 6,
  },
  container3: {
    marginTop: 2,
    flex: 1,
  },
  titleView: {
    flexDirection: 'row',
  },
  st: {
    alignItems: 'flex-end',
    marginLeft: 30,
  },
  lectrueInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
});
