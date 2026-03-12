import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Infographic Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";
  






function InfographicDesigndetail() {
	
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
									Infographic Design Services in Ahmedabad
									<span className="aximo-title-icon">
										<img src={Star2Img} alt="star" />
									</span>
									</span>
								</h2>
								<p>
								Infographic design is an effective way to present complex information in a visually appealing and easily digestible format. At Chameleo GFX Studio, we specialize in designing custom infographics that simplify data, enhance storytelling, and make key points stand out. Whether you're explaining industry trends, sharing statistics, or creating step-by-step guides, our infographics help convey information in a way that’s both informative and visually engaging. Our infographic design services focus on clear layout, impactful visuals, and compelling messaging that resonate with your audience.
								</p>
								<p>
								A great infographic design transforms boring statistics and data into eye-catching visuals that are easy to understand and share. At Chameleo GFX Studio, we create infographics that not only capture attention but also provide real value to your audience. By combining stunning visuals with well-researched information, we help you tell your story effectively. Whether for blogs, reports, presentations, or marketing materials, our infographic design services ensure your data isn’t just seen – it’s remembered.
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

export default InfographicDesigndetail;
