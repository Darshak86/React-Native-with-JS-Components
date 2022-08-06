import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  //function to go to next screen
  const goToNextScreen = (id,title) => {
    console.log(id);
    console.log(title);
    return navigation.push("Text", {
            title : `${title}`});
  };
  const DATA = [
    { id: "1", title: "Text" },
    { id: "2", title: "STL" },
    { id: "3", title: "C++" },
    { id: "4", title: "Java" },
    { id: "5", title: "Python" },
    { id: "6", title: "CP" },
    { id: "7", title: "ReactJs" },
    { id: "8", title: "NodeJs" },
    { id: "9", title: "MongoDb" },
    { id: "10", title: "ExpressJs" },
    { id: "11", title: "PHP" },
    { id: "12", title: "MySql" }
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) =>
          <TouchableOpacity onPress={() => goToNextScreen(index,item.title)}>
            <Text style={styles.item}>
              {item.title}
            </Text>
          </TouchableOpacity>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    backgroundColor: "#DBDBD3",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color : '#0C0C0C'
  }
});

export default HomeScreen;
