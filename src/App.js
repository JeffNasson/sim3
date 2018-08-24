import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './route'
import Nav from './component/Nav/Nav'
import {HashRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        {Routes}
        <Nav />
        
      </div>
    );
  }
}

export default App;
