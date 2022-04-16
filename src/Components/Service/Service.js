import React from 'react';

import useDentist from '../hooks/useDentist';
import Services from './services/Services';
import './Service.css'


const Service = () => {
    const [services,setServices] = useDentist()
    return (
        <div className='container'>
            <h1 className='mt-5 text-center color'>Dentist Services</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 rounded-pill">
  {
      services.map(service => <Services

      key={service.id}
      service={service}
      
      ></Services> )
  }
  
  </div>

        </div>
    );
};

export default Service;