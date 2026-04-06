import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Motion Graphics Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";







function MotionGraphicsdetail() {

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
								<h1>
									<span className="aximo-title-animation" style={{ lineHeight: "1.2" }}>
										Best Motion Graphics Design Agency in Ahmedabad India
										{/* <span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span> */}
									</span>
								</h1>
								<p>
									Motion graphics design is one of the most dynamic ways to engage your audience and tell a story. At Chameleo GFX Studio, we specialize in creating visually striking motion graphics that bring your ideas to life. Whether you're looking to create animated ads, explainer videos, or social media content, our team of motion graphics designers ensures your message is conveyed in a captivating, easy-to-understand format. We combine the latest animation techniques with creative storytelling to deliver impactful results.
								</p>
								<p>
									Motion graphics are an effective way to capture attention and simplify complex concepts in a way that’s both engaging and entertaining. At Chameleo GFX Studio, we offer motion graphics design services that include 2D and 3D animation, kinetic typography, and dynamic transitions. Our designs are tailored to fit your brand’s tone and objectives, whether for marketing campaigns, educational videos, or corporate presentations. Let us help you tell your story with motion, and turn your ideas into a visual masterpiece that resonates with your audience.
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

export default MotionGraphicsdetail;
