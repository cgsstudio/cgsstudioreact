import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Theme and Plugin Customization.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Themeandplugindetail() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Web Development" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                  Theme and Plugin Customization
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                Your website’s functionality and appearance should be as unique as your brand. At Chameleo GFX Studio, we provide custom WordPress theme and plugin development, tailoring your website to fit your exact business needs. Whether you need a fully customized theme or additional features through plugins, we ensure seamless integration and high performance.
                </p>
                <p>
                As an expert WordPress customization company in Ahmedabad, we specialize in theme modifications, plugin development, and feature enhancements to improve usability and customer engagement. Our developers work with WooCommerce, LearnDash, Dokan, and other WordPress plugins, customizing them to add unique functionalities.
                </p>
                <p>
                With our WordPress website maintenance and support, we ensure your custom themes and plugins remain updated, bug-free, and optimized for security. Whether you need a simple design tweak or complex functionality, we provide tailored solutions that elevate your WordPress website.
                </p>
              </div>
            </div>
          </div>

          {/* Services List Section */}
          <div className="container pt-5">
  {services && services.length > 0 ? (
    services.map((service, index) => (
      <div key={index}>
        <div className="aximo-section-title main center">
          <h2 className="mb-3 subtitle-heading">
            <span className="aximo-title-animation">
              {service.title}
              <span className="aximo-title-icon">
                <img className="shape-color" src={Star2Img} alt="Star2Img" />
            </span>
            </span>
          </h2>
        </div>

        {/* Loop through categories */}
        {service.categories.map((category, catIndex) => (
          <div className="mb-4" key={catIndex}>
            <h4 className="mb-3 subtitle-heading">
                  <a href={category.subtitleLink} rel="noopener noreferrer">
                   {category.subtitle}
                  </a>
                  </h4>
            <div className="row">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="col-12 col-md-6">
                  <ul className="list-unstyled custom-list">
                    <li>
                      <a href={item.link} rel="noopener noreferrer">
                        {item.text}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ))
  ) : (
    <p>No services available</p>
  )}
</div>

        </div>
      </div>
    </div>
  );
}

export default Themeandplugindetail;
