import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FunctionalComponent_Demo = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <View style={styles.base}>
      <Text style={styles.item}>
        {title}
      </Text>
    </View>
  );
};

export default FunctionalComponent_Demo;

const styles = StyleSheet.create({
  base: { flex: 1,
     justifyContent: "center",
      alignItems: "center",
    backgroundColor: "#023127" } , 
  item: {
    backgroundColor: "#DBDBD3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#0C0C0C",
    borderRadius : 10
  }
});
