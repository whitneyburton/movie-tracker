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
    default: return state
  }
}