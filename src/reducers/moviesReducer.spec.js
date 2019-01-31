import { moviesReducer } from './moviesReducer'
import * as actions from '../actions/'

describe('moviesReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = moviesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with a new array of movies', () => {
    const expected = [{
      id: 297802,
      vote_average: 6.9,
      title: "Aquaman",
      popularity: 303.019,
      poster_path: "/5Kg76ldv7VxeX9YlcQXiowHgdX6.jpg",
      release_date: "2018-12-07"
    }]
    const result = moviesReducer(undefined, actions.setMovies(expected))
    expect(result).toEqual(expected)
  })
})