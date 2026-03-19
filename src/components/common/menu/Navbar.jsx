import { useState, useEffect, useRef } from "react";
import { routes } from "./routes";
import { NavLink, useLocation } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import CgsLogo from "../../../assets/images/logo/Cgs_Logo.png";
import MegaMenu from "./MegaMenu";

function Navbar({
    toggleMenu,
    handleMenu,
    handleGoBack,
    mobileSubMenu,
    handleSubMenu,
    mobileSubMenuSub,
    handleSubMenuSub,
    menuTitle,
}) {
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const megaMenuRef = useRef(null);

    const location = useLocation();

    // Track window width for responsive rendering
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset mobile states when switching to desktop
    useEffect(() => {
        if (windowWidth > 991) {
            setMobileServicesOpen(false);
            if (toggleMenu) {
                handleMenu();
            }
        }
    }, [windowWidth, toggleMenu, handleMenu]);

    // Close dropdown when route changes
    useEffect(() => {
        setMobileServicesOpen(false);
        setMegaMenuOpen(false);
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
                if (handleSubMenu) {
                    handleSubMenu(e, "services");
                }
            } else {
                // Dropdown already open, allow navigation and close menu + dropdown
                handleMobileLinkClick();
            }
        }
    };

    // Close mega menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!isMobile && megaMenuOpen) {
                if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
                    setMegaMenuOpen(false);
                }
            }
            if (isMobile && mobileServicesOpen) {
                const dropdown = event.target.closest('.dropdown');
                if (!dropdown) {
                    setMobileServicesOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, megaMenuOpen, mobileServicesOpen]);

    const isServicesActive = location.pathname.startsWith("/services");

    return (
        <nav className={`menu-block ${toggleMenu ? "active" : ""}`}>
            {/* Mobile Menu Header */}
            <div className={`mobile-menu-head ${(mobileSubMenu || mobileServicesOpen) ? "active" : ""}`}>
                <a href="/"><img src={CgsLogo} alt="CGS Logo" width="200" height="50" /></a>
                <div className="go-back" onClick={() => {
                    if (isMobile && mobileServicesOpen) {
                        setMobileServicesOpen(false);
                    }
                    handleGoBack();
                }}>
                    <i className="fa fa-angle-left"></i>
                </div>
                <div className="current-menu-title">{menuTitle}</div>
                <div className="mobile-menu-close" onClick={() => {
                    if (isMobile && mobileServicesOpen) {
                        setMobileServicesOpen(false);
                        handleGoBack(); // Reset submenu state without closing full menu
                    } else {
                        handleMenu();
                    }
                }}>
                    &times;
                </div>
            </div>

            {/* Menu Items */}
            <ul className="site-menu-main">
                {routes.map((route) =>
                    route.title === "Services" ? (
                        <li
                            className={`nav-item dropdown${mobileServicesOpen || (!isMobile && megaMenuOpen) ? " open" : ""}`}
                            key={route.title}
                            onMouseEnter={() => { if (!isMobile) setMegaMenuOpen(true); }}
                            onMouseLeave={() => { if (!isMobile) setMegaMenuOpen(false); }}
                            ref={!isMobile ? megaMenuRef : null}
                        >
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    "nav-link-item" +
                                    ((isActive || isServicesActive) ? " active" : "")
                                }
                                onClick={(e) => {
                                    if (isMobile) handleServicesNavClick(e);
                                    else {
                                        e.preventDefault();
                                        setMegaMenuOpen(!megaMenuOpen);
                                    }
                                }}
                                style={{
                                    cursor: "pointer",
                                    display: "flex",
                                    justifyContent: isMobile ? "space-between" : "center",
                                    alignItems: "center",
                                    gap: "6px"
                                }}
                            >
                                {route.title}
                                <span
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        fontSize: "12px",
                                        color: (isMobile ? mobileServicesOpen : megaMenuOpen) ? "#ed1d24" : "inherit",
                                        transform: (isMobile ? mobileServicesOpen : megaMenuOpen) ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"></path>
                                    </svg>
                                </span>
                            </NavLink>

                            {/* Mega Menu (desktop + mobile) */}
                            <MegaMenu
                                isOpen={isMobile ? mobileServicesOpen : megaMenuOpen}
                                isMobile={isMobile}
                                closeMenu={() => {
                                    if (isMobile) setMobileServicesOpen(false);
                                    else setMegaMenuOpen(false);
                                }}
                            />
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

            {/* Full-width Overlay for Desktop */}
            {!isMobile && (
                <div 
                    className={`mega-menu-overlay ${megaMenuOpen ? "show" : ""}`} 
                    onMouseEnter={() => setMegaMenuOpen(false)} 
                />
            )}

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
