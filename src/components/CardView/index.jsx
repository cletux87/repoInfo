import React from 'react';
import './cardview.css';

const CardView = (props) =>{

    const { children } = props;

    return(
        <div className='row'>
            <div className="col-12 d-flex justify-content-center">
                <div className='cardview-container  card'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardView;