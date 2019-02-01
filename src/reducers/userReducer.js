const defaultState = null

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.user
  default:
    return state;
  }
}
