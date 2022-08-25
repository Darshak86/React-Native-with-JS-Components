import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// https://www.npmjs.com/package/react-native-searchable-dropdown
// npm install react-native-searchable-dropdown
// # OR
// yarn add react-native-searchable-dropdown

import SearchableDropdown from "react-native-searchable-dropdown";

const SearchableDropdownComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const [selectedItems, setSelectedItems] = useState([
    {
      id: 7,
      name: "Go"
    },
    {
      id: 8,
      name: "Swift"
    }
  ]);
  var items = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Java" },
    { id: 3, name: "Ruby" },
    { id: 4, name: "React Native" },
    { id: 5, name: "PHP" },
    { id: 6, name: "Python" },
    { id: 7, name: "Go" },
    { id: 8, name: "Swift" }
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <SearchableDropdown
            multi={false}
            selectedItems={selectedItems}
            onItemSelect={item => {
              const items = selectedItems;
              items.push(item);
              setSelectedItems(items);
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = selectedItems.filter(sitem => sitem.id !== item.id);
              setSelectedItems(items);
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: "#dddddd",
              borderColor: "#bbbbbb",
              borderWidth: 1,
              borderRadius: 5,
              color: " black",
            }}
            itemTextStyle={{ color: "#222" }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            chip={true}
            resetValue={false}
            textInputProps={{
              placeholder: "placeholder",
              placeholderTextColor: "gray",
              underlineColorAndroid: "transparent",
              style: {
                padding: 12,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 5,
              },
              onTextChange: text => alert(text)
            }}
            listProps={{ nestedScrollEnabled: true }}
          />
          {/* Single */}
          <SearchableDropdown
            onItemSelect={item => {
              const items = selectedItems;
              items.push(item);
              setSelectedItems(items);
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              const items = selectedItems.filter(
                sitem => sitem.id !== item.id
              );
              setSelectedItems(items);
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: "#ddd",
              borderColor: "#bbb",
              borderWidth: 1,
              borderRadius: 5
            }}
            itemTextStyle={{ color: "#222" }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={items}
            defaultIndex={2}
            resetValue={false}
            textInputProps={{
              placeholder: "placeholder",
              placeholderTextColor: "gray",
              underlineColorAndroid: "transparent",
              itemsContainerStyle:"#866767",
              style: {
                padding: 12,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 5
              },
              onTextChange: text => alert(text)
            }}
            listProps={{ nestedScrollEnabled: true }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchableDropdownComponent;

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
  }
});
