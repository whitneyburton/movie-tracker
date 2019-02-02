import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../../api/'
import { setMovies } from '../../actions'
import { Home } from '../../components/'
import { Login, CreateUser } from '../../containers/'
import '../../styles/main.scss'

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
        <Switch>//Remove this and make login a popup!!
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
