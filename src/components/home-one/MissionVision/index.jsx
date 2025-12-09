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
                                At Chameleo GFX Studio, we are committed to blending creativity, strategy, and technical excellence to build powerful brand identities and digital experiences. We strive to deliver visually stunning design, intuitive UI/UX, responsive web development, and effective digital marketing that reflect each client’s unique story. By offering tailored, end-to-end solutions, from logo design to SEO and social media campaigns, we empower businesses to connect deeply with their audience, grow their online presence, and achieve meaningful results that truly resonate.
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
                                We envision Chameleo GFX Studio as a creative beacon that transforms ideas into digital realities, enabling businesses of all sizes, from startups to enterprises, to stand out in a crowded digital world. Our goal is to build a future where every brand we work with becomes a memorable brand, with seamless user experiences, engaging visuals, and a strong online presence. Through innovation, integrity, and collaboration, we aim to set new standards in design excellence and become the trusted partner for brands seeking growth and distinction.
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
