import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Shopify_App_Integration_and_Development.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Shopifyappintegrationdetail() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="axiom-service-details-thumb d-none d-md-block">
            <img src={SingleImg} alt="Web Development" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    Shopify App Integration and Development – Power Up Your Store
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                  A Shopify store is only as good as the tools it uses. At Chameleo GFX Studio, we offer Shopify app integration and development services, helping businesses enhance their store’s functionality with powerful third-party and custom-built applications. Whether you need payment gateways, CRM integrations, marketing automation, or inventory management tools, we seamlessly integrate Shopify apps that streamline your business operations.
                </p>
                <p>
                  Our Shopify developers in Ahmedabad specialize in selecting and customizing the best apps suited for your business needs. We help integrate apps for abandoned cart recovery, customer reviews, live chat, and email marketing, ensuring your Shopify store runs efficiently while maximizing customer engagement. Additionally, we provide custom Shopify app development, creating tailored solutions that add unique functionality to your store, helping you stay ahead of the competition.
                </p>
                <p>
                  With our Shopify app integration services, you can automate tasks, improve the shopping experience, and enhance store performance without compromising speed or security. Whether you’re a small business or a growing enterprise, we ensure that your Shopify apps work flawlessly, making eCommerce management easier and more effective.
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

export default Shopifyappintegrationdetail;


