import React from 'react';
import Oops from '../../components/Oops';

const NotFound = () =>{
    return(
        <div>
            <Oops message='The content you are looking for do not exists'/>
        </div>
    );
}

export default NotFound;