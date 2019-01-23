import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { W } from '../../constants'

const Header = ({
  title,
  onPress,
  iconLeft,
  iconRight,
  backgroundColor,
  titleColor 
}) => {

  const { container, text, searchBtn, goBack } = styles 
  return(
    <View style={[container, {backgroundColor: backgroundColor}]}>
      {iconLeft &&
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={iconLeft} style={goBack} />
        </TouchableOpacity>
      }
      <Text numberOfLines={1} ellipsizeMode="tail" style={[text, {color: titleColor}]}>{title}</Text> 
      {iconRight && 
        <TouchableOpacity onPress={onPress}>
           <MaterialCommunityIcons name="magnify" style={searchBtn} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    position: 'relative',
    elevation: 2,
    ...ifIphoneX({
      height: 122
    }, {
      height: 90
    })    
  },
  text:{
    color: '#fff',
    fontSize: 25,
    width: W - 75,
    ...ifIphoneX({
      paddingTop: 75 
    }, {
      paddingTop: 40
    })
  },
  searchBtn: {
    ...ifIphoneX({
      paddingTop: 75 
    }, {
      paddingTop: 44
    }),
    fontSize: 30,
    marginRight: 3
  },
  goBack: {
    ...ifIphoneX({
      paddingTop: 75 
    }, {
      paddingTop: 40
    }),
    fontSize: 32,     
  },
})


export { Header }