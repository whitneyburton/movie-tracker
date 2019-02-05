import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUser, setMovies, setPopup } from '../../actions'
import { getMovies } from '../../api/'
import './Profile.scss'

const Profile = (props) => {
  const { user } = props
  const logout = async () => {
    props.setUser(null)
    try {
      props.setMovies(await getMovies('now_playing'))
    } catch (error) {
      console.log('Error fetching data')
    }
  }


  return (
    <Fragment>
      {!user ?
        <div className='Profile'>
          <Link to='/login' className='login-link' onClick={() => props.setPopup(true)} >SIGN IN</Link>
        </div>
        :
        <div className='Profile'>
          <p className='user-name'>{user.name.toUpperCase()}</p>
          <button className='logout-btn' onClick={() => logout()}>SIGN OUT</button>
        </div>}
    </Fragment>
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