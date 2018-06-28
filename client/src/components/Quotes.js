import React, { Component } from 'react';
import Quote from './Quote'
import styled from 'styled-components'

// const QuoteDisplayer = styled.div`
//     display: grid;

// `
class Quotes extends Component {
    
    render() {
        if (this.props.quotes === undefined) {
            return null
        }
        return (
            <div>
                <div>
                    {
                        this.props.quotes.map((quote, i)=>{
                            return <Quote key={i} quote={quote} deleteFromQuoteBoard={this.props.deleteFromQuoteBoard} addToValueBoard={this.props.addToValueBoard}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Quotes;