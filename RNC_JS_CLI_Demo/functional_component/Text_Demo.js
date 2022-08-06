import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Text_Demo = ({ route ,navigation}) => {
    const { title } = route.params;
  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.item}>
        {title}
      </Text>
    </View>;
};

export default Text_Demo;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#DBDBD3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#0C0C0C"
  }
});
