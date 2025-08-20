import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/ERP-UI-UX-Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



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
  
  
  






function ERPUIUXDesigndetail() {
	
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
									About ERP UI/UX Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
                                Creating an intuitive, user-friendly interface for your ERP (Enterprise Resource Planning) system is crucial to its effectiveness and adoption within your organization. At Chameleo GFX Studio, we specialize in designing ERP UI/UX that enhances usability, simplifies complex workflows, and boosts overall system performance. Our ERP UI/UX design services are customized to meet the unique requirements of your business, ensuring that every interaction with the ERP system is efficient and intuitive. As a trusted UI/UX design company in Ahmedabad, we focus on optimizing the interface to improve employee productivity and streamline business operations.
								</p>
								<p>
								We use industry-standard tools like Figma design to create prototypes and wireframes that balance functionality, usability, and aesthetics in your ERP system. Our expert team collaborates closely with you to understand your business processes and user needs, ensuring that the ERP UI/UX design enhances system navigation and user engagement. Whether you are developing a new ERP system or upgrading an existing one, we provide design solutions that result in a seamless, user-friendly experience, driving efficiency and long-term success for your business.
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

export default ERPUIUXDesigndetail;
