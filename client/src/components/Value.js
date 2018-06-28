import React, { Component } from 'react';
import styled from 'styled-components'

const ValueBox = styled.div`
    background-color: gold;
`
class Value extends Component {

    handleValueRemove = (event)=>{
        event.preventDefault()
        this.props.deleteFromValueBoard(this.props.value._id)
    }

    render() {
        return (
            <ValueBox>
                <div>
                    {this.props.value.text}
                </div>
                <div>
                    {this.props.value.author}
                </div>
                <button onClick={this.handleValueRemove}>Remove Value</button>
            </ValueBox>
        );
    }
}

export default Value;