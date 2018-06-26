import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import axios from 'axios'
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage';



class App extends Component {

  state = {
    users:[]
  }

  componentDidMount(){
    axios.get('database/users/userNames')
    .then((res)=>{
      this.setState({users: res.data})
      // console.log(this.state.users)
      // const searchingName = this.state.users.find((user)=>{
      //   return user.name === "Girish Krishnan"
      // })
      // console.log(searchingName)
    })
  }


  render() {
    //what is the props in paranthesis doing here?
    const WelcomePageWrapper = (props) =>(
      <Welcome users={this.state.users} {...props}/>
    )
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" render={WelcomePageWrapper}/>
            <Route exact path="/user/:userId/" component={HomePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
