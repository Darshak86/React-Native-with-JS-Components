import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

const CheckBoxComponent = () => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          tintColors={{ true: "#F15927", false: "black" }}
          boxType={"square"}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      <Text style={styles.label}>
        Is CheckBox selected: {isSelected ? "👍" : "👎"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox: {
    width: 35,
    height: 35,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    margin: 8,
    color: "black"
  }
});

export default CheckBoxComponent;
