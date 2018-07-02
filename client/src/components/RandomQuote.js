import React, { Component } from 'react';
import styled from 'styled-components'

const StyledRandomQuoteDisplayBox = styled.div`
    height: 210px;
    border: 3.5px ridge #4291c3;
    border-radius: 10px;
    margin: 0 20px;
    font-size: 1.18em;
    background-color: #ffffff;
    h4{
        margin-left 15px;
        margin-right: 15px;
    }
`
const StyledNewQuoteButton = styled.button`
    border: 3px outset #4291c3;
    background-color: #ffffff;
    font-size: 1em;
    border-radius: 5px;
`

const StyledButtonBox = styled.div`
    display: grid;
    grid-template-columns: 20vw 20vw 20vw;
    margin-top: 10px;
    justify-content: space-around;
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
                <StyledButtonBox>
                    <StyledNewQuoteButton onClick={this.handleNewRandomSubmit}> Another Quote</StyledNewQuoteButton>
                    <StyledNewQuoteButton onClick={this.handleNewRandomSubmit} onClick={this.handleValueSubmit}>Add to Values</StyledNewQuoteButton>
                    <StyledNewQuoteButton onClick={this.handleNewRandomSubmit} onClick={this.handleQuoteSubmit}> Add to Quotes</StyledNewQuoteButton>
                </StyledButtonBox>
            </div>
        );
    }
}

export default RandomQuote;