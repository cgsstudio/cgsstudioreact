import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Graphics_01 1.png";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";

const services = [
  {
    title: "Graphics Design",
    items: [
      { text: "Logo Design", link: "/logo-design-company-ahmedabad" },
      { text: "Branding and Identity Design", link: "/branding-and-identity-design" },
      { text: "Social Media Banner Design", link: "/social-media-banner-design" },
      { text: "Flyer Design", link: "/flyer-design" },
      { text: "Brochure Design", link: "/brochure-design" },
      { text: "Poster Design", link: "/poster-design" },
      { text: "Hoarding Design", link: "/hoarding-design" },
      { text: "Packaging Design", link: "/packaging-design" },
      { text: "Advertising Design", link: "/advertising-design" },
      { text: "Newsletter Design", link: "/newsletter-design" },
      { text: "Infographic Design", link: "/infographic-design" },
      { text: "Business Card Design", link: "/business-card-design" },
      { text: "Presentation Design", link: "/presentation-design" },
      { text: "Magazine and Booklet Design", link: "/magazine-and-booklet-design" },
      { text: "Custom Illustration Design", link: "/custom-illustration-design" },
      { text: "Event Invitation Design", link: "/event-invitation-design" },
      { text: "Menu Design", link: "/menu-design" },
      { text: "Signage Design", link: "/signage-design" },
      { text: "Corporate Profile Design", link: "/corporate-profile-design" },
      { text: "Annual Report Design", link: "/annual-report-design" },
      { text: "Digital Ad Design", link: "/digital-ad-design" },
      { text: "Trade Show Booth Design", link: "/trade-show-booth-design" },
      { text: "Motion Graphics Design", link: "/motion-graphics-design" },
      { text: "E-book Design", link: "/e-book-design" },
    ],
  },
];

function GraphicDesignService() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Graphic Design" />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    About Graphic Design
                    <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                  Graphic design is the creative process of combining text,
                  images, and visual elements to communicate ideas effectively.
                  It plays a key role in branding, marketing, and digital
                  presence by creating visually appealing materials such as
                  logos, brochures, social media posts, and websites. A
                  well-crafted design not only enhances aesthetics but also
                  strengthens brand identity. As a trusted Graphic Design
                  Company in Ahmedabad, we specialize in delivering innovative
                  and high-quality designs that captivate audiences and drive
                  business growth.
                </p>
                <p>
                  Graphic design is essential for businesses to create a strong
                  and professional image. Whether you need a logo that defines
                  your brand or marketing materials that engage customers,
                  impactful designs help establish credibility and attract
                  potential clients. From social media graphics to website
                  visuals, effective design boosts brand recognition and
                  improves customer engagement. Our Graphic Design Company in
                  Ahmedabad provides tailored design solutions that align with
                  your brand’s vision, helping you stand out in a competitive
                  market.
                </p>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="container pt-5">
            {services.map((service, index) => (
              <div key={index}>
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

                <div className="row">
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="col-12 col-md-4">
                      <ul className="list-unstyled custom-list">
                        <li>
                          <a href={item.link}>{item.text}</a>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GraphicDesignService;
