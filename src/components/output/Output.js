import React, { Component } from 'react';
import axios from 'axios';
import Body from './Body';
import Navbar from '../layout/Navbar'

export default class Output extends Component {
    constructor(props){
        super(props)
        this.state={
            id:"",
            data:undefined
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        this.findData(id)
    }
    findData=(id)=>{
        if(id){
            if(this.state.id !== this.props.match.params.id){
            
                axios.get(`/api/notes/${id}`).then((res)=>{
                    this.setState((state, props) => ({
                        id:id,
                        data: res.data.data
                    }))
                }).catch((err)=>{
                    console.log(err)
                })
            }
    }
       
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Body {...this.state.data}/>
            </div>
        )
    }
}
