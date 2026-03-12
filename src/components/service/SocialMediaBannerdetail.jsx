import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Social Media Banner Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";
  
  





function SocialMediaBannerdetail() {
	
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
									Social Media Banner Design Services in Ahmedabad
										{/* <span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span> */}
									</span>
								</h2>
								<p>
								In today’s digital landscape, social media banner design plays a crucial role in attracting and engaging your audience. A well-designed banner can instantly grab attention and convey your brand’s message effectively. At Chameleo GFX Studio, we specialize in creating social media banner designs that are not only visually appealing but also strategically crafted to align with your brand identity and marketing goals. Whether you need banners for Facebook, Instagram, LinkedIn, or Twitter, we ensure your design stands out and drives engagement.
								</p>
								<p>
								Our social media banner design services focus on creativity, consistency, and clarity. We create banners that are optimized for each platform’s specifications, ensuring they look great across devices. With our expert designers, you’ll receive a social media banner design that reflects your brand’s personality and boosts your online presence. From promotional banners to event announcements, we’re here to help you make a lasting impact with every post.
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

export default SocialMediaBannerdetail;
