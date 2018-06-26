import React, { Component } from 'react';
import axios from 'axios'

class HomePage extends Component {
    state = {
        user: []
    }

    componentDidMount(){
        const currentUserId = this.props.match.params.userId
        console.log(currentUserId)
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
            console.log(this.state.user)
        })

        
    }
    render() {
        return (
            <div>
                "Jello"
            </div>
        );
    }
}

export default HomePage;