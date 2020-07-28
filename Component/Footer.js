import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
// import mainStyle from "../styles/mainStyle";
//! footer 스타일시트가 안먹힘 원인 찾기...
//! Header, TimeReservation 은 정상작동 됨...
function Footer(props) {
  return (
    <View style={[styles.FooterContainer, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper}>
        <MaterialCommunityIconsIcon
          name="television"
          style={styles.FooterIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWrapper}>
        <MaterialCommunityIconsIcon
          name="music-note"
          style={styles.activeIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWrapper}>
        <MaterialCommunityIconsIcon
          name="book"
          style={styles.FooterIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWrapper}>
        <MaterialCommunityIconsIcon
          name="calendar-text"
          style={styles.FooterIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  FooterContainer: {
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  buttonWrapper: {
    flex: 1,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  FooterIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8,
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
  },
});

export default Footer;
