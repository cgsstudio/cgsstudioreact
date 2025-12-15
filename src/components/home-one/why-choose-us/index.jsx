import Accordion from "./Accordion";
import AboutCounter from "../about/AboutCounter";
import Content from "./Content";
import ImageBox from './ImageBox';
function WhyChooseUs() {
	return (
		<div className="section bg-black">
			<div className="container">
				<div className="aximo-faq-wrap">
					<div className="row gy-4">
						<div className="col-lg-7 d-flex align-items-center">
							<Content />
						</div>
						<div className="col-lg-5">
							<ImageBox />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
