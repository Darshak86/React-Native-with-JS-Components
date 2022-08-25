import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView, Dimensions } from "react-native";

// https://www.npmjs.com/package/react-native-maps
// npm install react-native-maps
// # OR
// yarn add react-native-maps

import MapView from "react-native-maps";

const MapViewComponent = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          {/* <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
            style={styles.map}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MapViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE7E7",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5
  },
  titleStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "grey"
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
