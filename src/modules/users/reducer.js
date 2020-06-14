import { AnyAction, Reducer } from 'redux'
import Immutable from 'seamless-immutable'
import {actionType} from './action'



const initialState = {
  data:Immutable({}),
  order: Immutable([]),
  error: null,
  loading: false,
}

const reducer = (state = initialState, action) => {
  const  newState = {...state}
  switch (action.type) {
    case actionType.SET_DATA:
      newState.data = Immutable.merge(state.data,action.payload) 
      newState.isAuth = true
     return newState
    case actionType.SET_ORDER:
      newState.order = Immutable(action.payload) 
     return newState
    case actionType.ADD_ORDER:
      newState.order = newState.order.concat(Immutable(action.payload)) 
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