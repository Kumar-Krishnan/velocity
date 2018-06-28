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
        })
    }
    render() {
        
        return (
            <div>
                
            </div>
        );
    }
}

export default UserAccount;