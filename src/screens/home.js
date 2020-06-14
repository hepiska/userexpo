import * as React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'galio-framework';
import Outlinebutton from '../components/atom/outlinebutton'

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center'
  },
  button: {marginHorizontal: 16, marginVertical:16}
})



function HomeScreen({navigation}) {
  const onPress = (type)=> () => {
    navigation.navigate('Login', {type})
  }
  return (
    <ImageBackground source={require("../images/image-bg.jpg")} style={styles.container}>
      <Outlinebutton onPress={onPress('login')} color="white" style={styles.button} name="Login" />
      <Outlinebutton onPress={onPress('register')} color="#faf393" style={styles.button} name="Register"/>

    </ImageBackground>
  );
}

export default HomeScreen