import React, { Component } from 'react';

class Value extends Component {
    
    render() {
        return (
            <div>
                <div>
                    {this.props.value.text}
                </div>
                <div>
                    {this.props.value.author}
                </div>
            </div>
        );
    }
}

export default Value;