const defaultState = false

export const loginPromptReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_SHOULD_PROMPT_LOGIN':
      return action.bool
    default:
      return state
  }
}
