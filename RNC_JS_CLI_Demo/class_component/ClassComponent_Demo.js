import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class ClassComponent_Demo extends Component {

   constructor() {
    super();
    this.state = {
      title: "Class Component",
    };
  }

  render() {
    return <View style={styles.base}>
        <Text style={styles.item}>
          {this.state.title}
        </Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A7D309"
  },
  item: {
    backgroundColor: "#DBDBD3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#0C0C0C",
    borderRadius: 10
  }
});
