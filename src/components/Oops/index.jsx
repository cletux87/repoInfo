import React from 'react';
import './oops.css';

const Oops = (props) =>{

    const { message } = props;

    return(
        <div className="oops-container">
            <div className="row">
                <div className="col-12 d-flex justify-content-center oops-header">
                    Oops!!!
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center oops-message">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Oops;