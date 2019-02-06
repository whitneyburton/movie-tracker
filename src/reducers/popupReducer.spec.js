import { popupReducer } from './popupReducer'

describe('popupReducer', () => {
  it('should return default of true if passed true', () => {
    expect(
      popupReducer(undefined, { type: 'SET_POPUP', bool: true }))
      .toBe(true)
  })
  
  it('should return false if there if passed false', () => {
    expect(
      popupReducer(undefined, { type: 'SET_POPUP', bool: false }))
      .toBe(false)
  })
})