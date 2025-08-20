import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/iOS-UI-UX.jpg";
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
  
  
  






function IOSUIUXDesigndetail() {
	
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
									About iOS UI/UX Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								In today’s mobile-first world, creating an exceptional iOS UI/UX design is crucial to ensure that your app stands out in the crowded App Store. At Chameleo GFX Studio, we specialize in designing UI/UX for iOS apps that prioritize both visual appeal and functionality. As an experienced iOS UI/UX designer in Ahmedabad, our team crafts designs that align with Apple’s design guidelines while ensuring that your app offers an intuitive, enjoyable experience for users. Whether it’s a custom iOS app or an update to an existing one, we ensure that your design drives engagement and user satisfaction.
								</p>
								<p>
								Our approach to iOS UI/UX design is rooted in user research, prototyping, and testing to create apps that are easy to navigate and aesthetically pleasing. We use tools like Figma design to craft wireframes and prototypes that are optimized for the iOS platform, ensuring smooth navigation and high performance. By focusing on every detail, from app icons to interactions, we create an immersive and seamless experience for iOS users that enhances retention and drives app success.
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

export default IOSUIUXDesigndetail;
