import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Button, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  const windowHeight = Dimensions.get('window').height;
  const topContainerHeight = windowHeight * 0.6;
  const bottomContainerHeight = windowHeight * 0.4;

  return (
    <View style={{ flex: 1, backgroundColor: '#fffafa' }}>
<StatusBar style="light" />

      <View style={[styles.container, { height: topContainerHeight }]}>
        <Text style={styles.heading}>DatePal</Text>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/homeImg.png')} style={styles.image} />
        </View>
      </View>

      <View style={[styles.bottomContainer, { height: bottomContainerHeight }]}>
        <Text style={{ color: 'black', fontWeight: 'bold', alignSelf: "flex-start", paddingLeft: 30 }}>Bringing Clarity to Your Moments</Text>
        <Text style={{ color: 'black', paddingLeft: 30, alignSelf: 'flex-start', paddingRight: 20 }}>Crystal Clear Moments, Effortless Date Classification – Your Memories, Simplified.</Text>
        <View style={styles.buttonContainer}>
          <Button title='Continue' color="#2D1212" onPress={() => navigation.navigate('classification')} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D1212',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 50,

  },
  heading: {
    color: "white",
    paddingTop: 100,
    fontSize: 40,
    fontWeight: 'bold'
  },
  imageContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1, // Takes remaining vertical space

  },
  image: {
    alignSelf: 'center', // Center the image horizontally

  },
  bottomContainer: {
    backgroundColor: '#fffafa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginVertical: 100,
    marginRight: 20,
    backgroundColor: "#2D1212",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  }
});
