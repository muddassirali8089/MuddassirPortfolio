import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Resume = () => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Fetch data from Django
    axios.get('http://localhost:8000/education/')
      .then(res => setEducation(res.data))
      .catch(err => console.log(err));

    axios.get('http://localhost:8000/experience/')
      .then(res => setExperience(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase" /> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Education &amp; <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            {/* Education */}
            {education.map((item, idx) => (
              <div className="item scroll-animation" data-aos="fade-left" key={`edu-${idx}`}>
                <span className="date">{item.start_year} - {item.end_year}</span>
                <h2>{item.title}</h2>
                <p>{item.university_name}</p>
              </div>
            ))}

            {/* Experience */}
            {experience.map((item, idx) => (
              <div className="item scroll-animation" data-aos="fade-left" key={`exp-${idx}`}>
                <span className="date">
                  {item.start_month}/{item.start_year} - {item.is_present ? "Present" : `${item.end_month}/${item.end_year}`}
                </span>
                <h2>{item.title}</h2>
                <p>{item.company_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
