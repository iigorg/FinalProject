import React from 'react'
import Expo from 'expo'
import MainScreen from './src/screen'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reducers from './src/reducers'
import ReduxThunk from 'redux-thunk'

const store = createStore(reducers, applyMiddleware(ReduxThunk))

export default class App extends React.Component {

  render() {    
   // Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT);
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>
    );
  }
}


