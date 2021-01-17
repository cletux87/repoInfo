import React from 'react';
import './loading.css';

const Loading = (props) =>{
    return(
        <div className="row">
            <div className="col-12">
                <div className="loading-container">
                    <div className="d-flex justify-content-center">
                        <div className="row">
                            <div className="col-12 spinner-border loading-loader" role="status">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;