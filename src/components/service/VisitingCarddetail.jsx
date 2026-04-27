import { Helmet } from "react-helmet-async";
import SingleImg from "../../assets/images/service/Business Card Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";
import { graphicDesignServices as services } from "../../data/serviceData";



function VisitingCarddetail() {

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
										Best Visiting Card Design Service in  Ahmedabad, India
										{/* <span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span> */}
									</span>
								</h1>
								<p>
									A visiting card design is often the first point of contact between you and potential clients or business partners. It’s an essential marketing tool that speaks volumes about your professionalism and attention to detail. At Chameleo GFX Studio, we specialize in designing custom visiting cards that reflect your brand’s identity and leave a lasting impression. Our team of expert designers ensures that your visiting card is not only visually appealing but also functional, with easy-to-read contact information and a memorable design that stands out.
								</p>
								<p>
									Our visiting card design services focus on creating designs that perfectly match your brand’s personality. We use high-quality materials, attention-grabbing graphics, and well-thought-out layouts to ensure your visiting card makes a strong impact. Whether you need a minimalistic, professional design or something more creative, we work with you to create a visiting card that leaves a lasting impression and helps you network effectively.
								</p>
							</div>
						</div>
					</div>
					<div className="container pt-5">
						{services.map((service, index) => (
							<div key={index} className="">
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

export default VisitingCarddetail;
