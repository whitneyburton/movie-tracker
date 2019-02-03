import { combineReducers } from 'redux'
import { moviesReducer } from './moviesReducer'
import { filterReducer } from './filterReducer'
import { userReducer } from './userReducer'
import { loginPromptReducer } from './loginReducer'
import { popupReducer } from './popupReducer'

const rootReducer = combineReducers({
  movies: moviesReducer,
  user: userReducer,
  shouldPromptLogin: loginPromptReducer,
  filter: filterReducer,
  isPopup: popupReducer
})

export default rootReducer;
