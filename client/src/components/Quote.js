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
    padding: 0 20px;
    h6{
        margin:10px;
    }
    .author{
        margin-bottom: 5px;
        margin-top: 15px;
    }
    button{
        margin-bottom: 5px;
    }
`

const QuoteButtons = styled.button`
    background-color:transparent;
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
                <div className="author">
                    -  {this.props.quote.author}
                </div>
                <QuoteButtons onClick={this.handleValueSubmit}>Add to Values</QuoteButtons>
                <QuoteButtons onClick={this.handleQuoteDeleteSubmit}> Delete Quote</QuoteButtons>
            </QuoteBox>
        );
    }
}
export default Quote;