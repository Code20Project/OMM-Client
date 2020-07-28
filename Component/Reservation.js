import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import TimeReservation from "../Component/TimeReservation";

// import mainStyle from "../styles/mainStyle";

//* 클릭 이벤트 && 화면 2개 더 Build up 하기!!
function Reservation() {
  return (
    <View style={styles.ReservationContainer}>
      <Footer style={styles.Footer}></Footer>
      <Header title="Lecture reservation" style={styles.Header}></Header>

      <View style={styles.imageRow}>
        <Image
          source={require("../assets/splash.png")}
          resizeMode="contain"
          style={styles.image}
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

      <View style={styles.TimeReservationStack}>
        <TimeReservation
          style={styles.button}
          toastMessage="07:30~10:00"
          buttonText="예약완료 >"
          style={styles.TimeReservation}
        ></TimeReservation>
        <TimeReservation
          toastMessage="13:00~15:20"
          buttonText="예약가능 >"
          style={styles.TimeReservation2}
        ></TimeReservation>

        <TimeReservation
          style={styles.button}
          buttonText="UNDO"
          toastMessage="15:30~18:00"
          buttonText="예약불가 >"
          style={styles.TimeReservation3}
        ></TimeReservation>

        <TextInput
          placeholder="2020.00.00"
          style={styles.textInput}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ReservationContainer: {
    flex: 1,
  },
  Footer: {
    height: 56,
    width: 360,
    backgroundColor: "rgba(85,136,136,1)",
    marginTop: 684,
  },
  Header: {
    height: 55,
    width: 360,
    backgroundColor: "rgba(85,136,136,1)",
    marginTop: -717,
  },
  ViewContainer: {
    width: 360,
    height: 30,
  },
  TimeReservation: {
    width: 360,
    height: 48,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  TimeReservation2: {
    width: 362,
    height: 48,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: -2,
  },
  TimeReservation3: {
    width: 362,
    height: 48,
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: -2,
  },
  image: {
    width: 179,
    height: 210,
  },
  image1: {
    width: 179,
    height: 210,
    marginLeft: 2,
  },
  image2: {
    top: 0,
    left: 0,
    width: 179,
    height: 210,
    position: "absolute",
  },
  image1: {
    width: 179,
    height: 210,
    marginLeft: 4,
  },
  imageRow: {
    height: 210,
    flexDirection: "row",
    marginLeft: 2,
  },
  imageRow2: {
    height: 210,
    flexDirection: "row",
  },
  TimeReservationStack: {
    width: 362,
    height: 254,
    marginTop: 41,
    marginLeft: -2,
  },
  textInput: {
    fontFamily: "roboto-700",
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
