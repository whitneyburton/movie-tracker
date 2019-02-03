// Movie key
export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id,
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
})

export const setFavorites = (favorites, user_id) => ({
  type: 'SET_FAVORITES',
  favorites,
  user_id
})

// User key 
export const setUser = (user) => ({
  type: 'SET_USER',
  user,
})

// Login key
export const setShouldPromptLogin = (bool) => ({
  type: 'SET_SHOULD_PROMPT_LOGIN',
  bool,
})

// isPopup key
export const setPopup = (bool) => ({
  type: 'SET_POPUP',
  bool
})