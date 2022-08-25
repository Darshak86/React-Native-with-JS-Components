import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  PermissionsAndroid,
  Platform
} from "react-native";

// https://www.npmjs.com/package/@react-native-community/geolocation
// npm install @react-native-community/geolocation --save
// # OR
// yarn add @react-native-community/geolocation

import Geolocation from "@react-native-community/geolocation";

const GeoLocationsComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const [currentLongitude, setCurrentLongitude] = useState("");
  const [currentLatitude, setCurrentLatitude] = useState("");

  useEffect(() => {
    if (Platform.OS === "ios") {
      this.callLocation();
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Access Required",
              message: "This App needs to Access your location"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            callLocation();
          } else {
            alert("Permission Denied");
          }
        } catch (err) {
          alert("err", err);
          console.warn(err);
        }
      }
      requestLocationPermission();
    }
  });

  const callLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLatitude(currentLatitude);
        setCurrentLongitude(currentLongitude);
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    watchID = Geolocation.watchPosition(position => {
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      setCurrentLatitude(currentLatitude);
      setCurrentLongitude(currentLongitude);
      
    });
    Geolocation.clearWatch(watchID);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <Text style={styles.titleStyle}>You are Here</Text>
          <Text style={styles.titleStyle}>
            Longitude: {currentLongitude}
          </Text>
          <Text style={styles.titleStyle}>
            Latitude: {currentLatitude}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GeoLocationsComponent;

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
  }
});
