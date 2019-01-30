import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { setFilter, fetchMovies } from '../../actions';
import { connect } from 'react-redux';

const Home = () => <div>Haaaay</div>

const Nav = (props) => (

    <div onClick={props.fetchMovies}>Test</div>
    /* <nav>
      <NavLink to='/recent'  name='recent'>Test {props.movies}</NavLink>
      <NavLink to='/popular' name='popular' onClick={(e) => {
        e.preventDefault()
        props.setFilter(e.target.name)
      }}>Popular Movies</NavLink>
      <NavLink to='/favorites' name='favorites' onClick={(e) => {
        e.preventDefault()
        props.setFilter(e.target.name)
      }}>Favorite Movies</NavLink>
    </nav> */
  
    /* <Route path='/recent' component={Home} /> */

)

const mapDispatchToProps = (dispatch) => ({
  setFilter: (text) => dispatch(setFilter(text)),
  fetchMovies: () => dispatch(fetchMovies()),
})

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);