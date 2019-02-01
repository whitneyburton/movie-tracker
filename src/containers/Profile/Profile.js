import React from 'react'
import './Profile.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser} from '../../actions'

const Profile = (props)=>{
  let shouldRedirect = false;
  const handleClick=()=>{
    shouldRedirect = true;
  }

  return (
      <div className='Profile' >
        Profile
        <Link onClick={handleClick} to='/login'>Login</Link>

        <button onClick={()=>props.setUser(null)}>Logout</button>
      </div>)
}

export const mapDispatchToProps = (dispatch)=>({
  setUser:(user)=>dispatch(setUser(user))
})

export default connect(null,mapDispatchToProps)(Profile);
