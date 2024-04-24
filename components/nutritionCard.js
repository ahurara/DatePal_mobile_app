import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NutritionCard({icon, name, calorie}) {
  return (
    <View style={styles.container}>
      
      <View style={{ flexDirection: "row", gap: 5 }}>
        <View style={styles.iconContainer}>
          {icon}
        </View>

        <View style={{ flexDirection: "column", justifyContent: "center" }}>
          <View>
            <Text>{name}</Text>
          </View>
          <View>
            <Text>{calorie}</Text>
          </View>
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    gap: 10,
    
  },
  iconContainer: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 40,
    padding: 5,
    
  },
});
