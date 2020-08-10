import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function DateTextBox(props) {
  return (
    // <View style={[styles.container, props.style]}>
      <Text style={styles.label}>2020.00.00</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    // paddingLeft: 16,
  },
  label: {
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
    textAlign: "center",
    fontSize: 25,
    opacity: 0.5,
    // lineHeight: 16,
    // paddingTop: 30,
    // paddingBottom: 8,
    // color: "#000",
    // alignSelf: "flex-start",
  },
});

export default DateTextBox;
