import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

function TextView(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.ReservationInfo}>강의 예약 정보</Text>

      <View style={styles.NameRow}>
        <Text style={styles.Name}>강의명</Text>
        <Text style={styles.TextSt}>기초 영어{/* 변수 */}</Text>
      </View>

      <View style={styles.StudyRow}>
        <Text style={styles.StudyMenu}>강의종류</Text>
        <Text style={styles.language}>Language{/* 변수 */}</Text>
      </View>

      <View style={styles.TeacherRow}>
        <Text style={styles.Teacher}>강사명</Text>
        <Text style={styles.Student}>김하늠{/* 변수 */}</Text>
      </View>

      <View style={styles.StudyTimeRow}>
        <Text style={styles.StudyTime}>강의시간</Text>
        <Text style={styles.Times}>07:30~10:10{/* 변수 */}</Text>
      </View>

      <View style={styles.PeopleStack}>
        <Text style={styles.People}>정원</Text>
        <Text style={styles.PeopleInfo}>정원 6{/* 변수 */}명 중 5{/* 변수 */}명 예약</Text>
      </View>

      <View style={styles.ReservationStateRow}>
        <Text style={styles.ReservationState}>예약상태</Text>
        <Text style={styles.DoitReservation}>예약가능{/* 변수 */}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ReservationInfo: {
    color: "#121212",
    height: 50,
    // width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  Name: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 55,
    width: 104,
    textAlign: "center",
    lineHeight: 50,
  },
  TextSt: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  NameRow: {
    height: 55,
    flexDirection: "row",
    marginTop: 53,
    marginLeft: 1,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  StudyMenu: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 55,
    width: 104,
    lineHeight: 50,
    textAlign: "center",
  },
  language: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  StudyRow: {
    height: 55,
    flexDirection: "row",
    marginLeft: 1,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  Teacher: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 55,
    width: 104,
    lineHeight: 50,
    textAlign: "center",
  },
  Student: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  TeacherRow: {
    height: 55,
    flexDirection: "row",
    marginLeft: 1,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  StudyTime: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 55,
    width: 104,
    lineHeight: 50,
    textAlign: "center",
  },
  Times: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  StudyTimeRow: {
    height: 55,
    flexDirection: "row",
    marginRight: 1,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  People: {
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 55,
    width: 104,
    top: 0,
    lineHeight: 50,
    textAlign: "center",
  },
  PeopleInfo: {
    top: 0,
    left: 103,
    position: "absolute",
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  PeopleStack: {
    width: 358,
    height: 55,
    marginTop: 1,
    marginLeft: 1,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  ReservationState: {
    // fontFamily: "roboto-700",
    color: "#121212",
    height: 55,
    width: 104,
    lineHeight: 50,
    textAlign: "center",
  },
  DoitReservation: {
    // fontFamily: "roboto-regular",
    color: "#121212",
    height: 55,
    width: 255,
    textAlign: "center",
    lineHeight: 50,
  },
  ReservationStateRow: {
    height: 55,
    flexDirection: "row",
    marginLeft: 1,
    padding: 4,
    borderBottomColor: "red",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default TextView;
