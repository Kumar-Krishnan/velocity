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
        randomQuote: [],
        // borrowed from stack overflow
        key: Math.random()
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
        const newValue = {
            text: value.text,
            author: value.author
        }
        const userId= this.state.user._id
        const checker = this.state.user.tenValues.find((ogValue)=>{
            return ogValue.text === value.text
        })

        let userState = []
        let randomQuoteState = []

        if (checker === undefined){
            axios.post(`/database/users/${userId}/values`, newValue)
            .then(()=>{
                return axios.get(`/database/users/${userId}`)
            })
            .then((res1)=>{
                userState = res1.data
                return axios.get(`/database/allQuotes`)
            })
            .then((res2)=>{
                randomQuoteState = res2.data
                        console.log(randomQuoteState,userState)
            })   


        }
        else{
            console.log("Stop it!")
        }
        
    }

    

    render() {
        return (
            <div>
                <HeaderBox>
                    <h3>Hello {this.state.user.name}</h3>
                    <RandomQuote quote={this.state.randomQuote} addToValueBoard={this.addToValueBoard}/>
                    <Values values={this.state.user.tenValues} />
                    <Quotes quotes={this.state.user.quotes} addToValueBoard={this.addToValueBoard}/>
                </HeaderBox>
            </div>
        );
    }
}

export default HomePage;