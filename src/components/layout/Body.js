import React, { Component } from 'react'

export default class Body extends Component {
    render() {
        
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}
