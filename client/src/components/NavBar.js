import React, { Component } from 'react';
import styled from 'styled-components'

const GridNavBar = styled.div`
    display: grid;
    grid-template-columns: 20vw 20vw 20vw 20vw;
    justify-content: space-evenly;
    margin-top: 10px;
    div{
        border: 2px solid black;
    }
`

class NavBar extends Component {
    handleHome = (event) =>{
        event.preventDefault()
        if (this.props.userId !== undefined){
            this.props.history.push(`/user/${this.props.userId}`)
        }
        else{
            alert("Please login or choose a valid user profile")
        }
    }
    handleQuotes = (event)=>{
        event.preventDefault()
        if (this.props.userId !== undefined){
            this.props.history.push(`/user/${this.props.userId}/quotes`)
        }
        else{
            alert("Please login or choose a valid user profile")
        }
    }
    render() {
        return (
            <GridNavBar className="grid">
                <div onClick={this.handleHome}>Home</div>
                <div>Values</div>
                <div onClick={this.handleQuotes}>Quotes</div>
                <div>Settings</div>
            </GridNavBar>
        );
    }
}

export default NavBar;