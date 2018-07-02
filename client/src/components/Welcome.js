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