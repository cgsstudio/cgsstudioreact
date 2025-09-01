import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Google Ads.jpg";
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
  

function Googleadsdetail() {
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
                  Google Ads – Drive Targeted Traffic and Maximize ROI
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                Email marketing remains one of the most cost-effective and high-converting digital marketing strategies. At Chameleo GFX Studio, we help businesses create, automate, and optimize email marketing campaigns that drive engagement and sales. Whether you need newsletters, promotional emails, or automated drip campaigns, we craft personalized emails that resonate with your audience and encourage action.
                </p>
                <p>
                Our Google Ads specialists focus on keyword research, ad copywriting, landing page optimization, and bid management to ensure that every rupee spent delivers the highest return. Whether you’re looking to increase website traffic, generate leads, or boost online sales, we create customized ad campaigns tailored to your goals. With continuous monitoring and A/B testing, we refine ad performance, minimize ad spend waste, and maximize conversions.
                </p>
                <p>
                With our Google Ads services in Ahmedabad, businesses can achieve instant visibility, reach their target audience, and drive measurable results. We handle everything from campaign setup to ongoing optimization, ensuring that your paid advertising strategy aligns with your overall marketing objectives.
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

export default Googleadsdetail;
