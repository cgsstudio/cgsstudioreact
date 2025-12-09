import React from "react";
// Import Images
import MobileAppImg from "../../../assets/images/services/mobile_app_dev.png";
import WebDevImg from "../../../assets/images/services/web_dev.png";
import GameDevImg from "../../../assets/images/services/game_dev.png";
import UiUxImg from "../../../assets/images/services/ui_ux.png";

// Tech Icons
import { FaApple, FaAndroid, FaChessBoard, FaFutbol, FaFistRaised, FaVrCardboard } from "react-icons/fa";
import { SiFlutter, SiHiveBlockchain, SiAngular, SiLaravel, SiPhp, SiPython, SiFigma, SiAdobephotoshop, SiAdobexd, SiAdobeillustrator } from "react-icons/si";

function AppWebServices() {
    const cards = [
        {
            id: 1,
            title: "Mobile App Development",
            description: "We are ISO 9001:2015 Certified Mobile Application Development Company in India with a dedicated team of 50+ developers working from India.",
            image: MobileAppImg,
            techs: [
                { name: "iOS", icon: <FaApple size={24} color="#333" />, bg: "#f5f5f7" }, // Apple gray/white
                { name: "Android", icon: <FaAndroid size={24} color="#3ddc84" />, bg: "#eaffea" }, // Android Green light
                { name: "Flutter", icon: <SiFlutter size={24} color="#02569B" />, bg: "#e0f2ff" }, // Flutter Blue light
                { name: "Blockchain", icon: <SiHiveBlockchain size={24} color="#fca311" />, bg: "#fff7e6" } // Orange light
            ]
        },
        {
            id: 2,
            title: "Web Development",
            description: "Crafting User-Friendly Websites: Synarion IT Solutions specializes in creating intuitive and engaging websites, ensuring a seamless user experience that drives business growth and client satisfaction.",
            image: WebDevImg,
            techs: [
                { name: "Angular", icon: <SiAngular size={24} color="#dd0031" />, bg: "#ffe6e9" }, // Red light
                { name: "Laravel", icon: <SiLaravel size={24} color="#ff2d20" />, bg: "#ffebe8" }, // Red/Orange light
                { name: "PHP", icon: <SiPhp size={24} color="#777bb4" />, bg: "#e8ebff" }, // Purple/Blue light
                { name: "Python", icon: <SiPython size={24} color="#3776ab" />, bg: "#e6f3ff" } // Blue light
            ]
        },
        {
            id: 3,
            title: "Game Development",
            description: "Lead the gaming industry with innovative game concepts, captivating audiences, and generating billion-dollar revenues through Synarion IT Solutions' visionary approach to game development.",
            image: GameDevImg,
            techs: [
                { name: "Board Game", icon: <FaChessBoard size={24} color="#e67e22" />, bg: "#fff3e0" },
                { name: "Sports", icon: <FaFutbol size={24} color="#27ae60" />, bg: "#e8f5e9" },
                { name: "Action", icon: <FaFistRaised size={24} color="#e74c3c" />, bg: "#ffebee" },
                { name: "AR/VR", icon: <FaVrCardboard size={24} color="#8e44ad" />, bg: "#f3e5f5" }
            ]
        },
        {
            id: 4,
            title: "UI/UX Design",
            description: "Crafting user-friendly, visually appealing digital experiences is our forte. Our experienced graphic and website designers, skilled in Photoshop, Figma, XD, and Illustrator, bring your vision to life seamlessly.",
            image: UiUxImg,
            techs: [
                { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" />, bg: "#ffe0d6" },
                { name: "Photoshop", icon: <SiAdobephotoshop size={24} color="#31A8FF" />, bg: "#e0f2ff" },
                { name: "XD", icon: <SiAdobexd size={24} color="#FF61F6" />, bg: "#ffe0fd" },
                { name: "Illustrator", icon: <SiAdobeillustrator size={24} color="#FF9A00" />, bg: "#fff5e0" }
            ]
        }
    ];

    return (
        <div className="section pt-5">
            <div className="container">
                {/* <div className="aximo-section-title center mb-5">
          <h2>App & Web Development Services</h2>
        </div> */}
                <div className="row gy-4">
                    {cards.map((card) => (
                        <div key={card.id} className="col-lg-6">
                            <div
                                className={`p-4 h-100 rounded-4 service-card-hover service-card-${card.id}`}
                            >
                                {/* Top Image */}
                                <div className="mb-4">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="d-block"
                                        style={{ width: '80px', height: 'auto' }}
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="h4 mb-3 fw-bold text-dark">{card.title}</h3>
                                <p className="mb-4 text-muted small lh-base" style={{ fontSize: "0.95rem" }}>
                                    {card.description}
                                </p>

                                {/* Tech Stack Row */}
                                <div className="d-flex flex-wrap gap-3 mt-auto pt-3">
                                    {card.techs.map((tech, i) => (
                                        <div key={i} className="d-flex flex-column align-items-center">
                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-3 mb-2 service-tech-icon"
                                                style={{
                                                    backgroundColor: tech.bg
                                                }}
                                            >
                                                {tech.icon}
                                            </div>
                                            <span className="small text-muted fw-medium" style={{ fontSize: "12px" }}>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AppWebServices;
