import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Quotes from './Quotes';
import Values from './Values';


const HeaderBox = styled.div`
    text-align: center;
`

class HomePage extends Component {
    state = {
        user: []
    }

    componentDidMount(){
        const currentUserId = this.props.match.params.userId
        console.log(currentUserId)
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
            console.log(this.state.user.tenValues)
        })

        
    }
    render() {
        return (
            <div>
                <HeaderBox>
                    <h3>Hello {this.state.user.name}</h3>
                    <Values values={this.state.user.tenValues}/>
                    <Quotes quotes={this.state.user.quotes}/>
                </HeaderBox>
            </div>
        );
    }
}

export default HomePage;