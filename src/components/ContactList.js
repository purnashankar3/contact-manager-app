import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

function ContactList(props){
    // const {id,name,email} = props.contacts
    // console.log(name)
    
    
    return(
        <div className="item">
            <Link to="/add">
            <button className="ui button blue right">Add Contact</button>
            </Link>
            {props.contacts?.map(contact=>{return (<div>

            <div className="content">
            <div className="ui celled list">
                
                
                
            <Link to={{ pathname:`/contact/${contact.name}`, state:{contact:contact} }}>
            <img className="ui avatar image" src={user} alt="user"/>
            <div className="header">{contact.name}</div>
            <div>{contact.email}</div>
            
            </Link>
            
             {/* <div onClick={()=>props.getId(contact.id)}> <i className="trash alternate icon"/></div>  */}
            <div onClick={()=>{props.getId(contact.id);toast.error("Contact has been deleted",{autoClose:2000,position:toast.POSITION.TOP_RIGHT})}}> <i className="trash alternate icon"/></div>
            </div>
            </div>
            </div>
        )})}
    </div>
    )
}

export default ContactList;