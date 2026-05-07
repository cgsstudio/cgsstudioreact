import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Shopify.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Shopifydetail() {
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
                    Best Shopify Development Company in Ahmedabad India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  Shopify is one of the most powerful and user-friendly eCommerce platforms that helps businesses build and manage their online stores effortlessly. At Chameleo GFX Studio, we specialize in custom Shopify store design, delivering high-converting, visually appealing, and fully functional eCommerce websites. Whether you are launching a new online store or revamping an existing one, our team ensures a seamless shopping experience with responsive design, intuitive navigation, and mobile-first optimization.
                </p>
                <p>
                  Our Shopify experts in Ahmedabad focus on enhancing your store’s performance with Shopify theme customization, app integrations, and SEO optimization to drive more traffic and sales. We customize Shopify themes to align with your brand identity while ensuring fast load times, easy product browsing, and secure payment gateways. With our expertise in Figma to Shopify, Photoshop to Shopify, and HTML to Shopify conversions, we turn your vision into a fully functional Shopify website that stands out in the competitive eCommerce space.
                </p>
                <p>
                  Beyond development, we provide Shopify eCommerce management and support, ensuring your store runs smoothly at all times. From updating products and managing inventory to handling technical issues and security updates, we help you focus on growing your business while we take care of the backend. Whether you're a startup or an established brand, our Shopify development services help you scale and succeed in the digital marketplace.
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

export default Shopifydetail;
