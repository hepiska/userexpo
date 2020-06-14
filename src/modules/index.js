import { combineReducers, Reducer } from 'redux'
import AuthReducer from './auth/reducer'
import user from './users/reducer'



const combinedReducer = combineReducers({
  auth: AuthReducer,
  user
})


export default combinedReducer