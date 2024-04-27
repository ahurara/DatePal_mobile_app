import React from 'react';
import { StyleSheet,  Text,  TouchableOpacity } from 'react-native';

export default function CustomButton({ title, color,textColor, onPress }) {

  return (
    <TouchableOpacity style={[styles.retryButton,{ backgroundColor: color}]} onPress={onPress}>
        <Text style={[styles.buttonText,{color:textColor}]}>{title}</Text>
      </TouchableOpacity>
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