import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'galio-framework';
import { connect } from 'react-redux'
import Outlinebutton from '../components/atom/outlinebutton'

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center'
  },
  button: {marginHorizontal: 16, marginVertical:16}
})



function HomeScreen({navigation, isAuth}) {
  console.log("isAuth", isAuth)
  const onPress = (type)=> () => {
    navigation.navigate('Login', {type})
  }
  return (
    <ImageBackground source={require("../images/image-bg.jpg")} style={styles.container}>
      {isAuth ? (    
      <Outlinebutton onPress={ () => navigation.navigate('UserList')} color="white" style={styles.button} name="User List" />
      ) : (<> 
            <Outlinebutton onPress={onPress('login')} color="white" style={styles.button} name="Login" />
            <Outlinebutton onPress={onPress('register')} color="#faf393" style={styles.button} name="Register"/>
      </>)}


    </ImageBackground>
  );
}

const mapStateToProps = (state) =>{
  return {
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps) (HomeScreen)