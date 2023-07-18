import React, {useState} from 'react';
import "../css/ContactForm.css"
import axios from "axios";
import {Link, useNavigate} from "react-router-dom"
import useHandleError from "./useHandleError.jsx";
import Error from "./Error.jsx";

const CONTACTS_API = "http://localhost:3000/contacts";
const ContactForm = () => {
    const [contact,setContact] = useState({name:"",number:"",detail:""})
    const {name,number,detail} = contact;
    const navigate = useNavigate();
    const [TheError, handleError, closeError] = useHandleError();


    const handleChange = (e) =>{
        setContact({...contact,[e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(name.trim() === "" || number.trim() === "" || detail.trim() === "" ){
            alert("All fields are required!");
            return;
        }
        try {
            await axios.post(CONTACTS_API,contact);
            setContact({name:"",number: "",detail: ""})
            navigate("/")


        }catch (error){
            handleError(error)
        }
    }

    return (
        <div className="form-container">
            {TheError && (<Error error={TheError.message} closeError={closeError}/>)}
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="name-input" placeholder="Name..."  value={name} name="name" onChange={handleChange} required/>
                <input type="tel" className="number-input"  title="Please enter the number and start with one 0" placeholder="Phone Number..."  value={number} name="number" onChange={handleChange} required/>
                <textarea className=" number-input textarea-input"  title="Please enter the description " placeholder="Please briefly describe your situation"  value={detail} name="detail" onChange={handleChange} required/>
                <button type="submit" className="submit-btn">Submit</button>
                <Link className="submit-btn btn-back" to="/">Back to contacts</Link>
            </form>
        </div>
    );
};

export default ContactForm;