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
    state = {
        userName : ''
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log(this.props.users)
        const targetUser = this.props.users.find((user)=>{
            return user.name === this.state.userName
        })
        console.log(targetUser)
    }

    handleChange = (event) =>{
        const userInput = event.target.value
    
        const newUserName = userInput
        this.setState({userName: newUserName})
        console.log(this.state.userName)
    }


    render() {
        return (
            <StyledLoginDiv>
                <form onSubmit={this.handleSubmit}> 
                <div>
                   <label>User Name:</label>
                   <input
                   type="text"
                   name="userName"
                   value={this.state.userName}
                   onChange={this.handleChange}
                   />

               </div>

               <div>
                   <label>Password: </label>
                   <input value="PlaceHolder" readOnly className="passInput"/>
               </div>

               <StyledButton type="submit">Login</StyledButton>
                </form>

                <StyledCreateAccountDiv>
                    SIGN UP!
                </StyledCreateAccountDiv>

            </StyledLoginDiv>
        );
    }
}

export default Welcome;