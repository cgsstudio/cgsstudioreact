import React from 'react';
import './FooterTop.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaBehance } from "react-icons/fa6";
import Logo from "../../../assets/images/logo/Cgs_Logo.png"; // Importing project logo as placeholder/actual usage
import { Link } from 'react-router-dom';

const FooterTop = () => {
    return (
        <div className="footer-top-container">
            <div className="footer-top-row">
                <div className="footer-logo">
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                </div>

                <div className="footer-contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">
                            <FaPhoneAlt />
                        </div>
                        <div className="contact-details">
                            <span className="contact-label">READY TO BUILD? LET'S TALK!</span>
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
                            <a
                                href="https://maps.app.goo.gl/kY3NFMatS1iMAFbZ6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-value"
                                style={{ fontSize: '14px', lineHeight: '1.4' }}
                            >
                                F - 1001, F Block, PNTC,<br /> Times Of India Press Rd,<br /> Ahmedabad, Gujarat 380015
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom-row">

                <div className="footer-social-icons">
                    <a href="https://www.instagram.com/chameleogfxstudio/" className="social-icon"><FaInstagram /></a>
                    <a href="https://www.facebook.com/chameleogfxstudio" className="social-icon"><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/company/chameleogfxstudio/" className="social-icon"><FaLinkedinIn /></a>
                    <a href="https://www.behance.net/nirajmandaliya" className="social-icon"><FaBehance /></a>
                    <a href="https://in.pinterest.com/chameleogfxstudio/" className="social-icon"><FaPinterestP /></a>
                    <a href="https://www.youtube.com/@chameleogfxstudio" className="social-icon"><FaYoutube /></a>


                </div>
            </div>
        </div>
    );
};

export default FooterTop;
