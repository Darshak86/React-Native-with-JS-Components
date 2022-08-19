import React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
  return <View style={{ flexDirection: "row", height: 100, padding: 20 }}>
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text style={{ backgroundColor: "green", flex: 0.3 ,textAlign : "center",textAlignVertical : "center"}}>Hello World!</Text>
    </View>;
};

export default ViewBoxesWithColorAndText;
