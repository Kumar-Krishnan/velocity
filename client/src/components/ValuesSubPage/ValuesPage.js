import React, { Component } from 'react';
import axios from 'axios'
import Values from '../Values';

class ValuesPage extends Component {
    state ={
        user: {
            tenValues: []
        }
    }
    componentDidMount(){
        const currentUserId = this.props.match.params.userId
        console.log(currentUserId)
        axios.get(`/database/users/${currentUserId}`)
        .then((res)=>{
            this.setState({user: res.data})
        })
    }
    
    render() {
        return (
            <div>
                <Values values={this.state.user.tenValues}/>
            </div>
        );
    }
}

export default ValuesPage;