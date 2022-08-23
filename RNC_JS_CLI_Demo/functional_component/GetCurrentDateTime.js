import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

const GetCurrentDateTime = () => {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    );
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Get Current Date Time</Text>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Current Date Time</Text>
          <Text style={styles.textStyle}>
            {currentDate}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetCurrentDateTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE7E7",
    justifyContent: "center",
    padding: 10
  },
  titleStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "grey"
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "black"
  }
});
