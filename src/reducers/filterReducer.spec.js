import { filterReducer } from './filterReducer'
import * as actions from '../actions/'

describe('filterReducer', () => {
  it('should return the default state', () => {
    const expected = ''
    const result = filterReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return the state with a new filter string', () => {
    const expected = 'favorites'
    const result = filterReducer(undefined, actions.setFilter(expected))
    expect(result).toEqual(expected)
  })
})