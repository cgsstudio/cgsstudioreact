import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";
import Accordion from "../why-choose-us/Accordion";

function About() {
	return (
		<div className="section aximo-section-padding">
			<div id="aximo-counter"></div>
			<div className="container">
				<div className="aximo-section-title">
					<div className="row">
						<div className="col-lg-7">
							<h2>
								<span className="aximo-title-animation">
									We make your
									<span className="aximo-title-icon">
										<img className="shape-color" src={Star2Img} alt="Star2Img" />
									</span>
								</span>{" "}
								business stand out
							</h2>
						</div>
						<div className="col-lg-4 offset-lg-1 d-flex align-items-center">
							<p>
								At Chameleo GFX Studio, we believe the best results come from true collaboration. That’s why we work closely with you to understand your goals, your audience, and your unique needs. Together, we create practical and creative design solutions that bring your vision to life and connect deeply with the people who matter most to your brand.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<Video />
					</div>
					<div className="col-lg-4">
						<Accordion/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
