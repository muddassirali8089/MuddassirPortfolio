import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Introduction = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          // whether animation should happen only once
        });
      }, []);
      
  return (
    <section className="hero-section page-section scroll-to-page" id="home">
          <div className="custom-container">
            <div className="hero-content content-width">
              <div className="section-header">
                <h4
                  className="subtitle scroll-animation"
                  data-aos="fade-up"
                >
                  <i className="las la-home" /> Introduce
                </h4>
                <h1
                  className="scroll-animation"
                  data-aos="fade_from_bottom"
                >
                  Say Hi from <span>Drake</span>, Framer Designer and Developer
                </h1>
              </div>
              <p className="scroll-animation" data-animation="fade_from_bottom">
                I design and code beautifully simple things and i love what i do.
                Just simple like that!
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
                <div
                  className="left scroll-animation"
                  data-aos="fade-right"
                >
                  <h1>10+</h1>
                  <p>
                    Years of <br />
                    Experience
                  </p>
                </div>
                <div
                  className="right scroll-animation"
                  data-aos="fade-left"
                >
                  <h1>182+</h1>
                  <p>
                    projects completed on <br />
                    15 countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Introduction