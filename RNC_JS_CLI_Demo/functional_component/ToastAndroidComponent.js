import {
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  SafeAreaView
} from "react-native";
import React, { useState, useEffect } from "react";

const Toast = ({ visible, message }) => {
  if (visible) {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    return null;
  }
  return null;
};

const ToastAndroidComponent = () => {
  const showShortToast = () =>
    ToastAndroid.show("ToastAndroid.SHORT", ToastAndroid.SHORT);
  const showWithGravityToast = () =>
    ToastAndroid.showWithGravity(
      "ToastAndroid.SHORT, ToastAndroid.CENTER",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  const showWithGravityAndOffsetToast = () =>
    ToastAndroid.showWithGravityAndOffset(
      "ToastAndroid.LONG, ToastAndroid.TOP, 25, 50",
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      25,
      50
    );

  const [visibleToast, setVisibleToast] = useState(false);

  useEffect(() => setVisibleToast(false), [visibleToast]);

  const handleButtonPress = () => {
    setVisibleToast(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>React Native Toast Message</Text>
        <View style={styles.container}>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Show Toast : Short"
              onPress={showShortToast}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Show Toast : Short and centered"
              onPress={showWithGravityToast}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonStyle}
              title="Show Toast : Gravity and offset"
              onPress={showWithGravityAndOffsetToast}
            />
          </View>
          <View style={styles.buttonStyle}>
            <Toast
              visible={visibleToast}
              message="ToastAndroid.LONG, ToastAndroid.BOTTOM, 25, 50"
            />
            <Button
              style={styles.buttonStyle}
              title="Advanced Toast"
              onPress={handleButtonPress}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToastAndroidComponent;

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
