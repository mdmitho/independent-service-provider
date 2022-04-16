import React from 'react';
import './Services.css'

import { Link } from 'react-router-dom';

const Services = (props) => {
    console.log(props);
  const {title,img,description,price}=props.service
    return (
        <div className="col">
        <div className="card">
          <div className="">
          <img  src={img} className=" img w-100" alt="" />
          </div>
          <div className="mt-5  text-center">
          <h6 className='fs-2'>{title}</h6>
          <p className='fs-6'> price :$ {price}</p>
          </div>
            <div className="card-body">
                <p><small className='text-start'></small>  {description}</p>
                
            </div>
            <div className="text-center mb-3">
                <Link to='/checkoutPage' className='btn btn-info text-white'>Checkout Page</Link>
            </div>
        </div>
    </div>
    );
};

export default Services;