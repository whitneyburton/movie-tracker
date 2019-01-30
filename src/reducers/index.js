import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { filterReducer } from './filterReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    filter: filterReducer,
    users: userReducer,
})

export default rootReducer;