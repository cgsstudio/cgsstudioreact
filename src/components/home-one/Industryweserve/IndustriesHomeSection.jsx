import React from "react";
import "./IndustriesHomeSection.css";
import education from "../../../assets/images/icon/Education.svg";
import healthcare from "../../../assets/images/icon/Group 6.svg";
import ecommerce from "../../../assets/images/icon/E-commerce.svg";
import RealEstate from "../../../assets/images/icon/Real Estate.svg";
import Finance from "../../../assets/images/icon/Banking.svg";
import hospitality from "../../../assets/images/icon/Food.svg";
import Technology from "../../../assets/images/icon/Social.svg";
import Automotive from "../../../assets/images/icon/Automobile.svg";
import Retail from "../../../assets/images/icon/Retail.svg";
import Sports from "../../../assets/images/icon/dumbbell.svg";
import Beauty from "../../../assets/images/icon/Fashion.svg";
import Manufacturing from "../../../assets/images/icon/Transport.svg";
import Hotel from "../../../assets/images/icon/Hotel.svg";

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
    { title: "Hotel", icon: Hotel },
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
        <div className="section aximo-section-padding3 pt-3 pb-0 pt-md-5 pb-md-5 bg-black" >
            <div className="container">
                <div className="row align-items-center">
                    {/* Industries Grid Table - Left Side */}
                    <div className="col-lg-7 mb-5 mb-lg-0 order-2 order-lg-1 pt-5 pt-lg-0">
                        {/* Animated Border Container */}
                        <div
                            style={{
                                padding: '2px',
                                backgroundImage: `linear-gradient(${rotation}deg, #ed1d24, #fcba03, #fcba03, #ed1d24)`,
                                borderRadius: '10px',
                                backgroundSize: '300% 300%',
                            }}
                        >
                            <div
                                style={{
                                    background: 'linear-gradient(135deg, #2d2d2d 0%, #1e1e1e 100%)',
                                    borderRadius: '8px',
                                    overflow: 'hidden'
                                }}
                            >
                                <div className="row g-0">
                                    {industries.map((industry, index) => (
                                        <div
                                            key={index}
                                            className="col-6 col-md-3 industry-cell"
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
                                                            color: '#fdfde1',
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
                    <div className="col-lg-5 order-1 order-lg-2">
                        <div className="aximo-default-content industries-content m-0">
                            <span
                                className="aximo-subtitle "
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#fdfde1',
                                    textTransform: 'none',
                                    marginBottom: '15px',
                                    display: 'inline-block'
                                }}
                            >
                                Shaping the Digital Future
                            </span>
                            <h2
                                className="aximo-title "
                                style={{
                                    fontSize: '42px',
                                    fontWeight: '700',
                                    color: '#fdfde1',
                                    lineHeight: '1.3',
                                    marginBottom: '25px'
                                }}
                            >
                                Advanced Development<br /> & Intelligent Coding
                            </h2>
                            <p
                                className="industry-description m-0"
                                style={{
                                    fontSize: '15px',
                                    lineHeight: '1.8',
                                    color: '#fdfde1',
                                    marginBottom: '0'
                                }}
                            >
                                We deliver smart, scalable development solutions across healthcare, finance, education, retail, real estate, and more. Our expert team builds high-performance digital platforms that enhance user experiences, streamline operations, and drive sustainable business growth across industries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndustriesHomeSection;
