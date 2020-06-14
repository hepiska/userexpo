import  React, {useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Screen from './screens'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import apiMidleware from './modules/middleware/api'
import multidipacerMidleware from './modules/middleware/multi'
import rootReducer from './modules'


const middleware = [
  reduxThunk,
  multidipacerMidleware,
  apiMidleware,
]

const enhancers = []
const initialState ={}

let composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const initialStore = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
)

export default function App() {
  const [isloading, setLoading] = useState(true)
  const [store, setStore] = useState(initialStore)

  const generateStore = async () => {
    try {
      const initialAuth = { isAuth: false }
      const token = await AsyncStorage.getItem('token')
      if (token) {
        initialAuth.token = token
        initialAuth.isAuth = true
      }
      const newStore = createStore(rootReducer, { auth: initialAuth }, composedEnhancers)
      setStore(newStore)
      setLoading(false)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    generateStore()
  },[])
  
  return isloading ? null :(
    <Provider store={store}>
      <Screen />
    </Provider>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
