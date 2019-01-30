export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter,
})

export const toggleFavorite = (id)=>({
    type:'TOGGLE_FAVORITE',
    id,
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
})

