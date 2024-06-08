import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { Camera, CameraView } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/button";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import Toast from 'react-native-toast-message';


const Classification = ({ navigation }) => {
  // var ws;
  // // let data = '';
  // function connectWebSocket() {
  //     // ws = new WebSocket("ws://192.168.43.61:8000/ws/dates_image/");
  //     ws = new WebSocket("ws://3.80.24.240:8001/ws/dates_image/");
  //     ws.onopen = function(event) {
  //         console.log("WebSocket connection opened.");
  //     };

  //     ws.onmessage = function(event) {
  //         console.log("Received message from server:", event.data);
  //         var data = JSON.parse(event.data);
  //         if (data && data.name) {
  //           //yaha se aap ne navigate krna hay
  //             console.log("Record details:", data);
  //             navigation.navigate("result",{data});
  //         } else {
  //             console.log("No record found.");
  //         }
  //     };

  //     ws.onclose = function(event) {
  //         console.log("WebSocket connection closed.");
  //     };
  // };

  const sendImage = async (base64Image) => {
    try {
      if (ws.readyState === WebSocket.OPEN) {
        // Send the base64 image data to the WebSocket server
        ws.send(base64Image);
        console.log("Image sent to WebSocket server");
      } else {
        console.log("WebSocket connection not open");
      }
    } catch (error) {
      console.error("Error sending image to WebSocket server:", error);
    }
  };

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] =
    useState(true);

  useEffect(() => {
    //  connectWebSocket();
    const requestPermissions = async () => {
      try {
        const { status: cameraPermission } =
          await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraPermission === "granted");
        console.log("Camera permission granted:", cameraPermission);
        const { status: mediaLibraryPermission } =
          await MediaLibrary.requestPermissionsAsync();
        setHasMediaLibraryPermission(mediaLibraryPermission === "granted");
      } catch (error) {
        console.error("Error asking for permissions:", error);
      }
    };

    requestPermissions();
  }, []);

  if (hasCameraPermission === null) {
    return (
      <View>
        <Text>Requesting camera permission...</Text>
      </View>
    );
  }
  if (hasCameraPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
      </View>
    );
  }

  // Function to make a permanent copy of the image
  const makePermanentCopy = async (temporaryUri) => {
    try {
      // Generate a new permanent file path
      const permanentUri = FileSystem.documentDirectory + "permanent_photo.jpg";

      // Copy the image from the temporary location to the permanent location
      await FileSystem.copyAsync({
        from: temporaryUri,
        to: permanentUri,
      });

      console.log("Permanent copy of the image created at:", permanentUri);

      return permanentUri; // Return the permanent file path
    } catch (error) {
      console.error("Error making permanent copy of the image:", error);
      return null;
    }
  };

  const takePicture = async () => {
    if (!hasCameraPermission) {
      console.log("No camera permission");
      return;
    }

    if (camera) {
      try {
        const photo = await camera.takePictureAsync({
          quality: 0.5,
          base64: true,
        });

        sendImage(photo.base64);

        const temporaryUri = FileSystem.documentDirectory + "photo.jpg";
        await FileSystem.writeAsStringAsync(temporaryUri, photo.base64, {
          encoding: FileSystem.EncodingType.Base64,
        });
        setImagePath(temporaryUri);
        console.log("Image saved at temporary location:", temporaryUri);

        Toast.show({
          type: data ? "success" : 'error',
          text1: data ?"Date classified. Loading results..." :'Date not found. Try again.',
          position: "bottom",
          bottomOffset: 150, // Adjust this value to move the toast slightly above the bottom
        });

        if (data){
          setTimeout(() => {
            navigation.navigate("Result", { data });
          }, 3000);
        }

        

        if (!hasMediaLibraryPermission) {
          console.log("No media library permission");
          return;
        }

        // Save image to the device's gallery
        await MediaLibrary.saveToLibraryAsync(temporaryUri);
        console.log("Image saved to gallery");
      } catch (error) {
        console.error("Error taking or saving picture:", error);
      }
    }
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const cameraSize = Math.min(windowWidth, windowHeight) * 0.8; // Set camera size to 80% of the minimum dimension

  const data = {
    _id: {
      $oid: "662c0ad5bcb34a024b3caced",
    },
    name: "Ajwa",
    calories: 27,
    recommended_for: [
      "Energy booster",
      "Natural sweetener",
      "Dietary fiber source",
    ],
    nutrition_info: {
      fats: 0,
      fiber: 0.3,
      carbohydrates: 6.5,
      sugar: 5.5,
      protein: 0.3,
    },
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={{ fontWeight: "bold", fontSize: 40, alignSelf: "center" }}>
        DatePal
      </Text>

      {hasCameraPermission ? (
        <View
          style={{
            height: cameraSize + 50,
            width: cameraSize,
            alignSelf: "center",
          }}
        >
          <CameraView
            style={{ flex: 1 }}
            ref={(ref) => {
              if (ref) {
                setCamera(ref); // Set camera ref when available
                console.log("Camera ready");
              } else {
                console.log("Camera ref is null"); // Log when camera ref is null
              }
            }}
            type={CameraType.back}
            ratio="4:3"
          />
        </View>
      ) : (
        <Text style={{ alignSelf: "center", marginTop: 20 }}>
          Waiting for camera to be ready...
        </Text>
      )}

      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          marginTop: 40,
        }}
      >
      <Toast ref={(ref) => Toast.setRef(ref)} />
        <CustomButton
          title={"Retry"}
          color={"white"}
          textColor={"black"}
          onPress={() => {
            navigation.navigate("result");
          }}
        />
        <CustomButton
          title={"Continue"}
          color={"#2D1212"}
          textColor={"white"}
          onPress={takePicture}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Add padding to the top to prevent text from starting at the top
    backgroundColor: "#fff",
    gap: 80,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default Classification;
