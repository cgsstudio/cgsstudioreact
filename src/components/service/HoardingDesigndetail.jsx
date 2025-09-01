import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Hoarding Design.jpg";
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
  





function HoardingDesigndetail() {
	
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
									About Hoarding Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								Hoarding design is one of the most powerful outdoor advertising tools to capture the attention of passersby in busy, high-traffic areas. It’s not just about creating big, bold visuals; it’s about creating an unforgettable impression that resonates with your audience. At Chameleo GFX Studio, we believe that a well-crafted hoarding design can stop people in their tracks and leave a lasting mark on their minds. Whether you are promoting a new product, showcasing a real estate project, or building brand awareness, our innovative designs make sure your message is noticed and remembered.
								</p>
								<p>
								When it comes to outdoor hoarding design, creativity and clarity are key. With strategic placement and bold visuals, we help you convey your brand’s story in the most engaging way possible. Chameleo GFX Studio works closely with you to design hoardings that not only stand out visually but also connect with your target audience. We make sure every inch of your hoarding serves a purpose – driving awareness, sparking interest, and ultimately converting viewers into customers. Ready to make your mark on the city? Let’s start designing.
								</p>
							</div>
						</div>
					</div>
					  <div className="container pt-5">
							{services.map((service, index) => (
							  <div key={index} className="">
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
								{service.categories &&
								  service.categories.map((category, catIndex) => (
									<div key={catIndex} className="mb-4">
									  {/* Subtitle for each subcategory */}
									  <h4 className="mb-3">{category.subtitle}</h4>
									  <div className="row">
										{category.items.map((item, itemIndex) => (
										  <div key={itemIndex} className="col-12 col-md-6">
											<ul className="list-unstyled custom-list">
											  <li>{item}</li>
											</ul>
										  </div>
										))}
									  </div>
									</div>
								  ))}
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

export default HoardingDesigndetail;
