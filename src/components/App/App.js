import React, { Component } from 'react';
import './App.scss';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import CreateUser from '../../containers/CreateUser/CreateUser';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/createUser' component={CreateUser} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

// to get all users :'/users',
// to sign in: '/users' // must have a body with email and password
// router.post('/users/new', db.createUser)
// router.post('/users/favorites/new', db.addFavorite)
// router.get('/users/:id/favorites', db.getAllFavorites)
// router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite)