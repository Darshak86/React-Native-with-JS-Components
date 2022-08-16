import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../functional_component/HomeScreen";
import Text_Demo from "../functional_component/Text_Demo";
import FunctionalComponent_Demo from "../functional_component/FunctionalComponent_Demo";
import ClassComponent_Demo from "../class_component/ClassComponent_Demo";

const index = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" }
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          options={{ title: "Components List" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Text"
          component={Text_Demo}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Functional_component"
          component={FunctionalComponent_Demo}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Class_Component"
          component={ClassComponent_Demo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
