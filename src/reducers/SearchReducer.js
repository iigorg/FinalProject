import {
  SEARCH_CHANGE,
  MOVIES_FETCHED,
  MOVIES_ADDITIONAL,
  MOVIES_DETAILS,
  MOVIES_FAILED
  } from '../types'

const INITIAL_STATE = {
  search: '',
  movies: [],
  visibleMovies: false,
  totalResult: 0,
  movieDetail: []  
}

export default (state = INITIAL_STATE, action) => {   
  switch (action.type){
    case SEARCH_CHANGE:     
     return {
       ...state,
       search: action.payload
     };
    case MOVIES_FETCHED:       
      return {
        ...state,
        movies: action.page === 1 ? action.payload.Search : [...state.movies, ...action.payload.Search],       
        totalResult: action.payload.totalResults === undefined ? '0' : action.payload.totalResults,  
        visibleMovies: action.payload.totalResults ? true : false
      } 
     case MOVIES_DETAILS: 
     return {
       ...state,
        movieDetail: action.payload    
     }
     case MOVIES_FAILED: 
     return {
       ...state      
     }
     default: return state
  }
}