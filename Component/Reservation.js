import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import TimeReservation from "../Component/TimeReservation";
import DateTextBox from "../Component/DateTextBox";

// import mainStyle from "../styles/mainStyle";

//* 클릭 이벤트 && 화면 2개 더 Build up 하기!!
function Reservation(props) {
  return (
    <View style={styles.ReservationContainer}>
      <Header title="Lecture reservation" style={styles.Header}></Header>
      <DateTextBox style={styles.DateTextBox}></DateTextBox>

      <View style={styles.testRow}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/splash.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Image
            source={require("../assets/splash.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>

        <View style={styles.imageRow2}>
          <Image
            source={require("../assets/splash.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <Image
            source={require("../assets/splash.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
        </View>

        {/* <View style={styles.TimeReservationStack}> */}
        <TimeReservation
          toastMessage="07:30~10:00"
          buttonText="예약완료 >"
          style={styles.TimeReservation}
        ></TimeReservation>

        <TimeReservation
          toastMessage="13:00~15:20"
          buttonText="예약가능 >"
          style={styles.TimeReservation}
        ></TimeReservation>

        <TimeReservation
          style={styles.button}
          buttonText="UNDO"
          toastMessage="15:30~18:00"
          buttonText="예약불가 >"
          style={styles.TimeReservation}
        ></TimeReservation>
        {/* </View> */}

        <Footer style={styles.Footer}></Footer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testRow: {
    marginTop: -66,
  },
  ReservationContainer: {
    flex: 1,
  },
  Header: {
    backgroundColor: "rgba(85,136,136,1)",
    marginTop: 24,
  },
  DateTextBox: {
    alignItems: "center",
  },
  Footer: {
    height: 56,
    backgroundColor: "rgba(85,136,136,1)",
    marginTop: 10,
  },
  TimeReservation: {
    height: 51,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,1)",
    elevation: 5,
  },
  image1: {
    width: 179,
    height: 170,
  },
  image2: {
    top: 0,
    left: 0,
    width: 179,
    height: 100,
    position: "absolute",
  },
  //***************사진(image)******************/
  imageRow: {
    height: 270,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageRow2: {
    height: 130,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    // fontFamily: "DancingScript-Bold",
    color: "#121212",
    height: 45,
    width: 362,
    fontSize: 15,
    lineHeight: 50,
    letterSpacing: 0,
    textAlign: "center",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: -605,
    marginLeft: -2,
  },
});

export default Reservation;
