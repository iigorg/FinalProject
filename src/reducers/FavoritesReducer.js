import {
  FAVORITES_ADD,
  FAVORITES_DELETE,
  FAVORITES_LIST
  } from '../types'

const INITIAL_STATE = {
   favorites: [
      {Title:"Interstellar",Year:"2014",imdbID:"tt0816692"},
      {Title:"Harry Potter and the Sorcerer's Stone",Year:"2001",imdbID:"tt0241527"},
      {Title:"Star Wars: Episode VI - Return of the Jedi",Year:"1983",imdbID:"tt0086190"}
   ],
   listFavorit: ["tt0086190","tt0241527","tt0816692"] 
}


export default (state = INITIAL_STATE, action) => {   
  switch (action.type){    
    case FAVORITES_LIST:      
    return {
       ...state,
       listFavorit: [...action.payload]
    }    
    case FAVORITES_ADD:   
     return {
       ...state,
       favorites: [action.payload, ...state.favorites]    
     }    
     case FAVORITES_DELETE:        
     return {
       ...state,
        favorites: state.favorites.filter(
          item => item.imdbID !== action.payload         
        ),
        listFavorit: [...action.listFavorit]       
     }
     default: return state
  }
}

