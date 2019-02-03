import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser, setMovies, setPopup } from '../../actions'
import { getMovies } from '../../api/'
import './Profile.scss'

const Profile = (props) => {

  const logout = async () => {
    props.setUser(null)
    props.setMovies(await getMovies('now_playing'))
  }


  return (
    <div className='Profile' >
      <p>Profile</p>
      {!props.user ?
        <Link to='/login' onClick={() => props.setPopup(true)} >Login</Link>
        :
        <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}

export const mapStateToProps = (state) => ({
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
  setMovies: (movies) => dispatch(setMovies(movies)),
  setPopup: (bool) => dispatch(setPopup(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);