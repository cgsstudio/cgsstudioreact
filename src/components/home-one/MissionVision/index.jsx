import React from "react";
import { Target, Telescope } from "lucide-react";
import "./mission-vision.css";

function MissionVision() {
    return (
        <div className="section bg-black mission-vision-section">
            <div className="container">
                <div className="row gy-4 ">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="600">
                        <div className="mission-vision-card mission-card">
                            <div className="mission-vision-header">
                                <h3 className="mission-vision-title">Mission</h3>
                                <div className="mission-vision-icon">
                                    <Target size={48} strokeWidth={1.5} color="#ed1d24" />
                                </div>
                            </div>
                            <p className="mission-vision-text">
                                To deliver visually stunning designs, seamless digital experiences, and impactful marketing solutions that drive real results. Through a client-focused approach and relentless innovation, we partner with businesses to elevate their brand presence, engage their audiences, and unlock their full potential. We are committed to combining artistic excellence with strategic insights and emerging technologies, including AI, to help every brand we work with thrive and lead in their market.
                            </p>

                        </div>
                    </div>
                    <div
                        className="col-lg-6"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        <div className="mission-vision-card vision-card">
                            <div className="mission-vision-header">
                                <h3 className="mission-vision-title">Vision</h3>
                                <div className="mission-vision-icon">
                                    <Telescope size={48} strokeWidth={1.5} color="#f40505ff" />
                                </div>
                            </div>
                            <p className="mission-vision-text">
                                We envision a future where every business has access to world-class creative services that transform brands into market leaders. By setting new industry benchmarks in graphic design, branding, UI/UX, AI-powered solutions, and digital innovation, we push the boundaries of visual communication and redefine what's possible. Combining artistic excellence with strategic thinking and cutting-edge AI technology, we empower businesses to dominate in the digital landscape. We are the catalyst for brand transformation, helping organizations establish powerful, memorable identities that resonate with audiences and stand the test of time, ensuring our clients don't just survive, but thrive and lead their markets.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionVision;
