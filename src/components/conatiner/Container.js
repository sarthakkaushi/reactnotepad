import React, { Component } from 'react';
import Editor from '../editor/editor';
import Header from '../layout/Header'
import Body from '../layout/Body'
import { Form } from 'react-bootstrap';
import Alertmessage from '../output/Alertmessage'
import axios from 'axios';
import ViewButton from '../output/viewButton';
import Editnotes from '../editnote/Editnotes'


export default class container extends Component {
    constructor(props){
        super(props)
        this.state={
               data:"" ,
               title:"",
               content:"",
               saved:false,
               savedid:undefined,
               id:"",
               loadEdit:false

        }
    }
   
    getdata=(e)=>{
        
        // this.setState({data:e})
        this.setState((state, props) => ({
            data: e
          }));
          
          const {title} = this.state
          this.sendData(title,e)

    }
    inputHandler=(e)=>{
        this.setState({title:e.target.value})
    }
    sendData=(t,c)=>{
        if(this.state.saved===false){
            axios.post('/api/notes',{
                title:t,
                text:c,
                content:c
            }).then(r=>{
                this.setState((state, props) => ({
                    savedid:r.data.url,
                    saved: true,
                    loadEdit:true,
                    id:r.data._id
                }))
                
                this.props.history.push(`/notes/${r.data.url}`)
            })
            .catch((err)=>console.log(err))

        }else{
            this.updateAftersave(this.state.id,t,c)

        }
        
    }
    updateAftersave=(id,title,content)=>{
        axios.put(`/api/notes/update/${id}`,{
            title:title,
            content:content
        }).then((r)=>{
            
        })
    }
    changeComponent=(e)=>{
        if(this.state.loadEdit===true){
            return (<Editnotes id={this.state.savedid}/>)

        }
    }
    render() {
        const main = ()=>{
           
                return(
                    <div>
                    <Header/>
                    <Body>
                    <Alertmessage {...this.state}/>

                        <Form>
                            <Form.Control  type="text" placeholder="Title" value={this.state.title} onChange={this.inputHandler} />
                        </Form>
                        <Editor getData={this.getdata} />
                        <ViewButton {...this.state}/>
                    </Body>
                    </div>
                )
            
                
        }
        return (
            <div className="">
                {main()}

            </div>
        )
    }
}
