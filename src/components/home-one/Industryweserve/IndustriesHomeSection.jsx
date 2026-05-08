import React from "react";
import "./IndustriesHomeSection.css";

const industries = [
    { title: "Healthcare", emoji: "❤️" },
    { title: "Sports", emoji: "🏋️" },
    { title: "Finance", emoji: "💰" },
    { title: "Food", emoji: "🍔" },
    { title: "Education", emoji: "🎓" },
    { title: "Social", emoji: "📱" },
    { title: "Auto", emoji: "🚗" },
    { title: "Real Estate", emoji: "🏠" },
    { title: "Retail", emoji: "🏪" },
    { title: "Fashion", emoji: "👗" },
    { title: "Transport", emoji: "🚛" },
    { title: "Hotel", emoji: "🏨" },
];

const IndustriesHomeSection = () => {
    return (
        <section className="industry-section" id="industries">
            <div className="container">
                {/* Full-Width Section Header - Left Aligned */}
                <div className="row mb-4 mb-lg-5">
                    <div className="col-12">
                        <div className="industry-sub-title-wrapper">
                            <span className="industry-label-pill">
                                <span className="industry-title-dot"></span>
                                Shaping the Digital Future
                            </span>
                        </div>
                        <h2 className="industry-main-title" style={{ maxWidth: '1000px' }}>
                            Advanced Development & <span className="red-text-gradient">Intelligent Coding</span> for Global Brands
                        </h2>
                    </div>
                </div>

                <div className="row align-items-center">
                    {/* Left Side: Industry Card Grid */}
                    <div className="col-lg-7 order-2 order-lg-1">
                        <div className="industry-grid">
                            {industries.map((item, index) => (
                                <div key={index} className="industry-card">
                                    <span className="industry-icon-emoji">{item.emoji}</span>
                                    <span className="industry-card-title">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="col-lg-5 order-1 order-lg-2 industry-content-col">
                        <p className="industry-desc" style={{ textAlign: 'left' }}>
                            As a premier <strong>Web Development Company in India</strong>, we engineer high-performance solutions for diverse sectors. Our team combines deep technical expertise with conversion-focused strategy to drive sustainable growth.
                        </p>

                        <div className="industry-features">
                            <div className="feature-check-item">
                                <div className="check-icon">✓</div>
                                <span className="feature-text">Leading <strong>E-commerce Development</strong> Experts</span>
                            </div>
                            <div className="feature-check-item">
                                <div className="check-icon">✓</div>
                                <span className="feature-text">Robust <strong>Business Website</strong> Frameworks</span>
                            </div>
                            <div className="feature-check-item">
                                <div className="check-icon">✓</div>
                                <span className="feature-text">Premium <strong>UI/UX Design</strong> Standards</span>
                            </div>
                        </div>

                        <button className="industry-cta-btn" onClick={() => window.location.href = '/contact-us'}>
                            Scale Your Industry Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustriesHomeSection;
