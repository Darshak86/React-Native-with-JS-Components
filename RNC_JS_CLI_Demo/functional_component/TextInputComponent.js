import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const TextInputComponent = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        placeholderTextColor="#534F4F"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "black"
  }
});
