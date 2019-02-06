
import { loginPromptReducer } from './loginReducer'

describe('loginReducer', () => {
  it('should return true', () => {
    expect(
      loginPromptReducer(false,
        { type: 'SET_LOGIN_PROMPT', bool: true })).toBe(true)
  })
  
  it('should return false', () => {
    expect(
      loginPromptReducer(undefined,
        { type: '', bool: false })).toBe(false)
  })
})