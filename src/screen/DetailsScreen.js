import React from 'react'
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native'
import { Header } from '../components'
import { connect } from 'react-redux'
import { movieDetails } from '../actions'

class DetailsScreen extends React.PureComponent{ 
componentDidMount(){   
   this.props.movieDetails(this.props.navigation.state.params.show.item.imdbID)
 }

  render(){        
    const { movie } = this.props
    const {container, text, image, details, title} = styles 
    const img = movie.Poster === "N/A" ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : movie.Poster  
    return(
      <View style={container}>
        <Header 
          title={movie.Title} 
          onPress={() => this.props.navigation.goBack()} 
          iconLeft="ios-arrow-back" 
          backgroundColor="#30d0fe"
          titleColor="#000000"
          />     
        <ScrollView style={container}>         
            <Text style={title}>{movie.Title}</Text>
            <Image
                  style={image}
                  source={{ uri: img }}
                />
              <Text style={text}>{movie.Plot}</Text>
            <View style={details}>
                <Text style={text}>Year: {movie.Year}</Text>
                <Text style={text}>Language: {movie.Language}</Text>
                <Text style={text}>Genre: {movie.Genre}</Text>
                <Text style={text}>Awards: {movie.Awards}</Text>
                <Text style={text}>Type: {movie.Type}</Text>
                <Text style={text}>imdbRating: {movie.imdbRating}</Text>        
                <Text style={text}>Website: {movie.Website}</Text>
                <Text style={text}>Actors: {movie.Actors}</Text>
                <Text style={text}>Production: {movie.Production}</Text>
                <Text style={text}>BoxOffice: {movie.BoxOffice}</Text>
                <Text style={text}>Country: {movie.Country}</Text>
                <Text style={text}>Director: {movie.Director}</Text>               
            </View>                   
        </ScrollView>  
     </View>      
    )
  }
}

const mapStateToProps = state => {  
  return {   
    movie: state.search.movieDetail    
  }
}

export default connect(mapStateToProps, {movieDetails})(DetailsScreen)

const styles = StyleSheet.create({
    container: {         
      paddingBottom: 80,
      backgroundColor: '#fff'    
    },    
    title: {
      paddingTop: 5,
      paddingBottom: 10,
      fontSize: 18,
      alignSelf: 'center',
      fontWeight: 'bold',
      },
    text: {
      padding: 5,
      fontSize: 16,    
      },
    image: { 
      width: 350, 
      height: 400, 
      borderRadius: 10, 
      alignSelf: 'center',
    },
    details:{
      flex:1,      
      padding: 5,
      paddingBottom: 20,
      backgroundColor: '#fafad2',
    }
}) 