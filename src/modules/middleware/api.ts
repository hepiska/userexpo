import { normalize } from 'normalizr'
import { request } from '../../utils/services'
import { Alert } from 'react-native'
import { AsyncStorage } from 'react-native'

import * as actions from '../action-types'




const api = ({ dispatch, getState }) => next => async (action) => {
  if (action.type !== actions.API) {
    return next(action)
  }
  const token = await AsyncStorage.getItem("token")

  const {
    url,
    requestParams,
    success,
    schema,
    label,
    error,
    startNetwork,
    endNetwork,
  } = action.payload

  if (startNetwork) {
    dispatch(startNetwork(label))
  }

  return request
    .request({ url,headers:{Authorization: token}, ...requestParams, })
    .then(res => {
      let normalizeData = res.data.data
      if (schema && normalizeData) {
        normalizeData = normalize(res.data.data, schema)
      }

      if (success) {
        dispatch(success(normalizeData, res.data))
      }

      if (endNetwork) {
        dispatch(endNetwork('success'))
      }
    })
    .catch(err => {
      if (error) {
        dispatch(error(err))
      } else {
        Alert.alert('Error', err.message)
       
      }
      if (endNetwork) {
        dispatch(endNetwork('error', err))
      }
    })
}

export default api
