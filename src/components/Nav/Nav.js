import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className='Nav'>
      <NavLink exact to='/' activeStyle={{ color: 'red' }} name='recent'>Recent</NavLink>
      <NavLink exact to='/favorites' activeStyle={{ color: 'red' }} name='favorites'>Favorite Movies</NavLink>
      <NavLink exact to='/popular'  activeStyle={{ color: 'red' }} name='popular'>Popular Movies</NavLink>
    </nav>
  )
}

export default Nav