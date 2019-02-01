import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { fetchData } from '../../api/api'
import './Login.scss'


class Login extends Component {


  render() {
    // const users = this.props.users.map(user => {
    //   return <NavLink className='profile-icon' to='/home' name='user1'>{user.name}</NavLink>
    // })

    return (
      <div className='Login'>
        <h1>Movie Tracker</h1>
        <h3>Sign in:</h3>
        <p>Name</p>
        <input/>
        <p>Email</p>
        <input/>
        <NavLink className='CreateUserButton' to='/create-user'> CreateUser </NavLink>
      </div> 
    )
  }
}

export default Login;
