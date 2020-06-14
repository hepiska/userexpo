import React, { useState, useEffect } from 'react';
import { View , StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Input, Block, Text , Button } from 'galio-framework';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {register, login} from '../modules/auth/action'


const styles = StyleSheet.create({
  item:{borderColor: 'white', marginVertical:8}
})

function LoginScreen(props) {
  
  const [submited, setSubmited] = useState(false)
  const [data, setData] = useState({})

  const {type = 'register'} = props.route.params || {}
  useEffect(() => {
    if(submited &&!props.loading ){
      props.navigation.replace('UserList')

    }

  },[submited, props.loading])

  const onChange  = (name)=> (e) => {
      const newData = {...data}
      newData[name] = e
      setData(newData)
  }

  const title = type === 'login' ? 'Login' : 'Register'
  const _onSubmit = () => {
      if(type === 'login'){
        props.login(data)
      }
      else {
        props.register(data)
      }
      setSubmited(true)
  }

  

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <LinearGradient   
        start={{x: 0.0, y: 0.25}} 
        end={{x: 1, y: 1.0}}
        style={{...StyleSheet.absoluteFillObject}} 
        colors={['#02b1e8', '#00d4ff', '#baedf7']}
      />
      <View style={{marginBottom: 24, alignItems: 'center'}}>
        <Text h1 color="rgb(40,40,40)" bold>{title}</Text>
      </View>
      <View style={{marginHorizontal: 16}}>
          <Input label="Email" value={data.email} onChangeText={onChange('email')} placeholder="user@mail.com" style={styles.item} />
          <Input label="Password"  value={data.password} onChangeText={onChange('password')} placeholder="Password" style={styles.item} />
          {type === 'register' && (
          <>    
          <Input label="Name"  value={data.name}  onChangeText={onChange('name')}  placeholder="Name"  style={styles.item}  />
          <Input label="Address"  value={data.address}  onChangeText={onChange('address')}  placeholder="Address"  style={styles.item}  /></>)}
          <Button onPress={_onSubmit} color="#50C7C7" disabled={props.loading} style={styles.item} >{props.loading ? 'loading...': title }</Button>
      </View>
    </View>
  );
}

const mapStateToProps = (state) =>{
  return {
    loading: state.auth.loading
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({register, login}, dispatch)


export default connect(mapStateToProps,mapDispatchToProps) (LoginScreen);