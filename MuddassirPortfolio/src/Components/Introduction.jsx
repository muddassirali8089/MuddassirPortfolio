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
                Hi I am <span>Muddassir</span>, MERN Stack Developer
                </h1>
              </div>
              <p className="scroll-animation" data-animation="fade_from_bottom">
                I turn Figma designs into real web apps using the MERN stack.
                I love building Websites!
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
                  <h1>5+</h1>
                  <p>
                    Months of <br />
                    Experience
                  </p>
                </div>
                <div
                  className="right scroll-animation"
                  data-aos="fade-left"
                >
                  <h1>12+</h1>
                  <p>
                    projects completed on <br />
                    5 countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Introduction