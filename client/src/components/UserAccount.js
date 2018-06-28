import React, { Component } from 'react';
import axios from 'axios'
class UserAccount extends Component {

    state = {
        user: []
    }
    componentDidMount(){
        axios.get(`/database/users/${this.props.match.params.userId}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({user: res.data})
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
    render() {
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
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
            </div>
        );
    }
}

export default UserAccount;