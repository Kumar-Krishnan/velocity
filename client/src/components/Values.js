import React, { Component } from 'react';
import Value from './Value'
import styled from 'styled-components'

const StyledValueBox = styled.div`
    margin: 0 4vw;
`
class Values extends Component {
    render() {
        if (this.props.values === undefined) {
            return null
        }
        return (
            <div>
                <h3>Kumar Krishnan's Current Trajectory</h3>
                <StyledValueBox>
                    
                    {
                        this.props.values.map((value, i)=>{
                            return <Value key={i} valueCount={i} deleteFromValueBoard={this.props.deleteFromValueBoard} value={value} />
                        })
                    }
                </StyledValueBox>
            </div>
        );
    }
}

export default Values;