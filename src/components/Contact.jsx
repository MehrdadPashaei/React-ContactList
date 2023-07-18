import React from 'react';
import '../css/Contact.css'
import '../css/Button.css'
import {Link} from "react-router-dom";
const Contact = ({id,name, number,detail,onDelete}) => {
    return (

            <div className="contact">
                <div className="contact-info">
                    <h3> <span>Name</span> : {name}</h3>
                    <h4> <span>Phone Number</span> : {number}</h4>
                    <Link className="contact-info" to={`/contact-detail/${id}`}> <p> <span>Detail</span> : {detail}</p></Link>
                </div>
                <div className="buttons">
                    <Link to={`/edit/${id}`}><button className="btn edit-btn" >Edit</button></Link>
                    <button className="btn remove-btn" onClick={onDelete}>Remove</button>
                </div>

            </div>


    );
};

export default Contact;