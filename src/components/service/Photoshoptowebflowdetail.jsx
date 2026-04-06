import { Helmet } from "react-helmet-async";
import SingleImg from "../../assets/images/service/Photoshop_to_Webflow_Conversion.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Photoshoptowebflowdetail() {
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
                <h1>
                  <span className="aximo-title-animation" style={{ lineHeight: 1.2 }} >
                    Best Photoshop to Webflow Company in Ahmedabad, India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  Have a website design in Photoshop? We can convert it into a dynamic, fully functional Webflow website. At Chameleo GFX Studio, we offer Photoshop to Webflow conversion, helping businesses turn static designs into interactive web experiences. Our team ensures that your Webflow site looks and functions exactly like your original Photoshop design, maintaining design accuracy and responsiveness across all devices.
                </p>
                <p>
                  As a top Photoshop to Webflow development company in Ahmedabad, we use clean, optimized Webflow code to create websites that load fast and perform well in search engines. Whether you need a simple landing page or a complex website, we ensure pixel-perfect execution, interactive animations, and a smooth user experience.
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

export default Photoshoptowebflowdetail;
