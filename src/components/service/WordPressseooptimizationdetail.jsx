import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/WordPress SEO Optimization.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function WordPressseooptimizationdetail() {
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
                    Best WordPress SEO Optimization Company in Ahmedabad, India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  A well-optimized WordPress website is key to attracting organic traffic and increasing brand visibility. At Chameleo GFX Studio, we offer WordPress SEO optimization, ensuring your website ranks higher on search engines like Google. Our SEO strategies include keyword research, content optimization, technical SEO, and link-building to enhance your site's online presence.
                </p>
                <p>
                  As a WordPress SEO expert in Ahmedabad, we focus on both on-page and off-page SEO strategies to improve website rankings. We optimize website speed, meta tags, headers, alt texts, and URLs to align with search engine algorithms. Our team also ensures that your content is structured properly, with engaging visuals and well-researched keywords to attract the right audience.
                </p>
                <p>
                  Beyond basic SEO, we implement local SEO, schema markup, and mobile optimization to give your site a competitive edge. Whether you have a blog, a business website, or an eCommerce store, our WordPress SEO optimization services help you gain visibility, generate leads, and grow your business organically.
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

export default WordPressseooptimizationdetail;
