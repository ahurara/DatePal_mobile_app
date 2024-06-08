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
//import RecSlider from "../components/recommendationSlider";
import CalorieBox from "../components/caloriesBox";
import NutritionCard from "../components/nutritionCard";
import { nutritionData } from "./nutritionData";
import RecSlider from "../components/recommendationSlider";

export default function Result({route}) {

  const {data} = route.params;
  console.log(data)

  const nutritionMap = {
    fiber: { icon: "leaf-outline", name: "Fiber" },
    carbohydrates: { icon: "flower-outline", name: "Carbs" },
    fats: { icon: "filter-circle-outline", name: "Fat" },
    sugar: { icon: "cube-outline", name: "Sugar" },
    protein: { icon: "flame-outline", name: "Protein" }
  };

  // Dynamically create nutritionData array
  const nutritionsData = Object.keys(data.nutrition_info).map((key) => ({
    icon: <Ionicons name={nutritionMap[key].icon} size={30} />,
    name: nutritionMap[key].name,
    calorie: `${data.nutrition_info[key]}g`
  }));

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
          <Text style={{ fontWeight: "bold", fontSize: 40 }}>{data.name} </Text>
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
        <RecSlider recomendation={data.recommended_for} />
      </View>

      {/* Calories section */}
      <View style={{ marginBottom: 20, paddingHorizontal: 20 }}>
        <CalorieBox calories={data.calories} />
      </View>

      {/* nutrition section */}
      <View style={{ padding: 20,backgroundColor:'#ebedec',marginHorizontal:20 }}>
      
      <FlatList  
    data = {nutritionsData}
    renderItem={({item}) => { return (<NutritionCard key={item.id} {...item}/>)}}
    ItemSeparatorComponent={() => <View style={styles.separator} />} // Add vertical gap
    //if no data found this runs. can be used for error handling if data from api is null
    ListEmptyComponent={<Text>No data found</Text>}
    numColumns={3}
    columnWrapperStyle={styles.columnWrapper} // Add horizontal gap
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
  },
  rightView: {
    width: "auto",
    height: 50,
  },
  columnWrapper: {
    marginBottom: 15, // Adjust the bottom margin for spacing between rows
    gap:25
  },
 
});
