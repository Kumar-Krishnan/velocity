import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Quotes from './Quotes';
import Values from './Values';
import RandomQuote from './RandomQuote';
import NavBar from './NavBar';

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
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
        })
        axios.get('/database/allQuotes')
        .then((res)=>{
            this.setState({randomQuote:res.data})
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
                this.setState({user: userState, randomQuote: randomQuoteState})
            })
        }
        else{
            alert("That value already exists on your velocity board")
        }
        
    }
    deleteFromValueBoard = (valueId) => {
        const userId= this.state.user._id
        axios.delete(`/database/users/${userId}/values/${valueId}`)
        .then(()=>{
            return axios.get(`/database/users/${userId}`)
        })
        .then((res)=>{
            this.setState({user: res.data})
        })
    }

    addToQuoteBoard = (quote) => {
        const newQuote = {
            text: quote.text,
            author: quote.author
        }
        const userId= this.state.user._id
        const checker = this.state.user.quotes.find((ogQuote)=>{
            return ogQuote.text === quote.text
        })

        let userState = []
        let randomQuoteState = []

        if (checker === undefined){
            axios.post(`/database/users/${userId}/quotes`, newQuote)
            .then(()=>{
                return axios.get(`/database/users/${userId}`)
            })
            .then((res1)=>{
                userState = res1.data
                return axios.get(`/database/allQuotes`)
            })
            .then((res2)=>{
                randomQuoteState = res2.data
                this.setState({user: userState, randomQuote: randomQuoteState})
            })
        }
        else{
            alert("That quote already exists on the your quote board")
        }
    }

    deleteFromQuoteBoard = (quoteId) => {
        const userId= this.state.user._id
        axios.delete(`/database/users/${userId}/quotes/${quoteId}`)
        .then(()=>{
            return axios.get(`/database/users/${userId}`)
        })
        .then((res)=>{
            this.setState({user: res.data})
        })
    }

    newRandomQuote = () =>{
        return axios.get(`/database/allQuotes`)
        .then((res)=>{
            this.setState({randomQuote: res.data})
        })
    }

    render() {
        return (
            <div>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
                <HeaderBox>
                    <h3>Hello {this.state.user.name}</h3>
                    <RandomQuote quote={this.state.randomQuote} newRandomQuote={this.newRandomQuote} addToQuoteBoard={this.addToQuoteBoard} addToValueBoard={this.addToValueBoard}/>
                    <Values values={this.state.user.tenValues} deleteFromValueBoard={this.deleteFromValueBoard} />
                    <Quotes quotes={this.state.user.quotes} deleteFromQuoteBoard={this.deleteFromQuoteBoard} addToValueBoard={this.addToValueBoard}/>
                </HeaderBox>
            </div>
        );
    }
}

export default HomePage;