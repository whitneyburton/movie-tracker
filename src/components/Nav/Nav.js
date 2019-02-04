import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className='Nav'>
      <h1 className='movie-tracker-title'>MOVIE TRACKER</h1>
      <NavLink exact to='/' activeStyle={{ color: 'red' }} name='recent'>Recent</NavLink>
      <NavLink exact to='/favorites' activeStyle={{ color: 'red' }} name='favorites'>Favorite Movies</NavLink>
      <NavLink exact to='/popular'  activeStyle={{ color: 'red' }} name='popular'>Popular Movies</NavLink>
    </nav>
  )
}

export default Nav