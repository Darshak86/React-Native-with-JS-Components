import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TouchableOpacityComponent = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
  return <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text style={styles.title}>
          Count: {count}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>Press Here</Text>
      </TouchableOpacity>
    </View>;
};

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
    color : "black",
    fontSize : 20
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  title:{
    color :"black",
    fontSize : 20
  }
});

export default TouchableOpacityComponent

