import React, { Component } from 'react';
import styled from 'styled-components'

const ValueBox = styled.div`
    border-radius: 10px;
    background-color: #ffffff;
    border: 2px solid #1e0b64;
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
const RemoveValueButton = styled.button`
    background-color:transparent;
`
class Value extends Component {

    handleValueRemove = (event)=>{
        event.preventDefault()
        this.props.deleteFromValueBoard(this.props.value._id)
    }

    render() {
        return (
            <ValueBox>
                <h6>{this.props.valueCount + 1}</h6>
                <div>
                    {this.props.value.text}
                </div>
                <div className="author">
                    -   {this.props.value.author}
                </div>
                <RemoveValueButton onClick={this.handleValueRemove}>Remove Value</RemoveValueButton>
            </ValueBox>
        );
    }
}

export default Value;