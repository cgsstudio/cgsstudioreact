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
    const [rotation, setRotation] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="section aximo-section-padding3" >
            <div className="container">
                <div className="row align-items-center">
                    {/* Industries Grid Table - Left Side */}
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        {/* Animated Border Container */}
                        <div
                            style={{
                                padding: '2px',
                                background: `linear-gradient(${rotation}deg, #00d4ff, #7b2ff7, #f107a3, #00d4ff)`,
                                borderRadius: '10px',
                                backgroundSize: '300% 300%',
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '8px',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="row g-0">
                                    {industries.map((industry, index) => (
                                        <div
                                            key={index}
                                            className="col-6 col-md-3"
                                            style={{
                                                borderRight: (index % 4 !== 3) ? '1px solid #e0e0e0' : 'none',
                                                borderBottom: (index < 8) ? '1px solid #e0e0e0' : 'none'
                                            }}
                                        >
                                            <div
                                                className="text-center"
                                                style={{
                                                    padding: '25px 15px',
                                                    height: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    transition: 'background-color 0.3s ease',
                                                    cursor: 'pointer'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.backgroundColor = 'transparent';
                                                }}
                                            >
                                                <div className="mb-3">
                                                    <img
                                                        src={industry.icon}
                                                        alt={industry.title}
                                                        style={{ height: "55px", width: "auto" }}
                                                    />
                                                </div>
                                                <div>
                                                    <h3
                                                        className="mb-0"
                                                        style={{
                                                            fontSize: '12px',
                                                            fontWeight: '600',
                                                            color: '#1a1a1a',
                                                            lineHeight: '1.4'
                                                        }}
                                                    >
                                                        {industry.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content - Right Side */}
                    <div className="col-lg-5">
                        <div className="aximo-default-content text-end" style={{ paddingLeft: '40px' }}>
                            <span
                                className="aximo-subtitle "
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#666',
                                    textTransform: 'none',
                                    marginBottom: '15px',
                                    display: 'inline-block'
                                }}
                            >
                                Building the Future
                            </span>
                            <h2
                                className="aximo-title "
                                style={{
                                    fontSize: '42px',
                                    fontWeight: '700',
                                    color: '#1a1a1a',
                                    lineHeight: '1.3',
                                    marginBottom: '25px'
                                }}
                            >
                                Development & Coding<br />
                                Talent Redefining Industries
                            </h2>
                            <p
                                style={{
                                    fontSize: '15px',
                                    lineHeight: '1.8',
                                    color: '#555',
                                    marginBottom: '0'
                                }}
                            >
                                Lead the gaming industry with innovative game concepts, captivating audiences, and generating billion-dollar revenues through Synarion IT Solutions' visionary approach to game development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesHomeSection;
