import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { setFilter, setMovies } from '../../actions';
import { connect } from 'react-redux';
import apiKey from '../../API_KEY/movie_api_key';
import Button from '../Button/Button'



const Nav = (props) => {

  const fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming${apiKey}`);
    const movies = await response.json();
    await props.setMovies(movies);
    return movies;
  }

  return (
    <Fragment>
      < div onClick={fetchMovies}>{JSON.stringify(props.movies)} Test</div >
      <nav>
        <NavLink to='/recent' name='recent'>Recent</NavLink>
        <NavLink to='/popular' name='popular'>Popular Movies</NavLink>
        <NavLink to='/favorites' name='favorites'>Favorite Movies</NavLink>
      </nav>
    </Fragment>)

}

const mapDispatchToProps = (dispatch) => ({
  setFilter: (text) => dispatch(setFilter(text)),
  setMovies: (movies) => dispatch(setMovies(movies)),
})

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);