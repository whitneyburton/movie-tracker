import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'
import CreateUser from '../../containers/CreateUser/CreateUser';

class App extends Component {
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