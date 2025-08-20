import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Digital Marketing.jpg";
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
  

function Digitalmarketingdetail() {
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
                  Digital Marketing – Elevate Your Online Presence and Drive Results
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h2>
                <p>
                In today's digital landscape, having a strong online presence is essential for business success. At Chameleo GFX Studio, we offer comprehensive digital marketing services that help businesses enhance visibility, generate leads, and boost conversions. From SEO and social media marketing to Google Ads and email campaigns, our data-driven strategies ensure you reach the right audience at the right time. Whether you're a startup or an established brand, our expert digital marketing company in Ahmedabad tailors solutions that align with your business goals.
                </p>
                <p>
                With a blend of organic and paid marketing strategies, we focus on improving search engine rankings, social media engagement, and brand awareness. Our team utilizes cutting-edge tools and analytics to optimize every campaign, ensuring maximum ROI. Whether you need targeted Meta Ads, performance-driven Google Ads, or strategic content marketing, we craft customized plans that help your brand stand out in the competitive digital space.
                </p>
                <p>
                Our full-service digital marketing solutions help businesses scale by leveraging the power of SEO, PPC, and social media. We continuously track, test, and optimize marketing strategies to keep up with ever-changing algorithms and market trends. With our expertise, businesses can experience higher website traffic, improved lead generation, and long-term customer retention.
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
            <div key={itemIndex} className="col-12 col-md-4">
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

export default Digitalmarketingdetail;
