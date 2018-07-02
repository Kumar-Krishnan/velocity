import React, { Component } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import axios from 'axios'
import {Link, Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import UserAccount from './components/UserAccount'
import QuotesPage from './components/QuotesSubPage/QuotesPage';
import ValuesPage from './components/ValuesSubPage/ValuesPage';
import Mediocre from './components/MediocreQuotes/Mediocre';
import styled from 'styled-components'

const PageWrapper = styled.div`
  background-color: #7100ff17;
  border-radius: 10px;
`

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

    const HomePageWrapper = (props) =>(
      <HomePage {...props}/>
    )

    return (
      <Router>
        <PageWrapper>
          <Switch>
            <Route exact path="/" render={WelcomePageWrapper}/>
            <Route exact path="/user/:userId/" render={HomePageWrapper}/>
            <Route exact path="/user/:userId/settings" component={UserAccount}/>
            <Route exact path="/user/:userId/quotes" component={QuotesPage}/>
            <Route exact path="/user/:userId/values" component={ValuesPage}/>
            <Route exact path="/mediocre" component={Mediocre}/>
          </Switch>
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
