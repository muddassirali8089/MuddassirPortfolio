import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4
              className="subtitle scroll-animation"
              data-aos="fade-up"
            >
              <i className="las la-grip-vertical" /> portfolio
            </h4>
            <h1
              className="scroll-animation"
              data-aos="fade-up"
            >
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div
              className="col-md-6 scroll-animation"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href="assets/images/portfolio2.jpg" data-lightbox="example-1">
                    <img src="assets/images/portfolio2.jpg" alt="Portfolio" />
                  </a>
                  <ul className="portfolio-categories">
                    <li><a href="#">WordPress</a></li>
                    <li><a href="#">Laravel/PHP</a></li>
                  </ul>
                </div>
                <h2><a href="#">Moonex WordPress Theme</a></h2>
              </div>
            </div>

            <div
              className="col-md-6 scroll-animation"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href="assets/images/portfolio3.jpg" data-lightbox="example-1">
                    <img src="assets/images/portfolio3.jpg" alt="Portfolio" />
                  </a>
                  <ul className="portfolio-categories">
                    <li><a href="#">Figma</a></li>
                    <li><a href="#">Webflow</a></li>
                  </ul>
                </div>
                <h2><a href="#">Taskly Dashboard</a></h2>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjects;
