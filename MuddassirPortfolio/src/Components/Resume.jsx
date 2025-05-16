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
              <span className="date">2021 - 2024</span>
              <h2>Bachelor Degree of Software Engineering</h2>
              <p>Comsats University Islamabad Abbottabad Campus.</p>
            </div>

            <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">2023 - 2024</span>
              <h2>Figma To Html Converter</h2>
              <p>Codematics Inc</p>
              <h2>Mern Stack Developer</h2>
              <p>Codematics Inc</p>
            </div>

             <div
              className="item scroll-animation"
              data-aos="fade-left"
            >
              <span className="date">May 2025 present</span>
              <h2>AI and DataScience Intern</h2>
              <p>GIKI IT Center Islamabad</p>
              <h2>Learning DataScience & AI</h2>
              <p>GIKI IT Center Islamabad</p>
            </div>
         
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
