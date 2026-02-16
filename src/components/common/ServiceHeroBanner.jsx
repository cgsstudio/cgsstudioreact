import { Link, useNavigate, useLocation } from "react-router-dom";
import social_icon from "../../assets/images/v1/social_icon.png";
import { ChevronRight } from 'lucide-react';

function ServiceHeroBanner({ title, subtitle, image, breadcrumbTitle }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleQuoteClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact-form");
    if (el) {
      // update URL hash then scroll smoothly
      navigate(`${location.pathname}#contact-form`, { replace: false });
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else {
      navigate("/contact-us");
    }
  };

  return (
    <div className="aximo-breadcrumb">
      <div className="container">
        <div className="row D-flex align-items-center">
          <div className="col-lg-7">
            <h2 className="post__title text-left services_hero text-white mb-3">{title}</h2>
            {subtitle && <p className="post__subtitle text-white text-left services_hero">{subtitle}</p>}
            <nav className="breadcrumbs">
              <span><Link to="/">Home</Link><span><ChevronRight color="#fdfde1" /></span><span className="bread_crumb_link">{breadcrumbTitle || title}</span></span>
            </nav>
            <div className="aximo-btn-wrap services_hero">
              <a
                href={`${location?.pathname || "/"}#contact-form`}
                onClick={handleQuoteClick}
                className="aximo-default-btn pill bg-red"
              >
                Get a quote now!
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="aximo-service-details-thumb">
              <img src={image || social_icon} alt={title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceHeroBanner;
