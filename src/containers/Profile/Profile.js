import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser } from '../../actions'
import './Profile.scss'

const Profile = (props) => {

  return (
    <div className='Profile' >
      <p>Profile</p>
      {!props.user ?
        <Link to='/login'>Login</Link>
        :
        <button onClick={() => props.setUser(null)}>Logout</button>}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
