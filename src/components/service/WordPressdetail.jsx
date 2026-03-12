import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Wordpress.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function WordPressdetail() {
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
                <h2>
                  <span className="aximo-title-animation">
                    WordPress Development Services
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                  A well-designed WordPress website is the foundation of a strong online presence. At Chameleo GFX Studio, we specialize in custom WordPress website design, creating unique, high-performing websites tailored to your brand’s identity. Whether you need a business website, a personal blog, or an eCommerce store, our team ensures a seamless, user-friendly experience with responsive layouts and intuitive navigation. As a leading WordPress development company in Ahmedabad, we focus on delivering visually stunning websites optimized for speed, security, and performance.
                </p>
                <p>
                  Our expertise extends to WooCommerce development, helping businesses set up powerful, feature-rich online stores that enhance customer experience and drive sales. We also provide WordPress SEO optimization, ensuring your website ranks higher on search engines and attracts the right audience. If you're looking to upgrade your existing site, our WordPress migration and upgrades service ensures a smooth transition with zero downtime. From BuddyBoss design and development for online communities to LearnDash and Dokan integration for e-learning and multi-vendor platforms, we build scalable, flexible solutions that meet your business needs.
                </p>
                <p>
                  With extensive experience in responsive WordPress design, we ensure that your website looks and functions perfectly across all devices. Whether you need a Figma to WordPress, Photoshop to WordPress, or HTML to WordPress conversion, our team guarantees pixel-perfect accuracy and performance. We also offer theme and plugin customization, creating tailored solutions that enhance functionality. With our WordPress website maintenance and support, we ensure your site remains secure, up-to-date, and optimized for peak performance.
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

export default WordPressdetail;
