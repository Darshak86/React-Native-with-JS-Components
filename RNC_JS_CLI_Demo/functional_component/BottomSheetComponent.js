import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Linking
} from "react-native";

// https://github.com/nysamnang/react-native-raw-bottom-sheet/blob/master/example/index.js
// https://gist.github.com/akulsr0/8671b1d3f5e04cc6a310ce540a1f9ebf
// npm i react-native-raw-bottom-sheet or yarn add react-native-raw-bottom-sheet
import BottomSheet from "react-native-raw-bottom-sheet";

// npm i react-native-elements or yarn add react-native-elements
import { Icon } from "react-native-elements";

const BottomSheetComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const bottomSheetRef = useRef();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <View>
            <BottomSheet
              ref={bottomSheetRef}
              closeOnDragDown={true}
              height={300}
              openDuration={250}
            >
              <View style={styles.messageContainer}>
                <Text style={styles.messageTitle}>Awesome!</Text>
                <Text style={styles.message}>
                  You can add your own component whatever you want. If you don't
                  like our default style you can customize whatever you like.
                </Text>
                <View style={styles.messageButtonContainer}>
                  <TouchableOpacity
                    style={styles.messageButton}
                    onPress={() => {
                      bottomSheetRef.current.close();
                    }}
                  >
                    <Text style={styles.messageButtonText}>CLOSE</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.messageButton, styles.messageButtonRight]}
                    onPress={() => {
                      bottomSheetRef.current.close();
                    }}
                  >
                    <Text
                      style={[
                        styles.messageButtonText,
                        styles.messageButtonTextRight
                      ]}
                    >
                      GREAT
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheet>
            <TouchableOpacity
              style={[
                styles.iconButton,
                styles.button,
                {
                  backgroundColor: "#3B6E98",
                  marginTop: 0,
                  height: 50,
                  justifyContent: "center",
                  marginHorizontal : 40
                }
              ]}
              onPress={() => {
                bottomSheetRef.current.open();
              }}
            >
              <Icon
                name="google-play"
                type="font-awesome-5"
                color={"#fff"}
                paddingRight={10}
              />
              <Text style={styles.submitButtonText}>Open Bottom Sheet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BottomSheetComponent;

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
  iconButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    marginTop: 10
  },
  submitButtonText: {
    textAlign: "center",
    fontSize: 20
  },
  messageContainer: {
    flex: 1,
    padding: 25
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222"
  },
  message: {
    fontSize: 17,
    lineHeight: 24,
    marginVertical: 20,
    color: "black"
  },
  messageButtonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  messageButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#3385ff",
    marginLeft: 10
  },
  messageButtonText: {
    color: "#3385ff",
    fontSize: 16,
    fontWeight: "bold"
  },
  messageButtonRight: {
    backgroundColor: "#3385ff"
  },
  messageButtonTextRight: {
    color: "#fff"
  }
});
