import { Link, useNavigate, useLocation } from "react-router-dom";
import social_icon from "../../assets/images/v1/social_icon.png";

function BreadCrumb({ title, subtitle, image }) { // added subtitle and image prop
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
            <h1 className="post__title text-left services_hero">{title}</h1>
            {subtitle && <p className="post__subtitle text-white text-left services_hero">{subtitle}</p>} 
            <nav className="breadcrumbs">
              <ul className="text-left services_hero">
                <li>
                  <Link to="/">Home</Link> {/* Static Home link */}
                </li>
                <li>{title}</li> {/* Display the dynamic title */}
              </ul>
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

export default BreadCrumb;
