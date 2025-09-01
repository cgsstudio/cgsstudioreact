import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Website-UI-UX.jpg";
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
  
  
  






function WebsiteUIUXDesigndetail() {
	
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
									About Website UI/UX Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								At Chameleo GFX Studio, we specialize in creating visually engaging and user-friendly website UI/UX designs that enhance user interaction and overall website performance. As a trusted UI/UX design company in Ahmedabad, we understand the importance of creating responsive, intuitive designs that reflect your brand identity and resonate with your audience. Our team of expert UI/UX designers ensures that every design is not only aesthetically appealing but also highly functional, providing a seamless browsing experience for your users. Whether you need a custom website design or a complete website redesign, we craft solutions that are tailored to your business goals.
								</p>
								<p>
								We focus on a user-centric approach to website UI/UX design, optimizing every element to improve navigation, interaction, and conversion rates. Our use of cutting-edge tools like Figma design allows us to deliver responsive, fast-loading, and mobile-friendly websites that enhance user engagement. With our expertise in UI/UX design and extensive experience in the industry, we ensure that your website stands out in the competitive online space. Let us help you create a website that not only looks good but also delivers an exceptional user experience, driving success and growth for your business.
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
					
				</div>
			</div>
		</div>
	);
}

export default WebsiteUIUXDesigndetail;
