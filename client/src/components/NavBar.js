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
    render() {
        return (
            <GridNavBar className="grid">
                <div>Home</div>
                <div>Values</div>
                <div>Quotes</div>
                <div>Settings</div>
            </GridNavBar>
        );
    }
}

export default NavBar;