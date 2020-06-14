import { AnyAction, Reducer } from 'redux'
import Immutable from 'seamless-immutable'
import {actionType} from './action'



const initialState = {
  token:null,
  isAuth: false,
  me:null,
  error: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  const  newState = {...state}
  switch (action.type) {
    case actionType.SET_AUTH:
      newState.token = action.payload
      newState.isAuth = true
     return newState
  
  case actionType.REMOVE_AUTH:
      newState.token = null
      newState.isAuth = false
     return newState
  case actionType.SET_LOADING:
      newState.loading = action.payload
     return newState
  case actionType.SET_ERROR:
      newState.loading = action.payload
     return newState
 case actionType.SET_ME:
      newState.me = action.payload
     return newState
    default:
      return newState
  }
}

export default reducer