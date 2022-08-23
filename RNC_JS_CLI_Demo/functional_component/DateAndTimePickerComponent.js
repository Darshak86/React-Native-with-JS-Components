import { StyleSheet, Text, View, Button, Platform } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

const DateAndTimePickerComponent = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours :" + tempDate.getHours() + " | Minutes :" + tempDate.getMinutes();
    setText(fDate + " \n" + fTime);
    console.log(fDate + "(" + fTime + ")");
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {text}
      </Text>
      <View style={styles.BaseView}>
        <Button title="Date Picker" onPress={() => showMode("date")} />
      </View>
      <View style={styles.BaseView}>
        <Button title="Time Picker" onPress={() => showMode("time")} />
      </View>
      {show &&
        <DateTimePicker
          testId="dateTimepicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display={"default"}
          onChange={onChange}
        />}
    </View>
  );
};

export default DateAndTimePickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    margin: 24,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#344953"
  },
  BaseView: {
    marginTop: 20
  }
});
