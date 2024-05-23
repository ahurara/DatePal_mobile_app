import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Result from '../screens/result';
import HomeScreen from '../screens/home';
import { Ionicons } from '@expo/vector-icons'; // assuming you're using Expo's Ionicons, adjust import as needed

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="result"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'result') {
            iconName = 'checkbox-outline'; // Example Ionicons icon name for the "result" tab
          } else if (route.name === 'details') {
            iconName = 'information-circle-outline'; // Example Ionicons icon name for the "details" tab
          }

          // You can return any component here that you want as the tab icon
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#2D1212', // Set active tab color to brown
      }}
    >
      <Tab.Screen name="result" component={Result} />
      <Tab.Screen name="details" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
