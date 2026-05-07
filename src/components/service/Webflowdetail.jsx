import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Webflow.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Webflowdetail() {
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
                  <span className="aximo-title-animation" style={{ lineHeight: 1.2 }}>
                    Best Webflow Development Company in Ahmedabad India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  In today’s fast-paced digital world, businesses need websites that are not only visually appealing but also highly functional. At Chameleo GFX Studio, we specialize in Webflow development, delivering custom, scalable, and SEO-friendly websites that enhance user experience. As a leading Webflow development company, we help businesses leverage Webflow’s powerful CMS, clean code, and responsive design capabilities to create high-performance websites. Whether you need a sleek portfolio, an engaging business website, or an advanced eCommerce platform, our Webflow experts ensure seamless functionality with modern aesthetics.
                </p>
                <p>
                  Our team works with Webflow CMS, animations, and interactions to build fully customized, no-code websites that meet your unique business requirements. From smooth navigation to fast-loading pages, we focus on optimizing user experience and conversions. As an expert Webflow development company in Ahmedabad, we ensure that your website is mobile-responsive, SEO-optimized, and easy to manage—giving your brand a competitive edge in the digital world.
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

export default Webflowdetail;
