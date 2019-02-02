import React, { Fragment } from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
import { Movie, Popup } from '../../components/'
import { setPromptLogin, toggleFavorite, setFavorites } from '../../actions'
import { connect } from 'react-redux'
import './Carousel.scss'

const Carousel = (props) => {
  const { movies, user, shouldPromptLogin, setPromptLogin, toggleFavorite, setFavorites } = props

  const movieCards = movies.map(movie => (
    <Movie
      key={JSON.stringify(movie)}
      user={user}
      movie={movie}
      movies={movies}
      setFavorites={setFavorites}
      toggleFavorite={toggleFavorite}
      setPromptLogin={setPromptLogin}
      shouldPromptLogin={shouldPromptLogin} />
  ))

  return (
    <Fragment>
      <div className='Carousel'>{movieCards}</div>
      {
        shouldPromptLogin &&
        <div>
          <p>Would you like to create an account?</p>
          <Link to='/create-user'>YUSH</Link>
          <button onClick={() => setPromptLogin(false)}>NAH</button>
        </div>
      }
      <Route path='/movies/:id' render={({ match }) => {
        const movie = movies.find(movie => movie.id === parseInt(match.params.id))

        if (!movie) return <div> Movie does not exist</div>

        return <Popup movie={movie} user={user} setPromptLogin={setPromptLogin} />
      }} />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user,
  shouldPromptLogin: state.shouldPromptLogin
})

const mapDispatchToProps = (dispatch) => ({
  setFavorites: (favorites, movies) => dispatch(setFavorites(favorites, movies)),
  setPromptLogin: (bool) => dispatch(setPromptLogin(bool)),
  toggleFavorite: (id) => dispatch(toggleFavorite(id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Carousel))
