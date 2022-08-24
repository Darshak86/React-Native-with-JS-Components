import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";
import { Icon } from "react-native-elements";

// https://
// npm install
// # OR
// yarn add

const ImagePickerComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const bottomSheetRef = useRef();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <View style={styles.ContainerImageProfile}>
            <Image
              style={[styles.cover, styles.round]}
              source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.iconButton,
              styles.button,
              {
                backgroundColor: "#3B6E98",
                marginTop: 0,
                height: 50,
                justifyContent: "center",
                marginHorizontal: "20%"
              }
            ]}
            onPress={() => {
              bottomSheetRef.current.open();
            }}
          >
            <Icon
              name="camera"
              type="font-awesome-5"
              color={"#fff"}
              paddingRight={20}
            />
            <Text style={styles.submitButtonText}>Upload Photo</Text>
          </TouchableOpacity>
          <BottomSheet
            ref={bottomSheetRef}
            closeOnDragDown={true}
            height={300}
            openDuration={250}
          >
            <View style={styles.messageContainer}>
              <Text style={styles.messageTitle}>Upload Photo!</Text>
              <Text style={styles.message}>Choose your Profile Picture.</Text>
              <View style={styles.messageButtonContainer}>
                <TouchableOpacity
                  style={styles.messageButton}
                  onPress={() => {
                    bottomSheetRef.current.close();
                  }}
                >
                  <Text style={styles.messageButtonText}>Take Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.messageButton}
                  onPress={() => {
                    bottomSheetRef.current.close();
                  }}
                >
                  <Text style={styles.messageButtonText}>
                    Choose From Library
                  </Text>
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
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </BottomSheet>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE7E7",
    // justifyContent: "center",
    alignItems : "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
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
    padding: 5
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
    textAlign: "center"
  },
  message: {
    fontSize: 17,
    lineHeight: 24,
    marginVertical: 5,
    color: "black",
    textAlign: "center"
  },
  messageButtonContainer: {
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  messageButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#3385ff",
    marginVertical: 10,
    marginHorizontal :20
  },
  messageButtonText: {
    color: "#3385ff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  },
  messageButtonRight: {
    backgroundColor: "#3385ff"
  },
  messageButtonTextRight: {
    color: "#fff"
  },
  round: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 0
  },
  cover: {
    resizeMode: "cover"
  },
  ContainerImageProfile: {
    alignItems : "center",
    justifyContent : "center",
    width: 204,
    height: 204,
    backgroundColor: "#EBFC07",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 102,
    margin: 50,

  }
});
