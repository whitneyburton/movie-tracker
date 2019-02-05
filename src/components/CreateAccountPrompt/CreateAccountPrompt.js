import React from 'react'
import { Link } from 'react-router-dom'
import './CreateAccountPrompt.scss'

const CreateAccountPrompt = (props) => {
  const { setShouldPromptLogin, setPopup } = props;
  setPopup(true)

  return <div className='CreateAccountPrompt'>
    <p className='create-account-prompt'>In order to <span role='img' aria-label='star emoji'>⭐</span> your favorite movies, you need an account. Would you like to create one?</p>
    <hr/>
    <Link to='/create-user' onClick={() => setShouldPromptLogin(false)}>YES</Link>
    <button className='no-btn' onClick={() => { setShouldPromptLogin(false); setPopup(false) }}>NO</button>
    <hr/>    
    <p className='account-notice'>(If you already have an account, you can login from the home page!)</p>
  </div >
}

export default CreateAccountPrompt