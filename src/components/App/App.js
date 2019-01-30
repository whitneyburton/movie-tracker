import React, { Component } from 'react';
import './App.scss';
import { Route, NavLink } from 'react-router-dom';
import Nav from '../Nav/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;