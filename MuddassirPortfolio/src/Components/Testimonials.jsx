import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonials() {
  return (
    <section id="testimonial" className="testimonial-area page-section scroll-to-page">
      <div className="custom-container">
        <div className="testimonial-content content-width">
          <div className="section-header">
            <h4 className="subtitle" data-aos="fade-up">testimonial</h4>
            <h1 data-aos="fade-up">Trusted by <span>Hundered Clients</span></h1>
          </div>

          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items={1}
          >
            <div className="testimonial-item">
              <div className="testimonial-item-inner">
                <div className="author d-flex align-items-center">
                  <img src="assets/images/testimonial-1.jpg" alt="portfolio" />
                  <div className="right">
                    <h3>sagycohen</h3>
                    <p className="designation">CEO of <span>IBM Global</span></p>
                  </div>
                </div>
                <p>“I highly recommend this seller because he helped me a lot with a big project I had and he did it without no problem. Thanks a lot!”</p>
                <a href="#" className="project-btn">Project</a>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-inner">
                <div className="author d-flex align-items-center">
                  <img src="assets/images/testimonial-1.jpg" alt="portfolio" />
                  <div className="right">
                    <h3>Paublo Dybala</h3>
                    <p className="designation">CEO of <span>IBM Global</span></p>
                  </div>
                </div>
                <p>“Drake - A Developer with creativity...”</p>
                <a href="#" className="project-btn">Project</a>
              </div>
            </div>

            <div className="testimonial-item">
              <div className="testimonial-item-inner">
                <div className="author d-flex align-items-center">
                  <img src="assets/images/testimonial-1.jpg" alt="portfolio" />
                  <div className="right">
                    <h3>Paublo Dybala</h3>
                    <p className="designation">CEO of <span>IBM Global</span></p>
                  </div>
                </div>
                <p>“Drake - A Developer with creativity...”</p>
                <a href="#" className="project-btn">Project</a>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-item-inner">
                <div className="author d-flex align-items-center">
                  <img src="assets/images/testimonial-1.jpg" alt="portfolio" />
                  <div className="right">
                    <h3>Paublo Dybala</h3>
                    <p className="designation">CEO of <span>IBM Global</span></p>
                  </div>
                </div>
                <p>“Drake - A Developer with ”</p>
                <a href="#" className="project-btn">Project</a>
              </div>
            </div>


          </OwlCarousel>

          {/* The logos and footer nav you can keep same */}
        </div>
      </div>
    </section>
  );
}
