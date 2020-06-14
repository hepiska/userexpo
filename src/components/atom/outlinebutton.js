import * as React from 'react';
import { View, Text, ImageBackground, TouchableOpacity,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8, borderWidth: 4, padding: 16, justifyContent: 'center' , alignItems: 'center'
  }
  ,font:{
    fontSize:28,
  }
})


const Outlinebutton =({onPress , style, color, name}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.wrapper, ...style, borderColor:color,}}>
    <Text style={{...styles.font,color:color}}>{name}</Text>
  </TouchableOpacity>
  )
}

export default Outlinebutton
