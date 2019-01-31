import { userReducer } from './userReducer'
import * as actions from '../actions/'

describe('userReducer', () => {
  it('should return the default state', () => {
    const expected = []
    const result = userReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with a new array of user objects', () => {
    const expected = [
      { name: 'Whitney', password: '391823', email: 'whitney@gmail.com' },
      { name: 'Justin', password: '235234', email: 'justin@gmail.com' }]
    const result = userReducer(undefined, actions.setUsers(expected))
    expect(result).toEqual(expected)
  })
})