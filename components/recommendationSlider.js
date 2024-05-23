// import React from "react";
// import { StyleSheet, Text, View, Dimensions } from "react-native";
// import Carousel from 'react-native-snap-carousel';

// export default function RecSlider() {

//   const screenWidth = Dimensions.get('window').width;

//   const data = [
//     {  recomendation: 'This is slide 1' },
//     {  recomendation: 'This is slide 2' },
//     {  recomendation: 'This is slide 3' },
//   ];

//   const renderItem = ({ item }) => (
//     <View style={styles.slide}>
//       <Text style={styles.recomendation}>{item.recomendation}</Text>
//     </View>
//   );

//   return (
   
//     <View style={styles.container}>
//       <Carousel
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth * 0.4}
//         layout={'default'}
//         firstItem={1} // Start from the leftmost item
       
//       />
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//     paddingHorizontal:2,
//   },
//   slide: {
//     backgroundColor: '#ebedec',
//     borderRadius: 5,
//     padding: 4, 
//     alignItems: 'center',
//     justifyContent: 'center',
//     width:'auto'
//   },
 
//   recomendation: {
//     fontSize: 16,
//   },
// });
