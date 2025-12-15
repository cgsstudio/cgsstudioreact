import React from 'react';
import { FiTarget, FiCode, FiCheckCircle, FiEdit2 } from 'react-icons/fi';
import './HowWeWork.css';

const HowWeWork = () => {
    const workSteps = [
        {
            id: 1,
            title: "Planning",
            icon: FiTarget,
            description: "We first create a plan. Our plan will help you determine your website's goals. "
        },
        {
            id: 2,
            title: "Development",
            icon: FiCode,
            description: "This stage is all about shaping the raw ideas into functional reality by weaving all the technologies together."
        },
        {
            id: 3,
            title: "Testing & Deployment",
            icon: FiCheckCircle,
            description: "We make sure that everything is functioning correctly. We only launch once the website passes all tests."
        },
        {
            id: 4,
            title: "Design",
            icon: FiEdit2,
            description: "We decide and design the overall look and feel of your website, choosing colors, fonts, etc"
        }
    ];

    return (
        <div className="how-we-work-section section py-5">
            <div className="container">
                {/* Section Title */}
                <div className="aximo-section-title center py-5">
                    <div className="small-tag">
                        <span className="tag-label">Clear Steps for Better Results</span>
                    </div>
                    <h2 className='mb-2'>Our Development Process</h2>
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
