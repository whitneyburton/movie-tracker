import React from 'react'
import { Link } from 'react-router-dom'
import { postFavorite, fetchData, deleteFavorite } from '../../api'
import './Movie.scss'

const Movie = ({ movie, movies, user, setPromptLogin, setFavorites }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  const checkCanFavorite = async () => {
    await setPromptLogin(!user)
    if (user) {
      const addFavUrl = '/users/favorites/new'
      const retrieveFavUrl = `users/${user.id}/favorites`
      const deleteFavUrl = `users/${user.id}/favorites/${movie.id}`
      const favMovie = {
        movie_id: movie.id,
        user_id: user.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        vote_average: movie.vote_average,
        overview: movie.overview,
      }
      const deleteMovie = {
        user_id: user.id,
        movie_id: movie.id,
      }
      !movie.isFavorite ?
        await postFavorite(addFavUrl, favMovie) :
        await deleteFavorite(deleteFavUrl, deleteMovie)
      const favorites = await fetchData(retrieveFavUrl)
      setFavorites(favorites.data, movies)
    }
  }

  return (
    <div className='Movie' >
      <div>{movie.isFavorite ? '⭐' : '☆'}</div>
      <Link to={`/movies/${movie.id}`} >
        <h1 className='movie-title'>{movie.title}</h1>
        <p className='movie-title'>{movie.release_date}</p>
        <img
          src={imgUrl + movie.poster_path}
          className='movie-poster'
          alt='movie poster'></img>
      </Link>
      <button className='favorite-btn'
        data-id={movie.id} onClick={() => checkCanFavorite()}>Add To Favorites </button>
    </div>
  )
}

export default Movie
