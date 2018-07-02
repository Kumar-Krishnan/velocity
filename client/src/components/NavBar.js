import React, { Component } from 'react';
import styled from 'styled-components'

const GridNavBar = styled.div`
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw 15vw;
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
    handleValues = (event)=>{
        event.preventDefault()
        if (this.props.userId !== undefined){
            this.props.history.push(`/user/${this.props.userId}/values`)
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
    handleSettings = (event)=>{
        event.preventDefault()
        if (this.props.userId !== undefined){
            this.props.history.push(`/user/${this.props.userId}/settings`)
        }
        else{
            alert("Please login or choose a valid user profile")
        }
    }
    render() {
        return (
            <GridNavBar className="grid">
                <div onClick={this.handleHome}>Home</div>
                <div onClick={this.handleValues}>Values</div>
                <div onClick={this.handleQuotes}>Quotes</div>
                <div onClick={this.handleSettings}>Settings</div>
                <div >Exit</div>
            </GridNavBar>
        );
    }
}

export default NavBar;