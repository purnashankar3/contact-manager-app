import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user_Picture.png"

const ContactDetail = (props) =>{
   const {name,email} = props.location.state.contact
  console.log(props.location.state.contact)
    return(
            <div className="main" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div className="ui card">            
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>               
                </div>
                <Link to="/"><button className="ui button blue center" >Back to Contactlist</button></Link>
            </div>)
}

export default ContactDetail;