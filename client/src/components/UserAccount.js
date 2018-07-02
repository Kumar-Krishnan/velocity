import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar'
import styled from 'styled-components'

const StyledAccountDiv = styled.div`
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
            }
            label{
                color:white;
            }
        }
    }
    
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
            console.log(this.props.match.params.userId)
            console.log(this.state.user.quotes)
        })
        
    }

    handleChange = (event) =>{
        const inputField = event.target.name
        const newValue = event.target.value
        const alteredUser = [...this.state.user]
        alteredUser[inputField] = newValue
        this.setState({user: alteredUser})
        console.log(this.state.user[inputField])
    }
    
    handleSubmitChange = (event) =>{
        event.preventDefault()
        let existingNames = []
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
            console.log(userToBeSent)
            axios.put(`/database/users/${this.props.match.params.userId}`,userToBeSent)
            .then((res)=>{
                console.log(res.data)
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
        console.log(changeToBeSent)
        axios.put(`/database/users/${this.props.match.params.userId}`,changeToBeSent)
        .then((res)=>{
            console.log(res.data)
            this.setState({user:res.data})
        })
    }

    render() {
        
        return (
            <StyledAccountDiv>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
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
                        value="PlaceHolder"
                        name="password"
                        value={this.state.user.password}
                        onChange={this.handleChange}/>
                    </div>
                    <button type="submit">Save Changes</button>
                    </form>
                    <button onClick={this.handleDeleteSubmit}> Delete User</button>
                    <div>
                        {/* <h4>{this.state.user.quotes.length}</h4> */}
                        <button onClick={this.clearAllQuotes}>Clear all Quotes.</button>
                    </div>
            </StyledAccountDiv>
        );
    }
}

export default UserAccount;