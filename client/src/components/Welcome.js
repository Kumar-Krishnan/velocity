import React, { Component } from 'react';
import styled from 'styled-components'

const StyledHomeDiv = styled.div`
    background-color:green;
    margin-top: 20px;
    div{
        text-align:left;
        padding: 10px;
        input{
            margin-left: 15px;
        }
        .passInput{
            margin-left: 20px;
        }
    }
`

class Welcome extends Component {
    render() {
        return (
            <StyledHomeDiv>
               <div>
                   <label>User Name:</label>
                   <input/>

               </div>

               <div>
                   <label>Password: </label>
                   <input className="passInput"/>
               </div>
            </StyledHomeDiv>
        );
    }
}

export default Welcome;