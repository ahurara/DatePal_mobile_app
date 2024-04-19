import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Slick from 'react-native-slick'
import RecSlider from '../components/recommendationSlider';




export default function Result() {
  const windowHeight = Dimensions.get('window').height; 
  const imgHeight = windowHeight * 0.3; 

  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <StatusBar style="auto" />

      <View style={[styles.container, { height: imgHeight }]}>
       
        <View style={styles.imageContainer}>
          <Image source={require('../assets/download1 2.png')} style={styles.image} />
        </View>
      </View>

      <View style={styles.containera}>
      {/* Left View */}
      <View style={styles.leftView}><Text style={{fontWeight:'bold',fontSize:40}}>Ajwa </Text></View>
      {/* Right View */}
      <View style={styles.rightView}><Ionicons name="checkmark-circle-outline" size={40} color="green" /></View>
    </View>


    <View style={{marginBottom:10}}>
      <Text style={{color:'grey',paddingHorizontal:20}}>Recommended</Text>
      
    </View>

    <View style={{height:60}}>
    <RecSlider/>
    </View>

    

    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  
    
  },
 
  imageContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1, // Takes remaining vertical space
    
  },
  image: {
    alignSelf: 'center', // Center the image horizontally
  
  },
  containera: {
    flexDirection: 'row', // Align items horizontally
    justifyContent: 'space-between', // Space items evenly
    paddingHorizontal: 20, // Add padding for better spacing
    alignItems: 'center', // Align items vertically
    marginBottom:20,
  },
  leftView: {
    width: 'auto',
    height: 50,
    //backgroundColor: 'red',
  },
  rightView: {
    width: 'auto',
    height: 50,
    
  },
 
});
