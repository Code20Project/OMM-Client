import React, { useState } from 'react';

import {
  AppRegistry,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const DATA = [
  {
    id: 1,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/6/',
  },
  {
    id: 2,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/5/',
  },
  {
    id: 3,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/4/',
  },
  {
    id: 4,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/6/',
  },
  {
    id: 5,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/sports/1/',
  },
  {
    id: 6,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/8/',
  },
  {
    id: 7,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/1/',
  },
  {
    id: 8,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/3/',
  },
  {
    id: 9,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/4/',
  },
  {
    id: 9,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/5/',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        data={DATA}
        horizontal
        //   numColumns={2}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={(post) => {
          const { item } = post;
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{ uri: item.image }} />
              <View style={styles.cardFooter}>
                <Text style={styles.socialBarLabel}>{item.likes}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 8,

    height: 300,
    marginRight: 12,
  },
  lecture: {
    // marginTop: 30,
    // height: 300,
    marginRight: 30,
    backgroundColor: '#e93e42',
  },
  lectrueInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  list: {
    paddingHorizontal: 5,
  },
  /** ****** card ************* */
  card: {
    marginVertical: 8,
    flexBasis: '47%',
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: 150,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    shadowOpacity: 3,
    shadowRadius: 5,
  },
  cardImage: {
    flex: 1,
    height: 30,
    // width: null
  },
  /** ****** card components ************* */
  share: {
    color: '#25b7d3',
  },
  icon: {
    width: 25,
    height: 25,
  },
  /** ****** social bar ***************** */
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
