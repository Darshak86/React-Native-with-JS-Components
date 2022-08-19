import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback
} from "react-native";
import React from "react";
import { DATA } from "../constant/componentListArroy";
import { fontSize, fontFamily } from "../config/fonts";
import getColor from "../config/colors";

const HomeScreen = ({ navigation }) => {
  //function to go to next screen
  const goToNextScreen = (id, title) => {
    // console.log(id);
    // console.log(title);
    if (id == 0) {
      return navigation.push("Functional_component", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 1) {
      return navigation.push("Class_Component", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 2) {
      return navigation.push("Functional_component", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 3) {
      return navigation.push("Flex", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 4) {
      return navigation.push("FlexDirection", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 5) {
      return navigation.push("DirectionLayout", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 6) {
      return navigation.push("JustifyContentBasics", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 7) {
      return navigation.push("AlignItemsLayout", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 8) {
      return navigation.push("AlignSelfLayout", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 9) {
      return navigation.push("AlignContentLayout", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 10) {
      return navigation.push("FlexWrapLayout", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 11) {
      return navigation.push("FlexBasis_Grow_and_Shrink", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 12) {
      return navigation.push("PositionLayout", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 13) {
      return navigation.push("WidthHeightBasics", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 14) {
      return navigation.push("ScreenDimensions", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 15) {
      return navigation.push("PlatformSpecific", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 16) {
      return navigation.push("ViewBoxesWithColorAndText", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 17) {
      return navigation.push("SafeAreaViewScreen", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 18) {
      return navigation.push("CardViewScreen", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 19) {
      return navigation.push("GradientComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else {
      return navigation.push("TextView", {
        title: `${title}`,
        name: `${title}`
      });
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) =>
          <TouchableWithoutFeedback
            onPress={() => goToNextScreen(index, item.title)}
          >
            <Text style={styles.item}>
              ({index + 1}) {item.title}
            </Text>
          </TouchableWithoutFeedback>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
    backgroundColor: getColor("LIGHT_GREEN"),
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color: getColor("BLACK"),
    shadowColor: getColor("BLACK"),
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    borderRadius: 6,
    fontSize: fontSize(14),
    fontFamily: fontFamily.POP_SBOLD
  }
});

export default HomeScreen;
