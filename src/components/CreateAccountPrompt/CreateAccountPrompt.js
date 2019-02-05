import React from 'react'
import { Link } from 'react-router-dom'
import './CreateAccountPrompt.scss'

const CreateAccountPrompt = (props) => {
  const { setShouldPromptLogin, setPopup } = props;
  setPopup(true)

  return <div className='CreateAccountPrompt'>
    <p>Would you like to create an account?</p>
    <Link to='/create-user' onClick={() => setShouldPromptLogin(false)}> YUSH</Link>
    <button className='test' onClick={() => { setShouldPromptLogin(false); setPopup(false) }}>NAH</button>
  </div >
}


export default CreateAccountPrompt