import React from 'react';
import "../css/Error.css"
const Error = ({error}) => {


    return (
        <div className="error">
            <div className="box">
                <div className="error-title">
                    Error
                </div>
                <div className="error-description">
                    {error}
                </div>

            </div>
        </div>
    );
};

export default Error
