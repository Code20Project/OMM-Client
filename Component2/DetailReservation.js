import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import Button from "./Button";
import TextView from "./TextView";

//! 강의 예약 정보 화면 - Main <DetailReservation>
//* Footer
//* Header
//* MainTextBox
//* Button
//* Impormation - 강의명, 강의종류, 강사명, 강의시간, 정원, 예약상태

function DetailReservation(props) {
  return (
    <View style={styles.DetailReservationContainer}>
      <Header title="Lecture reservation" style={styles.Header} />

      <View style={styles.TextSt}>
        <TextView style={styles.TextView} />
      </View>

      <View style={styles.ButtonSt}>
        <Button caption="BUTTON" caption="예약하기" style={styles.Button} />
      </View>

      <Footer style={styles.Footer} />
    </View>
  );
}

const styles = StyleSheet.create({
  TextView: {},
  DetailReservationContainer: {
    flex: 1,
  },
  TextSt: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Header: {
    backgroundColor: "rgba(85,136,136,1)",
    marginTop: 24,
  },
  Footer: {
    height: 56,
    // width: 360,
    backgroundColor: "rgba(85,136,136,1)",
    // marginTop: 540,
  },
  Button: {
    height: 36,
    width: 118,
    backgroundColor: "rgba(23,208,71,1)",
    marginTop: 230,
  },
  ButtonSt: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    marginTop: -70,
    height: 36,
  },
});

export default DetailReservation;
