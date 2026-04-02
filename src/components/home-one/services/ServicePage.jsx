import { Helmet } from "react-helmet";
import React from "react";
import Star2Img from "../../../assets/images/v1/star2.png";
import BreadCrumb from "../../../components/common/Breadcrumb";

import { 
  graphicDesignServices, 
  uiuxDesignServices, 
  webDevelopmentServices, 
  digitalMarketingServices 
} from "../../../data/serviceData";

const services = [
  ...graphicDesignServices,
  ...uiuxDesignServices,
  ...webDevelopmentServices,
  ...digitalMarketingServices
];

function ServicePage() {
  return (
    <>
      {/* Helmet for SEO metadata */}
      <Helmet>
        <title>Services</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://chameleogfxstudio.com/services/" />
      </Helmet>

      {/* Breadcrumb Component */}
      <BreadCrumb title="Services" />

      {/* Service Content */}
      <section className="bg-white-smoke">
        <div className="container py-10 ">
          {services.map((service, index) => (
            <div key={index} className="mb-5">
              {/* Heading for each main category */}
              <div className="aximo-section-title main center">
                <h2>
                  <span className="aximo-title-animation">
                    {service.title}
                    <span className="aximo-title-icon">
                      <img className="shape-color" src={Star2Img} alt="Star2Img" />
                    </span>
                  </span>
                </h2>
              </div>

              {/* Agar category available hai to isko render kare */}
              {service.categories &&
                service.categories.map((category, catIndex) => (
                  <div key={catIndex} className="mb-4">
                    <h4 className="mb-3 subtitle-heading link-page-subtitle">
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

              {/* Agar category nahi hai, to sirf items render kare */}
              {!service.categories && (
                <div className="row">
                  {service.items.map((item, itemIndex) => (
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
              )}
            </div>
          ))}
        </div>

      </section>

    </>
  );
}

export default ServicePage;

