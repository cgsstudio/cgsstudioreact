import React from 'react';
import image1 from "../../../assets/images/portfolio-2/cybervantage.jpg";
import image2 from "../../../assets/images/portfolio-2/jagatjit.jpg";
import image3 from "../../../assets/images/portfolio-2/defidesign.jpg";
import image4 from "../../../assets/images/portfolio-2/premierpropertiesandco.jpg";
import image5 from "../../../assets/images/portfolio-2/greenlivingpharma.jpg";
import image6 from "../../../assets/images/portfolio-2/luxuryrentfolio.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Cyber Vantage",
      url: "https://cybervantage.ai/",
      image: image1
    },
    {
      id: 2,
      title: "Jagatjit Industries",
      url: "https://jagatjit.com/",
      image: image2
    },
    {
      id: 3,
      title: "DeFi Designs",
      url: "https://defidesigns.io/",
      image: image3
    },
    {
      id: 4,
      title: "Premier Properties",
      url: "https://premierpropertiesandco.com/",
      image: image4
    },
    {
      id: 5,
      title: "Green Living Pharma",
      url: "https://greenlivingpharma.online/",
      image: image5
    },
    {
      id: 6,
      title: "Luxury Rentfolio",
      url: "https://luxuryrentfolio.com/",
      image: image6
    }
  ];

  const handleViewProject = (url) => {
    // Open the URL in the same tab
    window.location.href = url;
  };

  return (
    <div className="portfolio-section" id="website-crafted">
      {/* Background decorative elements */}
      <div className="bg-decor-1"></div>
      <div className="bg-decor-2"></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="main-title mx-5 mx-md-0">Website We've Crafted</h2>
          <p className="subtitle">
            Discover our latest work, where custom design meets each brand's unique personality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="project-card">
                {/* Project Image Container */}
                <div className="image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="image-overlay"></div>

                  {/* Placeholder for actual website screenshot */}
                  <div className="placeholder-content">
                    <div className="placeholder-text">
                      <div className="placeholder-icon">
                        <svg width="32" height="32" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p>Website Preview</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="hover-overlay">
                    <div className="hover-content"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <h3 className="project-title text-whitesmoke">{project.title}</h3>
                  <button
                    className="view-button text-whitesmoke"
                    onClick={() => handleViewProject(project.url)}
                  >
                    View Project
                  </button>
                </div>

                {/* Decorative corner accent */}
                <div className="corner-accent"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="row d-flex justify-content-center mt-4">
          <div className="col-12 col-md-4 col-lg-3 text-center px-4 px-md-0">
            <button className="view-button" onClick={() => handleViewProject('../contact-us')}>
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
