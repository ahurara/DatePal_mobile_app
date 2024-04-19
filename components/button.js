import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function CustomButton({ title, color, onPress }) {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} color={color} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    alignSelf: 'flex-end',
    marginVertical: 100,
    marginRight: 20,
    backgroundColor: {color},
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  }
});