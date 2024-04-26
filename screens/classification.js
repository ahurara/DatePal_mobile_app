import * as Permissions from "expo-permissions";
import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet ,Dimensions} from "react-native";
import { Camera } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../components/button";


const Classification = () => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  
  useEffect(() => {
    const getCameraPermission = async () => {
      try {
     
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(status === "granted");
      } catch (error) {
        console.error("Error asking for camera permission:", error);
      }
    };

    getCameraPermission(); // Call the function to request camera permission
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
  const takePicture = async () => {
    if (camera) {
      const photo = await camera.takePictureAsync();
      // Do something with the captured photo, like sending it for classification
      console.log("Photo:", photo);
    }
  };

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const cameraSize = Math.min(windowWidth, windowHeight) * 0.8; // Set camera size to 80% of the minimum dimension


  return (
    <View style={styles.container}>
    <StatusBar style="dark" />

      <Text style={{fontWeight:'bold',fontSize:40}}>DatePal</Text>

      <View style={{ height: cameraSize, width: cameraSize }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.back}
          ref={(ref) => setCamera(ref)}
          ratio="4:3"
          flashMode={Camera.Constants.FlashMode.on}
        />
      </View>

      <View style={{flexDirection:'row',gap:20,alignItems:'center',justifyContent:'center',marginTop:40}}>

      <CustomButton
          title="Retry"
          color="#fff"
          textColor="black"
          onPress={{}}
          style={{ borderWidth: 1, borderColor: "black" }}
        />

        <CustomButton
          title="Continue"
          color="#2D1212"
          textColor="#fff"
          onPress={{}}
        />
      {/* <View style={[styles.buttonContainer,{backgroundColor: "#fff"}]}>
          <Button title='Retry' color="white" onPress={() => navigation.navigate('')} titleStyle={{color:'black'}} />
        </View>
      

        <View style={[styles.buttonContainer,{backgroundColor: "#2D1212"}]}>
          <Button title='Continue' color="#2D1212" onPress={() => navigation.navigate('')} />
        </View> */}
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
      alignItems:'center',

    },
    // camera: {
    //   height:{cameraSize},
    //   width:{cameraSize},
    //   aspectRatio: 9/10, // Set the aspect ratio here as well
      
    // },
    buttonContainer: {
     
      marginTop:20,
      borderRadius: 40,
      paddingHorizontal: 20,
      paddingVertical: 5,
    }
  });

  
export default Classification;
