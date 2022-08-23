import React from "react";
import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const WebViewComponent = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native Webview</Text>
        <View style={styles.container}>
          <WebView source={{ uri: "https://reactnative.dev/" }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WebViewComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE7E7",
    justifyContent: "center",
    paddingVertical : 5,
    paddingHorizontal : 5,
    borderRadius: 10,
  },
  titleStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "grey"
  }
});
