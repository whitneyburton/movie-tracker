export const popupReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_POPUP':
      return action.bool
    default:
      return state
  }
}