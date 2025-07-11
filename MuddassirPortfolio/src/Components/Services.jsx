import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [services, setServices] = useState([
    {
      icon: 'las la-bezier-curve',
      title: 'Full-Stack Web Development',
      description:
        'I build dynamic and scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      projects: 15,
    },
    {
      icon: 'las la-code',
      title: 'Frontend Development',
      description:
        'I specialize in creating intuitive and responsive user interfaces using React.js.',
      projects: 20,
    },
    {
      icon: 'las la-database',
      title: 'Backend Development',
      description:
        'I design robust backend systems with Node.js and Express.js for secure and efficient data handling.',
      projects: 10,
    },
    {
      icon: 'las la-cogs',
      title: 'API Integration',
      description:
        'I integrate third-party services and APIs into applications for enhanced functionality.',
      projects: 8,
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
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
                key={index}
                className="service-item scroll-animation"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <i className={service.icon} />
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
