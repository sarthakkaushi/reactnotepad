import React, { Component } from 'react';
import axios from 'axios';
import Alertmessage from '../output/Alertmessage'
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import JoditEditor from "jodit-react";
import { Button } from 'react-bootstrap';
import Body from '../layout/Body'
import Header from '../layout/Header';
import copy from 'clipboard-copy'
// import Share from '../save/Share'
const config = {
	readonly: false // all options from https://xdsoft.net/jodit/doc/
}
export default class Editnotes extends Component {
    constructor(props){
        super(props)
        this.state={
            editor:null,
            id:"",
            title:"",
            data:undefined,
            serverId:"",
            saved:false,
            copied:false
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id || this.props.id
        if(id){
            this.findData(id)

        }
    }
    findData=(id)=>{
        if(id){
            if(this.state.id !== this.props.match.params.id){
            
                axios.get(`/api/notes/${id}`).then((res)=>{
                    this.setState((state, props) => ({
                        id:id,
                        data: res.data.data.text,
                        title:res.data.data.title,
                        serverId:res.data.data._id
                    }))
                }).catch((err)=>{
                    console.log(err)
                })
            }
    }
       
    }
    setContent=(e)=>{
        this.setState({data:e})
    }
    inputHandler=(e)=>{
        this.setState({title:e.target.value})

    }
    updateData=(id,title,content)=>{
        axios.put(`/api/notes/update/${id}`,{
            title:title,
            content:content
        }).then((r)=>{
                this.setState({
                    saved:true
                })
                setTimeout(()=>{
                    this.setState((state,props)=>({
                        saved:false

                    }
                    ))
                },2000)

        })
    }
    copyText=r=>{
        this.setState({copied:true})
        setTimeout(()=>{
            this.setState((state,props)=>({
                copied:false

            }
            ))
        },2000)
       return `${window.location.origin}/view/${this.state.id}`

    }
    
    render() {
        const sendData=(data)=>{
           this.updateData(this.state.serverId,this.state.title,data)
            
            
        }
        return (
            <div>
			<Header/>
            <Body>
                <Link to={`/view/${this.state.id}`}>
			        <button className="btn btn-primary" style={{margin:"2px"}}>
                    <i className="fa fa-globe   " style={{padding:"2px"}}></i> 
                        
                        Preview</button>

                </Link>
                <Button variant="primary" onClick={()=>sendData(this.state.data)}>
                <i className="fa fa-save" style={{padding:"2px"}}></i> 

                    
                    Save</Button>
                     <Button variant="primary" onClick={()=>copy(this.copyText())} style={{margin:"2px"}}>
                        <i className="fa fa-copy" style={{padding:"2px"}}></i> 
                        Copy Link
                    </Button >

            <Alertmessage {...this.state}/>
            

                <Form>
                 <Form.Control  type="text" placeholder="Title" value={this.state.title} onChange={this.inputHandler} />
                </Form>
                <br></br>
                <JoditEditor
                    ref={this.state.editor}
                    value={this.state.data}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => this.setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => {}}
                />
			<br></br>
			<Button variant="primary" className="btn btn-primary btn-block" onClick={()=>sendData(this.state.data)}>Save</Button>
            </Body>
            
			</div>
        )
    }
}
