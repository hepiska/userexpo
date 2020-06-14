import { API } from '../action-types'
import {user} from '../normalize-schema'
import {AsyncStorage} from 'react-native';

export const actionType = {
  SET_AUTH: 'auth/SET_AUTH',
  REMOVE_AUTH: 'auth/SET_CART_ORDER',
  SET_LOADING: 'auth/SET_LOADING',
  SET_ERROR: 'auth/SET_ERROR',
  SET_ME: 'auth/SET_ME',
}


const setAuth = (data) => {
  AsyncStorage.setItem("token", data)
  return {type: actionType.SET_AUTH, payload: data}
}


const setLoading = (data) => {
  return {type: actionType.SET_LOADING, payload: data}
}


const removeAuth = () => {
  return {type: actionType.REMOVE_AUTH, payload: data}
}



const setError = (error) => {
  return {type: actionType.REMOVE_AUTH, payload: error}
}

const setMe = (data) => {
  return {type: actionType.SET_ME, payload: data}
}


export const register = (data) => {
  return {
    type: API,
    payload:{
      url: '/signup',
      requestParams: {
        method: 'POST',
        data,
      },   
      startNetwork: () => {
        return setLoading(true)
      }, 
      endNetwork: () => {
        return setLoading(false)
      }, 
      success:(data, res) => {
          return [setAuth(res.token)]
      }
    }
   }
}

export const login = (data) => {
  return {
    type: API,
    payload:{
      url: '/login',
      requestParams: {
        method: 'POST',
        data,
      },   
      startNetwork: () => {
        return setLoading(true)
      }, 
      endNetwork: () => {
        return setLoading(false)
      }, 
      success:(data, res) => {
          return [setAuth(res.token)]
      }
    }
   }
}