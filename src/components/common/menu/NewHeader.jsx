import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // State for dropdown toggle
  const megaMenuRef = useRef(null); // Ref for mega menu

  // Tab content data
  const tabData = {
    tab1: {
      uiux: {
        title: "UI/UX Design",
        items: ["Website UI/UX", "iOS UI/UX", "Android UI/UX", "Software UI/UX", "Backend UI/UX"],
      },
      graphicDesign: {
        title: "Graphic Design",
        items: ["Website Design", "Logo Design", "Branding", "Print Design", "Illustrations"],
      },
    },
    tab2: {
      HTMLCSS: {
        title: "HTML/CSS",
        items: ["Custom HTML Website Design", "Responsive Web Design", "Website Redesign", "Template Customization", "Cross-Browser Compatibility Testing"],
      },
      uiux: {
        title: "UI/UX Design",
        items: ["Custom HTML Website Design", "Responsive Web Design", "Website Redesign", "Template Customization", "Cross-Browser Compatibility Testing"],
      },
    },
    tab3: {
      WordPress: {
        title: "WordPress Plugins",
        items: [
          "Custom WordPress Website Design",
          "WordPress Theme Customization",
          "WooCommerce Development",
          "WordPress SEO Optimization",
        ],
      },
    },
  };

  const toggleMegaMenu = (e) => {
    e.stopPropagation();
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleTabClick = (e, tab) => {
    e.stopPropagation();
    setActiveTab(tab);
  };

  // Handle click outside mega menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="custom-navbar">
      <ul className="nav-list">
        <li className="nav-item-custom">Home</li>
        <li className="nav-item-custom">Company</li>
        <li className="nav-item-custom dropdown-custom" onClick={toggleMegaMenu}>
          Services <i className="fas fa-angle-down"></i>
          {isMegaMenuOpen && (
            <div className="mega-menu" ref={megaMenuRef} onClick={(e) => e.stopPropagation()}>
              <div className="tabs-container">
                <ul className="tabs">
                  <li onClick={(e) => handleTabClick(e, "tab1")} className={activeTab === "tab1" ? "active" : ""}>
                    Graphics Design
                  </li>
                  <li onClick={(e) => handleTabClick(e, "tab2")} className={activeTab === "tab2" ? "active" : ""}>
                    Website Development
                  </li>
                  <li onClick={(e) => handleTabClick(e, "tab3")} className={activeTab === "tab3" ? "active" : ""}>
                    Digital Marketing
                  </li>
                </ul>
              </div>
              <div className="tab-content">
  <div className="tab-data" >
    {Object.keys(tabData[activeTab]).map((key, index) => (
     
      <div key={index}>
        <h4>{tabData[activeTab][key].title}</h4>
        <ul>
          {tabData[activeTab][key].items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

            </div>
          )}
        </li>
        <li className="nav-item-custom">Blogs</li>
        <li className="nav-item-custom">Contact Us</li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
