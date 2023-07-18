import React, {useEffect, useState} from 'react';
import axios from "axios";
import Contact from "./Contact.jsx";
import useHandleError from "./useHandleError.jsx";
import Error from "./Error.jsx";


const CONTACTS_API = "http://localhost:3000/contacts";

const ContactList = () => {

    const [contacts,setContacts] = useState([]);
    const [TheError, handleError, closeError] = useHandleError();

    useEffect(() => {
        const getContacts = async () =>{
            try {
                const {data} = await axios.get(CONTACTS_API);
                setContacts(data);
            }catch (error){
                handleError(error)
            }
        }
        getContacts()
    },[]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:3000/contacts/${id}`)
            .then(response => {
                setContacts(contacts.filter((contact) => contact.id !== id));
            })
            .catch(error => {
                handleError(error);
            })
    }


    return (
        <div>
            {TheError && (<Error error={TheError.message} closeError={closeError}/>)}
            {contacts.map(({id,name,number,detail}) =>
                <Contact
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    detail={detail}
                    onDelete = {() => deleteHandler(id)}
                />)}
        </div>
    );
};

export default ContactList;