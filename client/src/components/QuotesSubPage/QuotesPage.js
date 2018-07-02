import React, { Component } from 'react';
import Quotes from '../Quotes';
import axios from 'axios'
import NavBar from '../NavBar'


class QuotesPage extends Component {
    state ={
        user: {
            quotes: []
        }
    }
    componentDidMount(){
        const currentUserId = this.props.match.params.userId
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
        })
    }
    clearAllQuotes = (event) =>{
        event.preventDefault()
        const changeToBeSent = {
            quotes:[]
        }
        axios.put(`/database/users/${this.props.match.params.userId}`,changeToBeSent)
        .then((res)=>{
            this.setState({user:res.data})
        })
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
    
    render() {
        return (
            
            <div>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
                <button onClick={this.clearAllQuotes}>Clear all Quotes.</button>
                <Quotes deleteFromQuoteBoard={this.deleteFromQuoteBoard}quotes={this.state.user.quotes} />
            </div>
        );
    }
}

export default QuotesPage;