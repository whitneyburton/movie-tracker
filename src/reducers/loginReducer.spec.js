
import { loginPromptReducer } from './loginReducer'



it('should return true', () => {
  expect(
    loginPromptReducer(false,
      { type: 'SET_SHOULD_PROMPT_LOGIN', bool: true })).toBe(true)
})

it('should return false', () => {
  expect(
    loginPromptReducer(undefined,
      { type: '', bool: false })).toBe(false)
})