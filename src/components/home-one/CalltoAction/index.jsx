import React from 'react';
import { Link } from 'react-router-dom';
import './CalltoAction.css';

const CalltoAction = ({
    title = "Ready to Get Started?",
    description = "Take your business to the next level with our innovative solutions. Contact us today to discuss your project.",
    btnText = "Contact Us",
    btnLink = "/contact-us",
    centered = false,
}) => {


    return (
        <div
            className="cta-section">

            <div className="container">
                <div className="cta-content ">
                    <div className="cta-text-content">
                        <h2 className="cta-title">{title}</h2>
                        <p className="cta-description">{description}</p>
                    </div>

                    <div className="cta-button-wrapper">
                        <Link to={btnLink} className="cta-btn">
                            {btnText}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalltoAction;
