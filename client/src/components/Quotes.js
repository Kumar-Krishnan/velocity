import React, { Component } from 'react';
import Quote from './Quote'
import styled from 'styled-components'

const StyledQuoteBox = styled.div`
    margin: 0 4vw;
    background-color: #4291c3;
    border-radius: 7px;
    padding: 20px 10px
    margin-bottom: 40px;
    border:1px solid black;
    max-height: 500px;
    overflow-x:auto;
`
class Quotes extends Component {
    
    render() {
        if (this.props.quotes === undefined) {
            return null
        }
        return (
            <div>
                <StyledQuoteBox>
                    {
                        this.props.quotes.map((quote, i)=>{
                            return <Quote key={i} quote={quote} deleteFromQuoteBoard={this.props.deleteFromQuoteBoard} addToValueBoard={this.props.addToValueBoard}/>
                        })
                    }
                </StyledQuoteBox>
            </div>
        );
    }
}

export default Quotes;