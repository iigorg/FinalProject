import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Header, Search } from '../components'
import Movies from '../components/Movies'
import { connect } from 'react-redux'
import { searchChanged, getMovies, addFavorites } from '../actions'

import {  
  DETAILS_SCREEN
} from '../routes'

class MainScreen extends React.Component {  
  static navigationOptions = {
    tabBarIcon: ({ focused, tintColor }) => (
      <Ionicons
        name="ios-search"
        size={25}
        color={tintColor}
      />
    ),    
  };
  state = {
   title: 'Search Movie',  
   page: 1,   
   visibleSearchBar: false
  }
  
  onChangeText = newSearch => {  
    const valuePage = 1    
    this.setState({  
      page: valuePage
    })
    this.props.searchChanged(newSearch)
    this.props.getMovies(newSearch, valuePage)
  } 

  onPressTouch = valueFilm => {    
    this.props.navigation.navigate(DETAILS_SCREEN, ({ show: valueFilm, headerTitle: valueFilm.item.Title }))
    
  }
  onPressFavorites = imdbID =>{ 
    this.props.addFavorites(imdbID, this.props.listFavorit)
  }
  handleLoad = () => { 
     this.setState(prevState => ({
      page: prevState.page + 1,
    }));       
    this.props.getMovies(this.props.search, this.state.page)     
  }  

  render() {
    const { visibleSearchBar, title } = this.state
    const { search, movies, visibleMovies, totalResult } = this.props
    const { folderIcon, text, container} = styles    
    return (
      <View>
      {visibleSearchBar ?
         <Search 
            placeholder="Search" 
            onChangeText={this.onChangeText} 
            value={search} 
            onBlur={() => this.setState({visibleSearchBar: false})}
            onPress={() => this.setState({visibleSearchBar: false})} 
          /> : 
          <Header 
            title = {title}
            onPress = {() => this.setState({visibleSearchBar: true})}
            iconRight="magnify"
            backgroundColor="#30d0fe"
            titleColor="#fff"           
         />
      }  
      {visibleMovies ?
        <View>
          <Text style={text}> total results: {totalResult}</Text>
          <Movies movies={movies} onPressTouch={this.onPressTouch} onPressFavorites={this.onPressFavorites} handleLoad={this.handleLoad} /> 
        </View> :
        <View style={container}>
          <Ionicons
                name="ios-chatboxes"
                size={65}
                color="#1ca8d0"
                style={folderIcon}
              />            
          <Text style={text}>Type the name of the film you like in the Search</Text>
        </View>      
      }           
      </View>
    );
  }
}

const mapStateToProps = state => {  
  return {
    search: state.search.search,
    movies: state.search.movies,
    visibleMovies: state.search.visibleMovies,
    totalResult: state.search.totalResult,
    listFavorit: state.favorites.listFavorit
  }
}

export default connect(mapStateToProps, {searchChanged, getMovies, addFavorites})(MainScreen)

const styles = StyleSheet.create({
  container: {
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


