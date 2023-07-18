import React from 'react';
import "../css/NewContact.css"
import ContactForm from "../components/ContactForm.jsx";
const NewContact = () => {
    return (
        <div className="new-contact">
            <h1>New Contact Page</h1>
            <ContactForm/>
        </div>
    );
};

export default NewContact;