import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Login = (props) => {
  const users = props.users.map(user => {
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

const mapStateToProps = (state) => ({
  users: state.users,
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)