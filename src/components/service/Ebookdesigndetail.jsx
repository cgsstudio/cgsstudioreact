import { Helmet } from "react-helmet-async";
import SingleImg from "../../assets/images/service/E-book Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";







function Ebookdesigndetail() {

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
                    Best E-book Design Services in Ahmedabad India
                    {/* <span className="aximo-title-icon">
                      <img src={Star2Img} alt="star" />
                    </span> */}
                  </span>
                </h1>
                <p>
                  E-book design is essential for creating a polished, professional, and engaging digital publication. Whether you’re publishing a guide, tutorial, or novel, a well-designed e-book enhances the reading experience and strengthens your brand’s credibility. At Chameleo GFX Studio, we specialize in e-book design services that combine creative design with functionality. We ensure your e-book looks great across all devices, with user-friendly navigation, stunning layouts, and a seamless reading experience.
                </p>
                <p>
                  Our e-book design services focus on creating a visually appealing and well-structured layout that keeps your readers engaged. We incorporate elements like typography, color schemes, and interactive features that enhance the overall reading experience. Whether for marketing materials, educational content, or storytelling, our e-book design services help you deliver professional digital publications that make an impact. Let us transform your content into a beautifully designed e-book that captures your audience’s attention.
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

export default Ebookdesigndetail;
