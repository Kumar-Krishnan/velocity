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
class APIQuote extends Component {

    render() {
        return (
            <QuoteBox>
                <QuoteTextBox>
                    {this.props.quote}
                </QuoteTextBox>

            </QuoteBox>
        );
    }
}
export default APIQuote;