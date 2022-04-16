import React from 'react';
import NotFoundpic from '../../img/logo/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notfound'>
        <img className='w-100 ' src={NotFoundpic} alt="" />
    </div>
    );
};

export default NotFound;