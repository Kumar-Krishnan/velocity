import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Quotes from './Quotes';
import Values from './Values';
import RandomQuote from './RandomQuote';

const HeaderBox = styled.div`
    text-align: center;
`

class HomePage extends Component {
    state = {
        user: [],
        randomQuote: []
    }

    componentDidMount(){
        const currentUserId = this.props.match.params.userId
        console.log(currentUserId)
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
        })
        axios.get('/database/allQuotes')
        .then((res)=>{
            this.setState({randomQuote:res.data})
            console.log(this.state.randomQuote)
        }) 
    }

   addToValueBoard = (value) => {
        const newValue = value
        const userId = this.state.user._id
        console.log(userId,newValue)
    }

    

    render() {
        return (
            <div>
                <HeaderBox>
                    <h3>Hello {this.state.user.name}</h3>
                    <RandomQuote quote={this.state.randomQuote}/>
                    <Values values={this.state.user.tenValues}/>
                    <Quotes quotes={this.state.user.quotes} addToValueBoard={this.addToValueBoard}/>
                </HeaderBox>
            </div>
        );
    }
}

export default HomePage;