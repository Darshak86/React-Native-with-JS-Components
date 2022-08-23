import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";

const SliderComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>Get Current Slider Value</Text>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {selectedValue}
          </Text>
          <Slider
            style={styles.sliderStyle}
            step={1}
            minimumValue={1}
            maximumValue={100}
            thumbTintColor="#477DC4"
            maximumTrackTintColor="#494848"
            minimumTrackTintColor="#F58D8D"
            onValueChange={setSelectedValue}
            onMoveShouldSetResponder={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SliderComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE7E7",
    justifyContent: "center",
    padding: 10
  },
  titleStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "grey"
  },
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "black"
  },
  sliderStyle: {
    width: "100%",
    height: 40
  }
});
