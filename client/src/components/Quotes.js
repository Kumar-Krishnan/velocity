import React, { Component } from 'react';
import Quote from './Quote'
class Quotes extends Component {
    
    render() {
        if (this.props.quotes === undefined) {
            return null
        }
        return (
            <div>
                {
                    this.props.quotes.map((quote, i)=>{
                        return <Quote key={i} quote={quote}/>
                    })
                }
            </div>
        );
    }
}

export default Quotes;