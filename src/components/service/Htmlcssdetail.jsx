import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/HTML_CSS.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function Htmlcssdetail() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">

          {/* Top Image */}
          <div className="aximo-service-details-thumb d-none d-md-block">
            <img src={SingleImg} alt="Web Development" />
          </div>

          {/* Content */}
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h1>
                  <span className="aximo-title-animation" style={{ lineHeight: 1.2 }}>
                    Best HTML/CSS Development Company in India

                  </span>
                </h1>
                <p>
                  In today’s digital world, a well-structured website is essential for an impactful online presence. At Chameleo GFX Studio, we specialize in HTML/CSS development, crafting clean, efficient, and visually appealing websites that enhance user experience. Whether you're looking for a simple static website or a complex web application, our expert developers ensure seamless functionality and fast-loading pages. As a leading HTML/CSS development company in Ahmedabad, we build SEO-friendly websites that perform exceptionally across all devices and browsers, giving your business a competitive edge.
                </p>
                <p>
                  Our team focuses on writing high-quality HTML5 and CSS3 code, ensuring that your website meets modern web standards. With a strong emphasis on responsive layouts, smooth animations, and intuitive navigation, we create web solutions that captivate visitors. By incorporating the latest web technologies, we help businesses establish a strong digital footprint with a professional, user-friendly, and performance-driven website.
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

export default Htmlcssdetail;
