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
                    //    onChange={this.handleChange}
                    />

                    </div>

                    <div>
                        <label>Password: </label>
                        <input 
                        value="PlaceHolder"
                        name="password"
                        value={this.state.user.password}/>
                    </div>
                    <button type="submit">Save Changes</button>
                    </form>
            </div>
        );
    }
}

export default UserAccount;