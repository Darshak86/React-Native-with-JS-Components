import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

// https://www.npmjs.com/package/react-native-popup-dialog
// npm install --save react-native-popup-dialog
// # OR
// yarn add react-native-popup-dialog

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";

const PopupDialogComponent = ({ route, navigation }) => {
  const { title } = route.params;
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native : {title}
        </Text>
        <View style={styles.container}>
          <Button
            title="Default Animation Dialog"
            onPress={() => {
              setDefaultAnimationDialog(true);
            }}
          />

          <Button
            title="Scale Animation Dialog"
            onPress={() => {
              setScaleAnimationDialog(true);
            }}
          />

          <Button
            title="Slide Animation Dialog"
            onPress={() => {
              setSlideAnimationDialog(true);
            }}
          />
        </View>

        <Dialog
          onDismiss={() => {
            setDefaultAnimationDialog(false);
          }}
          width={0.9}
          visible={defaultAnimationDialog}
          rounded
          actionsBordered
          dialogTitle={
            <DialogTitle
              title="Default Animation Dialog Simple"
              style={{ backgroundColor: "#F7F7F8" }}
              hasTitleBar={false}
              align="left"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  setDefaultAnimationDialog(false);
                }}
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  setDefaultAnimationDialog(false);
                }}
                key="button-2"
              />
            </DialogFooter>
          }
        >
          <DialogContent style={{ backgroundColor: "#F7F7F8" }}>
            <Text style={{ color: "black" }}>Here is an example of default animation dialog</Text>
          </DialogContent>
        </Dialog>

        <Dialog
          onTouchOutside={() => {
            setScaleAnimationDialog(false);
          }}
          width={0.9}
          visible={scaleAnimationDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            console.log("onHardwareBackPress");
            setScaleAnimationDialog(false);
            return true;
          }}
          dialogTitle={
            <DialogTitle
              title="Scale Animation Dialog Sample"
              hasTitleBar={false}
            />
          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setScaleAnimationDialog(false);
              }}
              key="button-1"
            />
          ]}
        >
          <DialogContent>
            <View>
              <Text style={{ color: "black" }}>
                Here is an example of scale animation dialog. Close using back
                button press
              </Text>
              <Button
                title="Close"
                onPress={() => {
                  setScaleAnimationDialog(false);
                }}
                key="button-1"
              />
            </View>
          </DialogContent>
        </Dialog>

        <Dialog
          onDismiss={() => {
            setSlideAnimationDialog(false);
          }}
          onTouchOutside={() => {
            setSlideAnimationDialog(false);
          }}
          visible={slideAnimationDialog}
          dialogTitle={<DialogTitle title="Slide Animation Dialog Sample" />}
          dialogAnimation={new SlideAnimation({ slideFrom: "bottom" })}
        >
          <DialogContent>
            <Text style={{ color: "black" }}>
              Here is an example of slide animation dialog. Please click outside
              to close the the dialog.
            </Text>
          </DialogContent>
        </Dialog>
      </View>
    </SafeAreaView>
  );
};

export default PopupDialogComponent;

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
