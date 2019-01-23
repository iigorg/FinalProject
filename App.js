import React from 'react'
import Expo from 'expo'
import MainScreen from './src/screen'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
//const store = createStore(reducers, applyMiddleware(ReduxThunk))

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
export default class App extends React.Component {

  render() {    
   // Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT);
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <MainScreen />
      </PersistGate>        
      </Provider>
    );
  }
}


