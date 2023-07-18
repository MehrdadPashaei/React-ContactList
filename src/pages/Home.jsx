import React, {useState} from 'react';
import ContactList from "../components/ContactList.jsx";
import "../css/Home.css"
import {useNavigate} from "react-router-dom"
const Home = () => {

    const navigate = useNavigate()
   const clickHandler = () =>{
        navigate("/new-contact")
   }

    return (
        <div className="home">
            <div className="header header-add">
                <h1>Add New Contacts</h1>
                <button className="add-btn" onClick={clickHandler}>Add</button>
            </div>
            <div>
                <h1 className="header"> Your Contacts </h1>
                <ContactList/>
            </div>
        </div>
    );
};

export default Home;