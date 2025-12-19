import React from 'react';
import { FiTarget, FiCode, FiCheckCircle, FiEdit2 } from 'react-icons/fi';
import './HowWeWork.css';

const HowWeWork = () => {
    const workSteps = [
        {
            id: 1,
            title: "Discover & Understand",
            icon: FiTarget,
            description: "We start by understanding your business, goals, and target audience. This ensures every design decision is aligned with your brand vision. "
        },
        {
            id: 2,
            title: "Strategy & Planning",
            icon: FiCode,
            description: "We define the brand strategy, structure, and creative direction. A clear roadmap is created to deliver measurable business results."
        },
        {
            id: 3,
            title: "Design & Development",
            icon: FiCheckCircle,
            description: "We design and build high-quality, scalable brand and web solutions. Every element is crafted for performance, usability, and consistency."
        },
        {
            id: 4,
            title: "Launch & Growth",
            icon: FiEdit2,
            description: "We launch, test, and optimize for real-world performance. Our focus is long-term growth, engagement, and conversions."
        }
    ];

    return (
        <div className="how-we-work-section section py-5">
            <div className="container">
                {/* Section Title */}
                <div className="aximo-section-title center py-2">
                    <div className="">
                        <span className="tag-label text-whitesmoke">Clear Steps for Better Results</span>
                    </div>
                    <h2 className='mb-2 text-whitesmoke'>Our Development Process</h2>
                </div>

                {/* Work Steps Grid */}
                <div className="work-steps-grid">
                    {workSteps.map((step) => (
                        <div key={step.id} className="work-step-card">
                            <div className="step-icon">
                                <step.icon className="icon-component" />
                            </div>
                            <h4 className="step-title">{step.title}</h4>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
