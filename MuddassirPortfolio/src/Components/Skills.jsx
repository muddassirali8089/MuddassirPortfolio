import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-aos="fade-up"
            >
              <i className="las la-shapes" /> my skills
            </h4>
            <h1
              className="scroll-animation"
              data-aos="fade-up"
            >
              My <span>Advantages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div
              className="col-md-3 scroll-animation"
              data-aos="fade-left"
            >
              <div className="skill">
                <div className="skill-inner">
                  <img src="assets/images/figma.png" alt="Figma" />
                  <h1 className="percent">92%</h1>
                </div>
                <p className="name">Figma</p>
              </div>
            </div>

            <div
              className="col-md-3 scroll-animation"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="skill">
                <div className="skill-inner">
                  <img src="assets/images/framer.png" alt="Framer" />
                  <h1 className="percent">85%</h1>
                </div>
                <p className="name">Framer</p>
              </div>
            </div>

            <div
              className="col-md-3 scroll-animation"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <div className="skill">
                <div className="skill-inner">
                  <img src="assets/images/webflow.png" alt="Webflow" />
                  <h1 className="percent">80%</h1>
                </div>
                <p className="name">Webflow</p>
              </div>
            </div>

            <div
              className="col-md-3 scroll-animation"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="skill">
                <div className="skill-inner">
                  <img src="assets/images/react.png" alt="React" />
                  <h1 className="percent">90%</h1>
                </div>
                <p className="name">React</p>
              </div>
            </div>

            <div
              className="col-md-3 scroll-animation"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="skill">
                <div className="skill-inner">
                  <img src="assets/images/wordpress.png" alt="WordPress" />
                  <h1 className="percent">86%</h1>
                </div>
                <p className="name">WordPress</p>
              </div>
            </div>

            <div
              className="col-md-3 scroll-animation"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="skill">
                <div className="skill-inner">
                  <img src="assets/images/laravel.png" alt="Laravel/PHP" />
                  <h1 className="percent">70%</h1>
                </div>
                <p className="name">Laravel/PHP</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
