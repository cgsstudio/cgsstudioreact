import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Shopify_Theme_Customization.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Shopifythemecustomizationdetail() {
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
                    Shopify Theme Customization
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                  Your Shopify store’s theme plays a crucial role in its performance and user engagement. At Chameleo GFX Studio, we offer Shopify theme customization services to help you enhance the appearance and functionality of your online store. Whether you want to tweak an existing theme or build a custom one from scratch, our team ensures that your Shopify store stands out with a unique and modern design.
                </p>
                <p>
                  As a leading Shopify theme customization company in Ahmedabad, we specialize in modifying layouts, fonts, colors, and functionalities to create a tailor-made shopping experience. Our experts ensure that your store is fully responsive, mobile-friendly, and optimized for search engines, improving visibility and user engagement. We also enhance user experience by integrating custom features like advanced product filters, quick-view options, and interactive elements.
                </p>
                <p>
                  In addition to customization, we optimize your Shopify theme for speed and performance, ensuring that your store loads quickly and provides a smooth shopping journey. With our expertise, you get a Shopify store that not only looks visually appealing but also offers seamless functionality, helping you attract and retain more customers.
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

export default Shopifythemecustomizationdetail;


