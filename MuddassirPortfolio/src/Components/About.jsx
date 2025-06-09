import React, { useEffect, useState } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 3000 });

    async function fetchAboutData() {
      try {
        const res = await axios.get("http://localhost:8000/api/about/");
        setAbout(res.data);
      } catch (error) {
        console.error("Failed to fetch about data:", error);
      }
    }

    fetchAboutData();
  }, []);

  if (!about) return <p>Loading...</p>;

  return (
    <section className="about-area page-section scroll-to-page" id="about">
      <div className="custom-container">
        <div className="about-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="lar la-user" /> About
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              {about.title_line_1}
              <br />
              {about.title_line_2} <span>{about.title_highlight}</span>
            </h1>
          </div>

          <p className="scroll-animation" data-aos="fade-up">
            {about.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
