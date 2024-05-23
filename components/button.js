import React from 'react';
import { StyleSheet,  Text,  TouchableOpacity, Pressable } from 'react-native';

export default function CustomButton({ title, color,textColor, onPress }) {

  return (
    <Pressable style={[styles.retryButton,{ backgroundColor: color}]} onPress={onPress}>
        <Text style={[styles.buttonText,{color:textColor}]}>{title}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({

  buttonText: {
    fontWeight: 'bold',
  },
  retryButton: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '42%',
    alignItems: 'center',
  },
});