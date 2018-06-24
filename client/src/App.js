import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Home/>
      </div>
    );
  }
}

export default App;
