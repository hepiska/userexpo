import { API } from '../action-types'
import {user} from '../normalize-schema'
import {AsyncStorage} from 'react-native';

export const actionType = {
  SET_DATA: 'user/SET_DATA',
  SET_ORDER: 'user/SET_ORDER',
  ADD_ORDER: 'user/ADD_ORDER',
  REMOVE_AUTH: 'user/SET_REMOVE_AUTH',
  SET_LOADING: 'user/SET_LOADING',
  SET_ERROR: 'user/SET_ERROR',
}





const setLoading = (data) => {
  return {type: actionType.SET_LOADING, payload: data}
}

const setOrder = (data) => {
  return {type: actionType.SET_ORDER, payload: data}
}


const addOrder = (data) => {
  return {type: actionType.ADD_ORDER, payload: data}
}



const setData = (data) => {
  return {type: actionType.SET_DATA, payload: data}
}



const removeAuth = () => {
  return {type: actionType.REMOVE_AUTH, payload: data}
}



const setError = (error) => {
  return {type: actionType.REMOVE_AUTH, payload: error}
}



export const getusers = (params) => {
  let skip = params.skip
  return {
    type: API,
    payload:{
      schema: [user],
      url: '/users',
      requestParams: {
        params,
      },   
      startNetwork: () => {
        return setLoading(true)
      }, 
      endNetwork: () => {
        return setLoading(false)
      }, 
      
      success:(data, res) => {
        if(data.result.length ===0){
          return setLoading(false)
        }

        if(skip === 0){
          return [setData(data.entities.user), setOrder(data.result)]
        }else{
          return [setData(data.entities.user), addOrder(data.result)]
        }
        
      }
    }
   }
}