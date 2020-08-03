import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import mainStyle from "../styles/mainStyle";

function TimeReservation(props) {
  return (
    <View style={[styles.TimeReservationContainer, props.style]}>
      <Text numberOfLines={1} style={styles.messageFont}>
        {props.messageFont || "07:00~10:30"}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{props.buttonText || "UNDO"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  TimeReservationContainer: {
    minWidth: 288,
    justifyContent: "space-between",
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 2,
    flexDirection: "row",
    alignItems: "center"
  },
  messageFont: {
    fontSize: 15,
    color: "rgba(0,0,0,1)"
  },
  buttonText: {
    color: "rgba(26,70,193,1)",
    fontSize: 15
  },
});

export default TimeReservation;
