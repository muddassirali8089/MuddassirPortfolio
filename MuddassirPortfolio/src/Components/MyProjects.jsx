import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    image: "assets/images/muddassir.jpg",
    title: "Moonex WordPress Theme",
    categories: ["WordPress", "Laravel/PHP"],
    liveLink: "https://your-live-project-url-1.com",
    githubLink: "https://github.com/your-github-repo-1"
  },
  {
    image: "assets/images/portfolio3.jpg",
    title: "Taskly Dashboard",
    categories: ["Figma", "Webflow"],
    liveLink: "jij", // Live button will be hidden
    githubLink: "" // GitHub button will be hidden
  }
];

const MyProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical" /> portfolio
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            {projects.map((project, index) => (
              <div
                className="col-md-6 scroll-animation"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                data-aos-delay={100 + index * 100}
                key={index}
              >
                <div className="portfolio-item portfolio-half">
                  <div className="portfolio-item-inner">
                    <a href={project.image} data-lightbox="example-1">
                      <img
                        src={project.image}
                        alt="Portfolio"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "10px"
                        }}
                      />
                    </a>
                    <ul className="portfolio-categories">
                      {project.categories.map((cat, i) => (
                        <li key={i}><a href="#">{cat}</a></li>
                      ))}
                    </ul>
                  </div>
                  <h2>{project.title}</h2>

                  {(project.liveLink || project.githubLink) && (
                    <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-primary"
                        >
                          Live
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-secondary"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyProjects;
