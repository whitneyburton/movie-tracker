import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { filterReducer } from './filterReducer'
import { userReducer } from './userReducer'
//import {favoriteReducer} from './favoriteReducer'

const rootReducer = combineReducers({
    movies: moviesReducer,
    filter: filterReducer,
    //favorite: favoriteReducer,
    user: userReducer,
})

export default rootReducer;
