import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ifIphoneX } from 'react-native-iphone-x-helper'

const Search = ({
  value,
  onBlur,
  placeholder,
  onChangeText,
  onPress
}) => {
  
  const { container, sub, inputStyle, searchStyle, searchBtn } = styles
  return(   
    <View style={container}>
      <View style={sub}>       
        <TextInput 
          style={inputStyle} 
          value={value} 
          onBlur={onBlur} 
          placeholder={placeholder} 
          onChangeText={onChangeText}  
        />
        <TouchableOpacity onPress={onPress}>
          <View style={searchStyle}>
            <MaterialCommunityIcons name="magnify" style={searchBtn} />
          </View>
        </TouchableOpacity>
      </View>  
     </View>        
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    justifyContent: 'center',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    ...ifIphoneX({
      height: 122
    }, {
      height: 90
    })
  },
  sub: {
    justifyContent: 'space-between',
    marginTop: 40,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 20
  },
  inputStyle: {
    fontSize: 18,
    height: 23,
    width: 300,
    marginLeft: 15,
    backgroundColor: '#fff'
  },
  searchStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  searchBtn: {
    marginTop: 2,
    fontSize: 25,
    color: '#fff'
  }
})


export { Search }


