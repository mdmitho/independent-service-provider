import React from 'react';
import './Services.css'
import Button from 'react-bootstrap/Button'

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
                <Button variant="info" className='text-white'>Checkout Page</Button>
            </div>
        </div>
    </div>
    );
};

export default Services;