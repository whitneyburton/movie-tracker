import React, { Fragment } from 'react'
import { Route, withRouter, Link } from 'react-router-dom'
import { Movie, Popup } from '../../components/'
import { setPromptLogin, setFavorites } from '../../actions'
import { connect } from 'react-redux'
import './Carousel.scss'

const Carousel = (props) => {
  const { movies, user, shouldPromptLogin, setPromptLogin, setFavorites, location } = props
  const movieCards = movies.map(movie => (
    <Movie
      key={JSON.stringify(movie)}
      user={user}
      movie={movie}
      movies={movies}
      setFavorites={setFavorites}
      setPromptLogin={setPromptLogin} />
  ))
  const showFav = location.pathname.includes('favorites')
  const filteredFavorites = movieCards.filter(movieCard => {
    const { isFavorite } = movieCard.props.movie
    return isFavorite
  })
  const noFav = !filteredFavorites.length && <h1 style={{color: 'white'}}>You need to favorite some damn movies.</h1>

  return (
    <Fragment>
      <div className='Carousel'>
        {showFav ? (noFav || filteredFavorites) : movieCards}
      </div>
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
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Carousel))
