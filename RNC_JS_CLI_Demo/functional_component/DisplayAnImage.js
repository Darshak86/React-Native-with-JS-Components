import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from "react-native";

const DisplayAnImage = () => {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  return <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Image From URL</Text>
          <Image style={styles.tinyLogo} source={image} />
          <Text style={styles.textStyle}>resizeMode: "stretch"</Text>
          <Image style={[styles.stretch, styles.basic]} source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")} />
          <Text style={styles.textStyle}>resizeMode: "contain"</Text>
          <Image style={[styles.contain, styles.basic]} source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")} />
          <Text style={styles.textStyle}>resizeMode: "center"</Text>
          <Image style={[styles.center, styles.basic]} source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")} />
          <Text style={styles.textStyle}>resizeMode: "repeat"</Text>
          <Image style={[styles.repeat, styles.basic]} source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")} />
          <Text style={styles.textStyle}>resizeMode: "cover"</Text>
          <Image style={[styles.cover, styles.basic]} source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")} />
          <Text style={styles.textStyle}>Round with shadow effect Image</Text>
          <View style={styles.ContainerImageProfile}>
            <Image style={[styles.cover, styles.round]} source={require("../assets/images/kar-ming-moo-Q_3WmguWgYg-unsplash.jpg")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default DisplayAnImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10
  },
  basic: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 10
  },
  round: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 1
  },
  ContainerImageProfile: {
    backgroundColor: "#EBFC07",
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 3,
    borderRadius: 100,
    marginBottom: 20
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#344953"
  },
  stretch: {
    resizeMode: "stretch"
  },
  contain: {
    resizeMode: "contain"
  },
  repeat: {
    resizeMode: "repeat"
  },
  center: {
    resizeMode: "center"
  },
  cover: {
    resizeMode: "cover"
  }
});
