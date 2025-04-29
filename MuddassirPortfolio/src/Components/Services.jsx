import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
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
            <div
              className="service-item scroll-animation"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="las la-bezier-curve" />
              <h2>Full-Stack Web Development</h2>
              <p>
                I build dynamic and scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) to create responsive, high-performance web apps.
              </p>
              <span className="projects">15 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="las la-code" />
              <h2>Frontend Development</h2>
              <p>
                I specialize in creating intuitive and responsive user interfaces using React.js, ensuring the best possible user experience.
              </p>
              <span className="projects">20 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="las la-database" />
              <h2>Backend Development</h2>
              <p>
                I design and implement robust backend systems with Node.js and Express.js, ensuring secure and efficient data handling.
              </p>
              <span className="projects">10 Projects</span>
            </div>
            <div
              className="service-item scroll-animation"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="las la-cogs" />
              <h2>API Integration</h2>
              <p>
                I integrate third-party services and APIs into applications, enhancing functionality and user engagement.
              </p>
              <span className="projects">8 Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
