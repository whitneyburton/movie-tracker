import React from 'react'
import { NavLink } from 'react-router-dom'
// import { setFilter } from '../../actions'
// import { connect } from 'react-redux'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className='Nav'>
      <NavLink to='/recent' name='recent'>Recent</NavLink>
      <NavLink to='/popular' name='popular'>Popular Movies</NavLink>
      <NavLink to='/favorites' name='favorites'>Favorite Movies</NavLink>
    </nav>
  )
}

// const mapStateToProps = (state) => ({
//   movies: state.movies
// })

// const mapDispatchToProps = (dispatch) => ({
  // setFilter: (text) => dispatch(setFilter(text)),
  // setMovies: (movies) => dispatch(setMovies(movies)),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Nav)

export default Nav