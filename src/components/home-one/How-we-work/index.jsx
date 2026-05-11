import React from 'react';
import './HowWeWork.css';

const workSteps = [
    {
        id: "01",
        title: "Discovery Call",
        description: "We understand your business, goals, and challenges in a free 30-minute call."
    },
    {
        id: "02",
        title: "Custom Strategy",
        description: "We build a tailored growth plan specific to your industry and audience."
    },
    {
        id: "03",
        title: "Execution",
        description: "Our team gets to work. Builds, launches, optimizes with regular updates."
    },
    {
        id: "04",
        title: "Scale & Grow",
        description: "We measure results, double down on what works, and scale your success."
    }
];

const HowWeWork = () => {
    return (
        <section className="how-we-work-section" id="process">
            <div className="container">
                {/* Section Header */}
                <div className="process-header">
                    <span className="process-label-pill">How We Work</span>
                    <h2 className="process-main-title homepage-h2">
                        Your Journey to <span className="accent">Growth</span> Starts Here
                    </h2>
                    <p className="process-description">
                        A simple, proven process that gets you from idea to revenue as fast as possible.
                    </p>
                </div>

                {/* Timeline and Grid */}
                <div className="process-container">
                    <div className="process-line"></div>
                    <div className="process-grid">
                        {workSteps.map((step) => (
                            <div key={step.id} className="process-step-item">
                                <div className="step-circle">
                                    {step.id}
                                </div>
                                <div className="step-content">
                                    <h4 className="step-title">{step.title}</h4>
                                    <p className="step-desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
