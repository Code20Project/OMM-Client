import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import StarActive from '../assets/star_rate-black-18dp.svg';
import StarInActive from '../assets/star_border-black-18dp.svg';

import Footer from '../Component/Footer';
import Header from '../Component/Header';

const commentData = [
  {
    name: 'choi', comment: 'good', date: '2020.07.11', rate: 5,
  },
  {
    name: 'choi', comment: 'good', date: '2020.07.11', rate: 3,
  },
  {
    name: 'choi', comment: 'good', date: '2020.07.11', rate: 2,
  },
];

const Rating = (rate) => {
  const ratingViews = [];
  let cnt = rate;
  // console.log(cnt);
  for (let i = 0; i < 5; i++) {
    if (cnt > 0) {
      ratingViews.push(
        <Image style={styles.commentImage} source={StarActive} />,
      );
      cnt -= 1;
    } else {
      ratingViews.push(
        <Image style={styles.commentImage} source={StarInActive} />,
      );
    }
  }
  return ratingViews;
};

const handleRating = (userRating) => {
  rating = user;
};

export default function ReviewScreen() {
  const [rating, setRating] = useState(0);
  const [input, setInput] = useState('');
  const name = '[Programming] Javascript #1 ~ #15]';
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Review" style={styles.Header} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.lecture} />

        <View style={styles.lectrueInfo}>
          <Text>{name}</Text>
          <Image style={styles.lectureFavorites} />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.commentContainer}>
            {commentData.map((comment) => (
              <View style={styles.comment}>
                <Image style={styles.commentImage} source={StarActive} />
                <Text style={styles.commentContnet}>{comment.name}</Text>
                <Text style={styles.commentContnet}>{comment.comment}</Text>
                {/* {Rating(comment.rate)} */}
                <StarRating
                  disabled
                  maxStars={5}
                  rating={comment.rate}
                  starSize={16}
                />
                <Text style={styles.commentDate}>{comment.date}</Text>
              </View>
            ))}
          </View>
          <View style={styles.userRatingContainer}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={rating}
              selectedStar={(rate) => setRating(rate)}
              starSize={24}
            />
          </View>
          <View style={styles.inputCommentContainer}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setInput(text)}
              value={input}
              placeholder="comment"
            />
            {/* 버튼 대신에 사용하는 것 */}
            <TouchableOpacity style={styles.commentButton} underlayColor="#fff">
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.commentButtonText}>Enter</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Footer style={styles.Footer} />
          {/* <MyTabs></MyTabs> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lecture: {
    // marginTop: 30,
    height: 300,
    backgroundColor: '#e93e42',
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
  lectureFavorites: {
    height: 30,
    width: 30,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 16,
    paddingBottom: 16,
  },
  commentContainer: {},
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
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  inputCommentContainer: {
    flexDirection: 'row',
    marginStart: 8,
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginTop: 16,
  },
  input: {
    flex: 3,
    paddingLeft: 16,
  },
  sendComment: {
    flex: 1,
    marginTop: 16,
  },
  commentButton: {
    backgroundColor: '#fff',
    borderLeftWidth: 1,
    paddingTop: 8,
    justifyContent: 'center',
  },
  commentButtonText: {
    color: '#000000',
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
  },
});
