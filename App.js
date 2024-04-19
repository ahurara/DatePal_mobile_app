import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from './screens/home';
import Result from './screens/result';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='home'
        screenOptions={{ headerShown: false }}>

    <Stack.Screen name='home' component={HomeScreen} />
    <Stack.Screen name='result' component={Result} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

