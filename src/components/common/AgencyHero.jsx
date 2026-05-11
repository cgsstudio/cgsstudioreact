import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";
import "./AgencyHero.css";

function AgencyHero() {
  return (
    <div className="agency-hero-section">
      {/* Background Glow Effects */}
      <div className="agency-hero-glow-1"></div>
      <div className="agency-hero-glow-2"></div>
      <div className="agency-hero-glow-3"></div>
      <div className="agency-hero-orb-1"></div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">

            {/* SEO Headline (H1) */}
            <div className="agency-hero-h1-wrapper">
              <h1 className="agency-hero-h1">
                <span className="agency-hero-dot"></span>
                Digital Marketing & Web Development Agency in Ahmedabad
              </h1>
            </div>

            {/* Main Visual Headline (H2) */}
            <h2 className="agency-hero-h2 homepage-h2">
              Helping Businesses Grow with <span className="agency-hero-red-text">SEO</span>,
              High-Converting <span className="agency-hero-red-text">Websites</span>,
              Branding, and <span className="agency-hero-red-text">AI-Powered</span> Digital Solutions.
            </h2>

            {/* Subtext */}
            <p className="agency-hero-p">
              At Chameleo GFX Studio, we help startups, local businesses, and growing brands build a powerful online presence through strategic web development, SEO services, branding, UI/UX design, and digital marketing. Our team creates fast, modern, and conversion-focused digital experiences designed to generate leads, increase visibility, and drive long-term business growth.
            </p>

            {/* Action Buttons */}
            <div className="agency-hero-btns">
              <a href="tel:+919737472636" className="agency-hero-btn btn-red">
                Get Free Consultation
              </a>

              <Link
                to="#website-crafted"
                className="agency-hero-btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById('website-crafted');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Work
              </Link>

              <Link to="/services" className="agency-hero-btn btn-white">
                Explore Our Services
              </Link>
            </div>



            {/* Stats Row */}
            <div className="agency-hero-stats">
              <div className="agency-hero-stat-item">
                <FaStar className="agency-hero-stat-icon" />
                <span>5-Star Rated Agency</span>
              </div>
              <div className="agency-hero-stat-item">
                <FaUsers className="agency-hero-stat-icon" />
                <span>150+ Happy Clients</span>
              </div>
              <div className="agency-hero-stat-item">
                <FaShieldAlt className="agency-hero-stat-icon" />
                <span>Trusted Since 2019</span>
              </div>
              <div className="agency-hero-stat-item">
                <FaChartLine className="agency-hero-stat-icon" />
                <span>₹6Cr+ Revenue Generated</span>
              </div>
            </div>

            {/* Trust Line */}
            <p className="agency-hero-trust-line">
              Trusted by Businesses Across India and Globally for Website Design, SEO, Branding & Growth Marketing
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AgencyHero;
