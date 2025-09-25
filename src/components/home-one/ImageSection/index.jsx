import React from "react";
import Star2Img from "../../../assets/images/v1/star2.png";
import image1 from "../../../assets/images/Certifications/chamaleogfxstudio.png";
import image2 from "../../../assets/images/Certifications/review-google.png";
import image3 from "../../../assets/images/Certifications/Frame-3.webp";
import image4 from "../../../assets/images/Certifications/Frame-4.webp";

function ImageSection() {
    return (
        <div className="aximo-section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="aximo-section-title-Certifications center">
                            <h2>Global Recognition & Certifications
                                <span className="aximo-title-animation">

                                    <span className="aximo-title-icon">
                                        <img className="shape-color" src={Star2Img} alt="Star2Img" />
                                    </span>
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Flexbox row for equal images */}
                <div
                    className="d-flex  flex-wrap gap-4"
                    style={{ marginTop: "30px" }}
                >
                    {/* First Image (Clutch link) */}
                     <div className="image-section-card">
                        <a
                            href="https://g.page/r/Cbnq-ryCGnacEAE/review"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={image2}
                                alt="Google Reviews"
                                style={{ width: "200px", height: "120px", objectFit: "contain" }}
                            />
                        </a>
                    </div>
                   

                    {/* Second Image (Google Review link) */}
                    <div className="image-section-card">
                        <a
                            href="https://clutch.co/profile/vulture-concepts"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={image1}
                                alt="Chameleo GFX Studio Certification"
                                style={{ width: "200px", height: "120px", objectFit: "contain" }}
                            />
                        </a>
                    </div>

                    {/* Third Badge (GoodFirms link) */}
                    <div className="image-section-card">
                        <a
                            href="https://www.goodfirms.co/company/chameleo-gfx-studio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="https://assets.goodfirms.co/badges/color-badge/top-web-design-companies.svg"
                                title="Top Web Designing (UI/UX) Company"
                                alt="Top Web Designing (UI/UX) Company on GoodFirms"
                                style={{ width: "200px", height: "120px", objectFit: "contain" }}
                            />
                        </a>
                    </div>

                    {/* Fourth Image */}
                    <div className="image-section-card">
                        <img
                            src={image3}
                            alt="Certification Badge"
                            style={{ width: "200px", height: "120px", objectFit: "contain" }}
                        />
                    </div>

                    {/* Fifth Image */}
                    <div className="image-section-card">
                        <img
                            src={image4}
                            alt="Certification Badge"
                            style={{ width: "200px", height: "120px", objectFit: "contain" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageSection;
