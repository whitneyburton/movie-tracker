import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchMovies } from '../../api/'
import { setMovies } from '../../actions'
import { Home } from '../../components/'
import { Login, CreateUser } from '../../containers/'
import '../../styles/main.scss'

export class App extends Component {

  retrieveMovies = async () => this.props.setMovies(await fetchMovies())
  
  componentDidMount = () => this.retrieveMovies()

  render() {
    return (
      <div className="App">
        <Switch> //Remove this and make login a popup!!
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