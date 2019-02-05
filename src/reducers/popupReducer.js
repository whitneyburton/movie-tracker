const defaultState = false

export const popupReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_POPUP':
      return action.bool
    default:
      return state
  }
}