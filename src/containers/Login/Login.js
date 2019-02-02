import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { postData } from '../../api'
import { connect } from 'react-redux'
import { setUser } from '../../actions'

import './Login.scss'

class Login extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const { password, email } = this.state
    const user = { password, email }
    try {
      const result = await postData('users', user)
      const { data } = await result.json()
      const { name, id } = data
      this.props.setUser({ name, id })
      this.setState({ canLogin: true })
    } catch (error) {
      this.setState({
        error: 'That email or password does not exist'
      })
    }
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
          <button className='sign-in link'> Sign In </button>
          <p>New to Movie Tracker?</p>
          <NavLink className='create-user link' to='/create-user'>Create Account</NavLink>
        </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setUser: (user) => dispatch(setUser(user)),
})

export default connect(null, mapDispatchToProps)(Login)
