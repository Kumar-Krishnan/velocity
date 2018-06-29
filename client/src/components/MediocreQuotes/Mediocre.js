import React, { Component } from 'react';
import axios from 'axios'


class Mediocre extends Component {
    componentDidMount(){
        axios.get('/database/api')
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

export default Mediocre;