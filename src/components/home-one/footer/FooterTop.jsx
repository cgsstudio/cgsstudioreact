import React from 'react';
import './FooterTop.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../../../assets/images/logo/Cgs_Logo.png"; // Importing project logo as placeholder/actual usage

const FooterTop = () => {
    return (
        <div className="footer-top-container">
            <div className="footer-top-row">
                <div className="footer-logo">
                    {/* Using project logo, but styled to fit or just generic structure if needed. 
              The image shows "SYNARION". Since we are building for "Chameleo", we use Chameleo logo.
          */}
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="footer-contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaPhoneAlt />
                        </div>
                        <div className="contact-details">
                            <span className="contact-label">READY TO BUILD? LET'S TALK!</span>
                            <a href="tel:+918460384838" className="contact-value">+91-846-038-4838</a>
                            <a href="tel:+919737472636" className="contact-value">+91-973-747-2636</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>
                        <div className="contact-details">
                            <span className="contact-label">MAIL TO OUR SALES DEPARTMENT</span>
                            <a href="mailto:info@chameleogfxstudio.com" className="contact-value">info@chameleogfxstudio.com</a>
                            <a href="mailto:sales@chameleogfxstudio.com" className="contact-value">sales@chameleogfxstudio.com</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="contact-details">
                            <span className="contact-label">OUR OFFICE ADDRESS</span>
                            <span className="contact-value" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                                F - 1001, F Block, PNTC, Times Of India Press Rd,<br />
                                Rajmani Society, Satellite, Shyamal,<br />
                                Ahmedabad, Gujarat 380015
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom-row">

                <div className="footer-social-icons">
                    <a href="#" className="social-icon"><FaFacebookF /></a>
                    <a href="#" className="social-icon"><FaXTwitter /></a>
                    <a href="#" className="social-icon"><FaInstagram /></a>
                    <a href="#" className="social-icon"><FaPinterestP /></a>
                    <a href="#" className="social-icon"><FaYoutube /></a>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
