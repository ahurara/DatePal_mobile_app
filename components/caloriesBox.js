import React from 'react';
import { StyleSheet, View ,Text, Dimensions} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const containerWidth = screenWidth * 0.5; // Adjust the percentage as needed

export default function CalorieBox({calories}) {
  return (
    <View style={[styles.container, { backgroundColor: "yellow" }]}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>{calories}g</Text>
    </View>
    <View style={styles.numberContainer}>
      <Text style={styles.number}>Calories</Text>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        width: containerWidth,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
      },
      textContainer: {
        flex: 1,
        marginRight: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor:'white',
        padding: 5,
        alignItems:'center'
      },
      text: {
        fontSize: 16,
        fontWeight:'bold'
      },
      numberContainer: {
        
        padding: 5,
        backgroundColor: 'yellow',
      },
      number: {
        fontSize: 16,
        fontWeight:"bold",        
      },
    });
    
  
