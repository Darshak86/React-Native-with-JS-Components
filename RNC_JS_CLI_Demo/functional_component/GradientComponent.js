import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { fontSize, fontFamily } from "../config/fonts";
import getColor from "../config/colors";
import LinearGradient from "react-native-linear-gradient";

const GradientComponent = ({ route, navigation }) => {
  const { title } = route.params;
  return <View style={styles.base}>
      <LinearGradient colors={["#bdc3c7", "#2c3e50"]} style={styles.linearGradient}>
        <Text style={styles.item}>
          {title}
        </Text>
      </LinearGradient>
    </View>;
};

export default GradientComponent;

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  item: {
    backgroundColor: getColor("LIGHT_GREEN"),
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: getColor("BLACK"),
    borderRadius: 10,
    fontSize: fontSize(16),
    fontFamily: fontFamily.ROB_MED
  }
});
