import React from "react";
// Import Images
import MobileAppImg from "../../../assets/images/services/mobile_app_dev.png";
import WebDevImg from "../../../assets/images/services/web_dev.png";
import GameDevImg from "../../../assets/images/services/game_dev.png";
import UiUxImg from "../../../assets/images/services/ui_ux.png";

// Tech Icons
import { FaApple, FaAndroid, FaChessBoard, FaFutbol, FaFistRaised, FaVrCardboard } from "react-icons/fa";
import { SiWordpress, SiShopify, SiWebflow, SiReact, SiNextdotjs, SiWix, SiZapier, SiSquarespace, SiSketch, SiFramer, SiPhp, SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiAdobexd } from "react-icons/si";


const GHLIcon = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect width="64" height="64" rx="12" fill="#ffffff" />
        <path d="M20 44V20H28V44H20Z" fill="#4CAF50" />
        <path d="M36 44V20H44V44H36Z" fill="#FFC107" />
        <circle cx="32" cy="20" r="8" fill="#2196F3" />
    </svg>
);

function AppWebServices() {
    const cards = [
        {
            id: 1,
            title: "Graphic Design",
            description: "Our graphic designs transform creative ideas into captivating visuals that leave a lasting impression on your audience.",
            image: MobileAppImg,
            techs: [
                { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" />, bg: "#ffece6" },
                { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={24} color="#FF7C00" />, bg: "#fff3e6" },
                { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={24} color="#31A8FF" />, bg: "#e6f5ff" },
                { name: "Canva", icon: <SiCanva size={24} color="#00C4CC" />, bg: "#e6ffff" },
                { name: "Adobe XD", icon: <SiAdobexd size={24} color="#FF21C0" />, bg: "#ffe6f7" }
            ]
        },
        {
            id: 2,
            title: "Web Development",
            description: "As a leading web development company in Ahmedabad, India, we specialize in building visually stunning, high-performing websites that connect seamlessly with your target audience.",
            image: WebDevImg,
            techs: [
                { name: "PHP", icon: <SiPhp size={24} color="#777bb4" />, bg: "#e8ebff" }, // Existing

                { name: "WordPress", icon: <SiWordpress size={24} color="#21759b" />, bg: "#e6f1ff" },
                { name: "Shopify", icon: <SiShopify size={24} color="#96bf48" />, bg: "#f0fae6" },
                { name: "Webflow", icon: <SiWebflow size={24} color="#146ef5" />, bg: "#e6efff" },
                { name: "React", icon: <SiReact size={24} color="#61dafb" />, bg: "#e6faff" },
                { name: "Next.js", icon: <SiNextdotjs size={24} color="#000000" />, bg: "#f2f2f2" },
                { name: "Wix", icon: <SiWix size={24} color="#0c6efc" />, bg: "#e6efff" },
                { name: "GoHighLevel", icon: <GHLIcon size={24} color="#ff4a00" />, bg: "#fff1e6" }, // Placeholder icon
                { name: "Squarespace", icon: <SiSquarespace size={24} color="#000000" />, bg: "#f4f4f4" }
            ]
        },
        {
            id: 3,
            title: "SEO",
            description: "Our team leverages advanced strategies and in-depth keyword analysis to ensure your website ranks high for the searches that matter most.",
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
            description: "We design intuitive user interfaces that ensure maximum usability, smooth navigation, and enjoyable interactions for every user.",
            image: UiUxImg,
            techs: [
                { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" />, bg: "#ffe0d6" },
                { name: "Adobe XD", icon: <SiAdobexd size={24} color="#FF61F6" />, bg: "#ffe0fd" },
                { name: "Sketch", icon: <SiSketch size={24} color="#F7B500" />, bg: "#fff3d6" },
                { name: "Framer", icon: <SiFramer size={24} color="#0055FF" />, bg: "#e0eaff" }
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
                                className={`bg-white p-4 h-100 rounded-4 service-card-hover service-box-new service-card-${card.id}`}
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
