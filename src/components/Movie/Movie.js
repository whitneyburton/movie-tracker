import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.scss'

const Movie = ({ movie, user, showLoginPrompt, setLoginPrompt }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className='Movie' >
      <Link to={`/movies/${movie.id}`} >
        <h1 className='movie-title'>{movie.title}</h1>
        <p className='movie-title'>{movie.release_date}</p>
        <img
          src={imgUrl + movie.poster_path}
          className='movie-poster'
          alt='movie poster'></img>
      </Link>
      <button className='favorite-btn'
        data-id={movie.id} onClick={() => setLoginPrompt(!user)}>Add To Favorites </button>




    </div>
  )
}

export default Movie
