import React, { Component } from 'react';
import FlashMessage from 'react-flash-message'


export default class Alertmessage extends Component {
    constructor(props){
        super(props)
        this.state={
               msg:""
        }
    }

    render() {
       const fg=()=>{
           if(this.props.saved===true){
            return(
               <FlashMessage duration={5000}>
                   <div className="alert alert-success">
                                <strong>Saved </strong> Your notes has been saved Click on view

                </div>

               </FlashMessage>
            )
           }     else if(this.props.copied===true){
            return(
                <FlashMessage duration={6000}>
                   <div className="alert alert-warning">
                                <strong>Copied </strong> to your clipboard

                </div>

               </FlashMessage>
            )
            
           }
           
        
       }

        return (
            <div>
                <br></br>
                {
                        fg()
                }
            </div>
        )
    }
}
