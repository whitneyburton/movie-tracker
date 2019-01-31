import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsers } from '../../actions/'
import { fetchData } from '../../api/api'
import './Login.scss'


class Login extends Component {

  async componentDidMount() {
    
    const result = await fetchData('users')
    this.props.setUsers(result.data)
  }

  render() {
    const users = this.props.users.map(user => {
      return <NavLink className='profile-icon' to='/home' name='user1'>{user.name}</NavLink>
    })

    return (
      <div className='Login'>
        <h1>Movie Tracker</h1>
        {<div className='Profile'>{users}</div>}
        <NavLink className='CreateUserButton' to='/createUser'> CreateUser </NavLink>
      </div> 
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => dispatch(setUsers(users))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
