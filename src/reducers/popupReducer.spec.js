import { popupReducer } from './popupReducer'


it('should pass a test', () => {
  expect(
    popupReducer(undefined, { type: 'SET_POPUP', bool: true }))
    .toBe(true)
})

it('should pass a test', () => {
  expect(
    popupReducer(undefined, { type: '', bool: true }))
    .toBe(false)
})