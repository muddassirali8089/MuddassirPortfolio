import React from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // animation duration
      // whether animation should happen only once
    });
  }, []);
  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user" /> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Every great project begins with
              <br />
              a passion for <span>coding</span>
            </h1>
          </div>
  
            <p className="scroll-animation" data-aos="fade-up">
              Since starting my journey as a MERN stack developer, I've built
              and deployed full-stack applications, turned Figma designs into
              real, responsive user interfaces, and collaborated with others to
              deliver fast, scalable solutions. I gained valuable experience as
              a frontend intern at Code Matics Abbottabad, where I contributed
              to creating custom UIs and learned the ins and outs of modern web
              development. I’m quietly confident, deeply passionate about clean
              code and UI/UX, and always improving — one project at a time.
            </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;
