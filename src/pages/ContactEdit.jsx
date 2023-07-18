import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import "../css/ContactEdit.css"
import useHandleError from "../components/useHandleError.jsx";
import Error from "../components/Error.jsx";

const CONTACTS_API = "http://localhost:3000/contacts";

const ContactEdit = () => {

    const [contacts, setContacts] = useState(null);
    const [edit, setEdit] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();
    const [TheError, handleError, closeError] = useHandleError();



    useEffect(() => {

        axios.get(`${CONTACTS_API}/${id}`)
            .then(response => {
                setContacts(response.data)
            })
            .catch(error => {
                handleError(error);
            });
    }, [])

    if (!contacts) {return <div className="loading"> <h1>Loading...</h1></div>}

    const handleSubmit = () => {
        // e.preventDefault();

        axios.put(`${CONTACTS_API}/${id}`, contacts)
            .then(response => {
                setContacts(response.data);
                setEdit(true);
                console.log(response)
            })
            .catch(error => {
                handleError(error);
            })
        navigate("/");
    }

    return (
        <div>
            {TheError && (<Error error={TheError.message} closeError={closeError}/>)}
            <div className="contact-edit">
                <h1 className="name-title">Name : {contacts.name}</h1>
                <div className="contact-item">
                    <span className="number-title">Mobile: {contacts.number}</span>
                    <span className="describe-title">Describe : {contacts.detail}</span>
                </div>
                {edit ? (
                    <form onSubmit={handleSubmit} className="form">
                        <input
                            onChange={(e) => setContacts({...contacts, name: e.target.value})}
                            value={contacts.name}
                            className="name-input"
                            placeholder="Name..."
                            type="text"
                        />
                        <input
                            onChange={(e) => setContacts({...contacts, number: e.target.value})}
                            value={contacts.number}
                            className="number-input"
                            placeholder="Phone Number..."
                            type="tel"
                        />
                        <textarea
                            onChange={(e) => setContacts({...contacts, detail: e.target.value})}
                            value={contacts.detail}
                            className=" number-input textarea-input"
                            placeholder="Please briefly describe your situation"
                        />
                        <div className="form__buttons">
                            <button  className="submit-btn" type="submit">
                                Submit
                            </button>

                        </div>
                    </form>

                ) : (
                    <div className="edit-btns">
                        <button
                            onClick={() => setEdit(true)}
                            className="submit-btn">Edit
                        </button>
                        <Link className="submit-btn-link" to="/">Back to contact</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactEdit;