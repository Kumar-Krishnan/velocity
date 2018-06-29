import React, { Component } from 'react';
import styled from 'styled-components'

const QuoteTextBox = styled.div`
    border: 3px solid black
`

const QuoteBox= styled.div`
    background-color:green;
`


class Quote extends Component {

    handleValueSubmit = (event) =>{
        event.preventDefault()
        this.props.addToValueBoard(this.props.quote)
    }
    handleQuoteDeleteSubmit = (event) =>{
        event.preventDefault()
        this.props.deleteFromQuoteBoard(this.props.quote._id)
    }
    render() {
        return (
            <QuoteBox>
                <QuoteTextBox>
                    {this.props.quote.text}
                </QuoteTextBox>
                <div>
                    {this.props.quote.author}
                </div>
                <button onClick={this.handleValueSubmit}>Add to Values</button>
                <button onClick={this.handleQuoteDeleteSubmit}> Delete Quote</button>
            </QuoteBox>
        );
    }
}
export default Quote;