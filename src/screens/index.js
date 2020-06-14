import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login'
import HomeScreen from './home'



const Stack = createStackNavigator();

function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator options={{initialPage: "Home"}} op>
        <Stack.Screen name="Home"   options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;