import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function CustomButton({ title, color,textColor, onPress }) {
  return (
    <View style={[styles.buttonContainer, { backgroundColor: color }]}>
      <Button title={title} color={color} onPress={onPress} titleStyle={{color:textColor}} />
    </View>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    marginVertical: 0,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  }
});