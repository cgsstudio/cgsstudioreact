import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import AboutImg from "../../../assets/images/about/agency-office.jpg";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Stylized Image Box */}
          <div className="col-lg-6">
            <div className="about-img-container">
              <div className="glow-circle glow-top-left"></div>
              <div className="glow-circle glow-bottom-right"></div>
              <div className="about-img-box">
                <img src={AboutImg} alt="Leading Digital Marketing Agency in Ahmedabad, India" className="about-main-img" />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="col-lg-6 about-content-col">
            <div className="about-label-pill">
              About Us
            </div>
            <h3 className="about-main-title">
              Leading Digital Marketing Agency in Ahmedabad, India
            </h3>
            <p className="about-desc">
              Chameleo GFX Studio provides website development, SEO, UI/UX design, and branding solutions to grow your business online. We don't just build websites; we build systems that generate leads, increase conversions, and scale your business.
            </p>

            <div className="about-stats-grid">
              <div className="stat-item-box">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years in Industry</span>
              </div>
              <div className="stat-item-box">
                <span className="stat-number">200+</span>
                <span className="stat-label">Success Stories</span>
              </div>
            </div>

            <Link to="/about-us" className="about-vision-link">
              Learn more about our vision
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
