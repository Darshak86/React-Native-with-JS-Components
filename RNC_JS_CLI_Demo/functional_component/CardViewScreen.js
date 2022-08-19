import { StyleSheet, Text, View } from "react-native";
import React from "react";
import getColor from "../config/colors";
import { fontSize, fontFamily } from "../config/fonts";

const CardViewScreen = () => {
  return <View style={styles.base}>
      <View style={styles.cardView}>
        <Text style={styles.item}>CardViewScreen</Text>
      </View>
    </View>;
};

export default CardViewScreen;

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: getColor("WHITE")
  },
  cardView: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: getColor("WHITE"),
    shadowOffset: { width: 1, height: 1 },
    shadowColor: getColor("BLACK"),
    shadowOpacity: 0.3,
    shadowRadius : 6,
    marginVertical: 4,
    marginHorizontal: 6
  },
  item: {
    backgroundColor: getColor("LIGHT_GREEN"),
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 2,
    color: getColor("BLACK"),
    borderRadius: 10,
    fontSize: fontSize(16),
    fontFamily: fontFamily.POP_REG
  }
});
