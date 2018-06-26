import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import axios from 'axios'



class App extends Component {

  state = {
    users:[]
  }

  componentDidMount(){
    axios.get('database/users/userNames')
    .then((res)=>{
      this.setState({users: res.data})
      console.log(this.state.users)
    })
  }
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
