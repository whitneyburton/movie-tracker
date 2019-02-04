import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className='Nav'>
      <h1 className='movie-tracker-title'>Movie <span>Tracker</span></h1>
      <div className='nav-border'>
        <div className='nav-options'>
          <p className='browse'>SORT BY:</p>
          <NavLink exact to='/' activeStyle={{ color: '#0CD0FC' }} name='recent'>RECENT</NavLink>
          <NavLink exact to='/favorites' activeStyle={{ color: '#0CD0FC' }} name='favorites'>FAVORITES</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav