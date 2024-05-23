import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RecSlider from "../components/recommendationSlider";
import CalorieBox from "../components/caloriesBox";
import NutritionCard from "../components/nutritionCard";
import { nutritionData } from "./nutritionData";

export default function Result() {
  const windowHeight = Dimensions.get("window").height;
  const imgHeight = windowHeight * 0.3;

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />

      <View style={[styles.container, { height: imgHeight }]}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/download1 2.png")}
            style={styles.image}
          />
        </View>
      </View>

      <View style={styles.containera}>
        {/* Left View */}
        <View style={styles.leftView}>
          <Text style={{ fontWeight: "bold", fontSize: 40 }}>Ajwa </Text>
        </View>
        {/* Right View */}
        <View style={styles.rightView}>
          <Ionicons name="checkmark-circle-outline" size={40} color="green" />
        </View>
      </View>

      <View style={{ marginBottom: 10 }}>
        <Text style={{ color: "grey", paddingHorizontal: 20 }}>
          Recommended
        </Text>
      </View>

      {/* slider for the recommendations */}
      <View style={{ marginBottom: 20 }}>
        {/* <RecSlider /> */}
      </View>

      {/* Calories section */}
      <View style={{ marginBottom: 20, paddingHorizontal: 20 }}>
        <CalorieBox calories={199} />
      </View>

      {/* nutrition section */}
      <View style={{ padding: 20,backgroundColor:'#ebedec',marginHorizontal:20 }}>
      
      <FlatList  
    data = {nutritionData}
    renderItem={({item}) => { return (<NutritionCard key={item.id} {...item}/>)}}
    // for horizontal rendering
   // horizontal
    //if no data found this runs. can be used for error handling if data from api is null
    ListEmptyComponent={<Text>No data found</Text>}
    contentContainerStyle={styles.flatListContent}
    //numColumns={1}
 >
    </FlatList>

      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  imageContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1, // Takes remaining vertical space
  },
  image: {
    alignSelf: "center", // Center the image horizontally
  },
  containera: {
    flexDirection: "row", // Align items horizontally
    justifyContent: "space-between", // Space items evenly
    paddingHorizontal: 20, // Add padding for better spacing
    alignItems: "center", // Align items vertically
    marginBottom: 20,
  },
  leftView: {
    width: "auto",
    height: 50,
    //backgroundColor: 'red',
  },
  rightView: {
    width: "auto",
    height: 50,
  },
  flatListContent: {
    alignItems: "flex-start", // Align items to the start of the container
    flexDirection: "row", // Items are rendered in a row
     flexWrap: "wrap", // Allow items to wrap to the next line
    columnGap:15,
    rowGap:25,
  },
});
