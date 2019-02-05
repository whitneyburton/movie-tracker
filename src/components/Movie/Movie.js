import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { postData, getData, deleteData } from '../../api'
import { setShouldPromptLogin, setFavorites, setPopup } from '../../actions'
import { connect } from 'react-redux'
import './Movie.scss'

export const Movie = (
  {
    movie, user, setShouldPromptLogin, setFavorites, isPopup, setPopup
  }
) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  const checkCanFavorite = async () => {
    await setShouldPromptLogin(!user)
    if (user) {
      const pathToAddFav = '/users/favorites/new'
      const pathToGetFav = `users/${user.id}/favorites`
      const pathToDeleteFav = `${pathToGetFav}/${movie.id}`
      try {
        !movie.isFavorite ?
          await postData(pathToAddFav, movie) :
          await deleteData(pathToDeleteFav, movie)
        const favorites = await getData(pathToGetFav)
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
      frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen></iframe>
  }
  const _class = isPopup ? 'popup' : 'Movie'

  return (
    <div className={_class} >
      {isPopup && <Fragment>
        <Link className='close-popup' onClick={() => setPopup(false)} to='/'>X</Link>
        <h1 className='movie-title'>{movie.title}</h1>
        <hr/>
        <p className='movie-release'>Released: {movie.release_date}</p>
        <hr/>
        {getTrailer()}
        <hr/>
        <p className='movie-description'>{movie.overview}</p>
        <hr/>
        <p className='movie-vote'>Average rating: {movie.vote_average}</p>
      </Fragment>}

      {!isPopup && getImage()}

      <span className='favorite-btn' onClick={() => checkCanFavorite()}>{movie.isFavorite ? '⭐️' : '☆'}</span>
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