// Movie key

export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter,
})

export const toggleFavorite = (id) => ({
    type:'TOGGLE_FAVORITE',
    id,
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
})

// Users key 

export const setUser = (user) => ({
    type: 'SET_USER',
    user,
})

// LoginPrompt key
export const setLoginPrompt = (bool) => ({
  type: 'SET_LOGIN_PROMPT',
  bool,
})

