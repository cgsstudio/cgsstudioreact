import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Android-UI-UX.jpg";
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
  ];0
    

function AndroidUIUXDesigndetail() {
	
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
									About Android UI/UX Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
                                At Chameleo GFX Studio, we specialize in crafting high-quality Android UI/UX designs that enhance user experience and satisfaction. As a leading Android UI/UX design company in Ahmedabad, our team ensures that every app we design is optimized for Android devices, providing a smooth, intuitive interface that aligns with the Android platform’s unique requirements. From custom Android app designs to redesigns, we ensure that your app is visually appealing, easy to navigate, and delivers a seamless user experience that drives engagement and boosts retention.
								</p>
								<p>
								Our Android UI/UX design services focus on creating a balance between aesthetic appeal and functionality. We use design tools like Figma design to create interactive wireframes and prototypes that ensure smooth navigation, responsive layouts, and compatibility across different Android devices. By focusing on user-centered design principles, we ensure your Android app not only stands out visually but also provides a superior user experience that leads to higher user satisfaction and app success
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

export default AndroidUIUXDesigndetail;
