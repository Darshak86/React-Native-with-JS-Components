import React, { useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

const TouchableWithoutFeedbackComponent = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          Count: {count}
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style ={{color :"black"}}>Touch Here</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TouchableWithoutFeedbackComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    color : "black"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF",
    fontSize : 20
  }
});
