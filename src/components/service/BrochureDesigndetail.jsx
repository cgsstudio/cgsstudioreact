import { Helmet } from "react-helmet";
import SingleImg from "../../assets/images/service/Brochure Design.jpg";
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







function BrochureDesigndetail() {

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
										About Brochure Design
										<span className="aximo-title-icon">
											<img src={Star2Img} alt="star" />
										</span>
									</span>
								</h2>
								<p>
									A well-designed brochure is a powerful marketing tool that provides your audience with essential information about your brand, services, or products in a compact, visually engaging format. At Chameleo GFX Studio, we specialize in brochure design services that combine creativity with clarity, ensuring your brochure stands out and effectively communicates your message. Whether you need a corporate brochure, product catalog, or event handout, our brochure design company in Ahmedabad delivers designs that leave a lasting impression. Our team ensures that your brochure design reflects your brand’s identity and conveys your message in an attractive and professional way.
								</p>
								<p>
									Brochure design plays a critical role in capturing attention and informing your target audience. With our custom brochure design solutions, we focus on creating visually stunning layouts and engaging content that appeal to your clients. At Chameleo GFX Studio, we blend modern design trends with strategic marketing elements, ensuring that your brochure is not just informative but also persuasive. Whether you're looking to promote your business, advertise new services, or share detailed product information, our brochure design services are tailored to meet your marketing objectives and help you achieve your business goals.
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

export default BrochureDesigndetail;
