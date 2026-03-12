import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Newsletter Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";
  






function NewsletterDesigndetail() {
	
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
									Newsletter Design Service in Ahmedabad
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
								A newsletter design is more than just a means of communication – it’s an opportunity to engage, inform, and build a deeper connection with your audience. Whether you're sending out company updates, event invites, or product announcements, a well-designed newsletter ensures your message doesn’t just get seen, but gets read. At Chameleo GFX Studio, we specialize in custom newsletter designs that balance aesthetics and functionality, ensuring that your content stands out and encourages action. Our designs are crafted to captivate your audience from the first glance, ensuring your message is clear and engaging.
								</p>
								<p>
								Effective newsletter design services are all about creating an experience, not just sharing information. Our team knows how to design responsive, visually appealing newsletters that make the reading experience seamless and enjoyable. We make sure your newsletters are mobile-friendly, easy to navigate, and packed with engaging content that resonates with your audience. At Chameleo GFX Studio, we believe in the power of great design to inspire action. Whether you're promoting your latest blog post, announcing a sale, or sharing news, we ensure your newsletter leaves a lasting impression and builds a stronger connection with your audience.
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

export default NewsletterDesigndetail;
