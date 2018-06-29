import React, { Component } from 'react';
import axios from 'axios'
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
            <div>
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
            </div>
        );
    }
}

export default UserAccount;