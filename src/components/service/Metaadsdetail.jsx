import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Meta Ads.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";

const services = [
    {
      title: "Digital Marketing",
      items: [
        { text: "Digital Marketing", link: "/digital-marketing" },
        { text: "Search Engine Optimization (SEO)", link: "/search-engine-optimization" },
        { text: "Social Media Marketing", link: "/social-media-marketing" },
        { text: "Email Marketing", link: "/email-marketing" },
        { text: "Google Ads", link: "/google-ads" },
        { text: "Meta Ads", link: "/meta-ads" },
      ],
    },
  ];
  

function Metaadsdetail() {
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
                  Meta Ads – Unlock the Power of Facebook and Instagram Advertising
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                With over 3 billion active users, Facebook and Instagram are two of the most powerful platforms for reaching your ideal customers. At Chameleo GFX Studio, we specialize in Meta Ads management, helping businesses run high-impact, results-driven ad campaigns on Facebook and Instagram. Our Meta Ads experts in Ahmedabad craft targeted ads that increase brand awareness, generate leads, and drive online sales.
                </p>
                <p>
                We use advanced audience targeting, creative ad design, and data analytics to ensure every campaign delivers maximum ROI. Whether it’s lead generation ads, eCommerce product promotions, or retargeting campaigns, we optimize every aspect of your ad strategy to drive results. By leveraging Facebook Pixel, custom audiences, and lookalike audiences, we ensure your ads reach high-intent users who are more likely to convert.
                </p>
                <p>
                With data-backed Meta Ads strategies, businesses can increase engagement, boost conversions, and maximize ad performance. Our team continuously tests and optimizes campaigns, ensuring you get the best possible return on your ad spend. Let us help you scale your business with strategic Facebook and Instagram advertising.
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

        {/* Loop through items directly */}
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

export default Metaadsdetail;
