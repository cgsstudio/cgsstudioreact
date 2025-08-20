import SingleImg from "../../assets/images/service/Logo Design.jpg";
import Single2Img from "../../assets/images/service/Logo_02.png";
import Star2Img from "../../assets/images/v1/star2.png";
import WorkingApproach from "./WorkingApproach";

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
  
function LogoDesignDetails() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="aximo-service-details-wrap">
					<div className="aximo-service-details-thumb">
						<img src={SingleImg} alt="Single img" />
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="aximo-default-content">
								<h2>
									<span className="aximo-title-animation">
									About Logo Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								A logo is the face of your brand, serving as a powerful visual identity that communicates your business values and mission. A well-designed logo creates instant recognition and leaves a lasting impact on your audience. As a trusted logo design company in Ahmedabad, we specialize in creating custom logos that are unique, professional, and aligned with your brand’s vision. Our skilled logo designers in Ahmedabad focus on crafting visually appealing and meaningful designs that make your brand stand out in a competitive market.
								</p>
								<p>
								A strong logo is essential for building credibility and brand recognition. It plays a crucial role in marketing, ensuring consistency across all platforms, from websites to social media and business cards. Collaborating with a branding agency in Ahmedabad helps establish a cohesive brand identity that resonates with your target audience. At Chameleo GFX Studio, a leading creative branding agency in Ahmedabad, we design logos that not only look great but also enhance your brand’s visibility, making a lasting impression on potential customers.
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
					{/* <div className="row">
						<div className="col-lg-6">
							<div className="aximo-user-interface">
								<h3>1/ User Interface (UI):</h3>
								<ul>
									<li>
										UI refers to the visual elements and the overall look and feel of a product. It
										encompasses the design of screens, pages, buttons, icons, and any other visual
										elements users interact with.
									</li>
									<li>
										UI designers are responsible for creating a visually appealing and consistent
										design that aligns with the brand or product's identity.
									</li>
									<li>
										Key aspects of UI design include layout, color schemes, typography, icons, and
										graphical elements.
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="aximo-user-interface">
								<h3>2/ User Experience (UX):</h3>
								<ul>
									<li>
										UX focuses on the overall experience of the user when interacting with a
										product. It encompasses how users feel when they use the product and how easy or
										challenging it is to accomplish their goals.
									</li>
									<li>
										UX designers work to understand the user's needs, behaviors, and pain points,
										and they design the product maximizes user satisfaction.
									</li>
									<li>
										Key aspects of UX design include research, information architecture,
										wireframing, prototyping, usability testing, and user journey mapping.
									</li>
								</ul>
							</div>
						</div>
					</div> */}
					{/* <div className="aximo-faq-wrap">
					<div className="row">
			<div className="col-lg-5 offset-lg-1 order-lg-1">
				<div className="aximo-service-details-thumb2 ">
					<img src={Single2Img} alt="service" />
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-default-content">
					<h3>
						<span className="aximo-title-animation">
						Top Logo Designer in Ahmedabad, Gujarat, India
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
					</h3>
			
				</div>
				<div className="aximo-our-approach">
					{workingApprochData.map((item) => (
						<div className="aximo-iconbox-wrap5" key={item.id}>
							<div className="aximo-iconbox-icon5">
								<i className={`${item.icon}`}></i>
							</div>
							<div className="aximo-iconbox-data5">
								<h3>{item.title}:</h3>
								<div className="aximo-user-interface">
									<ul>
										<li>{item.description}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default LogoDesignDetails;
