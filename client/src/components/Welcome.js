import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import CreateUser from './CreateUser';
import NavBar from './NavBar'

const StyledLoginDiv = styled.div`
    margin-top: 20px;
    form{
        background-color: #0097d4;
        margin: 0 10px;
        margin-top: 30px;
        border-radius: 15px;
        padding-bottom: 1em;
        div{
            text-align:left;
            padding: 10px;
            input{
                margin-left: 15px;
            }
            .passInput{
                margin-left: 20px;
                text-align:center;
            }
            label{
                color:white;
            }
        }
    }
    div{
        margin: 0 10px;
        h3{
            text-align:center;
        }
        h4{
            text-align:center;
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

const StyledLoginForm = styled.form`
    text-align:center;
    .loginButton{
        font-size: 15px;
    }
    
`

const StyledInstructions = styled.div`
    overflow-x:auto;
    height: 240px;
    border: 3.5px ridge #0097d4;
    border-radius: 10px;
    padding: 10px;
    padding-top:0;
`
class Welcome extends Component {
    state = {
        userName : '',
        users:[]
    }

    componentDidMount(){
        axios.get('/database/users/userNames')
        .then((res)=>{
          this.setState({users: res.data})
          // console.log(this.state.users)
          // const searchingName = this.state.users.find((user)=>{
          //   return user.name === "Girish Krishnan"
          // })
          // console.log(searchingName)
        })
      }

    handleSubmitLogin = (event) =>{
        event.preventDefault()
        console.log(this.state.users)
        const targetUser = this.state.users.find((user)=>{
            return user.name === this.state.userName
        })
        console.log(targetUser)
        this.props.history.push(`/user/${targetUser.id}`)
    }

    handleChange = (event) =>{
        const userInput = event.target.value
    
        const newUserName = userInput
        this.setState({userName: newUserName})
        console.log(this.state.userName)
    }

    submitNewUser = (newUser) =>{
        const targetUser = this.state.users.find((user)=>{
            return user.name === newUser.name
        })

        if (targetUser === undefined && newUser.name !== "") {
            axios.post(`/database/users/`, newUser)
            .then((res)=>{
                const userId = res.data._id
                console.log(userId)
                this.props.history.push(`/user/${userId}`)
            })
        }
        else{
            alert("Please enter another user name, this one is taken")
        }
        
    }

    render() {
        return (
            <StyledLoginDiv>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
                <div>
                    <h3>Welcome To Velocity</h3>
                    <StyledInstructions>
                        <h4>Please scroll down and read our getting started blurb to understand what velocity is and how to get the most out of it for yourself and for any organizations you might be a part of. </h4>
                        <p>Velocity is designed to help individuals and organizations explore their values, to reinforce their values and to refine their values. 
                            <br/>
                            We aim to provide a space to keep coming back to as organizations and individuals change, to see what the direction of that change is or should be.
                            <br/>
                            Now that you know what we are about, let's explore how to utilize velocity.
                            <br/>
                            Velocity has three main components
                            <ul>
                                <li>New Quotes</li>
                                <li>Velocity Board</li>
                                <li>Quotes Board</li>
                            </ul>
                            <h5>New Quotes</h5>
                            The New Quote section is available through your home page and shows you a random quote from a person of impact or cultural sayings that have stood the test of time. The purpose of this section is to expose the user to values or expressions of values they have not seen before, where some of them might be able to capture the vague direction the user feels pulled towards in a much more clear way. 
                            <h5>Velocity Board</h5>
                            This section is a place to store the values and quotes that seem to resonate most, that define where you are moving to. It helps define your velocity. It's not about where you are at or how fast you are currently going, it's about what direction you and speed you are changing to. As such, we believe it's much more productive and impactful to choose a handful, ten at the most, values that define your path the most than choose any and all quotes that might resonate to a degree, that is what the Quote Board is for.
                            <h5>Quote Board</h5>
                            This section is the place to store any and all of the quotes and values that resonate, to a degree but maybe not enough for you to confidently say this is a top priority or value right now. The Quote Board provides a space to store any and all of these quotes, so that you can come back and easily find quotes that might have resonated and might become more relavant in the future or deserve a second look.
                            <h5>That's it!</h5>
                            Now go ahead and make a new account, and get started figuring out your velocity!
                        </p>
                    </StyledInstructions>
                </div>
                <StyledLoginForm onSubmit={this.handleSubmitLogin}> 
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

               <StyledButton className="loginButton" type="submit">Login</StyledButton>
                </StyledLoginForm>

                <StyledCreateAccountDiv>
                    <CreateUser submitNewUser={this.submitNewUser}/>
                </StyledCreateAccountDiv>

            </StyledLoginDiv>
        );
    }
}

export default Welcome;