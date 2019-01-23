import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Constants } from 'expo';
export default class AboutScreen extends React.PureComponent{
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name="ios-information-circle-outline"
        size={25}
        color={tintColor}
      />
    )
  };
  render(){
    return(
        <View style={styles.container}>       
          <Text style={styles.title}>Advanced Movie Search</Text>
          <Text style={styles.text}>
              The movie browser will allow users to search for movies included in the [Open Movie Database](http://www.omdbapi.com/).
              View additional information about any movie people select and add films from Search to your Favorite list.
          </Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  title:{
      fontSize: 22,
      textAlign: 'center',
      marginBottom: 15
  },
  text: {
   marginHorizontal: 30,
    textAlign: 'center'
  }
});