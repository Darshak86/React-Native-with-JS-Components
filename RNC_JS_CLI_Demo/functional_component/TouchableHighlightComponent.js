import React, { useState } from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightComponent = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  return <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text style={{ color: "black" }}>Touch Here</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {count || null}
        </Text>
      </View>
    </View>;
};

export default TouchableHighlightComponent;

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
    color :"black"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF",
    fontSize:20
  }
});