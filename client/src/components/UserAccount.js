import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar'
import styled from 'styled-components'

const StyledAccountDiv = styled.div`
    margin-top: 20px;
    background-color: #0097d4;
        margin: 0 10px;
        margin-top: 30px;
        border-radius: 15px;
        padding-bottom: 1em;
        text-align: center;
    form{
        margin-bottom: 20px;
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
        button{
            margin-top: 20px;
        }
    }
    
`

const UserButtons = styled.button`
    padding: 10px 50px;
    background-color: rgb(178, 141, 248);
    border-radius: 10px;
    font-weight: 900;
    font-size: .8em;
    width: 150px;
`


class UserAccount extends Component {

    state = {
        user: {
            quotes: []
        }
    }
    componentDidMount(){
        axios.get(`/database/users/${this.props.match.params.userId}`)
        .then((res)=>{
            this.setState({user: res.data})
        })
        
    }

    handleChange = (event) =>{
        const inputField = event.target.name
        const newValue = event.target.value
        const alteredUser = [...this.state.user]
        alteredUser[inputField] = newValue
        this.setState({user: alteredUser})
    }
    
    handleSubmitChange = (event) =>{
        event.preventDefault()
         axios.get('/database/users/userNames')
        .then((res)=>{
          const targetUser = res.data.find((user)=>{
            return user.name === this.state.user.name
          })
        if (this.state.user.name !== "" && this.state.user.password !== "" && targetUser === undefined ){
            const userToBeSent = {
                name: this.state.user.name,
                password: this.state.user.password
            }
            axios.put(`/database/users/${this.props.match.params.userId}`,userToBeSent)
            .then((res)=>{
            })
        }
        else{
            alert("Please enter a valid name and password.")
        }
        })
        
        
    }

    handleDeleteSubmit = () =>{
        axios.delete(`/database/users/${this.props.match.params.userId}`)
    }

    clearAllQuotes = (event) =>{
        event.preventDefault()
        const changeToBeSent = {
            quotes:[]
        }
        axios.put(`/database/users/${this.props.match.params.userId}`,changeToBeSent)
        .then((res)=>{
            this.setState({user:res.data})
        })
    }

    render() {
        
        if (this.state.user.quotes === undefined) {
            return null
        }

        return (
            <div>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
                <StyledAccountDiv>
                    <form onSubmit={this.handleSubmitChange}> 
                        <div>
                        <label>User Name:</label>
                        <input
                        type="text"
                        name="name"
                        value={this.state.user.name}
                        onChange={this.handleChange}
                        />

                        </div>

                        <div>
                            <label>Password: </label>
                            <input 
                            className="passInput"
                            value="PlaceHolder"
                            name="password"
                            value={this.state.user.password}
                            onChange={this.handleChange}/>
                        </div>
                        <UserButtons type="submit">Save Changes</UserButtons>
                        </form>
                        <UserButtons onClick={this.handleDeleteSubmit}> Delete User</UserButtons>
                </StyledAccountDiv>
            </div>
        );
    }
}

export default UserAccount;