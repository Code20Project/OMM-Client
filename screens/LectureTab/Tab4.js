import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image, FlatList,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import StarRating from 'react-native-star-rating';
import StarActive from '../../assets/star_rate-black-18dp.svg';
import StarInActive from '../../assets/star_border-black-18dp.svg';

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
    rate: 5,
    date: '2020.07.11',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    rate: 3,
    date: '2020.07.11',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    rate: 2,
    date: '2020.07.11',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://lorempixel.com/400/200/nature/6/',
    subtitle: 'Vice Chairman',
    rate: 3,
    date: '2020.07.11',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    rate: 4,
    date: '2020.07.11',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice Chairman',
    rate: 1,
    date: '2020.07.11',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
    rate: 2,
    date: '2020.07.11',
  },
];
const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <View>
    <View style={styles.container2}>
      <ListItem
        title={item.name}
        subtitle={item.subtitle}
        rightSubtitle={item.date}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        chevron={
          <StarRating disabled maxStars={5} rating={item.rate} starSize={16} />
        }
      />
    </View>
  </View>
);
export default function Tab4() {
  return (
    <FlatList keyExtractor={keyExtractor} data={list} renderItem={renderItem} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 10
    backgroundColor: 'white',
  },
  //   container2: {
  //     flex: 1
  //   },
  //   container3: {
  //     flex: 4
  //   },
  tabContent: {
    color: '#444444',
    fontSize: 16,
    margin: 8,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 4,
  },
  commentImage: {
    height: 24,
    width: 24,
    flexShrink: 0,
  },
  commentContnet: {
    marginLeft: 8,
    marginRight: 16,
    flexGrow: 1,
  },
  commentDate: {
    marginLeft: 24,
    flexGrow: 1,
  },
});
