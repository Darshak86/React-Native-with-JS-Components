import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import {DATA} from "../constant/componentListArroy";

const HomeScreen = ({ navigation }) => {
  //function to go to next screen
  const goToNextScreen = (id, title) => {
    // console.log(id);
    // console.log(title);
    return navigation.push("Text", {title: `${title}` ,name : `${title}`});
  };
  return <View style={styles.container}>
      <FlatList data={DATA} renderItem={({ item, index }) => <TouchableWithoutFeedback onPress={() => goToNextScreen(index, item.title)}>
            <Text style={styles.item}>
              ({index+1})  {item.title}
            </Text>
          </TouchableWithoutFeedback>} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
    backgroundColor: "#DBDBD3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: "#0C0C0C",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.05,
    elevation: 5,
    borderRadius: 10
  }
});

export default HomeScreen;
