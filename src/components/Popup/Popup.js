import React from 'react'
import { Link } from 'react-router-dom'

const Popup = ({ movie, user, setLoginPrompt }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'

  return (
    <div>
      <Link to='/'>x</Link>
      <h1 className='movie-title'>{movie.title}</h1>
      <p className='movie-title'>{movie.release_date}</p>

      <img
        src={imgUrl + movie.poster_path}
        className='movie-poster'
        alt='movie poster'></img>
      <button className='favorite-btn' onClick={() => setLoginPrompt(!user)}>Add To Favorites </button>

    </div>)
}

export default Popup
