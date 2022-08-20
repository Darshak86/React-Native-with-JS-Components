import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import React, { useCallback, useState } from "react";
import getColor from "../config/colors";

const TextView = () => {
  const [textShown, setTextShown] = useState(false);
  const [lengthMore, setLengthMore] = useState(false);

  const toggleNumberOfLines = () => {
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 3);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{ color: getColor("BLACK") }}>Default Text </Text>
        <Text style={styles.default_text}>italic Text</Text>
        <Text style={styles.text_bold}>Bold Text</Text>
        <Text style={styles.text_small}>Small Text</Text>
        <Text style={styles.text_large}>Large Text</Text>
        <Text style={styles.text_color1}>Text Color</Text>
        <Text style={styles.text_line2}>Line through Color</Text>
        <Text style={styles.text_underline2}>underline Color</Text>
        <Text style={styles.text_under_line_2}>underline line-through</Text>
        {/*View to wrap multiple text*/}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 16
          }}
        >
          {/*View to wrap multiple text*/}
          <Text
            style={{ fontSize: 20, lineHeight: 30, color: getColor("BLACK") }}
          >
            Superscript : 10
          </Text>
          {/*Superscript ================================================== */}
          <Text
            style={{ fontSize: 15, lineHeight: 18, color: getColor("RED") }}
          >
            am
          </Text>
          <Text
            style={{ fontSize: 20, lineHeight: 30, color: getColor("BLACK") }}
          >
            {" "} Example
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 16
          }}
        >
          {/*View to wrap multiple text*/}
          <Text
            style={{ fontSize: 20, lineHeight: 30, color: getColor("BLACK") }}
          >
            Subscript : 10
          </Text>
          {/*Subscript ================================================== */}
          <Text
            style={{ fontSize: 15, lineHeight: 37, color: getColor("RED") }}
          >
            am
          </Text>
          <Text
            style={{ fontSize: 20, lineHeight: 30, color: getColor("BLACK") }}
          >
            {" "}Example
          </Text>
        </View>
        {/*More /Less Text Options ================================================== */}
        {/*option -> selectable : used for selectable text*/}
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={textShown ? undefined : 3}
          style={styles.textStyle}
        >
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        </Text>

        {lengthMore
          ? <Text onPress={toggleNumberOfLines} style={styles.readMoreStyle}>
              {textShown ? "Read Less" : "Read More"}
            </Text>
          : null}

        <Text style={{ color: getColor("BLACK"), marginTop: 16 }}>
          By signing up, you agree to
          <Text
            onPress={() => Alert.alert("Terms and Conditions Clicked...!!")}
            style={{ fontWeight: "bold", color: getColor("T_BLUE") }}
          >
            {" "}Terms and Conditions{" "}
          </Text>
          <Text style={{ color: getColor("BLACK") }}>and</Text>
          <Text
            onPress={() => Alert.alert("Privacy Policy Clicked...!!")}
            style={{ fontWeight: "bold", color: getColor("T_BLUE") }}
          >
            {" "}Privacy Policy{" "}
          </Text>.
        </Text>
      </ScrollView>
    </View>
  );
};

export default TextView;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    padding: 10,
    flex: 1,
    justifyContent: "space-around"
  },
  default_text: {
    fontStyle: "italic",
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_bold: {
    fontWeight: "bold",
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_small: {
    fontSize: 10,
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_large: {
    fontSize: 25,
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_color1: {
    color: "red",
    marginTop: 16
  },
  text_color2: {
    color: "green",
    marginTop: 16
  },
  text_line1: {
    textDecorationLine: "line-through",
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_line2: {
    textDecorationLine: "line-through",
    color: "blue",
    marginTop: 16
  },
  text_underline1: {
    textDecorationLine: "underline",
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_underline2: {
    textDecorationLine: "underline",
    color: "green",
    marginTop: 16
  },
  text_under_line_1: {
    textDecorationLine: "underline line-through",
    marginTop: 16,
    color: getColor("BLACK")
  },
  text_under_line_2: {
    textDecorationLine: "underline line-through",
    color: "red",
    marginTop: 16
  },
  textStyle: {
    color: getColor("BLACK")
  },
  readMoreStyle: {
    fontWeight: "bold",
    color: getColor("T_BLUE")
  }
});
