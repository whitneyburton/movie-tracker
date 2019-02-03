const defaultState = []

export const moviesReducer = (state = defaultState, action) => {
  const { type, id: favID } = action
  switch (type) {

    case 'SET_MOVIES':
      return action.movies.map(movie => {
        movie.isFavorite = false
        movie.movie_id = movie.id
        return movie
      })

    case 'TOGGLE_FAVORITE':
      return [...state].map(movie => (
        movie.id === favID ?
          { ...movie, isFavorite: !movie.isFavorite }
          :
          movie
      ))

    case 'SET_FAVORITES':
      return [...state].map(movie => {
        movie.user_id = action.user_id

        action.favorites.forEach(favorite => {
          if (favorite.movie_id === movie.movie_id) {
            movie.isFavorite = true
          }
        })
        return movie;
      })

    default:
      return state
  }
}