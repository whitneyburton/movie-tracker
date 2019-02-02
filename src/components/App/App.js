import React, { Component } from 'react'
import './App.scss'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { setMovies } from '../../actions'
import { fetchMovies } from '../../api/api'
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import CreateUser from '../../containers/CreateUser/CreateUser'

export class App extends Component {
  
  retrieveMovies = async () => {
    const movies = await fetchMovies()
    await this.props.setMovies(movies)
  }

  componentDidMount = async () => {
    await this.retrieveMovies()
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/create-user' component={CreateUser} />
          <Route path='/' component={Home} />
                 
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
