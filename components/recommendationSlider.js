import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

export default function RecSlider({recomendation}) {

  const screenWidth = Dimensions.get('window').width;

  const data = recomendation.map((item, index) => ({ id: index, recommendation: item }));

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.recomendation}>{item.recommendation}</Text>
    </View>
  );

  return (
   
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.5}
        layout={'default'}
        firstItem={1} // Start from the leftmost item
        
       
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal:2,
  },
  slide: {
    backgroundColor: '#ebedec',
    borderRadius: 5,
    padding: 4, 
    alignItems: 'center',
    justifyContent: 'center',
    width:'auto'
  },
 
  recomendation: {
    fontSize: 16,
  },
});