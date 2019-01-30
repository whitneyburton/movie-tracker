import React, { Component } from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import Login from '../../containers/Login/Login'
import Home from '../Home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Login}/>
        <Route path='/home' component={Home} />
      </div>
    );
  }
}

export default App;