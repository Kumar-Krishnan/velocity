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
                <button id={this.props.quote._id} onClick={this.props.handleAddingToValueBoard}>Add to Values</button>
            </div>
        );
    }
}

export default Quote;