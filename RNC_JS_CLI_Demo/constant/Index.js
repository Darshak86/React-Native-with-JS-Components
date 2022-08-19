import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../functional_component/HomeScreen";
import TextView from "../functional_component/TextView";
import FunctionalComponent from "../functional_component/FunctionalComponent";
import ClassComponent from "../class_component/ClassComponent";
import Flex from "../functional_component/Flex";
import AlignContentLayout from "../functional_component/AlignContentLayout";
import AlignItemsLayout from "../functional_component/AlignItemsLayout";
import AlignSelfLayout from "../functional_component/AlignSelfLayout";
import DirectionLayout from "../functional_component/DirectionLayout";
import FlexBasis_Grow_and_Shrink from "../functional_component/FlexBasis_Grow_and_Shrink";
import FlexDirection from "../functional_component/FlexDirection";
import FlexWrapLayout from "../functional_component/FlexWrapLayout";
import PositionLayout from "../functional_component/PositionLayout";
import JustifyContentBasics from "../functional_component/JustifyContentBasics";
import WidthHeightBasics from "../functional_component/WidthHeightBasics";
import ScreenDimensions from "../functional_component/ScreenDimensions";
import PlatformSpecific from "../functional_component/PlatformSpecific";
import ViewBoxesWithColorAndText from "../functional_component/ViewBoxesWithColorAndText";
import SafeAreaViewScreen from "../functional_component/SafeAreaViewScreen";
import CardViewScreen from "../functional_component/CardViewScreen";
import GradientComponent from "../functional_component/GradientComponent";
import screens from "../config/screens";

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
          name="TextView"
          component={TextView}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Functional_component"
          component={FunctionalComponent}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Class_Component"
          component={ClassComponent}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="Flex"
          component={Flex}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="FlexBasis_Grow_and_Shrink"
          component={FlexBasis_Grow_and_Shrink}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="FlexDirection"
          component={FlexDirection}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="FlexWrapLayout"
          component={FlexWrapLayout}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="AlignContentLayout"
          component={AlignContentLayout}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="AlignItemsLayout"
          component={AlignItemsLayout}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="AlignSelfLayout"
          component={AlignSelfLayout}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="DirectionLayout"
          component={DirectionLayout}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="JustifyContentBasics"
          component={JustifyContentBasics}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="PositionLayout"
          component={PositionLayout}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="WidthHeightBasics"
          component={WidthHeightBasics}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="ScreenDimensions"
          component={ScreenDimensions}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="PlatformSpecific"
          component={PlatformSpecific}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="ViewBoxesWithColorAndText"
          component={ViewBoxesWithColorAndText}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="SafeAreaViewScreen"
          component={SafeAreaViewScreen}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="CardViewScreen"
          component={CardViewScreen}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name="GradientComponent"
          component={GradientComponent}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
