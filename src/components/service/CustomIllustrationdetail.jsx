import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Custom Illustration Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";


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








function CustomIllustrationdetail() {
	
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
									About Custom Illustration Design
										{/* <span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span> */}
									</span>
								</h2>
								<p>
								Custom illustration design brings a unique, creative touch to any project, whether for print or digital use. At Chameleo GFX Studio, we specialize in designing custom illustrations that are tailored to your specific needs. Whether you're looking for whimsical, detailed, or conceptual illustrations, our team of talented designers creates artwork that adds personality and creativity to your brand. From illustrations for websites, brochures, or social media, we ensure your visuals are as distinct as your brand.
								</p>
								<p>
								Our custom illustration design services focus on delivering one-of-a-kind visuals that tell your brand's story in a visually compelling way. We combine artistry with strategic design to ensure your illustrations not only capture attention but also convey the right message. Whether you're creating illustrations for marketing materials, books, or merchandise, we help you stand out with unique, tailor-made designs.
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

export default CustomIllustrationdetail;
