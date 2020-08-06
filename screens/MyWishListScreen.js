import * as React from 'react';

import {
  StyleSheet, View, Text, Image, FlatList,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
  {
    id: 1,
    likes: '[programming] #1 programming lecture',
    image: 'https://lorempixel.com/400/200/nature/6/',
    wishList: true,
  },
  {
    id: 2,
    likes: '[programming] #1 programming lecture',
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
];
export default function MyWishListScreen() {
  const [appState, changeState] = React.useState({
    activeObj: null,
    objects: [
      {
        id: DATA.forEach((ele) => {
          ele.id;
        }),
      },
    ],
  });

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
    <MaterialCommunityIcons
      name="file-document-edit" // color={state.bookmark ? "#7de7d7" : "#23484a"}
      color={toggleActiveStyle(item.wishList)}
      size={25}
      // value={state.bookmark}
      // key={item.id}
      onPress={() => {
        toggleActive(item.id);
      }}
    />
  );

  const LectureCard = (item) => (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: item.image }} />
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterTitle}>
          <Text style={styles.socialBarLabel}>{item.likes}</Text>
        </View>
        <View style={styles.cardFooterIcon}>
          <View style={styles.container3}>{WishListIcon(item)}</View>
        </View>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        horizontal={false}
        numColumns={2}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={(post) => {
          const { item } = post;
          return LectureCard(item);
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
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
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    // flex: 5,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    shadowOpacity: 3,
    shadowRadius: 5,
  },
  cardFooterTitle: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardFooterIcon: {
    flex: 1,
    padding: 8,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /** ****** card components ************* */
  share: {
    color: '#25b7d3',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
