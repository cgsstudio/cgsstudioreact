import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Signage Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";








function SignageDesigndetail() {

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
                <h1>
                  <span className="aximo-title-animation" style={{ lineHeight: "1.2" }}>
                    Best Signage Design Services in Ahmedabad India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  Signage design is essential for guiding, informing, and engaging your audience, whether it’s for storefronts, events, or offices. At Chameleo GFX Studio, we provide custom signage design services that help your business or event make a strong visual statement. From exterior building signs to directional signage and event displays, our designs are crafted to be both functional and attention-grabbing. We ensure that your signage design is not only clear and informative but also aligns with your brand’s aesthetic and message.
                </p>
                <p>
                  A well-designed sign can help guide customers, increase visibility, and reinforce your brand identity. Our signage design services are tailored to meet the needs of your business or event, ensuring your signs are both effective and visually striking. We focus on incorporating your brand’s colors, logos, and message in every piece of signage, ensuring consistency and clarity. Let us help you create signage designs that stand out and make a lasting impression.
                </p>
              </div>
            </div>
          </div>
          <div className="container pt-5">
            {services.map((service, index) => (
              <div key={index} className="">
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
          {/* <div className="row">
						<div className="col-lg-12">
							<div className="aximo-user-interface">
								<h3>Visual Brilliance Unleashed: Elevate Your Brand with The Best Graphic Design Company in Ahmedabad</h3>
								
							</div>
						</div>
				
					</div>
					<div className="aximo-faq-wrap">
				
						<img className="img-fluid" src={SingleImg2} alt="Web Development" />
				
					</div> */}
        </div>
      </div>
    </div>
  );
}

export default SignageDesigndetail;
