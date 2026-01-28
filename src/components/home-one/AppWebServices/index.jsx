import React from "react";
// Import Images
import Lottie from "lottie-react";
import MobileAppAnimation from "../../../assets/lottie/vector_1.json";
import WebDevAnimation from "../../../assets/lottie/software_1.json";
import SeoAnimation from "../../../assets/lottie/seo_1.json";
import UiUxAnimation from "../../../assets/lottie/layout_1.json";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

// Tech Icons
import {
    SiGoogleanalytics,
    SiGoogle,
    SiSemrush,
} from "react-icons/si";
import { FaChartLine } from "react-icons/fa";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { FaFrog } from "react-icons/fa";
import { SiWordpress, SiShopify, SiWebflow, SiReact, SiNextdotjs, SiWix, SiZapier, SiSquarespace, SiSketch, SiFramer, SiPhp, SiFigma, SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiAdobexd } from "react-icons/si";
import Manufacturing from "../../../assets/images/icon/ahrefs 1.svg";
import MozIcon from "../../../assets/images/icon/MOZ.svg";

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
            animation: <div style={{ width: 80, height: 80 }}><Lottie animationData={MobileAppAnimation} loop={true} autoplay={true} /></div>,
            // image: MobileAppImg,
            link: "/graphic-design-company-in-ahmedabad",
            techs: [
                { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" />, bg: "#ffece6" },
                { name: "Adobe Illustrator", icon: <SiAdobeillustrator size={24} color="#FF7C00" />, bg: "#fff3e6" },
                { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={24} color="#31A8FF" />, bg: "#e6f5ff" },
                { name: "Canva", icon: <SiCanva size={24} color="#00C4CC" />, bg: "#e6ffff" },
                { name: "Adobe XD", icon: <SiAdobexd size={24} color="#FF21C0" />, bg: "#ffe6f7" },
                { name: "Sketch", icon: <SiSketch size={24} color="#F7B500" />, bg: "#fff8e6" },
                { name: "Framer", icon: <SiFramer size={24} color="#0055FF" />, bg: "#e6efff" }
            ]
        },
        {
            id: 2,
            title: "UI/UX Design",
            description: "We design intuitive user interfaces that ensure maximum usability, smooth navigation, and enjoyable interactions for every user.",
            animation: <div style={{ width: 80, height: 80 }}><Lottie animationData={UiUxAnimation} loop={true} autoplay={true} /></div>,
            // image: UiUxImg,
            link: "/ui-ux-design-agency-in-ahmedabad",
            techs: [
                { name: "Figma", icon: <SiFigma size={24} color="#F24E1E" />, bg: "#ffe0d6" },
                { name: "Adobe XD", icon: <SiAdobexd size={24} color="#FF61F6" />, bg: "#ffe0fd" },
                { name: "Sketch", icon: <SiSketch size={24} color="#F7B500" />, bg: "#fff3d6" },
                { name: "Framer", icon: <SiFramer size={24} color="#0055FF" />, bg: "#e0eaff" }
            ]
        },
        {
            id: 3,
            title: "Web Development",
            description: "As a leading web development company in Ahmedabad, India, we specialize in building visually stunning, high-performing websites that connect seamlessly with your target audience.",
            animation: <div style={{ width: 80, height: 80 }}><Lottie animationData={WebDevAnimation} loop={true} autoplay={true} /></div>,
            // image: WebDevImg,
            link: "/website-development-company-ahmedabad",
            techs: [
                { name: "PHP", icon: <SiPhp size={24} color="#777bb4" />, bg: "#e8ebff" },
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
            id: 4,
            title: "Search Engine Optimization",
            description: "Our team leverages advanced strategies and in-depth keyword analysis to ensure your website ranks high for the searches that matter most.",
            animation: <div style={{ width: 80, height: 80 }}><Lottie animationData={SeoAnimation} loop={true} autoplay={true} /></div>,
            // image: GameDevImg,
            link: "/seo-company-in-ahmedabad",
            techs: [
                {
                    name: "Google Analytics",
                    icon: <SiGoogleanalytics size={24} color="#e67e22" />,
                    bg: "#fff3e0"
                },
                {
                    name: "Google Search Console",
                    icon: <SiGoogle size={24} color="#27ae60" />,
                    bg: "#e8f5e9"
                },
                {
                    name: "Ahrefs",
                    icon: <img src={Manufacturing} alt="Ahrefs" style={{ width: 24, height: 24 }} />,
                    bg: "#ffebee"
                },
                {
                    name: "SEMrush",
                    icon: <SiSemrush size={24} color="#8e44ad" />,
                    bg: "#f3e5f5"
                },
                {
                    name: "Moz",
                    icon: <img src={MozIcon} alt="Moz" style={{ width: 24, height: 24 }} />,
                    bg: "#eaf4fc"
                },
                {
                    name: "Screaming Frog",
                    icon: <FaFrog size={24} color="#2ecc71" />,
                    bg: "#eaffea"
                }
            ]
        }
    ];

    return (
        <div className="section pb-5 pt-5 pt-sm-0 pt-md-0" style={{ backgroundColor: '#000' }}>
            <div className="container">
                <div className="aximo-section-title center ">
                    <h2 className="text-whitesmoke">Digital Marketing Agency</h2>
                </div>

                <div className="row gy-4">
                    {cards.map((card) => (
                        <div key={card.id} className="col-lg-6">
                            <div
                                className={`p-5 h-100 rounded-4 service-card-hover service-box-new service-card-${card.id}`}
                                style={{ position: 'relative' }}
                            >
                                {/* Top Image or Animation */}
                                <div className="mb-4">
                                    {card.animation ? (
                                        <div className="d-block">{card.animation}</div>
                                    ) : (
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="d-block"
                                            style={{ width: '60px', height: 'auto' }}
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="h4 mb-3 fw-bold text-whitesmoke">{card.title}</h3>
                                <p className="mb-4 lh-base text-whitesmoke Innovative_Services">
                                    {card.description}
                                </p>

                                {/* Tech Stack Row */}
                                <div className="mt-auto pt-3 tool-icon-row">
                                    {card.techs.map((tech, i) => (
                                        <div key={i} className="d-flex flex-column">
                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-3 mb-2 service-tech-icon"
                                                style={{
                                                    backgroundColor: tech.bg,
                                                }}
                                            >
                                                {tech.icon}
                                            </div>
                                            <span className="icon_name fw-medium lh-base text-white">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Arrow Button */}
                                <div
                                    className="d-flex align-items-center justify-content-end"
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '20px',
                                    }}
                                >
                                    <Link
                                        to={card.link}
                                        className="btn btn-link p-0 text-white d-flex align-items-center justify-content-center text-decoration-none"
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            border: '1px solid #ddd',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                            e.currentTarget.style.borderColor = '#333';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateX(0)';
                                            e.currentTarget.style.borderColor = '#ddd';
                                        }}
                                    >
                                        <FaArrowRight size={16} />
                                    </Link>
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
