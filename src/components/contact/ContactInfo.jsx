import Call2Img from "../../assets/images/icon/call2.svg";
import EmailImg from "../../assets/images/icon/email.svg";
import MapImg from "../../assets/images/icon/map.svg";
import Star2Img from "../../assets/images/v1/star2.png";
import { Link } from "react-router-dom";

function ContactInfo() {
	return (
		<div className="aximo-contact-info-section">
			<div className="container">
				<div className="aximo-contact-info-title">
					<h2>
						<span className="aximo-title-animation">
							Contact Information
							<span className="aximo-title-icon">
								<img className="shape-color" src={Star2Img} alt="Star" />
							</span>
						</span>
					</h2>
				</div>
				<div className="row">
					<div className="col-xl-4 col-md-6">
						<div className="aximo-contact-info-box">
							<div className="aximo-contact-info-icon">
								<img src={Call2Img} alt="Call Img" />
							</div>
							<div className="aximo-contact-info-data">
								<span>Call us</span>
								<p>
									<a href="tel:+918460384838">+91-846-038-4838</a>
								</p>
								<p>
									<a href="tel:+919737472636">+91-973-747-2636</a>
								</p>
								
							</div>
						</div>
					</div>
					<div className="col-xl-4 col-md-6">
						
							<div className="aximo-contact-info-box">
								<div className="aximo-contact-info-icon">
									<img src={EmailImg} alt="Email" />
								</div>
								<div className="aximo-contact-info-data">
									<span>Email</span>
									<p><Link to="mailto:info@chameleogfxstudio.com">info@chameleogfxstudio.com</Link></p>
									<p><Link to="mailto:career@chameleogfxstudio.com">career@chameleogfxstudio.com</Link></p>
								</div>
								
								
							</div>
						
					</div>
					<div className="col-xl-4 col-md-6">
						<Link to ="https://maps.app.goo.gl/HWhQ7CrLo7C3LoUP9" target="_blank">
							<div className="aximo-contact-info-box">
								<div className="aximo-contact-info-icon">
									<img src={MapImg} alt="Map" />
								</div>
								<div className="aximo-contact-info-data">
									<span>Office address</span>
									<p>F-1001, PNTC, Ahmedabad, Gujarat, India-380015</p>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactInfo;
