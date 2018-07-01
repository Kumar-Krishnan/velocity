import React, { Component } from 'react';
import styled from 'styled-components'

const QuoteTextBox = styled.div`
    margin-top: 15px;
`

const QuoteBox= styled.div`
    border-radius: 10px;
    background-color: #ffffff;
    border: 2px solid green;
    margin-bottom: 15px;
    h6{
        margin:10px;
    }
    .author{
        margin-bottom: 5px;
    }
    button{
        margin-bottom: 5px;
    }
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