import React from "react";
import CountUp from "react-countup";
import ExperienceImg from "../../../assets/images/v1/certificate.webp";

function StatsSection() {
    return (
        <div className="stats-section py-5">
            <div className="container">
                <div className="row g-4 align-items-stretch">
                    {/* Left Column: Experience Badge Card */}
                    <div className="col-lg-4">
                        <div className="stats-experience-card h-100 d-flex align-items-center justify-content-center p-4">
                            <img
                                src={ExperienceImg}
                                alt="7 Years of Experience"
                                className="img-fluid stats-experience-img"

                            />
                        </div>
                    </div>

                    {/* Right Column: Stats Grid */}
                    <div className="col-lg-8 stat-grid">
                        <div className="row h-100 px-3">
                            {/* Stat 1 - Projects Done */}
                            <div className="col-md-6  col-6 p-0">
                                <div className="stats-card stats-card-1  h-100 text-center d-flex flex-column justify-content-center p-4">
                                    <h2 className="stats-number  mb-2">
                                        <CountUp end={500} duration={2.5} suffix="+" />
                                    </h2>
                                    <p className="stats-label mb-0">Projects Done</p>
                                </div>
                            </div>

                            {/* Stat 2 - Global Location */}
                            <div className="col-md-6 col-6 p-0">
                                <div className="stats-card stats-card-2 h-100 text-center d-flex flex-column justify-content-center p-4">
                                    <h2 className="stats-number  mb-2">
                                        <CountUp end={10} duration={2.5} suffix="+" />
                                    </h2>
                                    <p className="stats-label mb-0">Global Location</p>
                                </div>
                            </div>

                            {/* Stat 3 - Happy Clients */}
                            <div className="col-md-6 col-6 p-0">
                                <div className="stats-card stats-card-3 h-100 text-center d-flex flex-column justify-content-center p-4">
                                    <h2 className="stats-number  mb-2">
                                        <CountUp end={215} duration={2.5} suffix="+" />
                                    </h2>
                                    <p className="stats-label mb-0">Happy Clients</p>
                                </div>
                            </div>

                            {/* Stat 4 - Employees Work */}
                            <div className="col-md-6 col-6 p-0">
                                <div className="stats-card stats-card-4 h-100 text-center d-flex flex-column justify-content-center p-4">
                                    <h2 className="stats-number  mb-2">
                                        <CountUp end={20} duration={2.5} suffix="+" />
                                    </h2>
                                    <p className="stats-label mb-0">Employees Work</p>
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
