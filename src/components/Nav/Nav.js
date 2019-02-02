import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className='Nav'>
      <NavLink to='/' name='recent'>Recent</NavLink>
      <NavLink to='/favorites' name='favorites'>Favorite Movies</NavLink>
      <NavLink to='/popular' name='popular'>Popular Movies</NavLink>
    </nav>
  )
}

export default Nav