export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    filter,
})

export const toggleFavorite = (id)=>({
    type:'TOGGLE_FAVORITE',
    id,
})

export const fetchMovies = () => ({
    type: 'FETCH_MOVIES',
})

