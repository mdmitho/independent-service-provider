import React from "react";
import Slider from "../Slider/Slider";
import Service from "../Service/Service";
import useDentist from "../hooks/useDentist";
import Services from "../Service/services/Services";
import Footer from "../Footer/Footer";

const Home = () => {
  const [services, setService] = useDentist();
  return (
    <div>
      <Slider></Slider>
      <div className="container">
        <h1 className="mt-5 text-center color">Dentist Services</h1>
        <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3 rounded-pill ">
          {services.slice(0, 3).map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
