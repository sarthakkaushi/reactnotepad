import React, { Component } from 'react';
import {Link } from "react-router-dom"

export default class viewButton extends Component {
    
    render() {
        const view = ()=>{
            if(this.props.saved===true){
                return (
                <Link to={`/view/${this.props.savedid}`}>
                    <button type="button" className="btn btn-warning">View</button>

                </Link>
                )
                
            }
        }

        return (
            <div>
                <br></br>
                {view()}
            </div>
        )
    }
}
