import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Introduction = () => {
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    async function fetchIntroduction() {
      try {
        const response = await axios.get("http://localhost:8000/api/introduction/");
        setIntro(response.data);
      } catch (error) {
        console.error("Error fetching introduction data:", error);
      }
    }

    fetchIntroduction();
  }, []);

  if (!intro) return <p>Loading...</p>;

  return (
    <section className="hero-section page-section scroll-to-page" id="home">
      <div className="custom-container">
        <div className="hero-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-home" /> Introduce
            </h4>
            <h1 className="scroll-animation" data-aos="fade_from_bottom">
              Hi I am <span>{intro.name}</span>, {intro.role}
            </h1>
          </div>
          <p className="scroll-animation" data-animation="fade_from_bottom">
            {intro.short_intro}
            <br />
            {intro.description}
          </p>
          <a
            href="#portfolio"
            className="go-to-project-btn scroll-to scroll-animation"
            data-animation="rotate_up"
          >
            <img src="assets/images/round-text.png" alt="Rounded Text" />
            <i className="las la-arrow-down" />
          </a>
          <div className="facts d-flex">
            <div className="left scroll-animation" data-aos="fade-right">
              <h1>{intro.experience_years}+</h1>
              <p>
                Years of <br />
                Experience
              </p>
            </div>
            <div className="right scroll-animation" data-aos="fade-left">
              <h1>{intro.projects_completed}+</h1>
              <p>
                Projects completed on <br />
                {intro.countries} countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
