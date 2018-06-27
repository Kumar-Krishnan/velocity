import React, { Component } from 'react';
import styled from 'styled-components'

const ValueBox = styled.div`
    background-color: gold;
`
class Value extends Component {
    
    render() {
        return (
            <ValueBox>
                <div>
                    {this.props.value.text}
                </div>
                <div>
                    {this.props.value.author}
                </div>
            </ValueBox>
        );
    }
}

export default Value;