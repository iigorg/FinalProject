import {combineReducers} from 'redux'
import SearchReducer from './SearchReducer'
import FavoritesReducer from './FavoritesReducer'

export default combineReducers({
  search: SearchReducer,
  favorites: FavoritesReducer
})