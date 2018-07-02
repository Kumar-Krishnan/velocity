import React, { Component } from 'react';
import Value from './Value'
import styled from 'styled-components'

const StyledValueBox = styled.div`
    margin: 0 4vw;
    background-color: #a789ee;
    border-radius: 7px;
    padding: 20px 10px;
    padding-top: 5px;
    margin-bottom: 40px;
    border: ridge 5px #a789ee;
    text-align: center;
    margin-top: 2em;
`
const StyleValueBoardHeader = styled.h3`
    text-align: center;
    color: #006eb4;
    font-size: 1.5em;
    background-color: #ffffff;
    border-radius: 5px;
    border: 3.5px ridge #7100ff; 
    padding: .75em 0; 
    margin-top: 0; 

`
class Values extends Component {
    render() {
        if (this.props.values === undefined) {
            return null
        }
        return (
            <div>
                
                <StyledValueBox>
                    <StyleValueBoardHeader>VELOCITY BOARD</StyleValueBoardHeader>
                    
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