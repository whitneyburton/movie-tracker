import * as actions from './index'

describe('actions', () => {
  const movies = [
    { 'title': "Aquaman", },
    { name: 'title1' }
  ]
  const user = {
    name: 'hills',
    password: 'greatpw',
    email: 'some@email.uk'
  }

  describe('setFilter', () => {
    it('should return an object with a type of SET_FILTER and filter string', () => {
      const expected = { type: 'SET_FILTER', filter: 'favorites' }
      const result = actions.setFilter('favorites')
      expect(result).toEqual(expected)
    })
  })

  describe('toggleFavorite', () => {
    it('should return an object with a type of TOGGLE_FAVORITE and id number', () => {
      const expected = { type: 'TOGGLE_FAVORITE', id: 1 }
      const result = actions.toggleFavorite(1)
      expect(result).toEqual(expected)
    })
  })

  describe('setMovies', () => {
    it('should return an object with a type of SET_MOVIES and movies array', () => {

      const expected = { type: 'SET_MOVIES', movies }
      const result = actions.setMovies(movies)
      expect(result).toEqual(expected)
    })
  })

  describe('setUser', () => {
    it('should return an object with a type of SET_USER and name, password, and email', () => {
      const expected = { user: user.name, type: 'SET_USER' }
      const result = actions.setUser(user.name, user.password, user.email)
      expect(result).toEqual(expected)
    })
  })
})
