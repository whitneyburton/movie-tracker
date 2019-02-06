import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMovies, getData } from '../../api/'
import { setMovies, setLoginPrompt, setPopup, setUser, setFavorites } from '../../actions'
import { View, CreateAccountPrompt } from '../../components/'
import { Login, CreateUser } from '../../containers/'
import PropTypes from 'prop-types'
import '../../styles/main.scss'

export class App extends Component {

  setUserFavorites = async (userID) => {
    const retrieveFavPath = `users/${userID}/favorites`
    const favorites = await getData(retrieveFavPath)
    this.props.setFavorites(favorites, userID)
    this.props.setPopup(false)
  }
  
  componentDidMount = async () => {
    if (localStorage.getItem('users')) {
      const { name, id } = JSON.parse(localStorage.getItem('users'))
      this.props.setUser({ name, id })
      this.setUserFavorites(id)
    }
    let movies
    if (!localStorage.getItem('movies')) {
      try {
        movies = await getMovies('now_playing')
        for (let movie of movies) {
          const path = movie.id + '/videos'
          const trailerKeys = await getMovies(path)
          movie.trailer = trailerKeys[0].key
        }
        localStorage.setItem('movies', JSON.stringify(movies))
      } catch (error) {
        console.log('Error getting data')
      }
    }
    else {
      movies = JSON.parse(localStorage.getItem('movies'))
    }
    this.props.setMovies(movies)
  }

  render() {
    const { canPopup, setPopup, setLoginPrompt } = this.props
    return (
      <div className="App">
        <Route path='/login' component={Login} />
        <Route path='/create-user' render={() => <CreateUser setPopup={setPopup} />} />
        <Route path='/' render={() => canPopup && <CreateAccountPrompt
          setPopup={setPopup}
          setLoginPrompt={setLoginPrompt} />} />
        <Route path='/' render={() => <View movies={this.props.movies} />} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  movies: state.movies,
  canPopup: state.shouldPromptLogin,
  user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
  setUser: (user) => dispatch(setUser(user)),
  setLoginPrompt: (bool) => dispatch(setLoginPrompt(bool)),
  setPopup: (bool) => dispatch(setPopup(bool)),
  setFavorites: (favorites, user_id) => dispatch(setFavorites(favorites, user_id)),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

App.propTypes = {
  movies: PropTypes.array,
  canPopup: PropTypes.bool,
  user: PropTypes.object,
  setMovies: PropTypes.func,
  setLoginPrompt: PropTypes.func,
  setPopup: PropTypes.func,
}