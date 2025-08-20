import Single2Img from "../../assets/images/service/uiux01.jpg";
import Star2Img from "../../assets/images/v1/star2.png";

const workingApprochData = [
	{
		id: crypto.randomUUID(),
		title: "Discovery and Research",
		description:
			"We identify the needs, project requirements of our clients through comprehensive research and analysis.",
		icon: "icon-search",
	},
	{
		id: crypto.randomUUID(),
		title: "Design and Prototyping",
		description:
			"Creating products that are not just functional but also entertaining, effective, and pleasurable to use is the aim of user experience design.",
		icon: "icon-design-tools",
	},
	{
		id: crypto.randomUUID(),
		title: "Usability Testing",
		description:
			"By putting responsiveness and device adaptability testing into action now, you can ensure compliance right away and save time and work later on.",
		icon: "icon-start-up",
	},
	{
		id: crypto.randomUUID(),
		title: "Development and support",
		description:
			"We ensure that everything runs smoothly and correctly while preserving a constant user experience. In order to make sure that the finished product appears and works as planned, the UX development support phase is essential.",
		icon: "icon-start-up",
	},
];
function WorkingApproach() {
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
						As the Top UI/UX Design Company in
Ahmedabad, We Take the Most
Challenging Projects and Deliver
Valuable Business Solutions.
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

export default WorkingApproach;
