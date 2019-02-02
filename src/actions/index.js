// Movie key

export const toggleFavorite = (id) => ({
    type:'TOGGLE_FAVORITE',
    id,
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
})

export const setFavorites = (favorites, movies) => ({
    type: 'SET_FAVORITES',
    favorites,
    movies,
})

// Users key 

export const setUser = (user) => ({
    type: 'SET_USER',
    user,
})

// LoginPrompt key

export const setPromptLogin = (bool) => ({
  type: 'SET_PROMPT_LOGIN',
  bool,
})