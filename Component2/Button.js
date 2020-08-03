import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Button(props) {
  //! Button '정원'에 따라 색갈이 달라져야한다.
  //! state 필요
  //! state가 함수로 렌더링 되게한다.
  //* if/조건문으로 로직 작성
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.caption}>{props.caption || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#17D047",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#000000",
    fontSize: 15,
  },
});

export default Button;
