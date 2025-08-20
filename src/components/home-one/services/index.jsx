import Star2Img from "../../../assets/images/v1/star2.png";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";

function Services({ services }) {
	return (
		<div className="section ">
			<div className="container">
				<div className="aximo-section-title center">
					<h2>
					Innovative Services
						{/* <span className="aximo-title-animation"> */}
							{/* <span className="aximo-title-icon">
								<img src={Star2Img} alt="Star2Img" />
							</span> */}
						{/* </span> */}
					</h2>
					
				</div>
				<div className="aximo-service-wrap">
					<div className="row gy-4">
					{services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
					</div>
				</div>
				<Link className="aximo-call-btn main" to="/service">
				View More Services
			</Link>
			</div>
		</div>
	);
}

export default Services;
