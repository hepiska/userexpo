import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login'
import HomeScreen from './home'
import { connect } from 'react-redux'
import UserList from './userList'



const Stack = createStackNavigator();

function Screens(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home"   options={{ headerShown: false }} component={HomeScreen} />
        {!props.isAuth && ( <Stack.Screen name="Login"  options={{ headerShown: false }} component={LoginScreen} />
)}
        <Stack.Screen name="UserList"  options={{ headerShown: false }} component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) =>{
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps) (Screens);