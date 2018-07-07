import React, { Component } from 'react';
import axios from 'axios'
import NavBar from '../NavBar';
import APIQuotes from './APIQuotes';


class APIQuotesHomePage extends Component {

    state = {
        quotes: [],
    }

    componentDidMount(){
            axios.get('/database/apiQuotes')
            .then((res)=>{
            console.log(res.data)
            this.setState({quotes: res.data})
            })

        
    }
    render() {
        return (
            <div>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
                <h3>Return to Login</h3>
                <APIQuotes quotes={this.state.quotes}/>
            </div>
        );
    }
}

export default APIQuotesHomePage;