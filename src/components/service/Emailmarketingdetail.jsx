import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Email Marketing.jpg";
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
  

function Emailmarketingdetail() {
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
                  Email Marketing – Nurture Leads and Boost Customer Retention
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                Email marketing remains one of the most cost-effective and high-converting digital marketing strategies. At Chameleo GFX Studio, we help businesses create, automate, and optimize email marketing campaigns that drive engagement and sales. Whether you need newsletters, promotional emails, or automated drip campaigns, we craft personalized emails that resonate with your audience and encourage action.
                </p>
                <p>
                Our email marketing services in Ahmedabad focus on building and segmenting email lists, crafting compelling subject lines, and designing visually appealing emails. By leveraging A/B testing, automation, and performance analytics, we ensure that every campaign delivers higher open rates, click-through rates, and conversions. We integrate email marketing with other digital strategies, such as SEO and social media, to create a cohesive marketing approach that nurtures leads and strengthens customer relationships.
                </p>
                <p>
                With a well-structured email marketing strategy, businesses can increase customer retention, improve brand loyalty, and maximize revenue. Whether you're launching a product, promoting a sale, or nurturing leads, our expert email marketers in Ahmedabad help you create email campaigns that drive real business results.
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

export default Emailmarketingdetail;
