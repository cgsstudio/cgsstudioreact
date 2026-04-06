import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Shopify_E-commerce_Management_and_Support.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Shopifyecommercemanagementdetail() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="axiom-service-details-thumb d-none d-md-block">
            <img src={SingleImg} alt="Web Development" />
          </div>
          <div className="row py-5">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1>
                  <span className="aximo-title-animation" style={{ lineHeight: "1.1" }}>
                    Best Shopify E-commerce Management and Support Company in Ahmedabad, India

                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  Running a successful Shopify store requires constant monitoring, updates, and optimization. At Chameleo GFX Studio, we provide Shopify eCommerce management and support services, ensuring that your online store operates smoothly without interruptions. From product updates and performance monitoring to technical support and security maintenance, we handle everything so you can focus on growing your business.
                </p>
                <p>
                  Our Shopify support team in Ahmedabad offers inventory management, order processing, SEO monitoring, and customer experience optimization, ensuring that your store remains up-to-date and efficient. We also provide Shopify website speed optimization, ensuring fast-loading pages that enhance the shopping experience and boost conversions. Whether you need small tweaks, major upgrades, or troubleshooting assistance, our dedicated team is always ready to help.
                </p>
                <p>
                  In addition to maintenance, we also offer growth strategies to help you expand your Shopify store’s reach. From email marketing automation and social media integrations to advanced analytics tracking, we ensure your store remains competitive in the ever-changing eCommerce landscape. With our Shopify eCommerce management and support services, you get a fully optimized, high-performing store that keeps customers coming back for more.
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
                        <a href={category.subtitleLink} rel="noopener noreferrer" className="text-decoration-none" style={{ color: "#fdfde1" }} > {category.subtitle} </a>
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

export default Shopifyecommercemanagementdetail;


