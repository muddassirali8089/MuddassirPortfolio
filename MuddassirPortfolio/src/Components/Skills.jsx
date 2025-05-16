import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  {
    name: "React",
    imgSrc:
      "https://static-00.iconduck.com/assets.00/react-icon-1024x911-1chjdhzi.png",
    percent: "90%",
  },
  {
    name: "Node.js",
    imgSrc:
      "https://pluspng.com/img-png/nodejs-png-nodejs-icon-png-50-px-1600.png",
    percent: "85%",
  },
  {
    name: "MongoDB",
    imgSrc:
      "https://images.icon-icons.com/2415/PNG/512/mongodb_original_logo_icon_146424.png",
    percent: "80%",
  },
  {
    name: "Express.js",
    imgSrc: "https://vectorified.com/images/express-js-icon-20.png",
    percent: "85%",
  },
  {
    name: "Git",
    imgSrc:
      "https://creazilla-store.fra1.digitaloceanspaces.com/icons/3220460/git-icon-md.png",
    percent: "80%",
  },
  {
    name: "GitHub",
    imgSrc:
      "https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png",
    percent: "85%",
  },
  {
    name: "Redux",
    imgSrc: "https://clipground.com/images/redux-logo-3.jpg",
    percent: "75%",
  },
  {
    name: "Bootstrap",
    imgSrc:
      "https://hdpng.com/images/bootstrap-logo-png-bootstrap-logo-390.png",
    percent: "100%",
  },

  {
    name: "Next.js",
    imgSrc:
      "https://tse4.mm.bing.net/th?id=OIP.jgA9CTX3nY4Z_MiLLFED2AHaHa&pid=Api&P=0&h=220",
    percent: "50%",
  },
  {
    name: "mySQl",
    imgSrc:
      "https://tse2.mm.bing.net/th?id=OIP.zeQ4kZkfdqXn3xesbTc6_wHaFI&pid=Api&P=0&h=220",
    percent: "70%",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`col-md-3 scroll-animation ${
                  index % 2 === 0 ? "fade-left" : "fade-up"
                }`}
                data-aos={index % 2 === 0 ? "fade-left" : "fade-up"}
                data-aos-delay={`${index * 100}`}
              >
                <div className="skill">
                  <div className="skill-inner">
                    <img
                      src={skill.imgSrc}
                      alt={skill.name}
                      style={{ width: "70%", height: "auto" }}
                    />
                    <h1 className="percent">{skill.percent}</h1>
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
