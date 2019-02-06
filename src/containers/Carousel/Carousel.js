import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Movie } from '../../components/'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Carousel.scss'

export const Carousel = ({ movies, isPopup }) => {
  const movieCards = movies.map(movie => (
    <Movie
      key={JSON.stringify(movie)}
      movie={movie} />))
  const favMovieCards = movieCards.filter(movieCard => movieCard.props.movie.isFavorite)
  const hasNoFavs = !favMovieCards.length && <h1 className='no-faves-notice'>You have no favorites... yet!</h1>
  const _class = isPopup ? 'Carousel blur' : 'Carousel'

  return (
    <Fragment>
      <section className={_class}>
        <Switch>
          <Route path='/favorites' render={() => (
            <Fragment>
              <h2 className='favorites-title'>Favorite Movies</h2>
              <div className='movies-container'>{(hasNoFavs || favMovieCards)}</div>
            </Fragment>)} />

          <Route path='/' render={() => (
            <Fragment>
              <h2 className='recents-title'>Recent Movies</h2>
              <div className='movies-container'>{movieCards}</div>
            </Fragment>)} />
        </Switch>
      </section>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  isPopup: state.isPopup
})

export default connect(mapStateToProps)(Carousel)

Carousel.propTypes = {
  movies: PropTypes.array,
  isPopup: PropTypes.bool,
}