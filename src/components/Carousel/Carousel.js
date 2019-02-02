import React, { Fragment } from 'react'
import Movie from '../../containers/Movie/Movie'
import { connect } from 'react-redux'
import { Route, match, withRouter, Link } from 'react-router-dom'
import Popup from '../Popup/Popup'
import { setLoginPrompt } from '../../actions'
import './Carousel.scss'

const Carousel = (props) => {
  const { movies, user, showLoginPrompt, setLoginPrompt } = props

  const movieCards = movies.map(movie => (
    <Movie
      key={JSON.stringify(movie)}
      user={user}
      movie={movie}
      setLoginPrompt={setLoginPrompt} />
  ))

  return (<Fragment>
    <div className='Carousel'>{movieCards}</div>
    {
      showLoginPrompt && <div>
        <p>Would you like to create an account?</p>
        <Link to='/create-user'>YUSH</Link>
        <button onClick={() => setLoginPrompt(false)}>NAH</button>
      </div>
    }
    <Route path='/movies/:id' render={({ match }) => {
      const movie = movies.find(movie => movie.id === parseInt(match.params.id))

      if (!movie) {
        return <div> Movie does not exist</div>
      }

      return <Popup movie={movie} user={user} setLoginPrompt={setLoginPrompt} />
    }} />
  </Fragment>)
}

const mapStateToProps = (state) => ({
  movies: state.movies,
  user: state.user,
  showLoginPrompt: state.showLoginPrompt
})
const mapDispatchToProps = (dispatch) => ({
  setLoginPrompt: (bool) => dispatch(setLoginPrompt(bool))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Carousel))
