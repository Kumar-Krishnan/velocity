import React, { Component } from 'react';
import axios from 'axios'
import Values from '../Values';
import NavBar from '../NavBar'

class ValuesPage extends Component {
    state ={
        user: {
            tenValues: []
        }
    }
    componentDidMount(){
        const currentUserId = this.props.match.params.userId
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
        })
    }

    deleteFromValueBoard = (valueId) => {
        const userId= this.state.user._id
        axios.delete(`/database/users/${userId}/values/${valueId}`)
        .then(()=>{
            return axios.get(`/database/users/${userId}`)
        })
        .then((res)=>{
            this.setState({user: res.data})
        })
    }
    
    render() {
        return (
            <div>
                <NavBar userId={this.props.match.params.userId} {...this.props}/>
                <Values deleteFromValueBoard={this.deleteFromValueBoard} values={this.state.user.tenValues}/>
            </div>
        );
    }
}

export default ValuesPage;