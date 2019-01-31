import React from 'react'
import './Movie.scss'

const Movie = ({movie}) => {
  return (
    <div className='Movie'>
      <h1 className='movie-title'>{movie.title}</h1>
      <p className='movie-title'>{movie.release_date}</p>
    </div>
  )
}

export default Movie;