import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../src/img/slider/slider1.png'
import slider2 from '../../../src/img/slider/slider2.png'
import slider3 from '../../../src/img/slider/slider3.png'

import './Slider.css'

const Slider = () => {
    return (
      <div className="h-75">
        <Carousel className="">
          <Carousel.Item interval={2000}>
            <div className="slider">
              <img className=" w-100 " src={slider1} alt="First slide" />
            </div>

            <Carousel.Caption>
              <h3>DENTIST CARE</h3>
              <p>
                All of our locations offer comprehensive services, with compassionate care, at
                transparent pricing and need.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <div className="slider">
              <img className=" w-100 " src={slider2} alt="Third slide" />
            </div>

            <Carousel.Caption>
              <h3>DENTIST CARE</h3>
              <p>
                All of our locations offer comprehensive services, with compassionate care, at
                transparent pricing and need.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider">
              <img className=" w-100 " src={slider3} alt="Third slide" />
            </div>

            <Carousel.Caption>
              <h3>DENTIST CARE</h3>
              <p>
                All of our locations offer comprehensive services, with compassionate care, at
                transparent pricing and need.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
};

export default Slider;