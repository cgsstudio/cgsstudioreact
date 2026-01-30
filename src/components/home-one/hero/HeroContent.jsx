import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/g-review.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<h1 className="home-title ">
				<span className=" home-heading text-red">
					Digital Marketing
				</span>{" "}
				Agency
			</h1>
			<p className="home-sub_description">
				{`Strategic Digital Solutions for Modern Brands `}
			</p>
			<p className="home-description">
				{`At Chameleo GFX Studio, we design and build digital solutions that help brands grow with confidence. By combining creative design, smart technology, and growth-focused strategy, we deliver websites, visuals, and marketing that create real impact online.`}
			</p>

			<div className="aximo-hero-user-wrap">
				<div className="aximo-hero-user-thumb">
					<div className="aximo-hero-user-thumb-item">
						<a href="https://www.google.com/search?q=Chameleo+Gfx+Studio&sca_esv=e4e61ca27f8efc23&sxsrf=AE3TifO9xMuKg9eFCUOBzWnxAj_TTKApCQ%3A1754918284800&ei=jO2ZaPjIMJeN4-EP9oidmAo&ved=0ahUKEwj4vuaH7IKPAxWXxjgGHXZEB6MQ4dUDCBA&oq=Chameleo+Gfx+Studio&gs_lp=Egxnd3Mtd2l6LXNlcnAiE0NoYW1lbGVvIEdmeCBTdHVkaW9IAFAAWABwAHgBkAEAmAEAoAEAqgEAuAEMyAEAmAIAoAIAmAMAkgcAoAcAsgcAuAcAwgcAyAcA&sclient=gws-wiz-serp#lrd=0x395e8352576c9bb7:0xb31b06ef9227d5e4,3,,,," target="_blank"><img src={User1Img} alt="User1Img" /></a>
					</div>
					{/* <div className="aximo-hero-user-thumb-item">
						<img src={User3Img} alt="User3Img" />
					</div>
					<div className="aximo-hero-user-thumb-item">
						<img src={User2Img} alt="User2Img" />
					</div> */}
				</div>
				<div className="aximo-hero-user-data">
					<p>Believed by more than a thousand people</p>
				</div>
			</div>
			<a className="aximo-call-btn home-hero-btn" href="tel:+918460384838">
				Book A Free Consultation <i className="icon-call"></i>
			</a>
			{/* <div className="aximo-hero-shape">
				<img className="shape-color" src={ShapeImg} alt="ShapeImg" />
			</div> */}
		</div>

	);
}

export default HeroContent;
