import React, { Component } from 'react';
import styled from 'styled-components'

const QuoteTextBox = styled.div`
    border: 3px solid black
`

const authorTextBox = styled.div`
    border: 3px solid white;
`
class Quote extends Component {
    render() {
        return (
            <div>
                <QuoteTextBox>
                    {this.props.quote.text}
                </QuoteTextBox>
                <div>
                    {this.props.quote.author}
                </div>
            </div>
        );
    }
}

export default Quote;