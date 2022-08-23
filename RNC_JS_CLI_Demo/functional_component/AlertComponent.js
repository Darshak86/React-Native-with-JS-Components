import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView
} from "react-native";
import React from "react";

const AlertComponent = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native AlertView</Text>
        <View style={styles.container}>
          <View style={styles.buttonStyle}>
            <Button
              title="Normal Alert"
              onPress={() => Alert.alert("One Button Alert")}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Two Button Alert"
              onPress={createTwoButtonAlert}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Three Button Alert"
              onPress={createThreeButtonAlert}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AlertComponent;

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
