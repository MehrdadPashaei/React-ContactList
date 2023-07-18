import React from 'react';
const Error = ({error}) => {


    return (
        <div className="error">
            <div className="error__box">
                <div className="error__title">
                    Error
                </div>
                <div className="error__description">
                    {error}
                </div>

            </div>
        </div>
    );
};

export default Error
