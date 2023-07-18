import React from 'react';
import "../css/Home.css"
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="page-notFound">
            <img src="../../public/pngtree-404-error-page-not-found-image_1345267.jpg" alt="page-notfound"/>
            <Link to={`/`}><button className="btn back-home-btn" >Back To Home</button></Link>
        </div>
    );
};

export default NotFound;