import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, Image, Text, View, Button } from 'react-native'
import { W } from '../../constants'
import { connect } from 'react-redux'
import { listFavorits } from '../actions'
import Ionicons from 'react-native-vector-icons/Ionicons'
class Movies  extends React.PureComponent { 


 onButtonPress = (imdbID) => {     
  const selectedItems = this.props.listFavorit
    if (selectedItems.includes(imdbID)){      
      return false      
    } else {         
       selectedItems.push(imdbID)                
      this.props.listFavorits(selectedItems)                             
    } 
}

checkIfIDExists(imdbID){
  const selectedItems = this.props.listFavorit 
  const foundPresent = selectedItems.includes(imdbID);  
    if (foundPresent){       
      return false;      
    } else {                 
      return true;           
    } 
}

 renderItem = item => { 
   const img = item.item.Poster === "N/A" ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : item.item.Poster     
        return (
          <TouchableOpacity style={styles.btnTouch} onPress={() => { this.props.onPressTouch(item)}} >   
              <Image
                style={styles.btnImage}
                source={{ uri: img }}
              />
              <Text
                style={styles.btnText}>{item.item.Title} 
              </Text>              
                {this.checkIfIDExists(item.item.imdbID) ?
                    <TouchableOpacity style={styles.btnAdd} 
                     onPress={() => { this.props.onPressFavorites(item.item.imdbID, this.props.listFavorit), this.onButtonPress(item.item.imdbID)}} >
                    <Text style={styles.btnAddText}>add to favorites</Text>
                 </TouchableOpacity> :                 
                 <View style={styles.btnCloud}>
                    <Ionicons name="ios-cloud-done" size={45} color="#00008b" />                     
                 </View> 
                }                                                                         
           </TouchableOpacity>           
        );
    }     

   keyExtractor = (item, index) => index;  

  render(){         
    return(      
      <FlatList style={styles.container} data={this.props.movies} renderItem={this.renderItem} keyExtractor={this.keyExtractor} 
      onEndReachedThreshold={0.7} onEndThreshold={100} onEndReached={() => {this.props.handleLoad()}} contentInset={{ bottom: 40 }} />       
    )
  }      
}

const styles = StyleSheet.create({
    container: {                       
      backgroundColor: '#fff',     
    },
    btnTouch: {   
        alignSelf: 'center',           
        borderRadius: 5,              
        margin: 2,
        position: 'relative',                       
    },
    btnImage: { 
        width: W, 
        height: 180,
        opacity: 0.4, 
    },
    btnText: {       
        position: 'absolute',      
        alignItems: 'center',             
        fontWeight: 'bold',
        fontSize: 25,
        justifyContent: 'center',
        top: 5,
        left: 10, 
        right: 10,                                            
    },
    btnAdd: {              
        position: 'absolute',         
        justifyContent: 'center',
        alignItems: 'center',       
        backgroundColor: '#30d0fe',        
        width: 140,
        height: 40,   
        left: 10,             
        bottom: 10, 
        borderRadius: 5,                             
    },  
    btnCloud: {
        position: 'absolute',         
        justifyContent: 'center',
        alignItems: 'center',       
        right: 10,             
        bottom: 10, 
    },  
    btnAddText: {
      fontSize: 18,
    }
}) 

const mapStateToProps = state => {    
  return {
    listFavorit: state.favorites.listFavorit,
    search: state.search.search,    
  }
}

export default connect(mapStateToProps, {listFavorits} )(Movies)



