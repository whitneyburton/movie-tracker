const defaultState = []

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const newState = [...state];
      return newState.map(movie => {
        if (movie.id === action.id) {
          return { ...movie, isFavorite: !movie.isFavorite }
        } else {
          return movie
        }
      })
    case 'SET_MOVIES':
      return action.movies
    case 'SET_FAVORITES':
      return [...action.movies].map(movie => {
        movie.isFavorite = false
        action.favorites.forEach(favorite => {
          if (favorite.movie_id === movie.id) {
            movie.isFavorite = true
          }
        })
        return movie;
      })
    default: return state
  }
}