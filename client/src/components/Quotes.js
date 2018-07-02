import React, { Component } from 'react';
import Quote from './Quote'
import styled from 'styled-components'

const StyledQuoteBoard = styled.div`
    background-color: #4291c3;
    border-radius: 7px;
    padding: 20px 10px
    margin: 0 4vw;
    border:1px solid black;

`
const StyledQuoteBox = styled.div`
    background-color: #4291c3;
    padding: 20px 10px;
    padding-top: 5px;
    margin-bottom: 40px;
    max-height: 500px;
    overflow-x:auto;
    border: 3.5px ridge #a789ee;
    text-align:center;
`
const StyleQuoteBoardHeader = styled.h3`
    text-align: center;
    color: #1703ff;
    font-size: 1.5em;
    background-color: #ffffff;
    border-radius: 5px;
    border: 3.5px ridge #a789ee; 
    padding: .75em 0; 
    margin-top: 0; 

`
class Quotes extends Component {
    
    render() {
        if (this.props.quotes === undefined) {
            return null
        }
        return (
            <StyledQuoteBoard>
                <StyleQuoteBoardHeader>Quotes Board</StyleQuoteBoardHeader>
                <StyledQuoteBox>
                    <h5>Scroll down to explore further</h5>
                    {
                        this.props.quotes.map((quote, i)=>{
                            return <Quote key={i} quote={quote} deleteFromQuoteBoard={this.props.deleteFromQuoteBoard} addToValueBoard={this.props.addToValueBoard}/>
                        })
                    }
                </StyledQuoteBox>
            </StyledQuoteBoard>
        );
    }
}

export default Quotes;