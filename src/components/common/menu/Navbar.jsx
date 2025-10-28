import { useState, useEffect } from "react";
import { routes } from "./routes";
import { NavLink, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import CgsLogo from "../../../assets/images/logo/Cgs_Logo.png";

function Navbar({
    toggleMenu,
    handleMenu,
    handleGoBack,
    mobileSubMenu,
    menuTitle,
}) {
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const location = useLocation();

    // Track window width for responsive rendering
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Close dropdown when route changes
    useEffect(() => {
        setMobileServicesOpen(false);
    }, [location.pathname]);

    // Close dropdown when menu is closed
    useEffect(() => {
        if (!toggleMenu) {
            setMobileServicesOpen(false);
        }
    }, [toggleMenu]);

    const isMobile = windowWidth <= 991;

    // Close mobile menu and dropdown on link click
    const handleMobileLinkClick = () => {
        if (isMobile) {
            handleMenu(); // Close menu
            setMobileServicesOpen(false); // Close dropdown
        }
    };

    // Handle Services nav click on mobile
    const handleServicesNavClick = (e) => {
        if (isMobile) {
            if (!mobileServicesOpen) {
                e.preventDefault(); // Prevent navigation first time to open dropdown
                setMobileServicesOpen(true);
            } else {
                // Dropdown already open, allow navigation and close menu + dropdown
                handleMobileLinkClick();
            }
        }
    };

    // Handle clicking outside dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && mobileServicesOpen) {
                const dropdown = event.target.closest('.dropdown');
                if (!dropdown) {
                    setMobileServicesOpen(false);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMobile, mobileServicesOpen]);

    const servicesPaths = [
        "/graphic-design-company-in-ahmedabad",
        "/ui-ux-design-company-in-ahmedabad",
        "/web-development-company-in-ahmedabad",
        "/digital-marketing",
        "/service",
    ];
    const isServicesActive = servicesPaths.some((path) =>
        location.pathname.startsWith(path)
    );

    return (
        <nav className={`menu-block ${toggleMenu ? "active" : ""}`}>
            {/* Mobile Menu Header */}
            <div className={`mobile-menu-head ${mobileSubMenu ? "active" : ""}`}>
               <a href="/"><img src={CgsLogo} alt="CGS Logo" width="200" height="50" /></a>
                <div className="go-back" onClick={handleGoBack}>
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title">{menuTitle}</div>
                <div className="mobile-menu-close" onClick={handleMenu}>
                    &times;
                </div>
            </div>

            {/* Menu Items */}
           <ul className="site-menu-main">
                {routes.map((route) =>
                    route.title === "Services" ? (
                        <li
                            className={`nav-item dropdown${mobileServicesOpen ? " open" : ""}`}
                            key={route.title}
                            onMouseEnter={() => { if (!isMobile) setMobileServicesOpen(true); }}
                            onMouseLeave={() => { if (!isMobile) setMobileServicesOpen(false); }}
                        >
                            <NavLink
                                to="/service"
                                className={({ isActive }) =>
                                    "nav-link-item" +
                                    ((isActive || isServicesActive) ? " active" : "")
                                }
                                onClick={handleServicesNavClick}
                                style={{
                                    cursor: "pointer",
                                    display: isMobile ? "flex" : undefined,
                                    justifyContent: isMobile ? "space-between" : undefined,
                                    alignItems: isMobile ? "center" : undefined,
                                }}
                            >
                                {route.title}
                                <span
                                    style={{
                                        marginLeft: isMobile ? "auto" : undefined,
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "12px",
                                        transform: mobileServicesOpen && isMobile ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
                                    </svg>
                                </span>
                            </NavLink>

                            <ul
                                className="submenu"
                                style={{
                                    display: mobileServicesOpen ? "block" : "none",
                                    maxHeight: mobileServicesOpen ? "300px" : "0",
                                    overflow: "hidden",
                                    transition: "max-height 0.3s ease",
                                }}
                            >
                                <li>
                                    <NavLink
                                        to="/graphic-design-company-in-ahmedabad"
                                        className={({ isActive }) =>
                                            "nav-link-item" + (isActive ? " active" : "")
                                        }
                                        onClick={handleMobileLinkClick}
                                    >
                                        Graphics Design
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/ui-ux-design-company-in-ahmedabad"
                                        className={({ isActive }) =>
                                            "nav-link-item" + (isActive ? " active" : "")
                                        }
                                        onClick={handleMobileLinkClick}
                                    >
                                        UI/UX Design
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/web-development-company-in-ahmedabad"
                                        className={({ isActive }) =>
                                            "nav-link-item" + (isActive ? " active" : "")
                                        }
                                        onClick={handleMobileLinkClick}
                                    >
                                        Website Development
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/digital-marketing"
                                        className={({ isActive }) =>
                                            "nav-link-item" + (isActive ? " active" : "")
                                        }
                                        onClick={handleMobileLinkClick}
                                    >
                                        Digital Marketing
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    ) : (
                        <li className="nav-item" key={route.title}>
                            <NavLink
                                to={route.path}
                                end={route.path === "/"}
                                className={({ isActive }) =>
                                    "nav-link-item" + (isActive ? " active" : "")
                                }
                                onClick={handleMobileLinkClick}
                            >
                                {route.title}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>

            {/* Mobile Contact Info */}
            {isMobile && (
                <div className="mobile-contact-info">
                    <h6 className="contact-title">Contact Info :</h6>
                    <a href="mailto:info@chameleogfxstudio.com" className="contact-link">
                        <FaEnvelope /> info@chameleogfxstudio.com
                    </a>
                    <a href="tel:+918460384838" className="contact-link">
                        <FaPhoneAlt /> +91-846-038-4838
                    </a>
                    <a href="tel:+919737472636" className="contact-link">
                        <FaPhoneAlt /> +91-973-747-2636
                    </a>
                </div>
            )}

            {/* Mobile Social Media */}
            {isMobile && (
                <div className="mobile-social-info">
                    <h6 className="social-title">Follow Us :</h6>
                    <div className="menu-social-links">
                        <a
                            href="https://www.instagram.com/chameleogfxstudio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/chameleogfxstudio/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/chameleogfxstudio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Facebook"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
