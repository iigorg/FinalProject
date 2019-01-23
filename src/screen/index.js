import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import MainScreen from './MainScreen'
import AboutScreen from './AboutScreen'
import DetailsScreen from './DetailsScreen'
import FavoritesScreen from './FavoritesScreen'
import SplashScreen from './SplashScreen'

import {
  MAIN_SCREEN, 
  DETAILS_SCREEN,
  FAVORITES_SCREEN,
  ABOUT_SCREEN,
  SPLASH_SCREEN
} from '../routes'

const MainTabs = createBottomTabNavigator({
  Search: MainScreen,
  Favorites: FavoritesScreen, 
  About: AboutScreen  
});


export default createStackNavigator(
  {
    [SPLASH_SCREEN]: SplashScreen,
    [MAIN_SCREEN]: MainTabs,
    [DETAILS_SCREEN]: DetailsScreen
  },
  {
    initialRouteName: SPLASH_SCREEN,
    headerMode: 'none'    
  }
);





