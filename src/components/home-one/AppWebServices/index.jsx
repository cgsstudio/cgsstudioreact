import React from "react";
import { Link } from "react-router-dom";
import "./app-web-services.css";
import { 
  FaCode, 
  FaChartBar, 
  FaMousePointer, 
  FaUsers, 
  FaBolt, 
  FaPaintBrush 
} from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaCode size={24} />,
    description: "Top-tier Custom Website Development using Next.js, React, and high-performance stacks. We build sites that load in milliseconds and convert like crazy.",
    features: ["Next-Gen Tech Stack", "Ultra-Fast Page Speeds", "Mobile-First Architecture"],
    btnText: "Learn More",
    link: "/services/web-development"
  },
  {
    id: 2,
    title: "SEO Mastery",
    icon: <FaChartBar size={24} />,
    description: "Data-backed SEO Services in India to skyrocket your organic rankings. We don't just rank keywords; we drive revenue-generating traffic.",
    features: ["ROI-Focused Keyword Strategy", "Technical & Content Audit", "Quality Link Building"],
    btnText: "Get Rank Analysis",
    link: "/services/digital-marketing/seo-company-in-ahmedabad"
  },
  {
    id: 3,
    title: "Google Ads",
    icon: <FaMousePointer size={24} />,
    description: "Precision targeting with our Google Ads Agency experts. We manage high-budget campaigns that deliver immediate leads and measurable growth.",
    features: ["Optimized Ad Copy", "Conversion Tracking", "Daily Performance Monitoring"],
    btnText: "Audit My Ads",
    link: "/services/digital-marketing/google-ads-management-agency"
  },
  {
    id: 4,
    title: "Meta Ads",
    icon: <FaUsers size={24} />,
    description: "Dominate Facebook and Instagram with advanced Meta Ads Services. We build brand loyalty and drive direct sales through creative storytelling.",
    features: ["Custom Audience Funnels", "Video Ad Production", "Dynamic Remarketing"],
    btnText: "Grow My Social",
    link: "/services/digital-marketing/meta-ads-management-company"
  },
  {
    id: 5,
    title: "AI Solutions",
    icon: <FaBolt size={24} />,
    description: "Future-proof your business with our AI Automation Agency. We integrate LLMs and smart workflows to reduce overhead and increase output.",
    features: ["Custom AI Chatbots", "Workflow Automation", "Data Analysis Models"],
    btnText: "Automate Now",
    link: "/services/ai-development"
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <FaPaintBrush size={24} />,
    description: "World-class UI/UX Design Company providing SaaS-inspired interfaces. We focus on the user journey to ensure maximum retention and engagement.",
    features: ["User-Centric Research", "High-Fidelity Prototypes", "Interaction Design"],
    btnText: "See Designs",
    link: "/services/ui-ux-design"
  }
];

function AppWebServices() {
  return (
    <section className="services-section">
      <div className="glow-effect glow-bottom-right"></div>
      
      <div className="container">
        <div className="services-header">
          <div className="services-sub-title-wrapper">
            <span className="services-sub-title-pill">
              <span className="services-title-dot"></span>
              What we do
            </span>
          </div>
          <h2 className="services-main-title">
            Cutting-Edge Solutions for <br />
            <span className="red-text-gradient">Scalable Business Growth.</span>
          </h2>
          <p className="services-description">
            We don't just build websites; we create digital engines. As a premier <strong>Web Development Company in India</strong>, our services are engineered to dominate search results and maximize conversions.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="glass-card">
              <div className="card-icon-box">
                {service.icon}
              </div>
              <h4 className="card-title">{service.title}</h4>
              <p className="card-text">
                {service.description}
              </p>
              <ul className="feature-list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <span className="feature-dot">✦</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to={service.link} className="card-btn-link">
                <button className="card-btn">
                  {service.btnText}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppWebServices;
