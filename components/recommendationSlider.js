import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Slick from "react-native-slick";

export default function RecSlider() {
  return (
    <Slick
      style={styles.wrapper}
      showsButtons
      slidesToShow={3}
      showsPagination={false}
      loop={false}
      prevButton={<Text style={{ color: "black", fontSize: 40 }}>‹</Text>}
      nextButton={<Text style={{ color: "black", fontSize: 40 }}>›</Text>}
    >
      <View testID="Hello" style={styles.slide}>
        <Text style={styles.text}>Hello Slick</Text>
      </View>
      <View testID="Beautiful" style={styles.slide}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View testID="Simple" style={styles.slide}>
        <Text style={styles.text}>And simple</Text>
      </View>
      {/* Add more views here for additional slides */}
    </Slick>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height:"auto",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});
