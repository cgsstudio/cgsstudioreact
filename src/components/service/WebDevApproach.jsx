import Single2Img from "../../assets/images/service/service-single2.png";
import Star2Img from "../../assets/images/v1/star2.png";

const workingApprochData = [
	{
		id: crypto.randomUUID(),
		title: "Planning",
		description:
			"We start with knowing your target audience, learning about your goals, and your exact project requirements. We plan everything from start to finish based on our complete survey.",
		icon: "icon-search",
	},
	{
		id: crypto.randomUUID(),
		title: "Design",
		description:
			"After creating a solid user experience and website flow with wireframes, we develop the visual design of your website’s appearance and feel.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Development",
		description:
			"After that, our talented developers add the material to the website, make sure it is mobile-friendly, and bring your designs to life.",
		icon: "icon-start-up",
	},
	{
		id: crypto.randomUUID(),
		title: "Testing",
		description:
			"Our web development company is different in that we test everything thoroughly to make sure there are no issues before anything becomes accessible to all.",
		icon: "icon-start-up",
	},
];
function WebDevApproach() {
	return (
		<div className="row">
			<div className="col-lg-5 offset-lg-1 order-lg-1">
				<div className="aximo-service-details-thumb2 ">
					<img src={Single2Img} alt="service" />
				</div>
			</div>
			<div className="col-lg-6">
				<div className="aximo-default-content">
					<h3>
						<span className="aximo-title-animation">
						Bespoke Website Development Company in Ahmedabad, India
							<span className="aximo-title-icon">
								<img src={Star2Img} alt="star" />
							</span>
						</span>
					</h3>
			
				</div>
				<div className="aximo-our-approach">
					{workingApprochData.map((item) => (
						<div className="aximo-iconbox-wrap5" key={item.id}>
							<div className="aximo-iconbox-icon5">
								<i className={`${item.icon}`}></i>
							</div>
							<div className="aximo-iconbox-data5">
								<h3>{item.title}:</h3>
								<div className="aximo-user-interface">
									<ul>
										<li>{item.description}</li>
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default WebDevApproach;
