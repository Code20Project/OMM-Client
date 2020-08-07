import React, { useState } from 'react';

import {
  Image, FlatList, StyleSheet, Text, View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';

const DATA = [
  {
    id: 1,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/6/',
    wishList: true,
  },
  {
    id: 2,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/5/',
    wishList: false,
  },
  {
    id: 3,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/4/',
    wishList: false,
  },
  {
    id: 4,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/6/',
    wishList: true,
  },
  {
    id: 5,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/sports/1/',
    wishList: true,
  },
  {
    id: 6,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/8/',
    wishList: true,
  },
  {
    id: 7,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/1/',
    wishList: false,
  },
  {
    id: 8,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/3/',
    wishList: false,
  },
  {
    id: 9,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/4/',
    wishList: false,
  },
  {
    id: 9,
    likes: '07:30  ~  09:00',
    image: 'https://lorempixel.com/400/200/nature/5/',
    wishList: true,
  },
];

export default function RecommendationLectureScreen() {
  function toggleActive(index) {
    changeState({ ...appState, activeObj: appState.objects[index] });
  }
  // #ff0000 : red
  // #d4d4d4 : grey
  function toggleActiveStyle(wishList) {
    if (wishList) {
      return '#ff0000';
    }
    return '#d4d4d4';
  }

  const WishListIcon = (item) => (
    <Icon
      name="bookmark"
      color={toggleActiveStyle(item.wishList)}
      size={15}
      // value={state.bookmark}
      // key={item.id}
      onPress={() => {
        toggleActive(item.id);
      }}
    />
  );

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text>추천 강의</Text>
          <Icon2 name="right" style={styles.icon2} />
        </View>
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
                  <View style={styles.container3}>{WishListIcon(item)}</View>
                </View>
              </View>
            );
          }}
        />
      </View>
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
  container2: {
    marginTop: 8,
    marginLeft: 8,
    flexDirection: 'row',
  },
  icon2: {
    marginTop: 4,
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
