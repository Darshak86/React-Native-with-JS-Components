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
    } else if (id == 20) {
      return navigation.push("TextView", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 21) {
      return navigation.push("AccessibilityInfoDemo", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 22) {
      return navigation.push("TextInputComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 23) {
      return navigation.push("KeyboardAvoidingComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 24) {
      return navigation.push("KeyboardComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 25) {
      return navigation.push("ButtonComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 26) {
      return navigation.push("CheckBoxComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 27) {
      return navigation.push("RadioButtonComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 28) {
      return navigation.push("TouchableOpacityComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 29) {
      return navigation.push("TouchableHighlightComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 30) {
      return navigation.push("TouchableWithoutFeedbackComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 31) {
      return navigation.push("PressableComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 32) {
      return navigation.push("TimerComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 33) {
      return navigation.push("SwitchComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 34) {
      return navigation.push("DisplayAnImage", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 35) {
      return navigation.push("ImageBackgroundComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 36) {
      return navigation.push("CustomIconComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 37) {
      return navigation.push("PickerComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 38) {
      return navigation.push("DateAndTimePickerComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 39) {
      return navigation.push("GetCurrentDateTime", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 40) {
      return navigation.push("SliderComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 41) {
      return navigation.push("WebViewComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 42) {
      return navigation.push("AlertComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 43) {
      return navigation.push("ToastAndroidComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 44) {
      return navigation.push("ShareComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 45) {
      return navigation.push("ImageSliderComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 46) {
      return navigation.push("CarouselImageSliderComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 47) {
      return navigation.push("SwiperComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 48) {
      return navigation.push("BottomSheetComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 49) {
      return navigation.push("ModalComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 50) {
      return navigation.push("ContextMenuComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 51) {
      return navigation.push("PopupDialogComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else if (id == 52) {
      return navigation.push("ImagePickerComponent", {
        title: `${title}`,
        name: `${title}`
      });
    } else {
      return navigation.push("DefaultScreen", {
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
