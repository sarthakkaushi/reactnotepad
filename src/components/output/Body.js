import React, { Component } from 'react';
import $ from "jquery";
import "./Body.css"


export default class Body extends Component {
     
    render() {
        const {title,text} = this.props
       
          $('#player').addClass("youtubecontainer")

          $('iframe').addClass("video")
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-auto">
                            <h1>{title}</h1>
                            <div dangerouslySetInnerHTML={{__html: text}} />
                    </div>
                </div>
                
            </div>
        )
    }
}
