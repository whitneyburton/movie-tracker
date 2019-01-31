import React, { Component } from 'react'
import './App.scss'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setMovies } from '../../actions'
import apiKey from '../../API_KEY/movie_api_key'
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import CreateUser from '../../containers/CreateUser/CreateUser'

export class App extends Component {
  
  fetchMovies = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing${apiKey}`)
    const unfilteredMovies = await response.json()
    const movies = unfilteredMovies.results
    await this.props.setMovies(movies)
  }

  componentDidMount = async () => {
    await this.fetchMovies()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/createUser' component={CreateUser} />
        </Switch>
      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies)),
})

export default withRouter(connect(null, mapDispatchToProps)(App))

// to get all users :'/users',
// to sign in: '/users' // must have a body with email and password
// router.post('/users/new', db.createUser)
// router.post('/users/favorites/new', db.addFavorite)
// router.get('/users/:id/favorites', db.getAllFavorites)
// router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite)