import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

// https://www.npmjs.com/package/react-native-context-menu-view
// npm i react-native-context-menu-view or yarn add react-native-context-menu-view
import ContextMenu from "react-native-context-menu-view";

const ContextMenuComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const [color, setColor] = useState("blue");
  const [circle, setCircle] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <ContextMenu
            title={"Customize"}
            actions={[
              {
                title: "Change Color",
                systemIcon: "paintbrush",
                inlineChildren: true,
                actions: [
                  {
                    title: "Blue",
                    systemIcon:
                      color === "blue" ? "paintbrush.fill" : "paintbrush"
                  },
                  {
                    title: "Red",
                    systemIcon:
                      color === "red" ? "paintbrush.fill" : "paintbrush"
                  }
                ]
              },
              { title: "Transparent", systemIcon: "trash", destructive: true },
              { title: "Toggle Circle", systemIcon: "circlebadge" },
              { title: "Disabled Item", disabled: true }
            ]}
            onPress={event => {
              const { index, name } = event.nativeEvent;
              if (index == 0) {
                setColor(name.toLowerCase());
              } else {
                setCircle(!circle);
              }
            }}
            onCancel={() => {
              console.warn("CANCELLED");
            }}
            previewBackgroundColor="transparent"
          >
            <View
              style={[
                styles.rectangle,
                { backgroundColor: color, borderRadius: circle ? 999 : 0 }
              ]}
            />
          </ContextMenu>

          <View style={styles.spacer} />

          <ContextMenu
            title={"Dropdown Menu"}
            actions={[{ title: "Test Item" }]}
            dropdownMenuMode={true}
          >
            <View style={[styles.rectangle, { backgroundColor: "purple" }]} />
          </ContextMenu>

          <View style={styles.spacer} />

          <ContextMenu
            title={"Custom Preview"}
            actions={[{ title: "Test Item" }]}
            previewBackgroundColor="transparent"
            preview={
              <View style={[styles.rectangle, { backgroundColor: "green" }]} />
            }
          >
            <View style={[styles.rectangle, { backgroundColor: "red" }]} />
          </ContextMenu>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ContextMenuComponent;

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
  rectangle: {
    width: 200,
    height: 200
  },
  spacer: {
    height: 16
  }
});
