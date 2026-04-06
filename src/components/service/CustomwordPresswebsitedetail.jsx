import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Custom WordPress Website Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function CustomwordPresswebsitedetail() {
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
                  <span className="aximo-title-animation" style={{ lineHeight: "1.2" }}>
                    Best Custom WordPress Website Design Company in Ahmedabad, India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  Your website should be as unique as your brand. At Chameleo GFX Studio, we specialize in custom WordPress website design, creating visually stunning and functionally powerful websites tailored to your business goals. Unlike generic templates, our custom WordPress designs are built from the ground up, ensuring your brand stands out. We integrate responsive design elements, intuitive navigation, and high-speed performance to create a seamless user experience.
                </p>
                <p>
                  As a trusted WordPress design company in Ahmedabad, we focus on user engagement and conversion-driven design strategies. Whether you need a corporate website, a portfolio, or a startup landing page, our custom WordPress websites are optimized for mobile responsiveness, SEO, and user-friendly interactions. Our designers and developers work together to craft a site that aligns with your business goals while maintaining a professional and modern aesthetic.
                </p>
                <p>
                  Beyond just looks, we ensure your website is fully functional with advanced features, interactive elements, and secure integrations. Our expertise extends to theme and plugin customization, allowing us to add custom functionalities that meet your specific needs. With regular WordPress website maintenance and support, we keep your site running smoothly, ensuring top performance and security at all times.
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

export default CustomwordPresswebsitedetail;
