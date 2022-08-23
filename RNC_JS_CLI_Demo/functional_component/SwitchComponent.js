import React, { useState } from "react";
import { Text, View, Switch, StyleSheet } from "react-native";

const SwitchComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Switch Example</Text>
      <Text style={styles.textStyle}>
        {isEnabled ? "on" : "off"}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#344953"
  }
});
