import React, { useState } from 'react';
import {
  StyleSheet, View, Text, Image,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';

import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';

export default function ReviewScreen() {
  const name = '[Programming] Javascript #1 ~ #15]';
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [customStyleIndex, setcustomStyleIndex] = useState(0);

  //   const handleIndexChange = index => {
  //     this.setState({
  //       ...this.state,
  //       selectedIndex: index
  //     });
  //   };

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  const handleCustomIndexSelect = (index) => {
    // handle tab selection for custom Tab Selection SegmentedControlTab
    setcustomStyleIndex(index);
  };

  return (
    <View style={styles.container}>
      {/* 카드 부분 */}
      <View style={styles.container2}>
        <Image
          source={{
            uri: 'https://lorempixel.com/400/200/nature/6/',
          }}
          style={{ width: 400, height: 300 }}
        />
        <View style={styles.lectrueInfo}>
          <Text>{name}</Text>
        </View>
      </View>

      {/* tab부분 */}
      <SegmentedControlTab
        values={['강사소개', '강의소개', '커리큘럼', '리뷰', '강의자료']}
        selectedIndex={customStyleIndex}
        onTabPress={handleCustomIndexSelect}
        borderRadius={0}
        tabsContainerStyle={{
          height: 50,
          backgroundColor: '#F2F2F2',
          padding: 8,
          marginTop: 8,
        }}
        tabStyle={{
          backgroundColor: '#F2F2F2',
          borderWidth: 0,
          borderColor: 'transparent',
        }}
        activeTabStyle={{ backgroundColor: 'white', marginTop: 2 }}
        tabTextStyle={{ color: '#444444', fontWeight: 'bold' }}
        activeTabTextStyle={{ color: '#888888' }}
      />
      {customStyleIndex === 0 && (
        // <Text style={styles.tabContent}> Tab one</Text>
        <Tab1 />
      )}
      {customStyleIndex === 1 && (
        // <Text style={styles.tabContent}> Tab two</Text>
        <Tab2 />
      )}
      {customStyleIndex === 2 && <Tab3 />}
      {customStyleIndex === 3 && <Tab4 />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // card만 padding을 줘야 함.
    // padding: 5
  },
  // -----bottom_shadow_container--------
  container2: {
    alignItems: 'center',
    // -----bottom_shadow--------
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
  lecture: {
    // marginTop: 30,
    height: 300,
    backgroundColor: '#e93e42',
  },
  lectrueInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 8,
  },
});
