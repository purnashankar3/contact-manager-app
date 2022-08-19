import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from "./components/ContactDetail";
import { useEffect, useState } from 'react';
import Header from "./components/Header";
import api from "./api/contacts";

import {BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'
import EditContact from './components/EditContact';


function App() {

  const KEY_FOR_CONTACTS = "con"
  const [contacts,setContacts] = useState([])

  useEffect(()=>{
    // const retreiveContacts =JSON.parse(localStorage.getItem(KEY_FOR_CONTACTS))
    // setContacts(retreiveContacts)
    const getAllContacts = async()=>{
      const allContacts = await retreiveContacts()
      if(allContacts){setContacts(allContacts)}
    }
    getAllContacts()
  },[])
 const retreiveContacts = async()=>{
    const response = await api.get("/contacts")
    return response.data
 }

  useEffect(()=>{
   // localStorage.setItem(KEY_FOR_CONTACTS,JSON.stringify(contacts))

  },[contacts])
 
    const contactHandler = async(contact)=>{
      const request = {id:uuidv4(),...contact}
      const response = await api.post("/contacts",request)
      setContacts([...contacts,response.data])
    }

    const updateHandler = async(contact)=>{
      
      const response = await api.put(`/contacts/${contact.id}`,contact)

      setContacts(contacts.map(contact=> {return contact.id===response.data.id ? response.data:contact}))
    }
    const removeHandler = async(id) =>{
     await api.delete(`/contacts/${id}`)
     const filteredContacts= contacts.filter(contact=>{return (contact.id!==id)})
     setContacts(filteredContacts)
    }

    console.log(typeof(contacts))
  return (
    <div className="ui container">
       <Router>
      <Header />
        <Switch>

      
      <Route path="/add"  render={(props)=> (<AddContact {...props } contactHandler={contactHandler} />)}/>
      <Route path="/" exact render={(props)=>(<ContactList {...props} contacts={contacts} getId={removeHandler}/>)} />
      <Route path="/contact/:name" component={ContactDetail}/>
      <Route path="/edit/:id" render={(props)=>(<EditContact {...props} updateHandler={updateHandler}/>)}/>
      </Switch>
      </Router>
       
      
    </div>
  );
}

export default App;
