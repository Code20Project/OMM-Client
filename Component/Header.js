import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import mainStyle from "../styles/mainStyle";

function Header(props) {
  return (
    <View style={[styles.HeaderContainer, props.style]}>
      <View style={styles.leftIconButtonStackRow}>
        <View style={styles.leftIconButtonStack}>
          <TouchableOpacity style={styles.leftIconButton} />
          <EntypoIcon
            name="chevron-thin-left"
            style={styles.HeaderIcon}
          />
        </View>

        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            {props.title || 'Title'}
          </Text>
        </View>
      </View>

      <View style={styles.leftIconButtonStackRowFiller} />

      <View style={styles.rightIconsWrapper}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon
            name="magnify"
            style={styles.rightIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    backgroundColor: '#508484',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
    justifyContent: 'space-between',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  leftIconButton: {
    padding: 11,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  HeaderIcon: {
    top: 10,
    left: 10,
    position: 'absolute',
    color: 'rgba(255,255,255,1)',
    fontSize: 25,
  },
  leftIconButtonStack: {
    width: 35,
    height: 38,
  },
  textWrapper: {
    alignSelf: 'flex-end',
    marginLeft: 32,
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
    lineHeight: 18,
  },
  leftIconButtonStackRow: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 13,
  },
  leftIconButtonStackRowFiller: {
    flex: 1,
    flexDirection: 'row',
  },
  rightIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
  iconButton: {
    padding: 11,
  },
  rightIcon: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 24,
  },
});

export default Header;
