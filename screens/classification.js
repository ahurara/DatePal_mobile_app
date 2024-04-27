import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet ,Dimensions} from "react-native";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/button";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const Classification = ({ navigation }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [imagePath, setImagePath] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(true);
 
  
  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const { status: cameraPermission } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraPermission === "granted");
  
        const { status: mediaLibraryPermission } = await MediaLibrary.requestPermissionsAsync();
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
    const permanentUri = FileSystem.documentDirectory + 'permanent_photo.jpg';
    
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

      const temporaryUri = FileSystem.documentDirectory + 'photo.jpg';
      await FileSystem.writeAsStringAsync(temporaryUri, photo.base64, {
        encoding: FileSystem.EncodingType.Base64,
      });
      setImagePath(temporaryUri);
      console.log("Image saved at temporary location:", temporaryUri);

      if (!hasMediaLibraryPermission) {
        console.log("No media library permission");
        return;
      }

      // Save image to the device's gallery
      await MediaLibrary.saveToLibraryAsync(temporaryUri);
      console.log("Image saved to gallery");
      navigation.navigate('result');
    } catch (error) {
      console.error("Error taking or saving picture:", error);
    }
  }
};


  
  

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const cameraSize = Math.min(windowWidth, windowHeight) * 0.8; // Set camera size to 80% of the minimum dimension


  return (
    <View style={styles.container}>
    <StatusBar style="dark" />

      <Text style={{fontWeight:'bold',fontSize:40,alignSelf:'center'}}>DatePal</Text>

      <View style={{ height: cameraSize+50, width: cameraSize,alignSelf:'center' }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCamera(ref)}
          ratio="4:3"
          flashMode={Camera.Constants.FlashMode.off}
        />
      </View>

      <View style={{flexDirection:'row',flex:1,alignItems:'flex-start',justifyContent:'space-evenly',marginTop:40}}>
   

   <CustomButton title={"Retry"} color={"white"} textColor={"black"} onPress={() =>  navigation.navigate('result')} />
   <CustomButton title={"Continue"} color={"#2D1212"} textColor={"white"} onPress={takePicture} />


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50, // Add padding to the top to prevent text from starting at the top
      backgroundColor: "#fff",
      gap:80,
      flexDirection:'column',
      justifyContent:'flex-start',
    }
  });

  
export default Classification;
