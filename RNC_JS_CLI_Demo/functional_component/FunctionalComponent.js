import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { fontSize, fontFamily } from "../config/fonts";
import getColor from "../config/colors";

const FunctionalComponent = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <View style={styles.base}>
      <Text style={styles.item}>
        {title}
      </Text>
    </View>
  );
};

export default FunctionalComponent;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: getColor("BLUE")
  },
  item: {
    backgroundColor: getColor("LIGHT_GREEN"),
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: getColor("BLACK"),
    borderRadius: 10,
    fontSize: fontSize(16),
    fontFamily: fontFamily.POP_REG
  }
});
