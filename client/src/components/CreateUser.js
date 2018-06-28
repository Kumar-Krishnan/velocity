import React, { Component } from 'react';
import styled from 'styled-components'

const CreateUserWrapper = styled.div`
    text-align: center;
`

const CreateUserBox = styled.div`
    width: 40vw;
    display: inline-block;
`

class CreateUser extends Component {
    render() {
        return (
            <CreateUserWrapper>
                <h1>Sign Up For A New Account!</h1>
                <CreateUserBox>
                    <form onSubmit={this.handleSubmit}> 
                    <div>
                    <label>User Name:</label>
                    <input
                    //    type="text"
                    //    name="userName"
                    //    value={this.state.userName}
                    //    onChange={this.handleChange}
                    />

                    </div>

                    <div>
                        <label>Password: </label>
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