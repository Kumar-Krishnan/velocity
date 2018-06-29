import React, { Component } from 'react';
import Value from './Value'

class Values extends Component {
    render() {
        if (this.props.values === undefined) {
            return null
        }
        return (
            <div>
                <div>
                    
                    {
                        this.props.values.map((value, i)=>{
                            return <Value key={i} valueCount={i} deleteFromValueBoard={this.props.deleteFromValueBoard} value={value} />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Values;