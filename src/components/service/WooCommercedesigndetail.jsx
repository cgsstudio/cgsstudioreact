import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/WooCommerce Design and Development.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function WooCommercedesigndetail() {
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
                  WooCommerce Design and Development
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                Building a successful WooCommerce store requires more than just a beautiful design—it needs an intuitive shopping experience, secure payment processing, and seamless navigation. At Chameleo GFX Studio, we specialize in WooCommerce design and development, creating eCommerce websites that drive sales and enhance customer satisfaction.
                </p>
                <p>
                As a WooCommerce development company in Ahmedabad, we focus on custom WooCommerce themes, plugin development, and checkout optimization. Our team ensures your store is SEO-friendly, mobile-responsive, and high-performing, providing users with a smooth and engaging shopping experience.
                </p>
                <p>
                We also offer WooCommerce website maintenance and support, ensuring your store remains secure, fast, and up-to-date. From product management to payment gateway integration, we handle every aspect of your WooCommerce store to help your business grow.
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

export default WooCommercedesigndetail;
