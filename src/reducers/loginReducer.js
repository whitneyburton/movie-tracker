export const loginPromptReducer = (state=false, action)=>{
  switch(action.type){
  case 'SET_PROMPT_LOGIN':
    return action.bool
  default:
    return state
  }
}
