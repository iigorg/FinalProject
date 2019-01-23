import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header, Favorites } from '../components'
import { connect } from 'react-redux'
import { addFavorites, favoritesDelete } from '../actions'
import {DETAILS_SCREEN} from '../routes'
class FavoritesScreen extends React.PureComponent {
   static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name="ios-bookmark"
        size={25}
        color={tintColor}
      />
    )
  };  

   onPressTouch = valueFilm => {
    this.props.navigation.navigate(DETAILS_SCREEN, ({ show: valueFilm, headerTitle: valueFilm.Title }))    
  }  
  onPressDelete = imdbID => {    
    this.props.favoritesDelete(imdbID, this.props.listFavorit)
  }

  render() { 
    const { favorites } = this.props  
     const { container, folderIcon, text, containerIcon} = styles  
    return (
      <View style={container}>
        <Header 
          title = "Favorites"          
          backgroundColor="#30d0fe"
          titleColor="#000000"
        />
        {favorites.length > 0 ?
            <View>
                <Text style={{fontSize: 18, textAlign: "center"}}> total results: {favorites.length}</Text>
                <Favorites favorites={favorites} onPressTouch={this.onPressTouch} onPressDelete={this.onPressDelete} />                               
            </View> :
            <View style={containerIcon}>   
                <Ionicons
                  name="ios-folder-open"
                  size={65}
                  color="#1ca8d0"
                  style={folderIcon}
                />               
               <Text style={[text, {marginBottom: 10}]}>Your Favorite List is empty</Text> 
               <Text style={text}>Add films from Search</Text>
           </View>      
        }                    
      </View>
    );
  }
}

const mapStateToProps = state => {   
  return {
    favorites: state.favorites.favorites,
    listFavorit: state.favorites.listFavorit,      
  }
}

export default connect(mapStateToProps, {addFavorites, favoritesDelete})(FavoritesScreen)

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#fff',
    flex: 1
  },
  containerIcon: {
    alignSelf: 'center'
  },  
  text: {
    textAlign: "center",
    fontSize: 19,
    width: 300
  },
  folderIcon: {
    textAlign: "center",
    marginTop: 20  
  }
});
