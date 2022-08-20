import { StyleSheet, Text, View, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";

let timer = () => {};
const TimerComponent = props => {
  const [timeLeft, setTimeLeft] = useState(10);

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        Alert.alert("Game Over");
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });

  const start = () => {
    setTimeLeft(10);
    clearTimeout(timer);
    startTimer();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {" "}{timeLeft}{" "}
      </Text>
      <Button onPress={start} title="Reset" />
    </View>
  );
};

export default TimerComponent;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 10,
    flex: 1,
    justifyContent: "center"
  },
  title: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
    margin : 20
  }
});
