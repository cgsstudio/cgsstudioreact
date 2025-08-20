import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Backend-UI-UX.jpg";
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
  
  
  






function BackendUIUXDesigndetail() {
	
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
									About Backend UI/UX Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
                                Effective backend UI/UX design is critical for ensuring that your backend systems are intuitive, efficient, and easy to manage. At Chameleo GFX Studio, we provide UI/UX design services for backend systems, focusing on creating interfaces that make managing complex data and operations more streamlined and accessible. As an experienced UI/UX design company in Ahmedabad, our team understands the importance of functionality and ease of use for backend interfaces. We design systems that provide a seamless user experience while improving operational efficiency.
								</p>
								<p>
								Our backend UI/UX design services include designing dashboards, control panels, and admin interfaces that are user-friendly and efficient. We use tools like Figma design to create wireframes and prototypes that ensure your backend system is intuitive, easy to navigate, and optimized for performance. With our focus on user-centric design, we help businesses create backend systems that are not only functional but also enhance overall productivity and user satisfaction, ensuring the success of your enterprise software.
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

export default BackendUIUXDesigndetail;
