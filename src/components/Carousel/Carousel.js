import React from 'react'
import Movie from '../../containers/Movie/Movie'
import { connect } from 'react-redux'
import './Carousel.scss'

const Carousel = (props) => {
  const movies = props.movies.map(movie => (
    <Movie movie={movie} />
  ))
  return <div className='Carousel'>{movies}</div>
} 

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps)(Carousel)