import { Helmet } from "react-helmet-async";
import SingleImg from "../../assets/images/service/Annual Report Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";


import { graphicDesignServices as services } from "../../data/serviceData";






function AnnualReportdetail() {

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
										About Annual Report Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
									An annual report is more than just a financial statement – it’s an opportunity to showcase your company’s accomplishments, values, and vision for the future. At Chameleo GFX Studio, we offer annual report design services that take your financials and company insights and transform them into a visually engaging story. We design reports that are not only informative but also compelling, making sure your stakeholders, investors, and clients can easily digest your key messages.
								</p>
								<p>
									Our annual report design services focus on creating a clean, professional layout that aligns with your corporate identity. At Chameleo GFX Studio, we incorporate infographics, charts, and graphics that make your report engaging and easy to navigate. Whether for internal use, public release, or investor meetings, we ensure that your annual report design captures your company’s achievements and goals in a visually impressive way, building trust and confidence with your audience.
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
											<div key={itemIndex} className="col-12 col-lg-4 col-md-4">
												<ul className="list-unstyled ">
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

export default AnnualReportdetail;
