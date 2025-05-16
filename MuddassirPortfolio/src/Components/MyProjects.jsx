import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    image: "assets/images/BookStore.PNG",
    title: "Book Store App",
    categories: ["Vite", "React"],
    liveLink: "https://muddassirbookstore.netlify.app/",
    githubLink: "https://github.com/muddassirali8089/BookStore"
  },
  {
    image: "assets/images/Urran.PNG",
    title: "Urran.com Web Clone",
    categories: ["HTML", "CSS"],
    liveLink: "https://muddassirali8089.github.io/urran/", 
    githubLink: "https://github.com/muddassirali8089/urran" // GitHub button will be hidden
  },

  {
    image: "assets/images/Daraz.PNG",
    title: "Daraz Web Clone",
    categories: ["React", "Node"],
    liveLink: "https://daraz8089.netlify.app/", 
    githubLink: "https://github.com/muddassirali8089/Daraz" // GitHub button will be hidden
  },
  {
    image: "assets/images/Travell.PNG",
    title: "Travell App",
    categories: ["React"],
    liveLink: "https://travellapp8089.netlify.app/", 
    githubLink: "https://github.com/muddassirali8089/TravelApp" // GitHub button will be hidden
  },

  {
    image: "assets/images/expenceApp.PNG",
    title: "Expence Tracker",
    categories: ["Mern Stack"],
    liveLink: "", 
    githubLink: "https://github.com/muddassirali8089/ExpanceApp" // GitHub button will be hidden
  },
  {
    image: "assets/images/clothing.PNG",
    title: "Clothing Ecomerce Web",
    categories: ["React", "Tailwind"],
    liveLink: "https://clothingbrand8089.netlify.app/", 
    githubLink: "https://github.com/muddassirali8089/clothing-main" // GitHub button will be hidden
  },
  {
    image: "assets/images/popCorn.PNG",
    title: "PopCorn",
    categories: ["React"],
    liveLink: "https://popcorn8089.netlify.app/", 
    githubLink: "https://github.com/muddassirali8089/PopCorn/tree/main/PopCorn" 
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
