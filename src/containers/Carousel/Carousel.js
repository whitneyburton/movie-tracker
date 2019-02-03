import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Movie } from '../../components/'
import { connect } from 'react-redux'
import './Carousel.scss'

const Carousel = (props) => {
  const movieCards = props.movies.map(movie => (
    <Movie
      key={JSON.stringify(movie)}
      movie={movie} />))
  const favMovieCards = movieCards.filter(movieCard => movieCard.props.movie.isFavorite)
  const hasNoFavs = !favMovieCards.length && <h1 style={{ color: 'white' }}>You need to favorite some damn movies.</h1>
  const _class = props.isPopup ? 'Carousel blur' : 'Carousel'

  return (
    <Fragment>
      <section className={_class}>
        <Switch>
          <Route path='/favorites' render={() => (
            <Fragment>
              <h2>Favorite Movies</h2>
              {(hasNoFavs || favMovieCards)}</Fragment>)} />

          <Route path='/' render={() => (
            <Fragment>
              <h2>Recent Movies</h2>
              {movieCards}</Fragment>)} />
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