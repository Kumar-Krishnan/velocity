import React, { Component } from 'react';
import styled from 'styled-components'

const StyledRandomQuoteDisplayBox = styled.div`
    height: 115px;
`

class RandomQuote extends Component {

    handleValueSubmit = (event) =>{
        event.preventDefault()
        const newValue = {
            text: this.props.quote.quoteText,
            author: this.props.quote.quoteAuthor
        }
        this.props.addToValueBoard(newValue)
    }

    handleQuoteSubmit = (event) =>{
        event.preventDefault()
        const newQuote = {
            text: this.props.quote.quoteText,
            author: this.props.quote.quoteAuthor
        }
        this.props.addToQuoteBoard(newQuote)
    }

    handleNewRandomSubmit = (event) =>{
        event.preventDefault()
        this.props.newRandomQuote()
    }

    render() {
        if (this.props.quote === undefined) {
            return null
        }
        return (
            <div>
                <StyledRandomQuoteDisplayBox>
                    <h4>{this.props.quote.quoteAuthor}</h4>
                    <h4>{this.props.quote.quoteText}</h4>
                </StyledRandomQuoteDisplayBox>
                <button onClick={this.handleNewRandomSubmit}> Show me another quote</button>
                <button onClick={this.handleNewRandomSubmit} onClick={this.handleValueSubmit}>Add to Values</button>
                <button onClick={this.handleNewRandomSubmit} onClick={this.handleQuoteSubmit}> Add to Quotes</button>
            </div>
        );
    }
}

export default RandomQuote;