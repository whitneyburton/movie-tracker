import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <Fragment>
      <h1>Login Component</h1>
      <NavLink to='/home' name='user1'>User1</NavLink>
    </Fragment>
  )
}

export default Login;