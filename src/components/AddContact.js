import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";
import React, { Component, useState } from "react";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from 'uuid';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

class AddContact extends Component{
  
        state={
            name:"",
            email:"",
            
        }
    
    addContact = (e) =>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("all fields are mandatory")
            return
        }
        else{
            console.log(this.state)
            this.props.contactHandler(this.state)
            this.setState({name:"",email:""})
        }
        console.log(this.props)
        this.props.history.push("/")
        toast.success(`Contact has been added`,{autoClose:2000,position:toast.POSITION.TOP_RIGHT})
    }
    render(){
    return(
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.addContact}>
                <label>Name</label><br/>
                <input type="text" placeholder="Enter Name" value={this.state.name}
                 onChange={e=>this.setState({name:e.target.value})} /><br/>
                 <label>Email</label><br/>
                <input type="text" placeholder="Email" value={this.state.email}
                 onChange={e=>this.setState({email:e.target.value})} /><br/>
                <button className="ui button black">Submit</button>
            </form>
            {/* <div>{this.state.contacts.map(contact=>{return (
            <h2>{contact.name}</h2>,
            <h2>{contact.email}</h2>
        )})}</div> */}
        </div>
    )
    }
}
export default AddContact;