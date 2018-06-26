import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.quote.text}
                </div>
                <div>
                    {this.props.quote.author}
                </div>
            </div>
        );
    }
}

export default Quote;