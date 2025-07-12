import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Async function to fetch skills
    async function fetchSkills() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/skills/");

        const data = response.data;

        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    }

    fetchSkills();
  }, []);

  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes" /> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Advantages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className={`col-md-3 scroll-animation ${
                  index % 2 === 0 ? "fade-left" : "fade-up"
                }`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-up"}
                data-aos-delay={`${index * 100}`}
              >
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />

                    <h1 className="percent">{skill.percent}%</h1>
                  </div>
                  <p className="name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
