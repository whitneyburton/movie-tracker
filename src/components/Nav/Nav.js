import React, { Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { setFilter, setMovies } from '../../actions';
import { connect } from 'react-redux';
import apiKey from '../../API_KEY/movie_api_key'



const Nav = (props) => {
  let movies;
  const fetchMovies = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming${apiKey}`);
      const movies = await response.json();
      console.log('winning',movies)
    await props.setMovies(movies)
    return movies
  }

  return < div onClick={fetchMovies}>{`${JSON.stringify(props.movies)}`} Test</div >
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

    }

const mapDispatchToProps = (dispatch) => ({
  setFilter: (text) => dispatch(setFilter(text)),
  setMovies: (movies) => dispatch(setMovies(movies)),
})

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);