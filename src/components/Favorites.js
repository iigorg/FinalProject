import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity, Image, Text, View, Button } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


class Favorites  extends React.PureComponent {

 renderItem = item => {     
   const imdbID = item.item.imdbID    
        return (
          <View style={styles.btnTouch}>           
              <TouchableOpacity onPress={() => { this.props.onPressTouch(item)}}>  
                <Text
                  style={styles.btnText}>
                  {item.item.Title} ({item.item.Year})
                </Text> 
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => { this.props.onPressDelete(imdbID)}} >  
                <Ionicons name="ios-trash"  style={styles.btnTrash}/>    
              </TouchableOpacity>                      
           </View>           
        );
    } 

   keyExtractor = (item, index) => index;  

  render(){         
    return(      
      <FlatList style={styles.container} data={this.props.favorites} renderItem={this.renderItem} keyExtractor={this.keyExtractor} 
      onEndReachedThreshold={0.7} onEndThreshold={100} contentInset={{ bottom: 115 }} />       
    )
  }
      
}

const styles = StyleSheet.create({
    container: {                       
      backgroundColor: '#fff',     
    },
     btnTouch: {
        flexDirection: 'row',
        borderBottomWidth: 1,      
        borderBottomColor: '#30d0fe',
        padding: 10,        
        margin: 5,
        justifyContent: "space-between",
        alignItems: 'center',
    },
    btnText: {        
        fontWeight: 'bold',
        fontSize: 14,        
        width: 250                                                 
    },  
    btnTrash: {
       fontSize: 40,
       color: '#1ca8d0',      
       paddingRight: 5             
    }
}) 


export { Favorites }



