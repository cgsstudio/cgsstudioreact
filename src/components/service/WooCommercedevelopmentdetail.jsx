import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/WooCommerce Development.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function WooCommercedevelopmentdetail() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="aximo-service-details-thumb d-none d-md-block">
            <img src={SingleImg} alt="Web Development" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1>
                  <span className="aximo-title-animation" style={{ lineHeight: 1.2 }} >
                    Best WooCommerce Development Company in Ahmedabad, India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  An eCommerce store should be visually appealing, easy to navigate, and optimized for conversions. At Chameleo GFX Studio, we offer WooCommerce design and development, creating custom online stores that provide a seamless shopping experience. Whether you're launching a new store or revamping an existing one, we design and develop WooCommerce websites that are fast, secure, and conversion-friendly.
                </p>
                <p>
                  As a WooCommerce development company in Ahmedabad, we focus on creating intuitive product pages, smooth checkout experiences, and mobile-friendly interfaces. Our expertise includes custom WooCommerce theme development, plugin customization, and advanced features like dynamic pricing, customer reviews, and multi-currency support. With an SEO-optimized structure, we ensure your store ranks well in search engines, helping you attract more customers and boost sales.
                </p>
                <p>
                  We also provide WooCommerce maintenance and support, ensuring your store stays up-to-date, secure, and performing at its best. From payment gateway integration to inventory management solutions, we handle every aspect of your WooCommerce store, allowing you to focus on growing your business. With our expertise in WordPress SEO optimization, we help your eCommerce store gain visibility and maximize conversions.
                </p>
              </div>
            </div>
          </div>
          <div className="aximo-service-details-thumb d-block d-md-none mt-5">
            <img src={SingleImg} alt="Web Development" />
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
                      <h4 className="fw-bold subtitle-heading text-center bg-black px-5 py-2 rounded-5 d-inline-block mx-auto">
                        <a
                          href={category.subtitleLink}
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                          style={{ color: "#fdfde1" }}
                        >
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

export default WooCommercedevelopmentdetail;
