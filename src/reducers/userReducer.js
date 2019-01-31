const defaultState = []

export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_USERS': return action.users;
    default: return state;
  }
}