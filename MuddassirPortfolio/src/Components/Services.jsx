import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    axios.get('http://127.0.0.1:8000/api/services/')
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="services-area page-section scroll-to-page" id="services">
      <div className="custom-container">
        <div className="services-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-stream" /> Services
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Specializations</span>
            </h1>
          </div>

          <div className="services-items">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="service-item scroll-animation"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <i className={service.icon || 'las la-code'} /> {/* fallback icon */}
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <span className="projects">{service.projects} Projects</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
