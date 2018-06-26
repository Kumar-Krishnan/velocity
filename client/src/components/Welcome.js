import React, { Component } from 'react';
import styled from 'styled-components'

const StyledLoginDiv = styled.div`
    margin-top: 20px;
    form{
        background-color: #0097d4;
        margin: 0 10px;
        border-radius: 15px;
        div{
            text-align:left;
            padding: 10px;
            input{
                margin-left: 15px;
            }
            .passInput{
                margin-left: 20px;
            }
            label{
                color:white;
            }
        }
    }
    
`
const StyledButton = styled.button`
    padding: 10px 50px;
    background-color: rgb(178, 141, 248);
    border-radius: 10px;
`

const StyledCreateAccountDiv = styled.div`
    margin: 40px 15px 0 15px;
    height:500px;
    background-color: rgb(198, 198, 255);
    border-radius: 15px;

`
class Welcome extends Component {
    render() {
        return (
            <StyledLoginDiv>
                <form>
                <div>
                   <label>User Name:</label>
                   <input/>

               </div>

               <div>
                   <label>Password: </label>
                   <input className="passInput"/>
               </div>

               <StyledButton>Login</StyledButton>
                </form>

                <StyledCreateAccountDiv>
                    SIGN UP!
                </StyledCreateAccountDiv>

            </StyledLoginDiv>
        );
    }
}

export default Welcome;