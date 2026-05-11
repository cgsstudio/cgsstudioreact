import React from "react";
import CountUp from "react-countup";
import { FiAward, FiLayers, FiGlobe, FiUsers, FiCpu } from "react-icons/fi";
import "./StatsSection.css";

const statsData = [
    {
        id: 1,
        number: 6,
        suffix: "+",
        label: "Years Experience",
        icon: FiAward
    },
    {
        id: 2,
        number: 500,
        suffix: "+",
        label: "Projects Done",
        icon: FiLayers
    },
    {
        id: 3,
        number: 10,
        suffix: "+",
        label: "Global Locations",
        icon: FiGlobe
    },
    {
        id: 4,
        number: 215,
        suffix: "+",
        label: "Happy Clients",
        icon: FiUsers
    },
    {
        id: 5,
        number: 20,
        suffix: "+",
        label: "Dedicated Experts",
        icon: FiCpu
    }
];

function StatsSection() {
    return (
        <section className="stats-section-wrapper">
            <div className="container">
                <div className="stats-grid-card">
                    {statsData.map((stat) => (
                        <div key={stat.id} className="stat-card-premium">
                            <div className="stat-icon-card">
                                <stat.icon />
                            </div>
                            <span className="stat-number-card">
                                <CountUp end={stat.number} duration={3} suffix={stat.suffix} enableScrollSpy={true} scrollSpyOnce={true} />
                            </span>
                            <span className="stat-label-card">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;
