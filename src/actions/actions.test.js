import * as actions from './index'
import mockMovies from '../mockData/movies'

describe('actions', () => {
  const user = {
    name: 'hills',
    password: 'greatpw',
    email: 'some@email.uk'
  }

  describe('toggleFavorite', () => {
    it('should return an object with a type of TOGGLE_FAVORITE and id number', () => {
      const expected = { type: 'TOGGLE_FAVORITE', id: 1 }
      const result = actions.toggleFavorite(1)
      expect(result).toEqual(expected)
    })
  })

  describe('setMovies', () => {
    it('should return an object with a type of SET_MOVIES and movies array', () => {
      const expected = { type: 'SET_MOVIES', mockMovies }
      const result = actions.setMovies(mockMovies)
      expect(result).toEqual(expected)
    })
  })

  describe('setFavorites', () => {
    it('should return an object with a type of SET_FAVORITES, a favorites array and a user id', () => {
      const expected = { type: 'SET_FAVORITES', mockMovies, user_id: 1 }
      const result = actions.setFavorites(mockMovies, 1)
      expect(result).toEqual(expected)
    })
  })

  describe('setUser', () => {
    it('should return an object with a type of SET_USER and name, password, and email', () => {
      const expected = { type: 'SET_USER', user }
      const result = actions.setUser(user)
      expect(result).toEqual(expected)
    })
  })

  describe('setLoginPrompt', () => {
    it('should return an object with a type of SET_LOGIN_PROMPT and a boolean', () => {
      const expected = { type: 'SET_LOGIN_PROMPT', bool: true }
      const result = actions.setLoginPrompt(true)
      expect(result).toEqual(expected)
    })
  })

  describe('setPopup', () => {
    it('should return an object with a type of SET_POPUP and a boolean', () => {
      const expected = { type: 'SET_POPUP', bool: true }
      const result = actions.setPopup(true)
      expect(result).toEqual(expected)
    })
  })
})