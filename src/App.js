import { v4 as uuidv4 } from 'uuid';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetail from "./components/ContactDetail";
import { useEffect, useState } from 'react';
import Header from "./components/Header";

import {BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'


function App() {

  const KEY_FOR_CONTACTS = "con"
  const [contacts,setContacts] = useState([])

  useEffect(()=>{
    const retreiveContacts =JSON.parse(localStorage.getItem(KEY_FOR_CONTACTS))
    setContacts(retreiveContacts)
  },[])


  useEffect(()=>{
    localStorage.setItem(KEY_FOR_CONTACTS,JSON.stringify(contacts))

  },[contacts])
 
    const contactHandler = (contact)=>{
      setContacts([...contacts,{ id:uuidv4(),...contact}])
    }

    const removeHandler = (id) =>{
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
      </Switch>
      </Router>
       
      
    </div>
  );
}

export default App;
