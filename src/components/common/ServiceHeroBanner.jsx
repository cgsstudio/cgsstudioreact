import { Link, useNavigate, useLocation } from "react-router-dom";
import social_icon from "../../assets/images/v1/social_icon.png";
import { ChevronRight } from 'lucide-react';

function ServiceHeroBanner({ title, subtitle, image, breadcrumbTitle, style }) {
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
    <div className="aximo-breadcrumb" style={style}>
      <div className="container h-100">
        <div className={`row D-flex align-items-center py-5 py-md-0 h-100 ${!image ? 'justify-content-center' : ''}`}>
          <div className={image ? "col-lg-7" : "col-lg-10 text-center mx-auto"}>
            <h2 
              className={`post__title services_hero text-white-smoke mb-3 ${!image ? 'text-center' : 'text-left'}`}
              style={!image ? { textAlign: 'center' } : {}}
            >{title}</h2>
            {subtitle && <p className={`post__subtitle services_hero text-white-smoke ${!image ? 'text-center mx-auto' : 'text-left'}`} style={!image ? { maxWidth: '800px' } : {}}>{subtitle}</p>}
            <nav className={`breadcrumbs ${!image ? 'd-flex justify-content-center' : ''}`}>
              <span><Link to="/">Home</Link><span><ChevronRight color="#fdfde1" /></span><span className="bread_crumb_link">{breadcrumbTitle || title}</span></span>
            </nav>
            <div className={`aximo-btn-wrap services_hero ${!image ? 'd-flex justify-content-center' : ''}`}>
              <a
                href={`${location?.pathname || "/"}#contact-form`}
                onClick={handleQuoteClick}
                className="aximo-default-btn pill bg-red"
              >
                Get a quote now!
              </a>
            </div>
          </div>
          {image && (
            <div className="col-lg-5">
              <div>
                <img className="service-img d-none d-lg-block" src={image} alt={title} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceHeroBanner;

