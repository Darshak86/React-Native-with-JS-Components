import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";

const CustomIconComponent = () => {
  return <View>
      <Text style={styles.textStyle}>Ionicons Icons</Text>
      <Ionicons name="md-bicycle" />

      <Text style={styles.textStyle}>FontAwesome Icons</Text>
      <FontAwesome name="trophy" />

      <Text style={styles.textStyle}>Entypo Icons</Text>
      <Entypo name="aircraft" />
    </View>;
};

export default CustomIconComponent;

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
    color: "#344953"
  }
});
