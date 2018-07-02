import React, { Component } from 'react';
import styled from 'styled-components'

const CreateUserWrapper = styled.div`
    text-align: center;
    h3{
        margin-bottom: 10px;
    }
    
`

const CreateUserBox = styled.div`
    width: 50vw;
    display: inline-block;
    
    .newUserForm{
        margin-top: 10px;
        text-align:center;
        .userBox{
            text-align:center;
            label{
                display:inline;   
            }
            input{
            margin-left: 0px;
            }
        }
        .passBox{
            text-align:center;
            label{
                display:inline;   
            }
            .passInput{
            margin-left: 0px;
            text-align:center;
            }
        }
    }
`



class CreateUser extends Component {

    state = {
        newUserName: ''
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const newUser = {
            name: this.state.newUserName,
            password: "jello"
        }
        this.props.submitNewUser(newUser)

    }
    
    handleChange = (event) =>{
        const userInput = event.target.value
        const newUserName = userInput
        this.setState({newUserName: newUserName})
    }

    render() {
        return (
            <CreateUserWrapper>
                <CreateUserBox>
                    <h3>Sign Up For A New Account!</h3>
                    <form className="newUserForm" onSubmit={this.handleSubmit}> 
                        <div className="userBox">
                            <label>New User Name</label>
                            <input
                            type="text"
                            name="userName"
                            value={this.state.userName}
                            onChange={this.handleChange}
                            />

                        </div>

                        <div className="passBox">
                            <label>Create Password</label>
                            <input value="PlaceHolder" readOnly className="passInput"/>
                        </div>
                        <button type="submit">Create USER!</button>
                    </form>
                </CreateUserBox>
            </CreateUserWrapper>
            
        );
    }
}

export default CreateUser;