import React from 'react';
import './websites.css';
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
      title: "Cyber Vantage – AI Security",
      tag: "Corporate Website",
      stat: "312% increase in international inquiries",
      url: "https://cybervantage.ai/",
      image: image1
    },
    {
      id: 2,
      title: "Jagatjit Industries – Liquor Brand",
      tag: "Brand Revamp",
      stat: "Modernized digital footprint for global presence",
      url: "https://jagatjit.com/",
      image: image2
    },
    {
      id: 3,
      title: "DeFi Designs – Web3 Agency",
      tag: "Web3 UI/UX",
      stat: "Page 1 ranking for high-volume crypto keywords",
      url: "https://defidesigns.io/",
      image: image3
    },
    {
      id: 4,
      title: "Premier Properties – Real Estate",
      tag: "Lead Gen Engine",
      stat: "4.2x ROAS on Meta Ads in 60 days",
      url: "https://premierpropertiesandco.com/",
      image: image4
    },
    {
      id: 5,
      title: "Green Living Pharma",
      tag: "Healthcare SEO",
      stat: "Dominating local search results in 4 months",
      url: "https://greenlivingpharma.online/",
      image: image5
    },
    {
      id: 6,
      title: "Luxury Rentfolio",
      tag: "Luxury E-commerce",
      stat: "High-performance booking interface developed",
      url: "https://luxuryrentfolio.com/",
      image: image6
    }
  ];

  const handleViewProject = (url) => {
    window.location.href = url;
  };

  return (
    <section className="portfolio-section websites-section" id="website-crafted">
      <div className="container">
        <div className="portfolio-header">
          <div className="portfolio-label-wrapper">
            <span className="portfolio-label-pill">
              <span className="portfolio-title-dot"></span>
              Our Work
            </span>
          </div>
          <h2 className="portfolio-main-title homepage-h2">
            Results We've <span className="accent">Delivered</span>
          </h2>
          <p className="portfolio-description">
            A glimpse into the brands we've built and the growth we've driven across industries.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card" onClick={() => handleViewProject(project.url)}>
              <div className="portfolio-img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="portfolio-info">
                <span className="portfolio-tag">{project.tag}</span>
                <h4 className="portfolio-card-title">{project.title}</h4>
                <p className="portfolio-stat">{project.stat}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-footer">
          <button className="btn-all-projects" onClick={() => window.location.href = '/contact-us'}>
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
