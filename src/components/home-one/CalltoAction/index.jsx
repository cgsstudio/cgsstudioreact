import React from 'react';
import { Link } from 'react-router-dom';
import './CalltoAction.css';

const CalltoAction = () => {
    return (
        <section className="cta-section" id="cta">
            <div className="container">
                <div className="cta-box">
                    <div className="cta-content">
                        <span className="cta-label-pill">Let's Get Started</span>
                        <h2 className="cta-main-title">
                            Ready to <span className="accent">10x</span> Your Business?
                        </h2>
                        <p className="cta-desc">
                            Book a free strategy call today. No pressure, no sales pitch – just a clear, honest conversation about how we can help your business grow.
                        </p>
                        
                        <div className="cta-btns">
                            <Link to="/contact-us" className="btn-primary-cta">
                                Book Free Consultation
                            </Link>
                            <a href="https://wa.me/917878787878" className="btn-whatsapp-cta" target="_blank" rel="noopener noreferrer">
                                💬 Chat on WhatsApp
                            </a>
                            <Link to="/contact-us" className="btn-outline-cta">
                                Get Free Audit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalltoAction;
