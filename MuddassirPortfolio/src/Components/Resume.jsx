import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-aos="fade-up"
            >
              <i className="las la-briefcase" /> Resume
            </h4>
            <h1
              className="scroll-animation"
              data-aos="fade-up"
            >
              Education &amp; <span>Experience</span>
            </h1>
          </div>
          <div className="resume-timeline">
            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">2020 - Present</span>
              <h2>Framer Designer &amp; Developer</h2>
              <p>Brunodee Agency</p>
              <h2>Front-End WordPress Developer</h2>
              <p>Envato Market</p>
            </div>
            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">2013 - 2019</span>
              <h2>Webflow Developer &amp; Co-Founder</h2>
              <p>Designflow Studio</p>
              <h2>Web Designer</h2>
              <p>Freelance</p>
              <h2>Leader Team of Marketing</h2>
              <p>AHA Marketing Agency</p>
            </div>
            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">2010 - 2013</span>
              <h2>Bachelor Degree of Information Technology</h2>
              <p>US RMIT University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
