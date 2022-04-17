import React from 'react';
import mypic from '../../img/my pic.png'
const About = () => {
    return (
        <div className='container w-50 d-flex justify-content-center  shadow-lg p-3 mb-5 bg-body rounded mt-5 '>
           <div className="row align-items-center text-center">
           <div className="col py-5">
                <img src={mypic} alt="" />
            </div>
            <div className="px-5 col "> 
                <h4>I have been interested in learning about computers since I was a child. Now I want to be a good web developer. I want to work in a good company. This is my dream.
</h4>
            </div>
           </div>
        </div>
    );
};

export default About;