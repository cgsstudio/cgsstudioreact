import React from "react";
import CountUp from "react-countup";
import ExperienceImg from "../../../assets/images/v1/6th_years.webp";

function StatsSection() {
    return (
        <div className="section py-5">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Experience Badge */}
                    <div className="col-lg-3 mb-4 mb-lg-0 text-center text-lg-start">
                        <div className="d-inline-block position-relative ">
                            <img
                                src={ExperienceImg}
                                alt="6 Years of Experience"
                                className="img-fluid stats-experience-img rotating-border-content"
                            />
                        </div>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="col-lg-9">
                        <div className="row g-4">
                            {/* Stat 1 */}
                            <div className="col-md-6 col-sm-6">
                                <div className="text-center p-5 h-100 rounded-3 d-flex flex-column justify-content-center stats-card">
                                    <h3 className="display-4 fw-bold text-white">
                                        <span className="text-black">500</span>+
                                    </h3>
                                    <p className="fw-bold mb-0 text-black">Projects Done</p>
                                </div>
                            </div>
                            {/* Stat 2 */}
                            <div className="col-md-6 col-sm-6">
                                <div className="text-center p-5 h-100 rounded-3 d-flex flex-column justify-content-center stats-card">
                                    <h3 className="display-4 fw-bold text-black">
                                        <span className="text-black">10</span>+
                                    </h3>
                                    <p className="fw-bold mb-0 text-black">Global Location</p>
                                </div>
                            </div>
                            {/* Stat 3 */}
                            <div className="col-md-6 col-sm-6">
                                <div className="text-center p-5 h-100 rounded-3 d-flex flex-column justify-content-center stats-card">
                                    <h3 className="display-4 fw-bold text-blacke">
                                        <span className="text-black">215</span>+
                                    </h3>
                                    <p className="fw-bold mb-0 text-blacktext-black">Happy Clients</p>
                                </div>
                            </div>
                            {/* Stat 4 */}
                            <div className="col-md-6 col-sm-6">
                                <div className="text-center p-5 h-100 rounded-3 d-flex flex-column justify-content-center stats-card">
                                    <h3 className="display-4 fw-bold text-black">
                                        <span className="text-black">50</span>+
                                    </h3>
                                    <p className="fw-bold mb-0 text-black">Employees Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsSection;
