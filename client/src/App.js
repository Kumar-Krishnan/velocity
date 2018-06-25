import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Welcome/>
      </div>
    );
  }
}

export default App;
