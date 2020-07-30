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
// import EntypoIcon from "react-native-vector-icons/Entypo";
import Footer from '../Component/Footer';
import Header from '../Component/Header';

const list = [
  //   {
  //     name: "Amy Farha",
  //     avatar_url:
  //       "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
  //     subtitle: "Vice President"
  //   },
  //   {
  //     name: "Chris Jackson",
  //     avatar_url:
  //       "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
  //     subtitle: "Vice Chairman"
  //   }
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

export default function PreOrderLectureScreen() {
  return (
    <View style={styles.container}>
      <Header title="Pre-order-lecture" style={styles.Header} />
      <View>
        {list.map((l, i) => (
          <ListItem
            // style={styles.listView}
            key={i}
            // title={l.date}
            title={(
              <View style={styles.titleView}>
                <Text>{l.date}</Text>
                <Text style={styles.st}>{l.count}</Text>
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
  titleView: {
    flexDirection: 'row',
  },
  st: {
    alignItems: 'flex-end',
    marginLeft: 30,
  },
  Header: {
    marginTop: 30,
    justifyContent: 'center',
    textAlign: 'center',
    // alignItems: "center"
  },
  Footer: {
    backgroundColor: 'rgba(85,136,136,1)',
  },
  lectrueInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
    shadowOpacity: 1,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    // android
    elevation: 1,
  },
});
