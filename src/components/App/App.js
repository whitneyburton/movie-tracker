import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import CreateUser from '../../containers/CreateUser/CreateUser';

class App extends Component {

  async componentDidMount() {
    const res = await fetch('http://localhost:3000/api//users')
    const a = await res.json()
    console.log(a.data);
  }
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path='/' component={Login}/>
        <Route  path='/createUser' component={CreateUser}/>
          <Route path='/home' component={Home} />
          </Switch>
      </div>
    );
  }
}

export default App;

// to get all users :'/users',
// to sign in: '/users' // must have a body with email and password
// router.post('/users/new', db.createUser)
// router.post('/users/favorites/new', db.addFavorite)
// router.get('/users/:id/favorites', db.getAllFavorites)
// router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite)