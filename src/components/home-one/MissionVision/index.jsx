import React from "react";
import { Target, Telescope } from "lucide-react";
import "./mission-vision.css";

function MissionVision() {
    return (
        <div className="section mission-vision-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration="600">
                        <div className="mission-vision-card mission-card">
                            <div className="mission-vision-header">
                                <h3 className="mission-vision-title">Mission</h3>
                                <div className="mission-vision-icon">
                                    <Target size={48} strokeWidth={1.5} color="#ed1d24" />
                                </div>
                            </div>
                            <p className="mission-vision-text">
                                At Synarion IT Solutions, our mission is to harness the power of
                                technology to drive innovation and empower businesses worldwide.
                                Established in 2017, we boast a dedicated team of over 50
                                talented professionals, committed to delivering results-driven
                                digital marketing solutions. With a track record of 500+
                                successful projects and counting, we prioritize client
                                satisfaction above all else. Our relentless pursuit of excellence
                                ensures that we consistently provide quality services, helping
                                our clients achieve their goals and stay ahead in today's digital
                                era.
                            </p>
                            <span className="watermark-text">Achieve</span>
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
                                    <Telescope size={48} strokeWidth={1.5} color="#f4b905" />
                                </div>
                            </div>
                            <p className="mission-vision-text">
                                Our vision at Synarion IT Solutions is to be a globally
                                recognized leader in digital transformation, renowned for our
                                unwavering commitment to innovation, excellence, and client
                                satisfaction. We strive to continuously push boundaries,
                                leveraging cutting-edge technologies and strategic insights to
                                drive sustainable growth and success for our clients. By
                                fostering a culture of collaboration, creativity, and continuous
                                improvement, we aim to inspire positive change and make a
                                meaningful impact on businesses and communities around the world.
                            </p>
                            <span className="watermark-text">Planned</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionVision;
