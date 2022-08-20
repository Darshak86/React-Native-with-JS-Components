import React, { useState, useEffect } from "react";
import { Keyboard, Text, TextInput, StyleSheet, View } from "react-native";

const KeyboardComponent = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Click here…"
        placeholderTextColor="#534F4F"
        onSubmitEditing={Keyboard.dismiss}
      />
      <Text style={styles.status}>
        {keyboardStatus}
      </Text>
    </View>
  );
};

export default KeyboardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    color: "black"
  },
  status: {
    padding: 10,
    textAlign: "center",
    color: "red"
  }
});
