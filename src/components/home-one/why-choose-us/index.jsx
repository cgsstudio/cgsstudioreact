import React from "react";
import { FiCheck } from "react-icons/fi";
import "./WhyChooseUs.css";

function WhyChooseUs() {
    return (
        <section className="why-choose-us-section">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Advantages List */}
                    <div className="col-lg-6">
                        <div className="advantage-content">
                            <span className="advantage-label">Our Advantage</span>
                            <h2 className="advantage-title">Why Businesses Choose Chameleo GFX Studio</h2>
                            
                            <div className="advantage-list">
                                <div className="advantage-item">
                                    <div className="check-icon-wrapper">
                                        <FiCheck strokeWidth={3} />
                                    </div>
                                    <div className="advantage-item-info">
                                        <h4 className="advantage-item-title">Results-driven strategies</h4>
                                        <p className="advantage-item-desc">We don't just execute tasks; we pursue goals that move your bottom line.</p>
                                    </div>
                                </div>

                                <div className="advantage-item">
                                    <div className="check-icon-wrapper">
                                        <FiCheck strokeWidth={3} />
                                    </div>
                                    <div className="advantage-item-info">
                                        <h4 className="advantage-item-title">Focus on leads and ROI</h4>
                                        <p className="advantage-item-desc">Every rupee spent with us is tracked against its ability to generate business.</p>
                                    </div>
                                </div>

                                <div className="advantage-item">
                                    <div className="check-icon-wrapper">
                                        <FiCheck strokeWidth={3} />
                                    </div>
                                    <div className="advantage-item-info">
                                        <h4 className="advantage-item-title">Customized solutions</h4>
                                        <p className="advantage-item-desc">No cookie-cutter strategies. We build what your unique business needs.</p>
                                    </div>
                                </div>

                                <div className="advantage-item">
                                    <div className="check-icon-wrapper">
                                        <FiCheck strokeWidth={3} />
                                    </div>
                                    <div className="advantage-item-info">
                                        <h4 className="advantage-item-title">Expert team with fast delivery</h4>
                                        <p className="advantage-item-desc">Experienced professionals who value your time as much as you do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Growth System Card */}
                    <div className="col-lg-6">
                        <div className="growth-card-main">
                            <h3 className="growth-card-title">We Don't Just Design — We Build Growth Systems</h3>
                            
                            <div className="growth-sub-grid">
                                <div className="growth-sub-card">
                                    <span className="growth-sub-emoji">🎯</span>
                                    <h5 className="growth-sub-title">Conversion-focused</h5>
                                    <p className="growth-sub-desc">Every pixel is placed to guide the user towards a conversion.</p>
                                </div>

                                <div className="growth-sub-card">
                                    <span className="growth-sub-emoji">🔍</span>
                                    <h5 className="growth-sub-title">SEO-optimized</h5>
                                    <p className="growth-sub-desc">Technical structure designed to outrank your competitors.</p>
                                </div>

                                <div className="growth-sub-card">
                                    <span className="growth-sub-emoji">⚡</span>
                                    <h5 className="growth-sub-title">Performance-driven</h5>
                                    <p className="growth-sub-desc">Lightning fast load times to keep your engagement rates high.</p>
                                </div>

                                <div className="growth-sub-card">
                                    <span className="growth-sub-emoji">📈</span>
                                    <h5 className="growth-sub-title">Scalable solutions</h5>
                                    <p className="growth-sub-desc">Systems that grow with you, from 10 users to 10 million.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
