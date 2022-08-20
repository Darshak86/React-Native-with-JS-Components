import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const RadioButtonComponent = () => {
  const [checked, setChecked] = useState(0);
  let gender = ["Male", "Female"];
  return (
    <View style ={styles.container}>
      <View style={styles.btn}>
        {gender.map((gender, key) => {
          return (
            <View key={gender}>
              {checked == key
                ? <TouchableOpacity style={styles.btn}>
                    <Image
                      style={styles.img}
                      source={require("../assets/images/radio_Checked.png")}
                    />
                    <Text style={styles.title}>
                      {gender}
                    </Text>
                  </TouchableOpacity>
                : <TouchableOpacity
                    onPress={() => {
                      setChecked(key);
                    }}
                    style={styles.btn}
                  >
                    <Image
                      style={styles.img}
                      source={require("../assets/images/radio_Unchecked.png")}
                    />
                    <Text style={styles.title}>
                      {gender}
                    </Text>
                  </TouchableOpacity>}
            </View>
          );
        })}
      </View>
      <Text style={styles.title}>
        selected : {gender[checked]}
      </Text>
    </View>
  );
};

export default RadioButtonComponent;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 10,
    flex: 1,
    justifyContent: "center"
  },
  img: {
    height: 40,
    width: 40,
    marginHorizontal: 5
  },
  btn: {
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    color: "black",
    margin: 10,
    fontSize: 30,
    textAlign : "center"
  }
});
