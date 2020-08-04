import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Icon2 from 'react-native-vector-icons/FontAwesome';

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

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = React.useState('');
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
    <Icon2
      name="bookmark"
        // color={state.bookmark ? "#7de7d7" : "#23484a"}
      color={toggleActiveStyle(item.wishList)}
      size={15}
        // value={state.bookmark}
        // key={item.id}
      onPress={() => {
        toggleActive(item.id);
      }}
    />
  );

  const onChangeSearch = (query) => setSearchQuery(query);

  const LectureCard = (item) => (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: item.image }} />
      <View style={styles.cardFooter}>
        <View style={styles.socialBarContainer}>
          <View style={styles.socialBarSection}>
            <View style={styles.socialBarSection}>
              <Text style={styles.socialBarLabel}>{item.likes}</Text>
              <View style={styles.container3}>{WishListIcon(item)}</View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        // navigation header 대체 될 수 있음
        // style={styles.container}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {/* <Header title="Pre-order-lecture" style={styles.Header} /> */}
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    padding: 5,
  },
  container3: {
    marginTop: 3,
    marginLeft: 8,
    flex: 1,
  },
  // list: {
  //   paddingHorizontal: 5,
  //   backgroundColor: "#E6E6E6"
  // },
  // listContainer: {
  //   alignItems: "center"
  // },
  // 카드 사이의 간격(optional)
  separator: {
    // marginTop: 10
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
