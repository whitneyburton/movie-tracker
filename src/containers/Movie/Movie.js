import React from 'react'
import './Movie.scss'

const Movie = ({movie}) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className='Movie'>
      <h1 className='movie-title'>{movie.title}</h1>
      <p className='movie-title'>{movie.release_date}</p>
      <img src={imgUrl + movie.poster_path} alt='movie poster'></img>
    </div>
  )
}

export default Movie;