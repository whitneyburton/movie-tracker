import React from 'react'
import { Link } from 'react-router-dom'
import { postData, getData, deleteData } from '../../api'
import { setShouldPromptLogin, setFavorites, setPopup } from '../../actions'
import { connect } from 'react-redux'
import './Movie.scss'

const Movie = ({ movie, user, setShouldPromptLogin, setFavorites, isPopup, setPopup }) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  const checkCanFavorite = async () => {
    await setShouldPromptLogin(!user)
    if (user) {
      const urlToAddFav = '/users/favorites/new'
      const urlToGetFav = `users/${user.id}/favorites`
      const urlToDelFav = `${urlToGetFav}/${movie.id}`
      try {
        !movie.isFavorite ?
          await postData(urlToAddFav, movie) :
          await deleteData(urlToDelFav, movie)
        const favorites = await getData(urlToGetFav)
        console.log(favorites, user)
        setFavorites(favorites, user.id)
      } catch (error) {
        console.log(error)
      }
    }
  }
  const getImage = () => {
    return <Link to={`/movies/${movie.id}`}  >
      <img
        onClick={() => setPopup(true)}
        src={imgUrl + movie.poster_path}
        className='movie-poster'
        alt='movie poster'></img>
    </Link>
  }
  const getTrailer = () => {

    return <iframe width="560" height="315" title={movie.title}
      src={`https://www.youtube.com/embed/${movie.trailer}`}
      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
  }
  const _class = isPopup ? 'popup' : 'Movie'
  return (
    <div className={_class} >
      {isPopup && <Link onClick={() => setPopup(false)} to='/'>x</Link>}
      {isPopup && <h1 className='movie-title'>{movie.title}</h1>}
      {isPopup && <p className='movie-title'>{movie.release_date}</p>}
      {isPopup && getTrailer()}

      {!isPopup && getImage()}

      <span className='favorite-btn' onClick={() => checkCanFavorite()}>{movie.isFavorite ? '⭐' : '☆'}</span>
    </div>
  )
}
const mapStateToProps = (state) => ({
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  setFavorites: (favorites, user_id) => dispatch(setFavorites(favorites, user_id)),
  setShouldPromptLogin: (bool) => dispatch(setShouldPromptLogin(bool)),
  setPopup: (bool) => dispatch(setPopup(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Movie)