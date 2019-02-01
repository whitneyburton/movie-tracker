import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { postData } from '../../api/api'
import './Login.scss'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { password, email } = this.state
  //   const user = { password, email }

  //   try {
  //     const result = await postData('users', user)
  //     console.log(result)
  //   } catch (error) {
  //     this.setState({
  //       error: error.message
  //     })
  //   }
  // }

  render() {
    return (
      <div className='Login'>
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
        <NavLink
          className='sign-in link'
          onClick={this.handleSubmit}
          to='/'>Sign In</NavLink>
        <p>New to Movie Tracker?</p>
        <NavLink className='create-user link' to='/create-user'>Create Account</NavLink>
      </div> 
    )
  }
}

export default Login;