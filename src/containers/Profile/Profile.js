import React from 'react'
import './Profile.scss'
import {Link} from 'react-router-dom'

const Profile = ()=>{
  let shouldRedirect = false;
  const handleClick=()=>{
    shouldRedirect = true;
  }

  return (
      <div className='Profile' onClick={handleClick}>
        Profile
        <Link to='/login'>Login</Link>
      </div>)
}

export default Profile;
