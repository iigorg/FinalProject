import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  MAIN_SCREEN
} from '../routes'

export default class SplashScreen extends React.PureComponent {
  componentWillMount(){
    setTimeout(()=>{
          this.props.navigation.navigate(MAIN_SCREEN);
    },3000)  
  }

  render() {
    const { container, text, logo} = styles
    return (
      <View style={container}>
        <Text style={text}>Advanced Movie Search</Text>  
          <View style={logo}>
            <Ionicons name="ios-images" size={110} color="#ff4500" />   
          </View>                      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'center',
    fontSize: 25,
    color: '#00bfff'
  },
  logo: {
    alignItems: 'center', 
    paddingTop: 20   
  }
});
