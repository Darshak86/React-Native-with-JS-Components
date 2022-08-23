import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PickerComponent = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Picker Example</Text>
      <View style={styles.pickerViewStyle}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => (
            setSelectedIndex(itemIndex),
            setSelectedValue(itemValue)
          )}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="React Native" value="rn" />
        </Picker>
      </View>
      <Text style={styles.textStyle}>
        {" "}{"Index =" + selectedIndex}
      </Text>
    </View>
  );
};

export default PickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black"
  },
  pickerStyle: {
    width: "100%",
    color: "#344953",
    justifyContent: "center"
  },
  pickerViewStyle: {
    height: 50,
    marginHorizontal: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    borderColor: "black",
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "#E0D2D2"
  }
});
