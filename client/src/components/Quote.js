import React, { Component } from 'react';
import styled from 'styled-components'

const QuoteTextBox = styled.div`
    border: 3px solid black
`

const authorTextBox = styled.div`
    border: 3px solid white;
`
class Quote extends Component {

    handleValueSubmit = (event) =>{
        event.preventDefault()
        this.props.addToValueBoard(this.props.quote)
    }
    render() {
        return (
            <div>
                <QuoteTextBox>
                    {this.props.quote.text}
                </QuoteTextBox>
                <div>
                    {this.props.quote.author}
                </div>
                <button x="y" content={this.props.quote._id} author={this.props.quote.author} onClick={this.handleValueSubmit}>Add to Values</button>
            </div>
        );
    }
}
//onClick={()=>this.props.function()}
export default Quote;