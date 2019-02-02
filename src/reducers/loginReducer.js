export const loginReducer = (state=false, action)=>{
  switch(action.type){
  case 'SET_LOGIN_PROMPT':
    return action.bool
  default:
    return state
  }
}
