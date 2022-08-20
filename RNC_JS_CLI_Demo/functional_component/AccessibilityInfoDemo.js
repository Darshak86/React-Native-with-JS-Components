import React, { useState, useEffect } from "react";
import {
  AccessibilityInfo,
  View,
  Text,
  StyleSheet,
  Linking
} from "react-native";
import getColor from "../config/colors";

const AccessibilityInfoDemo = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [screenReaderEnabled, setScreenReaderEnabled] = useState(false);

  useEffect(() => {
    const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      reduceMotionEnabled => {
        setReduceMotionEnabled(reduceMotionEnabled);
      }
    );
    const screenReaderChangedSubscription = AccessibilityInfo.addEventListener(
      "screenReaderChanged",
      screenReaderEnabled => {
        setScreenReaderEnabled(screenReaderEnabled);
      }
    );

    AccessibilityInfo.isReduceMotionEnabled().then(reduceMotionEnabled => {
      setReduceMotionEnabled(reduceMotionEnabled);
    });
    AccessibilityInfo.isScreenReaderEnabled().then(screenReaderEnabled => {
      setScreenReaderEnabled(screenReaderEnabled);
    });

    return () => {
      reduceMotionChangedSubscription.remove();
      screenReaderChangedSubscription.remove();
    };
  }, []);

  return <View style={styles.container}>
      <Text style={styles.status}>
        The reduce motion is {reduceMotionEnabled ? "enabled" : "disabled"}.
      </Text>
      <Text style={styles.status}>
        The screen reader is {screenReaderEnabled ? "enabled" : "disabled"}.
      </Text>
      <View style={{ backgroundColor: "#E9DBDB" ,alignItems : "center",marginTop : 20}}>
        <Text style={styles.status1}> By signing up, you agree to</Text>
        <Text style={styles.links} accessible={true} accessibilityRole="link" onPress={() => Linking.openURL("https://www.google.com")}>
          Terms and Conditions and Privacy Policy
        </Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  status: {
    margin: 20,
    color: getColor("BLACK")
  },
  status1: {
    margin: 5,
    color: getColor("BLACK")
  },
  links: {
    margin: 5,
    color: getColor("BLUE")
  }
});

export default AccessibilityInfoDemo;
