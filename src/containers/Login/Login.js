import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { fetchData } from '../../api/api'
import './Login.scss'

class Login extends Component {
  render() {
    // const users = this.props.users.map(user => {
    //   return <NavLink className='profile-icon' to='/home' name='user1'>{user.name}</NavLink>
    // })

    return (
      <div className='Login'>
        <h1>Movie Tracker</h1>
        <h3>Welcome back!</h3>
        <input
          className='user-input'
          placeholder='Email'
          required type='email'
          // onChange={this.handleChange}
          name='email' />
        <input
          className='user-input'
          placeholder='Password'
          required type='password'
          // onChange={this.handleChange}
          name='password' />
        <NavLink className='sign-in link' to='/'>Sign In</NavLink>
        <p>New to Movie Tracker?</p>
        <NavLink className='create-user link' to='/create-user'>Create Account</NavLink>
      </div> 
    )
  }
}

export default Login;
