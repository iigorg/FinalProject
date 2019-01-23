import {
  SEARCH_CHANGE,
  MOVIES_FETCHED,
  MOVIES_ADDITIONAL,
  MOVIES_DETAILS,
  MOVIES_FAILED,
  FAVORITES_ADD,
  FAVORITES_DELETE,
  FAVORITES_LIST
  } from '../types'

export const searchChanged = (text) => {    
  return{
    type: SEARCH_CHANGE,
    payload: text
  }
}

export const listFavorits = (listFavorit) => {  
  return{
    type: FAVORITES_LIST,
    payload: listFavorit
  }
}

 function compare(imdbID, listFavorit){  
  const foundPresent = listFavorit.includes(imdbID);    
    if (foundPresent){       
      return false;      
    } else {       
      return true;           
    } 
}
  

export const getMovies = (searchText, page) => async (dispatch) => {   
  function onSuccess(success) {  
    dispatch({ type: MOVIES_FETCHED, payload: success, page })   
    return success
  }
  function onError(error) {
    dispatch({ type: MOVIES_FAILED, error })
    return error
  }
  try {
    searchText = encodeURIComponent(searchText.trim()) 
    const response = await fetch('https://www.omdbapi.com/?s='+ searchText +'&page='+ page +'&apikey=48def10c')   
    const results = await response.json()      
    return onSuccess(results)    
  } catch (error) {
    return onError(error)
  }
}

export const movieDetails = (imdbID) => async (dispatch) => {   
  function onSuccess(success) {
    dispatch({ type: MOVIES_DETAILS, payload: success })   
    return success
  }  
  try {   
    const response = await fetch('https://www.omdbapi.com/?i='+ imdbID +'&apikey=48def10c')     
    const results = await response.json()      
    return onSuccess(results)    
  } catch (error) {
    return error
  }
}

export const addFavorites = (imdbID, listFavorit) => async (dispatch) => {   
  function onSuccess(success) {
    dispatch({ type: FAVORITES_ADD, payload: success })   
    return success
  }  
if(compare(imdbID, listFavorit)) {   
  try {   
        const response = await fetch('https://www.omdbapi.com/?i='+ imdbID +'&apikey=48def10c')     
        const results = await response.json()      
        return onSuccess(results)    
      } catch (error) {
        return error
      }
  }      
}

export const favoritesDelete = (imdbID, listFavorit) => {   
    const remove = listFavorit.indexOf(imdbID);
    listFavorit.splice(remove, 1);   
  return{
    type: FAVORITES_DELETE,
    payload: imdbID, listFavorit
  }
}



