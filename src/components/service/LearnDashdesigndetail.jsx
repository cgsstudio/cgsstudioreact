import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/LearnDash Design and Development.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

import { webDevelopmentServices as services } from "../../data/serviceData";

function LearnDashdesigndetail() {
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
                <h2>
                  <span className="aximo-title-animation">
                  LearnDash Design and Development
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                Creating an engaging e-learning platform requires a seamless user experience and intuitive design. At Chameleo GFX Studio, we specialize in LearnDash design and development, helping businesses, educators, and training institutes build high-quality online learning platforms. From structuring courses to integrating quizzes, certificates, and gamification elements, we ensure your WordPress-based LearnDash LMS is both functional and visually appealing.
                </p>
                <p>
                As a LearnDash development company in Ahmedabad, we customize learning portals with interactive designs, mobile responsiveness, and advanced course management features. Our team ensures smooth payment gateway integration, membership management, and student tracking, enhancing both learner engagement and course administration. Whether you need a corporate training portal or a full-fledged online academy, we build scalable solutions tailored to your business goals.
                </p>
                <p>
                Beyond development, we provide ongoing LearnDash maintenance and support, keeping your LMS up-to-date and running smoothly. We optimize performance, fix bugs, and enhance security to ensure an uninterrupted learning experience. With our expertise in WordPress and e-learning solutions, we create learning platforms that drive results.
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

export default LearnDashdesigndetail;
