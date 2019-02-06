import React, { Component } from 'react'
import { NavLink, Redirect, Link } from 'react-router-dom'
import { postData, getData } from '../../api'
import { connect } from 'react-redux'
import { setMovies, setUser, setFavorites, setShouldPromptLogin, setPopup } from '../../actions'
import './Login.scss'

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
      canLogin: false
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  setUser = async () => {
    const { password, email } = this.state
    const data = await postData('users', { password, email })
    const { name, id } = data
    localStorage.setItem('users', JSON.stringify({ name, id }))
    this.props.setUser({ name, id })
    return id;
  }

  setUserFavorites = async (userID) => {
    const retrieveFavPath = `users/${userID}/favorites`
    const favorites = await getData(retrieveFavPath)
    this.props.setFavorites(favorites, userID)
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userID = await this.setUser()
      this.setUserFavorites(userID)
      this.setState({ canLogin: true })
      this.props.setPopup(false)
    } catch (error) {
      this.setState({
        error: 'That email or password does not exist'
      })

    }
  }
  componentDidMount = () => {
    this.props.setPopup(true)
    this.props.setShouldPromptLogin(false)
  }
  render() {
    const { canLogin, error } = this.state

    return (
      canLogin ? <Redirect to='/' /> :
        <form className='Login' onSubmit={this.handleSubmit}>
          <h1>Movie Tracker</h1>
          <h3>Welcome back!</h3>
          <input
            className='user-input'
            placeholder='Email'
            required type='email'
            onChange={this.handleChange}
            name='email' />
          <input
            className='user-input'
            placeholder='Password'
            required type='password'
            onChange={this.handleChange}
            name='password' />
          {error && <h3>{error}</h3>}
          <button className='sign-in link'>Sign In</button>
          <p>New to Movie Tracker?</p>
          <NavLink className='create-user link' to='/create-user'>Create Account</NavLink>
          <Link className='back-btn' to='/' onClick={() => this.props.setPopup(false)}>Go Back</Link>
        </form>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
})

export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
  setUser: (user) => dispatch(setUser(user)),
  setFavorites: (favorites, user_id) => dispatch(setFavorites(favorites, user_id)),
  setShouldPromptLogin: (bool) => dispatch(setShouldPromptLogin(bool)),
  setPopup: (bool) => dispatch(setPopup(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
