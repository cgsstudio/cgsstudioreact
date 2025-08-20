import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Magazine and Booklet Design.jpg";
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
  





function MagazineBookletdetail() {
	
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
									About Magazine and Booklet Design
									{/* <span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span> */}
									</span>
								</h2>
								<p>
								Magazine and booklet design plays a pivotal role in how your publication is perceived and how engaging it is for your readers. At Chameleo GFX Studio, we offer expert magazine design services that ensure your content is not only visually appealing but also easy to navigate and engaging. Whether you’re publishing a lifestyle magazine, corporate brochure, or product booklet, our design team works to ensure every page is thoughtfully crafted, from layout to typography.
								</p>
								<p>
								A magazine and booklet design that combines professional layouts with visually appealing imagery can significantly enhance reader experience. At Chameleo GFX Studio, our team creates custom magazine designs that are both functional and aesthetically pleasing. We focus on creating designs that allow your content to shine while maintaining brand consistency. Whether you are designing an informative booklet, a business magazine, or an annual report, our magazine design services ensure your publication stands out and delivers an exceptional reading experience.
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
										  <div key={itemIndex} className="col-12 col-md-4">
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
								)}
							  </div>
							))}
						  </div>
					
				</div>
			</div>
		</div>
	);
}

export default MagazineBookletdetail;
