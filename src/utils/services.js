import axios from 'axios'
import { AsyncStorage } from 'react-native';

import Constants from "expo-constants";

const { manifest } = Constants;

// const BASE_URL = `http://${manifest.debuggerHost.split(':').shift()}:4004`;
const BASE_URL = "https://user.api.boengkoes.id"
// const BASE_URL = "http://localhost:4004"


export const request = axios.create({ baseURL: BASE_URL })

request.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
      config.headers.Auth = token
      if(config.url.includes('?')){
        config.url += '&token='+ token
      }else{
        config.url += '?token='+ token
      }

    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)


