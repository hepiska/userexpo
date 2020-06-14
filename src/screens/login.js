import * as React from 'react';
import { View, Text , StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gradient from 'react-native-linear-gradient'

function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Gradient style={{...StyleSheet.absoluteFillObject}} colors={['#4c669f', '#3b5998', '#192f6a']}></Gradient>
      <Text>Login Screen</Text>
    </View>
  );
}



export default LoginScreen;