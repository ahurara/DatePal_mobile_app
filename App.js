import { registerRootComponent } from 'expo';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home";
import Result from "./screens/result";
import Classification from "./screens/classification";
import MyTabs from './components/tab';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="home" component={HomeScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="result" component={Result}  options={{ headerShown: true }} />
        <Stack.Screen name="classification" component={Classification}   options={{
            headerShown:false
          }}
           />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
registerRootComponent(App); 