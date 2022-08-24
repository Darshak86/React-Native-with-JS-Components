import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

// npm i react-native-swiper or yarn add react-native-swiper
import Swiper from "react-native-swiper";

const SwiperComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const [userData] = useState([
    {
      img: "https://randomuser.me/api/portraits/men/81.jpg",
      name: "Maurice Davis"
    },
    {
      img: "https://randomuser.me/api/portraits/women/20.jpg",
      name: "Bernice Alvarez"
    },
    {
      img: "https://randomuser.me/api/portraits/women/19.jpg",
      name: "Jennie Barnett"
    },
    {
      img: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Matthew Wagner"
    },
    {
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      name: "Christian Wilson"
    },
    {
      img: "https://randomuser.me/api/portraits/women/21.jpg",
      name: "Sophia Fernandez"
    },
    {
      img: "https://randomuser.me/api/portraits/women/42.jpg",
      name: "Sylvia Lynch"
    }
  ]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <View style={{ width: "100%", height: 300, marginTop: 20 }}>
            <Swiper showsButtons={true} autoplay={true} autoplayTimeout={4.5}>
              {userData.map(user =>
                <View style={{ alignItems: "center" }}>
                  <Image
                    style={{ width: 300, height: 300 }}
                    source={{ uri: user.img }}
                  />
                </View>
              )}
            </Swiper>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SwiperComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE7E7",
    // justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 18,
    textAlign: "center",
    color: "grey"
  }
});
