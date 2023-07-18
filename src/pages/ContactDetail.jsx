import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import "../css/ContactDetail.css"
import useHandleError from "../components/useHandleError.jsx";
import Error from "../components/Error.jsx";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactDetail = ({id,name, number,detail}) => {

    const [contact,setContact] = useState([]);
    const [TheError, handleError, closeError] = useHandleError();
    useEffect(() => {
        const getContacts = async () =>{
            try {
                const {data} = await axios.get(CONTACTS_API);
                setContact(data);
            }catch (error){
                handleError(error)
            }
        }
        getContacts()
    },[]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:3000/contacts/${id}`)
            .then(response => {
                setContact(contact.filter((contact) => contact.id !== id));
            })
            .catch(error => {
                handleError(error);
            })
    }

    return (

        <div className="contactDetail">
            {TheError && (<Error error={TheError.message} closeError={closeError}/>)}
            <div className="contact">
                <div className="contact-info">
                    <h3><span>Name</span> : {name}</h3>
                    <h4><span>Phone Number</span> : {number}</h4>
                    <p><span>Detail</span> : {detail}</p>
                </div>
                <div className="buttons">
                    <Link to={`/edit/${id}`}>
                        <button className="btn edit-btn">Edit</button>
                    </Link>
                    <button className="btn remove-btn" onClick={() => deleteHandler(id)}>Remove</button>
                </div>

            </div>
            <Link className="contactDetail-btn" to="/">Go to contacts</Link>
        </div>

    );
};

export default ContactDetail;
