import React, { Component } from 'react';

class RandomQuote extends Component {
    render() {
        if (this.props.quote === undefined) {
            return null
        }
        return (
            <div>
                <h4>{this.props.quote.quoteAuthor}</h4>
                <h4>{this.props.quote.quoteText}</h4>
            </div>
        );
    }
}

export default RandomQuote;