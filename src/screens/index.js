import * as React from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login'
import HomeScreen from './home'
import UserList from './userList'



const Stack = createStackNavigator();

function Screens() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="UserList"  options={{ headerShown: false }} component={UserList} />
      <Stack.Screen name="Home"   options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Login"  options={{ headerShown: false }} component={LoginScreen} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screens;