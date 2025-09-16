import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Annual Report Design.jpg";
import SingleImg2 from "../../assets/images/service/service-details.webp";
import Star2Img from "../../assets/images/v1/star2.png";
import WebDevApproach from "./WebDevApproach";


const services = [
	{
		title: "Graphics Design",
		items: [
			{ text: "Logo Design", link: "/logo-design-company-ahmedabad" },
			{ text: "Branding and Identity Design", link: "/branding-and-identity-design" },
			{ text: "Social Media Banner Design", link: "/social-media-banner-design" },
			{ text: "Flyer Design", link: "/flyer-design" },
			{ text: "Brochure Design", link: "/brochure-design" },
			{ text: "Poster Design", link: "/poster-design" },
			{ text: "Hoarding Design", link: "/hoarding-design" },
			{ text: "Packaging Design", link: "/packaging-design" },
			{ text: "Advertising Design", link: "/advertising-design" },
			{ text: "Newsletter Design", link: "/newsletter-design" },
			{ text: "Infographic Design", link: "/infographic-design" },
			{ text: "Business Card Design", link: "/business-card-design" },
			{ text: "Presentation Design", link: "/presentation-design" },
			{ text: "Magazine and Booklet Design", link: "/magazine-and-booklet-design" },
			{ text: "Custom Illustration Design", link: "/custom-illustration-design" },
			{ text: "Event Invitation Design", link: "/event-invitation-design" },
			{ text: "Menu Design", link: "/menu-design" },
			{ text: "Signage Design", link: "/signage-design" },
			{ text: "Corporate Profile Design", link: "/corporate-profile-design" },
			{ text: "Annual Report Design", link: "/annual-report-design" },
			{ text: "Digital Ad Design", link: "/digital-ad-design" },
			{ text: "Trade Show Booth Design", link: "/trade-show-booth-design" },
			{ text: "Motion Graphics Design", link: "/motion-graphics-design" },
			{ text: "E-book Design", link: "/e-book-design" },
		],
	},
];






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
