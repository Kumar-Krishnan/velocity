import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHomeDiv = styled.div`
    background-color:red;
`

class Home extends Component {
    render() {
        return (
            <StyledHomeDiv>
                How do you do
            </StyledHomeDiv>
        );
    }
}

export default Home;