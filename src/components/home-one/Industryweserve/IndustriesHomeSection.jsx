import React from "react";
import education from "../../../assets/images/icon/Education.svg";
import healthcare from "../../../assets/images/icon/Healthcare.svg";
import ecommerce from "../../../assets/images/icon/E-commerce.svg";
import RealEstate from "../../../assets/images/icon/Real Estate.svg";
import Finance from "../../../assets/images/icon/Finance.svg";
import hospitality from "../../../assets/images/icon/Hospitality & Travel.svg";
import Technology from "../../../assets/images/icon/Technology & IT.svg";
import Automotive from "../../../assets/images/icon/Automotive.svg";
import Retail from "../../../assets/images/icon/Retail & Consumer Goods.svg";
import Sports from "../../../assets/images/icon/Sports & Fitness.svg";
import Beauty from "../../../assets/images/icon/Beauty & Fashion.svg";
import Manufacturing from "../../../assets/images/icon/Manufacturing & Industrial.svg";

const industries = [
    { title: "Healthcare & Fitness", icon: healthcare },
    { title: "Sports", icon: Sports },
    { title: "Banking & Finance", icon: Finance },
    { title: "Food & Restaurant", icon: hospitality },
    { title: "Education", icon: education },
    { title: "Social Networking", icon: Technology },
    { title: "Automobile", icon: Automotive },
    { title: "Real Estate", icon: RealEstate },
    { title: "Retail", icon: Retail },
    { title: "Fashion & Ecommerce", icon: Beauty },
    { title: "Transports", icon: Manufacturing },
    { title: "Hotel", icon: hospitality },
];

const IndustriesHomeSection = () => {
    return (
        <div className="section aximo-section-padding3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className="row g-4">
                            {industries.map((industry, index) => (
                                <div key={index} className="col-6 col-md-4 col-lg-4">
                                    <div className="aximo-iconbox-wrap text-center p-3" style={{ backgroundColor: '#fff', borderRadius: '10px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <div className="aximo-iconbox-icon mb-3">
                                            <img src={industry.icon} alt={industry.title} style={{ height: "50px", width: "auto" }} />
                                        </div>
                                        <div className="aximo-iconbox-data">
                                            <h3 className="h6 mb-0" style={{ fontSize: '14px', fontWeight: 'bold' }}>{industry.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="aximo-default-content aximo-p2-ml">
                            <span className="aximo-subtitle">Building the Future</span>
                            <h2 className="aximo-title text-black">
                                Development & Coding Talent Redefining Industries
                            </h2>
                            <p>
                                Lead the gaming industry with innovative game concepts, captivated audiences, and generating billion-dollar revenues through Synarion IT Solutions' visionary approach to game development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesHomeSection;
