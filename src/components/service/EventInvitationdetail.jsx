import { Helmet } from "react-helmet-async";
import SingleImg from "../../assets/images/service/Event Invitation Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";



import { graphicDesignServices as services } from "../../data/serviceData";






function EventInvitationdetail() {

	return (
		<div className="section aximo-section-padding2 bg-white-smoke">
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
										Best Event Invitation Design Company in Ahmedabad, India
										{/* <span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span> */}
									</span>
								</h1>
								<p>
									The right event invitation design doesn’t just provide the details – it creates a sense of excitement, anticipation, and exclusivity. A beautifully designed invitation can set the tone for your event and generate buzz long before it begins. At Chameleo GFX Studio, we believe that every event deserves a unique, eye-catching invitation. Whether it’s for a corporate event, wedding, or grand launch, our custom event invitation designs reflect the spirit and theme of your occasion while engaging your guests from the moment they open it.
								</p>
								<p>
									Creating a memorable event invitation design is all about combining creativity, elegance, and practicality. At Chameleo GFX Studio, we understand that the invitation is the first thing your guests will see – so we make sure it’s something they’ll want to keep. From color schemes to typography, we create designs that resonate with your event's theme and purpose, ensuring your invitation stands out in a crowded inbox or mailbox. Ready to impress your guests? Let us design an invitation that builds excitement and sets the stage for a successful event.
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

export default EventInvitationdetail;
