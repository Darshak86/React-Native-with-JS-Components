import {
  StyleSheet,
  Text,
  View,
  Button,
  Share,
  SafeAreaView
} from "react-native";
import React, { useState, useEffect } from "react";

const ShareComponent = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React"
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Share / Activity View
        </Text>
        <View style={styles.container}>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Share"
              onPress={onShare}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ShareComponent;

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
  buttonStyle: {
    marginVertical: 30,
    marginHorizontal: 30,
    borderRadius: 10
  }
});
