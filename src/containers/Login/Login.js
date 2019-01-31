import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsers } from '../../actions/'

class Login extends Component {

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/api/users')
    const result = await res.json()
    this.props.setUsers(result.data)
  }
  
  render() {
    const users = this.props.users.map(user => {
      return <NavLink to='/home' name='user1'>{user.name}</NavLink>
    })

    return (
      <div className='Login'>
        <h1>Login Component</h1>
        {users}
        <NavLink to='/createUser'> CreateUser </NavLink>
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