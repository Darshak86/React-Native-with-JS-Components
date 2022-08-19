import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import getColor from "../config/colors";

const SafeAreaViewScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Page content</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: getColor("LIGHT_GREEN")
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: getColor("BLACK"),
    // textAlign: "center"
  }
});

export default SafeAreaViewScreen;
