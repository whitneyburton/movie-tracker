export const filterReducer = (state = 'test', action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.filter;
    default: return state;
  }
}