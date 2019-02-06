const defaultState = false

export const loginPromptReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_PROMPT':
      return action.bool
    default:
      return state
  }
}
