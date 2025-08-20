import SingleImg from "../../assets/images/service/uiux.jpg";
import Star2Img from "../../assets/images/v1/star2.png";
import WorkingApproach from "./WorkingApproach";


const services = [
	{
        title: "UI/UX Design",
        items: [
			{ text: "Website UI/UX Design", link: "/website-ui-ux-design" },
			{ text: "iOS UI/UX Design", link: "/ios-ui-ux-design" },
			{ text: "Android UI/UX Design", link: "/android-ui-ux-design" },
			{ text: "Backend UI/UX Design", link: "/backend-ui-ux-design" },
			{ text: "ERP UI/UX Design Design", link: "/erp-ui-ux-design" },
        ],
      },
  ];
  
  
  


function ServiceDetails() {
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
									About UI/UX Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								At Chameleo GFX Studio, we specialize in providing top-notch UI/UX design services to create visually appealing and highly functional digital products. As a leading UI/UX design company in Ahmedabad, our team focuses on delivering seamless user experiences that enhance usability and align with your brand’s goals. We use the latest design tools like Figma design to craft intuitive and responsive interfaces that cater to the specific needs of your audience. Whether it’s a website, mobile app, or software interface, our designs are built to engage users and drive conversions.
								</p>
								<p>
								Our experienced UI/UX designers in Ahmedabad prioritize user-centered design principles to ensure your digital product is not only aesthetically pleasing but also user-friendly. We work closely with you to understand your objectives and target audience, crafting customized design solutions that enhance user interaction and satisfaction. As the best UI/UX design company in Ahmedabad, we guarantee that our innovative designs will help you stand out in the competitive digital landscape and deliver impactful user experiences that drive success.
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
					</div>
					<div className="aximo-faq-wrap">
						<WorkingApproach />
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default ServiceDetails;
