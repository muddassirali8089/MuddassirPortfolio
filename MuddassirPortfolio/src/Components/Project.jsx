import React from "react";

function Project() {
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">

        <div className="row portfolio-items">
          <div
            className="col-md-12 scroll-animation"
            data-animation="fade_from_bottom"
          >
            <div className="portfolio-item portfolio-full">
              <div className="portfolio-item-inner">
                <a
                  href="assets/images/portfolio1.jpg"
                  data-lightbox="example-1"
                >
                  <img src="assets/images/portfolio1.jpg" alt="Portfolio" />
                </a>
                <ul className="portfolio-categories">
                  <li>
                    <a href="#">Figma</a>
                  </li>
                  <li>
                    <a href="#">Framer</a>
                  </li>
                  <li>
                    <a href="#">WordPress</a>
                  </li>
                </ul>
              </div>
              <h2>
                <a href="#">Bureau - Architecture Studio Website</a>
              </h2>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
