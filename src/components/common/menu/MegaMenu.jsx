import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  FaPalette, 
  FaRocket, 
  FaCode, 
  FaBullhorn, 
  FaChevronRight
} from "react-icons/fa";
import { 
  graphicDesignServices, 
  uiuxDesignServices, 
  webDevelopmentServices, 
  digitalMarketingServices 
} from "../../../data/serviceData";
import "./MegaMenu.css";

const MegaMenu = ({ isOpen, closeMenu, isMobile }) => {
  const menuData = {
    "Graphics Design": {
      icon: <FaPalette />,
      href: "/services/graphic-design",
      columns: 3,
      sections: [
        {
          title: "Branding",
          links: graphicDesignServices[0].items.slice(0, 8).map((item) => ({ 
            label: item.text, 
            href: item.link
          }))
        },
        {
          title: "Print & Media",
          links: graphicDesignServices[0].items.slice(8, 16).map((item) => ({ 
            label: item.text, 
            href: item.link
          }))
        },
        {
          title: "Corporate",
          links: graphicDesignServices[0].items.slice(16, 24).map((item) => ({ 
            label: item.text, 
            href: item.link
          }))
        }
      ]
    },
    "UI/UX Design": {
      icon: <FaRocket />,
      href: "/services/ui-ux-design",
      columns: 1,
      sections: [
        {
          title: "Core UX",
          links: uiuxDesignServices[0].items.map((item) => ({ 
            label: item.text, 
            href: item.link
          }))
        }
      ]
    },
    "Website Development": {
      icon: <FaCode />,
      href: "/services/web-development",
      columns: 3,
      sections: webDevelopmentServices[0].categories.map(cat => ({
        title: cat.subtitle,
        links: cat.items
          .filter(item => item.text.toLowerCase() !== cat.subtitle.toLowerCase())
          .map((item) => ({ 
            label: item.text.replace("React.js ", "").replace("Development and ", ""), 
            href: item.link
          }))
      }))
    },
    "Digital Marketing": {
      icon: <FaBullhorn />,
      href: "/services/digital-marketing",
      columns: 1,
      sections: [
        {
          title: "Marketing",
          links: digitalMarketingServices[0].items.map((item) => ({ 
            label: item.text, 
            href: item.link
          }))
        }
      ]
    }
  };

  const tabKeys = Object.keys(menuData);
  const [activeTab, setActiveTab] = useState(tabKeys[0]);
  const activeColumns = isMobile ? 1 : menuData[activeTab].columns;

  // Mobile: render a simple dropdown list of the 4 main pages (no mega grid)
  if (isMobile) {
    return (
      <div className={`mega-menu-master ${isOpen ? "open" : ""} mobile`}>
        <div className="mega-container mobile-simple">
          <div className="mobile-services-dropdown">
            {tabKeys.map((tab) => (
              <NavLink
                key={tab}
                to={menuData[tab].href}
                className="mobile-service-link"
                onClick={closeMenu}
              >
                {tab}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`mega-menu-master ${isOpen ? "open" : ""}`} onMouseLeave={closeMenu}>
      <div className="mega-container">
        {/* Left Sidebar for Main 4 Pages */}
        <aside className="mega-sidebar">
          {tabKeys.map((tab) => (
            <NavLink
              key={tab}
              to={menuData[tab].href}
              className={`sidebar-tab ${activeTab === tab ? "active" : ""}`}
              onMouseEnter={() => setActiveTab(tab)}
              onClick={closeMenu}
            >
              <span className="sidebar-icon">{menuData[tab].icon}</span>
              <span className="sidebar-label">{tab}</span>
              <FaChevronRight className="sidebar-arrow" />
            </NavLink>
          ))}
        </aside>

        {/* Right Main Panel for Sub-Categories */}
        <main className="mega-main-panel">
          <div className={`mega-grid-dynamic grid-cols-${activeColumns}`}>
            {menuData[activeTab].sections.map((section, idx) => (
              <div key={idx} className="mega-section-column">
                <h4 className="column-heading-top">{section.title}</h4>
                <nav className="column-links-list">
                  {section.links.map((link, lIdx) => (
                    <div key={lIdx} className="link-wrapper">
                      <NavLink to={link.href} className="column-link-item" onClick={closeMenu}>
                        {link.label}
                      </NavLink>
                    </div>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MegaMenu;
